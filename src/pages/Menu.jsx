import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import './../assets/styles/menus.css'
import menuData from './../data/menus.json';

export default function Menu() {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    return (

        <>

            <PageTitle className="margin-top"
                title='Nossos Menus'
                description='Sabores modernos com um toque de Tóquio.'
            />

            <div className="container">
                <div className="row">
                    {menuData.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={item.id}
                            onClick={() => setImagemSelecionada(item.imagem)}
                            style={{ cursor: 'pointer' }}>
                            <div className="menus">
                                <div className="menu-title-price">
                                    <span className='title-menu'>{item.titulo} </span>
                                    <span className='divisor d-none d-lg-block'></span>
                                    <span className='price'>€{item.preco}</span>
                                </div>
                                <div className="menu-description">
                                    <p>{item.descricao}</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
            {/* Modal / Pop-up */}
            {imagemSelecionada && (
                <div className="modal-overlay" onClick={() => setImagemSelecionada(null)}>
                    <div className="modal-content">
                        <img src={imagemSelecionada} alt="Prato selecionado" />
                        <button onClick={() => setImagemSelecionada(null)} className="btn btn-light mt-2">Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}

