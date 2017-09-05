import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="parallax-section" id="footer-contact">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Contact</h2>
				<div className="ph">
					<p><i className="fa fa-phone"></i> Téléphone</p>
					<h4>02 01 01 01 01</h4>
				</div>
				<div className="address">
					<p><i className="fa fa-map-marker"></i>Notre adresse</p>
					<h4>120 Duis aute irure 64000 Biarritz</h4>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Heureus d'ouverture</h2>
					<p>Dimanche <span>09h00 - 13h30</span></p>
					<p>Lundi au Vendredi <span>9h00 - 19h00</span></p>
					<p>Samedi <span>09h00 - 20h00</span></p>
			</div>
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Suivez nous</h2>
				<ul className="social-icon">
					<li><a href="http://facebook.com/" className="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></a></li>
					<li><a href="http://twitter.com" className="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
    );
  }
}

export default Footer;
