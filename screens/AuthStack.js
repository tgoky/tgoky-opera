import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import OnboardingScreen from "../screens/OnBoarding";
import Pidy from "../screens/SeveralPdf"
import OnScreen from "../screens/OnScreener";
import PdfScreen from '../screens/PdfScreener';


 
import { BookDetail } from "../screens/";
import Tabs from "../navigation/tabs";
import { useFonts } from 'expo-font';
import FirstPdfScreen from '../pdfScreens/firstPdf';
import SecondPdfScreen from '../pdfScreens/secondPdf';
import ThirdPdfScreen from '../pdfScreens/thirdPdf';
import Quiz from '../quizfolder/app/screens/Quiz';

import JobHome from '../job/screens/jobhome';
import Profile from '../job/screens/profile';

import {AuthContext, AuthProvider} from '../auth/AuthContext';
import LoginScreen from '../screens/LoginScreener';



const Stack = createStackNavigator();

const AuthStack = () => {
  return (
           <Stack.Navigator
                screenOptions={{
                    headerShown: false
                    
                }}
                initialRouteName={'OnScreener'}
                
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs}  
                    />

<Stack.Screen name="OnBoarding" component={OnboardingScreen}  
                    />
                    <Stack.Screen name="SeveralPdf" component={Pidy} 
                    
                    />

                    <Stack.Screen name="OnScreener" component={OnScreen}
                
                    />

<Stack.Screen name="PdfScreener" component={PdfScreen}
                
                />

                <Stack.Screen name="firstPdf" component={FirstPdfScreen}
                
                />
                  <Stack.Screen name="secondPdf" component={SecondPdfScreen}
                
                />
                  <Stack.Screen name="thirdPdf" component={ThirdPdfScreen}
                
                />
                    <Stack.Screen name="jobhome" component={JobHome}  
                    />
                       
                    <Stack.Screen name="profile" component={Profile}  
                    />

<Stack.Screen name="LoginScreener" component={LoginScreen} />


<Stack.Screen name="Quiz" component={Quiz} options={{
                    headerStyle: {
                      backgroundColor: "black",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                
                />



                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
  );
};

export default AuthStack;