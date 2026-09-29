// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
  // Obtener los usuarios actuales
  const response = await fetch(`${getServerURL()}/users`);
  const users = await response.json();

  //Encontrar el id más alto
  const maxId = users.reduce((max, user) => Math.max(max, Number(user.id)), 0);

  //Crear el nuevo usuario
  const postResponse = await fetch(`${getServerURL()}/users`, {
    method: "POST",
    body: JSON.stringify({
      id: maxId + 1,
      first_name,
      last_name,
      email
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });

  //Imprimir el usuario nuevo creado
  const newUser = await postResponse.json();
  console.log(newUser);
}
