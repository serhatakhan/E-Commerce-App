import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { width } from '../../utils/constants';
import AppColors from '../../theme/colors';
import { Heart } from 'iconsax-react-native';

const WidgetProductCard = ( {item} ) => {
    return (
        <View style={styles.container}>
            {/* image içerdeyse require kullanıyoruz ama bu proejedeki gibi dışardan url olarak alıyorsak uri kullanıyoruz. */}
            <Image source={{uri: item.image}} style={{width: width*0.4, height: width*0.3, resizeMode: "contain"}} />

            {/* flex:1 vererek bulunduğu alanı tam doldurmasını sağladık. bu sayede alttaki text bileşenlerinin biri üstte diğeri altta şeklindeki görüntüsünden kurtulduk */}
            <Text numberOfLines={2} style={{flex:1, fontWeight: "700", marginVertical: 6, fontSize: 14, color: AppColors.BLACK}}>{item.title}</Text>

            <View style={{flexDirection: "row"}}>
                <View style={{flex:4}}>
                    <Text style={{fontWeight: "600", marginVertical: 5, fontSize: 14, color: AppColors.GRAY}}>{item.category}</Text>

                    <Text style={{fontWeight: "700", marginVertical: 5, fontSize: 14, color: AppColors.BLACK}}>${item.price}</Text>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
                    <TouchableOpacity>
                        <Heart size={20} color={AppColors.RED} variant='Bold' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width*0.4,
        margin: 5,
        marginBottom: 10
    },
});

export default WidgetProductCard;
