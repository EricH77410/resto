import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <section id="home" className="parallax-section">
	      <div className="container">
		      <div className="row">
			      <div className="col-md-12 col-sm-12">
				      <h1>My-Resto On Line</h1>
				      <h2>BON &amp; ABORDABLE</h2>
				       <a href="#gallery" className="smoothScroll btn btn-default">LEARN MORE</a>
			      </div>
		      </div>
	      </div>
      </section>
    );
  }
}

export default Home;
