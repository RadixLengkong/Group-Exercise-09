import { StyleSheet, View, Text, TextInput as RNTextInput } from 'react-native';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  title: {
    fontWeight: 500,
    color: '#000'
  },
  textInput: {
    marginTop: 8,
    padding: 10,
    color: '#000',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5C5C5'
  }
});

export default function({ title, placeholder='', value, keyboardType, onChangeText}) {
  return (
    <View>
      <Text style={[globalStyles.mediumText, styles.title]}>{title}</Text>
      <RNTextInput
        style={[globalStyles.mediumText, styles.textInput]}
        placeholder={placeholder}
        placeholderTextColor='#DED5D5'
        value={value}
        keyboardType={keyboardType}
        onChangeText={text => onChangeText((title.charAt(0).toLowerCase()+title.slice(1)).replace(/\s/g, ''), text)}
      />
    </View>
  );
};
