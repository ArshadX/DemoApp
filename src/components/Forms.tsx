import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type props = {
  iconName: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};
const Forms: React.FC<props> = ({
  iconName,
  placeholder,
  onChangeText,
}: props) => {
  const [active, setActive] = React.useState(false);
  return (
    <View style={[styles.input, active ? styles.active : styles.inActive]}>
      <Icon name={iconName} size={20} />
      <TextInput
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChangeText={onChangeText}
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
  },
  active: {
    borderColor: '#7756FF',
  },
  inActive: {
    borderColor: '#000',
  },
  textInput: {
    flex: 1,
  },
});
export default Forms;
