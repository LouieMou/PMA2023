import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, colors } from "../styles/globalStyles";

import NavButton from "../components/NavButton";

export default function ProfileScreen({navigation}){

    return(
        <View style={[globalStyles.background_container, {backgroundColor: colors.white}]}>
          <View style={globalStyles.circle}>
            <Image style={globalStyles.image_profile}  resizeMode="contain" source={require("../assets/user.png")}/>
          </View>
          <View style={globalStyles.header_container}>
            <Text style={[globalStyles.header, {color: colors.dark_grey}]}>Alien Explorer</Text>
            <Text style={[globalStyles.subheader, {color: colors.dark_grey}]}>Home Planet, Saturn</Text>
          </View>
          <NavButton navigation={navigation} navigateTo="Home" buttonText="go to home" buttonColor={colors.secondary_orange}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});