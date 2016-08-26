var React=require('react');
var Rightcomponent=require('./rightcomponent');
var Left_child_component=React.createClass({

 handleSort: function(data_id) {
   console.log("handle"+data_id);

   this.props.data1(data_id);
 },


  render: function(){

    return(
      <div className="maillabels">
      <a href="#"  name={this.props.name} onClick={() => this.handleSort(this.props.id)}>{this.props.id}</a>
      </div>
    );
  }
});
module.exports=Left_child_component;
