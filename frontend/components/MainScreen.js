import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// 하단 탭에 들어가는 컴포넌트
import ReportTab from './ReportTab/ReportTab'
import SearchTab from './SearchTab/SearchTab'

// 하단 탭 네비게이터 생성
const BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        ReportTab: { screen: ReportTab },
        SearchTab: { screen: SearchTab },
    },
    {
        initialRouteName: 'ReportTab',
        activeColor: '#136FE8',
        inactiveColor: '#55595E',
        barStyle: { backgroundColor: '#FFFFFF' },
    }
);
  
const AppTabContainet = createAppContainer(BottomTabNavigator);

export default class MainScreen extends Component {

    static navigationOptions = 
    {
        title: '빼먹',
        headerStyle: 
        {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: 
        {
            fontWeight: 'normal',
        },
    }
    
    render() {
        return (
            <AppTabContainet />
        )
    }
}

