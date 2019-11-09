import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class ReportTab extends Component 
{
    // 아래 네비게이션 바에 관한 옵션
    static navigationOptions = {
        title: "신고",
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name='report' size={24} color={tintColor}/> 
        ),
    }

    // '신고' 탭에 표시되는 내용
    render() {
        return (
            <View style={styles.container}>
                <Text>ReportTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});