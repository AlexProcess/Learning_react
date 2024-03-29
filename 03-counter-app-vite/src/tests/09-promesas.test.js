import { getHeroeByIdAsync } from "../BasePruebas/09-promesas";

describe("Pruebas en 09-promesas.js", () => {
    test("getHeroeById debe de retornar un heroe", (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC",
            });
        });
        done();
    });
    test("getHeroeById debe de obtener un error si heroe no existe", (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch((error) => {
            expect(error).toBe(`No se pudo encontrar un error con el ${id}`);
            done();
        });
    });
});
