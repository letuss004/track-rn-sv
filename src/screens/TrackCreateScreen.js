import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import Map from "./Map";
import {SafeAreaView} from "react-navigation";
import {requestForegroundPermissionsAsync} from 'expo-location';

const TrackCreateScreen = props => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        const {granted} = await requestForegroundPermissionsAsync();
        if (!granted) setError('Please enable ur location');
    };

    useEffect(() => {
        startWatching()
    }, []);


    return <View>
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>Create a Track</Text>
            <Map/>
            {error ? <Text>{error}</Text> : null}
        </SafeAreaView>
    </View>
};

export default TrackCreateScreen;