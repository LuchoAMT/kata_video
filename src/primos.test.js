import FactoresPrimos from "./primos";

describe("Numeros primos", () => {
  it("Debe devolver una lista vacia", () => {
    expect(FactoresPrimos.generar(1)).toEqual([]);
  });

  
});
