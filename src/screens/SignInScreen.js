import React, {useContext, useState} from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {AuthContext} from '../context'

export const SignInScreen = ({ navigation }) => {
    const {signIn} = useContext(AuthContext)
    return (
        <View style={styles.container} >
            <View style={styles.headerImage} >
                <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
            </View>
            <View style={styles.titleWrap} >
                <Text style={styles.title} >TARAZ CITY</Text>
            </View>
            <View style={styles.signWrap} >
                <View style={styles.inputWrap} >
                    <FontAwesome name="user" size={15} color="black" />
                    <TextInput style={styles.input} placeholder='Введите номер телефона' />
                </View>
                <View style={styles.inputWrap} >
                    <FontAwesome name="lock" size={15} color="black" />
                    <TextInput style={styles.input} placeholder='Введите пароль' />
                </View>
                <View style={styles.btnWrap} >
                    <Button style={styles.btn}  title='Войти' onPress={() => signIn() } color='#47778B'   />
                </View>
                <View style={styles.btnsWrap} >
                    <View style={styles.btnWrap2} >
                        <Button style={styles.btn2} onPress={() => navigation.navigate('CreateAccount')}  title='Регистрация' color='#ED7D31'   />
                    </View>
                    <View style={styles.btnWrap2} >
                        <Button style={styles.btn2}  title='Забыли Пароль' color='#6BA0B6'   />
                    </View>
                </View>
                <View style={styles.bottomWrap} >
                    <Text style={styles.bottomText}>Служба технический поддержки</Text>
                    <Text style={styles.bottomText}>8 (777)-777-77-77</Text>
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
    title: {
        fontFamily: 'roboto-bold',
        color: '#F8F8F8',
        fontSize: 30
    },
    titleWrap: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    signWrap: {
        paddingHorizontal: 15,
    },
    inputWrap: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    input: {
        marginLeft: 10
    },
    btnWrap: {
        marginBottom: 20
    },
    btnsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    btnWrap2: {
        width: '40%'
    },
    bottomWrap: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomText: {
        color: '#FFFFFF'
    }
})