import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { width } from '../../utils/constants';
import AppColors from '../../theme/colors';
import { Heart, HeartAdd } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, PRODUCTDETAIL } from '../../utils/routes';
import StoreContext from '../../context';

const WidgetProductCard = ( {item} ) => {
    const navigation = useNavigation()

    const {addToFavorites, isLogin} = useContext(StoreContext)

       // kullanıcı giriş yapmış mı yapmamış mı
       const checkIsLogin = () => {
        if(isLogin){
            addToFavorites(item)
        }else {
            Alert.alert('Login', 'Log in to add to favorites.', [
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
        // gideceğimiz sayfaya veriyi taşıdık {item: item} yaparak
        <Pressable onPress={()=> navigation.navigate(PRODUCTDETAIL, {item: item})} style={styles.container}>
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
                    <TouchableOpacity onPress={()=> checkIsLogin()} >
                        {   item.favorite 
                            ? <Heart size={20} color={AppColors.RED} variant='Bold' />
                            : <HeartAdd size={20} color={AppColors.BLACK} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
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
