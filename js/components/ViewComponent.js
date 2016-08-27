var React=require('react');
var ViewComponent=React.createClass({
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

 render:function(){
   console.log("Inside view modal render");
   return(
     <div>
       <div className="modal fade" id="myModalView">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <button className="close" data-dismiss="modal">x</button>
               <h4 className="modal-title">Compose Here !!!</h4>
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
               <button className="btn btn-warning" data-dismiss="modal" type="button">Reply</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 },
});

module.exports=ViewComponent;
