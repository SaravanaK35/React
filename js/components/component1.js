var React=require('react');
var Childcomponent_1= React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
  			<div className="container">
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-left">
  						<li id="thatsyfood">Thats y Food</li>
  					</ul>
  				</div>
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-right" id="nav">
  						<li className="active" id="home">
  							<a href="#" >Home</a>
  						</li>
  						<li>
  							<a href="#" >About Us</a>
  						</li>
  						<li>
  							<a href="#" >Contact Us</a>
  						</li>
            </ul>

  				</div>
  			</div>
  		</div>

    );
  }
});
module.exports=Childcomponent_1;
