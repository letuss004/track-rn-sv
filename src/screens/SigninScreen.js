import React, {useContext, useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AuthContext from '../context/AuthContext'
import Spacer from "../components/Spacer";
import {Text, Input} from 'react-native-elements';


const SigninScreen = props => {
    const {navigation} = props;
    const {signin} = useContext(AuthContext.Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={{fontSize: 38}}>Signin Screen</Text>
            <Input
                label={'Email'}
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                label={'Password'}
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer/>
            <Button
                title={'Signin'}
                onPress={() => signin(email, password)}
            />
        </View>
    );
};

export default SigninScreen;