import { View } from 'react-native';

export default function Gap({h=0, w=0}) {
  return(
    <View style={{height: h, width: w}} />
  );
}
