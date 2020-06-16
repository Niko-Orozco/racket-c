//Contruir un programa tal que nos muestre el 
//Perímetrona circunferencia
#include <stdio.h>

int main(){
    float radio, pi = 3.141592;
    printf("Ingrese el radio: ");
    scanf("%d", &radio);
    printf("El perimetro es: %d", ((2 * pi)* radio));
}



//Contruir un programa tal que nos muestre el volumen de
//un cubo
#include <math.h>
int main(){
    float arista, volumen;
    printf( "  Introduzca arista: " );
    scanf( "%d", &arista );
    volumen = pow( arista, 3 );
    printf( "  El volumen del cubo es: %d", volumen );
}


//Determinar la hipotenusa de un triángulo rectángulo conocidas las 
//longitudes de sus dos catetos. Desarrolle el algoritmo correspondiente.
#include <math.h>
int main(){
    int cat1, cat2;
    float hipo;
    printf( "  Introduzca cateto 1: " );
    scanf( "%d", &cat1 );
    printf( "  Introduzca cateto 2: " );
    scanf( "%d", &cat2 );
    hipo = sqrt(pow(cat1, 2) + pow(cat2, 2));
    printf( "  la hipotenusa es: %f", hipo);
}


/*Suponiendo que el kilo de azúcar y de café están a 0'6 y 0'72
euros respectivamente, contruir un programa que:
1) Pida por teclado una cantidad en euros.
2) Si la mitad de la cantidad introducida se destina a comprar 
   azúcar, una tercera parte a comprar café, y el resto no se gasta. 
   Calcule cuántos kilos de azúcar y café (datos reales) se pueden 
   comprar con dicha cantidad de dinero, así como la cantidad de 
   dinero sobrante.*/
#include <stdio.h>
#define coste_azucar .6
#define coste_cafe .72
int main()
{
    float cantidad, kilos_azucar, kilos_cafe;
    printf( "   Introduzca cantidad: " );
    scanf( "%f", &cantidad );
    kilos_azucar = cantidad / 2 / coste_azucar;
    kilos_cafe = cantidad / 3 / coste_cafe;
    cantidad = cantidad / 6;

    printf( "   %.2f kilos de az%ccar", kilos_azucar, 163 );
    printf( "  %.2f kilos de caf%c", kilos_cafe, 130 );
    printf( "  Quedan %.2f euros", cantidad );
    return 0;
}

/*Dada una cantidad expresada en pies, y otra en metros. Determinar 
la suma pero convertida a pulgadas, a yardas, a metros y a millas 
por separado. Considere las siguientes equivalencias:

1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 
1 pie = 12 pulgadas.*/
#include <stdio.h>
int main(){
    float pul, yar, met, mil, pies, me;
    printf("Ingrese la cantidad expresada en pies: ");
    scanf("%f", &pies);
    printf("Ingrese la cantidad expresada en metros: ");
    scanf("%f", &me);
    pul = (pies*12) + (me/0.0254);
    yar = (pies*3) + (me*1.09361);
    met = (pies*0.3045) + me;
    mil = (pies*0.00019) + (me*0.00062);
    printf("La suma en pulgadas es: %f", &pul);
    printf("La suma en yardas es: %f", &yar);
    printf("La suma en metros es: %f", &met);
    printf("La suma en millas es: %f", &mil);

}



/*Dadas dos tanques llenos de agua cuyas capacidades están dadas en 
litros y en yardas cúbicas. De la cantidad total de agua: el 75% se 
dedica al consumo domestico y el 25% se dedica al riego. Diseñe un 
programa que haga lo siguiente:
1)  Determine la cantidad total de agua expresada en metros cúbicos 
    y en metros cúbicos.

2) Determine las cantidades de agua dedicada al riego y al consumo 
   doméstico expresada en metros cúbicos y en pies cúbicos. Considere 
   los siguientes factores de conversión:

1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 
1 yarda cúbica = 27 pies cúbicos.*/
#include <stdio.h>
int main(){
    float m_c, li, y_c, p_c, r_m, r_p, c_m, c_p;
    printf("Ingrese la cantidad expresada en litros: ");
    scanf("%f", &li);
    printf("Ingrese la cantidad expresada en Yardas cubicas: ");
    scanf("%f", &y_c);
    m_c = li/1000;
    p_c = m_c/0.0283;
    r_m = m_c*0.25;
    c_m = m_c*0.75;
    r_p = p_c*0.25;
    c_p = p_c*0.75;

    printf("La cantidad en metros cubicos es: %f", m_c);
    printf("La cantidad en yardas cubicos es: %f", p_c);
    printf("La cantidad que se usa para riego en metros cubicos es: %f", r_m);
    printf("La cantidad que se usa para el consumo domestico en metros cubicos es: %f", c_m);
    printf("La cantidad que se usa para riego en pies cubicos es: %f", r_p);
    printf("La cantidad que se usa para el consumo domestico en pies cubicos es: %f", c_p);
}