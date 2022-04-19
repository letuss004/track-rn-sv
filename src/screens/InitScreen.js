import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthContext'

const SigninScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext.Context);

    useEffect(() => {
            tryLocalSignin();
        }, []
    );
    return <></>;
};

export default SigninScreen;