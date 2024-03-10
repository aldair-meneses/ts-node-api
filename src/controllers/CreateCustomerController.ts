import { FastifyRequest, FastifyReply } from "fastify";

import createCustomerService from "../services/CreateCustomerService";

class CreateCustomerController {

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, email } = request.body as { name: string, email: string };

        if(!name || !email) {
            reply.status(400)
            throw new Error("Name and Email are required fields");
            return;
        }

        const customerSerivce = new createCustomerService();

        const customer = await customerSerivce.execute({name, email});

        reply.send(customer);

    }
}

export { CreateCustomerController }