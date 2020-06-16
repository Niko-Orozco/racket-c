/*Cree en programa que capture una cadena y luego
convierta cada uno de los caracteres a letras may�sculas.*/
#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main(){
	int i, j;
	char cadena[20];
	char cadenaMayus[20];
	printf("Ingrese una cadena:  ");	
	scanf("%s", cadena);
	
	for(i=0; i<strlen(cadena); i++){
		cadenaMayus[i] =toupper(cadena[i]);
	}
	printf("\nLa cadena en mayusculas es: %s", cadenaMayus);
}

/*Construya un programa en C que capture una cadena y almacene 
en otra variable la cadena invertida.*/
#include <stdio.h>
#include <string.h>
 int main(){
 	int i,tam;
 	char cadena[20];
 	char cadena_invertida[20]={};
 	printf("Ingrese una cadena de caracteres: ");
 	gets(cadena);
 	tam=strlen(cadena)-1;
 	for(i=0; i<strlen(cadena); i++){
 		cadena_invertida[tam]=cadena[i];
		tam--;
	}
	printf("\nCADENA INVERTIDA: ");
	printf("\n%s", cadena_invertida);
 }

/*Cree un programa que analice cuantas letras may�suclas y 
cuantas letras min�sculas tiene una cadena ingresada por
el usuario. Nota: Puede usar ciclos anidados y codigo ASCII.*/
#include <stdio.h>
#include <string.h>
int main(){
	int contador_mayus=0, contador_minus=0, j, i;
	char cadena[20];
	printf("Ingrese una cadena: ");
	scanf("%s", cadena);
	for(i=0; i<strlen(cadena); i++){
		for(j=65; j<=90; j++){
			if(cadena[i]==j)contador_mayus++;
		}
		for(j=97; j<=122; j++){
			if(cadena[i]==j)contador_minus++;
		}
	}
	printf("\nCantidad de Mayusculas: %d.", contador_mayus);
	printf("\nCantidad de Minusculas: %d.", contador_minus);
	
}

/*Cree un programa en C que reciba una cadena de m�ximo 20
caracteres escrita por el usuario, el programa debe contar
cuantos n�meros, y espacios en blanco contiene dicha cadena.
Nota: Una buena manera de realizar el ejercicio es usando el
c�digo ASCII*/
#include <stdio.h>
#include <string.h>
 int main(){
 	int i,j, contador_numeros=0, contador_espacios=0;
 	char cadena[20];
 	printf("Ingrese una cadena maximo de 20 caracteres: ");
 	gets(cadena);
 	for(i=0; i<strlen(cadena); i++){
		for(j=48; j<58; j++){
			if(cadena[i]==j){
				contador_numeros++;
			}
		}
		if(cadena[i]==32){
			contador_espacios++;
		}
	}
	printf("\nLa Cadena ingresada tiene: ");
	printf("\n%d valores numericos.", contador_numeros);
	printf("\n%d espacios en blanco. ", contador_espacios);
 }

/*Cree una programa en C, que permita determinar si una cadena
ingresada por el usuario es o no palíndromo. Un palíndromo es 
una palabra o frase que se lee igual en un sentido que en otro.*/
#include <stdio.h>
#include <string.h>
int main(){
    printf("Escribe una cadena: ");
	char cadena1[20];
    gets(cadena1);
	char cadena2[strlen(cadena1)];
    int tam=strlen(cadena1)-1;
    for(int i=0; i<strlen(cadena1); i++) {
        cadena2[tam] = cadena1[i];
		tam--;
    }
    if (strcmp(cadena1, cadena2) == 0){
		printf("\nEs un palindromo.\n");
	}else printf("\nNo es un palindromo.\n");
}

/*Escriba un programa que lea dos cadenas, una para el nombre
y otra para el apodo de una persona, luego de leer, concatenar 
las dos cadenas en una sola y mostrar por consola.*/
#include <stdio.h>
#include <string.h>
int main(){
	char nombre[20];
	char apodo[20];
	printf("Ingrese el nombre de la persona: ");
	scanf("%s", nombre);
	printf("Apodo de %s: ", nombre);
	scanf("%s", apodo);
	strcat(nombre, apodo);
	printf("\n\tLa cadena concatenada es: %s", nombre);
}