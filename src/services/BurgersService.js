import { fakeDb } from "../db/FakeDb.js"

class BurgersService {
    getBurgers() {
        const burgers = fakeDb.burgers
        return burgers
    }
}

export const burgersService = new BurgersService()