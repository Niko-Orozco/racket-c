/*export default class secuencia{
    uno(){
		var nums = 1;
		var count = "\n\n***La matriz digitada es: ***\n";
		for(var i=0; i<3; i++){
			count += "\n";
			for(var j=0; j<4; j++){
				count += " " + nums++;
			}
		}
        return count;
    }

    dos(){ 
		var count2 = "";
		var nums = 1;
		for(var i=0; i<2; i++){
			count2 += "\n";
			for(var j=0; j<2; j++){
				count2 += " " + nums++;
			}
		}
		var count = "Ingrese la cantidad de filas que tendra la matriz: "+
					"\n2"+
					"\nAhora ingrese la cantidad de columnas: "+
					"\n2"+
					"\n\nIngrese los valores para la matriz "+
					"\n***La matriz digitada es: ***\n" + count2;
        return count;
    }

    tres(){
		var count2 = "";
		var suma = 0;
		var count = "";
		for(var i=0; i<3; i++){
			count2 += "\n";
			for(var j=0; j<3; j++){
				count2 += " " + nums++;
			}
		}

		for(var i=3; i>0; i++){
			count2 += "\n";
			for(var j=0; j>0; j++){
				count2 += " " + nums++;
			}
		}
		var count = "";
					"Cantidad de filas: "+
					"\n3"+
					"\nCantidad de columnas: "+
					"\n3"+
					"\n\nIngrese los valores para la matriz 1: "+
					"\n\nIngrese los valores para la matriz 2: "+
					for(i=0; i<filas; i++){
						for(j=0; j<columnas; j++){
							printf("\n\tPosicion [%d] [%d]: ", i, j);
							scanf("%d", &dato);
							matriz2[i][j]=dato;
						}
					}
					for(i=0; i<filas; i++){
						for(j=0; j<columnas; j++){
							suma[i][j]=matriz1[i][j]+matriz2[i][j];
						}
					}
					printf("\n\n***La suma de las matrices es: ***\n");
					for(i=0; i<filas; i++){
						printf("\n");
						for(j=0; j<columnas; j++){
							printf("\t%d ", suma[i][j]);
						}
					}
		return count;
    }
    
    cuatro(){
        var base=5, altura=9;
	    var count = "AREA DE UN TRIANGULO:\nBASE: "+ 
	                "\n5"+ 
	                "\nALTURA: "+ 
	                "\n9"+ 
                    "\n\nEl area del triangulo es: " 
                    (base*altura)/2;
        return count;
    }

    cinco(){
        var count = "VOLUMEN DE UN CILINDRO:\nRADIO: "+ 
                    "\n3"+ 
                    "\nALTURA: "+ 
                    "\n5"+ 
                    "\n\nEl volumen del cilindro con radio 3 y altura 5 es: "+ (3.1416*3*3*5);
        return count;
    }

    seis(){
        var count = "DIAGONAL DE UN RECTANGULO:\nLADO 1: "+ 
                    "\n3"+ 
                    "\nLADO 2: "+ 
                    "\n5"+ 
	                "\n\nLa diagonal para el rectangulo de lados 3x5 es: " + Math.sqrt(3*3 + 5*5);
        return count;
    }
}




	printf("Cantidad de filas: ");
	scanf("%d", &filas);
	printf("\nCantidad de columnas: ");
	scanf("%d", &columnas);
	int matriz1[filas][columnas];
	int matriz2[filas][columnas];
	int suma[filas][columnas];
	printf("\n\nIngrese los valores para la matriz 1: ");
	for(i=0; i<filas; i++){
		for(j=0; j<columnas; j++){
			printf("\n\tPosicion [%d] [%d]: ", i, j);
			scanf("%d", &dato);
			matriz1[i][j]=dato;
		}
	}
	printf("\n\nIngrese los valores para la matriz 2: ");
	for(i=0; i<filas; i++){
		for(j=0; j<columnas; j++){
			printf("\n\tPosicion [%d] [%d]: ", i, j);
			scanf("%d", &dato);
			matriz2[i][j]=dato;
		}
	}
	for(i=0; i<filas; i++){
		for(j=0; j<columnas; j++){
			suma[i][j]=matriz1[i][j]+matriz2[i][j];
		}
	}
	printf("\n\n***La suma de las matrices es: ***\n");
	for(i=0; i<filas; i++){
		printf("\n");
		for(j=0; j<columnas; j++){
			printf("\t%d ", suma[i][j]);
		}
	}	

/*Crear un programa que simule una base de datos, que tenga 
el nombre de una persona junto con su n�mero telefonico.*/
/* #include<stdio.h>
int main(){
	int i=0, filas=0; 
	printf("Personas a registrar en la base de datos: ");
	scanf("%d", &filas);
	char nombres[filas][50];
	char numeros[filas][12];
	printf("\n\nLlenar la base de datos:");
	for(i=0; i<filas; i++){
		printf("\n\n\tDigite el nombre de la persona %d: ", i+1);
		scanf("%s",&nombres[i]);
		printf("\tNumero de %s: ", nombres[i]);
		scanf("%s", &numeros[i]);
	}
	printf("\n***BASE DE DATOS: ***\n");
	for(i=0; i<filas; i++){
		printf("\n\tNombre: %s | Telefono: %s", nombres[i], numeros[i]);
	}
} */
/*Crear un sistema que organice citas medicas, el programa
debe ofrecer la posibilidad de listar citas por mes.*/
/* #include<stdio.h>
#include<stdlib.h>
int main(){
	int i=0, j=0, filas=0, opcion=0, mes=0;
	printf("Citas para agendar: ");
	scanf("%d", &filas);
	system("cls");
	char paciente[filas][50];
	int fecha[filas][4]; 
	for(i=0; i<filas; i++){
		for(j=0; j<4; j++){
			fecha[i][j]=0;	
		}
	}
	for(i=0; i<filas; i++){
		printf("\n\n\tDigite el nombre del paciente %d: ", i+1);
		scanf("%s",&paciente[i]);
		printf("\n\tDatos de la cita:\n\tDia: ");
		scanf("%d", &fecha[i][0]);
		printf("\tMes: ");
		scanf("%d", &fecha[i][1]);
		printf("\tAnio: ");
		scanf("%d", &fecha[i][2]);
		printf("\tHora: ");
		scanf("%d", &fecha[i][3]);
	}
	system("pause");
	system("cls");
	printf("Escriba el numero del mes para listar las citas: ");
	scanf("%d", &mes);
	for(i=0; i<filas; i++){
		if(mes==fecha[i][1]){
			printf("\n\n\tPaciente %s: ", paciente[i]);
			printf("Fecha: |%d|", fecha[i][0]);
			printf("%d|%d| - ", fecha[i][1],fecha[i][2],fecha[i][3]);
			printf("Hora: %d:00", fecha[i][3]);
		}
	}
} */
/*Crear un programa que lleve la información acerca de los
modulos de un parqueadero. Un modulo tiene dos estados, libre
u ocupado, usar un menú.
CONSEJOS: Use una matriz las cuales tenga dos columnas, una 
para el modulo y otra para el estado de dicho modulo, usar 
0 o 1 para expresar el estado libre y ocupado respectivamente.*/
/* #include<stdio.h>
#include<stdlib.h> 
int main(){
	int i=0, filas=0, columnas=2, opcion=0, mod=0;
	printf("Modulos del parqueadero: ");
	scanf("%d", &filas);
	int parqueadero[filas][columnas];
	for(i=0; i<filas; i++){
		parqueadero[i][1]=0;
	}
	do{
		system("cls");
		printf("*Menu Parqueadero*\n1. Ingresar un Vehiculo.");
		printf("\n2. Salida Vehiculo.\n3. Modulos libres y Ocupados.");
		printf("\n4. Salir\n\n\tDigite una opcion: ");
		scanf("%d", &opcion);
		if(opcion==1){
			printf("\nIngrese el modulo donde va a parquear: ");
			scanf("%d", &mod);
			parqueadero[mod-1][1]=1;
			system("pause");
		}else if(opcion==2){
			printf("\nIngrese el modulo de donde sale el vehiculo: ");
			scanf("%d", &mod);
			parqueadero[mod-1][1]=0;
			system("pause");
		}else if(opcion==3){
			printf("\nModulos libres: ");
			for(i=0; i<filas; i++){
				if(parqueadero[i][1]==0){
					printf("\n\tModulo [%d]", i+1);
				}
			}
			printf("\nModulos Ocupados: ");
			for(i=0; i<filas; i++){
				if(parqueadero[i][1]==1){
					printf("\n\tModulo [%d]", i+1);
				}
			}
			system("pause");
		}
	}while(opcion!=4);
}
 */

