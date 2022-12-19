import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//função para páginas que só podem seracessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
     
        const cookies = parseCookies(ctx);

    //Se o cara tentar acessar a pagina porem ja tendo um login salvo, redirecionamos
    if(cookies['@nextauth.token']) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }


        return await fn(ctx);
    }
}