import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../authasset/images/misc/login.svg';
import GoogleSVG from '../authasset/images/misc/google.svg';
import FacebookSVG from '../authasset/images/misc/facebook.svg';
import TwitterSVG from '../authasset/images/misc/twitter.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
// import { AuthContext } from '../auth/AuthContext';

const LoginScreen = ({navigation}) => {

    // const {login} = useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: "white"}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          {/* <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
          <Image source={(require('../assets/images/canarylogo.png'))} 
          style={{height:300, width:300,}} />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 28,
            fontWeight: '500',
            color: 'purple',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField 
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

<InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"}  onPress={() => navigation.navigate("Home")} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
            backgroundColor: "white",
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            {/* <GoogleSVG height={24} width={24} /> */}
            <Image source={(require('../assets/images/gg.jpeg'))} 
          style={{height:24, width:24,}} />

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              backgroundColor: 'white',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            {/* <FacebookSVG height={24} width={24} /> */}
            <Image source={(require('../assets/images/gith.png'))} 
          style={{height:24, width:24,}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              backgroundColor: 'white',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            {/* <TwitterSVG height={24} width={24} /> */}
            <Image source={(require('../assets/images/ink.jpeg'))} 
          style={{height:24, width:24,}} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: 'gray'}}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
