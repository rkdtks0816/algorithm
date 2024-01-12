// algorithm.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

//프로그래머스 여행경로
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int DAT[10001];
vector<string> answer;
bool isCheck;


void dfs(string now, int level, vector<vector<string>> tickets){
    
    //cout<<now<<endl;
    answer.push_back(now);
    
    if (level>=tickets.size()) return; 
    
    for (int i=0; i<tickets.size(); i++){
        if (DAT[i]==1) continue;
        
        if (now==tickets[i][0]){
            string next=tickets[i][1];  
            //cout<<next<<endl;
            DAT[i]=1;
            dfs(next, level+1, tickets);
            
            /*if (isCheck){
                answer.pop_back();
                DAT[i]=0;
            }    */       
        } 
    }


}

vector<string> solution(vector<vector<string>> tickets) {
    //vector<string> answer;
    string start=tickets[0][0];
    
    sort(tickets.begin(), tickets.end());
    
    //cout<<tickets[0][0];
    
    dfs(start,0, tickets);
    
    
    
    
    return answer;
}
// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.
