import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import Home from './pages/index';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigation>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
            </AppStack.Navigation>

        </NavigationContainer>
    );
}