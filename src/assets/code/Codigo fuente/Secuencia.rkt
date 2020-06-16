;Cree e inicialice con cualquier dato del mismo tipo:
;-2 variables del tipo de dato entero.
;-1 variable de tipo de dato char.
;Una vez inicialidos todos los datos sume los dos enteros y 
;almacenelos en una variable.
(define (main)
	(define variable1 0)(define  variable2 0)
	(set! variable1 5)
	(set! variable2 8)
	(define caracter 'h')
	(define suma (+ variable1 variable2))
)

(main)

;Cree un programa en Racket, que secuencialmente simule una llamada 
;telefonica. A partir de mensajes muestre como seria el proceso, 
;tambi�n capture el n�mero que el usuario quiera marcar. Nota: 
;Para imprimir mensajes y recibir datos por pantalla se usa printf 
;y  set!ctivamente, funciones provenientes de la libreria 
;stdio.h, dicha libreria debe ser importada.
;En c se importan librerias asi:

(define (llamada)
    (define  telefono 0)
	(printf "*TELEFONO*\n")
	(printf "\nDescuelgue el telefono. ")
	(printf "\nIngrese el telefono a marcar: ")
	(set! telefono (read))
	(printf "\nProcesando")
	(printf "\n\nEsta marcando al numero: ~a" telefono)
	(printf "\nConversacion en curso.")
	(printf "\nPulse una tecla si desea finalizar la llamada.")
	(printf "\nLLAMADA FINALIZADA")
)

(llamada)

;Capture un dato de tipo entero por consola, el programa debe 
;enviar un mensaje antes de capturar y luego de capturar el 
;n�mero.
;Recuerde: Para capturar un dato, se debe tener una variable del
;tipo de dato que se desee, en este caso un entero.
;Asi: Tipo_dato Nombre_variable;
(define (TipoDato)
	(define numero 0)
	(printf "***Vamos a ingresar el numero.***")
	(printf "\nIngrese el numero: ")
	(set! numero (read))
	(printf "\n***El numero fue ingresado.***")
	(printf "\nEl numero fue: ~a" numero)
)

(TipoDato)


;Cree un programa en c que calcule el area de un triangulo, 
;de acuerdo a una base y una altura arrojada por el usuario.
;Nota: Use variables de tipo flotante.

(define (areaTriangulo)
	(define base 0)(define altura 0)(define area 0)
	(printf "AREA DE UN TRIANGULO:\nBASE: ")
	(set! base (read))
	(printf "\nALTURA: ")
	(set! altura (read))
	(set! area (/ (* base altura) 2))
	(printf "\n\nEl area del triangulo es: ~a" area)
)

(areaTriangulo)

;Implemente un programa en Racket que calcule el volumen de un cilindro.
;El usuario es quien digita el radio y altura de este.
;Trabaje PI como una constante.
;Nota: El volumen de un cilindro esta dado por: v=Pi*r^2*h.
;*El volumen es igual a el n�mero pi multiplicado por el cuadrado
;del radio del cilindro y a su vez multiplicado por la altura del 
;cilindro.
(define PI 3.1416)
(define (volumenCilindro)
	(define r 0)(define h 0)
	(define v 0)
	(printf "VOLUMEN DE UN CILINDRO:\nRADIO: ")
	(set! r (read))
	(printf "\nALTURA: ")
	(set! h (read))
	v=PI*r*r*h
	(printf "\n\nEl volumen del cilindro con radio ~a y altura ~a es: ~a" r h v)
)

(volumenCilindro)

;Con un programa en Racket, calcule la diagonal de un rectangulo que el 
;usuario sea quien define el tama�o de los lados.
;Nota: La diagonal de un rectangulo esta dada por la raiz cuadrada
;del la suma de sus dos lados al cuadrado. Por lo que necesitaremos
;una libreria para las funciones matematicas. Esta libreria es math.h
;contiene la funci�n sqrt para la raiz cuadrada.
(define (diagonalRactangulo)
	(define lado1 0)(define lado2 0)
	(define diagonal 0)
	(printf "DIAGONAL DE UN RECTANGULO:\nLADO 1: ")
	(set! lado1 (read))
	(printf "LADO 2: ")
	(set! lado2 (read))
	(set! diagonal (sqrt (+ (* lado1 lado1) (* lado2 lado2))))
	(printf "\nLa diagonal para el rectangulo de lados ~ax~a es: ~a" lado1 lado2 diagonal)	
)

(diagonalRactangulo)