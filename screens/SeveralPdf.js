import React, { useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Dimensions, TouchableOpacity, Text , View, Image, SafeAreaView} from 'react-native';
import Pdf from 'react-native-pdf';
import Home from './Home';
// import BookDetail from './BookDetail';
// import { bookTheMetropolis, book} from './Home';
// import { bookmark_icon } from '../constants/icons';



const Pidy = ({navigation}) => {
    

function FirstPdfButton  ()  {

    return (
        
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate("firstPdf")}>
  <Image
    source={require('../assets/images/other_words_for_home.jpg')}
    style={{ width: 200, height: 200, borderRadius: 20, left: 100, bottom: -70 }}
  />
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
    style={{ width: 200, height: 200, borderRadius: 20, left: 100, bottom: -90 }}
  />
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
    style={{ width: 200, height: 200, borderRadius: 20, left: 100, bottom: -110, backgroundColor: 'black' }}
  />
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