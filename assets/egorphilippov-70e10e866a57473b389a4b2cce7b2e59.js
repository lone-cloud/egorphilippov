"use strict"
define("egorphilippov/app",["exports","egorphilippov/resolver","ember-load-initializers","egorphilippov/config/environment"],function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0})
var r=void 0
Ember.MODEL_FACTORY_INJECTIONS=!0,r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default}),(0,n.default)(r,o.default.modulePrefix),e.default=r}),define("egorphilippov/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/header-navbar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({actions:{emailMe:function(){window.open("mailto:philippovegor@gmail.com?subject=Hello Egor!","_blank")}}})}),define("egorphilippov/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("egorphilippov/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/site-footer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({tagName:"footer",elementId:"footer"})}),define("egorphilippov/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("egorphilippov/helpers/app-version",["exports","egorphilippov/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?r.match(n.versionRegExp)[0]:t.hideVersion?r.match(n.shaRegExp)[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o
var r=t.default.APP.version
e.default=Ember.Helper.helper(o)}),define("egorphilippov/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("egorphilippov/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("egorphilippov/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("egorphilippov/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("egorphilippov/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("egorphilippov/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("egorphilippov/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("egorphilippov/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("egorphilippov/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("egorphilippov/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("egorphilippov/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("egorphilippov/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})}),define("egorphilippov/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})
define("egorphilippov/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","egorphilippov/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=n.default.APP,r=o.name,i=o.version
e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("egorphilippov/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("egorphilippov/initializers/export-application-global",["exports","egorphilippov/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,r=t.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("egorphilippov/initializers/liquid-fire",["exports","liquid-fire/ember-internals","liquid-fire/velocity-ext"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("egorphilippov/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/router",["exports","egorphilippov/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("projects"),this.route("resume")}),e.default=n}),define("egorphilippov/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({afterModel:function(){document.title="Egor Philippov"}})}),define("egorphilippov/routes/projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Projects"}})}),define("egorphilippov/routes/resume",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({afterModel:function(){document.title="Resumé"}})}),define("egorphilippov/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"xVbkzIpZ",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"div"],[9,"class","row"],[7],[0,"\\n    "],[6,"div"],[9,"class","col-xs-10 col-xs-offset-1 initial-position"],[7],[0,"\\n      "],[1,[18,"header-navbar"],false],[0,"\\n\\n      "],[1,[18,"liquid-outlet"],false],[0,"\\n\\n      "],[1,[18,"site-footer"],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"div"],[9,"id","border-t"],[9,"class","site-border"],[7],[8],[0,"\\n"],[6,"div"],[9,"id","border-r"],[9,"class","site-border"],[7],[8],[0,"\\n"],[6,"div"],[9,"id","border-b"],[9,"class","site-border"],[7],[8],[0,"\\n"],[6,"div"],[9,"id","border-l"],[9,"class","site-border"],[7],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/application.hbs"}})}),define("egorphilippov/templates/components/header-navbar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"0Ol1tcnQ",block:'{"symbols":[],"statements":[[6,"nav"],[9,"class","navbar navbar-default navbar-static-top"],[7],[0,"\\n  "],[6,"div"],[9,"class","navbar-header"],[7],[0,"\\n      "],[6,"button"],[9,"type","button"],[9,"class","navbar-toggle collapsed"],[9,"data-toggle","collapse"],[9,"data-target","#navbar"],[9,"aria-expanded","false"],[9,"aria-controls","navbar"],[7],[0,"\\n          "],[6,"span"],[9,"class","sr-only"],[7],[0,"Toggle navigation"],[8],[0,"\\n          "],[6,"span"],[9,"class","icon-bar"],[7],[8],[0,"\\n          "],[6,"span"],[9,"class","icon-bar"],[7],[8],[0,"\\n          "],[6,"span"],[9,"class","icon-bar"],[7],[8],[0,"\\n      "],[8],[0,"\\n      "],[4,"link-to",["index"],null,{"statements":[[6,"img"],[9,"src","me-4d90fbcb6b4a8d0632d52ee6576047d8.jpg"],[9,"class","navbar-image"],[7],[8]],"parameters":[]},null],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"id","navbar"],[9,"class","collapse navbar-collapse"],[7],[0,"\\n      "],[6,"ul"],[9,"class","nav navbar-nav navbar-right"],[7],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["index"],null,{"statements":[[0,"Home"]],"parameters":[]},null],[8],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["projects"],null,{"statements":[[0,"Projects"]],"parameters":[]},null],[8],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["resume"],null,{"statements":[[0,"Resumé"]],"parameters":[]},null],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#"],[9,"title","philippovegor@gmail.com"],[3,"action",[[19,0,[]],"emailMe"]],[7],[0,"Contact"],[8],[8],[0,"\\n      "],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/header-navbar.hbs"}})}),define("egorphilippov/templates/components/site-footer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"/wl+H7g3",block:'{"symbols":[],"statements":[[6,"ul"],[9,"class","list-unstyled list-inline text-right"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n        "],[6,"p"],[9,"id","findMeOnLabel"],[7],[0,"- Find me on"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n        "],[6,"a"],[9,"href","https://www.instagram.com/lifeofegor/"],[9,"target","_blank"],[9,"title","Instagram"],[7],[6,"i"],[9,"class","fa fa-2x fa-instagram"],[9,"aria-hidden","true"],[7],[8],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n        "],[6,"a"],[9,"href","https://github.com/hoboman313"],[9,"target","_blank"],[9,"title","GitHub"],[7],[6,"i"],[9,"class","fa fa-2x fa-github"],[9,"aria-hidden","true"],[7],[8],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n        "],[6,"a"],[9,"href","https://ca.linkedin.com/in/egor-philippov-1482207b"],[9,"target","_blank"],[9,"title","Linkedin"],[7],[6,"i"],[9,"class","fa fa-2x fa-linkedin-workaround"],[9,"aria-hidden","true"],[7],[8],[8],[0,"\\n    "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/site-footer.hbs"}})}),define("egorphilippov/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"flFSFEIG",block:'{"symbols":[],"statements":[[6,"p"],[9,"id","hello"],[7],[0,"\\n    - Hello\\n"],[8],[0,"\\n\\n"],[6,"h3"],[7],[0,"\\n    Is it me you\'re looking for? My name is\\n    "],[6,"span"],[9,"class","white"],[7],[0,"Egor Philippov"],[8],[0," and I\'m a passionate\\n    "],[6,"span"],[9,"class","white"],[7],[0,"Full Stack Software Engineer"],[8],[0," that specializes in\\n    "],[6,"span"],[9,"class","white"],[7],[0,"front end web development"],[8],[0,". You may have heard of me from\\n    "],[6,"a"],[9,"href","http://www.huegasm.com"],[9,"class","white"],[9,"target","_blank"],[7],[0,"Huegasm"],[8],[0," or\\n    "],[6,"a"],[9,"href","https://www.tomati.io"],[9,"class","white"],[9,"target","_blank"],[7],[0,"Tomati"],[8],[0," . I currently work remotely from the beautiful\\n    "],[6,"span"],[9,"class","white"],[7],[0,"Vancouver"],[8],[0,", Canada.\\n"],[8],[0,"\\n\\n"],[6,"h3"],[7],[0,"\\n    I am always looking for exciting new opportunities. Currently I\'m only consider contract work, preferably done remotely.\\n    Feel free to contact me through the link in the top right corner.\\n"],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/index.hbs"}})}),define("egorphilippov/templates/projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"p5ihcm39",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[9,"id","projects-page"],[7],[0,"\\n    "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n        "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://www.tomati.io/"],[9,"target","_blank"],[7],[0,"Tomati"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://www.tomati.io/"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"Tomati"],[8],[0,"\\n            A web app for restaurant review aggregation with an emphasis on publicly available health inspection reports.\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-ember"],[9,"title","Ember"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","http://aws.amazon.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-aws"],[9,"title","AWS"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://github.com/hoboman313/TomatiMobile"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-react"],[9,"title","React Native Client"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","http://getbootstrap.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-nodejs"],[9,"title","Node.js"],[7],[8],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n        "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://www.huegasm.com/"],[9,"target","_blank"],[9,"class","underline"],[7],[0,"Huegasm"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://www.huegasm.com/"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"Huegasm"],[8],[0,"\\n            A web, Chrome and Android application for managing and synchronizing your music with your Philips Hue lights. \\n            - "],[6,"a"],[9,"href","https://github.com/hoboman313/huegasm"],[9,"target","_blank"],[7],[0,"Source"],[8],[0,"\\n            "],[6,"br"],[7],[8],[0,"\\n            "],[6,"a"],[9,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[9,"target","_blank"],[9,"rel","noopener noreferrer"],[7],[0,"\\n                Android app\\n            "],[8],[0,"\\n            "],[6,"br"],[7],[8],[0,"\\n            "],[6,"a"],[9,"href","https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"],[9,"target","_blank"],[9,"rel","noopener noreferrer"],[7],[0,"\\n                Chrome extension\\n            "],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-ember"],[9,"title","Ember"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","http://getbootstrap.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-bootstrap"],[9,"title","Bootstrap"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-android"],[9,"title","Huegasm on the PlayStore"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://github.com/hoboman313/huegasm"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-github_badge"],[9,"title","Source on Github"],[7],[8],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n        "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n            "],[6,"a"],[9,"href","https://hoboman313.github.io/snakey"],[9,"target","_blank"],[7],[0,"Snakey"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n            "],[6,"a"],[9,"href","https://hoboman313.github.io/snakey"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"Snakey"],[8],[0,"\\n            A pure HTML/Javascript recreation of the old school Snake game. - "],[6,"a"],[9,"href","https://github.com/hoboman313/snakey"],[9,"target","_blank"],[7],[0,"Source"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-ember"],[9,"title","Ember"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://github.com/hoboman313/snakey"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-github_badge"],[9,"title","Source on Github"],[7],[8],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","overlay"],[7],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n        "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n            "],[6,"a"],[9,"href","https://tictacweep.herokuapp.com"],[9,"target","_blank"],[7],[0,"Tic Tac Weep"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n            "],[6,"a"],[9,"href","https://tictacweep.herokuapp.com"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"Tic Tac Weep"],[8],[0,"\\n            A game of tic tac toe where the user is matched a CPU player and will never win. - "],[6,"a"],[9,"href","https://github.com/hoboman313/tictacweep"],[9,"target","_blank"],[7],[0,"Source"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-ember"],[9,"title","Ember"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://nodejs.org/en/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-nodejs"],[9,"title","Node.js"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://github.com/hoboman313/tictacweep"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-github_badge"],[9,"title","Source on Github"],[7],[8],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n        "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://chat-random.herokuapp.com/"],[9,"target","_blank"],[7],[0,"Chat Random"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://chat-random.herokuapp.com/"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"Chat Random"],[8],[0,"\\n            A simple, WebSocket based chat client. - "],[6,"a"],[9,"href","https://github.com/hoboman313/chat-random"],[9,"target","_blank"],[7],[0,"Source"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n            "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-ember"],[9,"title","Ember"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://nodejs.org/en/"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-nodejs"],[9,"title","Node.js"],[7],[8],[8],[0,"\\n            "],[6,"a"],[9,"href","https://github.com/hoboman313/chat-random"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-github_badge"],[9,"title","Source on Github"],[7],[8],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","row vcenter"],[7],[0,"\\n    "],[6,"div"],[9,"class","col-xs-2 hidden-xs"],[7],[0,"\\n      "],[6,"a"],[9,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[9,"target","_blank"],[7],[0,"AMXX CS 1.6 Modding"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","col-sm-4 col-xs-6"],[7],[0,"\\n      "],[6,"a"],[9,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[9,"class","visible-xs project-title"],[9,"target","_blank"],[7],[0,"AMXX CS 1.6 Modding"],[8],[0,"\\n      Wrote a number of plugins for Counter Strike 1.6.\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","col-sm-6 col-xs-4"],[7],[0,"\\n      "],[6,"a"],[9,"href","http://www.compuphase.com/pawn/pawn.htm"],[9,"target","_blank"],[7],[6,"span"],[9,"class","devicons devicons-code"],[9,"title","PAWN"],[7],[8],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/projects.hbs"}})}),define("egorphilippov/templates/resume",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"F8TMgAPv",block:'{"symbols":[],"statements":[[6,"iframe"],[9,"width","100%"],[9,"id","resume-frame"],[9,"src","/resume.pdf"],[7],[8]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/resume.hbs"}})}),define("egorphilippov/transitions",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.transition(this.fromRoute("index"),this.toRoute(["resume","projects"]),this.use("toRight"),this.reverse("toLeft")),this.transition(this.fromRoute("projects"),this.toRoute("resume"),this.use("toRight"),this.reverse("toLeft"))}}),define("egorphilippov/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("egorphilippov/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/config/environment",[],function(){try{var e="egorphilippov/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("egorphilippov/app").default.create({name:"egorphilippov",version:"0.0.0+48ffb7b7"})
