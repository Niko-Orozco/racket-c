;Cree en programa que capture una cadena y luego
;convierta cada uno de los caracteres a letras mayúsculas.
(define (cadena)
    (define cad "")
    (define cadMayus "")
    (printf "Ingrese una cadena:  ")
	(set! cad (string-copy (read)))
    (set! cadMayus (string-upcase cad))
    (printf "\nLa cadena en mayusculas es: ~a" cadMayus)
)

(cadena)

;Construya un programa en racket que capture una cadena y almacene 
;en otra variable la cadena invertida.
(define (reverse)
    (define cad "")
    (define cadReverse "")
    (printf "Ingrese una cadena de caracteres: ")
 	(set! cad (read))
    (deifne tam (string-length cad))
    (for ([i (in-range 0 (string-length cad) 1)])
        (string-copy! cadReverse tam (string-ref cad i))
        (set! tam (- tam 1))
    )
    (printf "\nCADENA INVERTIDA: ")
	(printf "\n~a" cadReverse)
)

(reverse)

;Cree un programa que analice cuantas letras may�suclas y 
;cuantas letras min�sculas tiene una cadena ingresada por
;el usuario. Nota: Puede usar ciclos anidados y codigo ASCII.
(define (cantidad)
    (define mayus 0)(define minus 0)
    (define cad "")
	(printf "Ingrese una cadena: ")
 	(set! cad (read))
    (for ([i (in-range 0 (string-length cad) 1)])
        (for ([j (in-range 65 90 1)])
            (if (= (char->integer (string-ref cad i)) j)
                (set! mayus (+ mayus 1))
            )
        )
        (for ([j (in-range 97 122 1)])
            (if (= (char->integer (string-ref cad i)) j)
                (set! minus (+ minus 1))
            )
        )
    )
    (printf "\nCantidad de Mayusculas: ~a." mayus)
	(printf "\nCantidad de Minusculas: ~a." minus)
)

(cantidad)

;Cree un programa en Racket que reciba una cadena de m�ximo 20
;caracteres escrita por el usuario, el programa debe contar
;cuantos n�meros, y espacios en blanco contiene dicha cadena.
;Nota: Una buena manera de realizar el ejercicio es usando el
;c�digo ASCII
(define (contador)
    (deinfe cantNums 0)(deinfe cantSpace 0)
    (define cad "")
    (printf "Ingrese una cadena maximo de 20 caracteres: ")
 	(string-copy! cad (read))
    (for ([i (in-range 0 (string-length cad) 1)])
        (for ([j (in-range 48 58 1)])
            (if (= (char->integer (string-ref cad i)) j)
                (set! cantNums (+ cantNums 1))
            )
        )
        (if (= (char->integer (string-ref cad i)) 32)
            (set! cantSpace (+ cantSpace 1))
        )
    )
    (printf "\nLa Cadena ingresada tiene: ")
	(printf "\n%d valores numericos." cantNums)
	(printf "\n%d espacios en blanco. " cantSpace)
)

(contador)

;Cree una programa en C, que permita determinar si una cadena
;ingresada por el usuario es o no palíndromo. Un palíndromo es 
;una palabra o frase que se lee igual en un sentido que en otro.
(define (palindromo)
    (printf "Escribe una cadena: ")
    (define cadena1 (string-copy (read)))
    (define cadena2 (make-string (string-length cadena1) #\a))
    (define tam (- (string-length cadena1) 1))
    (for ([i (in-range 0 (string-length cadena1) 1)])
        (string-set! cadena2 tam (string-ref cadena1 i))
        (set! tam (- tam 1))
    )
    (if (equal? cadena1 cadena2)
        (printf "Es un palindromo.")
        (printf "No es un palindromo.")
    )
)

(palindromo)

;Escriba un programa que lea dos cadenas, una para el nombre
;y otra para el apodo de una persona, luego de leer, concatenar 
;las dos cadenas en una sola y mostrar por consola.
(define (concatenar)
    (define nombre (string-copy ""))
    (define apodo (string-copy ""))
	(printf "Ingrese el nombre de la persona: ")
	(set! nombre (read))
	(printf "Apodo de ~a: " nombre)
	(set! apodo (read))
	(string-append nombre apodo)
	(printf "\n\tLa cadena concatenada es: ~a" nombre)
)

(concatenar)