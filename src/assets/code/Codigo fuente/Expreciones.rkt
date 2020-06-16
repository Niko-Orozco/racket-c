;Contruir un programa tal que nos muestre el 
;Perímetrona circunferencia
(define (perimetro)
    (define radio 0)(define pi 3.141592) 
    (printf "Ingrese el radio: ")
    (read radio)
    (printf "El perimetro es: ~a" (* (* 2  pi) radio))
)

(perimetro)

;Contruir un programa tal que nos muestre el volumen de
;un cubo
(define (volumen)
    (define arista 0) (define volumen 0)
    (printf "  Introduzca arista: " )
    (read arista)
    (set! volumen (expt arista 3)
    (printf"  El volumen del cubo es: ~a" volumen)
)

(volumen)

;Determinar la hipotenusa de un triángulo rectángulo conocidas las 
;longitudes de sus dos catetos. Desarrolle el algoritmo correspondiente.
(define (hipotenusa)
    (define cat1) (define cat2)
    (define hipo)
    (printf "  Introduzca cateto 1: ")
    (read cat1);
    (printf "  Introduzca cateto 2: " );
    (read cat2);
    (set! hipo (sqrt (+ (expt cat1 2)  (expt cat2 2))))
    (printf "  la hipotenusa es: ~a" hipo)
)

;Suponiendo que el kilo de azúcar y de café están a 0'6 y 0'72
;euros respectivamente, contruir un programa que:
;1) Pida por teclado una cantidad en euros.
;2) Si la mitad de la cantidad introducida se destina a comprar 
;   azúcar, una tercera parte a comprar café, y el resto no se gasta. 
;   Calcule cuántos kilos de azúcar y café (datos reales) se pueden 
;   comprar con dicha cantidad de dinero, así como la cantidad de 
;   dinero sobrante.
(define coste_azucar 0.6)
(define coste_cafe 0.72)
(define (cafe)
    (define cantidad)(define kilos_azucar)(define kilos_cafe)
    (printf "   Introduzca cantidad: " )
    (read cantidad)
    (set! kilos_azucar (/ (/ cantidad 2) coste_azucar))
    (set! kilos_cafe (/ (/ cantidad 3) coste_cafe))
    (set! cantidad (/ cantidad 6))

    (printf "  ~a kilos de azuccar" kilos_azucar)
    (printf "  ~a kilos de cafec" kilos_cafe)
    (printf "  Quedan ~a euros" cantidad)

)

(cafe)

;Dada una cantidad expresada en pies, y otra en metros. Determinar 
;la suma pero convertida a pulgadas, a yardas, a metros y a millas 
;por separado. Considere las siguientes equivalencias:

;1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 
;1 pie = 12 pulgadas.
(define (metros) 
    (define pul)(define yar)(define met)(define mil)(define pies)(define me)
    (printf "Ingrese la cantidad expresada en pies: ")
    (read pies)
    (printf "Ingrese la cantidad expresada en metros: ")
    (read me)
    (set! pul (+ (* pies 12) (/ me 0.0254)))
    (set! yar (+ (* pies 3) (* me 1.09361)))
    (set! met (+ (* pies 0.3045) me))
    (set! mil (+ (* pies 0.00019) (* me 0.00062)))
    (printf "La suma en pulgadas es: ~a" pul)
    (printf "La suma en yardas es: ~a" yar)
    (printf "La suma en metros es: ~a" met)
    (printf "La suma en millas es: ~a" mil)
)

(metros)

;Dadas dos tanques llenos de agua cuyas capacidades están dadas en 
;litros y en yardas cúbicas. De la cantidad total de agua: el 75% se 
;dedica al consumo domestico y el 25% se dedica al riego. Diseñe un 
;programa que haga lo siguiente:
;1)  Determine la cantidad total de agua expresada en metros cúbicos 
;   y en metros cúbicos.

;2) Determine las cantidades de agua dedicada al riego y al consumo 
;   doméstico expresada en metros cúbicos y en pies cúbicos. Considere 
;   los siguientes factores de conversión:

;1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 
;1 yarda cúbica = 27 pies cúbicos.
(define (cubicos)
    (define  m_c)(define li)(define y_c)(define p_c)(define r_m)(define r_p) 
    (define c_m)(define c_p)
    (printf "Ingrese la cantidad expresada en litros: ")
    (read li)
    (printf "Ingrese la cantidad expresada en Yardas cubicas: ")
    (read y_c)
    (set! m_c ( li 1000))
    (set! p_c (/ m_c 0.0283))
    (set! r_m (* m_c 0.25))
    (set! c_m (* m_c 0.75))
    (set! r_p (* p_c 0.25))
    (set! c_p (* p_c 0.75))

    (printf "La cantidad en metros cubicos es: ~a" m_c)
    (printf "La cantidad en yardas cubicos es: ~a" p_c)
    (printf "La cantidad que se usa para riego en metros cubicos es: ~a" r_m)
    (printf "La cantidad que se usa para el consumo domestico en metros cubicos es: ~a" c_m)
    (printf "La cantidad que se usa para riego en pies cubicos es: ~a" r_p)
    (printf "La cantidad que se usa para el consumo domestico en pies cubicos es: ~a" c_p)
)

(cubicos)