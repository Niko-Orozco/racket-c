;Cree una funcion que evalue si un n�mero es par o impar.
(define (esperar n)
    (if (= (remainder n 2) 0)
        1
        0
    )
)

(define (main)
    (define numero 0)
    (printf "Ingrese un numero: ")
	(set! numero (read))
    (if (= (esperar numero) 1)
        (printf "\nEl numero ingresado es Par. ")
        (printf "\nEl numero ingresado es Impar. ")
    )
)

(main)

;Crear un programa que tenga una funci�n encargada de 
;aplicar descuento a un producto que este en venta.
(define (descuento precio descuento)
	(define total 0)
	(if(and (> precio 0) (> descuento 0))
		(set! total (* precio(/ (- 100 descuento) 100)))
	)
	total
)

(define (main)
	(define precio 0) (define desc 0)
	(printf "Ingrese el precio del producto: ")
	(set! precio (read))
	(printf "Ingrese el descuento en porcentaje para el producto: ")
	(set! desc (read))
	(printf "\nEl precio final es: ~a" (descuento precio desc))
)

(main)

;Cree una funci�n que se encargue de devolver el m�ximo 
;valor de los valores ingresados en un vector de enteros 
;que el usuario digita.
(define  (maximo vect N)
	(define mayor 0)
	(for ([i (in-range 0 N 1)])
		(if (< mayor (vector-ref vect i))
			(set! mayor (vector-ref vect i))
			(void)
		)	
	)
	mayor
)

(define (main)
	(printf "Ingrese la cantidad de enteros a guardar en el vector: ")
	(define N (read))
	(define vect ) 
	(for ([i (in-range 0 N 1)])
		(printf "Valor para la posicion [~a]: " i+1)
		(vector-set! vect i (read))
	)
	(printf "\nEL VALOR MAXIMO ES: ~a" (maximo vect N))
)

(main)

;Cree un programa en C tenga un men� de opciones de una 
;calculadora deoperaciones matem�ticas basicas.
(define (suma)
	(define a 0)(define b 0)
	(printf "Numero a: ")
	(set! a (read))
	(printf "\nNumero b: ")
	(set! b (read))
	(+ a b)
)

(define (resta)
	(define a 0)(define b 0)
	(printf "Numero a: ")
	(set! a (read))
	(printf "\nNumero b: ")
	(set! b (read))
	(- a b)
)

(define (multiplicacion)
	(define a 0)(define b 0)
	(printf "Numero a: ")
	(set! a (read))
	(printf "\nNumero b: ")
	(set! b (read))
	(* a b)
)

(define (division)
	(define a 0)(define b 0)
	(printf "Numero a: ")
	(set! a (read))
	(printf "\nNumero b: ")
	(set! b (read))
	(/ a b)
)

(define (main)
	(define opcion 0)
	(printf "\nCALCULADORA:\n1. Suma.\n2. Resta.\n3. Multiplicacion")
	(printf "\n4. Division..\n5. Salir\nOpcion: ")
	(set! opcion (read))
	(cond
		((= opcion 1) (printf "\nLa suma da como resultado: ~a" 
					  (suma)))
		((= opcion 2) (printf "\nLa resta da como resultado: ~a" 
					  (resta)))
		((= opcion 3) (printf "\nLa multiplicacion da como resultado: ~a" 
					  (multiplicacion)))
		((= opcion 4) (printf "\nLa division da como resultado: ~a" 
		   			  (division)))
		((= opcion 5) (printf "Salir"))
		(else (begin (printf "ingrese una opcion valida.") (main)))
	)
)

(main)

;Cree una funci�n que utilice recursi�n para calcular el
;factorial de un n�mero.
(define (factorial n)
	(if(= n 0)
		1
		(if(= n 1)
			1
			(* n (factorial (- n 1)))
		)
	)
)

(define (main) 
   (define numero 0)
   (printf "Ingresa un numero para calcular su factorial: ")
   (set! numero (read))
   (printf "\nEl factorial del numero ~a es: ~a" numero (factorial numero))
)

(main)

;Escriba un programa que use funciones recursivas 
;el cual permita escribir la sucesi�n de Fibonacci.
(define (fibonacci n)
	(if (= n 1)
    	1
		(if (= n 2)
			1
			(+ (fibonacci (- n 1)) (fibonacci (- n 2)))
		)
	)
)

(define (main)
    (define limite 0)
    (printf "Escriba el limite para la sucesion de fibonacci: ")
    (set! limite (read))
    (for ([i (in-range 0 limite 1)])
		(printf "~a\n" (fibonacci i))
	)
)

(main)