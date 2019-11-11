import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchList from "./SearchList";
import ListDetail from "./ListDetail";

const SearchStack = createStackNavigator(
  {
    List: { screen: SearchList },
    Detail: { screen: ListDetail }
  },

  {
    initialRouteName: "List"
  }
);

const SearchStackContainer = createAppContainer(SearchStack);

export default SearchStackContainer;
