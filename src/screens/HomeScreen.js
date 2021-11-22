import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Customdatepicker from "../components/datepicker";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View style={{ marginHorizontal: 20 }}>
        <Text>Birth Date </Text>
        <Customdatepicker
          textStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: "gray",
            borderWidth: 1,
          }}
          // onDateChange={(value) => console.log("Date Changed:" + value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default HomeScreen;
