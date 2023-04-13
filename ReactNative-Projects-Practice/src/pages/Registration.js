import { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Gap, TextInput, Button } from '../components';
import globalStyles from '../globalStyles';

export default function({ navigation }) {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const sortedData = res.data.map(data => {
          return {
            name: data.name,
            username: data.username,
            email: data.email,
            address: `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`,
            phoneNumber: data.phone
          };
        });
        
        setUserList(sortedData);
      })
      .catch(err => {
        console.log(`Unable to fetch data.`, err);
      });
  }, []);

  function inputUser(key, value) {
    // console.log(`key = ${key} | value = ${value}`);
    setUser({...user, [key]: value});
  }

  function registerUser() {
    setUserList([user, ...userList]);
    navigation.navigate('User List', {userList: [user, ...userList]});
  }

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>Registration</Text>
      <Gap h={40} />
      <TextInput
        title='Name'
        placeholder='Masukkan nama lengkap anda'
        value={user.name}
        keyboardType='default'
        onChangeText={inputUser}
      />
      <Gap h={20} />
      <TextInput
        title='Username'
        placeholder='Masukkan username anda'
        value={user.username}
        keyboardType='default'
        onChangeText={inputUser}
      />
      <Gap h={20} />
      <TextInput
        title='Email'
        placeholder='Masukkan email anda'
        value={user.email}
        keyboardType='email-address'
        onChangeText={inputUser}
      />
      <Gap h={20} />
      <TextInput
        title='Address'
        placeholder='Masukkan alamat anda'
        value={user.address}
        keyboardType='default'
        onChangeText={inputUser}
      />
      <Gap h={20} />
      <TextInput
        title='Phone Number'
        placeholder='Masukkan nomor telepon anda'
        value={user.phoneNumber}
        keyboardType='phone-pad'
        onChangeText={inputUser}
      />
      <Gap h={30} />
      <Button title='Register' onPress={registerUser} />
    </View>
  );
};
