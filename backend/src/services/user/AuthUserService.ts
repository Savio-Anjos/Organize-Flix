
  import prismaClient from "../../prisma";
  import { compare } from 'bcryptjs'
  
  interface AuthRequest {
    email: string;
    password: string;
  }

  class AuthUserService {
    async execute({email, password}: AuthRequest) {
        //Verificar se o email existe.
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("User/password incorrect")
        }

        // preciso verificar se a senha que ele mandou está correta.
        const passwordMath = await compare(password, user.password)

        if(!passwordMath) {
            throw new Error("User/password incorrect")
        }

        // gerar um token JWT e devolver os dados do usuário como id, name e email



        return { ok: true }

    }
  }

  export { AuthUserService }