import React from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';


export const CrimeMap = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.headerImage} >
                <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
            </View>
            <View style={styles.titleWrap} >
                <Entypo name="menu" size={30} onPress={() => navigation.toggleDrawer()} color="#000" />
                <Text style={styles.titleText} >Карта преступности</Text>
            </View>
            <View>
                <View style={styles.mapImgWrap} >
                    <Image style={styles.mapImg}   source={require('../../assets/img/map.png')} />
                </View>
            </View>
        </View>
    )
};

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
    },
    titleWrap: {
        backgroundColor: '#6BA0B6',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 40,
        alignItems: 'center'
    },
    titleText: {
        color: '#09104C',
        fontFamily: 'roboto-bold',
        marginLeft: 38,
        fontSize: 24
    },
    mapImgWrap: {
        marginTop: 20,
        paddingBottom: 20
    },
    mapImg: {
        width: '100%',
        height: 400
    }
})