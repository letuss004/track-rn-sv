import React, {useReducer} from 'react';


const createContext = (reducer, actions, initState) => {
    const Context = React.createContext(null);

    const Provider = props => {
        const {children} = props;
        const [state, dispatch] = useReducer(reducer, initState);
        const dispatcher = {};
        for (let key in actions) {
            dispatcher[key] = (email, password) => actions[key](dispatch, email, password);
        }

        return <Context.Provider value={{state, ...dispatcher}}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
}

export default createContext;
