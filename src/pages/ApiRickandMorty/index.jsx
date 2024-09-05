import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/card'


export default function ApiRickandMorty () {
    const [conteudo, setConteudo ] = useState(<>carregando</>)
    
    async function CarregarTodosOsPersonagens () {
        //Aqui será feito o fetch

        const reqOptions = {
          method: "GET",  //outro: post, put, delete
          reirect:"follow"

        }

        const response = await fetch(

          "https://rickandmortyapi.com/api/character",
          reqOptions
        
        ) //ferramenta assíncrona, recebe promessa-promise(demora). Sincrona(Direto na hora, passou o exato tempo)perdeu

        
        if(!response.ok) {
          throw new Error("Deu Ruim")
        }

        const respondeapi = await response.json()

        return respondeapi
    }

    async function ListaPersonagens() {
        const {results} = await CarregarTodosOsPersonagens()

        return results.map
            (personagem =>  <Card  data={personagem} key={ personagem.id }/>
                
            )

        // const ul = <ul></ul>
        // result.map(personagem => {
            
        //     ul.append(<li>{personagem.name}</li>)
        // } )

        // return ul

        
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await ListaPersonagens())
        }
        getConteudo()
    }, [])
    
    return (
        <div className='lista-principal'>
            {conteudo}</div>
    )
}