export default class secuencia{
    uno(){
        var nums = 13;
        return nums;
    }

    dos(){ 
        var count = "*TELEFONO*\n"+
                    "\nDescuelgue el telefono. "+
                    "\nIngrese el telefono a marcar: "+
                    "\n3288040"+
                    "\nProcesando"+
                    "\n\nEsta marcando al numero: 3288040"+
                    "\n\tConversacion en curso."+
                    "\nPulse una tecla si desea finalizar la llamada. \n"+
                    "\nPpause"+
                    "\nLLAMADA FINALIZADA";
        return count;
    }

    tres(){
        var count = "***Vamos a ingresar el numero.***"+
	                "\nIngrese el numero: "+
	                "\n32548"+
	                "\n***El numero fue ingresado.***"+
                    "\nEl numero fue: 32548";
        
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