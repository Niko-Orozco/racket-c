//Escribir un programa que detecte si un número introducido
//desde el teclado es positivo o negativo.
int main (){
    int num;
    scanf("%d", &num);
    if (num < 0){
        printf ("Numero negativo: %d", num);
        printf ("Numero positivo: %d", num);
    }
}

//Escribir un programa que lea tres números por teclado y nos diga 
//cuál es el mayor.
int main(){
    int num1, num2, num3;
    scanf("%d %d %d", num1, num2, num3);
    if((num1 > num2) && (num1 > num3)){
        printf ("El número mayor es: %d", num1);
    }
    if((num2 > num1) && (num2 > num3)){
        printf ("El número mayor es: %d", num2);
    }
    if((num1 > num2) && (num1 > num3)){
        printf ("El número mayor es: %d", num3);
    }
}

//Escribir un programa que nos diga si un estudiante  aprobó la 
//materia, el programa debe realizar los cálculos en función de
//los siguientes criterios.
//a. Apruba si las tres notas suman  3.5 o mas
//b. Presenta pruba de validacion si la nota estan entre 3 y 3.4
//c. Reprueba si la nota es menor a 3
#include <stdio.h>
int main()
{
    int nota;
    printf("ingrese la nota: ");
    scanf("%s", &nota);
    if(nota >= 3.5){
        printf ("Aprobó la materia");
    }else{
        if ((nota >= 3) && (nota < 3.4)){
            printf ("Presenta prueba de validación");
        }else{
           if ((nota >= 0) && (nota < 3)){
                printf ("Reprobó la materia");
            }else{
                printf ("ingrese una nota valida");
            }
        }
    }
}


//Escribir un programa que muestre un menú donde las opciones sean 
//“Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule 
//el perímetro del triángulo seleccionado.
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int lado, lado2, lado3, base, opcion;
    printf("Seleccione opción:");
    printf("1 – Equilátero");
    printf("2 – Isósceles");
    printf("3 – Escaleno");
    scanf("%d",&opcion);
    switch (opcion)
    {
        case 1:
            printf("Introduzca lado del triángulo:");
            scanf("%d",&lado);
            printf("El perímetro es: %d",3*lado);
            break;
        case 2:
            printf("Ingrese el lado y la base: ");
            scanf("%d %d", &lado, &base);
            printf("El perímetro es: %d",(2*lado)+base);
            break;
        case 3:
            printf ("Ingrese los 3 lados: ");
            scanf("%d %d %d", &lado, &lado2, &lado3);
            printf("perimetro: %d", (lado3 + (lado + lado2)));
            break;
        default:
            printf("Opción no válida.");
            break;
    }
}

//Escribir un programa que nos muestre un menu con las opciones de:
//1.  Dia  corespondiente,  2. listar  dias,  crear  las  funciones
//respectivas  a  las  opciones.
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int opcion, dia;
    printf("1. Dia corespondiente");
    printf("2. listar dias");
    switch (opcion)
    {
        case 1: printf("ingrese un numero entre 1 y 7: ");
            switch (dia)
            {
           case 1:
                printf("Lunes");
                break;
            case 2:
                printf("Martes");
                break;
            case 3:
                printf("Miercoles");
                break;
            case 4:
                printf("Jueves");
                break;
            case 5:
                printf("Viernes");
                break;
            case 6:
                printf("Sabado");
                break;
            case 7:
                printf("Domingo");
                break;
            default:
                printf("Ingrese una opción valida");
                break;
            }
            break;
        case 2:
            printf("Lunes");
            printf("Martes");
            printf("Miercoles");
            printf("Jueves");
            printf("Viernes");
            printf("Sabado");
            printf("Domingo");
            break;
        default:
            printf("Ingrese una opción valida");
            break;
    }
}

//Escribir un programa que calcule el sueldo que le corresponde al 
//trabajador de una empresa que cobra 40.000  dólares  anuales, el 
//programa debe realizar los cálculos en función de los siguientes 
//criterios.
//a.Si lleva más de 15 años en la empresa obtiene un aumento del 12%.
//b.Si lleva más de 10  y menos de 15 años obtiene un aumento del 8%.
//c.Si lleva más de  5  y menos de 10 años obtiene un aumento del 5%.
//d.  Si lleva menos de 5 años se le aplica un aumento del 3%.
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int anios, opcion;
    printf("Seleccione opción:");
    printf("1. Calcular sueldo anual");
    printf("2. Ver aumentos anuales");
    scanf("%d",&opcion);
    switch (opcion)
    {
        case 1:
            if (anios > 15){
                printf ("Salario anual de: %d", ((40000 * 1.2) + 40000));
            }else{
                if ((anios < 15) && (anios > 10)){
                    printf ("Salario anual de: %d", ((40000 * 0.8) + 40000));
                }else{
                    if ((anios < 10) && (anios > 5)){
                        printf ("Salario anual de: %d", ((40000 * 0.5) + 40000));
                    }else{
                        if ((anios < 5) && (anios > 0)){
                            printf ("Salario anual de: %d", ((40000 * 0.3) + 40000));
                        }else{
                            printf ("Ingrese una año valido");
                        }
                    }
                }
            }
            break;
        case 2:
            printf ("Si lleva más de 15 años en la empresa 12%");
            printf ("Si lleva menos de 15 pero más de 10 años 8%");
            printf ("Si lleva menos de 10 pero más de 5 años 5%");
            printf ("Si lleva menos de 5 años 3%");
            break;
        default:
            printf("Opción no válida.");
            break;
    }
}