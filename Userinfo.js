import React from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { WebView } from "react-native-webview";

const Userinfo = ({ toggleModal }) => {
  const slackName = "Ndukwe Samuel";
  const githubUrl = "https://github.com/ndukwesamuel/"; // Replace with your GitHub URL
  const slackProfilePicture =
    "https://drive.google.com/file/d/15QjWbdvUoYFPKyXs2NhDuPfRIr6KjGo7/view?usp=sharing"; // Replace with your Slack profile picture URL

  return (
    <View>
      <Image
        source={require("./assets/profile.jpg")} // Replace with your image path
        style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 3 }}
      />
      <Text style={styles.name}>{slackName}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.closeButton,
          {
            backgroundColor: pressed ? "rgba(0, 0, 0, 0.6)" : "blue",
          },
        ]}
        onPress={toggleModal}
      >
        <Text style={styles.buttonText}>Open GitHub</Text>
      </Pressable>
    </View>
  );
};

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
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  webview: {
    flex: 1,
    width: "100%",
  },
});

export default Userinfo;
