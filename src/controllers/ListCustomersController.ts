import { FastifyRequest, FastifyReply } from "fastify";

import ListCustomersService from "../services/ListCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomersService();

        return listCustomerService.execute();
    }
}

export default ListCustomersController;