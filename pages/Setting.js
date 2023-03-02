import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  Stack,
  Text,
} from "@react-native-material/core";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Setting({ navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Stack style={{ paddingTop: 30, paddingBottom: 10 }}>
        <Stack style={styles.header}>
          <Stack style={styles.row}>
            <Ionicons onPress={()=> {navigation.goBack()}} name="ios-chevron-back-sharp" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
              Settings
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('Buy')}>
          <Stack style={styles.flex}>
            <Stack style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1a252e', width: '100%', paddingHorizontal: 20, borderRadius: 20 }}>
              <Stack>
                <Text style={{color:'white', fontSize: 24, fontWeight: '600'}}>Go Premium</Text>
                <Text style={{color:'white', fontSize: 12}}>Unlock All Features & No-ads</Text>
              </Stack>
              <Image style={{height: 130, width: 160, marginLeft:30}} source={require('../assets/img_upgrade_to_pro.png')}/>
            </Stack>
          </Stack>
      </TouchableOpacity>
      <View>
        <Text style={{color: 'white', marginLeft: 20, marginBottom: 10, fontWeight: '600', textTransform: 'uppercase', fontSize: 12}}>General</Text>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="restore"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Restore</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="book-open-variant"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Terms Of Services</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="security"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Privacy Policy</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('manage_subscription')} style={styles.flex}>
          <Stack style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons
              style={styles.listIcons}
              name="cash-outline"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Manage Subscription</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'white', marginLeft: 20, marginBottom: 10, fontWeight: '600', textTransform: 'uppercase', fontSize: 12}}>General</Text>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="restore"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Rate Us</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="book-open-variant"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Share App</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={styles.listIcons}
              name="security"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Contact Us</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>console.log('Hello Worls')} style={styles.flex}>
          <Stack style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons
              style={styles.listIcons}
              name="cash-outline"
              size={16}
              color="white"
            />
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white' }}>Restore</Text>
          </Stack>
          <MaterialIcons
            name="arrow-forward-ios"
            style={{ marginTop: 10 }} 
            size={16}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
