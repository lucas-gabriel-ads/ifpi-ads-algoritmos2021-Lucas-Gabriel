#include <stdio.h>
#include <iostream>
#include "lista.h"

using namespace std;

int main(){
	Lista L = no(8, no(1, no(5, no(8, no(8, no(12, NULL))))));
	cout << ocorrencias(8, L) << endl;
	cout << ultimo(L) << endl;
	exibe(inversa(L));	
	
	return 0;
}

