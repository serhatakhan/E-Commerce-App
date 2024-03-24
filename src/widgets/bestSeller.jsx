import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';
import CategorySelect from '../components/widgets/categorySelect';

const BestSeller = () => {
  // gelen verileri state'e at
  const [products, setProducts] = useState([]);

  // category="women's clothing" -> yaparak başlangıçta burası gelsin demiş olduk
  const getBestSellerProducts = (category="women's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5})
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} />
      {/* seçilen kategorinin ürünlerini prop olarak yolladık */}
      <CategorySelect onSelect={(value)=> getBestSellerProducts(value)} />
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

export default BestSeller;
