#Laboratorio 2 (15/09/2026)
#Parte 1
print("\nParte 1. Escribe dos numeros")
num1 = int(input("Escribe tu primer numero: "))
num2 = int(input("Escribe tu segundo numero: "))

suma = num1 + num2
print("   1. La suma de tus numeros es: ", suma)

resta = num2 - num1
print("   2. La resta de tus numeros es: ", resta)

multi = num1 * num2
print("   3. La producto de tus numeros es: ", multi)

division = num1 / num2
print("   4. La division de tus numeros es: ", division)

modulo = suma / 2
print("   5. El promedio de tus numeros es: ", modulo)

#Parte 2
print(f"\n========================================")
print("Parte 2. Escribe dos numeros y elige dos operaciones que quieras realizar")

num3 = int(input("Escribe tu numero: "))
num4 = int(input("Escribe tu numero: "))

print("Elige la operacion que quieres realizar: \n  1.Suma \n  2.Resta \n  3.Division \n  4.Multiplicacion")
i = int(input("Operacion elegida: "))

if i == 1:
    suma = num3 + num4
    print("La suma de tus numeros es: ", suma)
elif i == 2:
    resta = num3 - num4
    print("La resta de tus numeros es: ", resta)
elif i == 3:
    division = num3 / num4
    print("La division de tus numeros es: ", division)
elif i == 4:
    multi = num3 * num4
    print("La multiplicacion de tus numeros es: ", multi)
else: 
    print("Error de numero")


#Parte 3
print(f"\n========================================")
print("Parte 3. Una vez resuelto, suma 3 numeros de dos digitos y que den arriba de 100")
a = int(input("Primer numero: "))
b = int(input("Segundo numero: "))
c= int(input("Tercer numero: "))

suma = a + b + c
print("La suma de tus tres numeros es: ", suma)
if suma > 100:
    print("Tu suma dio arriba de 100\n")
else: 
    print("Tu suma no dio arriba de 100, sigue intentando\n")

#Parte 4
print(f"\n========================================")
print("Parte 4. Elegir las operaciones en el orden que desee y ejecutar la operacion")
print("Indicaciones: Elegir el signo de la operacion que quiera realizar")
print("              Suma (+), Resta (-), Division (/), Multiplicación (*)\n")

num5 = int(input("Escribe tu numero: "))
num6 = int(input("Escribe tu numero: "))

operacion_inicial = input("¿Que operacion inicial deseas realizar? ")

if operacion_inicial == "+":
  resultado = num5 + num6
elif operacion_inicial == "-":
  resultado = num5 - num6
elif operacion_inicial == "*":
  resultado = num5 * num6
elif operacion_inicial == "/":
  if num6 != 0:
    resultado = num5 / num6
  else:
    resultado = 0
    print("Error: No se puede dividir entre cero.")
else:
  resultado = 0
  print("Operación no válida.")

print(f"Resultado inicial: {resultado}")

#Ahora se usa el bucle, para las proximas 6 operaciones
for i in range(2, 8):
  print("\n--- Operacion {i} de 7 ---")
  operacion = input("¿Que operacion deseas realizar? ")
  next_num= int(input("Escribe tu siguiente numero: "))


  if operacion == "+":
    resultado = resultado + next_num
  elif operacion == "-":
    resultado = resultado - next_num
  elif operacion == "*":
    resultado = resultado * next_num
  elif operacion == "/":
    if num6 != 0:  
      resultado = resultado / next_num
    else:
      resultado = 0
      print("Error: No se puede dividir entre cero.")
  else:
    resultado = 0
    print("Operación no válida.")

  print(f"Resultado actual: {resultado}")

print(f"\nEl resultado final de tus operaciones es: {resultado}")
