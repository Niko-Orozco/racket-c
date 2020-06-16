
export default class Vectores{
    uno(){
        var count = ["El vector es: \n1  2  3 \n\nEl vector modificado es: \n1  5  3"];
        return count;
    }

    dos(){
        var count = "Ingrese el tamaño del vector: \n 4\n\n"+
                    "Ingrese un valor entero para la pisición [1]: 3\n"+
                    "Ingrese un valor entero para la pisición [2]: 5\n"+
                    "Ingrese un valor entero para la pisición [3]: 1\n"+
                    "Ingrese un valor entero para la pisición [4]: 9\n\n"+
                    "El vector es: \n3  5  1  9";
        return count;
    }

    tres(){
        return "El promedio de los valores es: "+ 8;
    }
    
    cuatro(){
        return "El producto escalar es: " + 56;
    }

    cinco(){
        return "El maximo de todos los numeros se encuentra en la posicion [7] es: 10.2";
    }

    seis(){
        return "Cantidad de Positivos: 3 de Negativos: 7";
    }
}