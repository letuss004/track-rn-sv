import React, {useState} from 'react';
import {Button, Input, Text} from 'react-native-elements'
import {StyleSheet, View} from 'react-native';
import Spacer from "./Spacer";

const AuthForm = props => {
    const {onSubmit, Link, text, submitTitle, error} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <View style={styles.container}>
        <Text h3>{text}</Text>
        <Spacer/>
        <Input
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
        />
        <Input
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Spacer/>
        <Button
            title={submitTitle}
            onPress={() => onSubmit(email, password)}
        />
        <Spacer/>
        <Link/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    error: {
        color: 'red'
    }
});


export default AuthForm;