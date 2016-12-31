"use strict";define("egorphilippov/app",["exports","ember","egorphilippov/resolver","ember-load-initializers","egorphilippov/config/environment"],function(e,t,n,l,a){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,l.default)(r,a.default.modulePrefix),e.default=r}),define("egorphilippov/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/header-navbar",["exports","ember"],function(e,t){var n=t.default.Component;e.default=n.extend({actions:{emailMe:function(){window.location.href="mailto:philippovegor@gmail.com?subject=Hello Egor!"}}})}),define("egorphilippov/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("egorphilippov/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/site-footer",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"footer",elementId:"footer"})}),define("egorphilippov/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=l}),define("egorphilippov/helpers/app-version",["exports","ember","egorphilippov/config/environment"],function(e,t,n){function l(){return a}e.appVersion=l;var a=n.default.APP.version;e.default=t.default.Helper.helper(l)}),define("egorphilippov/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=l}),define("egorphilippov/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=l}),define("egorphilippov/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=l}),define("egorphilippov/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=l}),define("egorphilippov/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("egorphilippov/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("egorphilippov/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=l}),define("egorphilippov/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=l}),define("egorphilippov/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=l}),define("egorphilippov/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=l}),define("egorphilippov/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=l}),define("egorphilippov/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=l}),define("egorphilippov/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","egorphilippov/config/environment"],function(e,t,n){var l=n.default.APP,a=l.name,r=l.version;e.default={name:"App Version",initialize:(0,t.default)(a,r)}}),define("egorphilippov/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("egorphilippov/initializers/export-application-global",["exports","ember","egorphilippov/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),l[a]||(l[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[a]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("egorphilippov/initializers/liquid-fire",["exports","liquid-fire/ember-internals"],function(e,t){(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("egorphilippov/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,l,a,r,o,i,s,p,c,u,m){function f(){t.default.Helper||((0,n.registerHelper)("and",l.andHelper),(0,n.registerHelper)("or",a.orHelper),(0,n.registerHelper)("eq",r.equalHelper),(0,n.registerHelper)("not",o.notHelper),(0,n.registerHelper)("is-array",i.isArrayHelper),(0,n.registerHelper)("not-eq",s.notEqualHelper),(0,n.registerHelper)("gt",p.gtHelper),(0,n.registerHelper)("gte",c.gteHelper),(0,n.registerHelper)("lt",u.ltHelper),(0,n.registerHelper)("lte",m.lteHelper))}e.initialize=f,e.default={name:"truth-helpers",initialize:f}}),define("egorphilippov/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("egorphilippov/router",["exports","ember","egorphilippov/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){this.route("projects"),this.route("resume")}),e.default=l}),define("egorphilippov/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({afterModel:function(){document.title="Egor Philippov"}})}),define("egorphilippov/routes/projects",["exports","ember"],function(e,t){e.default=t.default.Route.extend({afterModel:function(){document.title="Projects"}})}),define("egorphilippov/routes/resume",["exports","ember"],function(e,t){e.default=t.default.Route.extend({afterModel:function(){document.title="Resumé"}})}),define("egorphilippov/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){e.default=t.default}),define("egorphilippov/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"X2T8WOzW",block:'{"statements":[["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","col-xs-10 col-xs-offset-1 initial-position"],["flush-element"],["text","\\n      "],["append",["unknown",["header-navbar"]],false],["text","\\n\\n      "],["append",["unknown",["liquid-outlet"]],false],["text","\\n\\n      "],["append",["unknown",["site-footer"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","id","border-t"],["static-attr","class","site-border"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","id","border-r"],["static-attr","class","site-border"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","id","border-b"],["static-attr","class","site-border"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","id","border-l"],["static-attr","class","site-border"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/application.hbs"}})}),define("egorphilippov/templates/components/header-navbar",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"iSm0kZ7q",block:'{"statements":[["open-element","nav",[]],["static-attr","class","navbar navbar-default navbar-static-top"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","navbar-header"],["flush-element"],["text","\\n      "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","navbar-toggle collapsed"],["static-attr","data-toggle","collapse"],["static-attr","data-target","#navbar"],["static-attr","aria-expanded","false"],["static-attr","aria-controls","navbar"],["flush-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","sr-only"],["flush-element"],["text","Toggle navigation"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["block",["link-to"],["index"],null,3],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","id","navbar"],["static-attr","class","collapse navbar-collapse"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav navbar-right"],["flush-element"],["text","\\n          "],["open-element","li",[]],["flush-element"],["block",["link-to"],["index"],null,2],["close-element"],["text","\\n          "],["open-element","li",[]],["flush-element"],["block",["link-to"],["projects"],null,1],["close-element"],["text","\\n          "],["open-element","li",[]],["flush-element"],["block",["link-to"],["resume"],null,0],["close-element"],["text","\\n          "],["open-element","li",[]],["flush-element"],["open-element","a",[]],["static-attr","href","#"],["static-attr","title","philippovegor@gmail.com"],["modifier",["action"],[["get",[null]],"emailMe"]],["flush-element"],["text","Contact"],["close-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Resumé"]],"locals":[]},{"statements":[["text","Projects"]],"locals":[]},{"statements":[["text","Home"]],"locals":[]},{"statements":[["open-element","img",[]],["static-attr","src","me-4d90fbcb6b4a8d0632d52ee6576047d8.jpg"],["static-attr","class","navbar-image"],["flush-element"],["close-element"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/components/header-navbar.hbs"}})}),define("egorphilippov/templates/components/site-footer",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"WOayz7E9",block:'{"statements":[["open-element","ul",[]],["static-attr","class","list-unstyled list-inline text-right"],["flush-element"],["text","\\n    "],["open-element","li",[]],["flush-element"],["text","\\n        "],["open-element","p",[]],["static-attr","id","findMeOnLabel"],["flush-element"],["text","- Find me on"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","li",[]],["flush-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","https://www.instagram.com/lifeofegor/"],["static-attr","target","_blank"],["static-attr","title","Instagram"],["flush-element"],["append",["helper",["fa-icon"],null,[["icon","size"],["fa-instagram",2]]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","li",[]],["flush-element"],["text","\\n        "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313"],["static-attr","target","_blank"],["static-attr","title","GitHub"],["flush-element"],["append",["helper",["fa-icon"],null,[["icon","size"],["fa-github",2]]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","li",[]],["flush-element"],["text","\\n        "],["open-element","a",[]],["static-attr","href","https://ca.linkedin.com/in/egor-philippov-1482207b"],["static-attr","target","_blank"],["static-attr","title","Linkedin"],["flush-element"],["append",["helper",["fa-icon"],null,[["icon","size"],["fa-linkedin-workaround",2]]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/components/site-footer.hbs"}})}),define("egorphilippov/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wbKvCHuc",block:'{"statements":[["open-element","p",[]],["static-attr","id","hello"],["flush-element"],["text","- Hello"],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","Is it me you\'re looking for? My name is "],["open-element","span",[]],["static-attr","class","white"],["flush-element"],["text","Egor Philippov"],["close-element"],["text"," and I\'m a passionate "],["open-element","span",[]],["static-attr","class","white"],["flush-element"],["text","Full Stack Software Engineer"],["close-element"],["text"," that specializes in "],["open-element","span",[]],["static-attr","class","white"],["flush-element"],["text","front end web development"],["close-element"],["text",". You may have heard of me from "],["open-element","a",[]],["static-attr","href","http://www.huegasm.com"],["static-attr","class","white"],["static-attr","target","_blank"],["flush-element"],["text","Huegasm"],["close-element"],["text"," or "],["open-element","a",[]],["static-attr","href","https://www.tomati.io"],["static-attr","class","white"],["static-attr","target","_blank"],["flush-element"],["text","Tomati"],["close-element"],["text"," . I currently work full time and reside in "],["open-element","span",[]],["static-attr","class","white"],["flush-element"],["text","Vancouver"],["close-element"],["text",", Canada."],["close-element"],["text","\\n\\n"],["open-element","h3",[]],["flush-element"],["text","I am always looking for exciting new opportunities. Feel free to contact me through the link in the top right corner."],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/index.hbs"}})}),define("egorphilippov/templates/projects",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"VQxUuH4i",block:'{"statements":[["open-element","div",[]],["static-attr","class","container"],["static-attr","id","projects-page"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://www.tomati.io/"],["static-attr","target","_blank"],["flush-element"],["text","Tomati"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://www.tomati.io/"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","Tomati"],["close-element"],["text","\\n            An upcoming web app for restaurant review aggregation with an emphasis on publicly available health inspection reports.\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-ember"],["static-attr","title","Ember"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://aws.amazon.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-aws"],["static-attr","title","AWS"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://getbootstrap.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-nodejs"],["static-attr","title","Node.js"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://www.huegasm.com/"],["static-attr","target","_blank"],["flush-element"],["text","Huegasm"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://www.huegasm.com/"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","Huegasm"],["close-element"],["text","\\n            A web app for managing and synchronizing your music with your Philips Hue lights. - "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/huegasm"],["static-attr","target","_blank"],["flush-element"],["text","Source"],["close-element"],["text","\\n            "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n            Android version up on the Play Store "],["open-element","a",[]],["static-attr","href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],["static-attr","target","_blank"],["static-attr","rel","noopener noreferrer"],["flush-element"],["text","Here"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-ember"],["static-attr","title","Ember"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://getbootstrap.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-bootstrap"],["static-attr","title","Bootstrap"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-html5_multimedia"],["static-attr","title","HTML 5 Multimedia"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/huegasm"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-github_badge"],["static-attr","title","Source on Github"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://hoboman313.github.io/snakey"],["static-attr","target","_blank"],["flush-element"],["text","Snakey"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://hoboman313.github.io/snakey"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","Snakey"],["close-element"],["text","\\n            A pure HTML/Javascript recreation of the old school Snake game. - "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/snakey"],["static-attr","target","_blank"],["flush-element"],["text","Source"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-ember"],["static-attr","title","Ember"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/snakey"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-github_badge"],["static-attr","title","Source on Github"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","overlay"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://tictacweep.herokuapp.com"],["static-attr","target","_blank"],["flush-element"],["text","Tic Tac Weep"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://tictacweep.herokuapp.com"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","Tic Tac Weep"],["close-element"],["text","\\n            A game of tic tac toe where the user is matched a CPU player and will never win. - "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/tictacweep"],["static-attr","target","_blank"],["flush-element"],["text","Source"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-ember"],["static-attr","title","Ember"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://nodejs.org/en/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-nodejs"],["static-attr","title","Node.js"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/tictacweep"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-github_badge"],["static-attr","title","Source on Github"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://chat-random.herokuapp.com/"],["static-attr","target","_blank"],["flush-element"],["text","Chat Random"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://chat-random.herokuapp.com/"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","Chat Random"],["close-element"],["text","\\n            A simple, WebSocket based chat client. - "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/chat-random"],["static-attr","target","_blank"],["flush-element"],["text","Source"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-ember"],["static-attr","title","Ember"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://nodejs.org/en/"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-nodejs"],["static-attr","title","Node.js"],["flush-element"],["close-element"],["close-element"],["text","\\n            "],["open-element","a",[]],["static-attr","href","https://github.com/hoboman313/chat-random"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-github_badge"],["static-attr","title","Source on Github"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","row vcenter"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","col-xs-2 hidden-xs"],["flush-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],["static-attr","target","_blank"],["flush-element"],["text","AMXX CS 1.6 Modding"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","col-sm-4 col-xs-6"],["flush-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],["static-attr","class","visible-xs project-title"],["static-attr","target","_blank"],["flush-element"],["text","AMXX CS 1.6 Modding"],["close-element"],["text","\\n      Wrote a number of semi-popular plugins for Counter Strike 1.6.\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","col-sm-6 col-xs-4"],["flush-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","http://www.compuphase.com/pawn/pawn.htm"],["static-attr","target","_blank"],["flush-element"],["open-element","span",[]],["static-attr","class","devicons devicons-code"],["static-attr","title","PAWN"],["flush-element"],["close-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
meta:{moduleName:"egorphilippov/templates/projects.hbs"}})}),define("egorphilippov/templates/resume",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"fu6AYIqs",block:'{"statements":[["open-element","iframe",[]],["static-attr","width","100%"],["static-attr","id","resume-frame"],["static-attr","src","/resume.pdf"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/resume.hbs"}})}),define("egorphilippov/transitions",["exports"],function(e){e.default=function(){this.transition(this.fromRoute("index"),this.toRoute(["resume","projects"]),this.use("toRight"),this.reverse("toLeft")),this.transition(this.fromRoute("projects"),this.toRoute("resume"),this.use("toRight"),this.reverse("toLeft"))}}),define("egorphilippov/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/config/environment",["ember"],function(e){var t="egorphilippov";try{var n=t+"/config/environment",l=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(l)),r={default:a};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("egorphilippov/app").default.create({name:"egorphilippov",version:"0.0.0+fc36e077"});