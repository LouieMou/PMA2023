import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function NavButton({navigation, navigateTo, buttonText, buttonColor }) {

function handleNavigation() {
    navigation.navigate(navigateTo);
  }
  return (
    <View>
      <Pressable style={[globalStyles.nav_button,{backgroundColor: buttonColor}]} onPress={handleNavigation}>
        <Text style={{ color: "white", fontWeight: "800" }}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}
