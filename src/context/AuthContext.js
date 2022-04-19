import Context from './Context';
import api from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";

// var
const initState = {
    isSignedIn: false,
    error: null,
    token: null
};
const reducer = (state, payload) => {
    const {type, isSignedIn, error, token} = payload;

    switch (type) {
        case 'signin':
        case 'signup':
            return {...state, isSignedIn, token};
        case 'e':
            return {...state, error};
        case 'clear_err':
            return {...state, error: ''}
        case 'signout':
            return {...initState};
        default:
            return state;
    }
};

// action
const signup = dispatch => async (email, password) => {
    try {
        const response = await api.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        const payload = {
            type: 'signup',
            isSignedIn: true,
            token: response.data.token
        };
        dispatch(payload);
        navigate('TrackList');
    } catch (err) {
        const payload = {
            type: 'e',
            error: err.message
        };
        dispatch(payload);
    }
};

const signin = (dispatch) => async (email, password) => {
    try {
        const response = await api.post('/signin', {email, password});
        const token = (response.data) ? response.data.token : null;
        await AsyncStorage.setItem('token', response.data.token);
        const payload = {
            type: 'signin',
            isSignedIn: true,
            token
        };
        dispatch(payload);
        navigate('TrackList');
    } catch (err) {
        const payload = {
            type: 'e',
            error: err.message
        };
        dispatch(payload);
    }
};

const clearError = (dispatch) => async () => {
    dispatch({type: 'clear_err'});
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    const payload = {
        type: 'signin',
        token,
        // isSignedIn: true
    };
    console.log(token);
    if (token) {
        dispatch(payload);
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow')
};


//
const actions = {signin, signup, clearError, signout, tryLocalSignin};
export default Context(reducer, actions, initState);

