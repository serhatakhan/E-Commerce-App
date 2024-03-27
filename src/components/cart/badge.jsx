import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppColors from '../../theme/colors';

const Badge = ({count}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 100,
        position: 'absolute',
        zIndex: 99,
        right: -9,
        top: -8,
      }}>
      <Text style={{color: AppColors.BLACK, fontSize: 12, fontWeight: '600'}}>
        {count}
      </Text>
    </View>
  );
};

export default Badge;
