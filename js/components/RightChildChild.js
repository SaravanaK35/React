var React=require("react");

var RightChildChild=React.createClass({
    render:function(){
        return(
            <div>
                <h6>{this.props.fromValue}</h6>
                <h6>{this.props.subjValue}</h6>
                <h6>{this.props.dateValue}</h6>
            </div>
        );
    }
});

module.exports=RightChildChild;
