import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Stack } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";

export default function Buy({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/img_header_subscription.png")}
      />
      <Box style={{ justifyContent: "center", marginLeft: "33.33%" }}>
        <Stack style={{ flexDirection: "row", textAlign: "center", marginTop: 10, gap: 5 }}>
          <Ionicons name="ios-checkmark-circle" size={18} color="white" />
          <Text style={styles.text}>Unlimited Usage</Text>
        </Stack>
        <Stack style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 5 }}>
          <Ionicons name="ios-checkmark-circle" size={18} color="white" />
          <Text style={styles.text}>Unlimited all features</Text>
        </Stack>
        <Stack style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 5 }}>
          <Ionicons name="ios-checkmark-circle" size={18} color="white" />
          <Text style={styles.text}>Ads free experience</Text>
        </Stack>
      </Box>

      <Box style={{ marginTop: 10 }}>
        <Stack
          style={{
            padding: 10,
            backgroundColor: "#282f34",
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 20,
            marginTop: 10,
            height: 80,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 18,
              color: "white",
            }}
          >
            Monthly (Charges every month)
          </Text>
          <Text style={{ textAlign: "center", color: "#e7e7e8" }}>
            ₹950.00/Month
          </Text>
        </Stack>
        <Stack
          style={{
            padding: 10,
            backgroundColor: "#282f34",
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 20,
            marginTop: 10,
            height: 80,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 18,
              color: "white",
            }}
          >
            Yearly (Charges every year)
          </Text>
          <Text style={{ textAlign: "center", color: "#e7e7e8" }}>
            ₹9500.00/Year
          </Text>
        </Stack>
        <Stack
          style={{
            padding: 10,
            backgroundColor: "#282f34",
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 20,
            marginTop: 10,
            height: 80,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 18,
              color: "white",
            }}
          >
            Lifetime, one-time payment
          </Text>
          <Text style={{ textAlign: "center", color: "#e7e7e8" }}>
            ₹3850.00/Lifetime
          </Text>
        </Stack>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            color: "#585d61",
            fontSize: 12,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Continue limited version
        </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Cancel anytime
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 12,
            textAlign: "center",
            marginTop: 20,
            color: "#585d61",
            marginTop: 20,
          }}
        >
          The payment will be charged to your Google Play account within 24
          houres period to the end of the free tree trial period - if applicable
          - or at the confirmation of your purchase. Ypur subscription
          automatically renews unless auto-renew is turned off at least 24.
        </Text>
      </Box>
    </View>
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
  text: {
    color: "white",
  },
});
