#include <iostream>
#include <cstdlib>

int main(){
  srand(time(NULL));

  int Number = std::rand() % 7;  

if (Number == 1){
  std::cout << "Don't pursue happiness – create it.\n";
} else if (Number == 2) {
  std::cout << "All things are difficult before they are easy.\n";
} else if (Number == 3) {
  std::cout << "The early bird gets the worm, but the second mouse gets the cheese.\n";
} else if (Number == 4) {
  std::cout << "Someone in your life needs a letter from you.\n";
} else if (Number == 5) {
  std::cout << "The fortune you search for is in another cookie.\n";
} else if (Number == 6) {
  std::cout << "Help! I'm being held prisoner in a Chinese bakery!\n";
} else {
  std::cout << "🥠 The fortune you search for is in another cookie.\n";
  return 0;
}
  
}
