import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constants';
import AppColors from '../../theme/colors';
import Button from '../../components/ui/button';
import Counter from '../../components/ui/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/ui/spinner';
import {Heart, HeartAdd, Star} from 'iconsax-react-native';
import StoreContext from '../../context';
import { LOGIN } from '../../utils/routes';

// * diğer sayfalardan bu sayyafa yönlendirme yapıp yanında veri de yolladıysak,
// bu şekilde parametreye {route} yazarak alabiliriz. {item:item} şeklinde item yolladık.
const ProductDetail = ({route, navigation}) => {
  // item'a böyle erişiyoruz. ? koymayı unutma. item gelmeyedebilir.
  const {item} = route?.params;

  // gelen ürün için state
  const [product, setProduct] = useState(null);
  // ürün gelen kadar ki yüklenme için state
  const [isLoading, setIsLoading] = useState(false);

  // context'in içindeki addCart fonksiyonuna eriş(aşağıdaki butona ver)
  const {addCart, addToFavorites, isLogin} = useContext(StoreContext)


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
  

  const getProductDetail = () => {
    setIsLoading(true);

    // belirli bir ürünü getir (tıklanan ürünü getir)
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <View style={screenStyle.container}>
        {/* BURADA BİR LİSTE YOK, SADECE ÜRÜN DETAYLARI VAR. O YÜZDEN SCROLLVIEW */}
        {isLoading ? (
          <Spinner />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ScrollView içinde flex: 1 işlemiyor. burada height verilebilir. bizim için buna gerek yok. içerik eklendikçe aşağı doğru büyüyecek zaten. */}
            <View>
              <Image
                source={{uri: product?.image}}
                style={{
                  width: width,
                  height: width * 0.6,
                  resizeMode: 'contain',
                }}
              />
              <View style={{flexDirection: 'row'}}>

                <View style={{flex: 3, marginVertical: 20}}>
                  <Text numberOfLines={2} style={{fontWeight: "700", fontSize: 20}}>{product?.title}</Text>
                  <Text numberOfLines={2} style={{fontWeight: "500", fontSize: 15, marginVertical: 15, textTransform: "capitalize", color:AppColors.GRAY}}>{product?.category}</Text>
                  <Text numberOfLines={2} style={{fontWeight: "700", fontSize: 20, marginBottom: 5}}>${product?.price}</Text>
                  <View style={{marginVertical: 5, flexDirection: "row", alignItems: "center"}}>
                    <Star color={AppColors.PRIMARY} variant={"Bold"} size={26} />
                    <Text numberOfLines={2} style={{fontWeight: "600", fontSize: 17, marginHorizontal: 5}}>{product?.rating?.rate} / {product?.rating?.count}</Text>
                  </View>
                </View>

                <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", padding: 5}}>
                  <TouchableOpacity onPress={()=> checkIsLogin()} style={{backgroundColor: AppColors.SOFTGRAY, padding: 5, borderRadius: 100}}>
                        {   item.favorite 
                            ? <Heart size={20} color={AppColors.RED} variant='Bold' />
                            : <HeartAdd size={20} color={AppColors.BLACK} />
                        }
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{fontWeight: "400", fontSize: 16, marginVertical: 5, textTransform: "capitalize", color:AppColors.BLACK}}>{product?.description}</Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
      {/* absolute ile burayı screen'in aşağısına sabitlemiş olduk */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: AppColors.WHITE,
          flexDirection: 'row',
          gap: 10,
          borderTopWidth: 1,
          borderColor: AppColors.SOFTGRAY,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* Counter'ın içindeki sayıyı bu componente taşıdık */}
          <Counter onChange={value => console.log(value)} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button title={'Add to cart'} onPress={()=> addCart(item)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
