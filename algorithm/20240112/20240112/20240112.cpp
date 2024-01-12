#include <iostream>
#include <vector>
using namespace std;

int com, con, result;
vector<int> v[101];
int visited[101] = { 0 };

void input() {
	cin >> com;
	cin >> con;

	for (int i = 0; i < con; i++) {
		int a, b;
		cin >> a >> b;
		v[a].push_back(b);
		v[b].push_back(a);
	}
}

void run(int now) {

	for (int i = 0; i < v[now].size(); i++) {
		int next;
		next = v[now][i];

		if (visited[next] != 0) continue;

		visited[next] = 1;
		run(next);
	}
}

int main(){
	input();
	visited[1] = 1;
	run(1);
	
	for (int i = 2; i <= com; i++) {
		if (visited[i] == 1) result++;
	}
	cout << result;
	return 0;
}