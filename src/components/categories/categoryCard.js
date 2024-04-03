import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColors from '../../theme/colors';
import { height } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../../utils/routes';
import { ArrowRight2 } from 'iconsax-react-native';

const CategoryCard = ({item}) => {
    const navigation =  useNavigation()

    return (
        <TouchableOpacity onPress={()=> navigation.navigate(PRODUCTLIST, {category: item, title: item})} style={styles.container}>
            <Text style={{textTransform: "capitalize", fontSize: 24, fontWeight: "600"}}>{item}</Text>
            <ArrowRight2 size={30} color={AppColors.BLACK} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: AppColors.SOFTGRAY,
        padding: 10,
        minHeight: height/7,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        borderRadius: 5
    },
});

export default CategoryCard;
