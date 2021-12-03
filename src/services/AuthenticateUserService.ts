import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

//Verificar se email existe
const user = await usersRepositories.findOne({
    email
});

if(!user){
    throw new Error("Email/Password is incorrect")
}

//verificar se senha está correta

//gerar token

    }

}