import { View, Text, Pressable, StyleSheet, Image } from "react-native";

interface Props {
  onStart: () => void;
}
const logo = require("../assets/pet-mind-logo.jpg");
export default function HomeScreen({ onStart }: Props) {
  return (
    <View style={styles.screen}>
      <Image source={logo} style={styles.logo} />
      <Pressable style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    justifyContent: "center",
    alignItems: "center",
  },

    logo: {
    width: 290,
    height: 190,
    borderRadius: 95,
    marginBottom: 28,
    resizeMode: "cover",
    },

  button: {
    backgroundColor: "#FFB16B",
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 14,
  },

  buttonText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});