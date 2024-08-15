#include <string>
#include <vector>

using namespace std;

int answer = 0;

void BFS(vector<int> numbers, int target, int level, int sum) {
    // 주어진 숫자 개수
    if (level >= numbers.size()) {
        if (sum == target) answer++;
        return;
    }
    // 더할 때
    BFS(numbers, target, level + 1, sum + numbers[level]);
    // 뺄 때
    BFS(numbers, target, level + 1, sum - numbers[level]);
}

int solution(vector<int> numbers, int target) {
    BFS(numbers, target, 0, 0);   
    return answer;
}