import java.util.*;

class Solution {
    // string to int
    private static int stoi (String strNum) {
        return Integer.parseInt(strNum);
    }
    // int to string
    private static String itos (int intNum) {
        return Integer.toString(intNum);
    }
    // 전체 배열 숫자 중에 가장 큰 값 찾기
    private static int findMaxNum (String[] expressions) {
        int maxNum = 0;
        for (String expression : expressions) {
            String removeStr = expression.replaceAll("[^0-9]", "");
            String[] parts = removeStr.split("");
            for (String part : parts) {
                if (maxNum >= stoi(part)) continue;
                maxNum = stoi(part);
            }
        }
        return maxNum;
    }
    // n진법 10진법으로 바꾸기
    private static int ntod (String nNum, int base) {
        String[] parts = nNum.split("");
        int dNum = 0;
        for (String part : parts) {
            dNum *= base;
            dNum += stoi(part);
        }
        return dNum;
    }
    // 10진법 n진법으로 바꾸기
    private static String dton (int dNum, int base) {
        String nNum = "";
        int restNum = dNum;
        while(restNum >= base) {
            nNum = restNum % base + nNum;
            restNum /= base;
        }
        nNum = restNum % base + nNum;
        return nNum;
    }
    public String[] solution(String[] expressions) {
        String[] answer = {};
        // 전체 배열 숫자 중에 가장 큰 값 찾기
        int maxNum = findMaxNum(expressions);
        // X가 포함된 배열
        ArrayList<String> XList = new ArrayList<>();
        // X가 아닌 배열
        ArrayList<String> notXList = new ArrayList<>();
        // X가 포함된 배열 찾기
        for (String expression : expressions) {
            String[] parts = expression.split(" ");
            if (parts[4].equals("X")) XList.add(expression);
            else notXList.add(expression);
        }
        // 가능한 진법
        ArrayList<Integer> baseList = new ArrayList<>();
        // 가장 큰 값 + 1 진법 부터 확인
        for (int base = maxNum + 1; base <= 9; base++){
            // 전체 수식을 만족하는지 확인하는 플래그
            boolean flag = true;
            // 전체 수식 반복
            for (String notX : notXList) {
                // 수식 나누기
                String[] parts = notX.split(" ");
                // 답이 있는 수식이 진법을 만족하는지 확인
                int left = ntod(parts[0], base);
                int right = ntod(parts[2], base);
                int sum = parts[1].equals("+") ? left + right : left - right;
                // 진수화
                String sumStr = dton(sum, base);
                // 답이 같은지 확인
                if (parts[4].equals(sumStr)) continue;
                // 플래그 false
                flag = false;
                // 하나라도 만족 못하면 정지
                break;
            }
            // 모두 만족 하는지 확인
            if (!flag) continue;
            baseList.add(base);
        }
        // 임시 정답 배열
        ArrayList<String> tempAnswer = new ArrayList<>();
        // X 배열 반복
        for (String X : XList) {
            // 계산 값 개수 저장
            Set<String> sumSet = new HashSet<>();
            // 계산 값 값 저장
            String lastSum = "";
            // 가능한 진법 반복
            for (int base : baseList) {
                // X 배열 나누기
                String[] parts = X.split(" ");
                // X 배열 계산
                int left = ntod(parts[0], base);
                int right = ntod(parts[2], base);
                int sum = parts[1].equals("+") ? left + right : left - right;
                // 진수화
                String sumStr = dton(sum, base);
                // 해시에 넣기
                sumSet.add(sumStr);
                // 계산 값 저장
                lastSum = sumStr;
            }
            // 해시에 값이 하나인지 확인
            String answerSum = sumSet.size() > 1 ? "?" : lastSum;
            // X 값 바꾸기
            String answerX = X.replace("X", answerSum);
            // 최종 답 배열에 추가
            tempAnswer.add(answerX);
        }
        // 임시 정답배열 정답배열에 넣기
        answer = tempAnswer.toArray(new String[0]);
        return answer;
    }
}