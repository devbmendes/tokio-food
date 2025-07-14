import './../assets/styles/PageTitle.css'

export default function PageTitle({ title, description, className = '' }) {
    return (
        <>
            <div className={`${className}`}>
                <div className="container title-container-menu mb-5">
                    <div className='title-org mb-4'>
                        <span className='menu-page-title-divisor'></span><h1>{title}</h1><span className='menu-page-title-divisor'></span>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}