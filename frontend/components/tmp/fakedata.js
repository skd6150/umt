// fakedata.js
// Faker 패키지를 이용한 테스트용 가짜 데이터 표시
// Backend가 구현되면 지울것
import { random, phone, company, commerce } from 'faker';
import { Avatar } from 'react-native-paper';

// 랜덤 데이터 Return : 기본으로 10개의 데이터를 돌려줌
export const getData = (count = 10) => {
    const arr = []; // arr 형식으로 리턴함.
    for (let i = 0; i < count; i ++) {

        const key = random.uuid();
        const phonenumber = phone.phoneNumber('010-####-####');
        const _company = company.companyName();

        // 신용도 : 1 == 안전, 2 == 주의, 3 == 위험
        const credit = random.number({min:1, max:3});
        const stealHistory = [];

      arr.push({key, phonenumber, company: _company, credit, stealHistory});
    }

    return arr;
};