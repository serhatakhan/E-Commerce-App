import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';

const NewArrival = () => {
  // gelen verileri state'e at
  const [products, setProducts] = useState([]);

  // {limit: 5} ile en fazla 5 tane ürün getirsin dedik. getRequest'i buna uygun yazdık zaten
  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/men's clothing", {limit: 5, sort: "desc"})
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getNewArrivalProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} category="men's clothing" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default NewArrival;
