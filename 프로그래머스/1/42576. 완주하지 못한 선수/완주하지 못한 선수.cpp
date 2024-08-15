#include <string>
#include <vector>
#include <unordered_map>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    // 완주 해쉬
    unordered_map<string, int> completionHash;
    for (auto completionName : completion)
        completionHash[completionName] += 1;
    // 참가자 비교
    for (auto participantName : participant) {
        if (completionHash[participantName] > 0) {
            completionHash[participantName] -= 1;
            continue;
        }
        answer = participantName;
        break;
    }
    return answer;
}