#include <stdio.h>
#include <iostream>
#include <string.h>

using namespace std;

main() {
	
	float voto, totalvotos, v45, v13, v23, v99, v98, v0;
	float porc45, porc13, porc23;
	
	while (true){
		cout << "Informe seu voto: ";
		cin >> voto;
		if (voto == -1){
			break;
		}else{
			if (voto == 45 || voto == 13 || voto == 23 || voto == 98 || voto == 99 || voto == 0){
				if (voto == 45){
					v45 += 1;
				}
				if (voto == 13){
					v13 += 1;
				}
				if (voto == 23){
					v23 += 1;
				}
				if (voto == 99){
					v99 += 1;
				}
				if (voto == 98){
					v98 += 1;
				}
				if (voto == 0){
					v0 += 1;
				}
				totalvotos += 1;
			}else{
				cout << "VOTO INVALIDO!\n";
			}	
		}
	}
	
	porc45 = (v45 / totalvotos) * 100;
	porc13 = (v13 / totalvotos) * 100;
	porc23 = (v23 / totalvotos) * 100;
	
	cout << "O Candidato Serra recebeu " << porc45 << "% dos votos!\n";
	cout << "A Candidata Dilma recebeu " << porc13 << "% dos votos!\n";
	cout << "O Candidato Ciro Gomes recebeu " << porc23 << "% dos votos!\n";
	cout << "Outros candidatos somaram " << ((v98 / totalvotos) * 100) << "% dos votos!\n";
	cout << "Os indecisos somaram " << ((v99 / totalvotos) * 100) << "% dos votos!\n";
	cout << "Os votos nulos/brancos somaram " << ((v0 / totalvotos) * 100) << "% dos votos!\n";
	cout << "Foram entrevistados " << totalvotos << " candidatos!\n";
	
	if (porc45 > 50 || porc13 > 50 || porc23 > 50) {
		cout << "NÃO HAVERÁ 2° TURNO\n";
	}else{
		cout << "HAVERÁ 2° TURNO\n";
	}
	
}
