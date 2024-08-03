import { Image, StyleSheet, Platform, View, Text, TextInput, Dimensions, Button } from 'react-native';
import { useState} from 'react'

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const doLogin = () => {
    alert(name)
  }
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.input]}
        placeholder='Enter your name'
        value={name}
        onChangeText={(text) => setName(text)}


      />

     <TextInput
        style={[styles.input]}
        placeholder='Enter your password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}


      />

      <View style={[styles.btn]}>

         <Button title='Login' onPress={doLogin}></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  btn: {
    margin: 10,

  },

});
