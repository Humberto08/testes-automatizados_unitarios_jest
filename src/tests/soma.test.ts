import { soma } from "./sum";


test("a) Passar uma string vazia e verificar se o resultado retornado é zero", () => {
    expect(soma("")).toBe(0);
});

test("b) Passar somente um número e verificar se é retornado o próprio número", () => {
    expect(soma("1")).toBe(1);
});

test("c) Verificar se o código vai levantar a exceção correta caso seja passado um valor negativo", () => {
    expect(() => soma("1, 2, 3, -4, -5")).toThrow();
});

test("d) Passar uma string com um monte de números + resultado esperado da soma e verificar se o resultado condiz com o esperado.", () => {
    const calculo: number = soma("1, 2, 3, 4, 5");
    expect(calculo).toBe(15);
})


