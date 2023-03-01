import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Banner,
  Button,
  Chip,
  Divider,
  ListItem,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Setting({ navigation}) {
  return (
    <View style={styles.container}>
      <Stack style={{ paddingTop: 30 }}>
        <Stack style={styles.header}>
          <Stack style={styles.row}>
            <Ionicons onPress={()=> {navigation.goBack()}} name="ios-chevron-back-sharp" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
              Settings
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Banner
          style={{
            marginTop: 24,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: "#1a262f",
            color: "white",
          }}
          illustration={(props) => (
            <Avatar
              color="primary"
              icon={(props) => <Icon name="wifi-off" {...props} />}
              {...props}
            />
          )}
          text="There was a problem processing a transaction on your credit card."
        />
      </Stack>
      {/* <Stack style={styles.flex}>
      <Stack style={{ flexDirection: "row" }}>
        <Ionicons
          style={styles.listIcons}
          name="moon-outline"
          size={24}
          color="black"
        />
        <Text style={{ marginTop: 5, marginLeft: 10 }}>Dark Mode</Text>
      </Stack>
      <MaterialIcons name="arrow-forward-ios" style={{marginTop:10}} size={16} color="#707070" />
    </Stack> */}

      <View>
        <Text style={{color: 'white', marginLeft: 20, marginBottom: 10, fontWeight: '600', textTransform: 'uppercase', fontSize: 12}}>General</Text>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="restore"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="book-open-variant"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="security"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons
              style={styles.listIcons}
              name="cash-outline"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
      </View>
      <View>
        <Text style={{color: 'white', marginLeft: 20, marginBottom: 10, fontWeight: '600', textTransform: 'uppercase', fontSize: 12}}>General</Text>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="restore"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="book-open-variant"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="security"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
        <Stack style={styles.flex}>
          <Stack style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons
              style={styles.listIcons}
              name="cash-outline"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Dark Mode</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11181e",
    height: "100%",
    width: "100%",
  },
  bottom: {
    position: "absolute",
    bottom: 150,
    left: "45%",
    width: "auto",
    padding: 5,
    color: "white",
  },
  start: {
    color: "#111",
    fontSize: 16,
  },
  top: {
    marginTop: 100,
    height: 250,
    width: 250,
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
  col: {
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 5,
  },
  flex: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
  },
  card: {
    padding: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "600",
  },
  chip: {
    marginTop: 15,
    right: 0,
    position: "absolute",
    height: 35,
  },
  listIcons: {
    backgroundColor: "#364c5f",
    padding: 10,
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
