import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router.get('', this.getBurgers)
    }

    getBurgers(request, response, next) {
        response.send('This is the burgers door, welcome')
    }
}