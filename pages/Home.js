import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  AppBar,
  Avatar,
  Banner,
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <AppBar
        title="Title"
        color="black"
        style={{ paddingTop: 20 }}
        leading={(props) => (
          <IconButton
            // onPress={() => navigation.openDrawer()}
            onPress={() => navigation.navigate("Setting")}
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack onPress={() => navigate("Setting")}>
            <IconButton
              onPress={() => navigate("Setting")}
              icon={(props) => <Ionicons name="bulb-outline" {...props} />}
              {...props}
            />
          </HStack>
        )}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("Buy")}
      >
        <Image
          style={styles.Image}
          source={require("../assets/img_level_up_your_bot.png")}
        />
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
          onPress={() => {
            navigation.navigate("marketting_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#00f2fa",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_marketing.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Marketting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("business_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#00fa79",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_business.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("content_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#00fa25",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_content.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Content</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("web_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#a7fa00",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_dev.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: "center" }}>
            Web Development
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("health_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#fac400",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_wellbeing.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: "center" }}>
            Helthcare & Wellbeing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("teahers_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#005cfa",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_teacher.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 25 }}>Teachers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("music_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#16537e",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_music.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("education_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#38761d",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_edu.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Education</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("food_list");
          }}
        >
          <Box
            style={{
              padding: 5,
              backgroundColor: "#134f5c",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/ic_cat_food.png")}
            />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: "center" }}>
            Food & Movie
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11181e",
    height: "100%",
  },
  text: {
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    flexWrap: "wrap",
    margin: "auto",
  },
  Image: {
    width: "95%",
    height: 100,
    resizeMode: "cover",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
