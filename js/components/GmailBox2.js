var React = require('react');


var GmailBox = React.createClass({




 render:function()
 {
   return(
     <div className="GmailBox">
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-12">
             <h1>Gmail</h1>
           </div>
         </div>
       </div>
     </div>
   );
}
});

module.exports = GmailBox;
