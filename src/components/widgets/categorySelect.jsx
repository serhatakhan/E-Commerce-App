import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

const CategorySelect = ( {onSelect} ) => {
  // gelen kategorileri state'e at
  const [categories, setCategories] = useState([]);
  // seçilen kategorinin state'i
  const [category, setCategory] = useState();

  // kategorileri alan fonk
  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  };

  // seçilen kategori renderItem'a verdiğimiz {item} sayesinde geliyor
  const selectCategory = category => {
    setCategory(category);
    // üst bileşene seçilen kategori verisini yolladık
    onSelect(category)
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={category===item ? styles.activeCategory : styles.inactiveCategory}>
        <Text style={{fontWeight: '400', textTransform: "capitalize"}}>
          {/* itemların direk kendisi geldiği için sadece item diye yazarak kategorileri ekrana alabiliyoruz */}
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 10,
  },
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

export default CategorySelect;
