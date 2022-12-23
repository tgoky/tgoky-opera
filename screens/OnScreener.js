import React from 'react';
import {StyleSheet, SafeAreaView, Image, View, StatusBar, Text, Pressable, TouchableOpacity, } from 'react-native';
// import { colorsDark } from 'react-native-elements/dist/config';
import COLORS from '../constants/onboardingColor';
//import COLORS from '../../consts/colors';


const OnScreen = ({navigation}) => {
    return (
       
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
           <StatusBar translucent backgroundColor={COLORS.red}/>

            <Image
            source={require('../assets/images/canarylogo.png')}
            style={style.image}
            />
            <View style={style.indicatorContainer}>
                <View style={style.indicator}/>
                <View style={style.indicator}/>
                <View style={[style.indicator, style.indicatorActive]}/>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 20}}></View>
            <View>
        {/* <View>
                <BackgroundImg />
                </View> */}
                 <Text style={style.title}>Canary </Text>
                 <Text style={style.title}>Web3 Learn</Text>
             </View>
             <View style={{marginTop: 10}}>
                 <Text style={style.textStyle}>Explore, think & grow</Text>
                 <Text style={style.textStyle}>Canaries you can build on</Text>
             </View>
             <View style={{flex:1,justifyContent: "flex-end",paddingBottom: 40}}>
             <View>
            <TouchableOpacity  style={{ backgroundColor: "gray",
     alignItems: "center",
     left: 17,
     top: 34,
     width: 360,
     borderRadius: 30,}}>
               <Pressable onPress={() => navigation.navigate("OnBoarding")}>
               <View style={style.btn}>
                     <Text style={{color: COLORS.dark, fontSize: 18, fontWeight: "bold",}}>Welcome to Canary App</Text>
                 </View>
               </Pressable>
               </TouchableOpacity>
               </View>
             </View>
         </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: "gray",
        marginHorizontal:5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
    title: {
        fontSize:38,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Futura",
    },
    textStyle: {
        fontSize: 13,
        color: COLORS.grey,
        alignItems: "center",
        alignSelf: "center",
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: "gray",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnScreen;