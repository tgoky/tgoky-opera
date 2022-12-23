import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import OnboardingScreen from "../tgoky-book/screens/OnBoarding";
import Pidy from "../tgoky-book/screens/SeveralPdf"
import OnScreen from "./screens/OnScreener";
 
import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null;
    }
    return (
        <NavigationContainer theme={theme}
        
        >
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

                    <Stack.Screen name="OnScreener" component={OnScreen} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;