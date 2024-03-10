import prismaClient from "../prisma";

interface DeleteCustomerProps {
    email: string;
}


class DeleteCustomerService {
    async execute({ email }: DeleteCustomerProps) {
        if (!email) {
            throw new Error("Invalid request")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                email: email
            }
        })

        const costumerId = findCustomer?.id

        if ( !costumerId ) {
            throw new Error ("Costumer not found");
        }

        await prismaClient.customer.delete( {
            where: {
                id: costumerId
            }
        })

        console.log("AQUI:", costumerId );

        return { message: "Successfully deleted!" }
 
    }
}

export default DeleteCustomerService;