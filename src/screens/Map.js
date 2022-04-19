import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet} from "react-native";
import MapView, {Circle} from 'react-native-maps';
import LocationContext from "../context/LocationContext";

const Map = props => {
    const {state} = useContext(LocationContext.Context);
    let currentLocation = state.currentLocation;
    if (!currentLocation)
        return <ActivityIndicator size={'large'} style={{marginTop: 200}}/>

    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}>
        <Circle
            center={currentLocation.coords}
            radius={15}
            strokeColor={'rgba(158,158,255,1.0)'}
            fillColor={'rgba(158,158, 255, 0.3)'}
        />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;