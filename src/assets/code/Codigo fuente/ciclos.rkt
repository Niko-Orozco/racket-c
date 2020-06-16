;Construir un programa que muestre los números  del 1 hasta
;el 10 utilizando la estructira de iteracion for
(define (numeros)
    (for ([contador (in-range 1 11 1)])
        (printf "\n~a" contador)
    )
)
(numeros)

;COnstruir un programa que  imprima por pantalla la siguiente secuencia:
;0 1 2 3 4
;0 1 2 3 4
;0 1 2 3 4
;0 1 2 3 4
;Como restriccion 
(define (secuencia)
    (for ([i (in-range 0 5 1)])
        (for ([j (in-range 0 5 1)])
            (printf " ~a" j)
        )
        (printf "\n")
    )
)
(secuencia)

;Calcular la suma de los números pares e impares comprendidos entre 1 y n.
(define (suma)
    (define c 1)(define par 0)(define impar 0)
    (printf "Ingrese la cantidad de numeros a sumas: ")
    (define num (read))
    (while (< c num)
        (if (= (remainder c 2) 0)
            (set! par (+ par c))
            (set! impar (+ impar c))
        )
        (set! c (+ c 1))
    )
    (printf "Suma de pares: ~a" par);
    (printf "Suma de impares: ~a" impar);
)
(suma)

;Diseñar e implementar un programa que solicite a su usuario un valor no
;negativo n y visualice la siguiente salida:
;1 2 3 … n-1 n
;1 2 3 … n-1
;….
;1 
(define (decremento)
    (define k 1)(define i (read))
    (while (>= i  1)
        (set! k 1)
        (while (<= k i)
            (printf " ~a" k)
            (set! k (+ k 1))
        )
        (set! i (- i 1))
    )
)
(decremento)

;Los padres de una niña le prometieron darle 10 dólares cuando cumpliera 12
;años de edad y duplicar el regalo en cada cumpleaños subsiguiente hasta que
;el regalo excediera 1000 dólares. Escriba un programa para determinar qué 
;edad tendrá la niña cuando se le dé la última cantidad y la cantidad total 
;recibida.
(define (dinero)
    (define edad 12)(define d 10)(define total 10)(define i 0)
    (printf "Calculo del dinero recibido: ")
    (do ((i 1 (+ i 1))) ((< total 1000))
        (set! d (* d 2))
        (set! total (+ total d))
        (set! edad (+ edad 1))
    )
    (printf "Edad: ~a", edad)
    (printf "Dinero recibido: ~a" d)
    (printf "Total recibido: ~a" total)
)
(dinero)

;Construir un programa que calcule y visualice el siguiente esquema
;1! + 2! + 3! + … + (n – 1)! + n!
(define (factoriales)
    (define i = 1)(define m = 0)
    (define fact 0)(define suma 0)
    (printf "Ingrese el valor de n: ")
    (define suma (read))
    (do ((i 1 (+ i 1))) ((<= i n))
        (set! fact 1)
        (set! m = i)
        (while (> m 1)
            (set! fact (* fact m))
            (set! m (- m 1))
        )
        (set! suma (+ suma fact))
        (printf "\t ~a! = ~a " i fact)
        (set! i (+ i 1))
    )
    (printf "\tsuma = ~a" suma)
)
(factoriales)