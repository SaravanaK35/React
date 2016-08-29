var React=require('react');


var ReplyComponent=React.createClass({
getInitialState:function()
{
console.log("in reply props");
console.log(this.props.fromValue);
return({to:this.props.fromValue,subject:this.props.subjValue,message:""});
},
handlechange1:function(event)
{

this.setState({to:event.target.value});
},
handlechange2:function(event)
{

this.setState({subject:event.target.value});
},
handlechange3:function(event)
{

this.setState({message:event.target.value});
},
textstore:function()
{
    var accessToken = localStorage.getItem('gToken');
console.log("Access token: "+accessToken);
var email = '';
var Headers = {'To': this.state.to,'Subject': this.state.subject};
for(var header in Headers)
{
email += header += ": "+Headers[header]+"\r\n";
console.log("email---"+email);
console.log("header---"+header);
console.log("Headers[header]---"+Headers[header]);
}
email += "\r\n" + this.state.message;
console.log("constructed email: " +email);
var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
$.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyD8CAIfrpvW_IzWnAjpNNxcVguW5ic9g_0}',
     dataType: 'json',
     contentType: "application/json",
     type: 'POST',
     data: JSON.stringify({'raw': encodedMessage}),
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
success: function(data)
{
 console.log("Success");
}.bind(this),
async: false,
error: function(xhr, status, err) {
 console.error("Error.."+err.toString());
}.bind(this)
});




},
render: function()
{
console.log("Reply");
return(
<div className="container">


   <div className="modal fade" id="myReply">
 <div className="modal-dialog">

   <div className="modal-content">
     <div className="modal-header">
       <button type="button" className="close" data-dismiss="modal">close</button>
       <h4 className="modal-title">REPLY</h4>
     </div>

      <div className="modal-body">

            <form  className="form-horizontal">
              <div className="form-group">
                <div className="col-lg-12">
                  To:{this.state.to}
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-12">
                  Subject:{this.state.subject}
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-12">
                Message:  <textarea className="form-control" id="Message"  onChange={this.handlechange3}  row="20"></textarea>
                </div>
              </div>
                 <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.textstore}>Send</button>
            </form>


     </div>

   </div>

 </div>
</div>
</div>
);
}
})

module.exports=ReplyComponent;
