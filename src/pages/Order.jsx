import { useState } from 'react';
import PageTitle from "../components/PageTitle";
import './../assets/styles/order.css';
import Map from '../components/Map';

function Order() {
    // Data atual no formato YYYY-MM-DD
    const hoje = new Date().toISOString().split('T')[0];

    // Estado centralizado para os dados do formulário
    const [reserva, setReserva] = useState({
        pessoas: '1',
        data: hoje,
        hora: '11:00',
        nome: '',
        telefone: '',
        email: ''
    });

    // Atualiza cada campo individualmente
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReserva((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Simula envio
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva:', reserva);
        //alert(`Reserva feita para ${reserva.pessoas} pessoa(s) às ${reserva.hora} do dia ${reserva.data}`);
    };

    return (
        <>
            <PageTitle className='margin-top'
                title="Reserve uma Mesa"
                description="Escolha o número de pessoas, a data e o horário desejado para reservar sua mesa." />
            <div className='contact-page'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="container">
                            <div className="row">
                                {/* Número de pessoas */}
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <select name="pessoas" value={reserva.pessoas} onChange={handleChange}>
                                        {[...Array(20)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1} Pessoa{i > 0 && 's'}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Data */}
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input
                                        type="date"
                                        name="data"
                                        value={reserva.data}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Hora */}
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <select name="hora" value={reserva.hora} onChange={handleChange}>
                                        {[
                                            '00:30', '01:00', '01:30', '02:00', '02:30', '03:00',
                                            '03:30', '04:00', '04:30', '05:00', '05:30', '06:00',
                                            '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
                                            '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
                                            '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                                            '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
                                            '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
                                            '21:30', '22:00', '22:30', '23:00', '23:30', '24:00',
                                        ].map((hora) => (
                                            <option key={hora} value={hora}>
                                                {hora}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="text"
                                        name="telefone"
                                        value={reserva.telefone}
                                        onChange={handleChange} placeholder='Insira seu contato' />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <input type="text"
                                        name="nome"
                                        value={reserva.nome}
                                        onChange={handleChange} placeholder='Insira seu nome' />
                                </div><div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="email"
                                        name="email"
                                        value={reserva.email}
                                        onChange={handleChange} placeholder='seu@email.com' />
                                </div><div className="col-md-12 col-sm-12 col-xs-12">
                                    <input type="submit" className='send-message' value="Reserve Agora" style={{ width: '98%' }} />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className='container' style={{ margin: '10px' }}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Order;
