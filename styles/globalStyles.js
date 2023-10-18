import { StyleSheet, Dimensions } from "react-native";

const colors = {
  primary_purple: "#D291FF",
  secondary_orange: "#Ee9f27",
  secondary_green: "#28A69A",
  white: "#FFFFFF",
  light_grey: "#A0A0A0",
  dark_grey: "#606060"
};
const fontStyles = {
  headerSize: 30,
  buttonSize: 12,
};

const globalStyles = StyleSheet.create({
  background_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  curved_container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.primary_purple,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.4,
  },
  circle: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").height * 0.3,
    borderRadius: Dimensions.get("window").width * 0.8 / 2,
    backgroundColor: colors.primary_purple,
    alignItems: "center", 
    justifyContent: "center"
  },
  header_container: {
    alignItems: "center",
    marginBottom: 30,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  subheader: {
    fontSize: 22,
    color: "white",
  },
  image_profile: {
    width: "80%",
    height: "80%",
  },
  image_small: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.3,
    marginBottom: 20,
  },
  image_large: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.4,
    marginBottom: 20,
  },
  nav_button: {
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    color: colors.white,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  input_header: {
    color: colors.light_grey,
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    borderColor: "#D291FF",
    borderWidth: 2,
    width: Dimensions.get("window").width * 0.7,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: colors.light_grey,
    textAlign: "left",
  },
});

export { colors, fontStyles, globalStyles };
