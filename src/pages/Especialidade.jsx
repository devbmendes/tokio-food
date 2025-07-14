import PageTitle from "../components/PageTitle"
import data from './../data/menus.json'
import './../assets/styles/especialidades.css'

function Especialidade() {
    return (
        <>
            <PageTitle className="margin-top"
                title='Especialidades'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit' />
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div className="col-md-4 col-sm-12 especialidade" key={item.id}>
                            <div className="image-especialidade">
                                <img src={item.imagem} alt={item.titulo} />
                                <div className="menu-description mt-3">
                                    <p className="mt-3">{item.descricao}</p>
                                </div>
                                <span className='divisor d-none d-lg-block mb-3' style={{ margin: '0 auto' }}></span>
                                <span className='price mt-3 bold'>€{item.preco}</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Especialidade