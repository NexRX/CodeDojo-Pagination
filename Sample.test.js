const pagination = require('./BusinessLogic').pagination;
const pagination2 = require('./BusinessLogic').pagination2;

// test("Return 3 pages", () => {
//     const pages = pagination(2, 3);
//     expect(pages).toBe("1 2 3");
// });

// test("For four pages", () => {
//     const pages = pagination(1, 4);
//     expect(pages).toBe("1 2 3 4")
// })

// test("Should return pagination for 10 at pos 8", () => {
//     const pages = pagination(8, 10);
//     console.log(pages)
//     expect(pages).toBe("1 ... 7 8 9 10")
// })

test("Return 3 pages", () => {
    const pages = pagination2(2, 3);
    expect(pages).toBe("1 2 3");
});

test("For four pages", () => {
    const pages = pagination2(1, 4);
    expect(pages).toBe("1 2 3 4")
})

test("Should return pagination2 for 10 at pos 8", () => {
    const pages = pagination2(8, 10);
    console.log(pages)
    expect(pages).toBe("1 ... 7 8 9 10")
})