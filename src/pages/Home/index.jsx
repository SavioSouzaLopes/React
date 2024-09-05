import './styles.css'
import List from './../../components/List'
import Form from './../../components/Form'
import Video from './../../components/Video'


export default function Home(){
    return (

        

       <main className="container">
            <List titulo={'Meus Hobbies'}/>
            <Form/>
            <Video/>
        </main>
    )
}