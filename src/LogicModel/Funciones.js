/*Cree una funcion que evalue si un n�mero es par o impar.*/
#include <stdio.h>
int espar(int n){
	if(n%2==0){
		return 1;
	}else return 0;
}

int main(){
	int numero;
	printf("Ingrese un numero: ");
	scanf("%d", &numero);
	if(espar(numero) == 1){
		printf("\nEl numero ingresado es Par. ");
	}else printf("\nEl numero ingresado es Impar. ");
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/* Crear un programa que tenga una funci�n encargada de 
aplicar descuento a un producto que este en venta.*/
#include <stdio.h>
float descuento(float precio, float descuento){
	float total=0;
	if(precio>0 && descuento>0){
		total=precio*((100-descuento)/100);
	}
	return total;
}

int main(){
	float precio=0, desc=0;
	printf("Ingrese el precio del producto: ");
	scanf("%f", &precio);
	printf("Ingrese el descuento en porcentaje para el producto: ");
	scanf("%f", &desc);
	printf("\n\tEl precio final es: %.2f", descuento(precio, desc));
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Cree una funci�n que se encargue de devolver el m�ximo 
valor de los valores ingresados en un vector de enteros 
que el usuario digita.*/
#include <stdio.h>
int maximo(int vector[], int N){
	int i, mayor=0;
	for(i=0; i<N; i++){
		if(mayor<vector[i]){
			mayor=vector[i];
		}		
	}
	return mayor;
}

int main(){
	int N, i;
	printf("Ingrese la cantidad de enteros a guardar en el vector: ");
	scanf("%d", &N);
	int vector[N];
	for(i=0; i<N; i++){
		printf("Valor para la posicion [%d]: ", i+1);
		scanf("%d", &vector[i]);
	}
	printf("\nEL VALOR MAXIMO ES: %d", maximo(vector, N));
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa en C tenga un men� de opciones de una 
calculadora deoperaciones matem�ticas basicas.*/
#include <stdio.h>
int suma(){
	int a, b;
	printf("Numero a: ");
	scanf("%d", &a);
	printf("\nNumero b: ");
	scanf("%d", &b);
	return a+b;
}

int resta(){
	int a, b;
	printf("Numero a: ");
	scanf("%d", &a);
	printf("\nNumero b: ");
	scanf("%d", &b);
	return a-b;
}

int multiplicacion(){
	int a, b;
	printf("Numero a: ");
	scanf("%d", &a);
	printf("\nNumero b: ");
	scanf("%d", &b);
	return a*b;
}

float division(){
	float a, b;
	printf("Numero a: ");
	scanf("%f", &a);
	printf("\nNumero b: ");
	scanf("%f", &b);
	return a/b;
}

int main(){
	int opcion;
	do{
		printf("\nCALCULADORA:\n1. Suma.\n2. Resta.\n3. Multiplicacion");
		printf("\n4. Division..\n5. Salir\nOpcion: ");
		scanf("%d", &opcion);
		switch(opcion){
			case 1: printf("\nLa suma da como resultado: %d", suma());
				break;
			case 2: printf("\nLa resta da como resultado: %d",resta());
				break;
			case 3: printf("\nLa multiplicacion da como resultado: %d",multiplicacion());
				break;
			case 4: printf("\nLa division da como resultado: %f",division());
				break;
			default: printf("ingrese una opcion valida.");
		}
	}while(opcion!=5);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Cree una funci�n que utilice recursi�n para calcular el
factorial de un n�mero.*/
#include <stdio.h>
int factorial(int n) {
   if(n < 0) return 0;
   else if(n > 1) return n*factorial(n-1);
   return 1;
}

int main() {
   int numero;
   printf("Ingresa un numero para calcular su factorial: ");
   scanf("%d", &numero);
   printf("\n\nEl factorial del numero %d es: %d.", numero, factorial(numero));
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Escriba un programa que use funciones recursivas 
el cual permita escribir la sucesi�n de Fibonacci.*/

#include <stdio.h>
#include <stdlib.h>
int fibonacci(int n){
	if (n == 1){
		return 1;
	}else if (n==2){
		return 1;
	}else return fibonacci(n-1) + fibonacci(n-2);     
}

int main(){
    int i, limite;
    printf("Escriba el limite para la sucesion de fibonacci: ");
    scanf("%d", &limite);
    for (i=0; i<limite; i++){
      printf("%d\n", fibonacci(i));
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------

