import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";
import ListCustomersController from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/list-customers', async(request: FastifyRequest, reply: FastifyReply) => {
        const customersList = await new ListCustomersController().handle(request, reply);

        reply.code(201).send({message: "Sucesso", data: customersList});
    })

    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.delete('/delete-customer', async (request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleteCustomerController().handle(request, reply);
    })
}