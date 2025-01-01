// this code is for a program that checks if a person is eligible to get a driver's license using Logical operators and if else statements in C++
#include <iostream>

int main() {
  int age = 16;
  bool has_permit = true;
  bool passed_test = false;

  if (age >= 16 and has_permit and passed_test) {
    std::cout << "Congratulations! You can get your driver's license!\n";
  }
  else if (age < 16) {
    std::cout << "Sorry, you must be at least 16 years old.\n";
  }
  else if (!has_permit) {
    std::cout << "You need to get a learner's permit first.\n";
  }
  else if (!passed_test) {
    std::cout << "You need to pass the driving test.\n";
  }
  else {
    std::cout << "Please check your eligibility requirements.\n";
  }
  
  return 0;
}