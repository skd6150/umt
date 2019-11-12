// DelieverInfor.js
// '검색' 탭에서 자세한 정보를 볼 때 나오는 탭

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer, navigation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { getFood } from "../tmp/fakedata";
//import history from "./overViewAndHistory/history";

export default class Detail extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    data: getFood(10)
  };

  componentDidMount() {
    this.setState({
      data: getFood(10)
    });
  }

  onRenderItem = ({ item }) => {
    return (
      <List.Item
        title={item.randomStealType}
        description={item.randomStealDate}
      />
    );
  };
  // _renderItem = ({ item }) => {
  //   return <Text style={styles.history}>{item.randomStealDate}</Text>;
  // };

  // 자세한 내용을 보려고 할 때 탭에 표시되는 내용
  render() {
    const { navigation } = this.props;
    const dataBox = navigation.getParam("item", "nothing sent");
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignContent: "space-around"
      },

      CircleShapeView: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        backgroundColor: dataBox.color
      },
      overview: {
        flex: 1,
        backgroundColor: "powderblue",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
      },
      history: {
        flex: 1,
        backgroundColor: "steelblue",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
      },
      TextStyle: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.overview}>
          <Ionicons
            name="ios-happy"
            size={100}
            color={dataBox.color}
          ></Ionicons>
          <Text style={styles.TextStyle}>{dataBox.company}</Text>
          <Text style={styles.TextStyle}>{dataBox.companyPhoneNumber}</Text>
        </View>
        <View style={styles.history}>
          <FlatList
            date={this.state.data}
            renderItem={this.onRenderItem}
            keyExtractor={(item, key) => item.key}
          />
        </View>
      </SafeAreaView>
    );
  }
}
