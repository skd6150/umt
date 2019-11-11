// ReportSwitch.js
// '신고' 탭의 내용을 표시하는 Switchnavigator를 정의합니다.

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TermsAndConditions from './TermsAndConditions';
import ReportTab from './ReportTab';

const ReportSwitch = createSwitchNavigator(
    
    {
        Term: { screen: TermsAndConditions },
        Report: { screen: ReportTab },
    }, 
    
    {
        initialRouteName: 'Term',
        headerBackTitleVisible: false,
        gesturesEnabled: false,
    }
);

const ReportSwitchContainer = createAppContainer(ReportSwitch);

export default ReportSwitchContainer;