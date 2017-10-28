/* jQuery Cookie Plugin v1.4.1 https://github.com/carhartl/jquery-cookie Copyright 2006, 2014 Klaus Hartl Released under the MIT license*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if(s=e.extend({},u.defaults,s),"number"==typeof s.expires){var d=s.expires,f=s.expires=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var a=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;m>l;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){a=r(j,c);break}t||void 0===(j=r(j))||(a[g]=j)}return a};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});
/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
/* translate animation */
!function(t,e,r,s){function n(t){return parseFloat(t)}function i(e,r){var s=l.exec(t.trim(r));if(s[3]&&"px"!==s[3]){var n="paddingBottom",i=t.style(e,n);return t.style(e,n,r),r=a(e,n),t.style(e,n,i),r}return parseFloat(r)}function a(e,r){if(null!=e[r]&&(!e.style||null==e.style[r]))return e[r];var s=parseFloat(t.css(e,r));return s&&s>-1e4?s:0}var o=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,l=/^([\+\-]=)?([\d+.\-]+)(.*)$/,c=/%/,u=r.createElement("modernizr").style,f=function(){var t={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"};for(var e in t)if(void 0!==u[e])return t[e];return null}(),h=null!==f&&f+"transform",m=null!==f&&f+"transform-origin";t.support.csstransforms=function(){if(void 0!==e.Modernizr)return Modernizr.csstransforms;var t=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var r in t)if(u[t[r]]!==s)return!0}(),"-ms-"==f&&(h="msTransform",m="msTransformOrigin"),t.extend({transform:function(e){e.transform=this,this.$elem=t(e),this.applyingMatrix=!1,this.matrix=null,this.height=null,this.width=null,this.outerHeight=null,this.outerWidth=null,this.boxSizingValue=null,this.boxSizingProperty=null,this.attr=null,this.transformProperty=h,this.transformOriginProperty=m}}),t.extend(t.transform,{funcs:["matrix","origin","reflect","reflectX","reflectXY","reflectY","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","scale3d","skew","skewX","skewY","translate","translateX","translateY","translateZ","translate3d"]}),t.fn.transform=function(e,r){return this.each(function(){var s=this.transform||new t.transform(this);e&&s.exec(e,r)})},t.transform.prototype={exec:function(e,r){return r=t.extend(!0,{forceMatrix:!1,preserve:!1},r),this.attr=null,e=r.preserve?t.extend(!0,this.getAttrs(!0,!0),e):t.extend(!0,{},e),this.setAttrs(e),t.support.csstransforms&&!r.forceMatrix?this.execFuncs(e):!!(t.browser.msie||t.support.csstransforms&&r.forceMatrix)&&this.execMatrix(e)},execFuncs:function(e){var r=[];for(var s in e)"origin"==s?this[s].apply(this,t.isArray(e[s])?e[s]:[e[s]]):-1!==t.inArray(s,t.transform.funcs)&&r.push(this.createTransformFunc(s,e[s]));return this.$elem.css(h,r.join(" ")),!0},execMatrix:function(e){var r,s,a,l=this.$elem[0],u=this,m=/translate[X|Y|Z|3d]?/,p=[];for(var d in e){switch(t.type(e[d])){case"array":a=e[d];break;case"string":a=t.map(e[d].split(","),t.trim);break;default:a=[e[d]]}t.matrix[d]?(a=t.cssAngle[d]?t.map(a,t.angle.toDegree):t.cssNumber[d]?t.map(a,n):t.map(a,function(t,e){return c.test(t)?parseFloat(t)/100*u["safeOuter"+(e?"Height":"Width")]():i(l,t)}),s=t.matrix[d].apply(this,a),m.test(d)?p.push(s):r=r?r.x(s):s):"origin"==d&&this[d].apply(this,a)}r=r||t.matrix.identity(),t.each(p,function(t,e){r=r.x(e)});var x=parseFloat(r.e(1,1).toFixed(6)),g=parseFloat(r.e(2,1).toFixed(6)),v=parseFloat(r.e(1,2).toFixed(6)),w=parseFloat(r.e(2,2).toFixed(6)),y=3===r.rows?parseFloat(r.e(1,3).toFixed(6)):0,b=3===r.rows?parseFloat(r.e(2,3).toFixed(6)):0;if(t.support.csstransforms&&"-moz-"===f)this.$elem.css(h,"matrix("+x+", "+g+", "+v+", "+w+", "+y+"px, "+b+"px)");else if(t.support.csstransforms)this.$elem.css(h,"matrix("+x+", "+g+", "+v+", "+w+", "+y+", "+b+")");else if(t.browser.msie&&t.browser.version<9){var M=this.$elem[0].style,F="progid:DXImageTransform.Microsoft.Matrix(M11="+x+", M12="+v+", M21="+g+", M22="+w+", sizingMethod='auto expand', FilterType='nearest neighbor')",A=M.filter||t.curCSS(this.$elem[0],"filter")||"";M.filter=o.test(A)?A.replace(o,F):A?A+" "+F:F,this.applyingMatrix=!0,this.matrix=r,this.fixPosition(r,y,b),this.applyingMatrix=!1,this.matrix=null}return!0},origin:function(r,n){if(t.support.csstransforms)return void 0===n?this.$elem.css(m,r):this.$elem.css(m,r+" "+n),!0;switch(r){case"left":r="0";break;case"right":r="100%";break;case"center":case s:r="50%"}switch(n){case"top":n="0";break;case"bottom":n="100%";break;case"center":case s:n="50%"}return void 0!==e.Modernizr&&Modernizr.csstransforms3d?this.setAttr("origin",[c.test(r)?r:i(this.$elem[0],r)+"px",c.test(n)?n:i(this.$elem[0],n)+"px","0"]):this.setAttr("origin",[c.test(r)?r:i(this.$elem[0],r)+"px",c.test(n)?n:i(this.$elem[0],n)+"px"]),!0},createTransformFunc:function(e,r){if("reflect"===e.substr(0,7)){var s=r?t.matrix[e]():t.matrix.identity();return"matrix("+s.e(1,1)+", "+s.e(2,1)+", "+s.e(1,2)+", "+s.e(2,2)+", 0, 0)"}return"matrix"==e&&"-moz-"===f&&(r[4]=r[4]?r[4]+"px":0,r[5]=r[5]?r[5]+"px":0),e+"("+(t.isArray(r)?r.join(", "):r)+")"},fixPosition:function(e,r,s,n,i){var a=new t.matrix.calc(e,this.safeOuterHeight(),this.safeOuterWidth()),o=this.getAttr("origin"),l=a.originOffset(new t.matrix.V2(c.test(o[0])?parseFloat(o[0])/100*a.outerWidth:parseFloat(o[0]),c.test(o[1])?parseFloat(o[1])/100*a.outerHeight:parseFloat(o[1]))),u=a.sides(),f=this.$elem.css("position");"static"==f&&(f="relative");var h={top:0,left:0},m={position:f,top:l.top+s+u.top+h.top+"px",left:l.left+r+u.left+h.left+"px",zoom:1};this.$elem.css(m)}}}(jQuery,this,this.document),function(t,e,r,s){function n(){if(i)return i;var t={boxSizing:"box-sizing",MozBoxSizing:"-moz-box-sizing",WebkitBoxSizing:"-webkit-box-sizing",OBoxSizing:"-o-box-sizing"},e=r.body;for(var s in t)if(void 0!==e.style[s])return i=t[s];return null}t.extend(t.transform.prototype,{safeOuterHeight:function(){return this.safeOuterLength("height")},safeOuterWidth:function(){return this.safeOuterLength("width")},safeOuterLength:function(e){var r="outer"+("width"==e?"Width":"Height");if(!t.support.csstransforms&&t.browser.msie&&t.browser.version<9){if(e="width"==e?"width":"height",this.applyingMatrix&&!this[r]&&this.matrix){var s=new t.matrix.calc(this.matrix,1,1).offset(),i=this.$elem[r]()/s[e];return this[r]=i,i}if(this.applyingMatrix&&this[r])return this[r];var a={height:["top","bottom"],width:["left","right"]},o=this.$elem[0],l=parseFloat(t.curCSS(o,e,!0)),c=this.boxSizingProperty,u=this.boxSizingValue;return this.boxSizingProperty||(c=this.boxSizingProperty=n()||"box-sizing",u=this.boxSizingValue=this.$elem.css(c)||"content-box"),this[r]&&this[e]==l?this[r]:(this[e]=l,!c||"padding-box"!=u&&"content-box"!=u||(l+=parseFloat(t.curCSS(o,"padding-"+a[e][0],!0))||0+parseFloat(t.curCSS(o,"padding-"+a[e][1],!0))||0),c&&"content-box"==u&&(l+=parseFloat(t.curCSS(o,"border-"+a[e][0]+"-width",!0))||0+parseFloat(t.curCSS(o,"border-"+a[e][1]+"-width",!0))||0),this[r]=l,l)}return this.$elem[r]()}});var i=null}(jQuery,0,this.document),function(t,e,r,s){var n=/([\w\-]*?)\((.*?)\)/g,i="data-transform",a=/\s/,o=/,\s?/;t.extend(t.transform.prototype,{setAttrs:function(e){var r,s="";for(var n in e)r=e[n],t.isArray(r)&&(r=r.join(", ")),s+=" "+n+"("+r+")";this.attr=t.trim(s),this.$elem.attr(i,this.attr)},setAttr:function(e,r){t.isArray(r)&&(r=r.join(", "));var s=this.attr||this.$elem.attr(i);if(s&&-1!=s.indexOf(e)){var a,o=[];for(n.lastIndex=0;a=n.exec(s);)e==a[1]?o.push(e+"("+r+")"):o.push(a[0]);this.attr=o.join(" "),this.$elem.attr(i,this.attr)}else this.attr=t.trim(s+" "+e+"("+r+")"),this.$elem.attr(i,this.attr)},getAttrs:function(){var t=this.attr||this.$elem.attr(i);if(!t)return{};var e,r,s={};for(n.lastIndex=0;null!==(e=n.exec(t));)e&&(r=e[2].split(o),s[e[1]]=1==r.length?r[0]:r);return s},getAttr:function(e){var r=this.getAttrs();return void 0!==r[e]?r[e]:"origin"===e&&t.support.csstransforms?this.$elem.css(this.transformOriginProperty).split(a):"origin"===e?["50%","50%"]:t.cssDefault[e]||0}}),void 0===t.cssAngle&&(t.cssAngle={}),t.extend(t.cssAngle,{rotate:!0,rotateX:!0,rotateY:!0,rotateZ:!0,skew:!0,skewX:!0,skewY:!0}),void 0===t.cssDefault&&(t.cssDefault={}),t.extend(t.cssDefault,{scale:[1,1],scaleX:1,scaleY:1,scale3d:[1,1,1],matrix:[1,0,0,1,0,0],origin:["50%","50%"],reflect:[1,0,0,1,0,0],reflectX:[1,0,0,1,0,0],reflectXY:[1,0,0,1,0,0],reflectY:[1,0,0,1,0,0]}),void 0===t.cssMultipleValues&&(t.cssMultipleValues={}),t.extend(t.cssMultipleValues,{matrix:6,origin:{length:2,duplicate:!0},reflect:6,reflectX:6,reflectXY:6,reflectY:6,scale:{length:2,duplicate:!0},skew:2,translate:2,translate3d:3,scale3d:3}),t.extend(t.cssNumber,{matrix:!0,reflect:!0,reflectX:!0,reflectXY:!0,reflectY:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,scale3d:!0}),t.each(t.transform.funcs,function(e,r){t.cssHooks[r]={set:function(e,s){var n=e.transform||new t.transform(e),i={};i[r]=s,n.exec(i,{preserve:!0})},get:function(e,s){return(e.transform||new t.transform(e)).getAttr(r)}}}),t.each(["reflect","reflectX","reflectXY","reflectY"],function(e,r){t.cssHooks[r].get=function(e,s){return(e.transform||new t.transform(e)).getAttr("matrix")||t.cssDefault[r]}})}(jQuery,0,this.document),function(t,e,r,s){function n(e,r){null!=e[r]&&(!e.style||e.style[r]);var s=parseFloat(t.css(e,r));return s&&s>-1e4?s:0}function i(e,r,s){var i=t.cssMultipleValues[this.prop],o=t.cssAngle[this.prop];if(i||!t.cssNumber[this.prop]&&-1!==t.inArray(this.prop,t.transform.funcs)){this.values=[],i||(i=1);var c=this.options.original[this.prop],u=t(this.elem).css(this.prop),f=t.cssDefault[this.prop]||0;t.isArray(u)||(u=[u]),t.isArray(c)||(c="string"===t.type(c)?c.split(","):[c]);for(var h=i.length||i,m=0;c.length<h;)c.push(i.duplicate?c[0]:f[m]||0),m++;var p,d,x,g=this,v=g.elem.transform;orig=t.style(g.elem,l),t.each(c,function(e,r){p=u[e]?u[e]:f[e]&&!i.duplicate?f[e]:i.duplicate?u[0]:0,o?p=t.angle.toDegree(p):t.cssNumber[g.prop]||(d=a.exec(t.trim(p)))[3]&&"px"!==d[3]&&("%"===d[3]?p=parseFloat(d[2])/100*v["safeOuter"+(e?"Height":"Width")]():(t.style(g.elem,l,p),p=n(g.elem,l),t.style(g.elem,l,orig))),p=parseFloat(p),(d=a.exec(t.trim(r)))?(x=parseFloat(d[2]),s=d[3]||"px",o?(x=t.angle.toDegree(x+s),s="deg"):t.cssNumber[g.prop]||"%"!==s?t.cssNumber[g.prop]||"px"===s||(t.style(g.elem,l,(x||1)+s),p=(x||1)/n(g.elem,l)*p,t.style(g.elem,l,orig)):p=p/v["safeOuter"+(e?"Height":"Width")]()*100,d[1]&&(x=("-="===d[1]?-1:1)*x+p)):(x=r,s=""),g.values.push({start:p,end:x,unit:s})})}}var a=/^([+\-]=)?([\d+.\-]+)(.*)$/,o=t.fn.animate;t.fn.animate=function(e,r,s,n){var i=t.speed(r,s,n),a=t.cssMultipleValues;return i.complete=i.old,t.isEmptyObject(e)||(void 0===i.original&&(i.original={}),t.each(e,function(r,s){if(a[r]||t.cssAngle[r]||!t.cssNumber[r]&&-1!==t.inArray(r,t.transform.funcs)){if(jQuery.isArray(e[r])){var n=1,o=s.length;a[r]&&(n=void 0===a[r].length?a[r]:a[r].length),(o>n||o<n&&2==o||2==o&&2==n&&isNaN(parseFloat(s[o-1])))&&(s[o-1],s.splice(o-1,1))}i.original[r]=s.toString(),e[r]=parseFloat(s)}})),o.apply(this,[arguments[0],i])};var l="paddingBottom";t.fx.prototype.custom&&function(t){var e=t.custom;t.custom=function(t,r,s){return i.apply(this,arguments),e.apply(this,arguments)}}(t.fx.prototype),t.Animation&&t.Animation.tweener&&t.Animation.tweener(t.transform.funcs.join(" "),function(t,e){var r=this.createTween(t,e);return i.apply(r,[r.start,r.end,r.unit]),r}),t.fx.multipleValueStep={_default:function(e){t.each(e.values,function(t,r){e.values[t].now=r.start+(r.end-r.start)*e.pos})}},t.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(e,r){t.fx.multipleValueStep[r]=function(e){var r=e.decomposed,s=t.matrix;m=s.identity(),r.now={},t.each(r.start,function(t){if(r.now[t]=parseFloat(r.start[t])+(parseFloat(r.end[t])-parseFloat(r.start[t]))*e.pos,("scaleX"===t||"scaleY"===t)&&1===r.now[t]||"scaleX"!==t&&"scaleY"!==t&&0===r.now[t])return!0;m=m.x(s[t](r.now[t]))});var n;t.each(e.values,function(t){switch(t){case 0:n=parseFloat(m.e(1,1).toFixed(6));break;case 1:n=parseFloat(m.e(2,1).toFixed(6));break;case 2:n=parseFloat(m.e(1,2).toFixed(6));break;case 3:n=parseFloat(m.e(2,2).toFixed(6));break;case 4:n=parseFloat(m.e(1,3).toFixed(6));break;case 5:n=parseFloat(m.e(2,3).toFixed(6))}e.values[t].now=n})}}),t.each(t.transform.funcs,function(e,r){function s(e){var s=e.elem.transform||new t.transform(e.elem),n={};t.cssMultipleValues[r]||!t.cssNumber[r]&&-1!==t.inArray(r,t.transform.funcs)?((t.fx.multipleValueStep[e.prop]||t.fx.multipleValueStep._default)(e),n[e.prop]=[],t.each(e.values,function(r,s){n[e.prop].push(s.now+(t.cssNumber[e.prop]?"":s.unit))})):n[e.prop]=e.now+(t.cssNumber[e.prop]?"":e.unit),s.exec(n,{preserve:!0})}t.Tween&&t.Tween.propHooks&&(t.Tween.propHooks[r]={set:s}),t.fx.step&&(t.fx.step[r]=s)}),t.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(e,r){function s(e){var s=e.elem.transform||new t.transform(e.elem),n={};if(!e.initialized){if(e.initialized=!0,"matrix"!==r){var i,a=t.matrix[r]().elements;t.each(e.values,function(t){switch(t){case 0:i=a[0];break;case 1:i=a[2];break;case 2:i=a[1];break;case 3:i=a[3];break;default:i=0}e.values[t].end=i})}e.decomposed={};var o=e.values;e.decomposed.start=t.matrix.matrix(o[0].start,o[1].start,o[2].start,o[3].start,o[4].start,o[5].start).decompose(),e.decomposed.end=t.matrix.matrix(o[0].end,o[1].end,o[2].end,o[3].end,o[4].end,o[5].end).decompose()}(t.fx.multipleValueStep[e.prop]||t.fx.multipleValueStep._default)(e),n.matrix=[],t.each(e.values,function(t,e){n.matrix.push(e.now)}),s.exec(n,{preserve:!0})}t.Tween&&t.Tween.propHooks&&(t.Tween.propHooks[r]={set:s}),t.fx.step&&(t.fx.step[r]=s)})}(jQuery,0,this.document),function(t,e,r,s){var n=180/Math.PI,i=200/Math.PI,a=Math.PI/180,o=Math.PI/200,l=/^([+\-]=)?([\d+.\-]+)(.*)$/;t.extend({angle:{runit:/(deg|g?rad)/,radianToDegree:function(t){return t*n},radianToGrad:function(t){return t*i},degreeToRadian:function(t){return t*a},degreeToGrad:function(t){return t*(2/1.8)},gradToDegree:function(t){return.9*t},gradToRadian:function(t){return t*o},toDegree:function(e){var r=l.exec(e);if(r){switch(e=parseFloat(r[2]),r[3]||"deg"){case"grad":e=t.angle.gradToDegree(e);break;case"rad":e=t.angle.radianToDegree(e)}return e}return 0}}})}(jQuery,0,this.document),function(t,e,r,s){void 0===t.matrix&&t.extend({matrix:{}});var n=t.matrix;t.extend(n,{V2:function(e,r){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,2):this.elements=[e,r],this.length=2},V3:function(e,r,s){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,3):this.elements=[e,r,s],this.length=3},V4:function(e,r,s,n){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,4):this.elements=[e,r,s,n],this.length=4},M2x2:function(e,r,s,n){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,4):this.elements=Array.prototype.slice.call(arguments).slice(0,4),this.rows=2,this.cols=2},M3x3:function(e,r,s,n,i,a,o,l,c){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,9):this.elements=Array.prototype.slice.call(arguments).slice(0,9),this.rows=3,this.cols=3},M4x4:function(e,r,s,n,i,a,o,l,c,u,f,h){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,12):this.elements=Array.prototype.slice.call(arguments).slice(0,12),this.rows=4,this.cols=4}});var i={e:function(t,e){var r=this.rows,s=this.cols;return t>r||e>r||t<1||e<1?0:this.elements[(t-1)*s+e-1]},decompose:function(){var e=this.e(1,1),r=this.e(2,1),s=this.e(1,2),n=this.e(2,2),i=this.e(1,3),a=this.e(2,3);if(Math.abs(e*n-r*s)<.01)return{rotate:"0deg",rotateX:"0deg",rotateY:"0deg",rotateZ:"0deg",skewX:"0deg",scaleX:1,scaleY:1,translateX:"0px",translateY:"0px"};var o=i,l=a,c=Math.sqrt(e*e+r*r),u=(e/=c)*s+(r/=c)*n;s-=e*u,n-=r*u;var f=Math.sqrt(s*s+n*n);u/=f,e*(n/=f)-r*(s/=f)<0&&(e=-e,r=-r,c=-c);var h=t.angle.radianToDegree,m=h(Math.atan2(r,e));return u=h(Math.atan(u)),{rotate:m+"deg",rotateX:m+"deg",rotateY:m+"deg",rotateZ:m+"deg",skewX:u+"deg",scaleX:c,scaleY:f,translateX:o+"px",translateY:l+"px"}}};t.extend(n.M2x2.prototype,i,{toM3x3:function(){var t=this.elements;return new n.M3x3(t[0],t[1],0,t[2],t[3],0,0,0,1)},x:function(t){var e=void 0===t.rows;if(!e&&3==t.rows)return this.toM3x3().x(t);var r=this.elements,s=t.elements;return e&&2==s.length?new n.V2(r[0]*s[0]+r[1]*s[1],r[2]*s[0]+r[3]*s[1]):s.length==r.length&&new n.M2x2(r[0]*s[0]+r[1]*s[2],r[0]*s[1]+r[1]*s[3],r[2]*s[0]+r[3]*s[2],r[2]*s[1]+r[3]*s[3])},inverse:function(){var t=1/this.determinant(),e=this.elements;return new n.M2x2(t*e[3],t*-e[1],t*-e[2],t*e[0])},determinant:function(){var t=this.elements;return t[0]*t[3]-t[1]*t[2]}}),t.extend(n.M3x3.prototype,i,{toM4x4:function(){var t=this.elements;return new n.M4x4(t[0],t[1],t[2],0,t[3],t[4],t[5],0,t[6],t[7],t[8],0,0,0,0,1)},x:function(t){var e=void 0===t.rows;!e&&t.rows<3&&(t=t.toM3x3());var r=this.elements,s=t.elements;return e&&3==s.length?new n.V3(r[0]*s[0]+r[1]*s[1]+r[2]*s[2],r[3]*s[0]+r[4]*s[1]+r[5]*s[2],r[6]*s[0]+r[7]*s[1]+r[8]*s[2]):s.length==r.length&&new n.M3x3(r[0]*s[0]+r[1]*s[3]+r[2]*s[6],r[0]*s[1]+r[1]*s[4]+r[2]*s[7],r[0]*s[2]+r[1]*s[5]+r[2]*s[8],r[3]*s[0]+r[4]*s[3]+r[5]*s[6],r[3]*s[1]+r[4]*s[4]+r[5]*s[7],r[3]*s[2]+r[4]*s[5]+r[5]*s[8],r[6]*s[0]+r[7]*s[3]+r[8]*s[6],r[6]*s[1]+r[7]*s[4]+r[8]*s[7],r[6]*s[2]+r[7]*s[5]+r[8]*s[8])},inverse:function(){var t=1/this.determinant(),e=this.elements;return new n.M3x3(t*(e[8]*e[4]-e[7]*e[5]),t*-(e[8]*e[1]-e[7]*e[2]),t*(e[5]*e[1]-e[4]*e[2]),t*-(e[8]*e[3]-e[6]*e[5]),t*(e[8]*e[0]-e[6]*e[2]),t*-(e[5]*e[0]-e[3]*e[2]),t*(e[7]*e[3]-e[6]*e[4]),t*-(e[7]*e[0]-e[6]*e[1]),t*(e[4]*e[0]-e[3]*e[1]))},determinant:function(){var t=this.elements;return t[0]*(t[8]*t[4]-t[7]*t[5])-t[3]*(t[8]*t[1]-t[7]*t[2])+t[6]*(t[5]*t[1]-t[4]*t[2])}}),t.extend(n.M4x4.prototype,i,{x:function(t){var e=void 0===t.rows;!e&&t.rows<4&&(t=t.toM4x4());var r=this.elements,s=t.elements;return e&&4==s.length?new n.V4(r[0]*s[0]+r[1]*s[1]+r[2]*s[2]+r[3]*s[3],r[4]*s[0]+r[5]*s[1]+r[6]*s[2]+r[7]*s[3],r[8]*s[0]+r[9]*s[1]+r[10]*s[2]+r[11]*s[3]):s.length==r.length&&new n.M4x4(r[0]*s[0]+r[1]*s[4]+r[2]*s[8],r[0]*s[1]+r[1]*s[5]+r[2]*s[9],r[0]*s[2]+r[1]*s[6]+r[2]*s[10],r[0]*s[3]+r[1]*s[7]+r[2]*s[11],r[3]*s[0]+r[4]*s[4]+r[5]*s[8],r[3]*s[1]+r[4]*s[5]+r[5]*s[9],r[3]*s[2]+r[4]*s[6]+r[5]*s[10],r[3]*s[3]+r[4]*s[7]+r[5]*s[11],r[6]*s[0]+r[7]*s[4]+r[8]*s[8],r[6]*s[1]+r[7]*s[5]+r[8]*s[9],r[6]*s[2]+r[7]*s[6]+r[8]*s[10],r[6]*s[3]+r[7]*s[7]+r[8]*s[11])},inverse:function(){var t=1/this.determinant(),e=this.elements;return new n.M4x4(t*(e[8]*e[4]-e[7]*e[5]),t*-(e[8]*e[1]-e[7]*e[2]),t*(e[5]*e[1]-e[4]*e[2]),t*-(e[5]*e[4]-e[4]*e[5]),t*-(e[8]*e[3]-e[6]*e[5]),t*(e[8]*e[0]-e[6]*e[2]),t*-(e[5]*e[0]-e[3]*e[2]),t*(e[5]*e[3]-e[3]*e[5]),t*(e[7]*e[3]-e[6]*e[4]),t*-(e[7]*e[0]-e[6]*e[1]),t*(e[4]*e[0]-e[3]*e[1]),t*-(e[4]*e[3]-e[3]*e[4]))},determinant:function(){var t=this.elements;return t[0]*(t[8]*t[4]-t[7]*t[5])-t[3]*(t[8]*t[1]-t[7]*t[2])+t[6]*(t[5]*t[1]-t[4]*t[2])+t[9]*(t[5]*t[4]-t[4]*t[5])}});var a={e:function(t){return this.elements[t-1]}};t.extend(n.V2.prototype,a),t.extend(n.V3.prototype,a),t.extend(n.V4.prototype,a)}(jQuery,0,this.document),function(t,e,r,s){void 0===t.matrix&&t.extend({matrix:{}}),t.extend(t.matrix,{calc:function(t,e,r){this.matrix=t,this.outerHeight=e,this.outerWidth=r}}),t.matrix.calc.prototype={coord:function(e,r,s,n){s=void 0!==s?s:0;var i,a=this.matrix;switch(a.rows){case 2:i=a.x(new t.matrix.V2(e,r));break;case 3:i=a.x(new t.matrix.V3(e,r,s));break;case 4:i=a.x(new t.matrix.V4(e,r,s,n))}return i},corners:function(t,e){var r,s=!(void 0!==t||void 0!==e);return this.c&&s?r=this.c:(e=e||this.outerHeight,t=t||this.outerWidth,r={tl:this.coord(0,0),bl:this.coord(0,e),tr:this.coord(t,0),br:this.coord(t,e)}),s&&(this.c=r),r},sides:function(t){var e=t||this.corners();return{top:Math.min(e.tl.e(2),e.tr.e(2),e.br.e(2),e.bl.e(2)),bottom:Math.max(e.tl.e(2),e.tr.e(2),e.br.e(2),e.bl.e(2)),left:Math.min(e.tl.e(1),e.tr.e(1),e.br.e(1),e.bl.e(1)),right:Math.max(e.tl.e(1),e.tr.e(1),e.br.e(1),e.bl.e(1))}},offset:function(t){var e=this.sides(t);return{height:Math.abs(e.bottom-e.top),width:Math.abs(e.right-e.left)}},area:function(t){var e=t||this.corners(),r={x:e.tr.e(1)-e.tl.e(1)+e.br.e(1)-e.bl.e(1),y:e.tr.e(2)-e.tl.e(2)+e.br.e(2)-e.bl.e(2)},s={x:e.bl.e(1)-e.tl.e(1)+e.br.e(1)-e.tr.e(1),y:e.bl.e(2)-e.tl.e(2)+e.br.e(2)-e.tr.e(2)};return.25*Math.abs(r.e(1)*s.e(2)-r.e(2)*s.e(1))},nonAffinity:function(){var t=this.sides(),e=t.top-t.bottom,r=t.left-t.right;return parseFloat(parseFloat(Math.abs((Math.pow(e,2)+Math.pow(r,2))/(t.top*t.bottom+t.left*t.right))).toFixed(8))},originOffset:function(e,r){e=e||new t.matrix.V2(.5*this.outerWidth,.5*this.outerHeight),r=r||new t.matrix.V2(0,0);var s=this.coord(e.e(1),e.e(2)),n=this.coord(r.e(1),r.e(2));return{top:n.e(2)-r.e(2)-(s.e(2)-e.e(2)),left:n.e(1)-r.e(1)-(s.e(1)-e.e(1))}}}}(jQuery,0,this.document),function(t,e,r,s){void 0===t.matrix&&t.extend({matrix:{}});var n=t.matrix,i=n.M2x2,a=n.M3x3,o=n.M4x4;t.extend(n,{identity:function(t){for(var e=(t=t||2)*t,r=new Array(e),s=t+1,i=0;i<e;i++)r[i]=i%s==0?1:0;return new n["M"+t+"x"+t](r)},matrix:function(){var t=Array.prototype.slice.call(arguments);switch(arguments.length){case 4:return new i(t[0],t[2],t[1],t[3]);case 6:return new a(t[0],t[2],t[4],t[1],t[3],t[5],0,0,1);case 8:return new o(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1)}},reflect:function(){return new i(-1,0,0,-1)},reflectX:function(){return new i(1,0,0,-1)},reflectXY:function(){return new i(0,1,1,0)},reflectY:function(){return new i(-1,0,0,1)},rotate:function(e){var r=t.angle.degreeToRadian(e),s=Math.cos(r),n=Math.sin(r);return new i(s,-n,n,s)},rotateX:function(e){var r=t.angle.degreeToRadian(e),s=Math.cos(r),n=Math.sin(r);return new o(1,0,0,0,0,s,-n,0,0,n,s,0,0,0,0,1)},rotateY:function(e){var r=t.angle.degreeToRadian(e),s=Math.cos(r),n=Math.sin(r);return new o(s,0,n,0,0,1,0,0,-n,0,s,0,0,0,0,1)},rotateZ:function(e){var r=t.angle.degreeToRadian(e),s=Math.cos(r),n=Math.sin(r);return new o(s,-n,0,0,n,s,0,0,0,0,1,0,0,0,0,1)},scale:function(t,e){return t=t||0===t?t:1,e=e||0===e?e:t,new i(t,0,0,e)},scale3d:function(t,e,r){return t=t||0===t?t:1,e=e||0===e?e:t,r=r||0===r?r:e,new o(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)},scaleX:function(t){return n.scale(t,1)},scaleY:function(t){return n.scale(1,t)},scaleZ:function(t){return n.scale3d(1,1,t)},skew:function(e,r){e=e||0,r=r||0;var s=t.angle.degreeToRadian(e),n=t.angle.degreeToRadian(r),a=Math.tan(s),o=Math.tan(n);return new i(1,a,o,1)},skewX:function(t){return n.skew(t)},skewY:function(t){return n.skew(0,t)},translate:function(t,e){return t=t||0,e=e||0,new a(1,0,t,0,1,e,0,0,1)},translate3d:function(t,e,r){return t=t||0,e=e||0,r=r||0,new o(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1)},translateX:function(t){return n.translate(t)},translateY:function(t){return n.translate(0,t)},translateZ:function(t){return n.translate3d(0,0,t)}})}(jQuery,0,this.document);

function autoType(elementClass, typingSpeed){
	var thhis = $(elementClass);
	thhis.css({
		"position": "relative",
		"display": "inline-block"
	});
	thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
	thhis = thhis.find(".enter-page__whatHappens-text");
	var text = thhis.text().trim().split('');
	var amntOfChars = text.length;
	var newString = "";
	thhis.text("|");
	thhis.css("opacity",1);
	thhis.prev().removeAttr("style");
	thhis.text("");
	for(var i = 0; i < amntOfChars; i++){
		(function(i,char){
			setTimeout(function() {
				newString += char;
				thhis.text(newString);
			},i*typingSpeed);
		})(i+1,text[i]);
	}
}

var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
function enterPageButton(){
	$.cookie("alreadyVisit",true);
	$(".enter-page__button").on(bindTouchEnd, function(){
		$("#enter-page").fadeOut(1000);
		$(document).off(scroll_event);
		$(document).off('.noScroll');
		$("body").removeClass("is-scrollOff");
		$(".index-bg,#main").removeClass("is-beforeStart");
	});
}

function topAnimationSkip(){	
	$("#enter-page").removeClass("is-beforeStart");
	$(".enter-page__whatHappens-wrap,.baseCircle,.rect,.enter-page__logo,.circle2,.tri,.hex,.rect-m,.tri-m,.enter-page__logo-wrap,.enter-page__logo-text-item,.enter-page__logo-text-item-dec,.enter-page__button,.rect1,.rect2,.rect3,.rect4,.rect5,.rect6").addClass("is-skipped-force");
	enterPageButton();
	topBgAnimation();
}

function loadStyleSheet(){
	var link = document.createElement("link");
	link.href = "assets/css/stylesheet.css?timestamp=" + date.getTime();
	link.rel = "stylesheet";
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}

var timeoutId,scrolling = false;
function isScrolling(){
	$("#main").on("touchmove scroll",function(){
		scrolling = true;
		clearTimeout(timeoutId);
		timeoutId = setTimeout( function () {
			scrolling = false;
		}, 500 ) ;
	});
}
function topBgAnimation(){
	setInterval(function(){
		var changes = [];
		for(var i=1;i<=1000;i++){
			if(Math.random()<0.3){changes.push(i);}
		}
		changes.forEach(function(num){
			if(scrolling===false){
				var obj = $(".index-bg-element-"+num), duration= 1500, delay = Math.random()*1000;
				obj.delay(delay).queue(function(){
					$(this).addClass("is-hidden").dequeue();
				}).delay(duration).queue(function(){
					$("img",this).attr("src","assets/img/bg-"+ (1+Math.floor(Math.random()*(40))) +".svg");
					$(this).removeClass("is-hidden").dequeue();	
				});
			}
		});
	},3000);
}

var bindTouchStart = window.ontouchstart===null?"touchstart":"click",
	bindTouchEnd = window.ontouchend===null?"touchend":"click";

// set loader
$("#loader, #enter-page").addClass("is-beforeStart");
$("#loader").css("display","flex")
// onload
$(function(){
	isScrolling();
	// set bg
	date = new Date();
	for(var i=1;i<=10000;i++){
		$(".index-bg-element-"+i+" img").attr("src","assets/img/bg-"+ (1+Math.floor(Math.random()*(40))) +".svg?timestamp="+date.getTime());
	}

	// hide the loader
	setTimeout(function(){
		$("#loader").removeClass("is-beforeStart"); // loader hide animation
		setTimeout(function(){
			$("#loader").css("display","none"); // actually hide loader
		},500);
	},2000);

	 // if IE, stop showing animation
	var ua = navigator.userAgent;
	if(ua.match(/MSIE/) || ua.match(/Trident/)||ua.match(/Edge/)){
		topAnimationSkip();
	}

	// ios11 bugfix ?
	function ios_bugFix(){
		$(".rect,.tri-m").css({
			"transform-origin": "50% 50%"
		});
	}
	if(/iPhone/.test(ua)) {
		ua.match(/iPhone OS (\w+){1,3}/g);
		var osv=(RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
		if(osv >= 1100 || osv == 110) {ios_bugFix();}
	}else if(/iPad/.test(ua)) {
		ua.match(/CPU OS (\w+){1,3}/g);
		var osv=(RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
		if(osv >= 1100 || osv == 110) {ios_bugFix();}
	}else if(/Macintosh/.test(ua)){
		if(ua.indexOf("11.0") !== -1){ios_bugFix();}
	}

	if(location.pathname == "/" || location.pathname == "/development/" || location.pathname == "/index.html"){ // animation only in index.html
		if($.cookie("alreadyVisit")){ // if already visited stop showing animation
			loadStyleSheet();
			topAnimationSkip();
			$("#enter-page").hide();
		}else{
			// force no scroll
			$(document).on(scroll_event,function(e){e.preventDefault();});
			$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});

			// set the position of enter page
			$("#enter-page").removeClass("is-beforeStart");
			
			// set the height of letter animation
			$(".enter-page__whatHappens-wrap").css("hight",$(window).outerHeight())

			// hide following contents
			$(".index-bg,#main").addClass("is-beforeStart");

			// animation
			setTimeout(function(){
				loadStyleSheet();
				setTimeout(function(){
					autoType(".enter-page__whatHappens",100);
					setTimeout(function(){
						// show skip button
						$(".enter-page__skip").fadeIn(500);
						$(".enter-page__skip").on(bindTouchEnd,function(){
							topAnimationSkip();
							$(this).fadeOut(1000);
						});

						// hide "WHAT HAPPENS?"
						$(".enter-page__whatHappens-wrap").addClass("is-started");
						setTimeout(function(){
							$(".enter-page__whatHappens-wrap").css("display","none");
						},500);

						// show logo animation
						$(".enter-page__logo").removeClass("is-beforeStart");
						setTimeout(function(){
							setTimeout(function(){
								// draw circle and rectangles
								$(".baseCircle").addClass("is-started");
								$(".rect").addClass("is-started");
								setTimeout(function(){
									// paint colors while the circle is rotating
									$(".baseCircle").addClass("is-started-2");
									$(".rect1,.rect2,.rect3,.rect4,.rect5,.rect6").addClass("is-delayOff");
									$(".rect").addClass("is-started-2");
									$(".enter-page__logo,.circle2,.tri,.hex,.rect-m,.tri-m").addClass("is-started");
									setTimeout(function(){
										// show letters and button
										$(".enter-page__logo-wrap,.enter-page__logo-text-item,.enter-page__button").addClass("is-started");
										$(".enter-page__skip").fadeOut(500);
										enterPageButton();
										topBgAnimation();
									},2500);
								},6500);
							},500);
						},1000);
					},2500);
				},1000);
			},2000);
		}
	}else{
		topAnimationSkip();
		$("#enter-page").hide();
	}


	/* smph menu open */
	var openCheck = false;
	var scrollTop;
	function openSmphMenu(flg){
		$(".smph-header__menu-trigger").toggleClass("is-active");
		$("#smph-pagecover,#header-menu,#smph-header,#main,#footer").toggleClass("is-opened");
		if (flg){
			$(".smph-header__txt").html("MENU");
			$(window).scrollTop(scrollTop);
			$("#main").css({
				"top": 0,
				"position": "relative"
			});
			$("#footer").css({
				"top": 0,
				"position": "relative"
			});
			return false;
		}else{
			$(".smph-header__txt").html("CLOSE");
			$("#main").css({
				"top": -scrollTop,
				"position": "fixed"
			});
			$("#footer").css({
				"top": $("#main").outerHeight() - scrollTop,
				"position": "fixed"
			});
			$("#header-menu").scrollTop(0);
			return true;
		}
	}

	$(".smph-header__menu-trigger, .is-current").on(bindTouchEnd,function(){
		scrollTop = $(window).scrollTop();
		openCheck = openSmphMenu(openCheck);
	});
	$("#smph-pagecover").on(bindTouchStart,function(){
		if(openCheck===true){
			openCheck = openSmphMenu(openCheck);
		}
	});

	/* smph swipe menu open */
	if(ua.match(/(iPhone|iPad|iPod|Android|Mobile)/)){
		var touchstartPosition,touchmovePosition
		$("#main").on("touchstart",function(e){
			touchstartPosition = e.originalEvent.changedTouches[0].pageX;
		}).on("touchmove",function(e){
			touchmovePosition = e.originalEvent.changedTouches[0].pageX;
			var diff = touchmovePosition - touchstartPosition;
			if(diff > 50 && openCheck===false){
				e.preventDefault();
				if(diff > 100){
					scrollTop = $(window).scrollTop();
					openCheck = openSmphMenu(openCheck);
				}
			}
		});
	}

	/* pc menu */
	$(".header-menu__item").not(".is-current").on("mouseover",function(){
		$(".shown",this).addClass("is-hidden");
		$(".hidden",this).addClass("is-shown");
	}).on("mouseleave",function(){
		$(".shown",this).removeClass("is-hidden");
		$(".hidden",this).removeClass("is-shown");
	});

	function snsButton(snsName,snsLink){
		$(snsName).on(bindTouchEnd,function(){
			location.href = snsLink;
		});
	}
	var currentURL = location.href;
	snsButton(".twitter","https://twitter.com/share?hashtag=%e7%ad%91%e9%a7%92%e6%96%87%e5%8c%96%e7%a5%ad2017");
	snsButton(".facebook","https://www.facebook.com/sharer/sharer.php?u=" + currentURL);
	snsButton(".googleplus","https://plus.google.com/share?url=" + currentURL);

	searchBoxDefaultHeight = $('.deco-search-box').outerHeight();
	function resetSearchBoxHeight(t){
		$(".deco-search-box").animate({
			height: searchBoxDefaultHeight
		},t);
	}
	function showSearchResult(searchResult){
		searchResult.forEach(function(key){
			key.stop().delay(100).fadeIn(500);
		});
	}
	$('.deco-search-box__input').on('input', function(){
		var searchResult,
		searchText = $('<span/>').text($(this).val()).html(),
		searchResult = [];
		searchCount = 0;
		$('.deco-search-result__list li').stop().fadeOut(100);
		$(".serach-word-too-short, .not-found").stop().fadeOut(100);
		if (searchText != '') {
			$(".deco-search-box").addClass("is-open");
			if(searchText.length<=1){
				$(".not-found").stop().hide();
				$(".serach-word-too-short").stop().fadeIn(500);
			}else{
				$('.deco-search-result__list li').each(function(){
					if(($(this).text().toLowerCase()).indexOf(searchText.toLowerCase()) != -1) {
						searchResult.push($(this));
						searchCount += 1;
					}
				});
				if(searchCount>1){
					$(".deco-search-box").removeClass("is-open").stop().animate({
						height: (searchBoxDefaultHeight + $(".deco-search-result__list li").outerHeight() * (searchCount + 1)) + "px"
					},100,showSearchResult(searchResult));
				}else if(searchCount == 1){
					showSearchResult(searchResult);
				}
				if(searchCount<=0){
					resetSearchBoxHeight(500);
					$(".not-found").stop().fadeIn(500);
				}
			}
		}else{
			$(".deco-search-box").removeClass("is-open");
			resetSearchBoxHeight(100);
		}
	});

	// $(".deco-list ul").slideDown(0); //development
	var decoNum_min = 1,
		decoNum_max = 45,
		onModalScrollTop,
		decoModalFlg = false;
	function toggleDecoModal(scroll){
		if(decoModalFlg == true){
			$(".deco-desc-modal-wrap").removeClass("is-on");
			$(".deco-desc-modal").stop().animate({scrollTop: 0},100).slideUp(400,"easeInQuad",function(){
				$(this).css({
					position: "absolute",
					translateY: 0
				});
				$(".deco-desc-modal__down-arrow span").css("opacity",0);
			});
			$(".deco-desc-modal-wrap").stop().delay(500).fadeOut(250,function(){
				$(".deco-desc-modal__item").empty();
			});
			$(window).scrollTop(scroll);
			$("#main").css({
				"top": 0,
				"position": "relative"
			});	
			decoModalFlg = false;
		}else{
			$(".deco-desc-modal-wrap").stop().fadeIn(500);
			$(".deco-desc-modal").stop().animate({scrollTop: 0},100).delay(250).slideDown(500,"easeOutBack",function(){
				$(".deco-desc-modal__down-arrow span").css("opacity",0);
				$("#main").css({
					"top": -scroll,
					"position": "fixed"
				});
			});
			decoModalFlg = true;
		}		
	}
	function setModalContents(decoNum,direction){
		if(direction === "initialize"){
			$(".deco-desc-modal-prev").hide().animate({translateX: -windowWidth},0);
			$(".deco-desc-modal-next").hide().animate({translateX: windowWidth},0);
		} else if(direction === "prev"){
			$(".deco-desc-modal").addClass("is-temp");
			$(".deco-desc-modal .deco-desc-modal__item").empty();
			var removed = $(".deco-desc-modal-next.is-temp").removeClass("deco-desc-modal-next is-temp").addClass("deco-desc-modal-prev");
			removed.remove();
			$(".deco-desc-modal-current.is-temp").removeClass("deco-desc-modal-current is-temp").addClass("deco-desc-modal-next");
			$(".deco-desc-modal-prev.is-temp").removeClass("deco-desc-modal-prev is-temp").addClass("deco-desc-modal-current");
			$(".deco-desc-modal-wrap").append(removed);
		} else if(direction === "next"){
			$(".deco-desc-modal").addClass("is-temp");
			$(".deco-desc-modal .deco-desc-modal__item").empty();
			var removed = $(".deco-desc-modal-prev.is-temp").removeClass("deco-desc-modal-prev is-temp").addClass("deco-desc-modal-next");
			removed.remove();
			$(".deco-desc-modal-current.is-temp").removeClass("deco-desc-modal-current is-temp").addClass("deco-desc-modal-prev");
			$(".deco-desc-modal-next.is-temp").removeClass("deco-desc-modal-next is-temp").addClass("deco-desc-modal-current");
			$(".deco-desc-modal-wrap").append(removed);
		}
		var currentDeco = $("[data-deco-num="+ decoNum +"]")
			firstItem = decoNum === decoNum_min ? true : false,
			lastItem = decoNum === decoNum_max ? true : false,
			prevDeco = firstItem ? $("[data-deco-num="+ decoNum_max +"]") : $("[data-deco-num="+ (decoNum - 1) +"]"),
			nextDeco = lastItem ? $("[data-deco-num="+ decoNum_min +"]") : $("[data-deco-num="+ (decoNum + 1) +"]");
		$(".deco-desc-modal-current").attr("data-modal-num",decoNum);
		$(".deco-desc-modal-prev").attr("data-modal-num",firstItem?decoNum_max:decoNum-1);
		$(".deco-desc-modal-next").attr("data-modal-num",lastItem?decoNum_min:decoNum+1);
		$(".deco-desc-modal-current .deco-desc-modal__item").append(currentDeco.children().clone());
		$(".deco-desc-modal-prev .deco-desc-modal__item").append(prevDeco.children().clone());
		$(".deco-desc-modal-next .deco-desc-modal__item").append(nextDeco.children().clone());
	}
	
	if($(window).width()<959){
		$(".deco-list ul").slideUp(0);
		$(".groups-headline-trigger").on(bindTouchEnd,function(){
			var list = $("[data-deco-list-num="+ $(this).data("decoListTriggerNum") +"]"),
				listItem = $(".deco-list__item",list);
			if(list.hasClass("smph-list-open")){
				$(this).removeClass("is-on");
				list.removeClass("smph-list-open").stop().slideUp(500,"easeOutQuad");
			}else{
				$(this).addClass("is-on");
				list.addClass("smph-list-open").stop().slideDown(500,"easeInQuad");
			}
		});
		$(".deco-list__item").on(bindTouchStart,function(){
			$(this).addClass("is-hovered");
		}).on("touchmove",function(){
			$(this).removeClass("is-hovered");
		}).on(bindTouchEnd,function(){
			if($(this).hasClass("is-hovered")){
				setModalContents($(this).data("deco-num"),"initialize");
				onModalScrollTop = $(window).scrollTop();
				toggleDecoModal(onModalScrollTop);
			}
			$(this).removeClass("is-hovered");
		});
		var XtouchstartPosition,YtouchstartPosition,XtouchmovePosition,YtouchmovePosition,Xdiff,Ydiff,startOntop,touchMoveStarted,preventXmove=false,preventYmove=false,moveStartPosition=50,windowWidth=$(window).outerWidth();
		$(document).on({
			"touchstart": function(e){
				$(".deco-desc-modal").css("position","absolute").show();
				$(".deco-desc-modal-wrap").addClass("is-on");
				startOntop = $(this).scrollTop() <= 10 ? true : false;
				touchMoveStarted=false;
				XtouchstartPosition = e.originalEvent.changedTouches[0].pageX;
				YtouchstartPosition = e.originalEvent.changedTouches[0].pageY;
			},
			"touchmove": function(e){
				XtouchmovePosition = e.originalEvent.changedTouches[0].pageX;
				Xdiff = XtouchmovePosition - XtouchstartPosition;
				YtouchmovePosition = e.originalEvent.changedTouches[0].pageY;
				Ydiff = YtouchmovePosition - YtouchstartPosition;
				if(preventXmove === false){
					if(Xdiff > moveStartPosition || (touchMoveStarted && Xdiff > 0)){
						preventYmove = true;
						if(touchMoveStarted===false){touchMoveStarted=true;}
						$(".deco-desc-modal-wrap").addClass("is-on");
						e.preventDefault();
						$(this).css("position","fixed").animate({
							translateX: Xdiff - moveStartPosition
						},0);
						$(".deco-desc-modal-prev").animate({
							translateX: -windowWidth + Xdiff - moveStartPosition
						},0);
					}else if(Xdiff < -moveStartPosition || (touchMoveStarted && Xdiff < 0)){
						preventYmove = true;
						if(touchMoveStarted===false){touchMoveStarted=true;}
						$(".deco-desc-modal-wrap").addClass("is-on");
						e.preventDefault();
						$(this).animate({
							translateX: Xdiff + moveStartPosition
						},0);
						$(".deco-desc-modal-next").animate({
							translateX: windowWidth + Xdiff + moveStartPosition
						},0);
					}else{preventYmove = false;}
				}
				if(preventYmove === false && startOntop && Ydiff > 0){
					preventXmove = true;
					e.preventDefault();
					if(Ydiff > 25){
						$(".deco-desc-modal-wrap").removeClass("is-on");
						$(this).css("overflow","hidden");
						$(this).animate({
							translateY: Ydiff - 25
						},10,"linear");
						$(".deco-desc-modal__down-arrow span").animate({
							opacity: 0.004 * Ydiff,
							borderRadius: $(window).width() * 0.0003 * Ydiff
						},10,"linear");
					}else{
						$(this).css("overflow","scroll");
						$(this).animate({
							translateY: 0
						},100,animateEasing);	
					}
				}else{preventXmove = false;}
			},
			"touchend": function(){
				var animateEasing = "jswing",animateEasingBack = "easeInOutCirc";
				if(Xdiff > windowWidth*0.3){
					$(this).stop(false,false).animate({
						translateX: windowWidth
					},250,animateEasing);
					$(".deco-desc-modal-next").hide().animate({
						scrollTop: 0,
						translateX: -windowWidth
					},0);
					$(".deco-desc-modal-prev").stop(false,false).animate({
						translateX: 0
					},250,animateEasing);
					setModalContents($(".deco-desc-modal-prev").data("modal-num"),"prev");
				}else if(Xdiff < -windowWidth*0.3){
					$(this).stop(false,false).animate({
						translateX: -windowWidth
					},250,animateEasing);
					$(".deco-desc-modal-next").stop(false,false).animate({
						translateX: 0
					},250,animateEasing);
					$(".deco-desc-modal-prev").hide().animate({
						scrollTop: 0,
						translateX: windowWidth
					},0);
					setModalContents($(".deco-desc-modal-next").data("modal-num"),"next");
				}else{
					$(this).stop(false,false).animate({
						translateX: 0
					},250,animateEasingBack);
					$(".deco-desc-modal-prev").stop(false,false).animate({
						translateX: -windowWidth
					},250,animateEasingBack);
					$(".deco-desc-modal-next").stop(false,false).animate({
						translateX: windowWidth
					},250,animateEasingBack);
				}
				if(startOntop && Ydiff > $(window).height()*0.25){
					$(this).stop().slideUp(400,"easeInQuad",function(){
						$(this).css({
							overflow: "scroll",
							translateY: 0
						});
						$(".deco-desc-modal__down-arrow span").css("opacity",0);
					});
					$(".deco-desc-modal-wrap").stop().delay(250).fadeOut(250,function(){
						$(".deco-desc-modal__item").empty();
					});
					$(window).scrollTop(onModalScrollTop);
					$("#main").css({
						"top": 0,
						"position": "relative"
					});	
					decoModalFlg = false;
				}else{
					$(this).css("overflow","scroll");
					$(this).animate({
						translateY: 0
					},100,animateEasing);
				}
			}
		},".deco-desc-modal");

		$(".deco-desc-modal__close").on({
			"touchstart": function(){
				$(this).css("text-decoration","underline");
			},
			"touchend": function(){
				toggleDecoModal(onModalScrollTop);
				$(this).css("text-decoration","none");
			}
		});
	}else{
		$(".downloadParlevel1Text-replacable").text("画像をクリックするとダウンロードできます。");
		$(".content-tab").fadeOut(0);
		$(".content-tab-trigger").last().addClass("tab-last");
		
		tabNum = $(".content-tab-trigger").length;
		tabTriggerWidth = $(".content-tab-trigger").parent().innerWidth()/tabNum;
		$(".content-tab-trigger").css("width",tabTriggerWidth);
		for(var i=0;i<tabNum;i++){
			$("[data-tab-trigger-num="+i+"]").css("left",tabTriggerWidth*(i));
		}
		$(window).resize(function(){
			tabTriggerWidth = $(".content-tab-trigger").parent().innerWidth()/tabNum;
			$(".content-tab-trigger").css("width",tabTriggerWidth);
			for(var i=0;i<tabNum;i++){
				$("[data-tab-trigger-num="+i+"]").css("left",tabTriggerWidth*(i));
			}
		});

		$(".content-tab-trigger").on("click",function(){
			if(!($(this).hasClass("is-open"))){
				$(".is-open").removeClass("is-open");
				$(this).addClass("is-open");
				$(".deco-list__item").removeClass("is-chosen");
				var targetTab = $("[data-tab-num="+$(this).data("tab-trigger-num")+"]");
				$(".content-tab-open").fadeOut(250).queue(function(){$(this).removeClass("content-tab-open").dequeue();});
				targetTab.fadeIn(250).queue(function(){$(this).addClass("content-tab-open").dequeue();});
			}
		});

		$(".deco-list__item").on("click",function(){
			if($(this).hasClass("is-chosen")){
				$(this).removeClass("is-chosen");
				$(".deco-list-desc-show").data("deco-shown","").empty();
			}else{
				var parent = $(this).parent();
				$(".content-tab-open .is-chosen").removeClass("is-chosen");
				$(this).addClass("is-chosen");
				$(".deco-list-desc-show").hide();
				$(this).parent().parent().find(".deco-list-desc-show").attr("data-deco-shown",$(this).data("deco-num")).empty().show().css({
					zIndex: 9000
				}).append($(this).children().clone());
			}
		});
	}
	if(window.ontouchstart===null){
		var tapItems = $("a,.snsShareButtons__item");
		tapItems.removeClass("is-hovered");
		tapItems.on("touchstart",function(){
			$(this).addClass("is-hovered");
		}).on("touchmove",function(){
			$(this).addClass("is-hovered");
		}).on("touchend",function(){
			setTimeout(function(){
				$(this).removeClass("is-hovered");
			},500);
		});
		$(document).on("touchend",function(){
			setTimeout(function(){
				tapItems.removeClass("is-hovered");
			},250);
		});
	}
});
