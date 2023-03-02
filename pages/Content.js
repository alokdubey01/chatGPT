import { Stack } from "@react-native-material/core";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: 1,
    title:
      "Can you provide me with some ideas for blog posts about [topic of your choices]?",
  },
  {
    id: 2,
    title:
      "Write a minute-long screipt for an advertisement about [product or services or company]",
  },
  {
    id: 3,
    title: "Write a product description for my [product or service or company]",
  },
  {
    id: 4,
    title:
      "Suggest inexpensive ways I can promote my [company] with/without using [Media channel]",
  },
  {
    id: 5,
    title:
      "How can I obtain high-quality backlinks to raise the SEO of [website name]",
  },
  {
    id: 6,
    title: "Make 5 distinct CTA messages and buttons for [Your product]",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#282f34",
      marginTop: 15,
      padding: 15,
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
    }}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function Content({ navigation }) {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#282f34";
    const color = item.id === selectedId ? "white" : "white";
    const padding = item.id === selectedId ? 20 : 10;
    const margin = item.id === selectedId ? 20 : 10;

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("ChatReturn", { text: item })}
        backgroundColor={backgroundColor}
        textColor={color}
        padding={padding}
        margin={margin}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack style={{ paddingTop: 30 }}>
        <Stack style={styles.header}>
          <Stack style={styles.row}>
            <Ionicons
              onPress={() => {
                navigation.goBack();
              }}
              name="ios-chevron-back-sharp"
              size={24}
              color="white"
            />
            <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
              Settings
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <FlatList
        data={DATA}
        style={{ marginTop: 10 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    height: "100%",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
    alignItems: "center",
  },
});
