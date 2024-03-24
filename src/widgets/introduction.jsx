import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constants';
import AppColors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../utils/routes';

const Introduction = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require('../assets/nike-4.png')} style={styles.image} />
      <TouchableOpacity onPress={()=> navigation.navigate(PRODUCTLIST)} style={{position: "absolute", bottom: 24, right: 12, backgroundColor:AppColors.SOFTGRAY, width: width*0.4, height: height*0.044, justifyContent: "center", alignItems: "center", borderRadius: 10, borderWidth: 2, borderColor: AppColors.BLACK}}>
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
