var React=require('react');
var Homschildschild=require('./homechildschild');
var Homechild=React.createClass({

  getInitialState: function()
  {
    return({status:false});
  },

  view:function()
  {
    console.log(this.state.status);
    this.setState({status:true});
  },
  hideView:function()
  {
    console.log(this.state.status);
    this.setState({status:false});
  },
  render:function(){
    console.log("Homechildchild");
    console.log("dddddddddd222222",this.props.messagedata);
      return(
        <div>
        <div className="col-lg-12">
             <table className="table table-inbox table-hover table-striped col-lg-12 test">
              <tbody>

                <tr>
                    <a href="#myModalView" onClick={this.view} id="modal" data-toggle="modal" >
                      <td className="col-lg-4">{this.props.fromdata}</td>
                      <td className="col-lg-4">{this.props.subjectdata}</td>
                    </a>

                {this.state.status?<Homschildschild hideView={this.hideView} mid={this.props.mid} fromValue={this.props.fromdata} subjValue={this.props.subjectdata} messageValue={this.props.messagedata} />:null}
               </tr>
              </tbody>
             </table>
        </div>
        </div>
      );
  }
});
module.exports=Homechild;
