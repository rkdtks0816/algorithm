/*
돌다리를 통과할 수 있는 모든 가능한 방법의 수 계산
*/
/*
조건
	왼쪽에서 오른쪽
	마법의 두루마리에 적힌 문자열의 
		순서대로 
		모두
	악마와 천사를
		번갈아가면서
		출발은 상관없다
	한칸 이상 전진
	건너뛰는 칸의 수는 상관없다
	방법이 없다면 0 출력
*/
#include<iostream>
#include<string>

using namespace std;

// 입력값
string ms; // magic str
string ss[2]; // stone str
// 변수
int slen; // 돌다리 길이
// 출력값
int ans; // 돌다리를 건널 수 있는 방법의 수

// 입력
void Input() {
	cin >> ms >> ss[0] >> ss[1];
	slen = ss[0].size();
}
// 시뮬레이션
// now : 뽑아야 하는 마법의 문자열 인덱스
// now_str : 지금 뽑아야하는 문자열 0 : 악마, 1 : 천사
void Simulate(int now, int now_str, int start_idx) {
	// 기저 조건 : 마법의 문자열 길이 만큼 뽑기
	if (now == ms.size()) {
		ans++;
		return;
	}
	// 반복문
	for (int si = start_idx; si < slen; si++) {
		// 마법의 문자열 뽑기
		if (ms[now] != ss[now_str][si]) continue;
		// 뽑기
		int next_str = now_str;
		if (now_str == 0) next_str = 1;
		else next_str = 0;
		Simulate(now++, next_str, si++);
		// 지나가기
		Simulate(now, now_str, si++);
	}
}
// 출력
void Output() {
	cout << ans;
}

int main() {
	Input();
	// 시작이 악마 : 0, 천사 : 1
	Simulate(0, 0, 0);
	Simulate(0, 1, 0);
	Output();
	return 0;
}