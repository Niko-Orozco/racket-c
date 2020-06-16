;Crear un programa en Racket que capture una letra y y devuelva 
;la letra siguiente. Nota: Use el codigo ASCII, use dos funciones, 
;una para comprobar el valor de la letra, y otra para aumentar 
;dicho valor
(define (ASCII letra)
	(char->integer letra)
)

(define (aumentar letra)
	(define valor 0)
	(set! valor (ASCII letra))
	(if(= valor 90)
		65
        (if(= valor 122)
            97
            (set!  valor (+ valor 1))
        )
    )
)

(define (main)
	(define letra "")
	(printf "Ingrese una letra: ")
	(set! letra (read))
	(printf "\nLa siguiente letra es: ~a" (aumentar letra))
)

(main)

;Cree un programa en Racket que realice una resta de enteros con la
;condición de que el resultado de positivo, use funciones anidadas.
(define (mayor a b)
	(if(> b a) 
        b
        a
    )
)

(define (resta a b)
	(if(= (mayor a b) a)
		(- a b)
        -1
	)
)

(define (main)
	(define a 0)(define b 0)
	(printf "Resta de numeros positivos.\nPrimer Numero: ")
	(set! a (read))
	(printf "Segundo Numero: ")
	(set! b (read))
	(if(= (resta a b) -1)
		(printf "\n*El segundo numero no puede ser mas grande que el primero.")
        (printf "\nLa resta entre los numeros ingresados es: ~a" (resta a b))
	) 
)

(main)

;Realizar la implementación con funciones en Racket de un programa que
;lea una fecha dada por el usuario y se compruebe si el dia y mes estan 
;bien escritos y luego imprima el mes en palabras.
(define (mes_palabras mes)
	(cond 
		((= mes 1) (printf "Enero"))
		((= mes 2) (printf "Febrero"))
		((= mes 3) (printf "Marzo"))
		((= mes 4) (printf "Abril"))
		((= mes 5) (printf "Mayo"))
		((= mes 6) (printf "Junio"))
		((= mes 7) (printf "Julio"))
		((= mes 8) (printf "Agosto"))
		((= mes 9) (printf "Septiembre"))
		((= mes 10) (printf "Octubre"))
		((= mes 11) (printf "Noviembre"))
		((= mes 12) (printf "Diciembre"))
	)
)

(define (comprobar dia mes)
	(if (and (and (> dia 0) (< dia 32)) (and (> mes 0) (< mes 13)))
        (begin
            (mes_palabras mes)
		    1
        )
        0
	)
)

(define (main)
	(define d 0)(define m 0)(define a 0)
	(printf "Dia: ")
	(set! d (read))
	(printf "\nMes: ")
	(set! m (read))
	(if(= (comprobar d m) 1)
		(printf "\nLA FECHA ESTA CORRECTAMENTE ESCRITA. ")
        (printf "\nLA FECHA ESTA INCORRECTA. ")
	)
)

(main)

;Crear un programa que permita realizar la contabilidad al vender
;un producto. El programa debe tener dos funciones anidadas, una que 
;multiplique la cantidad total y otra que aplique el descuento.
(define (descuento valor_cantidad descuento)
	(define total 0)
	(if(and (> valor_cantidad 0) (> descuento 0))
		(set! total (* valor_cantidad (/ (- 100 descuento) 100)))
	)
	total
)

(define (cantidad precio cantidad desc)
	(define valor 0)
	(set! valor (* precio cantidad))
	(descuento valor desc)
)

(define (main)
	(define precio 0)(define desc 0)(define  cant 0) 
	(printf "Ingrese el precio del producto: ")
	(set! precio (read))
	(printf "Ingrese la cantidad del producto: ")
	(set! cant (read))
	(printf "Ingrese el descuento en porcentaje para el producto: ")
	(set! desc (read))
	(printf "\nEl precio final es: ~a" (cantidad precio cant desc))
)

(main)

;Cree una función recursiva que permita calcular el minimo común 
;multiplo entre dos numeros. Nota: Se puede usar el maximo comun 
;entre los dos números. Se aplica el concepto de funciones anidadas.
(define (maximo_comun_divisor a b)
    (define temporal 0)
    (while (not (= b 0))
        (set! temporal b)
        (set! b (remainder a b)
        (set! a temporal)
    )
    a
)

(define minimo_comun_multiplo(int a, int b)
    (/ (a * b) (maximo_comun_divisor a b))
)

(define (main) 
    (define a 0)(define b 0)
    (printf "Ingrese el numero a: ")
    (set! a (read))
    (printf "\nIngrese el numero b: ")
    (set! b (read))
    (define mcm (minimo_comun_multiplo a b)
    (printf "\nMCM de ~a y ~a = ~a\n" a b mcm)
)

(main)

;Haga un programa en C que use dos funciones recursivas anidadas 
;para calcular la n-esima potencia de un número dado por el usuario.
(define (multi a b)
	(if(or (= a 0) (= b 0))
   		0
    	(+ a (multi a (- b 1)))
   	)
)

(define (potencia base exp)
	(define res 0)
	(if (= exp 0)
	 	(set! res 1.0)
	    (if (> exp 0)
		    (set! res (multi base (potencia base (- exp 1))))
            (set! res (/ 1.0 (multi base (potencia base (+ exp 1)))))
        )
	)
	res
)

(define (main)
	(define base 0)(define exp 0)
	(printf "Base: ")
	(set! base (read))
	(printf "Exponente: ")
	(set! exp (read))
	(printf "POTENCIA: ~a" (potencia base exp))
)

(main)