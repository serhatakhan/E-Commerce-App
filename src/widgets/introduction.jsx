import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constants';
import AppColors from '../theme/colors';

const Introduction = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/nike-3.webp')} style={styles.image} />
      <TouchableOpacity style={{position: "absolute", bottom: 24, right: 12, backgroundColor:AppColors.WHITE, width: width*0.4, height: height*0.04, justifyContent: "center", alignItems: "center", borderRadius: 10, borderWidth: 2, borderColor: AppColors.BLACK}}>
        <Text style={{color: AppColors.BLACK, fontSize: 16, fontWeight: "600"}}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default Introduction;
