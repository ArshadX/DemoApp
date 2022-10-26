import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RootStackParamList} from '../../navigations/AppStack';
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
const PostDetails = ({route}: Props) => {
  const {body} = route.params;
  return (
    <LinearGradient
      colors={['#3a53fc', '#2c74ff', '#3f90ff', '#62aaff', '#8bc2ff']}
      style={styles.container}>
      <Text style={styles.bodyText}>{body}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  bodyText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default PostDetails;
