import { fakeDb } from "../db/FakeDb.js"
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        // this.router.get('', this.getBurgers)
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
    }

    getBurgers(request, response, next) {
        response.send('This is the burgers door, welcome')
        try {
            const burgers = burgersService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = burgersService.getBurgerById(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = burgersService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    destroyBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const message = burgersService.destroyBurger(burgerId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}
