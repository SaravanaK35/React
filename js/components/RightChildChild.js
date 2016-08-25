var React=require("react");

var RightChildChild=React.createClass({
    render:function(){
      console.log("in rightchildchild");
        return(
            <div>
                <h6>{this.props.fromValue}</h6>
                <h6>{this.props.subjValue}</h6>
                <h6>{this.props.dateValue}</h6>
                <hr></hr>
            </div>
        );
    }
});

module.exports=RightChildChild;
