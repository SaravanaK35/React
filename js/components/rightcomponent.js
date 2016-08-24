var React=require('react');
var RightChild=require('./RightChild');
var requiredData=[];

var Rightcomponent=React.createClass({
	getInitialState: function()
  {
	 return({data_1:[]});
  },
	inbox: function(id)
	{
		var thatttt=this;
		console.log("Inside 3rd ajax");
		console.log(id);

			var accessToken = localStorage.getItem('gToken');
			$.ajax({
			 url: 'https://www.googleapis.com/gmail/v1/users/me/messages/'+id+'?key={AIzaSyAaOBSpOI5VpQ4TlFs-NqQ0T-3Dr3xU4EM}',
			 dataType: 'json',
			 type: 'GET',
			 async:'false',
			 beforeSend: function (request)
			 {
				 request.setRequestHeader("Authorization", "Bearer "+accessToken);
			 },
			 success: function(data)
			 {

       var fromValue;
       var subjValue;
       var dateValue;
       for(var j=0;j < data.payload.headers.length;j++){
         if(data.payload.headers[j].name=="From")
           fromValue=data.payload.headers[j].value;
         else if(data.payload.headers[j].name=="Subject")
           subjValue=data.payload.headers[j].value;
         else if(data.payload.headers[j].name=="Date")
            dateValue=data.payload.headers[j].value;
       }
      requiredData.push({"fromValue":fromValue,"subjValue":subjValue,"dateValue":dateValue});
			   console.log(requiredData[0].fromValue);
				 thatttt.setState({data_1:requiredData});

				 loadedData=true;
			 }.bind(thatttt),
			 error: function(xhr, status, err) {
				 console.error(err.toString());
			 }.bind(thatttt)
		});
	},

	render:function(){
		var that = this;
		var inBox= this.props.data3.map(function(inbox_id) {
    console.log(inbox_id.id);
		console.log(inbox_id.threadId);
		that.inbox(inbox_id.id);

      return(
				<div>
        <RightChild inbox={that.state.data_1} />
				</div>
      );
    });

		return(
			<div>
         {inBox}
			</div>
		);
	}
});
module.exports=Rightcomponent;
