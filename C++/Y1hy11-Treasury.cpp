#include <iostream>

int main()
{
    int pin;

    std::cout << "Y1hy11 Treasury\n\n"; // its means safe also

    std::cout << "Enter your PIN: ";
    std::cin >> pin;

    while (pin != 2340)
    {
        std::cout << "Incorrect PIN. Enter your PIN again: ";
        std::cin >> pin;
    }

    if (pin == 2340)
    {
        std::cout << "PIN accepted!";
    }
}