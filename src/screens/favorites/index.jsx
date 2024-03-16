import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppColors from '../../theme/colors';

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.WHITE,
    },
});

export default Favorites;
