import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {useAppSelector} from '../hooks/StoreHooks';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootNav = () => {
  const isLoggedIn = useAppSelector(state => state.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNav;
