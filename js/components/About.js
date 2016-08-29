var React = require('react');


var About = React.createClass({




 render:function()
 {
   return(
     <div className="About">
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-12">
             <h1>About Us<h2>{this.props.params.aboutName}</h2>
             </h1>
           </div>
         </div>
       </div>
     </div>
   );
}
});

module.exports = About;
