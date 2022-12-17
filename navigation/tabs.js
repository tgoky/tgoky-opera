import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
        height: "10%",
        backgroundColor: COLORS.black,
    },

}

const Tabs = () => {
    return (
        <Tab.Navigator
            // tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            tabBarStyle: [{
                    "display": "flex",
                    height: "10%",
                    backgroundColor: COLORS.black,
            },
        null ],
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Notification":
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Setting":
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}

                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
            <Tab.Screen
                name="Notification"
                component={Home}
            />
            <Tab.Screen
                name="Setting"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs;