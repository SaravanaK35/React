var React=require('react');
var NavLink=require('./Navlink');

var Navbar= React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
  			<div className="container">
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-left">
  						<li id="thatsyfood">Thats Y Mail</li>
  					</ul>
  				</div>
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-right" id="nav">
  						<li>
  							<NavLink to="/home">home</NavLink>
  						</li>
              <li>
  							<NavLink to="/gmailbox">Gmail</NavLink>
  						</li>
              <li>
  							<NavLink to="/about/React">About React</NavLink>
  						</li>
              <li>
  							<NavLink to="/about/Router">About Route</NavLink>
  						</li>
              <li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">My Account<strong className="caret"></strong></a>
							<ul className="dropdown-menu">
								<li><a href="#">Account Settings</a>
								</li>
								<li><a href="#">SignOut</a>
								</li>
							</ul>
              </li>
            </ul>

  				</div>
  			</div>
  		</div>

    );
  }
});
module.exports=Navbar;
