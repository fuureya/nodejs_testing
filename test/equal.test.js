test("test to be", () => {
    const name = "Agil";
    const hello = `Hello ${name}`;
    expect(hello).toBe('Hello Agil');
});

// cek expect menggunakan objek atau array

test("test to be equals", () => {
    let person = { id: "agil" };
    Object.assign(person, { name: "Agil" });

    expect(person).toEqual({ id: "agil", name: "Agil" });
})