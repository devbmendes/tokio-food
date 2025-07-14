import heroImage from './../assets/images/bannerf.jpg';
import heroHistory from './../assets/images/bannerb.jpg';

export default function Services() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img src={heroImage} alt="" className="img-responsive" />
                    </div>
                    <div className="col-md-4 col-sm-12 text-justify">
                        <h3>Desde 1997 a te servir</h3>
                        <p>Lorem ipsum dolor sit amet et magnam sapiente iusto
                            ducimus dolore rem soluta illo. Consequatur
                            optio adipisci ad. Saepe accusantium dignissimos accusamus modi.</p>
                        <div className="separar-paragrafo"></div>
                        <p>
                            Consectetur ratione in a culpa iste. Doloremque a pariatur voluptatem at. Nobis atque laudantium vitae neque
                            consequuntur laboriosam quisqm, a incidunt cum perferendis quae.
                            Quod tempora expedita similique rem maxime. Qui facilis porro magni pariatur, quaerat hic vero
                        </p>
                        <div className="separar-paragrafo"></div>
                        <p>
                            autem tempore laudantium nobis iusto at adipisci necessitatibus rerum deserunt sint consectetur, assumenda nihil ipsum voluptatibus!
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={heroHistory} alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
        </>
    )
}