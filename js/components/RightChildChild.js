var React=require("react");

var RightChildChild=React.createClass({
    render:function(){
      console.log("in rightchildchild");
        return(
            <div>
            <table className="table table-inbox table-hover">
              <tbody>
                <tr>
                  <td>{this.props.fromValue}</td>
                  <td>{this.props.subjValue}</td>
                  <td>{this.props.dateValue}</td>
                </tr>
              </tbody>
            </table>
           </div>
        );
    }
});

module.exports=RightChildChild;
