// DelieverInfor.js
// '검색' 탭에서 자세한 정보를 볼 때 나오는 탭

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import overView from "./overViewAndHistory/overView";
//import history from "./overViewAndHistory/history";

class ListDetail extends Component {
  // 네비게이터 옵션
  static navigationOptions = {
    header: null
  };

  // 자세한 내용을 보려고 할 때 탭에 표시되는 내용
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overview}>
          <MaterialIcons name="people-outline" size={60} color="white" />
          <Button
            title="배달원의 자세한 정보는 여기!"
            color="#EF7777"
            onPress={() => this.props.navigation.navigate("Details")}
          />
        </View>
        <View style={styles.history}>
          <MaterialIcons name="library-books" size={60} color="dark" />
          <Button
            title="배달원의 빼먹은 내역!"
            color="#EF7777"
            onPress={() => this.props.navigation.navigate("Details")}
          />
        </View>
      </View>
    );
  }
}

const DetailStack = createStackNavigator(
  {
    Home: ListDetail,
    Details: overView
    //Historys: history
  },
  {
    initialRouteName: "Home"
  }
);

const DetailContainer = createAppContainer(DetailStack);

export default class Detail extends Component {
  render() {
    return <DetailContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-around"
  },
  overview: {
    flex: 1,
    backgroundColor: "powderblue",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  history: {
    flex: 1,
    backgroundColor: "steelblue",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  }
});
