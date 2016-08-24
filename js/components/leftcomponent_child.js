var React=require('react');
var Rightcomponent=require('./rightcomponent');
var Left_child_component=React.createClass({
  render: function(){

    return(
      <div>
      <a href="#" name={this.props.name}>{this.props.id}</a>
      </div>
    );
  }
});
module.exports=Left_child_component;
