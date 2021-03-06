## ✔ 타겟 넘버
### 🌈 level 2
### 🎈 dfs/bfs

## 1. 풀이 방법
- DFS(깊이 우선 탐색) 사용   
 끝까지 `leaf node`까지 간 다음 순서대로 실행   
 알고리즘 공부를 한지 오래되서 기억이 가물가물했다.   
 강의 하나를 봐도 이론으로는 알겠는데 어떻게 풀어야할지 몰랐다. 그래서 풀이를 참고하며 풀었다.   
 깊이 우선 탐색은 재귀호출로 사용가능

```javascript
numbers[node] *= 1
dfs(numbers, target, node+1)

numbers[node] *= -1
dfs(numbers, target, node+1)
```

- 위 부분이 가장 햇갈렸는데 다행히 이해했다.
- 차례대로 자식 노드로 내려가면서 모든 경우의 수를 만든다.
- `1 => 1 | -1 => 1 |-1 // 1 | -1 ..... `
- 그 후 `number.length`의 길이와 `node` 길이 (`leaf node` 일 때) 같을 때.
- `number`의 모든 값을 `sum` 해주고 `sum`과 `target`이 같으면 `answer++`
- 모든 경우의 수 

```
 [1, 1, 1, 1, 1]   
 [1, 1, 1, 1, -1]   
 [1, 1, 1, -1, -1]   
 [1, 1, 1, -1, 1]   
 [1, 1, -1, -1, 1]   
 [1, 1, -1, -1, -1]   
 [1, 1, -1, 1, -1]   
 [1, 1, -1, 1, 1]   
 [1, -1, -1, 1, 1]   
 [1, -1, -1, 1, -1]   
 [1, -1, -1, -1, -1]   
 [1, -1, -1, -1, 1]   
 [1, -1, 1, -1, 1]   
 [1, -1, 1, -1, -1]   
 [1, -1, 1, 1, -1]   
 [1, -1, 1, 1, 1]   
 [-1, -1, 1, 1, 1]   
 [-1, -1, 1, 1, -1]   
 [-1, -1, 1, -1, -1]   
 [-1, -1, 1, -1, 1]   
 [-1, -1, -1, -1, 1]   
 [-1, -1, -1, -1, -1]   
 [-1, -1, -1, 1, -1]   
 [-1, -1, -1, 1, 1]   
 [-1, 1, -1, 1, 1]   
 [-1, 1, -1, 1, -1]   
 [-1, 1, -1, -1, -1]   
 [-1, 1, -1, -1, 1]   
 [-1, 1, 1, -1, 1]   
 [-1, 1, 1, -1, -1]   
 [-1, 1, 1, 1, -1]   
 [-1, 1, 1, 1, 1]   
```

## 2. 다른 풀이

```javascript
function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    function dfs(count,sum){
        // 1, -1, 1,-1 반복하면서 dfs 수행 count가 numbers.length랑 같으면
        // sum이 target과 같으면 갯수 증가
        if(count === numbers.length){
            if(sum === target){
                answer++;
            }
            //출력 리턴
            return
        }

        dfs(count+1 , sum+numbers[count]);
        dfs(count+1 , sum-numbers[count]);
    }


    return answer;
}
```

<hr>
📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
