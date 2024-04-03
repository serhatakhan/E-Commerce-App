import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppColors from '../../theme/colors';
import {height} from '../../utils/constants';
import {Button} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../../utils/routes';

const ListEmptyComponent = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          You haven't added any products to your cart yet.
        </Text>

        <Button onPress={()=> navigation.navigate(PRODUCTLIST)} style={styles.button} status="warning">All Products</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 2,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    marginTop: 30
  }
});

export default ListEmptyComponent;
