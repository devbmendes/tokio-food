import PageTitle from "./PageTitle";
import './../assets/styles/order.css'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const [contact, setContact] = useState({
        email: '',
        nome: '',
        mensagem: ''
    })
    const [emailSuccess, setEmailSuccess] = useState(false)

    function handleChance(e) {
        const { name, value } = e.target;
        setContact((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }
    function resetEmailSucess() {
        setTimeout(() => {
            setEmailSuccess(false)
        }, 3000);
    }
    function handleSubmit(e) {
        e.preventDefault();

        emailjs.send(
            'service_1pi16he',
            'template_32g8jnj',
            contact,
            'qVa10WFnsVfxj2Ft0'
        ).then(() => {
            setEmailSuccess(true)
            setContact({ email: '', nome: '', mensagem: '' });
            resetEmailSucess()
            console.log(emailSuccess)

        }).catch((error) => {
            console.error('Erro ao enviar:', error);
            alert('Ocorreu um erro ao enviar. Tente novamente.');
        });
    }
    return (
        <>
            <PageTitle title='Contacte - nos'
                description='Contate nos pelo formulario para mais informações adicionais' />
            <AnimatePresence>
                {emailSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-success bg-gradient p-2 text-center col-md-6 offset-3"
                    >
                        <strong><p>Email enviado com sucesso</p></strong>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 form">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="email" name="email" value={contact.email} id="email" placeholder="Insira seu email"
                                onChange={handleChance} />
                            <input type="text" name="nome" value={contact.nome} id="nome" placeholder="Insira seu nome"
                                onChange={handleChance} />
                            <textarea name="mensagem" id="mensagem" value={contact.mensagem} rows='6' placeholder="Insira aqui sua mensagem"
                                onChange={handleChance}></textarea>
                            <input type="submit" className="send-message" name="" id="" value='Enviar' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}