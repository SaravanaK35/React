var React=require('react');
var Reactdom=require('react-dom');
var Childcomponent_1=require('./components/component1');
var Childcomponent_2=require('./components/component2');
var Childcomponent_3=require('./components/component3');
var Gmail_auth=require('./components/GmailBox')


var Maincomponent=React.createClass({


  render: function() {
    return(
      <div className="container">
       <Childcomponent_1/>

      <div className="container">
           <div className="row" className="mainCont">
              <div className="col-sm-4">
            {/* <Childcomponent_2 data2={this.props.data} />*/}
              </div>
              <div className="col-sm-8">
                 <Childcomponent_3 />

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


var Gmail={
 "labels": [
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "Label_1",
   "name": "Personal",
   "type": "user"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "Label_2",
   "name": "Receipts",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "user"
  },
  {
   "id": "Label_4",
   "name": "Work",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "user"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_3",
   "name": "Travel",
   "type": "user"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name":"SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
 ]
};

var Gmail_1=[];
for(var i=0;i<Gmail.labels.length;i++){
    var id = Gmail.labels[i].id;
    var name = Gmail.labels[i].name;
    Gmail_1.push({"id":id,"name":name});
}


Reactdom.render(<Maincomponent data={Gmail_1} />,document.getElementById('app'));
