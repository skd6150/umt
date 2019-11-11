import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ReportTab from './ReportTab'

const ReportStack = createStackNavigator(
    {
        Report: { screen: ReportTab },
    }, 
    
    {
        initialRouteName: 'Report',
        headerBackTitleVisible: false
    }
);

const ReportStackContainer = createAppContainer(ReportStack);

export default ReportStackContainer;