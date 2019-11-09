import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ReportTab from './ReportTab'

export const ReportStack = StackNavigator(
    
    {
        ReportTab: { screen: ReportTab },
    }, 
    
    {
        initialRouteName: 'ReportTab',
    }
)