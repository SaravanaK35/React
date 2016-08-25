var React=require('react');
var Left_child_component=require('./leftcomponent_child');
var Leftcomponent=React.createClass({

  render:function(){
    var that=this;
		var idName = this.props.data2.map(function(id_name) {
           return (
                  <Left_child_component id={id_name.id} data1={that.props.data1} name={id_name.name} />
             );
						 });
		return(
    <div>
      {idName}
    </div>
);
}
});

module.exports=Leftcomponent;
