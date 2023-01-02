
  import { FormEvent, useState } from 'react';
  import Head from 'next/head';
  import styles from "./style.module.scss";

  import { canSSRAuth } from '../../utils/canSSRAuth';
  import { Header } from '../../components/Header';
import { toast } from 'react-toastify';

  export default function Movie() {

    const [movie, setMovie] = useState('');
    const [seasons, setSeasons] = useState('')

    function handleRegister(event: FormEvent) {
        event.preventDefault();
        
        if(movie === '') {
            toast.warn('Preencha os campos obrigatórios!')
            return;
        }
    }
    
    return (
        <>
          <Head>
            <title>Novo produto - Organize Flix</title>
          </Head>
          <div>
            <Header />

            <main className={styles.container}>
            <h1>Novo Filme</h1>
            <form className={styles.form}  onSubmit={handleRegister}>

                <select>
                    <option>
                        Filme
                    </option>

                    <option>
                        Série
                    </option>
                </select>

                <input
                 type="text" 
                 placeholder="Digite o nome do filme"
                 className={styles.input}
                 value={movie}
                 onChange={(e) => setMovie(e.target.value)}
                />

                <input
                 type="text" 
                 placeholder="Temporadas(opcional)"
                 className={styles.input}
                 value={seasons}
                 onChange={(e) => setSeasons(e.target.value)}
                />

                <button className={styles.buttonAdd} type="submit">
                    Cadastrar
                </button>

            </form>
            </main>

          </div>
        </>
    )
  }

  export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
  })