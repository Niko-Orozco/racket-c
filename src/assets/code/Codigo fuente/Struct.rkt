;Crear en programa en Racket que tenga una estructura para almacenar fechas, 
;leer e imprimir dos estructuras de este tipo.
(define-struct fecha(
        dia
        mes
        anio
    )
)

(define (main)
    (printf "Ingrese una fecha de nacimiento: ")
	(define Nacimiento(make-fecha
            (begin (printf "\nDia: ")(read))
            (begin (printf "\nMes: ")(read))
            (begin (printf "\nAnio: ")(read))
        )
    )
    (printf "\nIngrese la fecha del dia de hoy: ");
	(define F_Actual(make-fecha
            (begin (printf "\nDia: ")(read))
            (begin (printf "\nMes: ")(read))
            (begin (printf "\nAnio: ")(read))
        )
    )
	(printf "\nLA FECHA DE NACIMIENTO INGRESADA FUE:")
	(printf " ~a/~a/~a" (fecha-dia Nacimiento)(fecha-mes Nacimiento)(fecha-anio Nacimiento))
	(printf "\nLA FECHA DEL DIA DE HOY ES:")
	(printf " ~a/~a/~a" (fecha-dia F_Actual)(fecha-mes F_Actual)(fecha-anio F_Actual))
)

(main)

;Cree en programa en Racket que lea e imprima una estructura
;que almacena la informacion basica de una persona.
(define-struct DataPerson(
        nombre
        apellido
        cedula
    )
)

(define (main)
    (define Persona(make-DataPerson
            (begin (printf "\nIngrese el nombre de la persona: ")(read))
            (begin (printf "\nIngrese el apellido: ")(read))
            (begin (printf "\nIngrese la cedula: ")(read))
        )
    )
	(printf "\n\nLA PERSONA INGRESADA FUE:")
    (printf "\nNombre: ~a" (DataPerson-nombre Persona))
	(printf "\nApellido: ~a" (DataPerson-apellido Persona))
	(printf "\nCedula: ~a" (DataPerson-cedula Persona))
)

(main)

;Cree en programa en Racket que tenga dos estructuras anidadas, una para
;la informacion basica de una persona, y otra para la fecha de nacimiento.
;lea e imprima ambas estructuras.
(define-struct fecha(
        dia
        mes
        anio
    )
)

(define-struct DataPerson(
        nombre
        apellido
        cedula
        FECHA
    )
)

(define (main)
	(define Persona(make-DataPerson
            (begin (printf "\nIngrese el nombre de la persona: ")(read))
            (begin (printf "\nIngrese el apellido: ")(read))
            (begin (printf "\nIngrese la cedula: ")(read))
            (make-fecha 
                (begin (printf "\nIngrese la fecha de nacimiento:\nDia: ")(read))
                (begin (printf "\nMes:")(read))
                (begin (printf "\nAnio: ")(read))
            )
        )
    )
	(printf "\n\nLA PERSONA INGRESADA FUE:")
	(printf "\nNombre: ~a" (DataPerson-nombre Persona))
	(printf "\nApellido: ~a" (DataPerson-apellido Persona))
	(printf "\nCedula: ~a" (DataPerson-cedula Persona))
	(printf "\nFecha de Nacimiento:")
	(printf " ~a/" (fecha-dia (DataPerson-FECHA Persona)))
    (printf "~a/" (fecha-mes (DataPerson-FECHA Persona)))
    (printf "~a" (fecha-anio (DataPerson-FECHA Persona)))
)

(main)

;Realice un programa en Racket que capture dos horas (hora militar) 
;y calcule la diferencia de tiempo entre ellas.
(define-struct hora(
        horas
        minutos
    )
)

(define (main)
	(define hora 0)(define minuto 0)
    (printf "Ingrese la hora 1: ")
    (define Hora1(make-hora
            (begin (printf "\nHoras: ")(read))
            (begin (printf "\nMinutos: ")(read))
        )
    )
	(printf "Ingrese la hora 2: ")
    (define Hora2(make-hora
            (begin (printf "\nHoras: ")(read))
            (begin (printf "\nMinutos: ")(read))
        )
    )
	(set! hora (- (hora-horas Hora2) (hora-horas Hora1)))
    (set! minuto (- (hora-minutos Hora2) (hora-minutos Hora1)))
	(if(< hora 0)
		(set! hora (* hora -1))
        (void)
	)
	(if(< minuto 0)
		(set! minuto (* minuto -1))
        (void)
	)
	(printf "\n\nLa diferencia es de: ~a horas y ~a minutos." hora minuto)
)

(main)

;Crear una vector de estructuras que guarde la información de N empleados.
(define-struct Persona(
        nombre
        sexo
        salario
    )
)

(define (main)
	(define nemp 0)(define i 0)
	(printf "Introduzca el numero de empleados: ")
	(set! nemp (read))
    (define empleado (make-vector nemp))
	(for ([i (in-range 0 nemp 1)])
        (vector-set! empleado i 
            (make-Persona
                (begin (printf "\nNombre[~a]: " (+ i 1))(read))
                (begin (printf "\nSexo[~a]: " (+ i 1))(read))
                (begin (printf "\nSalario[~a]: " (+ i 1))(read))
            )
        )
	)
)

(main)

;Crear una vector de estructuras que guarde la información de N personas, 
;y debe permitir realizar una busqueda sobre las personas ingresadas.
(define-struct persona(
        nombre
        cedula
    )
)

(define (main)
	(define n_personas 0)(define i 0)(define iguales 0)(define buscar 0)
	(define cedula_buscar 0)
	(printf "Introduzca el numero de personas a guardar: ")
	(set! n_personas (read))
	(define personas(make-vector n_personas))
    (for ([i (in-range 0 n_personas 1)])
        (vector-set! personas i 
            (make-persona
                (begin (printf "\nNombre[~a]: " (+ i 1))(read))
                (begin (printf "\nCedula[~a]: " (+ i 1))(read))
            )
        )
	)
	(printf "\n\nIngrese la cedula de la persona a buscar: ")
	(set! cedula_buscar (read))
	(while(= buscar 0)
		(for ([j (in-range 0 n_personas 1)])
			(if(= (persona-cedula (vector-ref personas j)) cedula_buscar)
				(begin
                    (printf "\n\nEL NOMBRE DE LA PERSONA ES: ")
                    (printf "~a" (persona-nombre (vector-ref personas j)))
				    (set! buscar 1)
                )
                (set! i (+ i 1))
			)
		)
		(set! buscar 1)
	)
	(if(= i n_personas)
		(printf "\nLA PERSONA NO SE ENCONTRO")
        (void)
	)	
)

(main)