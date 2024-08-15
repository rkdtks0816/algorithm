#include <vector>
#include <set>
using namespace std;

int solution(vector<int> nums)
{
    int answer = 0;
    set<int> setNums;
    // 폰켓몬 종류 개수
    for (int ni = 0; ni < nums.size(); ni++)
        setNums.insert(nums[ni]);
    // N/2, 폰켓몬 종류 둘 중 작은거 출력
    answer = (nums.size() / 2) < setNums.size() ? nums.size() / 2 : setNums.size();
    return answer;
}