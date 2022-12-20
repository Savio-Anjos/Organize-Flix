import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

//Função para páginas que só users logados podem acessar
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@nextaut.token'];

        if(!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            } 
        }

        try {
            return await fn(ctx);
        } catch (err) {
            if(err instanceof AuthTokenError) {
                destroyCookie(ctx, '@nextaut.token')
                return {
                    redirect: {
                        destination: '/',
                        permanent: false,
                    }
                }
            }
        }
    }
}