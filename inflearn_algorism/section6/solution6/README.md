### 📚 공주 구하기
1. 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
2. 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가면 동그랗게 앉게 한다.
3. 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
4. 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
5. 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
6. 마지막까지 남는 왕자가 공주를 구하러 갈 수 있다.
7. N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

#### 🎯 정리
- queue를 사용한 문제 간단했다.
- 왕자 수만큼 Array를 1번부터 수만큼 만든다.

```js
const princes = Array.from({ length: numberPrinces }, (_, i) => i + 1);
```

- 배열 크기가 1보다 클 동안 `while`문을 돈다.
- 여기서 외처야하는 `call` 숫자가 1부터 증가하여 만약 `call`과 왕자가 외친 숫자와 같다면 그 왕자는 제외시켜준다.

```js
if (count % call === 0) {
  princes.shift();
} 
```

- 그리고 `call`과 왕자가 외친 숫자랑 다르면 queue처럼 제일 앞에 위치한 왕자를 제일 뒤로 옮겨준다.

```js
princes.push(princes.shift());
```

- 배열의 첫번째 위치를 반환시켜준다.