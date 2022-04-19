import React from 'react';
import {View, StyleSheet, ActivityIndicator} from "react-native";
import MapView from 'react-native-maps';

const Map = props => {
    const {currentLocation} = props;
    if (!currentLocation)
        return <ActivityIndicator size={'large'} style={{marginTop: 200}}/>

    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    />
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;