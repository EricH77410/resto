import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="parallax-section">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Contact Info.</h2>
				<div className="ph">
					<p><i className="fa fa-phone"></i> Phone</p>
					<h4>090-080-0760</h4>
				</div>
				<div className="address">
					<p><i className="fa fa-map-marker"></i> Our Location</p>
					<h4>120 Duis aute irure, California, USA</h4>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Open Hours</h2>
					<p>Sunday <span>10:30 AM - 10:00 PM</span></p>
					<p>Mon-Fri <span>9:00 AM - 8:00 PM</span></p>
					<p>Saturday <span>11:30 AM - 10:00 PM</span></p>
			</div>
			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<h2 className="heading">Follow Us</h2>
				<ul className="social-icon">
					<li><a href="/" className="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></a></li>
					<li><a href="/" className="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></a></li>
					<li><a href="/" className="fa fa-behance wow bounceIn" data-wow-delay="0.9s"></a></li>
					<li><a href="/" className="fa fa-dribbble wow bounceIn" data-wow-delay="0.9s"></a></li>
					<li><a href="/" className="fa fa-github wow bounceIn" data-wow-delay="0.9s"></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
    );
  }
}

export default Footer;
