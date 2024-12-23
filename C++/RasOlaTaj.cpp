// RasOlaTaj Means Heads OR Tails in english

#include <iostream> // For std::cout
#include <cstdlib> // For std::rand()

int main() {
  srand(time(NULL));

  int num = std::rand() % 2;  // Generates a random number that's either 0 or 1

  if (num > 0.5) { 
    std::cout << "Ras\n"; //Head
  }
  else { 
    std::cout << "Taj\n"; //Tail
  }
  return 0;
}