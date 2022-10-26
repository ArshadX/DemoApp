import * as React from 'react';
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';

{
  /*
layout coonfiguration
  */
}
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

{
  /**
object of the fucntional component
 */
}
type Props = {
  loginActive: boolean;
  signUpActive: boolean;
  setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpActive: React.Dispatch<React.SetStateAction<boolean>>;
  clearState: Function;
};
const TabBar: React.FC<Props> = ({
  loginActive,
  signUpActive,
  setLoginActive,
  setSignUpActive,
  clearState,
}: Props) => {
  return (
    <View style={styles.navigation}>
      <Pressable
        style={() => [loginActive ? styles.active : styles.inActive]}
        android_ripple={{radius: 100, color: '#000'}}
        onPress={() => {
          setLoginActive(() => !loginActive);
          if (signUpActive === true) {
            setSignUpActive(false);
            clearState();
          }
          LayoutAnimation.configureNext({
            duration: 500,
            create: {type: 'easeIn', property: 'opacity'},
            update: {type: 'spring', springDamping: 1},
          });
        }}>
        <Text
          style={[
            loginActive ? styles.activeText : styles.inActiveText,
            styles.textStyle,
          ]}>
          Login
        </Text>
      </Pressable>
      <Pressable
        style={() => [signUpActive ? styles.active : styles.inActive]}
        onPress={() => {
          setSignUpActive(true);
          if (loginActive === true) {
            setLoginActive(false);
            clearState();
          }
          LayoutAnimation.configureNext({
            duration: 500,
            create: {type: 'easeOut', property: 'opacity'},
            update: {type: 'spring', springDamping: 1},
          });
        }}>
        <Text
          style={[
            signUpActive ? styles.activeText : styles.inActiveText,
            styles.textStyle,
          ]}>
          SignUp
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'space-evenly',
  },
  active: {
    borderBottomColor: '#562DFF',
    borderBottomWidth: 4,
    flexGrow: 0.1,
    alignItems: 'center',
  },
  inActive: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 5,
    flexGrow: 0.1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
  activeText: {
    color: '#562DFF',
  },
  inActiveText: {
    color: '#808080',
  },
});
export default TabBar;
