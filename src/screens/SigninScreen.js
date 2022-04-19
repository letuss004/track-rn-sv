import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import Link from "../components/Link";


const SigninScreen = props => {
    const {navigation} = props;
    const {state, signin, clearError} = useContext(AuthContext.Context);
    const link = () => (
        <Link
            text={"Don't have account? Signup here."}
            onTouch={() => navigation.navigate('Signup')}/>
    );

    return <>
        <NavigationEvents onWillBlur={clearError}/>
        <AuthForm
            text={'Signin Screen'}
            submitTitle={'Login'}
            error={state.error}
            onSubmit={signin}
            Link={link}
        />
    </>
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
}


export default SigninScreen;