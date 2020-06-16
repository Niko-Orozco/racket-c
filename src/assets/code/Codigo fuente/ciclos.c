/*Construir un programa que muestre los números  del 1 hasta
el 10 utilizando la estructira de iteracion for*/
#include <stdio.h>
int main(){
    int contador=0;
    for( contador=1; contador<11 ; contador++ ) {
        printf("\n%d",contador);
    }
    return 0;
}


/*Construir un programa que  imprima por pantalla la siguiente secuencia:
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
Como restriccion */
#include <stdio.h>
int main(){
    for (int i = 0; i<5; i++){
        for (int j=0; j<5; j++){
            printf("%d", j);
        }
        printf("\n");
    }
}


//Calcular la suma de los números pares e impares comprendidos entre 1 y n.
#include <stdio.h>
int main(){
    int num, c = 1, par = 0, impar = 0;
    printf("Ingrese la cantidad de numeros a sumas: ");
    scanf("%d", &num);
    while (c < num){
        if(c % 2 == 0){
            par += c;
        }else{
            impar += c;
        }
        c++;
    }
    printf("Suma de pares: %d", par);
    printf("Suma de impares: %d", impar);
}

/*Diseñar e implementar un programa que solicite a su usuario un valor no
negativo n y visualice la siguiente salida:
1 2 3 … n-1 n
1 2 3 … n-1
….
1 */
#include <stdio.h>
void main(void){
    int k, i;
    printf("Introduzca un valor entero:");
    scanf("%d",&i);
    while(i >= 1){
        k = 1;
        while(k <= i){
            printf("%d\t",k);
            k++;
        }
        i--;
    }
}

/*Los padres de una niña le prometieron darle 10 dólares cuando cumpliera 12
años de edad y duplicar el regalo en cada cumpleaños subsiguiente hasta que
el regalo excediera 1000 dólares. Escriba un programa para determinar qué
edad tendrá la niña cuando se le dé la última cantidad y la cantidad total
recibida.*/
#include <stdio.h>
int main(){
    int edad = 12, d = 10, total = 10;
    printf("Calculo del dinero recibido: ");
    do{
        d = d * 2;
        total += d;
        edad++;
    }while(total < 1000);
    printf("Edad: %d", edad);
    printf("Dinero recibido: %d", d);
    printf("Total recibido: %d", total);
}

/*Construir un programa que calcule y visualice el siguiente esquema
1! + 2! + 3! + … + (n – 1)! + n!*/
#include <stdio.h>
void main(void){
    int n, i = 1, m;
    float fact, suma = 0;
    printf("Ingrese el valor de n: ");
    scanf("%d",&n);
    do{
        fact = 1;
        m = i;
        while(m > 1){
            fact *= m;
            m--;
        }
        suma+=fact;
        printf("\t %d! = %0.f",i,fact);
        i++;
    }while(i <= n);
    printf("\tsuma = %0.f",suma);
}
