/*Crear un programa en c que capture una letra y y devuelva la 
letra siguiente. Nota: Use el codigo ASCII, use dos funciones, 
una para comprobar el valor de la letra, y otra para aumentar 
dicho valor*/
#include <stdio.h>
int ASCII(char letra){
	return letra;
}

int aumentar(char letra){
	int valor;
	valor=ASCII(letra);
	if(valor==90){
		return 65;
	}else if(valor==122){
		return 97;
	}else return valor+1;
}

int main(){
	char letra;
	printf("Ingrese una letra: ");
	scanf("%c", &letra);
	printf("\n\nLa siguiente letra es: %c", aumentar(letra));
}
//------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa en c que realice una resta de enteros con la
condición de que el resultado de positivo, use funciones anidadas.*/
#include <stdio.h>
int mayor(int a, int b){
	if(b>a) return b;
	else return a;
}

int resta(int a, int b){
	if(mayor(a,b)==a){
		return a-b;
	}else return -1;
}

int main(){
	int a, b;
	printf("Resta de numeros positivos.\nPrimer Numero: ");
	scanf("%d", &a);
	printf("Segundo Numero: ");
	scanf("%d", &b);
	if(resta(a,b)==-1){
		printf("\n\n*El segundo numero no puede ser mas grande que el primero. ");
	}else printf("\n\nLa resta entre los numeros ingresados es: %d", resta(a,b));
}
//------------------------------------------------------------------------------------------------------------------------------
/*Realizar la implementación con funciones en c de un programa que
lea una fecha dada por el usuario y se compruebe si el dia y mes 
estan bien escritos y luego imprima el mes en palabras.*/
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

int comprobar(int dia, int mes){
	if(dia>=1 && dia<=31 && mes>=1 && mes<=12){
		mes_palabras(mes);
		return 1;
	}else return 0;
}

int main(){
	int d,m,a;
	printf("Dia: ");
	scanf("%d", &d);
	printf("\nMes: ");
	scanf("%d", &m);
	if(comprobar(d, m) == 1){
		printf("\nLA FECHA ESTA CORRECTAMENTE ESCRITA. ");
	}else printf("\nLA FECHA ESTA INCORRECTA. ");
}
//------------------------------------------------------------------------------------------------------------------------------
/*Crear un programa que permita realizar la contabilidad al vender
un producto. El programa debe tener dos funciones anidadas, una que 
multiplique la cantidad total y otra que aplique el descuento.*/
#include <stdio.h>
float descuento(float valor_cantidad, float descuento){
	float total=0;
	if(valor_cantidad>0 && descuento>0){
		total=valor_cantidad*((100-descuento)/100);
	}
	return total;
}

float cantidad(float precio, float cantidad, float desc){
	float valor=0;
	valor=precio*cantidad;
	return descuento(valor, desc);	
}

int main(){
	float precio=0, desc=0, cant=0;
	printf("Ingrese el precio del producto: ");
	scanf("%f", &precio);
	printf("Ingrese la cantidad del producto: ");
	scanf("%f", &cant);
	printf("Ingrese el descuento en porcentaje para el producto: ");
	scanf("%f", &desc);
	printf("\nEl precio final es: %.2f", cantidad(precio, cant, desc));
}

//------------------------------------------------------------------------------------------------------------------------------
/*Cree una función recursiva que permita calcular el minimo común 
multiplo entre dos numeros. Nota: Se puede usar el maximo comun 
entre los dos números. Se aplica el concepto de funciones anidadas.*/
#include <stdio.h>
int maximo_comun_divisor(int a, int b){
    int temporal;
    while (b != 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
}

int minimo_comun_multiplo(int a, int b){
    return (a * b) / maximo_comun_divisor(a, b);
}

int main(void) {
    int a,b;
    printf("Ingrese el numero a: ");
    scanf("%d", &a);
    printf("\nIngrese el numero b: ");
    scanf("%d", &b);
    int mcm = minimo_comun_multiplo(a, b);
    printf("\n\nMCM de %d y %d = %d\n", a, b, mcm);
}

//------------------------------------------------------------------------------------------------------------------------------
/*Haga un programa en C que use dos funciones recursivas anidadas 
para calcular la n-esima potencia de un número dado por el usuario.*/
#include <stdio.h>
float multi(float a, float b){
	if(a==0 || b==0)
   		return 0;
  	else{
    	return a+multi(a,b-1);
   	}
}

float potencia(float base, int exp){
	float res;
	if (exp == 0)
	 	res=1.0;
	else if (exp > 0){
		res=multi(base,potencia(base,exp - 1));
	}
	else if (exp < 0){
		res=1.0/multi(base,potencia(base,exp + 1));
	 }
	 return res;
}

int main(){
	int base, exp;
	printf("Base: ");
	scanf("%d", &base);
	printf("Exponente: ");
	scanf("%d", &exp);
	printf("POTENCIA: %f", potencia(base, exp));
}
