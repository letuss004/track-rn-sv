import {View} from "react-native";
import {Button, Input} from 'react-native-elements'
import LocationContext from "../context/LocationContext";
import {useContext} from "react";
import Spacer from "./Spacer";

const TrackForm = () => {
    const {state, startRecording, stopRecording, changeName} = useContext(LocationContext.Context);
    const {name, recording, locations} = state;
    console.log('Track form locations length:', locations.length);

    return <>
        <Spacer>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder={'Enter name'}
            />
        </Spacer>
        {recording
            ?
            <Button
                title={'Stop'}
                onPress={stopRecording}
            />
            :
            <Button
                title={'Start Recording'}
                onPress={startRecording}
            />
        }
    </>
}

export default TrackForm;