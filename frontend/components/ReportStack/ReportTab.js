import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class ReportTab extends Component {
  // 네비게이터 옵션
  static navigationOptions = {
    header: null
  };

  // '신고' 탭에 표시되는 내용
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#EF7777" />
        <Text>ReportTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
