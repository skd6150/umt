import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class ReportTab extends Component 
{
    // 네비게이터 옵션
    static navigationOptions = {
        header: null
    }

    // 신고를 위해 입력되는 값들
    state = {
        phonenumber: ""
    }
    
    // '신고' 탭에 표시되는 내용
    render() {
        return (
            <View style={styles.container}>
                <View>
                <TextInput
                    label='배달부의 전화번호'
                    value={''}
                    onChangeText={text => this.setState({ phonenumber })}
                />
                </View>
                <View>

                </View>
                <View>
                <TextInput
                    label='메뉴'
                    value={''}
                    onChangeText={text => this.setState({ phonenumber })}
                />
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
        marginVertical: 20,
        marginHorizontal: 10
    },

});