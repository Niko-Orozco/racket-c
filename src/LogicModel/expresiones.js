

export default class Expresiones{
    uno(){
        var input = (Math.random()*(26-1))+1;
        return "El perimetro es: " + ((2 * 3.141592)* input);
    }

    dos(){
        var input = (Math.random()*(26-1))+1;
        return "El volumen del cubo es: " + (input ** 3);
    }

    tres(){
        var input = Math.floor((Math.random()*(100-1))+1), input2 = Math.floor((Math.random()*(100-1))+1);
        return "la hipotenusa es: " + Math.sqrt(Math.pow(input,2) + Math.pow(input2,2));
    }
    
    cuatro(){
        var input = (Math.random()*(32-1))+1;
        var coste_azucar = 0.6, coste_cafe = 0.72, kilos_azucar, kilos_cafe;
        kilos_azucar = input / 2 / coste_azucar;
        kilos_cafe = input / 3 / coste_cafe;
        input = input / 6;
        return kilos_azucar + " Kilos de azucar0\n"+
               kilos_cafe + "Kilos de cafe\n"+
               "Quedan "+ input + "euros";
    }

    cinco(){
        var input = Math.floor((Math.random()*(100-1))+1), input2 = Math.floor((Math.random()*(100-1))+1);
        var pul, yar, met, mil;
        pul = (input*12) + (input2/0.0254);
        yar = (input*3) + (input2*1.09361);
        input2 = (input*0.3045) + input2;
        mil = (input*0.00019) + (input2*0.00062);
        return  "La suma en pulgadas es: " + pul +
                "\nLa suma en yardas es: " + yar +
                "\nLa suma en metros es: " + met +
                "\nLa suma en millas es: " + mil;
    }

    seis(){
        var input = (Math.random()*(100-1))+1;
        var m_c, p_c, r_m, r_p, c_m, c_p;
        m_c = input/1000;
        p_c = m_c/0.0283;
        r_m = m_c*0.25;
        c_m = m_c*0.75;
        r_p = p_c*0.25;
        c_p = p_c*0.75;
        return "La cantidad en metros cubicos es: " + m_c+
               "\n\nLa cantidad en yardas cubicos es: " + p_c+
               "\n\nLa cantidad que se usa para riego en \nmetros cubicos es: " + r_m +
               "\n\nLa cantidad que se usa para el consumo \ndomestico en metros cubicos es: " + c_m +
               "\n\nLa cantidad que se usa para riego en \npies cubicos es: " + r_p +
               "\n\nLa cantidad que se usa para el consumo \ndomestico en pies cubicos es: " + c_p;
    }
}