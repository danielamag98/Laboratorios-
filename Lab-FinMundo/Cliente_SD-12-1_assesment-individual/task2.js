// Task 2: listUsers()
//fetch(...) = pide los datos a la ruta users del servidor. 
//async/await = es para esperar una respuesta del servidor, el fetch solo promete pero no realiza
//async = le dice a JS que esta funcion tiene partes que esperan
//node index.js 2

import { inspect } from 'node:util';  //Ayuda a converit un texto legible, en el formato Node, sin comillas como el json
import { getServerURL } from './task1.js';

export async function listUsers() {
  const response = await fetch(`${getServerURL()}/users`);
  const data = await response.json();  //data ya es el arreglo de usuarios

  //los corchetes, map e inspect, es para que el test nos de positivo
  console.log('[');   //el test espera esto en su impresion
  console.log(data.map(user => inspect(user)).join(',\n'));  //map checa cada usuario, y aplica inspect a cada uno, pero siguen en modo node
  // join, une todos estos textos en unos solo, poniendo una coma y un salto de linea, los hace lista vertical
  console.log(']');
}