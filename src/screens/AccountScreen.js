import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import AuthContext from "../context/AuthContext";

const AccountScreen = props => {
    const {} = props;
    const {signout} = useContext(AuthContext.Context);

    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text style={{fontSize: 48}}>Account Screen</Text>
        <Button
            title={'Sign Out'}
            onPress={signout}
        />
    </SafeAreaView>
};

export default AccountScreen;