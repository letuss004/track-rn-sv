import {View} from "react-native";
import {Button, Input} from 'react-native-elements'

const TrackForm = () => {
    return <View>
        <Input/>
        <Button
            title={'Start Recording'}
            placeholder={'Enter name'}/>
    </View>
}

export default TrackForm;