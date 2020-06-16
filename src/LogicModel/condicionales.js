
export default class Condicionales{
    uno(){
        var input = Math.floor(Math.random()*199) - 99;
        return (input > 0)? "Numero positivo: " + input : "Numero negativo: " + input;
    }

    dos(){
        var input = Math.floor((Math.random()*(55-1))+1), input2 = Math.floor((Math.random()*(55-1))+1), input3 = Math.floor((Math.random()*(55-1))+1);
        return ((input < input2) && (input < input3))? input : ((input2 < input) && (input2 < input3))? input2 : input3;
    }

    tres(){
        var input = (Math.random()*(6-1))+1;
        return (input >= 3.5) ? "Aprobó la materia" : ((input >= 3) && (input < 3.4))? "Presenta prueba de validación" : ((input >= 0) && (input < 3))? "Reprobó la materia" : "ingrese una nota valida";
    }
    
    cuatro(){
        var input = Math.floor((Math.random()*(4-1))+1), input2 = Math.random(), input3 = Math.random(), input4 = Math.random(), input5= Math.random();
        var dat =   "Seleccione opción:\n" +
                    "1 – Equilátero\n" +
                    "2 – Isósceles\n" +
                    "3 – Escaleno\n" +
                    input + "\n";
        switch (input){
            case 1:
                dat += "Introduzca lado del triángulo: " + input2 + "\n";
                dat += "El perímetro es: " + (3*input2);
                break;
            case 2:
                dat += "Ingrese el lado y la base: "+ input2 + " " + input5 + "\n";
                dat += "El perímetro es: " + ((2*input2)+input5);
                break;
            case 3:
                dat += "Ingrese los 3 lados: " + input2 +  + " " + input3 + " " + input4 + "\n";
                dat += "El perímetro es: " + (input4 + (input2 + input3));
                break;
            default:
                dat +=  "Opción no válida.";
                break;
        }
        return dat;
    }

    cinco(){
        var input = Math.floor((Math.random()*(3-1))+1), input2 = Math.floor((Math.random()*(8-1))+1);
        var dat = "1. Dia corespondiente\n" + "2. listar dias\n";
        switch(input){
            case 1: dat += "ingrese un numero entre 1 y 7: "+ input + "\n";
                switch(input2){
                    case 1:
                        dat += "Lunes";
                        break;
                    case 2:
                        dat += "Martes";
                        break;
                    case 3:
                        dat += "Miercoles";
                        break;
                    case 4:
                        dat += "Jueves";
                        break;
                    case 5:
                        dat += "Viernes";
                        break;
                    case 6:
                        dat += "Sabado";
                        break;
                    case 7:
                        dat += "Domingo";
                        break;
                    default:
                        dat += "Ingrese una opción valida";
                        break;
                }
                break;
            case 2:
                dat +=  "Lunes\n" +
                        "Martes\n" +
                        "Miercoles\n" +
                        "Jueves\n" +
                        "Viernes\n" +
                        "Sabado\n" +
                        "Domingo";
                break;
            default:
                dat += "Ingrese una opción valida";
                break;
        }
        return dat;
    }

    seis(){
        var input = Math.floor((Math.random()*(3-1))+1), input2 = Math.floor((Math.random()*(16-1))+1);
        var dat = "";
        switch (input){
            case 1:
                if (input2 >= 15){
                    dat += "Salario anual de: " + ((40000 * 1.2) + 40000);
                }else{
                    if ((input2 < 15) && (input2 > 10)){
                        dat += "Salario anual de: " + ((40000 * 0.8) + 40000);
                    }else{
                        if ((input2 < 10) && (input2 > 5)){
                            dat += "Salario anual de: " + ((40000 * 0.5) + 40000);
                        }else{
                            if ((input2 < 5) && (input2 > 0)){
                                dat += "Salario anual de: " + ((40000 * 0.3) + 40000);
                            }else{
                                dat += "Ingrese una año valido";
                            }
                        }
                    }
                }
                break;
            case 2:
                dat += "Si lleva más de 15 años en la empresa 12%\n"+
                    "Si lleva menos de 15 pero más de 10 años 8%\n"+
                    "Si lleva menos de 10 pero más de 5 años 5%\n"+
                    "Si lleva menos de 5 años 3%\n";
                break;
            default:
                dat += "Opción no válida.";
                break;
        }
        return dat;
    }
}