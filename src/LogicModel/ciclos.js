
export default class Ciclos{
    uno(){
        var nums = "";
        for( var contador=1; contador<11 ; contador++ ) {
            nums += contador + " ";
        }
        return nums;
    }

    dos(){
        var count = ["0  1  2  3  4\n0  1  2  3  4\n0  1  2  3  4\n0  1  2  3  4\n"];
        return count;
    }

    tres(){
        var input = Math.floor((Math.random()*(55-1))+1);
        var c=1, par = 0, impar = 0;
        while (c <  input){
            if((c % 2) == 0){
                par += c;
            }else{
                impar += c;
            }
            c++;
        }
        return "Suma de pares: "+par+"\nSuma de impares: "+impar;
    }
    
    cuatro(){
        var input = Math.floor((Math.random()*(25-1))+1);
        var k, i = input;
        var dat = "";
        while(i >= 1){
            k = 1;
            while(k <= i){
                dat += " " +k;
                k++;
            }
            dat += "\n";
            i--;
        }
        return dat;
    }

    cinco(){
        var edad = 12, d = 10, total = 10;
        do{
            d = d * 2;
            total += d;
            edad++;
        }while(total < 1000);
        return  "Edad: " + String(edad) + 
                "\nDinero recibido: " + d + 
                "\nTotal recibido: " + total;
    }

    seis(){
        var input = Math.floor((Math.random()*(26-1))+1);
        var n = input, i = 1, m, fact, suma = 0, dat = "";
        do{
            fact = 1;
            m = i;
            while(m > 1){
                fact *= m;
                m--;
            }
            suma+=fact;
            dat += i + "! = " + fact + "\n";
            i++;
        }while(i <= n);
        dat+="suma = "+ suma;
        return dat;
    }
}