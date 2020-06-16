/*Cree e inicialice con cualquier dato del mismo tipo:
-2 variables del tipo de dato entero.
-1 variable de tipo de dato char.
Una vez inicialidos todos los datos sume los dos enteros y 
almacenelos en una variable.*/

int main(){
	int variable1, variable2;
	variable1=5;
	variable2=8;
	char caracter='h';
	int suma = variable1+variable2;
}
//_____________________________________________________________________________________________________________________________
/*Cree un programa en C, que secuencialmente simule una llamada 
telefonica. A partir de mensajes muestre como seria el proceso, 
tambi�n capture el n�mero que el usuario quiera marcar. Nota: 
Para imprimir mensajes y recibir datos por pantalla se usa printf 
y scanf respectivamente, funciones provenientes de la libreria 
stdio.h, dicha libreria debe ser importada.
En c se importan librerias asi:*/
#include <stdio.h>

int main(){
	long telefono=0;
	printf("*TELEFONO*\n");
	printf("\nDescuelgue el telefono. ");
	printf("\nIngrese el telefono a marcar: ");
	scanf("%ld", &telefono);
	printf("\nProcesando");
	printf("\n\nEsta marcando al numero: %ld", telefono);
	printf("\n\tConversacion en curso.");
	printf("\nPulse una tecla si desea finalizar la llamada. \n");
	system("pause");
	printf("\nLLAMADA FINALIZADA");
}
//_____________________________________________________________________________________________________________________________
/*Capture un dato de tipo entero por consola, el programa debe 
enviar un mensaje antes de capturar y luego de capturar el 
n�mero.
Recuerde: Para capturar un dato, se debe tener una variable del
tipo de dato que se desee, en este caso un entero.
Asi: Tipo_dato Nombre_variable;*/
#include <stdio.h>
int main(){
	int numero;
	printf("***Vamos a ingresar el numero.***");
	printf("\nIngrese el numero: ");
	scanf("%d", &numero);
	printf("\n***El numero fue ingresado.***");
	printf("\nEl numero fue: %d", numero);
}
//_____________________________________________________________________________________________________________________________
/*Cree un programa en c que calcule el area de un triangulo, 
de acuerdo a una base y una altura arrojada por el usuario.
Nota: Use variables de tipo flotante.*/
#include <stdio.h>
int main(){
	float base=0, altura=0, area=0;
	printf("AREA DE UN TRIANGULO:\n\tBASE: ");
	scanf("%f", &base);
	printf("\tALTURA: ");
	scanf("%f", &altura);
	area=(base*altura)/2;
	printf("\n\nEl area del triangulo es: %.2f", area);	
}
//_____________________________________________________________________________________________________________________________
/*
Implemente un programa en c que calcule el volumen de un cilindro.
El usuario es quien digita el radio y altura de este.
Trabaje PI como una constante.
Nota: El volumen de un cilindro esta dado por: v=Pi*r^2*h.
*El volumen es igual a el n�mero pi multiplicado por el cuadrado
del radio del cilindro y a su vez multiplicado por la altura del 
cilindro.*/
#include <stdio.h>
#define PI 3.1416
int main(){
	int r=0,h=0;
	float v;
	printf("VOLUMEN DE UN CILINDRO:\n\tRADIO: ");
	scanf("%d", &r);
	printf("\tALTURA: ");
	scanf("%d", &h);
	v=PI*r*r*h;
	printf("\n\nEl volumen del cilindro con radio %d y altura %d es: %.2f", r, h, v);	
}
//_____________________________________________________________________________________________________________________________
/*Con un programa en c, calcule la diagonal de un rectangulo que el 
usuario sea quien define el tama�o de los lados.
Nota: La diagonal de un rectangulo esta dada por la raiz cuadrada
del la suma de sus dos lados al cuadrado. Por lo que necesitaremos
una libreria para las funciones matematicas. Esta libreria es math.h
contiene la funci�n sqrt para la raiz cuadrada.*/
#include <stdio.h>
#include <math.h>
int main(){
	int lado1=0, lado2=0;
	float diagonal=0;
	printf("DIAGONAL DE UN RECTANGULO:\n\tLADO 1: ");
	scanf("%d", &lado1);
	printf("\tLADO 2: ");
	scanf("%d", &lado2);
	diagonal=sqrt(lado1*lado1 + lado2*lado2);
	printf("\n\nLa diagonal para el rectangulo de lados %dx%d es: %.2f", lado1, lado2, diagonal);	
}
