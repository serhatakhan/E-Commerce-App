import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../ui/button';
import AppColors from '../../theme/colors';
import StoreContext from '../../context';
import { useNavigation } from '@react-navigation/native';
import { CHECKOUT, LOGIN } from '../../utils/routes';

const Summary = () => {
    const {isLogin, cart} = useContext(StoreContext)

    const navigation = useNavigation()

    // toplam fiyat hesapla
    function totalPrice(){
        return cart.reduce((acc, product)=> acc + product.price, 0) 
    }

    const checkOut = () => {
        if(isLogin){
            navigation.navigate(CHECKOUT)
        }else {
            Alert.alert('Login', 'You must login to purchase products.', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Login', onPress: () => navigation.navigate(LOGIN)},
              ]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 8}}>
                <Text style={{color: AppColors.GRAY, fontWeight: "800"}}>Subtotal</Text>
                <Text style={{fontWeight: "700"}}>$800</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 8}}>
                <Text style={{color: AppColors.GRAY, fontWeight: "800"}}>Delivery Fee</Text>
                <Text style={{fontWeight: "700"}}>$800</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 8}}>
                <Text style={{color: AppColors.GRAY, fontWeight: "800"}}>Discount</Text>
                <Text style={{fontWeight: "700"}}>$800</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                <Text style={{color: AppColors.GRAY, fontWeight: "800"}}>Total</Text>
                <Text style={{fontWeight: "700"}}>${totalPrice().toFixed(2)}</Text>
            </View>

            <Button title={"Check out"} onPress={()=> checkOut()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderColor: AppColors.SOFTGRAY
    },
});

export default Summary;
