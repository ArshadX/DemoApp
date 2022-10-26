import * as React from 'react';
import {useState} from 'react';
import FC from 'react';

import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import Forms from '../../components/Forms';
import {useAppDispatch} from '../../hooks/StoreHooks';
import TabBar from '../../components/TabBar';
import {login} from '../../store/user/reducer';
import {
  changeEmail,
  changePassword,
  changeUsername,
} from '../../utils/validations';
import {alertbox} from '../../utils/alertbox';
const Login = () => {
  const [loginActive, setLoginActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);
  const dispatch = useAppDispatch();
  //login from
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //validity
  const [isValidEmail, setValidEmail] = useState(true);
  const [isBlankEmail, setBlankEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(true);
  const [isBlankPassword, setisBlankPassword] = useState(false);
  //registration form
  const [username, setUsername] = useState('');
  const [isValidUsername, setisValidUsername] = useState(true);
  const [isBlankUsername, setisBlankUsername] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  //validity register
  const [isValidRegisterEmail, setValidRegisterEmail] = useState(true);
  const [isBlankRegisterEmail, setBlankRegisterEmail] = useState(false);
  const [isValidRegisterPassword, setValidRegisterPassword] = useState(true);
  const [isBlankRegisterPassword, setisBlankRegisterPassword] = useState(false);

  const clearState = () => {
    setValidEmail(true);
    setBlankEmail(false);
    setValidRegisterEmail(true);
    setisBlankPassword(false);
    setisBlankUsername(false);
    setisBlankRegisterPassword(false);
    setBlankRegisterEmail(false);
    setEmail('');
    setPassword('');
    setUsername('');
    setRegisterEmail('');
    setValidPassword(true);
    setRegisterPassword('');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3a53fc" />
      <LinearGradient
        colors={['#3a53fc', '#2c74ff', '#3f90ff', '#62aaff', '#8bc2ff']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            orci ligula. Donec ultricies nulla fermentum lacus euismod auctor.
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.main}>
        <TabBar
          loginActive={loginActive}
          setLoginActive={setLoginActive}
          setSignUpActive={setSignUpActive}
          signUpActive={signUpActive}
          clearState={clearState}
        />
        <View style={styles.card}>
          {loginActive ? (
            <View style={styles.fromContainer}>
              <View style={styles.textInputView}>
                <Forms
                  iconName="email-outline"
                  placeholder="email"
                  onChangeText={(text) =>
                    changeEmail(text, setEmail, setValidEmail, setBlankEmail)
                  }
                />
                {isValidEmail ? null : (
                  <Text style={styles.errorText}>Invalid</Text>
                )}
                {isBlankEmail ? (
                  <Text style={styles.errorText}>Required</Text>
                ) : null}
              </View>
              <View style={styles.textInputView}>
                <Forms
                  iconName="lock-outline"
                  placeholder="password"
                  onChangeText={(text) =>
                    changePassword(
                      text,
                      setPassword,
                      setValidPassword,
                      setisBlankPassword,
                    )
                  }
                />
                {isValidPassword ? null : (
                  <Text style={styles.errorText}>Invalid</Text>
                )}
                {isBlankPassword ? (
                  <Text style={styles.errorText}>Required</Text>
                ) : null}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Login"
                  onPress={() => {
                    if (email !== '' && password !== '') {
                      dispatch(login(true));
                    } else if (email == '' && password == '') {
                      setBlankEmail(true);
                      setisBlankPassword(true);
                    }
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={styles.fromContainer}>
              <View style={styles.textInputView}>
                <Forms
                  iconName="account-outline"
                  placeholder="username"
                  onChangeText={(text) =>
                    changeUsername(
                      text,
                      setUsername,
                      setisValidUsername,
                      setisBlankUsername,
                    )
                  }
                />
                {isValidUsername ? null : (
                  <Text style={styles.errorText}>Invalid</Text>
                )}
                {isBlankUsername ? (
                  <Text style={styles.errorText}>Required</Text>
                ) : null}
              </View>
              <View style={styles.textInputView}>
                <Forms
                  iconName="email-outline"
                  placeholder="email"
                  onChangeText={(text) =>
                    changeEmail(
                      text,
                      setRegisterEmail,
                      setValidRegisterEmail,
                      setBlankRegisterEmail,
                    )
                  }
                />
                {isValidRegisterEmail ? null : (
                  <Text style={styles.errorText}>Invalid</Text>
                )}
                {isBlankRegisterEmail ? (
                  <Text style={styles.errorText}>Required</Text>
                ) : null}
              </View>
              <View style={styles.textInputView}>
                <Forms
                  iconName="lock-outline"
                  placeholder="password"
                  onChangeText={(text) =>
                    changePassword(
                      text,
                      setRegisterPassword,
                      setValidRegisterPassword,
                      setisBlankRegisterPassword,
                    )
                  }
                />
                {isValidRegisterPassword ? null : (
                  <Text style={styles.errorText}>Invalid</Text>
                )}
                {isBlankRegisterPassword ? (
                  <Text style={styles.errorText}>Required</Text>
                ) : null}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Register"
                  onPress={() => {
                    if (registerEmail !== '' && registerPassword !== '') {
                      alertbox({
                        onPressYes: () => {
                          setLoginActive(true);
                          if (signUpActive == true) {
                            setSignUpActive(false);
                            clearState();
                          }
                        },
                        title: 'Successful',
                        info: 'its not actually storing any information because it is demo test app (you can log in with any valid email and password)',
                      });
                    } else if (
                      username == '' &&
                      registerEmail == '' &&
                      registerPassword == ''
                    ) {
                      setBlankRegisterEmail(true);
                      setisBlankRegisterPassword(true);
                      setisBlankUsername(true);
                    }
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>

      <Image
        source={require('../../assets/guest-post.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  main: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    height: 500,
    top: -70,
  },
  card: {
    paddingTop: 50,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerContent: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  textStyle: {
    color: '#fff',
  },
  textInputView: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  fromContainer: {
    justifyContent: 'center',
    paddingBottom: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  linkStyle: {
    color: '#7756FF',
  },
  linkView: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginVertical: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageStyle: {
    minWidth: 10,
    minHeight: 10,
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  errorText: {
    color: '#ff0000',
    marginLeft: 10,
  },
});

export default Login;
