var React=require('react');
var RightChildChild=require('./RightChildChild');

var RightChild=React.createClass({

	render:function(){
		var inBox= this.props.inbox.map(function(inbox_id) {
			console.log("in rightchild");
      return(
        <RightChildChild fromValue={inbox_id.fromValue} subjValue={inbox_id.subjValue} dateValue={inbox_id.dateValue} />
      );
    });

		return(
			<div>
         {inBox}
			</div>
		);
	}
});
module.exports=RightChild;
