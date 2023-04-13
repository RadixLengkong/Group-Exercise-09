import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Registration, UserList } from './pages';

const Stack = createNativeStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Registration' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='User List' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
