import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {


    createBurger(burgerData) {
        const newBurger = new Burger(burgerData)

        const lastBurger = fakeDb.burgers[fakeDb.burgers.length - 1]
        newBurger.id = lastBurger.id + 1

        fakeDb.burgers.push(newBurger)
        return newBurger
    }

    destroyBurger(burgerId) {
        const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest('no burger found')
        }
        fakeDb.burgers.splice(burgerIndex, 1)
        return 'Burger was removed!'
    }



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