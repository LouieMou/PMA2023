import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function NavButton({navigation, navigateTo, buttonText, buttonStyle}) {

function handleNavigation() {
    navigation.navigate(navigateTo);
  }
  return (
    <View>
      <Pressable style={buttonStyle} onPress={handleNavigation}>
        <Text style={{ color: "white", fontWeight: "800" }}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}
