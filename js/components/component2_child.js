var React=require('react');
var Grandchild=React.createClass({
  render: function(){
    return(
      <div>
      <a href="#" name={this.props.name}>{this.props.id}</a>
      </div>
    );
  }
});
module.exports=Grandchild;
