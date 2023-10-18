import { View, Text, Image, TextInput } from "react-native";
import { useState } from "react";
import { globalStyles, colors } from "../styles/globalStyles";
import NavButton from "../components/NavButton";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={[
        globalStyles.background_container,
        { backgroundColor: colors.white },
      ]}
    >
      <Image
        style={globalStyles.image_large}
        resizeMode="contain"
        source={require("../assets/planets.png")}
      />
      <View>
        <Text style={globalStyles.input_header}>Username:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="type username here"
        />
        <Text style={globalStyles.input_header}>Email:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="type email here"
        />
        <Text style={globalStyles.input_header}>Password:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="type password here"
        />
      </View>
      <View style={{marginTop: 15}}>
        <NavButton
          navigation={navigation}
          navigateTo="Home"
          buttonText="login"
          buttonColor={colors.primary_purple}
        />
        <NavButton
          navigation={navigation}
          navigateTo="SignUp"
          buttonText="sign up"
          buttonColor={colors.secondary_orange}
        />
      </View>
    </View>
  );
}
