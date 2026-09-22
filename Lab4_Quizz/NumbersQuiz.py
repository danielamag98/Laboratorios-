import requests

def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"
    response = requests.get(url)
    trivia = response.json()
    return trivia

def main():
    name = input("¿Cómo te llamas? ")
    print(f"Hola {name}! Bienvenido a la sección de preguntas\n")

    cantidad = int(input("¿Cuántas preguntas quieres? "))
    trivia = trivia_fetch(cantidad)

    #verificar que la API haya regresado los resultados correctamente
    if "results" in trivia:
        print("\nPreguntas obtenidas: ")
        #Enumerate sirve para recorrer un elemento iterable (como una lista), y obtener el indice...
        for i, pregunta in enumerate (trivia['results'], 1):
            print(f"{i}. {pregunta['question']}")
    else:
        print("Hubo un error al obtener las preguntas.")

if __name__ == "__main__":
   main()
