import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";



export default function Login() {
    const [myUsername, setUsername] = useState("");
    const [myPassword, setPassword] = useState("");

    const handleLogin = () => {
        console.log(myUsername, myPassword);
        setUsername("");
        setPassword("");
    };

    return (
        <View>
            <Text>Login</Text>
            <Text>Username</Text>
            <TextInput autoFocus value={myUsername} onChangeText={setUsername} />
            <Text>Password</Text>
            <TextInput
                secureTextEntry
                value={myPassword}
                onChangeText={setPassword}
            />
            <Button title="Submit" onPress={handleLogin} />
        </View>
    );
}
