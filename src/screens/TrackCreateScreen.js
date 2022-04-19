import React, {useContext} from 'react';
import {Text} from 'react-native-elements';
import {withNavigationFocus} from "react-navigation";
import {SafeAreaView} from "react-native-safe-area-context";
import LocationContext from "../context/LocationContext";
import Map from "./Map";
import '../_mockLocation';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = props => {
    const {isFocused} = props;
    const {addLocation} = useContext(LocationContext.Context);
    const [error] = useLocation(isFocused, addLocation);
    console.log('isFocused', isFocused);
    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text h3>Create a Track</Text>
        <Map/>
        {error ? <Text>{error}</Text> : null}
        <TrackForm/>
    </SafeAreaView>
};

export default withNavigationFocus(TrackCreateScreen);