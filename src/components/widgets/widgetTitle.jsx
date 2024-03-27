import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../../utils/routes';

const WidgetTitle = ( {title, category} ) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 600, color: AppColors.BLACK}}>{title}</Text>
            {/* category verisini de taşısın istedik PRODUCTLIST sayfasına. */}
            <TouchableOpacity onPress={()=> navigation.navigate(PRODUCTLIST, {category: category, title: title})} >
                <Text style={{color:AppColors.GRAY, fontSize: 16, fontWeight: 500}}>See All</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 13
    },
});

export default WidgetTitle;
