/*
	동굴 탐사 로봇 두 대
	획득한 정보 공유 통신
	통신을 위해 이동해야 하는 거리의 합의 최솟값을 계산
*/
/*
조건
	1번부터 N번
	통로는 N - 1번
		두 방만 연결
	통신을 위해서는 같은 통로 위에 위치
		양 끝방은 같은 통로로 간주
	N : 1 ~ 100000
	통로의 길이는 1000을 넘지 않음
*/
#include<iostream>;

using namespace std;

// 구조체 연결방, 길이
struct ConnectRoom {
	int roomNum;
	int roomLen;
};

// 입력값
int N; // 방의 개수
ConnectRoom roomMap[100001]; //  연결된 방과 길이 배열 저장
// 변수

// 출력값
int ans = 2e9;

// 입력
void init() {
	cin >> N;
	for (int ni = 0; ni < N; ni++) {
		int tmpRoom1, tmpRoom2, tmpLen;
		cin >> tmpRoom1 >> tmpRoom2 >> tmpLen;
		roomMap[tmpRoom1] = { tmpRoom2, tmpLen };
		roomMap[tmpRoom2] = { tmpRoom1, tmpLen };
	}
}

void runSimulate(int now1, int now2) {
	// 같은 통로이면 리턴
	if () {
		// 최솟값 확인
		if (ans > )
		return
	}
	// 
}

int main() {

	return 0;
}