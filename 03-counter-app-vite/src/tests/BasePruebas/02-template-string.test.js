describe("Pruebas en 02-template-string", () => {
    test("getSaludo debe retornar 'Hola Alex'", () => {
        const name = "Alex";
        const message = getSaludo(name);

        expect(message).toBe("Hola ${name}");
    });
});
