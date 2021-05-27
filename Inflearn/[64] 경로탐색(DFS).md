# 인프런 알고리즘 문제풀이(C/C++)

## [64]: 경로탐색 (DFS)

### 🌴 문제

방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요. <br>
아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 <br>
1 2 3 4 5 <br>
1 2 5 <br>
1 3 4 2 5 <br>
1 3 4 5 <br>
1 4 2 5 <br>
1 4 5 <br>
총 6 가지입니다.<br>
<img src="https://user-images.githubusercontent.com/49135797/119864544-af5a7b00-bf55-11eb-9c68-adc9c5b2ad2b.png" width="400px" height="200px"/>

#### ◻ 입력

첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. <br>
그 다음부터 M줄에 걸쳐 연결정보가 주어진다.<br>
입력예시 : <br>
5 9<br>
1 2<br>
1 3<br>
1 4<br>
2 1<br>
2 3<br>
2 5<br>
3 4<br>
4 2<br>
4 5<br>

#### ◻ 출력

총 가지수를 출력한다.<br>
출력예시 : 6

---

### 💡 구현 IDEA

**핵심포인트**<br>

- ch배열은 특정 노드를 방문했는지 여부를 체크하기 위한 배열
- `ch[i] = 0;`<br>
  뒤로 물러나서, 새로운 경로 탐색 시 방문할 수 있도록 다시 0으로 초기화하는 과정이 중요함!!

### 🤠 code

```c++
#include <stdio.h>

int map[30][30], ch[30], n, cnt=0; //배열: 0으로 초기화

void DFS(int v) {
	int i;
	if (v == n) { //도착지점
		cnt++;
	}
	else {
		for (i = 1; i <= n; i++) { //갈 수 있는 정점을 판별
			if (map[v][i] == 1 && ch[i] == 0) { //갈 수 있는 정점이고, 아직 방문안했다면
				ch[i] = 1;
				DFS(i);
				ch[i] = 0; //0으로 다시 초기화해줘야 뒤로 물러났을때 다시 방문할 수 있음
			}
		}
	}
}

int main() {
	int m, i, a, b;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++) {
		scanf("%d %d", &a, &b);
		map[a][b] = 1;
	}
	ch[1] = 1;
	DFS(1);
	printf("%d\n", cnt);
	return 0;
}
```

### 📙 comment

**호출되는 과정**<br>
<img src="https://user-images.githubusercontent.com/49135797/119864413-918d1600-bf55-11eb-9e78-a03084c2e9a3.png" height="300px"/>
