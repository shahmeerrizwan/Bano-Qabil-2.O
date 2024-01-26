import React from 'react';
import one from '../image/dinner1.jpg';

function Menu1Text() {
    return(
        <div className="card">
            <div className="row no-gutters">
            <div className="col">
            <img src={one} alt="pic" className="card-img" />
            </div>
            <div className="col">
            <div className="card-body">
            <h2 className="card-title">nagetts &nbsp;<span className="price"> 30rs</span></h2>
            <p className="card-text">Chicken, Potatoes, Rice</p>
            </div>
            </div>
            </div>
        </div>
    );
}
export default Menu1Text;