import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

const StyleButton = (props) => {
    const {type, content, onPress} = props;

    const backgroundColor = type == 'primary' ? '#566573' : 'pink';
    const textColor = type == 'primary' ? 'white' : '#34495E';
    return (
        <View style={styles.container}>
            <Pressable
               style={[styles.button, {backgroundColor: backgroundColor}]}
               onPress={() => onPress()}
            >
              <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton;

