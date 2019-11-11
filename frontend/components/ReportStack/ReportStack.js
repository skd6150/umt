// ReportStack.js
// '신고' 탭의 내용을 표시하는 Stacknavigator를 정의합니다.

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TermsAndConditions from './TermsAndConditions';
import ReportTab from './ReportTab';

const ReportStack = createStackNavigator(
    {
        Term: { screen: TermsAndConditions },
        Report: { screen: ReportTab }
    }, 
    
    {
        initialRouteName: 'Term',
        headerBackTitleVisible: false
    }
);

const ReportStackContainer = createAppContainer(ReportStack);

export default ReportStackContainer;