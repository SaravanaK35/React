var React=require('react');
var RightChild=require('./RightChild');
var Rightcomponent=React.createClass({
	getInitialState: function()
  {
	 return({data_1:[]});
  },
	manipulatedData:function(){

	var requiredData=[];
	var that = this;
		var inBox= that.props.data3.map(function(inbox_id) {
			console.log("willdata3"+inbox_id);

			console.log("Inside 3rd ajax");


				var accessToken = localStorage.getItem('gToken');
				$.ajax({
				 url: 'https://www.googleapis.com/gmail/v1/users/me/messages/'+inbox_id.id+'?key={AIzaSyD8CAIfrpvW_IzWnAjpNNxcVguW5ic9g_0}',
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
					 console.log(requiredData[0].subjValue);
					 console.log(requiredData[0].dateValue);
					 that.setState({data_1:requiredData});
					 loadedData=true;
				 }.bind(that),
				 error: function(xhr, status, err) {
					 console.error(err.toString());
				 }.bind(that)
			});
		return(
		that
		);
		});

	},
	componentWillMount : function() {
		console.log("willMount");
	this.manipulatedData();
	},
  componentWillReceiveProps: function() {
		console.log("willReceive");
			this.manipulatedData();



},




	render:function(){
		console.log("rightrender");
		var inBox=<RightChild inbox={this.state.data_1} />
		return(
			<div>
         {inBox}

			</div>
		);
	}
});
module.exports=Rightcomponent;
