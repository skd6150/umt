import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { ListItem } from 'react-native-material-ui';

// Test용 데이터 array : 나중에 지울것
const ThiefList = [
    {
        phonenumber: "010-ffwf-fnwa",
        company: "배달병",
        food: "치킨",
        time: "2010.12.04",
        trust: 3 // 1 == Good, 2 == Bad, 3 == Worst?
    },
    {
        phonenumber: "010-dswf-fjsf",
        company: "민달의 배족",
        food: "피자",
        time: "2100.11.11",
        trust: 1 // 1 == Good, 2 == Bad, 3 == Worst?
    },
    {
        phonenumber: "010-dswf-fjsf",
        company: "회사",
        food: "분식",
        time: "1945.08.15",
        trust: 2 // 1 == Good, 2 == Bad, 3 == Worst?
    },
    {
        phonenumber: "010-aaaa-bbbb",
        company: "민달의 배족",
        food: "한식",
        time: "2019.11.08",
        trust: 1 // 1 == Good, 2 == Bad, 3 == Worst?
    },
];

export default class SearchTab extends Component 
{
    // Flatlist 관련 state
    state = {
      refreshing: false,
      data: ThiefList,
      // TODO: backend 구현 내용에 맞게 받을 데이터 수정
    };

    // 리스트에 끝에 도달하면 호출되는 Method
    onEndReached = () => {};

    // Pull to Refresh를 시도할 때 호출되는 Method
    onRefresh = () => {};
    
    // 리스트를 클릭할 때 호출되는 Method
    onPress = () => {};

    // 리스트의 내용을 출력할 때 호출되는 Method
    onRenderItem = ({ item }) => {
        return (
            <ListItem
                divider
                centerElement={{
                    primaryText: item.phonenumber,
                    tertiaryText: item.company
                }}
                onPress={this.onPress}
            />
        );
    };

    // 아래 네비게이션 바에 관한 옵션
    static navigationOptions = {
        title: "검색",
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name='search' size={24} color={tintColor}/> 
        ),
    }

    // '검색' 탭에 표시되는 내용
    render() {
        return (
            <FlatList 
            data={this.state.data}
            renderItem={this.onRenderItem}
            keyExtractor={(item, index) => item.id}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={1}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            />       
        );
    }
}