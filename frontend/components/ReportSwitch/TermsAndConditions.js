import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

// ScrollView가 끝에 근접했는지 확인하는 Method
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

export default class TermsAndConditions extends Component 
{
    // 동의 상태 확인
    state = {
        scrolled: false,
    }

    // '신고' 탭으로 이동하는 Method
    moveToReport = () => {
        this.props.navigation.navigate('Report');
    }

    // 네비게이터 옵션
    static navigationOptions = {
        header: null
    }
    
    // '신고' 탭에 표시되는 내용
    // 약관 내용은 누군가 써주세요
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.container_button}>
                    <Text style={styles.title}>이용 약관</Text>
                </View>
                <View style={styles.container_scrollview}>
                <ScrollView onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                        this.setState({scrolled: true})
                    }
                    }}>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                    <Text>quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog quick brown fox jumps over the lazy dog</Text>
                </ScrollView>
                </View>
                </View>
            <View style={styles.container_button}>
            <Button mode='contained' disabled={ !this.state.scrolled } onPress={ ()=>this.moveToReport() } 
            style={ this.state.scrolled ? styles.button : styles.buttonDisabled }>
              <Text style={styles.buttonLabel}>약관에 동의합니다.</Text>
            </Button>
            </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container:{
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    flex: 10
  },

  container_button:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1
  },

  container_scrollview:{
    marginTop: 20,
    flex: 15,
    padding: 5,
    borderColor: '#999',
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2
  },

  title: {
      fontSize: 22,
      alignSelf: 'center',
  },

  button:{
      backgroundColor: '#EF7777',
  },

  buttonDisabled:{
    backgroundColor: '#999',
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

})
