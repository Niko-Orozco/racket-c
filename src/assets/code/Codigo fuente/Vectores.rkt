;Crear un vector de enteros que tenga tamaño igual a 3,
;inicialicelo con valores al azar, luego use un ciclo para 
;imprimirlo. Seguidamente modificar la segunda posición del 
;vector e imprimir los cambios

(define (setVector)
     (define vect (vector 1 2 3))
     (printf "El vector es: \n")
     (for ([i (in-range 0 3 1)])
        (printf "~a " (vector-ref vect i))
     )
     (vector-set! vect 1 5)
     (printf "El vector modificado es: \n")
     (for ([i (in-range 0 3 1)])
        (printf "~a " (vector-ref vect i))
     )
)

(setVector)

;Cree un programa que le pida al usuario el tamaño  para un vector 
;de enteros, y luego que llene una a una las posiciones  del  vector. 
;Finalmente imprima el vector 
(define (llenarVect)
    (printf "Ingrese el tamano para el vector: ")
    (define tam (read))
    (define valor 0)
    (define vect (make-vector tam 0))
    (for ([i (in-range 0 tam 1)])
        (printf "Ingrese un valor entero para la posicion [~a]: " i)
        (set! valor (read))
        (vector-set! vect i valor)
    )
    (printf "El vector es: \n")
    (for ([i (in-range 0 tam 1)])
        (printf "~a " (vector-ref vect i))
    )
)

(LLenarVect)

;Cree un programa que calcule el promedio de los datos dentro 
;de un vector de enteros.
(define (promedio)
    (define sumatoria 0)
    (define vect (vector 6 7 8 9 10))
    (for ([i (in-range 0 5 1)])
        (set! sumatoria (+ sumatoria (vector-ref vect i)))
    )
    (printf "\nEl promedio de los valores es: ~a" (/ sumatoria 5))
)

(promedio)

;Crear un programa que permita calcular el producto escalar entre 
;dos vectores
(define (ProductoEscalar)
    (define escalar 0)
    (define v1 (vector 2 3 4))
    (define v2 (vector 5 6 7))
    (for ([i (in-range 0 3 1)])
        (set! escalar (+ escalar (* (vector-ref v1 i) (vector-ref v2 i))))
    )
    (printf "\nEl producto escalar es: ~a" escalar)
)

(ProductoEscalar)

;Buscar un máximo entre un vector de 10 números flotantes
(define (maximo)
    (define max 0)
    (define vect (vector 1.2 3.0 0.2 5 7 4.1 9.99 10.2 4 2))
    (for ([i (in-range 0 10 1)])
        (if (> (vector-ref vect i) (vector-ref vect max))
            (set! max i)
            (void)
        )
    )
    (printf "\nEl maximo de todos los numeros se encuentra en la posicion [~a] es: ~a" max (vector-ref vect max))	
)

(maximo)

;Buscar dentro de un vector cuantos números positivos y 
;cuantos negativos hay

(define (busqueda)
    (define positivos 0)(define negativos 0)
    (define vect (vector -1.2 -3.0 0.2 5 7 -4.1 9.99 10.2 4 2))
    (for ([i (in-range 0 10 1)])
        (if (> (vector-ref vect i) 0)
            (set! negativos (+ negativos 1))
            (set! positivos (+ positivos 1))
        )
    )
    (printf "\nCantidad de Positivos: ~a de Negativos: ~a" positivos negativos)
)

(busqueda)