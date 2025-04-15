//Leetcode 12 Integer to Roman
//Time Complexity: O(K) where K is the number of digits

public class Solution {
    public string IntToRoman(int num) {
        string romanNumber = "";
        int M = num / 1000;
        for (int i = 0; i < M; i++)
        {
            romanNumber += "M";
        }
        num = num - M * 1000;

        int C = num / 100;

        if(C == 9){
            romanNumber += "CM";
            num -= 900;
            C = 0;
        }
        if(C == 4){
            romanNumber += "CD";
            num -= 400;
            C = 0;
        }
        if (C > 4){
            romanNumber += "D";
            num = num - 500;
            C = C - 5;
        }
        for (int i = 0; i < C; i++)
        {
            romanNumber += "C";
        }
        num = num - C * 100;

        int X = num / 10;

        if(X == 9){
            romanNumber += "XC";
            num -= 90;
            X = 0;
        }
        if(X == 4){
            romanNumber += "XL";
            num -= 40;
            X = 0;
        }
        if (X > 4){
            romanNumber += "L";
            num = num - 50;
            X = X - 5;
        }
        for (int i = 0; i < X; i++)
        {
            romanNumber += "X";
        }
        num = num - X * 10;


        int I = num;

        if(I == 9){
            romanNumber += "IX";
            num -= 9;
            I = 0;
        }
        if(I == 4){
            romanNumber += "IV";
            num -= 4;
            I = 0;
        }
        if (I > 4){
            romanNumber += "V";
            num = num - 5;
            I = I - 5;
        }
        for (int i = 0; i < I; i++)
        {
            romanNumber += "I";
        }

        return romanNumber;
    }
}