var React=require('react');
var Homechildschild=React.createClass({

  getInitialState:function()
  {
  return({deletearray:[],updatearray:[]});
  },
  appendToIframe: function(message)
  {
    var iFrameNode = this.refs.myIframe,
    frameDoc = iFrameNode.contentWindow.document;
    frameDoc.write(message);
  },

  componentDidMount: function(){
    var encodedBody = this.props.messageValue;
    this.appendToIframe(encodedBody);
  },
 deletedata:function(){
 $.ajax({
   url:'/deleteData',
   dataType: 'json',
   type: 'DELETE',
   success: function(data)
   {
    console.log("success");
    this.setState({deletearray:data});
    console.log(data);
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
 });

 },
 updatedata:function(){
 $.ajax({
   url:'/updateData',
   dataType: 'json',
   type: 'PUT',
   success: function(data)
   {
    console.log("success");
    this.setState({updatearray:data});
    console.log(data);
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
 });

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

                 <iframe id="iframe-message" ref="myIframe">{this.props.messageValue}</iframe>
               </form>
             </div>

             <div className="modal-footer">
               <button className="btn btn-success" onClick={this.updatedata}>Update</button>
               <button className="btn btn-success" onClick={this.deletedata}>Delete</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 },
});

module.exports=Homechildschild;
