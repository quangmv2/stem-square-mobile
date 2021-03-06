import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'
import { useAuth } from '../../store';
import { Input, Spinner } from 'native-base';
import { users } from "./users-data";
// import { Toast } from 'native-base';
interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation();
    const { setIsAuth, setUser } = useAuth();

    const passwordRef = useRef<TextInput | null>(null)


    const login = () => {
        setLoading(true)
        const user = users.find(u => u.username == email.toLowerCase().trim() && u.password == password.toLowerCase().trim());
        if (user) {
            setIsAuth(true);
            setUser(user);
            return;
        }
        Alert.alert("Login", "Login failed");
        setLoading(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.nav}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <EvilIcons name="navicon" size={30} color="black" />
            </TouchableOpacity>
            <View style={{
                width: '100%',
                padding: 40,
            }}>
                <Text style={styles.logo}>Sign In</Text>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)}
                    autoCorrect={true}
                    onSubmitEditing={() => {
                        passwordRef.current.focus()
                    }}
                    returnKeyLabel="Next"
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)}
                    ref={passwordRef}
                    onSubmitEditing={login}
                    returnKeyLabel="Done"
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBtn, { opacity: loading ? 0.5 : 1 }]}
                onPress={login}
                disabled={loading}
            >
                {
                    loading && <Spinner color="white" size={20} style={{
                        marginRight: 10
                    }} />
                }
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={[styles.registerBtn]}
            >
                <Text style={[styles.loginText, { color: "#DDAE53" }]}>Create an account</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;

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
        color: "#777777",
        fontSize: 16
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