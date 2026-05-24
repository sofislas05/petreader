import { useRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import BackButton from "../components/BackButton";

interface Props {
  onBack: () => void;
  onCapture: (photoUri: string) => void;
}

export default function CameraScreen({ onBack, onCapture }: Props) {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  async function takePicture() {
    console.log("Taking picture...");

    const photo = await cameraRef.current?.takePictureAsync({
      quality: 0.7,
    });

    console.log("Photo:", photo?.uri);

    if (photo?.uri) {
      onCapture(photo.uri);
    }
  }

  if (!permission) return <View style={styles.screen} />;

  if (!permission.granted) {
    return (
      <View style={styles.screen}>
        <Text style={styles.permissionText}>
          We need camera permission to take a pet photo.
        </Text>

        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant permission</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BackButton onPress={onBack} />

      <Text style={styles.title}>Capture a picture{"\n"}of your pet</Text>

      <View style={styles.cameraBox}>
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      </View>

      <Pressable style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.captureText}>Capture</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 28,
  },

  title: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 35,
    marginBottom: 24,
  },

  cameraBox: {
    width: "100%",
    height: 520,
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    overflow: "hidden",
  },

  camera: {
    flex: 1,
  },

  captureButton: {
    backgroundColor: "#5F7428",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 22,
    marginTop: 36,
  },

  captureText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 24,
  },

  permissionText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 26,
    textAlign: "center",
    marginTop: 250,
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#5F7428",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 18,
  },

  buttonText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 22,
  },
});