import React, { Component } from 'react';

class Food extends Component {

  render(){
    const renderFood = this.props.food.map((f)=>{
      return (
          <div key={f.id} className="col-md-3 col-sm-3 wow fadeInUp food-item" data-wow-delay="0.3s">
            <a href={f.img} data-lightbox-gallery="zenda-gallery"><img src={f.img} alt="gallery img"/></a>
            <div>
    					<h3>{f.name}</h3>
    					<span>{f.desc}</span>
    				</div>
        </div>
      );
    })
    return(
      <section id="gallery" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12 text-center">
                <h1 className="heading">Food Gallery</h1>
                <hr/>
            </div>
              {renderFood}
          </div>
        </div>
      </section>

    );
  }
}
// <li className="list-group-item" key={f.id} className="food">
//   <h4>{f.name}</h4>
//   <img src={f.img} alt={f.name}/>
//   <p>{f.desc}</p>
//   <p>€ {f.price}</p>
// </li>
export default Food;
