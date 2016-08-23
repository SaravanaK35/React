var React=require('react');

var Childcomponent_3=React.createClass({

	render:function(){
		return(
			<div>
			<h2>{this.props.title}</h2>
			<h3>{this.props.desc}</h3>
			</div>
		);
	}
});
module.exports=Childcomponent_3;
