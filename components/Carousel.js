import React from 'react';

export class Carousel extends React.Component {
    render() {
        return (

            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
            
                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./components/seneca.jpg"  alt="Seneca ITS" width="1100" height="400" />
                    </div>
                    <div className="carousel-item">
                    <img src="./components/powerplaza.jpg" alt="Powerplaza" width="1100" height="400" />
                    </div>
                    <div className="carousel-item">
                    <img src="./components/nifco.jpg" alt="Nifco Korea" width="1100" height="400" />
                    </div>
                </div>
            
                {/* <!-- Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
    )}
}

export default Carousel;