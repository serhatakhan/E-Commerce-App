import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';

const Categories = () => {
  // gelen kategorileri state'e at
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // kategorileri alan fonk
  const getCategories = () => {
    setIsLoading(true);

    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activeCategory: {
    padding: 12,
    backgroundColor: AppColors.PRIMARY,
    marginRight: 8,
    borderRadius: 100,
  },
  inactiveCategory: {
    padding: 12,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});

export default Categories;
