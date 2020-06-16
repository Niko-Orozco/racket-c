;Implemente un procedimiento que reciba un numero e imprima
;si el numero es positivo o negativo, en caso de ser positivo
;debe analizar si es par o impar.
(define (analisis n)
	(if (> n 0)
        (begin
            (printf "\nEl numero ingresado es positivo.")
            (if (= (remainder n 2) 0)
                (printf "\nAdemas el numero es par.")
                (printf "\nAdemas el numero es impar.")
            )
        )
		(printf "\nEl numero ingresado es Negativo.")
	)
)

(define (main)
	(define numero 0)
	(printf "Ingrese un numero para analizar: ")
	(set! numero (read))
	(analisis numero)
)

(main)

;Implemente un procedimiento que dado un numero imprima en
;palabrasel mes del a�o correspondiente.
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

(define (main)
	(define mes 0)
	(do ((i 1 (+ i 1))) ((and (> mes 0)(< mes 13)))
		(printf "\nIngrese un numero: ")
		(set! mes (read))
		(mes_palabras mes)
	)
)

(main)

;Crear un programa en Racket que contenga un procedimiento que
;imprima un cuadrado de acuerdo a un caracter que se le 
;entrega junto con el tama�o de los lados de este.
(define (cuadrado c lado)
	(for ([i (in-range 0 lado 1)])
		(for ([j (in-range 0 lado 1)])
			(printf "~a " c)
		)
		(printf "\n")
	)
)

(define (main)
	(define c 0)
	(define lado 0)
	(printf "Ingrese un caracter para imprimir: ")
	(set! c (read))
	(printf "Ingrese el tamano de los lados del cuadrado: ")
	(set! lado (read))
	(cuadrado c lado)
)

(main)

;Cree un programa que reciba una fecha (dia, mes y a�o) en
;variables separadas, luego implemente un procedimiento que 
;muestre la fecha siguiente.
(define (fecha_siguiente dia mes anio)
	(printf "\n\n***FECHA SIGUIENTE:***\n")
	(if (dia>0 && dia<=31 && mes>0 && mes<=12)
		(if (and (= dia 31)  (= mes 12))
			(begin 
				(set! dia 1)
				(set! mes 1)
				(set! anio (+ anio 1))
				(printf "[~a/~a/~a]" dia mes anio)
			)
			(if (= dia 31)
				(begin 
					(set! dia 1)
					(set! mes (+ mes 1))
					(printf "[~a/~a/~a]" dia mes anio)
				)
				(begin
					(set! dia (+ dia 1))
					(printf "[~a/~a/~a]" dia mes anio)
				)
			)
		)
		(printf "\n***FECHA INVALIDA***")
	)
)

(define (main)
	(define d 0)(define m 0)(define a 0)
	(printf "Ingrese una fecha.\nDia: ")
	(set! d (read))
	(printf "Mes: ")
	(set! m (read))
	(printf "Anio: ")
	(set! a (read))
	(fecha_siguiente d m a)
)

(main)

;Cree un programa en c que tenga los procedimientos basicos 
;relacionados con vectores, llenar e imprimir un vector.
(define (imprimir_vector vec tam)
	(printf "\n***EL VECTOR ES: ***\n")
	(for ([i (in-range 0 tam 1)])
		(printf "~a " (vector-ref vect i))
	)
)

(define (llenar_vector vect tam)
	(define num 0)
	(for ([i (in-range 0 tam 1)])
		(printf "\nPosicion ~a: " i+1)
		(set! num (read))
		(vector-set! vect i num)
	)
	(imprimir_vector vect tam)
)

(define (main)
	(define tam 0)
	(printf "Ingrese un tamano para el vector: ")
	(set! tam (read))
	(define vect (make-vector tam 0))
	(llenar_vector vect tam)
)

(main)

;Con base al anterior programa, cree un procedimiento que 
;ordene de manera ascendente los valores de un vector de N 
;enteros dado por el usuario.
(define (imprimir_vector vec tam)
	(printf "\n***EL VECTOR ES: ***\n")
	(for ([i (in-range 0 tam 1)])
		(printf "~a " (vector-ref vect i))
	)
)

(define (llenar_vector vect tam)
	(define num 0)
	(for ([i (in-range 0 tam 1)])
		(printf "\nPosicion ~a: " i+1)
		(set! num (read))
		(vector-set! vect i num)
	)
	(imprimir_vector vect tam)
)

(define (ordenar_vector vect tam)
	(define temp 0)
	(for ([i (in-range 0 tam 1)])
    	(for ([j (in-range 0 tam 1)])
      		(if (< (vector-ref vect j) (vector-ref vect i))
        		(begin
					(set! temp (vector-ref vect j))
        			(vector-set! vect j (vector-ref vect i))
        			(vector-set! vect i temp)
				)
				(void)
      		)
    	)
  	)
	(imprimir_vector vect tam)
)

(define (main)
	(define tam 0)
	(printf "Ingrese un tamano para el vector: ")
	(set! tam (read))
	(define vect (make-vector tam 0))
	(llenar_vector vect tam)
	(ordenar_vector vect tam)
)

(main)