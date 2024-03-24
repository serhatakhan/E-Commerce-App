import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColors from '../../theme/colors';

const Button = (props) => {
    // propsun altından gelen bir title
    const {title} = props
    return (
        // {...props} -> dışardan gelen tüm propsları al diyoruz
        <TouchableOpacity {...props} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.PRIMARY,
        borderRadius: 100,
        padding: 10,
        // marginTop: 5
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: AppColors.BLACK,
    }
});

export default Button;
