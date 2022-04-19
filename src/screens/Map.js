import React from 'react';
import {View, StyleSheet} from "react-native";
import MapView from 'react-native-maps';

const Map = props => {
    const {} = props;

    return <MapView
        style={styles.map}
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}

    >

    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;