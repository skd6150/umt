import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
        accepted: false
    }

    // Component가 Mount되었을 때 실행됨
    componentDidMount()
    {
        if (this.state.accepted)
            this.moveToReport();
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
                    <Text>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</Text>
                    <Text>The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.</Text>
                    <Text>{'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.</Text>
                    <Text>{'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</Text>
                    <Text>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                    <Text>{'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</Text>
                    <Text>{'\u2022'} This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                    <Text>{'\u2022'} All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                                                        Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</Text>
                    <Text>{'\u2022'} From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</Text>
                    <Text>{'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</Text>
                    <Text>The use of this website is subject to the following terms of use</Text>
                </ScrollView>
                </View>
                </View>
            <View style={styles.container_button}>
            <TouchableOpacity disabled={ !this.state.scrolled } onPress={ ()=>this.moveToReport() } style={ this.state.scrolled ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Accept</Text></TouchableOpacity>
            </View>
      </View>
    );
  }

}

const styles = {

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
    flex: 15
  },

  title: {
      fontSize: 22,
      alignSelf: 'center',
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}
