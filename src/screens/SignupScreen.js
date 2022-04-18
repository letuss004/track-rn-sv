import React, {useContext, useEffect} from 'react';
import AuthContext from "../context/AuthContext";
import Link from "../components/Link";
import AuthForm from "../components/AuthForm";
import {NavigationEvents} from "react-navigation";


const SignupScreen = props => {
    const {navigation} = props;
    const {state, signup, clearError, tryLocalSignin} = useContext(AuthContext.Context);
    const link = () => (
        <Link
            text={"Already have an account? Login here."}
            onTouch={() => navigation.navigate('Signin')}/>
    );


    return <>
        <NavigationEvents onWillBlur={clearError}/>
        <AuthForm
            text={'Signup Screen'}
            submitTitle={'Signup'}
            error={state.error}
            onSubmit={signup}
            Link={link}
        />
    </>;
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
}

export default SignupScreen;