import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import { screenStyle } from '../../styles/screenStyle';
import { width } from '../../utils/constants';
import { Eye, EyeSlash } from 'iconsax-react-native';
import AppColors from '../../theme/colors';
import { postRequest } from '../../service/verbs';
import { LOGIN_URL } from '../../service/urls';
import StoreContext from '../../context';
import { useNavigation } from '@react-navigation/native';

const Login = ({navigation}) => {
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")
    const [disableButton, setDisableButton] = useState(false)
    const [isRequireUsername, setIsRequireUsername] = useState(true)
    const [isRequirePassword, setIsRequirePassword] = useState(true)
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const {setIsLogin} = useContext(StoreContext)


    const login = () => {
        const form = {
            username: null,
            password: null
        }
        if(username) {form.username = username; setIsRequireUsername(true)}
        else setIsRequireUsername(false)
        if(password) {form.password = password; setIsRequirePassword(true)}
        else setIsRequirePassword(false)

        if(username && password) {
            setDisableButton(true)

            postRequest(LOGIN_URL, form)
            .then((res)=> {
                console.log(res.data)
                setIsLogin(true)
                navigation.goBack()
            })
            .catch((err)=> console.log(err))
            .finally(()=> setDisableButton(false))
        }
    }

    return (
        <View style={screenStyle.container}>
            <ScrollView>
                <View style={{padding: 20}}>
                    {/* resmimiz uygulamanın içinden geldiği için require kullanacağız */}
                    <Image source={require("../../assets/icon/logo.png")} style={{width: width*0.3, height: width*0.26, resizeMode: "contain", alignSelf: "center"}} />
                </View>

                <View>
                    <Input
                        style={{marginVertical: 10}}
                        size='large'
                        caption={!isRequireUsername && "Please enter your user name"}
                        status={isRequireUsername ? "basic" : "danger" }
                        value={username}
                        label='User name'
                        placeholder='Place your user name'
                        onChangeText={nextValue => setUsername(nextValue)}
                    />
                    <Input
                        style={{marginVertical: 10}}
                        size='large'
                        caption={!isRequirePassword && "Please enter your password"}
                        status={isRequirePassword ? "basic" : "danger" }
                        value={password}
                        label='Password'
                        placeholder='Place your password'
                        secureTextEntry={secureTextEntry}
                        accessoryRight={()=> secureTextEntry ? (<EyeSlash size="23" color={AppColors.GRAY} onPress={()=> setSecureTextEntry(false)} />) : (<Eye size="23" color={AppColors.GRAY} onPress={()=> setSecureTextEntry(true)} />)}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />
                </View>

                <View style={{marginVertical: 20}}>
                    <Button
                        disabled={disableButton}
                        style={{marginVertical: 10}}
                        status='success'
                        onPress={login}
                        >
                        LOGIN
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
};

export default Login;
