### 📚 마구간 정하기(결정 알고리즘)
1. N개의 마구간이 수직선상에 있다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간 간에 좌표가 중복되는 일은 없다.
2. 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않는다.
3. 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치해야 한다.
4. C 마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하라.

#### 🎯 정리
- 이분검색을 사용하여 결과값을 도출해내는 문제.
- 결정 알고리즘은 대부분의 경우에 이분검색을 사용하자.
- 이전 이분검색 문제들과 비슷한 문제들이다. 하지만 문제를 이해하기가 어려웠다.
- 기본적인 이분 검색 로직은 전문제들과 같고 그 안에서 count해주는 부분의 로직만 변경해줌으로써 해결
