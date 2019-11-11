import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { getData, getColor, stealFoodType, getName } from "../../tmp/fakedata";

export default class overView extends React.Component {
  static navigationOptions = {
    header: null
  };

  //getName도 arr배열에 넣어야됨
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="people-outline" size={120} color="black" />
          <View style={{ flexWrap: "wrap" }}>
            <Text style={{ fontSize: 30 }}>{getName()}</Text>
            <Text style={{ fontSize: 30 }}>PhoneNumber</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 60 }}>Company</Text>
        </View>
        <View>
          <Text style={{ fontSize: 60 }}>Credit rating</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  overview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
