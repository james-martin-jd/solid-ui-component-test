/*! Built with http://stenciljs.com */
var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,s){function i(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,a)}u((n=n.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};postcomponent.loadBundle("gw2rg5ij",["exports"],function(r){var n=window.postcomponent.h,o=$rdf.graph(),s=new $rdf.Fetcher(o),i=$rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),a=$rdf.Namespace("http://purl.org/dc/terms/"),u=$rdf.Namespace("http://www.w3.org/2006/vcard/ns#"),c=$rdf.Namespace("http://rdfs.org/sioc/ns#"),l=function(){function r(){var r=this;this.updateManager=new $rdf.UpdateManager(o),this.profile={},this.createPost=function(n){var o=r.webid.substring(0,r.webid.length-15)+"public",s=o+"/posts";fetch(s,{method:"GET"}).then(function(n){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return 200!==n.status?[3,2]:[4,this.sendPostData(s,this.webid)];case 1:return t.sent(),[3,5];case 2:return 404!==n.status?[3,4]:[4,this.createFolder(o)];case 3:return t.sent(),this.sendPostData(s,this.webid),[3,5];case 4:console.log(n.statusText),t.label=5;case 5:return[2]}})})})},this.getProfile=function(n){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return[4,s.load(n)];case 1:return[2,t.sent()]}})})},this.sendPostData=function(n,o){return t(r,void 0,void 0,function(){var t,r,o,s,l,f,d;return e(this,function(e){return t=[],r=Date.now().toString(),o=n+"/"+r,s=$rdf.sym(o+"#author"),l=$rdf.sym(o+"#Post"),f=$rdf.sym(n),d=$rdf.sym(o),t.push($rdf.st(l,i("type"),c("Post"),f)),t.push($rdf.st(l,c("content"),$rdf.lit(this.postText.value.trim()),f)),t.push($rdf.st(l,c("has_creator"),s,f)),t.push($rdf.st(l,a("created"),$rdf.lit(new Date),f)),console.log(this.profile),this.profile&&(console.log("New author info"),t.push($rdf.st(s,u("fn"),$rdf.lit(this.profile.name))),t.push($rdf.st(s,c("avatar"),$rdf.sym(this.profile.image))),t.push($rdf.st(s,c("account_of"),$rdf.sym(this.webid)))),this.updateManager.put(d,t,"text/turtle",function(t,e,r){e?console.log("Success!"):(console.log("Error!"),console.log(r))}),[2]})})},this.createFolder=function(t){s.createContainer($rdf.sym(t),"posts")}}return r.prototype.componentDidLoad=function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return[4,this.getProfile(this.webid)];case 1:return e.sent(),this.profile.name=o.any($rdf.sym(this.webid),u("fn")),t=window.location.protocol+"//"+window.location.host+"/assets/images/profile.png",this.profile.image=o.any($rdf.sym(this.webid),u("hasPhoto"))||$rdf.sym(t),[2]}})})},r.prototype.render=function(){var t=this;return n("div",{class:"new-post"},n("h2",null,"Create New Post"),n("form",{onSubmit:this.createPost,class:"new-post-form"},n("textarea",{class:"new-post-form-input",ref:function(e){return t.postText=e}})),n("div",null,n("button",{class:"post-button",type:"submit",onClick:this.createPost.bind(this)},"Create Post")))},Object.defineProperty(r,"is",{get:function(){return"post-create"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"properties",{get:function(){return{webid:{type:String,attr:"webid"}}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"style",{get:function(){return".profile-image{width:50px}.new-post{max-width:200px;position:absolute;margin-left:10px}.new-post h2{color:#555;margin-bottom:6px}.new-post-form-input{width:200px;height:50px;border-radius:8px;margin-top:10px;border-color:#ccc}.post-list{margin:10px;color:#555;font-family:sans-serif}.post-list h3{text-decoration:underline;text-transform:uppercase;font-size:18px}.post-list-item{width:400px;height:100px;overflow:auto;border:1px solid #ccc;padding:4px;margin-bottom:12px}.post-list-item-name{font-size:16px;margin:8px 4px}.post-list-item-image{float:left;margin-right:14px;margin-left:10px}.post-list-item-text{font-size:12px;color:#333}.post-button{background-color:#7c4dff;color:#fff;padding:6px 24px;cursor:pointer;border-radius:14px;margin-top:4px}"},enumerable:!0,configurable:!0}),r}();r.PostCreate=l,Object.defineProperty(r,"__esModule",{value:!0})});