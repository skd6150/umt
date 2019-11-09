import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SearchList from './SearchList'
import ListDetail from './ListDetail'

export const SearchStack = StackNavigator(
    
    {
        SeatchList: { screen: SearchList },
        ListDetail: { screen: ListDetail },
    }, 
    
    {
        initialRouteName: 'SearchList',
    }
)