import React, { Component } from 'react';

class Menu extends Component {
  completeChaine(s){
    const max = 55;
    let taille = s.length;
    while (taille < max) {
      s += ' .';
      taille = s.length;
      console.log(taille)
    }
    return s;
  }
  render(){
    const renderMenuItem = this.props.items.map((m)=>{
      return (
        <div key={m.id} className="col-md-6 col-sm-6" id="menu">
          <h4> {this.completeChaine(m.name)} <span> {m.price} €</span></h4>
          <h5>{m.name}</h5>
        </div>
      )
    })
    return(

        <section id="menu" className="parallax-section">
	        <div className="container">
		        <div className="row">
			        <div className="col-md-offset-2 col-md-8 col-sm-12 text-center">
				        <h1 className="heading">Special Menu</h1>
				        <hr />
			        </div>
			          {renderMenuItem}
			      </div>
	        </div>
        </section>

    );
  }
}

export default Menu
