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
import { FontAwesome5 } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <AppBar
        title="Title"
        color="black"
        style={{paddingTop: 20}}
        leading={(props) => (
          <IconButton
          // onPress={() => navigation.openDrawer()}
          onPress={() => navigation.navigate('Setting')}
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack onPress={()=> navigate('Setting')}>
            <IconButton
            onPress={() => navigate('Setting')}
              icon={(props) => <Ionicons name="bulb-outline" {...props} />}
              {...props}
            />
          </HStack>
        )}
      />
      <Image
        style={styles.Image}
        source={require("../assets/img_level_up_your_bot.png")}
      />

      <View style={styles.row}>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#00f2fa",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('marketting_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Marketting</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#00fa79",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('business_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Business</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#00fa25",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('content_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Content</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#a7fa00",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('web_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: 'center' }}>Web Development</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#fac400",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('health_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: 'center' }}>Helthcare & Wellbeing</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#005cfa",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('teahers_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Teachers</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#faf089",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('music_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Music</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#faf089",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('education_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10 }}>Education</Text>
        </Stack>
        <Stack
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#1a262f",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: "#faf089",
              borderRadius: 10,
            }}
          >
            <Octicons onPress={() => {navigation.navigate('food_list')}} name="broadcast" size={24} color="white" />
          </Box>
          <Text style={{ color: "white", marginTop: 10, textAlign: 'center' }}>Food & Movie</Text>
        </Stack>
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
    width: '95%',
    height: 100,
    resizeMode: 'cover',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
  }
});
