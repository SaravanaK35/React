var React=require('react');
var Left_child_component=require('./leftcomponent_child');
var Modalcomponent=require('./Modalcomponent');
var Leftcomponent=React.createClass({

  render:function(){
    var that=this;
		var idName = this.props.data2.map(function(id_name) {
      if(id_name.id=="INBOX" || id_name.id=="SENT" || id_name.id=="TRASH" || id_name.id=="DRAFT" || id_name.id=="IMPORTANT"){
           return (
                  <Left_child_component id={id_name.id} data1={that.props.data1} name={id_name.name} />
             );
           }
						 });
		return(
    <div>
      <Modalcomponent />
      <br/>
      {idName}
    </div>
);
}
});

module.exports=Leftcomponent;
