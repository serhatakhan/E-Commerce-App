import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { width } from '../../utils/constants';
import AppColors from '../../theme/colors';
import Counter from '../ui/counter';

const CartCard = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Image source={{uri: item.image}} style={{width: width*0.16, height: width*0.16, resizeMode: "contain", alignSelf: "center"}} />
            </View>

            <View style={{flex: 3, paddingHorizontal: 10}}>
                <Text numberOfLines={1} style={{flex:1, fontWeight: "700", marginVertical: 5, fontSize: 14, color: AppColors.BLACK}}>{item.title}</Text>
                <Text style={{fontWeight: "600", marginVertical: 5, fontSize: 14, color: AppColors.GRAY, textTransform: "capitalize"}}>{item.category}</Text>
                <Text style={{fontWeight: "700", marginVertical: 5, fontSize: 14, color: AppColors.BLACK}}>${item.price}</Text>
            </View>

            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
                {/* Counter'ın default size'ı 29 ama biz şimdi 20 ayarladık. açıklaması Counter.jsx de. */}
                <Counter onChange={value => console.log(value)} size={20} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
});

export default CartCard;
