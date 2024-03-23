import {StyleSheet} from 'react-native';
import AppColors from '../theme/colors';

const screenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 10,
  },
});

export {screenStyle};
// burada başka bir şey de yazabiliriz diye obje şeklinde export ettik
// başka bir şey yazmasaydık default ile export ederdik
