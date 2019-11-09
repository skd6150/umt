// fakedata.js
// Faker 패키지를 이용한 테스트용 가짜 데이터 표시
// Backend가 구현되면 지울것
import faker from 'faker';
import { Avatar } from 'react-native-paper';

// 랜덤 데이터 Return : 기본으로 10개의 데이터를 돌려줌
export const getData = (count = 10) => {
    const arr = []; // arr 형식으로 리턴함.
    for (let i = 0; i < count; i ++) {
      arr.push({
        key: faker.random.uuid(),
        phonenumber: faker.phone.phoneNumber('010-####-####'),
        company: faker.company.companyName(),
        // 신용도 : 1 == 안전, 2 == 주의, 3 == 위험
        credit: faker.random.number({min:1, max:3}),
        color: getColor(this.credit),
      });
    }
  
    return arr;
};

export const getColor = (credit) => {

    if (credit == 1)
    {
        return "#60E84E";
    }
    else if (credit == 2)
    {
        return "#E5783D";
    }
    else
    {
        return "#55595E";
    }
}