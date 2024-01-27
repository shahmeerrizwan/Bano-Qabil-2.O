import React from 'react';
import {NavLink} from 'react-router-dom';
// import Menu1 from './Menu1';
// import Menu2 from './Menu2';
// import Menu3 from './Menu3';
// import Menu4 from './Menu4';

function Menu(){
    return(
    <div id="menu">
      <br />
        <hr /><br />
        <br />
        <span className="firstheading"><h1 >Menu</h1></span>
        <span className="secondheading"><h1>MSR Restaurant</h1></span>
        <br />

      <div  className="shah ">
        <div className="fullmenu bold"><NavLink to="/menu/dinner"  >Dinner<div className="bgpic" id="dinner"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/menu/fastfood">FastFood<div className="bgpic" id="fastfood"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/menu/drink">Drink<div className="bgpic" id="drink"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/Menu/icecream">Ice-Cream<div className="bgpic" id="icecream"></div></NavLink></div>
</div>
        <br /> <br />

        {/* <div className="fullmenu"><NavLink to="/Menu">Dinner<div className="bgpic" id="dinner"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">FastFood<div className="bgpic" id="fastfood"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">Drink<div className="bgpic" id="drink"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">Ice-Cream<div className="bgpic" id="icecream"></div></NavLink></div>

        <br /><br />

        <div className="fullmenu"><NavLink to="/Menu">Dinner<div className="bgpic" id="dinner"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">FastFood<div className="bgpic" id="fastfood"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">Drink<div className="bgpic" id="drink"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/Menu">Ice-Cream<div className="bgpic" id="icecream"></div></NavLink></div> */}

        <br /><br />
        <br />

      {/* <BrowserRouter>
        <Route exact path="/" component={Menu1} />
        <Route path="/menu/fastfood" component={Menu2} />
        <Route path="/menu/drink" component={Menu3} />
        <Route path="/menu/icecream" component={Menu4} />
        <Route exact path="/menu" component={Menu1} />
        </BrowserRouter> */}
<br />
<br />

<br />
<br />
<br />
<br />

    </div>
    );
}
export default Menu;