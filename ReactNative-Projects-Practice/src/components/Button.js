import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  touchableOpacity: {
    borderRadius: 20,
    backgroundColor: '#C238CE'
  },
  title: {
    fontWeight: 500,
    color: '#FFFBFB',
    padding: 10,
    alignSelf: 'center'
  }
});

export default function({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPress()}>
      <Text style={[globalStyles.bigText, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};
