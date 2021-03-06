### 📚 결혼식
1. 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었다.
2. 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌릴려고 한다.
3. 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

#### 🎯 정리
- 그리디 알고리즘
- 주어진 정보 즉, 친구들이 몇시에 도착해서 몇 시에 떠날 것인지에 대한 정보를 새롭게 변경해줘야 한다.
- 겹치는 시간을 알아야하기 때문에 다음과 같은 형태로 배열을 변경해주어야 한다.
- 배열을 오름차순으로 정렬을 해주는데 온시간과 떠난시간을 나누고 온시간을 `s`, 떠난시간을 `e`로 나타내여 정렬을 해준다. 
- 이때, 만약 온 시간과 떠난 시간이 같은 경우 **떠난시간이 먼저오게** 해줘야 한다.
- 만약 온시간을 먼저 카운트를 해버리면 순간적으로 1이 더 많아지게 되버린다.


```js
// 5 ~~~~~~ 14
//      12 ~~~ 15
//             15 ~~~~~ 20
//          14 ~~~~ 18
//                      20 ~~~~~~~ 30
[
  [ 5, 's' ],  
  [ 12, 's' ],
  [ 14, 'e' ], // 떠난시간
  [ 14, 's' ], // 온시간이 같다.
  [ 15, 'e' ], 
  [ 15, 's' ],
  [ 18, 'e' ], 
  [ 20, 'e' ],
  [ 20, 's' ], 
  [ 30, 'e' ]
]
```

- 이제 이 상태에서 배열을 순회하여 `s`일때 (왔을때) 카운트 1을 증가시켜주고 `e`일 때, (떠났을때) 카운트를 1감소시켜준다.
- 그리고 카운트 값과 max값을 비교해 카운트가 가장 큰 값을 저장한 뒤 리턴시켜준다.