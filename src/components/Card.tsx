import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type postObject = {
  postId: 1;
  id: Number;
  name: string;
  email: string;
  body: string;
  key: Number;
};
const Card = ({id, name, body, email}: postObject) => {
  return (
    <LinearGradient
      colors={['#3a53fc', '#2c74ff', '#3f90ff', '#62aaff', '#8bc2ff']}
      style={styles.container}>
      <View style={styles.cardContent}>
        <View>
          <Image
            source={require('../assets/user.png')}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.bodyText}>{email}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 20,
    padding: 10,
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  title: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#fff',
    fontSize: 11,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 80,
  },
  infoContainer: {
    marginLeft: 5,
  },
});

export default Card;
