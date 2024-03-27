import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../ui/button';
import AppColors from '../../theme/colors';
import StoreContext from '../../context';

const Summary = () => {
    const {isLogin} = useContext(StoreContext)

    const checkOut = () => {
        if(isLogin){

        }else {
            Alert.alert("Lütfen giriş yapınız")
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
                <Text style={{fontWeight: "700"}}>$800</Text>
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
