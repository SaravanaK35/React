var React = require('react');
var Homechild = require('./homechild')

var Home = React.createClass({
getInitialState:function(){
  return({getarray:[]});
},
getdata:function(){
$.ajax({
  url:'/getData',
  dataType: 'json',
  type: 'GET',
  success: function(data)
  {
   console.log("success");
   this.setState({getarray:data});
   console.log(data);
  }.bind(this),
  error: function(xhr, status, err) {
    console.error(err.toString());
  }.bind(this)
});

},


 render:function()
 {
   var getdata=this.state.getarray.map(function(dataa) {
     console.log("dddddddddd",dataa.from);
    return(
      <Homechild mid={dataa._id} fromdata={dataa.from} subjectdata={dataa.subject} messagedata={dataa.message}/>
    );
  });
   return(
     <div>
     <div className="Home">
       <div className="container-fluid">
         <div className="row">
           <div className="col-lg-4">
           <button className="btn btn-success" onClick={this.getdata}>Get</button>
           <br/>
           </div>
           <div className="col-lg-8">
             <h2>Welcome to Db processing</h2>
             {getdata}

           </div>
         </div>
       </div>
     </div>
     </div>
   );
}
});

module.exports = Home;
