;Escribir un programa que detecte si un número introducido
;desde el teclado es positivo o negativo.
(define (main num)
    (if (< num 0)
        (printf "Numero negativo: ~a" num)
        (printf "Numero positivo: ~a" num)
    )
)

(main (read))

;Escribir un programa que lea tres números por teclado y nos diga 
;cuál es el mayor.
(define (Mayor? num1 num2 num3)
    (if (and (> num1 num2) (> num1 num3))
        (printf "El número mayor es: ~a" num1)
    )
    (if (and (> num2 num1) (> num2 num3))
        (printf "El número mayor es: ~a" num2)
    )
    (if (and (> num3 num1) (> num3 num2))
        (printf "El número mayor es: ~a" num3)
    )
)

(Mayor? (read) (read) (read))

;Escribir un programa que nos diga si un estudiante  aprobó la 
;materia, el programa debe realizar los cálculos en función de 
;los siguientes criterios.
;a. Apruba si las tres notas suman  3.5 o mas
;b. Presenta pruba de validacion si la nota estan entre 3 y 3.4
;c. Reprueba si la nota es menor a 3

(define (aprobo? nota)
    (if (>= nota 3.5)
        (printf "Aprobó la materia")
        (if (and (>= nota 3) (< nota 3.4))
            (printf "Presenta prueba de validación")
            (if (and (>= nota 0) (< nota 3))
                (printf "Reprobó la materia")
                (printf "ingrese una nota valida")
            )
        )
    )
)

(aprobo? (read))


;Escribir un programa que muestre un menú donde las opciones sean 
;“Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule 
;el perímetro del triángulo seleccionado.
(define (perimetro)
    (printf "1. Equilátero")
    (printf "2. Isósceles")
    (printf "3. Escaleno")
    (define opc (read))
    (cond
      [(= opc 1)(printf "Ingrese el lado: ")
                (printf "perimetro: ~a" (* 3 (read)))]
      [(= opc 2)(printf "Ingrese el lado y la base: ")
                (printf "perimetro: ~a" (+ (* 2 (read)) (read)))]
      [(= opc 3)(printf "Ingrese los 3 lados: ")
                (printf "perimetro: ~a" (+(+ (read)(read))(read)))]
      [else (printf "Ingrese una opción valida")]
    )
)

(perimetro)

;Escribir un programa que nos muestre un menu con las opciones de:
;1.  Dia  corespondiente,  2. listar  dias,  crear  las  funciones
;respectivas  a  las  opciones.
(define (dias)
    (printf "Seleccione una opción")
    (printf "1. Dia corespondiente")
    (printf "2. listar dias")
    (define opc (read))
    (cond
        [(= opc 1) (printf "ingrese un numero entre 1 y 7: ")(define (dia (read)))
                    (cond
                        [(= opc 1)(printf "Lunes")]
                        [(= opc 2)(printf "Martes")]
                        [(= opc 3)(printf "Miercoles")]
                        [(= opc 4)(printf "Jueves")]
                        [(= opc 5)(printf "Viernes")]
                        [(= opc 6)(printf "Sabado")]
                        [(= opc 7)(printf "Domingo")]
                        [else (printf "Ingrese una opción valida")]
                    )
        ]
        [(= opc 2)
            (printf "Lunes")
            (printf "Martes")
            (printf "Miercoles")
            (printf "Jueves")
            (printf "Viernes")
            (printf "Sabado")
            (printf "Domingo")
        ]
        [else (printf "Ingrese una opción valida")]
    )
)

(dias)

;Escribir un programa que calcule el sueldo que le corresponde al 
;trabajador de una empresa que cobra 40.000  dólares  anuales, el 
;programa debe realizar los cálculos en función de los siguientes 
;criterios.
;a.Si lleva más de 15 años en la empresa obtiene un aumento del 12%.
;b.Si lleva más de 10  y menos de 15 años obtiene un aumento del 8%.
;c.Si lleva más de  5  y menos de 10 años obtiene un aumento del 5%.
;d.  Si lleva menos de 5 años se le aplica un aumento del 3%.
(define (salario)
  (printf "seleccione una opcion")
  (printf "1. Calcular sueldo anual")
  (printf "2. Ver aumentos anuales")
  (define opc (read))
  (printf "Ingrese la cantidad de años que lleva en la empresa")
  (define anios (read))
  (cond
    [(= opc 1)
      (if (> anios 15)
        (printf "Salario anual de: ~a" (+ (* 40000 1.2) 40000))
        (if (and (< anios 15) (> anios 10))
          (printf "Salario anual de: ~a" (+ (* 40000 0.8) 40000))
          (if (and (< anios 10) (> anios 5))
            (printf "Salario anual de: ~a" (+ (* 40000 0.5) 40000))
            (if (and (< anios 5) (> anios 0))
              (printf "Salario anual de: ~a" (+ (* 40000 0.3) 40000))
              (printf "Ingrese una año valido")
            )
          )
        )
      )
    ]
    [(= opc 2)
        (printf "Si lleva más de 15 años en la empresa 12%")
        (printf "Si lleva menos de 15 pero más de 10 años 8%")
        (printf "Si lleva menos de 10 pero más de 5 años 5%")
        (printf "Si lleva menos de 5 años 3%")
    ]
    [else (printf "Ingrese una opción valida")]
  )
)

(salario)


