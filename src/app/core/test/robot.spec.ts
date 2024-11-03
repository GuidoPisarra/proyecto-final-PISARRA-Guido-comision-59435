import { Robot } from "./robot";


describe("Pruebas de robot", () => {


  it("Al instanciar la clase Robot, se espera que tenga un usuario", () => {
    const robot = new Robot("Pepe");

    expect(robot.usuario).toBe("Pepe");
  });
  it("Al instanciar la clase Robot, se espera que tenga un usuario", () => {
    const robot = new Robot("Elo");

    expect(robot.bateria).toBe(100);
  });

});
