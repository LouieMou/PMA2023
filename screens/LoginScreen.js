import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import NavButton from "../components/NavButton";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[globalStyles.background_container, {backgroundColor: colors.white}]}>
      <Image style={globalStyles.image_large} resizeMode="contain" source={require("../assets/planets.png")} />
        <Text style={globalStyles.input_header}>Email:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="type your email here"
        />
        <Text style={globalStyles.input_header}>Password:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="type your password here"
        />
        <NavButton navigation={navigation} navigateTo="Home" buttonText="login" buttonStyle={globalStyles.nav_button_primary}/>
        <NavButton navigation={navigation} navigateTo="Home" buttonText="signup" buttonStyle={globalStyles.nav_button_secondary}/>
    </View>
  );
}
