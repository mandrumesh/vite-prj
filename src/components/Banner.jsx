import React from 'react'
import kitchen from '../assets/img/kitchen.avif'
import living from '../assets/img/living.avif'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-banner" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={living} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div className='text-dark'>
                            <h5 className='display-4 text-light'>Explore <span className='text-danger display-2'>Millions of Product</span></h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={kitchen} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div className='text-dark'>
                        <h5 className='display-4 text-light'>New <span className='text-danger display-2'>Arrivals</span></h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
