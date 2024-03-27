import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Checkout = () => {
    return (
        <View style={styles.container}>
            <Text>Checkout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Checkout;
