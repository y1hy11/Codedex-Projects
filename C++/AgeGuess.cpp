// This Code Shows how the while loop works in C++

#include <iostream>

int main() {
  int age;

  std::cout << "Guess the age: ";
  std::cin >> age;

  while (age != 20) {
    std::cout << "Wrong guess!! Guess the age: ";
    std::cin >> age;
  }

  std::cout << "§§You guessed it correctly§§";

}