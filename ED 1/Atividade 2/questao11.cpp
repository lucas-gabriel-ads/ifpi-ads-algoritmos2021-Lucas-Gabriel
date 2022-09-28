#include <stdio.h>
#include <iostream>
#include <string.h>

using namespace std;

main() {
	
	string nome1;
	string nome2;
    
    cout << "Informe um nome: ";
    cin >> nome1;
    
    cout << "Informe outro nome: ";
    cin >> nome2;
    
    if (nome1 == nome2) {
    	cout << "São IGUAIS!";
	}else{
		cout << "São DIFERENTES!";
	}
}
