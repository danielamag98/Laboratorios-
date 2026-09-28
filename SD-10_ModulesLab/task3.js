//Calcular edad

export function ageCalculator(year, month, day) {
    const today = new Date();                          //Calcula la fecha de hoy, lleva new porque Date es un constructor
    let age = today.getFullYear() - year;              // metodo de  los objetos date que devuelve el año completo de la fecha
    const monthBirth = today.getMonth() + 1 - month;   //Cuenta el mes desde 0, por eso se le suma 1, y de ahi se resta al mes de nacimiento.

    //Si todavia no cumple en este año, se le resta 1 a la edad si pasa cualquiera de:
    if (monthBirth < 0 || (monthBirth === 0 && today.getDate() < day)){  //si el mes de su cumpleaños todavia no llega, o el dia de su cumple todavia no llega
        age --;        //regresar a lo que era, porque no cumple años todavia
    } return age;
}