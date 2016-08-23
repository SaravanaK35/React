var React=require('react');
var Grandchild=require('./component2_child');
var Childcomponent_2=React.createClass({

  render:function(){
		var idName = this.props.data2.map(function(id_name) {
           return (
                  <Grandchild id={id_name.id} name={id_name.name} />
             );
						 });
		return(
    <div>
      {idName}
    </div>
);
}
});

module.exports=Childcomponent_2;
