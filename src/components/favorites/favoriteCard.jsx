import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { width } from '../../utils/constants';
import AppColors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';

const FavoriteCard = ({item}) => {
    const navigation = useNavigation()

    return (
        // gönderirken de item'ı yollamamız lazım
        <Pressable style={styles.container} onPress={()=> navigation.navigate(PRODUCTDETAIL, {item: item})} >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Image source={{uri: item.image}} style={{width: width*0.2, height: width*0.2, resizeMode: "contain", alignSelf: "center"}} />
            </View>

            <View style={{flex: 3, paddingHorizontal: 10}}>
                <Text numberOfLines={2} style={{flex:1, fontWeight: "700", marginVertical: 5, fontSize: 14, color: AppColors.BLACK}}>{item.title}</Text>
                <Text style={{fontWeight: "600", marginVertical: 5, fontSize: 14, color: AppColors.GRAY, textTransform: "capitalize"}}>{item.category}</Text>
                <Text style={{fontWeight: "700", marginVertical: 5, fontSize: 14, color: AppColors.BLACK}}>${item.price}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
});

export default FavoriteCard;
