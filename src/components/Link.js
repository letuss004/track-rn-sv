import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Link = props => {
    const {text, onTouch} = props;

    return <View>
        <TouchableOpacity onPress={onTouch}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        textAlign: 'center'
    }
})

export default Link;