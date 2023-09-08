import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import Userinfo from "./Userinfo";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const githubUrl = "https://github.com/ndukwesamuel/"; // Replace with your GitHub URL

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView
      style={GlobalStyles.droidSafeArea}
      className=" border bg-white"
    >
      <View style={styles.container}>
        <Userinfo toggleModal={toggleModal} />

        <Modal
          animationType="slide"
          visible={modalVisible}
          presentationStyle="pageSheet"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1 }}>
            <WebView source={{ uri: githubUrl }} />
          </View>
          <View style={styles.modalContent}>
            <Pressable
              style={({ pressed }) => [
                styles.closeButton,
                {
                  backgroundColor: pressed ? "rgba(0, 0, 0, 0.6)" : "blue",
                },
              ]}
              onPress={toggleModal}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Adjust the radius as needed
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6E7CB",
  },
  button: {
    backgroundColor: "red",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  hideModal: {
    color: "white",
  },
});
