import Context from './Context';

// init
const initState = {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null
};

const reducer = (state, payload) => {
    const {type, location, name} = payload;

    switch (type) {
        case 'add': // add = add curren location
            return {...state, currentLocation: location}
        case 'start':
            return {...state, recording: true}
        case 'stop':
            return {...state, recording: false}
        case 'add_location':
            return {...state, locations: [...state.locations, payload.location]}
        case 'change_name':
            return {...state, name}
        default:
            return state;
    }
};

// actions
const changeName = dispatch => (name) => {
    dispatch({type: 'change_name', name})
}
const startRecording = dispatch => (location) => {
    dispatch({
        type: 'start',
    });
};

const stopRecording = dispatch => () => {
    dispatch({
        type: 'stop',
    });

};

const addLocation = dispatch => (location, recording) => {
    dispatch({type: 'add', location});
    if (recording)
        dispatch({type: 'add_location', location})
};

const actions = {changeName, startRecording, stopRecording, addLocation};

//
export default Context(reducer, actions, initState);