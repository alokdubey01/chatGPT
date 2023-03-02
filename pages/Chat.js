import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Box, Button, Stack } from "@react-native-material/core";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

export default function Chat({ navigation }) {
  const [data, setData] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/completions";

  const handleSend = async () => {
    const question = textInput;
    console.log(question);
    const response = await axios.post(
      apiUrl,
      {
        prompt: question,
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
      }
    );

    const text = response.data.choices[0].text;
    console.log(response.data);
    console.log(text);
    setData([
      ...data,
      { type: "Human", text: textInput },
      { type: "AI", text: text },
    ]);
    setTextInput("");
  };

  return (
    <View style={styles.container}>
      <Stack style={{ paddingTop: 30, paddingBottom: 10 }}>
        <Stack style={styles.header}>
          <Stack />
          <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
            Chat
          </Text>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/icons/ic_premium_crown.png")}
          />
        </Stack>
      </Stack>
      <Stack style={{ flexDirection: "row", padding: 10 }}>
        <Text style={styles.message}> How can I help you today? </Text>
      </Stack>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Stack style={{ flexDirection: "row", padding: 10 }}>
              {item.type === "Human" ? (
                () => null
              ) : (
                <Text style={styles.message1}> {item.text} </Text>
              )}
            </Stack>
            <Stack
              style={{
                flexDirection: "row",
                padding: 10,
                alignSelf: "flex-end",
              }}
            >
              {item.type === "AI" ? (
                () => null
              ) : (
                <Text style={styles.message2}> {item.text} </Text>
              )}
            </Stack>
          </View>
        )}
      />
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <Image
          style={{ height: 30, width: 30 }}
          source={require("../assets/icons/ic_share.png")}
        />
        <TextInput
          value={textInput}
          style={{
            borderRadius: 30,
            width: "60%",
            backgroundColor: "#475158",
            padding: 10,
            height: 40,
            color: "white",
          }}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Ask me Anything"
        />
        <TouchableOpacity
          style={{
            borderRadius: 50,
            justifyContent: "center",
          }}
          onPress={handleSend}
        >
          <Image style={{height: 40, width: 40}} source={require('../assets/icons/ic_send_circle_enable.png')} />
        </TouchableOpacity>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11181e",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  message: {
    padding: 10,
    margin: 10,
    backgroundColor: "#475158",
    color: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 0,
    minHeight: 20,
    maxWidth: "66%",
  },
  message2: {
    padding: 10,
    margin: 10,
    backgroundColor: "blue",
    color: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 40,
    minHeight: 20,
    maxWidth: "66%",
  },
});
