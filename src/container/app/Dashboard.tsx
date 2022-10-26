import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import {RootStackParamList} from '../../navigations/AppStack';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ScrollView,
  Pressable,
} from 'react-native';
import Card from '../../components/Card';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../../components/CustomModal';
type postObject = {
  postId: 1;
  id: number;
  name: string;
  email: string;
  body: string;
  key: Number;
};
type dashProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;
const Dashboard: FC<dashProps> = ({navigation}: dashProps) => {
  const [data, setData] = React.useState<postObject[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  async function listItem() {
    setIsLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    listItem();
  }, []);
  return (
    <View style={styles.container}>
      <CustomModal
        text="loading..."
        loadingIndicator={true}
        visible={isLoading}
      />
      <ScrollView>
        {data.map((item) => (
          <Pressable
            onPress={() => navigation.navigate('Details', {body: item.body})}
            key={item.id}>
            <Card
              id={item.id}
              name={item.name}
              postId={item.postId}
              body={item.body}
              email={item.email}
              key={item.id}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 4,
  },
  footer: {
    backgroundColor: 'red',
  },
});
export default Dashboard;
