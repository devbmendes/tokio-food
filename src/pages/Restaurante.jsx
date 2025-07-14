import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import PageTitle from "../components/PageTitle"
import './../assets/styles/home.css'
import esp from './../assets/images/banner.jpg'
import Contact from "../components/Contact"
import Services from "../components/Services"


const Restaurante = () => {
    return (
        <>
            <Banner />
            <PageTitle
                title='Nossos Serviços'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit' />
            <Services />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={esp} alt="" className='img-responsive' />
                    </div>
                    <div className="col-md-6">
                        <PageTitle
                            title='Especialidades'
                            description='Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu smotem por 
                        incididunt ut abore et dolore magali qua. Ut enim ad minm eni amquis nostrud exercitation.'/>
                        <Link to='/especialidade'>
                            <button className="btn-especial">Ver Todos</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Contact />

        </>

    )
}
export default Restaurante