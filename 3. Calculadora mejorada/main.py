#FUNCION MAIN()
#LABORATORIO 3. MEJORA TU CALCULADORA

def addmultiplenumbers(numbers):
  #Sum a list of numbers 
  return sum(numbers)

def multiplymultiplenumbers (numbers):
  #Multiply each number in turn with the following number 
  product = 1
  for num in numbers:
    product *= num
  return product 

def isitaninteger(num):
  #Return True if the number is an integer (whole number), False otherwise
  if isinstance(num, int):
    return True
  if isinstance(num, float):
    return False
  return "False"
  
def isiteven(num):
  #Return True if the number is an even, whole number, False otherwise
  if not isitaninteger(num):
    return False
  else:
    return int(num) %2 == 0

def main():
  print("Hello learners!! Start your calculator!!!")
  print("Choose the operation: \n"
        "1. Add\n"
        "2. Multiply\n"
        "3. Number is integer?\n"
        "4. Number is even, whole number?\n"
        "5. Exit\n")

  for _ in range (100):
    ope = input("Your operaction is (1-5): ").strip()

    if ope in ('1', '2'):
      list_number = input("Enter numbers separated by spaces: ").strip()
      if not list_number:
        print("No numbers entered\n")
        return
      #Convertir la entrada a float o int
      numbers = [float(num) if '.' in num else int(num) for num in list_number.split()]

      if ope == '1':
        print("The sum of your numbers is: ", addmultiplenumbers(numbers), "\n")
      elif ope == '2':
        print("The multiply of your numbers is: ", multiplymultiplenumbers(numbers), "\n")

      #Para la operacion 3 y 4, solo es un numero, por lo tanto se toma el primer numero de la lista
    elif ope in ('3', '4'):  
      list_number = input("Enter a single number: ").strip()
      if not list_number:
        print("No number entered.")
      #Entrada de un solo numero
      num = float(list_number) if '.' in list_number else int(list_number)

      if ope == '3':
        print("Your number is integer? ", isitaninteger(num), "\n")
      elif ope == '4':
        print("Your number is even, whole number? ", isiteven(num), "\n")
      
    else: 
      print("Goodbye!!!\n")
      break #Romper el bucle for


if __name__ == "__main__":
  main()

