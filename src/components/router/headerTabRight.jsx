import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AppColors from '../../theme/colors';
import { SearchNormal1, ShoppingCart } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../../utils/routes';
import Badge from '../cart/badge';
import StoreContext from '../../context';

const HeaderTabRight = () => {
  const {cart} = useContext(StoreContext)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal1 size="28" color={AppColors.BLACK} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate(CART)} style={styles.button}>
        { cart?.length > 0 && ( <Badge count={cart?.length} /> ) }
        <ShoppingCart size="28" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center"
  },
  button: {
    marginHorizontal: 8
  }
});

export default HeaderTabRight;
