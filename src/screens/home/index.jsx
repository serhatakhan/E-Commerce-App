import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/screenStyle';

const Home = () => {
  const renderItem = ({item}) => {
    // data={widgets} olduğu için onunla alakalı veriler geliyor. içinde {item} var. prop olarak onu istedik. item içindeki componentler var onları render edeceğiz
    return (
        <View>
            {item.isShow && item.component}
        </View>
    )
  };

  return (
    <View style={screenStyle.container}>
      <FlatList data={widgets} renderItem={renderItem} showsVerticalScrollIndicator={false} />
    </View>
  );
};

export default Home;
