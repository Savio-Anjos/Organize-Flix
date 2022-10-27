  import prismaClient from '../../prisma'

  interface UserRequest {
    name: string;
    email: string;
    password: string;
  }

  class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

         // Verificar se ele enviou um email
         if(!email) {
            throw new Error("Email incorrect")
         }

         //Verificar se esse email já está cadastrado na plataforma
         const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
               email: email
            }
         })
       
        return {name: name }
    }
  }

  export { CreateUserService }