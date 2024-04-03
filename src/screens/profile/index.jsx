import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StoreContext from '../../context';
import UserInfo from '../../components/profile/userinfo';
import ProfileMenu from './profileMenu';
import {screenStyle} from '../../styles/screenStyle';
import {Button} from '@ui-kitten/components';
import { LOGIN } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {isLogin} = useContext(StoreContext);

  const navigation = useNavigation()

  return (
    <View style={screenStyle.container}>
      {/* burada statik bir değişken tanımladık o yüzden flatlist kullanmadık scrollview kullandık */}
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Please log in to see your account.</Text>

            <Button
            size='large'
              onPress={() => navigation.navigate(LOGIN)}
              style={{marginVertical: 10}}
              status="warning">
              Log in
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Profile;
