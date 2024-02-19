import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        // this.router.get('', this.getBurgers)
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
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
}
