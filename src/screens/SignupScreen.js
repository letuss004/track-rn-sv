import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer'

const SignupScreen = props => {
    const {navigation} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input
            style={{}}
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
        />
        <Spacer/>
        <Input
            style={{}}
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            secureTextEntry
        />
        <Spacer>
            <Button title={'Signup'}/>
        </Spacer>
    </View>
};

let styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50
    }
})

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
}

export default SignupScreen;