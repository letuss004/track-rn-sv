import Context from './Context';

// init
const initState = {
    recording: false,
    locations: [],
    currentLocation: null
};

const reducer = (state, payload) => {
    const {type, location} = payload;

    switch (type) {
        case 'add':
            return {...state, currentLocation: location}
        default:
            return state;
    }
};

// actions
const startRecording = dispatch => (location) => {
    dispatch({
        type: 'add',
        location
    });
};

const stopRecording = dispatch => () => {

};

const addLocation = dispatch => (location) => {
    dispatch({
        type: 'add',
        location
    });
};

const actions = {startRecording, stopRecording, addLocation};

//
export default Context(reducer, actions, initState);