// fakedata.js
// Faker 패키지를 이용한 테스트용 가짜 데이터 표시
// Backend가 구현되면 지울것

// overview information

// phonenumber
// 회사 이름
// 신용도

// History{
// object to binding array
// ex)stealHistory:[{food, date}, {food, date}........]
// }

import { random, phone, company, name } from "faker";
import { Avatar } from "react-native-paper";

const foodArr = [
  "chicken",
  "pizza",
  "ttangshuunk",
  "frypotato",
  "bossam",
  "ddukbbokki"
];
const stealDate = [
  "2019/11/05",
  "2019/11/09",
  "2019/10/13",
  "2019/10/29",
  "2019/09/15",
  "2019/09/04"
];
const colors = ["#EF7777", "#e66815", "#33ff00"];

// 랜덤 데이터 Return : 기본으로 10개의 데이터를 돌려줌
export const getData = (count = 10) => {
  const arr = []; // arr 형식으로 리턴함.
  for (let i = 0; i < count; i++) {
    const key = random.uuid();
    const phonenumber = phone.phoneNumber("010-####-####");
    const _company = company.companyName();

    // 신용도 : 1 == 안전, 2 == 주의, 3 == 위험
    const credit = random.number({ min: 0, max: 3 });
    const color = getColor(this.credit);

    arr.push({
      key,
      phonenumber,
      company: _company,
      credit,
      color
    });
  }

  return arr;
};

//빼먹은 음식의 이름을 랜덤하게 리턴해주는 함수
export const stealFoodType = () => {
  const foodCount = (random.number() % 6) + 1;
  let stealHistory = {};
  for (let i = 0; i < foodCount; i++) {
    const randomStealType = random.number({ min: 0, max: 5 });
    const randomStealDate = random.number({ min: 0, max: 5 });
    stealHistory[foodArr[randomStealType]] = stealDate[randomStealDate];
  }

  for (let key in stealHistory) {
    console.log("key: " + key + ", value : " + stealHistory[key]);
  }

  return stealHistory;
};

export const getColor = credit => {
  return colors[credit];
};

export const getName = () => {
  const fakeName = name.findName();

  return fakeName;
};
