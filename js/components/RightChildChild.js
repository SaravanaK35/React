var React=require('react');
var ViewComponent=require('./ViewComponent');


var RightChildChild=React.createClass({

  getInitialState: function()
  {
    return({status:false});
  },

  view:function()
  {
    console.log(this.state.status);
    this.setState({status:true});
  },
    render:function(){
      console.log("in rightchildchild");
        return(
          <div>
          <div className="col-lg-12">
               <table className="table table-inbox table-hover col-lg-12">
                <tbody>

                  <tr>
                      <a href="#myModalView" onClick={this.view} id="modal" data-toggle="modal" >
                        <td className="col-lg-4">{this.props.fromValue}</td>
                        <td className="col-lg-4">{this.props.subjValue}</td>
                        <td className="col-lg-4">{this.props.dateValue}</td>
                      </a>
                      {this.state.status?<ViewComponent fromValue={this.props.fromValue} subjValue={this.props.subjValue} dateValue={this.props.dateValue} messagedata={this.props.messagedata} />:null}
                  </tr>

                </tbody>
               </table>
          </div>
          </div>
        );
    }
});

module.exports=RightChildChild;
