import React, {useContext} from 'react';
import AuthContext from "../context/AuthContext";
import {NavigationEvents} from "react-navigation";
import Link from "../components/Link";
import AuthForm from "../components/AuthForm";


const SignupScreen = props => {
    const {navigation} = props;
    const {state, signup, clearError} = useContext(AuthContext.Context);
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