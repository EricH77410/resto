import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <section className="navbar navbar-default navbar-fixed-top" role="navigation">
      	<div className="container">
      		<div className="navbar-header">
      			<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      				<span className="icon icon-bar"></span>
      				<span className="icon icon-bar"></span>
      				<span className="icon icon-bar"></span>
      			</button>
      			<a href="/" className="navbar-brand">{this.props.title}</a>
      		</div>
      		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav navbar-right">
      				<li><a href="#home" className="smoothScroll">HOME</a></li>
      				<li><a href="#gallery" className="smoothScroll">FOOD GALLERY</a></li>
      				<li><a href="#menu" className="smoothScroll">SPECIAL MENU</a></li>
      				<li><a href="#footer-contact" className="smoothScroll">CONTACT</a></li>
      			</ul>
      		</div>
      	</div>
      </section>
    );
  }
}

export default Header;
