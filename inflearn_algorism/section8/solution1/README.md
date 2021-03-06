### 📚 재귀함수
1. 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성.

#### 🎯 정리
- 재귀함수를 이용하여 문제를 푸는 문제.
- 재귀함수를 작성할 때 꼬리재귀 최적화를 생각해보자.

```js
function dfs(K) {
  if (K === 0) {
    return;
  }

  result.unshift(K);
  dfs(K - 1);
}
```

```js
function dfs(K) {
  if (K === 0) {
    return;
  }

  dfs(K - 1);
  result.push(K);
}
```

- 위 두개중에 더 좋은 방법은 뭘까?
- `unshift`를 사용한 건 연산이 재귀함수를 호출하기 전에 실행되는거고 `push`는 재귀가 끝나고 실행되는 것이다.
- call stack에서 즉, 쌓일때와 빠져나올때 연산이 실행된다. 그렇기 때문에 전자는 3, 2, 1와 같이 실행되고, 후자는 1, 2, 3과 같이 실행된다.
- 뭐가 더 좋은 것일까