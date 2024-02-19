import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
    getBurgerById(burgerId) {
        const foundBurger = fakeDb.burgers.find(burger => burger.id == burgerId)

        if (!foundBurger) {
            throw new BadRequest(`${burgerId} not a valid id`)
        }

        return foundBurger
    }

    getBurgers() {
        const burgers = fakeDb.burgers
        return burgers
    }
}

export const burgersService = new BurgersService()