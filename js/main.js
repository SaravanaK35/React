var React=require('react');
var Reactdom=require('react-dom');
var Childcomponent_1=require('./components/component1');
var Gmail_auth=require('./components/GmailBox')


var Maincomponent=React.createClass({


  render: function() {
    return(
      <div className="container">
       <Childcomponent_1/>

      <div className="container">
           <div className="row" className="mainCont">
              <div className="col-sm-4">
          
              </div>
              <div className="col-sm-8">

              </div>

            </div>
          </div>
          <div className="container">
              <div className="row">
                 <div className="col-sm-12">
                    <Gmail_auth />
                 </div>
              </div>
          </div>
      </div>
    );

  }

});





Reactdom.render(<Maincomponent />,document.getElementById('app'));
