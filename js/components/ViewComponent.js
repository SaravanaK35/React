var React=require('react');
var ReplyComponent=require('./ReplyComponent');
var ViewComponent=React.createClass({


getInitialState:function()
{
return({status:false});
},

change:function()
{
console.log("onclick of reply");
this.setState({status:true});
console.log(this.state.status);
},
 appendToIframe: function(message)
 {
   var iFrameNode = this.refs.myIframe,
   frameDoc = iFrameNode.contentWindow.document;
   frameDoc.write(message);
 },


 componentDidMount: function(){
   var encodedBody = this.props.messagedata;


   encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
   encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
   this.appendToIframe(encodedBody);
 },
 save: function() {
   var fromv=this.props.fromValue;
   var subject=this.props.subjValue;
   var encodedBody = this.props.messagedata;
   var date=this.props.dateValue;
   encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
   encodedBody = decodeURIComponent(escape(window.atob(encodedBody)))
   $.ajax({
     url: '/save',
     dataType: 'json',
     type: 'POST',
     contentType: "application/json",
     data: JSON.stringify({'from':fromv,'subject':subject,'message':encodedBody,'date':date}),
     success: function(data)
     {
      console.log("success");
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)

   });

var  s=this.props.hideView;
 },

 render:function(){
   console.log("Inside view modal render");
   return(
     <div>
       <div className="modal fade" id="myModalView">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <button onClick={this.props.hideView} data-dismiss="modal" className="close">x</button>
               <h4 className="modal-title">View Mail</h4>
             </div>

             <div className="modal-body">

               <form  className="form-horizontal">

                 <div className="form-group">
                   <div className="col-lg-12">
                     <label className="control-label" for="frmVal">{this.props.fromValue}</label>

                   </div>
                 </div>

                 <div className="form-group">
                   <div className="col-lg-12">
                     <label className="control-label" for="subjVal">{this.props.subjValue}</label>
                   </div>
                 </div>

                 <iframe id="iframe-message" ref="myIframe" ></iframe>
               </form>
             </div>

             <div className="modal-footer">
               <button type="button" className="btn btn-success" data-target="#myReply"  data-toggle="modal"  onClick={this.change} >Reply</button>
               {this.state.status?<ReplyComponent fromValue={this.props.fromValue} subjValue={this.props.subjValue}/>:null}
               <button className="btn btn-success" onClick={this.save}>Save</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 },
});

module.exports=ViewComponent;
