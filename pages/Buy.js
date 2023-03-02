import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Box, Stack } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native";

export default function Buy({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.closeIcon} source={require("../assets/icons/ic_close.png")} />
      </TouchableOpacity>
      <ScrollView>
        <Image
          style={styles.Image}
          source={require("../assets/img_header_subscription.png")}
        />
        <Box style={styles.bannerText}>
          <Stack style={styles.listText}>
            <Ionicons name="ios-checkmark-circle" size={18} color="white" />
            <Text style={styles.text}>Unlimited Usage</Text>
          </Stack>
          <Stack style={styles.listText}>
            <Ionicons name="ios-checkmark-circle" size={18} color="white" />
            <Text style={styles.text}>Unlimited all features</Text>
          </Stack>
          <Stack style={styles.listText}>
            <Ionicons name="ios-checkmark-circle" size={18} color="white" />
            <Text style={styles.text}>Ads free experience</Text>
          </Stack>
        </Box>

        <Box style={{ marginTop: 10 }}>
          <Stack style={styles.button}>
            <Text style={styles.buttonText}>Monthly (Charges every month)</Text>
            <Text style={styles.price}>₹950.00/Month</Text>
          </Stack>
          <Stack style={styles.button}>
            <Text style={styles.buttonText}>Yearly (Charges every year)</Text>
            <Text style={styles.price}>₹9500.00/Year</Text>
          </Stack>
          <ImageBackground
            source={require("../assets/img_btn_intro_subscription.png")}
            resizeMode="stretch"
            style={styles.buttonImage}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 20,
                color: "white",
              }}
            >
              Lifetime, one-time payment
            </Text>
            <Text style={styles.price}>₹3850.00/Lifetime</Text>
          </ImageBackground>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.freeText}>Continue limited version</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Cancel anytime
          </Text>
          <Text style={styles.desc}>
            The payment will be charged to your Google Play account within 24
            houres period to the end of the free tree trial period - if
            applicable - or at the confirmation of your purchase. Ypur
            subscription automatically renews unless auto-renew is turned off at
            least 24 houres before the end of the current period. You can cancle
            auto subscription period. Your Google Play account will be charged
            for renewal within 24 hours period to the end of current period, and
            indentify the cost of renewal. We take the satisfaction and security
            of our customers every seriously. By signing up to the subscription,
            you agree with our
            <Text
              style={{
                color: "white",
                fontSize: 13,
                textDecorationLine: "underline",
              }}
            >
              Terms of use
            </Text>{" "}
            and{" "}
            <Text
              style={{
                color: "white",
                fontSize: 13,
                textDecorationLine: "underline",
              }}
            >
              Privacy Policy.
            </Text>
          </Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11181e",
    height: "100%",
  },
  Image: {
    width: "100%",
    height: 300,
  },
  close: {
position: 'absolute',
top: 30,
left: 30,
zIndex: 99,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  bannerText: {
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  listText: {
    flexDirection: "row",
    fontWeight: "700",
    fontSize: 18,
    color: "white",
    gap: 5,
    marginVertical: 5,
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#282f34",
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 50,
    marginTop: 10,
    height: 80,
    justifyContent: "center",
    marginVertical: 5,
  },
  buttonImage: {
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    height: 80,
    borderRadius: 0,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    color: "white",
  },
  price: {
    textAlign: "center",
    color: "#e7e7e8",
  },
  freeText: {
    color: "#585d61",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  desc: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#585d61",
    marginTop: 20,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
