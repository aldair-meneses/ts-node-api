import DeleteCustomerService from "../services/DeleteCustomerService";
import { FastifyRequest, FastifyReply } from "fastify";

class DeleteCustomerController {
    async handle( request: FastifyRequest, reply: FastifyReply ) {
        const { email } = request.query as { email: string };

        if( !email ) {
            reply.status(400)
            throw new Error("No Email was provided");
        }

        const customerService = new DeleteCustomerService();

        const costumer = await customerService.execute( { email } );

        reply.send(costumer);
    }
}

export { DeleteCustomerController }