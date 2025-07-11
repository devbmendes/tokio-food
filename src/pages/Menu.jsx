import PageTitle from '../components/PageTitle';
import './../assets/styles/menus.css'
import menuData from './../data/menus.json';

export default function Menu() {
    return (

        <>
            <PageTitle
                title='Nossos Menus'
                description='Sabores modernos com um toque de Tóquio.'
            />
            <div className="container mt-5">
                <div className="row">
                    {menuData.map((item) => (
                        <div className="col-md-6 col-sm-12 menus" key={item.id}>
                            <div className="menu-title-price">
                                <span className='title-menu'>{item.titulo} </span>
                                <span className='divisor d-none d-lg-block'></span>
                                <span>€{item.preco}</span>
                            </div>
                            <div className="menu-description">
                                <p>{item.descricao}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

