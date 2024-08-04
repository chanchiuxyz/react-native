import { Image, StyleSheet, Platform, View, Text, TextInput, Dimensions, Button,
  TouchableHighlight,
  TouchableOpacity,
 } from 'react-native';
import { useState} from 'react'

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
const Separator = () => <View style={styles.separator} />;
export default function HomeScreen() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const doLogin = () => {
    // alert(name)
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

    <TextInput
        style={[styles.input]}
        placeholder='Enter your mobile'
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        keyboardType='number-pad'



      /> 
      <View style={[styles.btn]}>

        <Button title='-Login-' onPress={doLogin}></Button>
   
      </View>
      <Separator />

    
          <TouchableHighlight 
            onPress={() => {alert('touchablehighlight')}}
          >
              <View>
                <Text style={[styles.item]}>TouchableHighlight</Text>
              </View>
              

          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => {alert('touchableopacity')}}
          >
              <View>
                <Text style={[styles.item]}>TouchableHighlight</Text>
              </View>

          </TouchableOpacity>

      

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
  item: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
