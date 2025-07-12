import PageTitle from "./PageTitle";
import './../assets/styles/order.css'

export default function Contact() {
    return (
        <>
            <PageTitle title='Contacte - nos'
                description='bbbbsd wewesaz mkiiiiiiiiiiiiiik lmkdse' />
            <div className="controler">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Insira eu email" />
                            <input type="text" name="nome" id="nome" placeholder="Insira seu nome" />
                            <textarea name="mensagem" id="mensagem" rows='6' placeholder="Insira aqui sua mensagem"></textarea>
                            <input type="submit" name="" id="" value='Enviar' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}