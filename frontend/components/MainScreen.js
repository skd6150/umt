import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// 하단 탭에 들어가는 컴포넌트
import SearchStackContainer from './SearchStack/SearchStack';
import ReportSwitchContainer from './ReportSwitch/ReportSwitch';

// 하단 탭 네비게이터의 설정을 저장하는 obj
const BottomTabNavigator = createMaterialBottomTabNavigator(

    {
        Report: { 
            screen: ReportSwitchContainer,
            navigationOptions:  {
                title: "신고",
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name='report' size={24} color={tintColor}/> 
                ),
            }
        },
        Search: { 
            screen: SearchStackContainer, 
            navigationOptions:  {
                title: "검색",
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name='search' size={24} color={tintColor}/> 
                ),
            }
        },
    },

    {
        initialRouteName: 'Report',
        activeColor: '#EF7777',
        inactiveColor: '#55595E',
        barStyle: { backgroundColor: '#FFFFFF' },
    }
);

// 하단 탭 네비게이터 생성
const AppTabContainet = createAppContainer(BottomTabNavigator);

export default class MainScreen extends Component {

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
        });
    }
    componentWillUnmount() {
        this._navListener.remove();
    }

    // 상단 네비게이터 바 옵션
    static navigationOptions = 
    {
        title: '빼먹',
        headerStyle: 
        {
            backgroundColor: '#EF7777',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
            fontWeight: 'normal',
            fontSize: 25
        },
    }
    
    // 하단 네비게이터 바 표시
    render() {
        return (
            <AppTabContainet/>
        )
    }
}

