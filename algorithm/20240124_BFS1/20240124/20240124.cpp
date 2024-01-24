#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int n;
vector<int> v[11];
queue<int> q;
int visited[11];

void input() {
	cin >> n;
	for (int y = 0; y < n;y++) {
		for (int x = 0; x < n; x++) {
			int a;

			cin >> a;
			if (a == 1) {
				v[y].push_back(x);
			}
		}
	}
}

void run() {
	for (int i = 0; i < n; i++) {
		if (v[i].size() != 0) {
			q.push(i);
			visited[i] = 1;
			cout << i << " ";
			break;
		}
	}

	while (q.size()!=0) {
		int now = q.front();
		q.pop();
		for (int i = 0; i < v[now].size(); i++) {
			if (visited[v[now][i]] != 0) continue;
			q.push(v[now][i]);
			visited[v[now][i]] = 1;
			cout << v[now][i] << " ";
		}
	}
}

int main() {
	input();
	run();
}