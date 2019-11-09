import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// 하단 탭에 들어가는 컴포넌트
import ReportTab from './ReportTab/ReportTab'
import SearchTab from './SearchTab/SearchTab'

// 하단 탭 네비게이터의 설정을 저장하는 obj
const BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        ReportTab: { screen: ReportTab },
        SearchTab: { screen: SearchTab },
    },
    {
        initialRouteName: 'ReportTab',
        activeColor: '#EF7777',
        inactiveColor: '#55595E',
        barStyle: { backgroundColor: '#FFFFFF' },
    }
);

// 하단 탭 네비게이터 생성
const AppTabContainet = createAppContainer(BottomTabNavigator);

export default class MainScreen extends Component {

    // 상단 네비게이터 바 옵션
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
    
    // 하단 네비게이터 바 표시
    render() {
        return (
            <AppTabContainet />
        )
    }
}

