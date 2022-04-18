import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AuthContext from './src/context/AuthContext.js'
import {setNavigator} from './src/navigationRef'

const switchNavigator = createSwitchNavigator(
    {
        loginFlow: createStackNavigator({
            Signin: SigninScreen,
            Signup: SignupScreen,
        }),
        mainFlow: createBottomTabNavigator({
            trackListFlow: createStackNavigator({
                TrackList: TrackListScreen,
                TrackDetail: TrackDetailScreen
            }),
            CreateTrack: TrackCreateScreen,
            Account: AccountScreen,
        }),
    }, {
        //
    }
);

const App = createAppContainer(switchNavigator);


export default () => (
    <AuthContext.Provider>
        <App ref={
            (navigator) => setNavigator(navigator)
        }/>
    </AuthContext.Provider>
);
