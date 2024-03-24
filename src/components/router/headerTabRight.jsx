import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AppColors from '../../theme/colors';
import { SearchNormal1, ShoppingCart } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../../utils/routes';

const HeaderTabRight = () => {
  // badge'nin state'ini tut
  const [count, setCount] = useState(1)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal1 size="28" color={AppColors.BLACK} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate(CART)} style={styles.button}>
        { count > 0 && ( <View style={{backgroundColor: AppColors.PRIMARY, justifyContent: "center", alignItems: "center", width: 20, height: 20, borderRadius:100, position: "absolute", zIndex: 99, right: -9, top: -8}}><Text style={{color: AppColors.BLACK, fontSize: 12, fontWeight: "600"}}>{count}</Text></View> ) }
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
