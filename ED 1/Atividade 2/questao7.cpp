#include <iostream>
using namespace std;

main() {
	
	int mat, qtdalunos, qtdapro, qtdrepro;
	float nota1, nota2, nota3, media;
	
	qtdalunos = 0;
	qtdapro = 0;
	qtdrepro = 0;
	while (true){
		cout << "Digite a matrícula (0 p/ PARAR): ";
		cin >> mat;
		if (mat == 0){
			break;
		}
		cout << "Informe a primeira nota: ";
		cin >> nota1;
		cout << "Informe a segunda nota: ";
		cin >> nota2;
		cout << "Informe a terceira nota: ";
		cin >> nota3;
		
		qtdalunos += 1;
		media = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10;
		if (media >= 7){
			qtdapro += 1;
			cout << "Matricula: " << mat << " Aprovado! Média: " << media << "\n";	
		}else{
			qtdrepro += 1;
			cout << "Matricula: " << mat << " Reprovado! Média: " << media << "\n";
		}
		cout << "Quantidade de Alunos APROVADOS: " << qtdapro << "\n";
		cout << "Quantidade de Alunos REPROVADOS: " << qtdrepro << "\n";
		cout << "Total de Alunos: " << qtdalunos << "\n";
	}
	
}
