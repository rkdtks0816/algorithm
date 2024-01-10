/*
1번 컴퓨터를 통해
바이러스에 걸리게 되는
컴퓨터의 수 출력
*/
/*
조건
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
int N, M;
vector<int> cp; // computer pair
void Init() {
	cin >> N >> M;
	int tmp_cp;
	cin >> tmp_cp;
	cp.push_back(tmp_cp);
}

// 1번 부터 시작
// 방문한 노드 체크
// 1번과 연결된 컴퓨터의 수 카운팅
// 컴퓨터의 수 출력'