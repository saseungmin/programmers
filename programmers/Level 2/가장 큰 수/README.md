# ✔ 가장 큰 수
## 🌈 level 2

## 풀이 방법
- 숫자로 받은 배열을 문자로 변경.
- `sort`를 문자열로 붙여서 비교

```javascript
  let num = str.sort((a,b) => {
      console.log(b+a,a+b);
      return (b+a) - (a+b);
  });

// console 값
//  330 303   
//  3034 3430   
//  334 343   
//  39 93   
//  349 934   
//  35 53   
//  345 534   
//  95 59   
```
- 그 후, 조인으로 붙여준다
```javascript
num.join('')
```

- 테스트 케이스 11에서 문제가 있었는데 질문하기 페이지에서 알 수 있었다.   
- 전부 0값일 때 00000 나와서 0으로 바꿔주면 된다.

---

📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/42746