import { View, Text, Image } from "react-native";
import NavButton from "../components/NavButton";
import { globalStyles, colors } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={[globalStyles.background_container, {backgroundColor: colors.primary_purple}]}>
      <View style={globalStyles.header_container}>
        <Text style={globalStyles.header}>Lets Explore</Text>
        <Text style={globalStyles.subheader}>To the infinity and beyond...</Text>
      </View>
      <Image style={globalStyles.image_small}  resizeMode="contain" source={require("../assets/ufo.png")} />
      <NavButton navigation={navigation} navigateTo="Profile" buttonText="go to profile" buttonColor={colors.secondary_orange}/>
      <NavButton navigation={navigation} navigateTo="Map" buttonText="go to map" buttonColor={colors.secondary_green}/>
    </View>
  );
}
