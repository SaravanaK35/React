var React=require('react');
var RightChildChild=require('./RightChildChild');

var RightChild=React.createClass({

	render:function(){
		console.log("in right check");
		console.log(this.props.inbox);

			var inBox= this.props.inbox.map(function(inbox_id) {
			console.log("in rightchild");

			if(inbox_id.fromValue){
      return(
        <RightChildChild fromValue={inbox_id.fromValue} subjValue={inbox_id.subjValue} dateValue={inbox_id.dateValue} messagedata={inbox_id.messagedata} />
      );
		}

		if(inbox_id.toValue){

				return(
	        <RightChildChild fromValue={inbox_id.toValue} subjValue={inbox_id.subjValue} dateValue={inbox_id.dateValue} messagedata={inbox_id.messagedata}/>
	      );
			}
    });

		return(
			<div>
         {inBox}
			</div>
		);
	}
});
module.exports=RightChild;
