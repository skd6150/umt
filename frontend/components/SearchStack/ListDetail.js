// ListDetail.js
// '검색' 탭에서 자세한 정보를 볼 때 나오는 탭

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListDetail extends Component 
{
    // 네비게이터 옵션
    static navigationOptions = {
        header: null
    }

    // 자세한 내용을 보려고 할 때 탭에 표시되는 내용
    
    // OverView에 필요한 내용
    // 전화번호 (phonenumber)
    // 회사 이름 (company)
    // 신용도 (credit)

    // History에 필요한 내용
    // 음식 - 날짜로 이루어진 object로 묶인 array
    // stealHistory : [{food, date}, {food, date} ....]

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.overview}>
                <Text>Overview</Text>
            </View>
            <View style={styles.steal_history}>
                <Text>History</Text>
            </View>
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
    },

    overview: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    steal_history: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});