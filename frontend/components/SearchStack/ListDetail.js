// DelieverInfor.js
// '검색' 탭에서 자세한 정보를 볼 때 나오는 탭

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer, navigation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class Detail extends Component {
  render() {
    // export default에서 paragrem을 읽을 수 있다.
    const { navigation } = this.props;
    const idk = navigation.getParam('item', 'nothing sent');
    console.log(idk);

    // return에서 JSX를 통해 idk의 값에서 내용을 표현하면 끝.
    return;
  }
}
