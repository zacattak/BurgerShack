import { Burger } from "../models/Burger.js"

class FakeDb {
    burgers = [
        new Burger({ id: 1, style: 'well-done', hasCheese: true }),
        new Burger({ id: 2, style: 'medium-rare', hasCheese: true }),
        new Burger({ id: 3, style: 'rare', hasCheese: false })

    ]
}

export const fakeDb = new FakeDb()