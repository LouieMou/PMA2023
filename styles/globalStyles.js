import { StyleSheet, Dimensions, useWindowDimensions } from "react-native";

const colors = {
    primary_purple: "#D291FF", 
    secondary_orange: "#Ee9f27", 
    white: "#FFFFFF",
    grey: "#A0A0A0"
}

const fontStyles = {
    headerSize: 30,
    buttonSize: 12,
}

const globalStyles = StyleSheet.create({
  background_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  background_container_white: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header_container: {
    alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  subheader: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
  image_large: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
  nav_button_primary: {
    backgroundColor: "#D291FF",
    width: Dimensions.get('window').width * 0.7, 
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    marginTop: 20,
  }, 
  nav_button_secondary: {
    backgroundColor: "#Ee9f27",
    width: Dimensions.get('window').width * 0.7,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: colors.white,
    marginTop: 10,
  }, 
  input_header: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    borderColor: "#D291FF",
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.7,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: colors.grey,
    textAlign: "left",
  },
});

export {colors, fontStyles, globalStyles};