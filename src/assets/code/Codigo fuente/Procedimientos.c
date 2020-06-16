/*Implemente un procedimiento que reciba un numero e imprima
si el numero es positivo o negativo, en caso de ser positivo
debe analizar si es par o impar.*/
#include <stdio.h>
void analisis(int n){
	if(n>0){
		printf("\nEl numero ingresado es positivo.");
		if(n%2==0){ 
			printf("\nAdemas el numero es par.");
		}else {
			printf("\nAdemas el numero es impar.");
		}
	}else printf("\nEl numero ingresado es Negativo.");
}

int main(){
	int numero;
	printf("Ingrese un numero para analizar: ");
	scanf("%d", &numero);
	analisis(numero);
}
//------------------------------------------------------------------------------------------------------------------------
/*
Implemente un procedimiento que dado un numero imprima en
palabrasel mes del a�o correspondiente.
*/
#include <stdio.h>
void mes_palabras(int mes){
	switch(mes){
		case 1: printf("Enero");break;
		case 2: printf("Febrero");break;
		case 3: printf("Marzo");break;
		case 4: printf("Abril");break;
		case 5: printf("Mayo");break;
		case 6: printf("Junio");break;
		case 7: printf("Julio");break;
		case 8: printf("Agosto");break;
		case 9: printf("Septiembre");break;
		case 10: printf("Octubre");break;
		case 11: printf("Noviembre");break;
		case 12: printf("Diciembre");break;
	}
}

int main(){
	int mes;
	do{
		printf("\nIngrese un numero: ");
		scanf("%d", &mes);
		mes_palabras(mes);
	}while(mes>0 && mes<=12);
}
//------------------------------------------------------------------------------------------------------------------------
/*Crear un programa en C que contenga un procedimiento que
imprima un cuadrado de acuerdo a un caracter que se le 
entrega junto con el tama�o de los lados de este.*/
#include <stdio.h>
void cuadrado(char c, int lado){
	int i, j;
	for(i=0; i<lado; i++){
		for(j=0; j<lado; j++){
			printf("%c", c);
		}
		printf("\n");
	}
}

int main(){
	char c;
	int lado;
	printf("Ingrese un caracter para imprimir: ");
	scanf("%c", &c);
	printf("Ingrese el tamano de los lados del cuadrado: ");
	scanf("%d", &lado);
	cuadrado(c, lado);
}
//------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que reciba una fecha (dia, mes y a�o) en
variables separadas, luego implemente un procedimiento que 
muestre la fecha siguiente.*/
#include <stdio.h>
void fecha_siguiente(int dia, int mes, int anio){
	printf("\n\n***FECHA SIGUIENTE:***\n");
	if(dia>0 && dia<=31 && mes>0 && mes<=12){
		if(dia==31 && mes==12){
			dia=1;
			mes=1;
			anio=anio+1;
			printf("[%d/%d/%d]", dia, mes, anio);
		}else if(dia==31){
			dia=1;
			mes=mes+1;
			printf("[%d/%d/%d]", dia, mes, anio);
		}else{
			dia=dia+1;
			printf("[%d/%d/%d]", dia, mes, anio);
		}	
	}else printf("\n\n***FECHA INVALIDA***");
}

int main(){
	int d, m, a;
	printf("Ingrese una fecha.\nDia: ");
	scanf("%d", &d);
	printf("Mes: ");
	scanf("%d", &m);
	printf("Anio: ");
	scanf("%d", &a);
	fecha_siguiente(d,m,a);
}
//------------------------------------------------------------------------------------------------------------------------
/*Cree un programa en c que tenga los procedimientos basicos 
relacionados con vectores, llenar e imprimir un vector.*/
void imprimir_vector(int vector[], int tamano){
	printf("\n\n***EL VECTOR ES: ***\n");
	for(int i=0; i<tamano; i++){
		printf("%d ", vector[i]);
	}	
}

#include <stdio.h>
void llenar_vector(int vector[], int tamano){
	int num;
	for(int i=0; i<tamano; i++){
		printf("\nPosicion %d :", i+1);
		scanf("%d", &num);
		vector[i]=num;
	}
	imprimir_vector(vector, tamano);
}

int main(){
	int tamano;
	printf("Ingrese un tamano para el vector: ");
	scanf("%d", &tamano);
	int vector[tamano];
	llenar_vector(vector, tamano);
	
}
//--------------------------------------------------------------------------------------------------------------------------------
/*Con base al anterior programa, cree un procedimiento que 
ordene de manera ascendente los valores de un vector de N 
enteros dado por el usuario.*/
#include <stdio.h>
void imprimir_vector(int vector[], int tamano){
	printf("\n\n***EL VECTOR ES: ***\n");
	for(int i=0; i<tamano; i++){
		printf("%d", vector[i]);
	}
}

void ordenar_vector(int vector[], int tamano){
	int i, j, temp;
	for (i=0; i<(tamano-1); i++){ 
    	for (j=i+1; j<tamano; j++){ 
      		if (vector[j]<vector[i]){ 
        		temp=vector[j]; 
        		vector[j]=vector[i]; 
        		vector[i]=temp; 
      		}
    	}
  	}
	imprimir_vector(vector, tamano);
}

void llenar_vector(int vector[], int tamano){
	int num;
	for(int i=0; i<tamano; i++){
		printf("\nPosicion %d: ", i+1);
		scanf("%d", &num);
		vector[i]=num;
	}
	imprimir_vector(vector, tamano);
	ordenar_vector(vector, tamano);
}

int main(){
	int tamano;
	printf("Ingrese un tamano para el vector: ");
	scanf("%d", &tamano);
	int vector[tamano];
	llenar_vector(vector, tamano);
}
