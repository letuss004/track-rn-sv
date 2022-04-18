import Context from './Context';
import api from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";

// var
const initState = {
    isSignedIn: false,
    error: '',
    token: ''
};
const reducer = (state, payload) => {
    const {type, isSignedIn, error, token} = payload;

    switch (type) {
        case 'signin':
        case 'signup':
            return {...state, isSignedIn, token};
        case 'e':
            return {...state, error};
        default:
            return state;
    }
}

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
        console.log(err)
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
        console.log('response', response)
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
        console.log(err);
        dispatch(payload);
    }
};


//
const actions = {signin, signup};
export default Context(reducer, actions, initState);

