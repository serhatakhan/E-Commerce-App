import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AddCircle, MinusCirlce } from 'iconsax-react-native';
import AppColors from '../../theme/colors';

const Counter = ( {onChange, size=29} ) => {
    // 'size' proportysi tanımladık. Bu ne için? Bu Counter 
    // bileşenini farklı sayfalarda çağırdığımızda, çağırdığımız 
    // sayfaya özel size vermek için böyle yaptık. Çağırdığımız sayfalarda istediğimiz boyuta sokabilelim diye.
    // * size=29 demek, varsayılan büyüklüğü 29 olsun demek. defaultu 29 olsun yani.

    const [count, setCount] = useState(0)

    /*
    const decrease = ()=>{
        if(count>0){
            setCount(count - 1)
        }
    }

    const increase = ()=>{
        if(count<5){
            setCount(count + 1)
        }
    }
    */

    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={count===0} onPress={()=> {
                setCount(count - 1) 
                onChange(count-1)}} style={styles.button}>
                <MinusCirlce size={size} color={AppColors.BLACK} />
            </TouchableOpacity>
            <Text style={{fontSize: 17, flex: 1, textAlign: "center"}}>{count}</Text>
            <TouchableOpacity disabled={count===5} onPress={()=> {
                setCount(count + 1) 
                onChange(count + 1)}} style={styles.button}>
                <AddCircle size={size} color={AppColors.BLACK} variant="Bold" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: AppColors.SOFTGRAY,
        padding: 3,
        borderRadius: 100
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Counter;
