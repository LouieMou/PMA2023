import { View, Text, Image } from "react-native";
import NavButton from "../components/NavButton";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header_container}>
        <Text style={globalStyles.header}>Lets Explore</Text>
        <Text style={globalStyles.subheader}>The infinity and beyond...</Text>
      </View>
      <Image style={globalStyles.image} source={require("../assets/ufo.png")} />
      <NavButton navigation={navigation} navigateTo="Profile" buttonText="go to profile" buttonStyle={globalStyles.nav_button_primary}/>
    </View>
  );
}
