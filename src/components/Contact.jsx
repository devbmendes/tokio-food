import PageTitle from "./PageTitle";
import './../assets/styles/order.css'
import { useState } from "react";
import emailjs from '@emailjs/browser';

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

        emailjs.send(
            'service_1pi16he',
            'template_32g8jnj',
            contact,
            'qVa10WFnsVfxj2Ft0'     // Substitui
        ).then(() => {
            alert('Mensagem enviada com sucesso!');
            setContact({ email: '', nome: '', mensagem: '' });
        }).catch((error) => {
            console.error('Erro ao enviar:', error);
            alert('Ocorreu um erro ao enviar. Tente novamente.');
        });
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