import Context from './Context';
import api from '../api/api'


//
const initState = {};
const reducer = async (state, payload) => {
    const {type, email, password} = payload;

    switch (type) {
        case 'signin':
            console.log(email, password)
            try {
                const response = await api.post('/auth/signin', {email, password})
                const token = response.token;
                console.log(token)
                return [...state, token]
            } catch (err) {
                console.log(err.message)
                return state;
            }
        default:
            return state;
    }
}

//
const signup = () => {

};

const signin = (dispatch, email, password) => {
    console.log('Signin dispatch',email, password)
    const payload = {
        type: 'signin',
        email,
        password,
    }
    return dispatch(payload);
};


//
const actions = {signin};
export default Context(reducer, actions, initState);

