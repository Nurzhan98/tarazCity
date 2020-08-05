import React, {useContext} from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import {AuthContext} from '../context'
import { ImgCard } from '../ui/imgCard';


export const SecureCityScreen = ({ navigation }) => {
    console.log(navigation.navigate)
    const { signOut } = useContext(AuthContext)
    const url = '../../assets/img/img.png'
    const onOpen = () => {
        navigation.navigate('CrimeMap')
    }
    return (
        <View style={styles.container} >
            <View style={styles.headerImage} >
                <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
            </View>
            <View style={styles.titleWrap} >
                <Entypo name="menu" size={30} onPress={() => navigation.toggleDrawer()} color="#000" />
                <Text style={styles.titleText} >Безопасный город</Text>
            </View>
            <View style={styles.imgWrap}>
                <View style={styles.images}>
                    <ImgCard title='Карта преступности' onOpen={onOpen} source={require('../../assets/img/img1.png')} />
                    <ImgCard title='Безопасные школы' source={require('../../assets/img/img2.png')} />
                </View>
                <View style={styles.images}>
                    <ImgCard title='Уличное освещение' source={require('../../assets/img/img3.png')} />
                    <ImgCard title='Безопасные маршруты' source={require('../../assets/img/img4.png')} />
                </View>
            </View>
            <Button title='Выйти' onPress={() => signOut()} />
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
        justifyContent: 'space-between',
        marginBottom: 20
    },
    img: {
        width: 60,
        height: 60
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
    imgWrap: {
        marginTop: 20,
    },
    images: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        marginBottom: 20
    }
})