### 📚 이분검색
1. N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성 
2. 단 중복값은 존재하지 않는다.

#### 🎯 정리
- 이분검색을 사용하여 문제를 푸는 것
- 몇 번째 위치인지를 확인하기 때문에 투포인트 알고리즘으로 풀 수 있다.
- 시작과 끝의 포인터를 잡고 중간값을 찾아 해당 값이 찾고자하는 값일 경우에 중간값에 + 1을 해준다.

```js
if (sortedArr[middle] === M) {
  result = middle + 1;
  break;
}
```

- 만약 찾는 값보다 중간 값이 더 큰 경우에는 해당 중간 값보다 큰 값은 필요없기 때문에 중간값 포함해서 버린다. 그렇기 떄문에 중간값 - 1을 해준뒤 마지막 포인트의 위치를 변경해준다.

```js
if (sortedArr[middle] > M) {
  end = middle - 1;
}
```

- 만약 찾는 값보다 중간 값이 더 작은 경우에는 중간값을 포함하여 더 작은 값들은 필요가 없기 때문에 시작 포인트 위치를 중간값 + 1로 변경해준다.

```js
if (sortedArr[middle] > M) {
  end = middle - 1;
}
```