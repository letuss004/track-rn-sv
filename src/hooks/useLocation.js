import {useEffect, useState} from 'react'
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location';


export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        console.log('watching');
        try {
            const {granted} = await requestForegroundPermissionsAsync();
            if (!granted) setError('Please enable ur location');
            const subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
            );
            setSubscriber(subscriber);
        } catch (err) {
            setError(err.message)
        }
    };

    useEffect(() => { // shouldTrack = isFocused
        if (shouldTrack) {
            console.log('useEffect')
            startWatching();
        } else {
            console.log('not watching');
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);
    return [error];
}