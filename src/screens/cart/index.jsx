import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import StoreContext from '../../context';
import CartCard from '../../components/cart/cartCard';
import { screenStyle } from '../../styles/screenStyle';
import Summary from '../../components/cart/summary';

const Cart = () => {
  // context'in içindeki cart'a eriş. içinde sepete eklenen ürünler var.
  const {cart} = useContext(StoreContext);

  return (
    <View style={screenStyle.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 25, marginTop: 5}}
        showsVerticalScrollIndicator={false}
        data={cart}
        // datamız olan cart'ların her birine item demiş oluyoruz renderItem da.
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={(item)=> item.id}
      />
      <Summary />
    </View>
  );
};

export default Cart;
