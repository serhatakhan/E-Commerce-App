import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import StoreContext from '../../context';
import FavoriteCard from '../../components/favorites/favoriteCard';
import ListEmptyComponent from '../../components/ui/listEmptyComponent';

const Favorites = () => {
  const {favorites} = useContext(StoreContext);

  return (
    <View style={screenStyle.container}>
      <FlatList
        ListEmptyComponent={() => <ListEmptyComponent />}
        contentContainerStyle={{paddingBottom: 25, marginTop: 5}}
        showsVerticalScrollIndicator={false}
        data={favorites}
        // datamız olan cart'ların her birine item demiş oluyoruz renderItem da.
        renderItem={({item}) => <FavoriteCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Favorites;
