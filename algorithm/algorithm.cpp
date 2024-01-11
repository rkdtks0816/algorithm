/*
모든 정점을 찍고
다시 1번으로 돌아오기
최소비용 출력
*/
/*
N : 1 ~ 12
정점 사이로 이동할 수 없는 곳은 0으로 표기
한번씩만 들를 수 있음
*/
#include<iostream>

using namespace std;

// input
int N; // 정점 개수
int costs[13][13]; // 정점사이 비용
// variable
int visited[13]; // 방문여부 저장
// output
int ans = 2e9; // 최소 비용

// 초기화
void Init() {
	cin >> N;
	for (int nr = 0; nr < N; nr++) {
		for (int nc = 0; nc < N; nc++) {
			cin >> costs[nr][nc];
		}
	}
	// 1번 방문 표시
	visited[0] = 1;
}

void DFS(int level, int now, int now_cost) {
	// 모든 정점 -> 기저조건 level이 N까지
	if (level == N - 1) {
		if (costs[now][0] == 0) return;
		// 다시 1번으로 돌아가야함
		now_cost += costs[now][0];
		// 최소값인지 확인
		if (now_cost < ans) {
			ans = now_cost;
		}
		return;
	}
	// 반복문
	for (int ni = 0; ni < N; ni++) {
		int next = ni;
		// 갈 수 있는 정점 이동 costs[now][i] != 0;
		if (costs[now][next] == 0) continue;
		// 방문한 노드라면 continue;
		if (visited[next] == 1) continue;
		// 갈 수 있다면 방문 표시, 재귀
		visited[next] = 1;
		DFS(level + 1, next, now_cost + costs[now][next]);
		// 재귀 나와서 다시 방문 X 표시
		visited[next] = 0;
 	}
}

// Output
void Output() {
	cout << ans;
}

int main() {
	Init();
	DFS(0, 0, 0);
	Output();
	return 0;
}