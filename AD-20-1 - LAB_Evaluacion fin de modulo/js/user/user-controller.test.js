const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// ================= Tareas 2 =======================================

test("add - verify a user that is not in the list", () => {
    let user = new User(6433, "Daniela", "daniela@generation.org");
    let userController = new UserController();
    
    // Verificamos que el usuario no está en la lista
    expect(userController.getUsers()).not.toContain(user);
});

test("remove - verify a user that is not in the list", () => {
    let userInList = new User(1111, "Carlos", "carlos@generation.org");
    let userNotInList = new User(9999, "Hector", "hector@generation.org");
    let userController = new UserController();
    
    // agregar a uno que sí está
    userController.add(userInList);
    
    // verificar que el usuario que NO está, no se encuentra en la lista
    expect(userController.getUsers()).not.toContain(userNotInList);
    
    // removemos al usuario que no está en la lista
    userController.remove(userNotInList);
    
    // Verificamos que la lista se mantiene intacta con el usuario original
    expect(userController.getUsers()).toContain(userInList);
    expect(userController.getUsers().length).toBe(1);  //solo cuando sabes cuantos hay
});

test("findByEmail - return the user if the email exists", () => {
    let user = new User(123, "Elizabeth", "elizabeth@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findByEmail("elizabeth@generation.org");
    expect(foundUser).toEqual(user);
});

test("findByEmail - undefined if the email does not exist", () => {
    let user = new User(234, "Gabriela", "gabriela@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findByEmail("correo.que.no.existe@generation.org");
    expect(foundUser).toBeUndefined();
});

test("findByEmail - return the user if the email exists", () => {
    let user = new User(123, "Elizabeth", "elizabeth@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findByEmail("elizabeth@generation.org");
    expect(foundUser).toEqual(user);
});

test("findByEmail - undefined if the email does not exist", () => {
    let user = new User(234, "Gabriela", "gabriela@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findByEmail("correo.que.no.existe@generation.org");
    expect(foundUser).toBeUndefined();
});

test("findById - return the user if the id exists", () => {
    let user = new User(123, "Jorge", "jorge@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findById(123);
    expect(foundUser).toEqual(user);
});

test("findById - undefined if the id does not exist", () => {
    let user = new User(786, "Carlos", "carlos@generation.org");
    let userController = new UserController();
    
    userController.add(user);
    
    let foundUser = userController.findById(999);
    expect(foundUser).toBeUndefined();
});