import React, { useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Dimensions, TouchableOpacity, Text , View, Image, SafeAreaView} from 'react-native';
import Pdf from 'react-native-pdf';
import Home from './Home';
// import BookDetail from './BookDetail';
// import { bookTheMetropolis, book} from './Home';
// import { bookmark_icon } from '../constants/icons';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Pidy = ({navigation}) => {
    

function FirstPdfButton  ()  {

    return (
     
        <SafeAreaView>
     
  
          <TouchableOpacity onPress={() => navigation.navigate("firstPdf")}>
  <Image
    source={require('../assets/images/other_words_for_home.jpg')}
    style={{ width: 110, height: 110, borderRadius: 20, left: 20, bottom: -70 }}
  />
  <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: 8, backgroundColor: COLORS.darkGreen, height: 40, width: 150, borderRadius: 12, right: -140, }}>
    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, lineHeight: 22, color: COLORS.lightGreen }}>Course Assesment</Text>
   </View>
   </TouchableOpacity>
  </TouchableOpacity>

        </SafeAreaView>
       
    );
}

function SecondPdfButton  ()  {

    return (
        <View>
              <TouchableOpacity onPress={() => navigation.navigate("secondPdf")}>
  <Image
    source={require('../assets/images/the_metropolist.jpg')}
    style={{ width: 110, height: 110, borderRadius: 20, left: 20, bottom: -60 }}
  /><TouchableOpacity>
  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: 8, backgroundColor: COLORS.darkGreen, height: 40, width: 150, borderRadius: 12, right: -140, }}>
    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, lineHeight: 22, color: COLORS.lightGreen }}>Course Assesment</Text>
   </View>
   </TouchableOpacity>
  </TouchableOpacity>
             
        </View>
    );
}


function ThirdPdfButton  ()  {

    return (
        <View>
             <TouchableOpacity onPress={() => navigation.navigate("thirdPdf")}>
  <Image
    source={require('../assets/images/the_tiny_dragon.jpg')}
    style={{ width: 110, height: 110, borderRadius: 20, left: 20, bottom: -80, backgroundColor: 'black' }}
  />
  <TouchableOpacity>
  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: 8, backgroundColor: COLORS.darkGreen, height: 40, width: 150, borderRadius: 12, right: -140, }}>
    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, lineHeight: 22, color: COLORS.lightGreen }}>Course Assesment</Text>
   </View>
   </TouchableOpacity>
  </TouchableOpacity>
        </View>
    );
}


    
    return (
        <View style={{
            backgroundColor: 'pink', height: 900
        }} >
        {/* Book Cover Section */}
        <View >
            {FirstPdfButton()}
        </View>

        {/* Description */}
        <View >
            {SecondPdfButton()}
        </View>

        {/* Buttons */}
        <View >
        {ThirdPdfButton()}
        </View>
    </View>
    )
          
            }

           

            export default Pidy;