import {NavigationActions} from 'react-navigation';

export function setNavigator(navigator) {
    this.navigator = navigator;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params
        })
    );
};


