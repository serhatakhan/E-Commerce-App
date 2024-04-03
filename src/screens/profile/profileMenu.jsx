import {
  ArrowRight2,
  Card,
  Heart,
  Location,
  MonitorRecorder,
  Notification,
  UserEdit,
} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';

const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Edit Profile',
      icon: <UserEdit size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Shopping Adress',
      icon: <Location size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Wishlist',
      icon: <Heart size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Order History',
      icon: <MonitorRecorder size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Notifications',
      icon: <Notification size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Cards',
      icon: <Card size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.icon}
            <Text style={{fontSize: 17, marginLeft: 15, fontWeight: '600'}}>
              {item.title}
            </Text>
          </View>
          <ArrowRight2 size="26" color={AppColors.GRAY} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileMenu;
