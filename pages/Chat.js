import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Box, Button, Stack } from "@react-native-material/core";
import axios from "axios";
import { Feather } from '@expo/vector-icons';

export default function Chat() {
  const [data, setData] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/completions"

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
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={{ color: item.type === "Human" ? "red" : "blue" }}>
              {item.type === "Human" ? "Human" : "AI"}
            </Text>
            <Box style={styles.messages}>
        <Text style={styles.message}>
        {item.text}
        </Text>
      </Box>
          </View>
        )}
      />
      <Stack style={{flexDirection: 'row'}}>
      <TextInput
        value={textInput}
        style={{borderRadius: 30, width: '60%', backgroundColor: '#fff', padding: 10}}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Ask me Anything"
      />
<TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', height: 40, width: 40, margin: 'auto'}}>
      <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
      </Stack>
      <Button onPress={handleSend} title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a262f",
    paddingTop: 40,
  },
  messages: {
    padding: 20,
    flexShrink: 2,  
    overflow: 'auto',
    boxShadow: 'inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05))',
  },
  message: {
    boxSize: 'border-box',
    padding: 10,
    margin: '1rem',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 0,
    minHeight: '2.25rem',
    width: 'fit-content',
    maxWidth: '66%',
    boxShadow: '0 0.2rem rgba(0,0,0,0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1)',
  }
});
