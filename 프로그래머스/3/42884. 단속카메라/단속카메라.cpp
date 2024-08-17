#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> routes) {
    int answer = 1;
    // 진입이 빠른 순서로 정렬
    sort(routes.begin(), routes.end());
    // 나간 지점
    int routeEnd = routes[0][1];
    for (auto route : routes) {
        // 현재 차 나가고 다음 차가 들어올 때
        if (routeEnd < route[0]) {
            // 카메라 설치
            answer++;
            // 나간 지점 갱신
            routeEnd = route[1];
        }
        // 현재 차가 나가기 전에 다음 차가 나갈 때
        if (routeEnd >= route[1]) {
            // 나간 지점 갱신
            routeEnd = route[1];
        }
    }
    return answer;
}