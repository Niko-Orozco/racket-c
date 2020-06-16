//******************************************************************************************//
/*Crear un vector de enteros que tenga tamaño igual a 3, 
inicialicelo con valores al azar, luego use un ciclo para 
imprimirlo. Seguidamente modificar la segunda posición del 
vector e imprimir los cambios*/
#include <stdio.h>
int main(){
	int i=0;
	int vector[3]={1,2,3};
	printf("El vector es: \n");
	for(i=0; i<3; i++){
		printf("%d	", vector[i]);
	}
	vector[1]=5;
	printf("\nEl vector modificado es: \n");
	for(i=0; i<3; i++){
		printf("%d	", vector[i]);
	}
}
//******************************************************************************************//
/*Cree un programa que le pida al usuario el tamaño  para un vector 
de enteros, y luego que llene una a una las posiciones  del  vector. 
Finalmente imprima el vector*/
#include <stdio.h>
int main(){
	int i=0, tamano=0, valor=0;
	printf("Ingrese el tamano para el vector: ");
	scanf("%d", &tamano);
	int vector[tamano];
	for(i=0; i<tamano; i++){
		printf("Ingrese un valor entero para la posicion [%d]: ", i);
		scanf("%d", &valor);
		vector[i]=valor;
	}
	printf("\nEl vector es: \n");
	for(i=0; i<tamano;i++){
		printf("%d	", vector[i]);
	}
}
//******************************************************************************************//
/*Cree un programa que calcule el promedio de los datos dentro 
de un vector de enteros.*/
#include <stdio.h>
int main(){
	int i=0;
	float sumatoria=0; 
	int vector[5]={6,7,8,9,10};
	for(i=0; i<5; i++){
		sumatoria=vector[i]+sumatoria;
	}
	printf("\nEl promedio de los valores es: %f", sumatoria/5);
}
//******************************************************************************************//
/*Crear un programa que permita calcular el producto escalar entre 
dos vectores*/
#include <stdio.h>
int main(){
	int i=0, escalar=0;
	int v1[3]={2,3,4};
	int v2[3]={5,6,7};
	for(i=0; i<3; i++){
		escalar=(v1[i]*v2[i])+escalar;
	}
	printf("\nEl producto escalar es: %d", escalar);
}
//******************************************************************************************//
/*Buscar un máximo entre un vector de 10 números flotantes*/
#include <stdio.h>
int main(){
	int i=0, max=0;
	float vector[10]={1.2, 3.0, 0.2, 5, 7, 4.1, 9.99, 10.2, 4, 2};
	for(i=0; i<10; i++){
		if(vector[i]>vector[max]){
			max=i;
		}	
	}
	printf("\nEl maximo de todos los numeros se encuentra en la posicion [%d] es: %f", max, vector[max]);	
}
//******************************************************************************************//
/*Buscar dentro de un vector cuantos números positivos y 
cuantos negativos hay*/
#include <stdio.h>
int main(){
	int i=0, positivos=0, negativos=0;
	float vector[10]={-1.2, -3.0, 0.2, 5, 7, -4.1, 9.99, 10.2, 4, 2};
	for(i=0; i<10; i++){
		if(vector[i]<0){
			negativos++;
		}else{
			positivos++;
		}
	}
	printf("\nCantidad de Positivos: %d\nCantidad de Negativos: %d", positivos, negativos);	
}
