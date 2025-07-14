import PageTitle from "./PageTitle";
import './../assets/styles/order.css'
import { useState } from "react";

export default function Contact() {
    const [contact, setContact] = useState({
        email: '',
        nome: '',
        mensagem: ''
    })
    function handleChance(e) {
        const { name, value } = e.target;
        setContact((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(contact)
    }
    return (
        <>
            <PageTitle title='Contacte - nos'
                description='bbbbsd wewesaz mkiiiiiiiiiiiiiik lmkdse' />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 form">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="email" name="email" id="email" placeholder="Insira eu email"
                                onChange={handleChance} />
                            <input type="text" name="nome" id="nome" placeholder="Insira seu nome"
                                onChange={handleChance} />
                            <textarea name="mensagem" id="mensagem" rows='6' placeholder="Insira aqui sua mensagem"
                                onChange={handleChance}></textarea>
                            <input type="submit" className="send-message" name="" id="" value='Enviar' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}