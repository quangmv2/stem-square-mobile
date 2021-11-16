import { EvilIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
interface RegisterProps {

}

const Register: React.FC<RegisterProps> = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nav}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <EvilIcons name="navicon" size={30} color="black" />
            </TouchableOpacity>
            <View style={{
                width: '100%',
                padding: 40,
            }}>
                <Text style={styles.logo}>Sign up</Text>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)} />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.registerBtn}
            >
                <Text style={[styles.loginText, { color: "#DDAE53" }]}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#081F47",
        textAlign: 'left'
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fff",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        borderBottomColor: '#333333',
        borderBottomWidth: 1
    },
    inputText: {
        height: 50,
        color: "#003f5c"
    },
    forgot: {
        color: "#003f5c",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#DDAE53",
        borderRadius: 25,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        flexDirection: "row"
    },
    registerBtn: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: '#DDAE53',
        borderWidth: 1
    },
    loginText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26
    },
    nav: {
        position: "absolute",
        left: 15,
        top: 45
    }
});