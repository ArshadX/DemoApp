import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, Alert} from 'react-native';

import Dashboard from '../container/app/Dashboard';
import PostDetails from '../container/app/PostDetails';
import {useAppDispatch} from '../hooks/StoreHooks';
import {logout} from '../store/user/reducer';
import {globalStyle} from '../styles/globalStyle';
import {alertbox} from '../utils/alertbox';
export type RootStackParamList = {
  Dashboard: undefined;
  Details: {body: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() =>
                alertbox({
                  onPressYes: () => dispatch(logout()),
                  title: 'Logout!',
                  info: 'Are you sure?',
                })
              }>
              <Text style={globalStyle.textButton}>Logout</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="Details" component={PostDetails} />
    </Stack.Navigator>
  );
};
export default AppStack;
