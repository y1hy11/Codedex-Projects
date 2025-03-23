#include <iostream>

int main()
{
    int country;
    std::cout << "Q1) What is the name of the World's Biggest Country? 💧\n\n";
    std::cout << "1) Usa\n";
    std::cout << "2) China\n";
    std::cout << "3) Canada\n";
    std::cout << "4) Russia\n";

    std::cin >> country;

    if (country == 4)
    {
        std::cout << "You got it correct!\n";
    }
    else
    {
        std::cout << "Wrong!!\n";
    }
}