// Task 4: delUser(number)
//Create and export a method to **delete** a user from the JSON server.
//  * The `delUser()` method should:
//    * Take an **id** number as input as follows: `delUser(<id>)`
//    * Result in the user matching that **id** number being deleted from the JSON server.

import { getServerURL } from './task1.js';

export async function delUser(id) {
  // Borrar el usuario
  await fetch(`${getServerURL()}/users/${id}`, {
    method: "DELETE"
  });

  //Imprimir la lista actualizada
  const response = await fetch(`${getServerURL()}/users`);
  const data = await response.json();
  console.log(data);
}