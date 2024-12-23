//this code is about 'conditional statements' if, else if and else statements

#include <iostream>

int main() {
  
  double points = 25;

    if (points <= 25) {
  std::cout << "Midalya Almasya\n"; //it means Diamond Medal
}
else if (points < 20)  {
  std::cout << "Midalya Platiya\n"; //it means Platinium Medal
}
else if (points  < 15) {
  std::cout << "Midalya Dahabya\n"; //it means Gold Medal
}
else if (points < 10) {
  std::cout << "Midalya Fidya\n"; //it means Silver Medal
}
else if (points < 5) {
  std::cout << "Midalya Nohasya\n"; //it means Bronze Medal
}else {
  std::cout << "RiH\n"; //it means air he got nothing ;)
}
 return 0; 
}
