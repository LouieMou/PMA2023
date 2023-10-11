import { StyleSheet } from "react-native";

const colors = {
    primary: "", 
    secondary: "", 
    white: ""
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
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  nav_button_primary: {
    backgroundColor: "#D291FF",
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    marginTop: 20,
  }, 
  nav_button_secondary: {
    backgroundColor: "#Ee9f27",
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    marginTop: 10,
  }, 
  input_header: {
    color: "grey",
    fontSize: 12,
  },
  input: {
    borderColor: "#D291FF",
    borderWidth: 2,
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
});

export {colors, fontStyles, globalStyles};