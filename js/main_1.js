var React=require('react');
var ReactDom=require('react-dom');
var Childcomponent_1=require('./components/component1');
var Childcomponent_2=require('./components/component2');
var Childcomponent_3=require('./components/component3');

var Maincomponent= React.createClass({
  getInitialState: function() {
    return ({title:"", description:""});
  },
  clickMe: function(rTitle, rDescription){
    console.log("Inside parent clickme"+rTitle);
  this.setState({title:rTitle, description:rDescription});
  },
/*  starters:function () {
    this.setState({title:"Starters",description:"Starters food section at spicezee gives you a perfect idea about lots of delicious"});
  },
  maincourse:function () {
    this.setState({title:"MainCourse",description:"Main Course. VEGETARIAN. RATATOUILLE VEGETABLES COTE D'AZUR perfect"});
  },
  dessert:function () {
    this.setState({title:"Dessert",description:"The Café at Hotel Café Royal is home to the first dessert restaurant "});
  },*/
  render: function(){
    return(
    <div className="container">
     <Childcomponent_1/>

     <div className="container">
       <div className="row" className="mainCont">
       <div className="col-sm-4">
       <Childcomponent_3 click={this.clickMe} />
       </div>
          <div className="col-sm-8">

             <Childcomponent_2 title={this.state.title} desc={this.state.description} />

          </div>

        </div>
     </div>
    </div>
    );
  }
});

ReactDom.render(<Maincomponent />,document.getElementById('app'));
