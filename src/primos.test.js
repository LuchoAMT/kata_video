import FactoresPrimos from "./primos";

describe("Numeros primos", () => {
  it("Debe devolver una lista vacia", () => {
    expect(FactoresPrimos.generar(1)).toEqual([]);
  });

  it("Debe devolver 2 cuando se le pasa 2", () => {
    expect(FactoresPrimos.generar(2)).toEqual([2]);
  });

  it("Debe devolver 3 cuando se le pasa 3", () => {
    expect(FactoresPrimos.generar(3)).toEqual([3]);
  });

  it("Debe devolver 2,2 cuando se le pasa 4", () => {
    expect(FactoresPrimos.generar(4)).toEqual([2,2]);
  });
});
