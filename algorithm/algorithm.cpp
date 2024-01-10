/*
1번 컴퓨터를 통해
바이러스에 걸리게 되는
컴퓨터의 수 출력
*/
/*
조건
	컴퓨터의 수 100이하
	컴퓨터 번호는 1번부터
*/
#include<iostream>
#include<vector>
using namespace std;

/*
init
	컴퓨터의 수
	컴퓨터 쌍의 수
	연결된 컴퓨터 번호 쌍
*/

// input
int N, M;
vector<int> cpv[101]; // computer pair vector
// variable
int visited[101];
// output
int ans = 0;

void Init() {
	cin >> N >> M;

	// 입력값 노드별 벡터에 저장
	for (int mi = 0; mi < M; mi++) {
		int tmp_cp1, tmp_cp2;
		cin >> tmp_cp1 >> tmp_cp2;
		cpv[tmp_cp1].push_back(tmp_cp2);
		cpv[tmp_cp2].push_back(tmp_cp1);
	}
}

void DFS(int now) {
	// 1번 부터 시작
	for (int vi = 0; vi < cpv[now].size(); vi++) {
		int next = cpv[now][vi];

		// 방문한 노드 체크
		if (visited[next] == 1) continue;
		visited[next] = 1;
		// 1번과 연결된 컴퓨터의 수 카운팅
		ans++;
		DFS(next);
	}
}

// 컴퓨터의 수 출력
void Output() {
	cout << ans;
}

int main() {
	Init();
	visited[1] = 1;
	DFS(1);
	Output();
	return 0;
}