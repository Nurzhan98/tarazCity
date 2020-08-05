import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export const MainLayout = ({children}) => {
    return (
        <View style={styles.container} >
            <View style={styles.headerImage} >
                <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09104C',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    headerImage:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 80,
        height: 80
    }
})