/*Crear en programa en c que tenga una estructura para almacenar fechas, 
leer e imprimir dos estructuras de este tipo.*/
#include <stdio.h>
struct fecha{
	int dia;
	int mes;
	int anio;
};

int main(){
	struct fecha Nacimiento;
	struct fecha Fecha_Actual;
	printf("Ingrese una fecha de nacimiento:\nDia: ");
	scanf("%d", &Nacimiento.dia);
	printf("Mes: ");
	scanf("%d", &Nacimiento.mes);
	printf("Anio: ");
	scanf("%d", &Nacimiento.anio);
	printf("Ingrese la fecha del dia de hoy:\nDia: ");
	scanf("%d", &Fecha_Actual.dia);
	printf("Mes: ");
	scanf("%d", &Fecha_Actual.mes);
	printf("Anio: ");
	scanf("%d", &Fecha_Actual.anio);
	printf("\n\nLA FECHA DE NACIMIENTO INGRESADA FUE:");
	printf(" %d/%d/%d", Nacimiento.dia, Nacimiento.mes, Nacimiento.anio);
	printf("\n\nLA FECHA DEL DIA DE HOY ES:");
	printf(" %d/%d/%d", Fecha_Actual.dia, Fecha_Actual.mes, Fecha_Actual.anio);
}
//------------------------------------------------------------------------------------------------------------------------------
/*Cree en programa en c que lea e imprima una estructura
que almacena la informacion basica de una persona.*/
#include <stdio.h>
struct datos_persona{
	char nombre[20];
	char apellido[20];
	char cedula[12];
};

int main(){
	struct datos_persona Persona1;
	printf("Ingrese el nombre de la persona: ");
	scanf("%s", Persona1.nombre);
	printf("Ingrese el apellido de %s: ", Persona1.nombre);
	scanf("%s", Persona1.apellido);
	printf("Ingrese la cedula de %s: ", Persona1.nombre);
	scanf("%s", Persona1.cedula);
	printf("\n\nLA PERSONA INGRESADA FUE:");
	printf("\nNombre: %s", Persona1.nombre);
	printf("\nApellido: %s", Persona1.apellido);
	printf("\nCedula: %s", Persona1.cedula);
}
//------------------------------------------------------------------------------------------------------------------------------------------
/*Cree en programa en c que tenga dos estructuras anidadas, una para
la informacion basica de una persona, y otra para la fecha de nacimiento.
lea e imprima ambas estructuras.*/
#include <stdio.h>
struct fecha{
	int dia;
	int mes;
	int anio;
};

struct datos_persona{
	char nombre[20];
	char apellido[20];
	char cedula[12];
	struct fecha fecha_Nacimiento;
};

int main(){
	struct datos_persona Persona1;
	printf("Ingrese el nombre de la persona: ");
	scanf("%s", Persona1.nombre);
	printf("Ingrese el apellido de %s: ", Persona1.nombre);
	scanf("%s", Persona1.apellido);
	printf("Ingrese la cedula de %s: ", Persona1.nombre);
	scanf("%s", Persona1.cedula);
	printf("Ingrese la fecha de nacimiento:\nDia: ");
	scanf("%d", &Persona1.fecha_Nacimiento.dia);
	printf("Mes: ");
	scanf("%d", &Persona1.fecha_Nacimiento.mes);
	printf("Anio: ");
	scanf("%d", &Persona1.fecha_Nacimiento.anio);
	printf("\n\nLA PERSONA INGRESADA FUE:");
	printf("\nNombre: %s", Persona1.nombre);
	printf("\nApellido: %s", Persona1.apellido);
	printf("\nCedula: %s", Persona1.cedula);
	printf("\nFecha de Nacimiento:");
	printf("%d/", Persona1.fecha_Nacimiento.dia);
	printf("%d/", Persona1.fecha_Nacimiento.mes);
	printf("%d", Persona1.fecha_Nacimiento.anio);
}
//------------------------------------------------------------------------------------------------------------------------------------------
/*Realice un programa en C que capture dos horas (hora militar) 
y calcule la diferencia de tiempo entre ellas.*/
#include <stdio.h>
struct hora{
	int horas;
	int minutos;
};


int main(){
	int hora=0, minuto=0;
	struct hora Hora1;
	printf("Ingrese la hora 1:\nHoras: ");
	scanf("%d", &Hora1.horas);
	printf("Minutos: ");
	scanf("%d", &Hora1.minutos);
	struct hora Hora2;
	printf("Ingrese la hora 2:\nHoras: ");
	scanf("%d", &Hora2.horas);
	printf("Minutos: ");
	scanf("%d", &Hora2.minutos);
	hora=Hora2.horas-Hora1.horas;
	minuto=Hora2.minutos-Hora1.minutos;
	if(hora<0){
		hora=hora*-1;
	}
	if(minuto<0){
		minuto=minuto*-1;
	}
	printf("\n\nLa diferencia es de: %d horas y %d minutos,", hora, minuto);
}
//------------------------------------------------------------------------------------------------------------------------------
/*Crear un vector de estructuras que guarde la información de N empleados.*/
#include<stdio.h>
struct Persona{
	char nombre[30];
	char sexo[12];
	float salario;
};

int main(){
	int nemp, i;
	printf("Introduzca el numero de empleados: ");
	scanf("%d",&nemp);
	struct Persona emp[nemp];
	for(i=0;i<nemp;i++){
		printf("\nNombre[%d]: ",i+1);
		scanf("%s",emp[i].nombre);
		printf("Sexo[%d]: ",i+1);
		scanf("%s",emp[i].sexo);
		printf("Salario[%d]: ",i+1);
		scanf("%f",&emp[i].salario);
	}
}
//------------------------------------------------------------------------------------------------------------------------------
/*Crear una vector de estructuras que guarde la información de N personas, 
y debe permitir realizar una busqueda sobre las personas ingresadas.*/
#include<stdio.h>
struct persona{
	char nombre[30];
	int cedula;
};

int main(){
	int n_personas, i, iguales, buscar=0;
	int cedula_buscar;
	printf("Introduzca de personas a guardar: ");
	scanf("%d",&n_personas);
	struct persona personas[n_personas];
	
	for(i=0;i<n_personas;i++){
		printf("\nNombre[%d]: ",i+1);
		scanf("%s",personas[i].nombre);		
		printf("Cedula[%d]: ",i+1);
		scanf("%d", &personas[i].cedula);
	}
	
	printf("\n\nIngrese la cedula de la persona a buscar: ");
	scanf("%d", &cedula_buscar);
	while(buscar==0){
		for(i=0; i<n_personas; i++){
			if(personas[i].cedula==cedula_buscar){
				printf("\n\nEL NOMBRE DE LA PERSONA ES: %s", personas[i].nombre);
				buscar=1;	
			}
		}
		buscar=1;
	}
	if(i==n_personas){
		printf("\nLA PERSONA NO SE ENCONTRO");
	}	
}
