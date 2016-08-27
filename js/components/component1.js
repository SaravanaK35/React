var React=require('react');
var Childcomponent_1= React.createClass({
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
  						<li className="active" id="home">
  							<a href="#" >Home</a>
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
module.exports=Childcomponent_1;
