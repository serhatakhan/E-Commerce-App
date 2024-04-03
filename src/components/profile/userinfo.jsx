import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constants';
import AppColors from '../../theme/colors';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user.jpeg')}
        style={{width: width * 0.46, height: width * 0.46, resizeMode: 'contain'}}
      />

      <Text style={{fontWeight: "800", fontSize: 18, marginVertical: 10}}>Serhat Akhan</Text>
      <Text style={{fontWeight: "700", fontSize: 16, color: AppColors.GRAY, marginBottom: 10}}>Mobile Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
});

export default UserInfo;
