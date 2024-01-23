/*
	두 학생 중 누가 더 잘했는지 알려줌
	M 번 질문
	학생 X의
		가장 높은 등수 U
		가장 낮은 등수 V
*/
/*
	학생 1부터 시작
	동점일 경우는 없다.
	입력 앞의 학생이 더 잘헀다
*/
#include<iostream>
#include<vector>

using namespace std;

// 입력값
int N, M, X; //학생수, 질문수, 타겟학생
// 변수
// 0: high, 1: low
vector<int> position[2][100001];
int visited[2][100001];
// 출력값
int U, V;

// 입력
void init() {
	cin >> N >> M >> X;
	U = 1;
	V = N;
	for (int mi = 0; mi < M; mi++) {
		int tmpHigh, tmpLow;
		cin >> tmpHigh >> tmpLow;
		position[0][tmpLow].push_back(tmpHigh);
		position[1][tmpHigh].push_back(tmpLow);
	}
}
// 시뮬
// 타겟 학생을 시작
void runSimulation(int now, int nowPosition) {
	// 타고타고 들어가기
	for (int i = 0; i < position[nowPosition][now].size(); i++) {
		int next = position[nowPosition][now][i];
		
		if (visited[nowPosition][next] == 1) continue;
		visited[nowPosition][next] = 1;
		if (nowPosition == 0) U++;
		else V--;
		runSimulation(next, nowPosition);
	}
}
void output() {
	cout << U << endl << V;
}

int main() {
	init();
	runSimulation(X, 0);
	runSimulation(X, 1);
	output();

	return 0;
}