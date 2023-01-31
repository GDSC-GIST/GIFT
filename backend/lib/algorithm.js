export function get_category(answers) {
  // 1 취미용품, 2 먹는것, 3 실용성, 4 실물, 5 문화 / 6 차, 7 아이, 8 반려동물
  // 0 yes, 1 no / 가중치 0~9
  const weights = [
    [
      // 1. 쉴 때 집에 있는 편이다.
      [4, 7, 9, 8, 0],
      [8, 4, 2, 1, 9],
    ],
    [
      // 2. 나는 꽃, 인형 같은 선물 받는 것을 좋아한다
      [7, 2, 0, 9, 5],
      [4, 4, 7, 0, 3],
    ],
    [
      // 3. 선물받는 것은 좋지만 포장 뜯는 것이 귀찮을 때가 있다
      [0, 9, 0, 0, 9],
      [8, 4, 8, 4, 5],
    ],
    [
      // 4. 특별한 날에 비싼 선물을 받는 것보다는 좋은 사람들과 있는 것이 더 좋다
      [0, 0, 0, 0, 9],
      [4, 2, 9, 7, 0],
    ],
    [
      // 5. 다음 중 가장 받고 싶은 물건은? [쌍절곤, 레스토랑 쿠폰, 화장품, 여행 배낭]
      [9, 0, 5, 6, 0],
      [0, 9, 0, 0, 0],
      [5, 0, 5, 5, 0],
      [4, 4, 0, 0, 9],
    ],
    [
      // 6. 특별
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(5);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  console.log(sum.indexOf(Math.max(...sum)));
  return sum.indexOf(Math.max(...sum)) + 1;
}

export function category1(answers) {
  // 취미용품
  const weights = [
    // 0 스포츠, 1 뷰티/패션, 2 문구, 3 장난감/게임, 4 커플상품, 5 도서
    [
      // 1. 나는 손재주가 좋다. - 0 yes, 1 no
      [0, 0, 2, 2, 0, 0],
      [2, 2, 0, 0, 0, 0],
    ],
    [
      // 2. 유행에 민감하고 나를 가꾸는 것에 관심이 있다.
      [0, 2, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 1],
    ],
    [
      // 3. 나는 주기적으로 하고 있는 운동이 있다.
      [2, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 0, 2],
    ],
    [
      // 4. 좋아하는 취미 생활을 자주하는 편이다.
      [1, 0, 0, 1, 0, 1],
      [0, 1, 1, 0, 1, 0],
    ],
    [
      // 5. 취미활동을 할 때 나는 보통 [혼자 ,친구, 연인]
      [0, 0, 1, 1, 0, 2],
      [2, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 8, 0],
    ],
    [
      // 6. 휴일에 꼭 해야되는 것은 [쇼핑, 여행, 데이트, 집에 짱박힘]
      [0, 2, 1, 1, 0, 2],
      [2, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 5, 0],
      [0, 0, 2, 2, 0, 2],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(6);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  // 10 스포츠, 11 뷰티/패션, 12 문구, 13 장난감/게임, 14 커플상품, 15 도서
  return 10 + sum.indexOf(Math.max(...sum));
}

export function category2(answers) {
  // 먹는것(일회성)
  const weights = [
    // 0 음식gif, 1 카페gif, 2 음식(실물), 3 건강식품
    [
      // 1. 음식은 같이 먹을 때 더 맛있다. - 0 yes, 1 no
      [2, 2, 1, 0],
      [0, 0, 1, 2],
    ],
    [
      // 2. 마음에 들지 않는 선물보단 무난한 선물이 좋다.
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ],
    [
      // 3. 나는 밥보다 디저트파이다
      [0, 2, 2, 0],
      [2, 0, 0, 2],
    ],
    [
      // 4. 엄마가 점심 먹으라고 카드를 주셨다! 나는[나가서, 배달]
      [0, 0, 2, 1],
      [2, 1, 0, 0],
    ],
    [
      // 5. 냉장고는 [풍족해야, 필요한 음식만]
      [0, 0, 2, 1],
      [2, 1, 0, 1],
    ],
    [
      // 6. 나는 [비건, 다이어트, 건강관리]
      [0, 5, 0, 5],
      [0, 0, 5, 5],
      [0, 0, 0, 9],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(4);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  // 20 음식gif, 21 카페gif, 22 음식(실물), 23 건강식품
  return 20 + sum.indexOf(Math.max(...sum));
}

export function category3(answers) {
  // 실용성
  const weights = [
    // 0 건강가전, 1 미용가전, 2 주방가전, 3 디지털
    [
      // 1. 방을 꾸미는 것보다 나를 꾸미는 것이 더 재밌다 - 0 yes, 1 no
      [2, 2, 0, 0],
      [0, 0, 2, 2],
    ],
    [
      // 2. 평소에 집에서 요리를 자주하는 편이다
      [0, 0, 2, 0],
      [2, 2, 0, 2],
    ],
    [
      // 3. 휴대폰은 고장날 때 바꾸는 것이 아니라 바꾸고 싶을 때 바꾸는 것이다
      [0, 0, 0, 2],
      [2, 2, 2, 0],
    ],
    [
      // 4. 건강관리에 관심이 많다
      [2, 1, 0, 0],
      [0, 0, 1, 1],
    ],
    [
      // 5. 내가 준비한 선물이 받는 사람에게 기대하는 효과는 [알뜰, 감동]
      [2, 0, 2, 0],
      [0, 2, 0, 2],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(4);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  // 30 건강가전, 31 미용가전, 32 주방가전, 33 디지털
  return 30 + sum.indexOf(Math.max(...sum));
}

export function category4(answers) {
  // 실물
  const weights = [
    // 0 인테리어, 1 피규어/굿즈, 2 꽃/식물, 3 장신구, 4 쓸데없/도전적/재미
    [
      // 1. 선물은 귀염뽀작한 것이 최고다  - 0 yes, 1 no
      [1, 2, 1, 2, 0],
      [1, 0, 1, 0, 1],
    ],
    [
      // 2. 선물은 재미있으면 장땡이다
      [0, 0, 0, 0, 2],
      [1, 1, 1, 1, 0],
    ],
    [
      // 3. 지속적인 관리가 필요한 선물을 지양한다
      [2, 2, 0, 2, 2],
      [0, 0, 2, 0, 0],
    ],
    [
      // 4. 나는 덕후이다
      [1, 5, 0, 0, 1],
      [1, 0, 2, 2, 1],
    ],
    [
      // 5. 어떤 설렘이 더 좋으신가요? [택배 배송, 지갑 두둑 쇼핑]
      [2, 2, 0, 0, 0],
      [0, 0, 2, 2, 2],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(5);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  // 40 인테리어, 41 피규어/굿즈, 42 꽃/식물, 43 장신구, 44 쓸데없/도전적/재미
  return 40 + sum.indexOf(Math.max(...sum));
}

function category5(answers) {
  // 문화
  const weights = [
    // 0 영화, 1 전시회, 2 연주회, 3 액티비티, 4 식사권, 5 숙박권, 6 축제장비
    [
      // 1. 돈이 많이 든다 해도 영화관이나 극장에는 한달에 최소 한 번은 가야한다 - 0 yes, 1 no
      [2, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1],
    ],
    [
      // 2. 사람 붐비는 것을 좋아한다
      [1, 1, 1, 2, 0, 0, 2],
      [0, 0, 0, 0, 1, 1, 0],
    ],
    [
      // 3. 놀기 위해 필요한 사소한 장비를 선물받는 것도 좋다
      [0, 0, 0, 1, 0, 0, 2],
      [1, 1, 1, 1, 1, 1, 0],
    ],
    [
      // 4. 휴가 때 가장 하고 싶은 것은? [전시회, 호캉스, 짜릿 액티비티]
      [1, 2, 2, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 5, 0],
      [0, 0, 0, 2, 0, 1, 1],
    ],
    [
      // 5. 우울한 당신의 마음을 가장 잘 위로해주는 것은? [글그림, 음악, 드라마영화, 산책, 운동]
      [0, 2, 0, 0, 0, 0, 0],
      [1, 0, 5, 0, 0, 0, 0],
      [5, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 0, 2, 0, 2, 2],
    ],
  ];
  const int_ans = answers.map((str) => {
    return parseInt(str, 10);
  });

  var sum = new Array(7);
  sum.fill(0);
  for (let i = 0; i < int_ans.length; i++) {
    for (let j = 0; j < weights[i][int_ans[i]].length; j++) {
      sum[j] += weights[i][int_ans[i]][j];
    }
    console.log(sum);
  }
  // 50 영화, 51 전시회, 52 연주회, 53 액티비티, 54 식사권, 55 숙박권, 56 축제장비
  return 50 + sum.indexOf(Math.max(...sum));
}
