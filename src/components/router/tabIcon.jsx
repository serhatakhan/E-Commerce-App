import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppColors from '../../theme/colors';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../../utils/routes';
import {
  Category2,
  Home,
  ProfileCircle,
  SearchFavorite,
} from 'iconsax-react-native';

const TabIcon = ({name, size, color}) => {
  if (name === HOME) {
    return <Home size={size} color={color} variant="Bold" />;
  } else if (name === CATEGORIES) {
    return <Category2 size={size} color={color} variant="Bold" />;
  } else if (name === FAVORITES) {
    return <SearchFavorite size={size} color={color} variant="Bold" />;
  } else {
    return <ProfileCircle size={size} color={color} variant="Bold" />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
});

export default TabIcon;
