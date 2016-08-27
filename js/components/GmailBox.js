var React = require('react');
var Childcomponent_1=require('./component1');
var Leftcomponent=require('./leftcomponent');
var Rightcomponent=require('./rightcomponent');
var Left_child_component=require('./leftcomponent_child');
var loadedData = false;
var requiredData=[];
var Gmail_auth = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],allInboxID:[]});
   },

 gmailLogin: function()
 {
   console.log("gmailLogin");
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '130564948296-qf2vidot4sr8p23a2resd6ga70abik2q.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();

 },


 allLabels: function()
 {
     console.log("allLabels");
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyD8CAIfrpvW_IzWnAjpNNxcVguW5ic9g_0}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

   $.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/me/messages?labelIds=INBOX&key={AIzaSyD8CAIfrpvW_IzWnAjpNNxcVguW5ic9g_0}',
     dataType: 'json',
     type: 'GET',
     async:'false',
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(data)
     {

       this.setState({allInboxID:data.messages});

       loadedData=true;
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)

   });

 },

allData: function(data_name)
 {
   var accessToken = localStorage.getItem('gToken');
  $.ajax({
    url: 'https://www.googleapis.com/gmail/v1/users/me/messages?labelIds='+data_name+'&key={AIzaSyD8CAIfrpvW_IzWnAjpNNxcVguW5ic9g_0}',
    dataType: 'json',
    type: 'GET',
    async:'false',
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", "Bearer "+accessToken);
    },
    success: function(data)
    {

      this.setState({allInboxID:data.messages});

      loadedData=true;
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(err.toString());
    }.bind(this)

  });
},

 render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){

    leftPanel =  <Leftcomponent data2={this.state.allLabelsData} data1={this.allData}/>
     rightPanel= <Rightcomponent data3={this.state.allInboxID} />
   }

     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">SignIn</button>
                  </div>
                  <div className="col-lg-8 pull-right">
                    <h2>Welcome To Thats y Mail</h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">
                    {leftPanel}
                  </div>
                 <div className="col-lg-10">
                 <br/>
                 <br/>
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = Gmail_auth;
