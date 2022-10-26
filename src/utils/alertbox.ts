import {Alert} from 'react-native';
type onPressType = {
  title: string;
  info: string;
  onPressYes?: (value?: string | undefined) => void;
};
export const alertbox = ({onPressYes, title, info}: onPressType) => {
  Alert.alert(title, info, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'yes', onPress: onPressYes},
  ]);
};
