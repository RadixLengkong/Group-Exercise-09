import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Gap } from '../components';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  user: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5C5C5'
  },
  text: {
    color: '#000'
  },
  keyText: {
    fontWeight: 700,
  }
});

const User = ( { data }) => {
  return (
    <View style={styles.user}>
      <Text style={[globalStyles.mediumText, styles.text]}><Text style={styles.keyText}>Name: </Text>{data.name}</Text>
      <Text style={[globalStyles.mediumText, styles.text]}><Text style={styles.keyText}>Username: </Text>{data.username}</Text>
      <Text style={[globalStyles.mediumText, styles.text]}><Text style={styles.keyText}>Email: </Text>{data.email}</Text>
      <Text style={[globalStyles.mediumText, styles.text]}><Text style={styles.keyText}>Address: </Text>{data.address}</Text>
      <Text style={[globalStyles.mediumText, styles.text]}><Text style={styles.keyText}>Phone: </Text>{data.phoneNumber}</Text>
    </View>
  );
};

export default function({ route }) {
  const { userList } = route.params;

  return (
    <ScrollView style={globalStyles.screen}>
      <Text style={globalStyles.title}>Users List</Text>
      <Gap h={10} />
      {userList.map((data, index) => <User key={index} data={data} />)}
    </ScrollView>
  );
};
