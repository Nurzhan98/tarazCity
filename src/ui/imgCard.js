import React from 'react'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const ImgCard = ({title, source, onOpen}) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.container} onPress={onOpen} activeOpacity={0.5} >
                <ImageBackground source={source} style={styles.image} >
                    <Text style={styles.text} > {title} </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      color: "#000",
      fontSize: 20,
      fontFamily: "roboto-bold",
      display: 'flex',
      justifyContent: 'center'
    }
  });