(window["webpackJsonpslack-app"]=window["webpackJsonpslack-app"]||[]).push([[0],{264:function(e,t,a){e.exports=a(440)},438:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(47),o=a.n(s),l=a(67),c=a(48),i=a(76),u=a(226),d=a(227);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(18),h=a(19),p=a(21),f=a(20),g=a(22),E=a(58),b=a(35),v=a(59),y=a(228),O=a.n(y),C=a(460),j=a(461),S=a(68),w=a(454),k=a(464),U=a(442),P=a(458),M=a(156),R=a.n(M);a(275),a(277),a(441);R.a.initializeApp({apiKey:"AIzaSyARXB4c3M5Odwi8UBlo8JmVs0mMMnD8JeY",authDomain:"slack-clone-5ba5b.firebaseapp.com",databaseURL:"https://slack-clone-5ba5b.firebaseio.com/",projectId:"slack-clone-5ba5b",storageBucket:"slack-clone-5ba5b.appspot.com",messagingSenderId:"622820841969",appId:"1:622820841969:web:8755fb66723b56b8"});var N=R.a,H=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).isFormValid=function(){var t,a=[];return e.isFormEmpty(e.state)?(t={message:"All Fields Fills "},e.setState({errors:a.concat(t)}),!1):!!e.isPasswordValid(e.state)||(t={message:"Password InValid"},e.setState({errors:a.concat(t)}),!1)},e.isFormEmpty=function(e){var t=e.email,a=e.password,n=e.confirmPassword,r=e.username;return!t.length||!a.length||!n.length||!r.length},e.isPasswordValid=function(e){var t=e.password,a=e.confirmPassword;return!(t.length<6||a.length<6)&&t===a},e.changeHandle=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.SubmitHandle=function(t){e.isFormValid()&&(e.setState({errors:[],loading:!0}),t.preventDefault(),N.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then(function(t){t.user.updateProfile({displayName:e.state.username,photoURL:"http://gravatar.com/avatar/".concat(O()(t.user.email),"?d=identicon")}).then(function(){e.saveUser(t).then(function(){e.setState({loading:!1})}).catch(function(e){console.log(e)})})}).catch(function(t){e.setState({loading:!1,errors:e.state.errors.concat({message:t.message})})}))},e.saveUser=function(t){return e.state.refUser.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.displyError=function(e){return e.map(function(e,t){return r.a.createElement("p",{key:t},e.message)})},e.displyErrorHandleInputs=function(e,t){return e.some(function(e){return e.message.toLowerCase().includes(t)})?"error":""},e.state={username:"",email:"",password:"",confirmPassword:"",errors:[],loading:!1,refUser:N.database().ref("user")},e.isFormEmpty=e.isFormEmpty.bind(Object(v.a)(e)),e.isPasswordValid=e.isPasswordValid.bind(Object(v.a)(e)),e.changeHandle=e.changeHandle.bind(Object(v.a)(e)),e.SubmitHandle=e.SubmitHandle.bind(Object(v.a)(e)),e.displyError=e.displyError.bind(Object(v.a)(e)),e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.confirmPassword,s=e.username,o=e.errors,c=e.loading;return r.a.createElement(C.a,{textAlign:"center",verticalAlign:"middle",className:"app"},r.a.createElement(C.a.Column,{style:{maxWidth:450}},r.a.createElement(j.a,{as:"h2",icon:!0,color:"orange"},r.a.createElement(S.a,{name:"puzzle piece",color:"orange"}),"Register for EwigChat"),r.a.createElement(w.a,{onSubmit:this.SubmitHandle,size:"large"},r.a.createElement(k.a,{stacked:!0},r.a.createElement(w.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"User name ...",onChange:this.changeHandle,className:this.displyErrorHandleInputs(o,"username"),value:s,type:"text"}),r.a.createElement(w.a.Input,{fluid:!0,name:"email",icon:"mail",onChange:this.changeHandle,iconPosition:"left",value:t,placeholder:"Email ...",className:this.displyErrorHandleInputs(o,"email"),type:"email"}),r.a.createElement(w.a.Input,{name:"password",type:"password",value:a,icon:"lock",iconPosition:"left",onChange:this.changeHandle,placeholder:"Password",className:this.displyErrorHandleInputs(o,"password")}),r.a.createElement(w.a.Input,{type:"password",icon:"repeat",onChange:this.changeHandle,name:"confirmPassword",value:n,placeholder:"confirm Password...",iconPosition:"left",className:this.displyErrorHandleInputs(o,"password")}),r.a.createElement(U.a,{disabled:c,className:c?"loading":"",color:"orange",fluid:!0,size:"large"}," ","Submit"))),o.length>0&&r.a.createElement(P.a,{error:!0},r.a.createElement("h3",null,"Error"),this.displyError(o)),r.a.createElement(P.a,null,"Already a user? ",r.a.createElement(l.b,{to:"/login"}," Login"))))}}]),t}(r.a.Component),A=r.a.memo(H),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).changeHandle=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.SubmitHandle=function(e){e.preventDefault(),a.isFromValid(a.state)&&(a.setState({error:[],loading:!0}),N.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){a.setState({errors:[],loading:!1}),console.log(e)}).catch(function(e){a.setState({errors:a.state.errors.concat(e),loading:!1})}))},a.isDisplayError=function(e){return e.map(function(e,t){return r.a.createElement("p",{key:t},e.message)})},a.displyErrorHandleInputs=function(e,t){return e.some(function(e){return e.message.toLowerCase().includes(t)})},a.isFromValid=function(e){var t=e.email,n=e.password;if(t.length&&n.length&&""!==t&&""!==n)return!0;if(0===a.state.errors.length){return a.setState({errors:a.state.errors.concat({message:"fill all field"})}),!1}},a.state={email:"",password:"",errors:[],loading:!1},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors,s=e.loading;return r.a.createElement(C.a,{textAlign:"center",verticalAlign:"middle",className:"app"},r.a.createElement(C.a.Column,{style:{maxWidth:450}},r.a.createElement(j.a,{as:"h1",icon:!0,color:"violet"},r.a.createElement(S.a,{name:"code branch",color:"violet"}),"Login to Ewigchat"),r.a.createElement(w.a,{onSubmit:this.SubmitHandle,size:"large"},r.a.createElement(k.a,{stacked:!0},r.a.createElement(w.a.Input,{name:"email",value:t,placeholder:"enter your email address...",icon:"mail",type:"email",onChange:this.changeHandle,className:this.displyErrorHandleInputs(n,"email")?"error":"",iconPosition:"left"}),r.a.createElement(w.a.Input,{name:"password",type:"password",placeholder:"enter your Password...",icon:"lock",value:a,onChange:this.changeHandle,className:this.displyErrorHandleInputs(n,"password")?"error":"",iconPosition:"left"}),r.a.createElement(U.a,{size:"large",disabled:s,className:s?"loading":"",fluid:!0,color:"violet"},"Login"))),n.length>0&&r.a.createElement(P.a,{error:!0},r.a.createElement("h3",null,"Error"),this.isDisplayError(n)),r.a.createElement(P.a,null,"Don't have an account ? ",r.a.createElement(l.b,{to:"/register"},"Register"))))}}]),t}(n.Component),L=r.a.memo(D),I=function(){return r.a.createElement("div",null,"Metapanel")},T=a(465),_=a(459),F=a(451),z=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{as:_.a,icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"very thin"},r.a.createElement(F.a,null),r.a.createElement(U.a,{icon:"add",size:"small",color:"blue"}))}}]),t}(r.a.Component),x=a(253),V=a(456),B=a(450),q=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.channelName,a=e.newuniqueUser,n=e.onChangeHandle;return r.a.createElement(k.a,{clearing:!0},r.a.createElement(j.a,{fluid:"true",as:"h2",floated:"left",style:{marginBottom:0}},r.a.createElement("span",null,t,r.a.createElement(S.a,{name:"star outline",color:"black"})),r.a.createElement(j.a.Subheader,null,a)),r.a.createElement(j.a,{floated:"right"},r.a.createElement(B.a,{size:"mini",onChange:n,icon:"search",name:"searchTerm",placeholder:"Search Message..."})))}}]),t}(n.Component),G=r.a.memo(q),W=a(161),J=a.n(W),Y=a(455),K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={file:null,authorized:["image/jpeg","image/png"]},a.onChangeFileHandle=function(e){var t=e.target.files[0];a.setState({file:t})},a.sendFile=function(){var e=a.state.file,t=a.props,n=t.fileUpload,r=t.closeModel;null!==e&&(a.isAuthorized(e.name)&&(n(e,{contentType:J.a.lookup(e.name)}),r()))},a.isAuthorized=function(e){return a.state.authorized.includes(J.a.lookup(e))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.model,a=e.closeModel;return r.a.createElement(Y.a,{basic:!0,open:t,onClose:a},r.a.createElement(Y.a.Header,null,"Select an Image File"),r.a.createElement(Y.a.Content,null,r.a.createElement(B.a,{type:"file",fluid:!0,name:"file",onChange:this.onChangeFileHandle,label:"file type jpg,png",labelPosition:"right"})),r.a.createElement(Y.a.Actions,null,r.a.createElement(U.a,{icon:!0,color:"orange",onClick:this.sendFile,inverted:!0},r.a.createElement(S.a,{name:"checkmark"}),"Send"),r.a.createElement(U.a,{icon:!0,color:"red",inverted:!0,onClick:a},r.a.createElement(S.a,{name:"remove"}),"Cancel")))}}]),t}(n.Component),X=a(452),$=function(e){var t=e.uploadState,a=e.percentage;return t&&r.a.createElement(X.a,{percent:a,size:"medium",className:"progress__bar",inverted:!0,indicating:!0,progress:!0})},Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).openModel=function(){return a.setState({model:!0})},a.closeModel=function(){return a.setState({model:!1})},a.onChangeHandle=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.createMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props.user,n={timestamp:N.database.ServerValue.TIMESTAMP,user:{id:t.uid,name:t.displayName,avatar:t.photoURL}};return null!==e?n.image=e:n.content=a.state.message,n},a.sendMessage=function(){var e=a.props,t=e.messageRef,n=e.channel;a.state.message?(a.setState({loading:!1}),t.child(n.id).push().set(a.createMessage()).then(function(){a.setState({loading:!1,errors:[],message:""})}).catch(function(e){a.setState({loading:!1,errors:a.state.errors.concat(e)})})):a.setState({errors:a.state.errors.concat({message:"Please Add Message"})})},a.fileUpload=function(e,t){var n=a.props.channel.id,r=a.props.messageRef,s="chat/public/".concat((new Date).toISOString(),".jpg");a.setState({uploadState:"uploading",uploadTask:a.state.storageRef.child(s).put(e,t)},function(){a.state.uploadTask.on("state_changed",function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);a.setState({percentUpload:t})},function(e){console.log(e),a.setState({errors:a.state.errors.concat(e),uploadTask:null,uploadState:"errors"})},function(){a.state.uploadTask.snapshot.ref.getDownloadURL().then(function(e){a.sendFileMessage(e,r,n)}).catch(function(e){console.log(e),a.setState({errors:a.state.errors.concat(e),uploadTask:null,uploadState:"errors"})})})})},a.sendFileMessage=function(e,t,n){t.child(n).push().set(a.createMessage(e)).then(function(){a.setState({uploadState:"done"})}).catch(function(e){console.log(e),a.setState({errors:a.state.errors.concat(e)})})},a.state={storageRef:N.storage().ref(),message:"",loading:!0,errors:[],model:!1,uploadState:"",percentUpload:0,uploadTask:null},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.model,n=e.uploadState,s=e.percentUpload;return r.a.createElement(k.a,{className:"message__form"},r.a.createElement(B.a,{label:r.a.createElement(U.a,{icon:"add"}),name:"message",onChange:this.onChangeHandle,labelPosition:"left",value:this.state.message,placeholder:t.length>0?t[0].message:"write your message",fluid:!0,className:t.some(function(e){return e.message.toLowerCase().includes("message")})?"error":"",style:{marginBottom:".7em"}}),r.a.createElement(U.a.Group,{icon:!0,widths:"2"},r.a.createElement(U.a,{color:"orange",content:"Add Reply",icon:"edit",onClick:this.sendMessage,labelPosition:"left"}),r.a.createElement(U.a,{color:"teal",content:"Media Upload",icon:"cloud upload",labelPosition:"right",onClick:this.openModel})),r.a.createElement(K,{model:a,fileUpload:this.fileUpload,closeModel:this.closeModel}),r.a.createElement($,{uploadState:n,percentage:s}))}}]),t}(n.Component),Z=a(252),ee=a.n(Z),te=a(254),ae=function(e,t){return e.uid===t.user.id?"self__message":""},ne=function(e){var t=e.message,a=e.user;return r.a.createElement(V.a,null,r.a.createElement(V.a.Avatar,{src:t.user.avatar}),r.a.createElement(V.a.Content,{className:ae(a,t)},r.a.createElement(V.a.Author,{as:"a"},t.user.name),r.a.createElement(V.a.Metadata,null,function(e){return ee()(e.timestamp).fromNow()}(t)),function(e){return e.hasOwnProperty("image")&&!e.hasOwnProperty("content")}(t)?r.a.createElement(te.a,{src:t.image,className:"message__image"}):r.a.createElement(V.a.Text,null,t.content)))},re=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).onChangeHandle=function(e){a.setState({searchTerm:e.target.value},function(){return a.searchMessagewithUser()})},a.addListeners=function(e){a.addMessageListener(e)},a.addMessageListener=function(e){var t=[];a.state.messageRef.child(e).on("child_added",function(e){t.push(e.val()),a.setState({messages:t,messageLoading:!1}),a.countUniqueUser(t)})},a.countUniqueUser=function(e){var t=e.reduce(function(e,t){return e.includes(t.user.name)||e.push(t.user.name),e},[]),n="".concat(t.length," user").concat(t.length>1?"s":"");a.setState({newuniqueUser:n})},a.searchMessagewithUser=function(){var e=Object(x.a)(a.state.messages),t=new RegExp(a.state.searchTerm,"gi"),n=e.reduce(function(e,a){return(a.content&&a.content.match(t)||a.user.name.match(t))&&e.push(a),e},[]);a.setState({searchMessageAndUser:n})},a.displayChannelName=function(e){return e?"#".concat(e.name):""},a.displayMessages=function(e){return e.length>0&&e.map(function(e,t){return r.a.createElement(ne,{key:t,message:e,user:a.state.user})})},a.state={messageRef:N.database().ref("messages"),user:a.props.user.userReducer.user,messages:[],messageLoading:!0,channel:null,newuniqueUser:"",searchTerm:"",searchMessageAndUser:[]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.state.user&&this.props.channel&&this.addListeners(this.props.channel.id)}},{key:"render",value:function(){var e=this.state,t=e.messageRef,a=e.user,n=e.messages,s=e.searchMessageAndUser,o=e.newuniqueUser,l=e.searchTerm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{channelName:this.displayChannelName(this.props.channel),newuniqueUser:o,onChangeHandle:this.onChangeHandle}),r.a.createElement(k.a,null,r.a.createElement(V.a.Group,{className:"messages"},l?this.displayMessages(s):this.displayMessages(n))),r.a.createElement(Q,{messageRef:t,user:a,channel:this.props.channel}))}}]),t}(n.Component),se=a(457),oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).DropdownOptions=function(){return[{key:"user",text:r.a.createElement("span",null,"Sign in as",r.a.createElement("strong",null,a.props.user.userReducer.user.displayName)),disabled:!0},{key:"avatar",text:r.a.createElement("span",null,"Change Avatar")},{key:"signout",text:r.a.createElement("span",{onClick:a.props.SignOut},"Sign out")}]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.user.userReducer;return r.a.createElement(C.a,{style:{backgroundColor:"#4c3c4c"}},r.a.createElement(C.a.Column,null,r.a.createElement(C.a.Row,{style:{padding:"1.2em"}},r.a.createElement(j.a,{as:"h2",inverted:!0,floated:"left"},r.a.createElement(S.a,{name:"code"}),r.a.createElement(j.a.Content,null,"EwigChat"))),r.a.createElement(j.a,{as:"h4",inverted:!0,style:{padding:"0.25em"}},r.a.createElement(se.a,{trigger:r.a.createElement("span",null,r.a.createElement(te.a,{src:e.user.photoURL,avatar:!0,spaced:"right"}),e.user.displayName),options:this.DropdownOptions()}))))}}]),t}(r.a.Component),le=r.a.memo(oe),ce=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).removeListner=function(){a.state.channelRef.off()},a.closeModal=function(){return a.setState({modal:!1})},a.openModal=function(){return a.setState({modal:!0})},a.onChangeHandle=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.isFormValid(a.state)&&a.addChannel()},a.addListeners=function(){var e=[];a.state.channelRef.on("child_added",function(t){e.push(t.val()),a.setState({Channels:e},a.setFristChannel())},function(e){console.log(e)})},a.isFormValid=function(e){var t=e.channelName,a=e.channelDetails;return t&&a},a.addChannel=function(){var e=a.state,t=e.channelName,n=e.channelRef,r=e.channelDetails,s=e.user,o=n.push().key,l={id:o,name:t,details:r,createdBy:{name:s.displayName,avatar:s.photoURL}};n.child(o).update(l).then(function(){a.setState({channelDetails:"",channelName:""}),a.closeModal(),console.log("channel added")}).catch(function(e){return console.error(e)})},a.setFristChannel=function(){var e=a.state.Channels[0];a.state.Channels.length>0&&(a.props.setCurrentChannel(e),a.setActiveChannel(e))},a.setActiveChannel=function(e){a.setState({activeChannel:e.id})},a.displayChannels=function(e){var t=e.Channels;return t.length>0&&t.map(function(e){return r.a.createElement(_.a.Item,{key:e.id,onClick:function(){return a.changeChannel(e)},name:e.name,style:{opacity:.7},active:a.state.activeChannel===e.id},"#",e.name)})},a.changeChannel=function(e){a.setActiveChannel(e),a.props.setCurrentChannel(e)},a.state={user:a.props.user.userReducer.user,Channels:[],channelName:"",channelDetails:"",modal:!1,activeChannel:"",firstLoad:!0,channelRef:N.database().ref("channels")},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){this.removeListner()}},{key:"componentDidMount",value:function(){this.addListeners()}},{key:"render",value:function(){var e=this.state,t=e.Channels,a=e.modal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a.Menu,null,r.a.createElement(_.a.Item,{style:{cursor:"pointer"}},r.a.createElement("span",null,r.a.createElement(S.a,{name:"exchange"}),"Channels"),"(",t.length,") ",r.a.createElement(S.a,{name:"add",onClick:this.openModal})),this.displayChannels(this.state)),r.a.createElement(Y.a,{basic:!0,open:a,onClose:this.closeModal},r.a.createElement(Y.a.Header,null,"Add Channels"),r.a.createElement(Y.a.Content,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Field,null,r.a.createElement(B.a,{fluid:!0,onChange:this.onChangeHandle,label:"Name of Channel",name:"channelName"})),r.a.createElement(w.a.Field,null,r.a.createElement(B.a,{fluid:!0,onChange:this.onChangeHandle,label:"About the Channel",name:"channelDetails"})))),r.a.createElement(Y.a.Actions,null,r.a.createElement(U.a,{color:"green",inverted:!0,style:{cursor:"pointer"},onClick:this.onSubmit},r.a.createElement(S.a,{name:"checkmark"}),"Add"),r.a.createElement(U.a,{color:"green",inverted:!0,onClick:this.closeModal,style:{cursor:"pointer"}},"Close",r.a.createElement(S.a,{name:"remove"})))))}}]),t}(n.Component),ie=Object(i.b)(null,{setCurrentChannel:function(e){return{type:"CHANGE_CHANNEL_TYPE",payload:{currentChannel:e}}}})(ce),ue=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],user:a.props.user.userReducer.user,userRef:N.database().ref("user"),connectRef:N.database().ref(".info/connected"),prefrenceRef:N.database().ref("prefrence")},a.addListeners=function(e){var t=[];a.state.userRef.on("child_added",function(n){if(e!==n.key){var r=n.val();r.uid=n.key,r.status="offline",t.push(r),a.setState({users:t})}}),a.state.connectRef.on("value",function(t){if(!0===t.key){var n=a.state.connectRef.child(e);n.set(!0),n.onDisconnect().remove(function(e){null!==e&&console.log(e)})}}),a.state.prefrenceRef.on("child_added",function(t){e!==t.key&&a.addStatusToUser(t.key)}),a.state.prefrenceRef.on("child_removed",function(t){e!==t.key&&a.addStatusToUser(t.key,!1)})},a.addStatusToUser=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.state.user.reduce(function(a,n){return n.uid===e&&(n.status="".concat(t?"online":"offline")),a.concat(n)},[]);a.setState({users:n})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this.state.users;return console.log(this.state.users),r.a.createElement(_.a.Menu,{className:"menu"},r.a.createElement(_.a.Item,null,r.a.createElement("span",null,r.a.createElement(S.a,{name:"mail"}),"DirectMessage"),"  ","(",e.length,")"),e.map(function(e){return r.a.createElement(_.a.Item,{key:e.uid,onClick:function(){return console.log(e)}},r.a.createElement("span",null,r.a.createElement(S.a,{name:"circle",size:"small",color:"online"===e.status?"green":"red"}),"@",e.name))}))}}]),t}(n.Component),de=r.a.memo(function(e){return r.a.createElement(_.a,{size:"large",inverted:!0,fixed:"left",vertical:!0,style:{background:"#4c3c4c",fontSize:"1.2rem"}},r.a.createElement(le,e),r.a.createElement(ie,e),r.a.createElement(ue,e))}),me=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{columns:"equal",className:"app"},r.a.createElement(z,null),r.a.createElement(de,this.props),r.a.createElement(C.a.Column,{style:{marginLeft:320}},r.a.createElement(re,this.props)),r.a.createElement(C.a.Column,{width:4},r.a.createElement(I,null)))}}]),t}(n.Component),he=(a(438),a(462)),pe=a(453),fe=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(he.a,{active:!0},r.a.createElement(pe.a,{size:"huge",content:"Preparing Chat..."}))}}]),t}(n.Component),ge=r.a.memo(fe),Ee=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.auth().onAuthStateChanged(function(t){t?(e.props.setUser(t),e.props.history.push("/")):(e.props.history.push("/login"),e.props.userSignOut())})}},{key:"render",value:function(){var e=this;return this.props.isLoading?r.a.createElement(ge,null):r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/register",component:A}),r.a.createElement(E.a,{path:"/login",component:L}),r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement(me,e.props)}}))}}]),t}(r.a.Component),be=Object(E.f)(Object(i.b)(function(e){return{user:e,channel:e.channel.currentChannel,isLoading:e.userReducer.loading}},{setUser:function(e){return{type:"SET_USER",payload:{user:e}}},userSignOut:function(){return{type:"USER_SIGN_OUT"}},SignOut:function(){return N.auth().signOut(),{type:"USER_LOADING"}}})(Ee));function ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ve(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ve(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Oe={loading:!0,user:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return ye({},e,{user:t.payload.user,loading:!1});case"USER_SIGN_OUT":return{loading:!1};case"USER_LOADING":return{loading:!0};default:return e}};function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var we={currentChannel:null},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CHANNEL_TYPE":return Se({},e,{currentChannel:t.payload.currentChannel});default:return e}},Ue=Object(c.combineReducers)({channel:ke,userReducer:Ce}),Pe=(a(439),Object(c.createStore)(Ue,Object(c.compose)(Object(c.applyMiddleware)(u.a),Object(d.composeWithDevTools)())));o.a.render(r.a.createElement(i.a,{store:Pe},r.a.createElement(l.a,null,r.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[264,1,2]]]);
//# sourceMappingURL=main.370d4107.chunk.js.map