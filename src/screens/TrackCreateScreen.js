import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from "react-native-safe-area-context";
import {requestForegroundPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import LocationContext from "../context/LocationContext";
import Map from "./Map";
import '../_mockLocation';

const TrackCreateScreen = props => {
    const [error, setError] = useState(null);
    const {state, addLocation} = useContext(LocationContext.Context);

    const startWatching = async () => {
        try {
            const {granted} = await requestForegroundPermissionsAsync();
            if (!granted) setError('Please enable ur location');
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
                addLocation(location)
            });
        } catch (err) {
            setError(err.message)
        }
    };

    useEffect(() => {
        startWatching()
    }, []);

    return <View>
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>Create a Track</Text>
            <Map currentLocation={state.currentLocation}/>
            {error ? <Text>{error}</Text> : null}
        </SafeAreaView>
    </View>
};

export default TrackCreateScreen;