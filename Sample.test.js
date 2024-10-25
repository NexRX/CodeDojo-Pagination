const pagination = require('./BusinessLogic').pagination;

describe('Pagination', () => {
    it("Should return 3 pages", () => {
        const pages = pagination(2, 3);
        expect(pages).toBe("1 2 3");
    });
    
    it("Should return 4 pages", () => {
        const pages = pagination(1, 4);
        expect(pages).toBe("1 2 3 4")
    })
    
    it("Should return 5 pages (1-10) with *starting* elipses", () => {
        const pages = pagination(8, 10);
        expect(pages).toBe("1 ... 7 8 9 10")
    })

    it("Should return 5 pages (1-10) with *starting* elipses with current first page", () => {
        const pages = pagination(1, 10);
        expect(pages).toBe("1 2 ... 10")
        
    })

    it("Should return 5 pages (1-10) with *ending* elipses", () => {
        const pages = pagination(3, 10);
        expect(pages).toBe("1 2 3 4 ... 10")
    })
    
    it("Should return 5 pages (1-10) with *ending* elipses with current last", () => {
        const pages = pagination(10, 10);
        expect(pages).toBe("1 ... 9 10")
    })

    it("Should return 5 pages (1-10) with *both* elipses (1-10)", () => {
        const pages = pagination(5, 10);
        expect(pages).toBe("1 ... 4 5 6 ... 10")
    })
})