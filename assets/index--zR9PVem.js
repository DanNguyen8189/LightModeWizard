var qe=Object.defineProperty;var pe=t=>{throw TypeError(t)};var Ge=(t,e,n)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var L=(t,e,n)=>Ge(t,typeof e!="symbol"?e+"":e,n),me=(t,e,n)=>e.has(t)||pe("Cannot "+n);var d=(t,e,n)=>(me(t,e,"read from private field"),n?n.call(t):e.get(t)),U=(t,e,n)=>e.has(t)?pe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),W=(t,e,n,r)=>(me(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(_){if(_.ep)return;_.ep=!0;const o=n(_);fetch(_.href,o)}})();var ee,E,Ce,P,ve,Se,oe,Pe,ae,ie,se,F={},Te=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function S(t,e){for(var n in e)t[n]=e[n];return t}function fe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Xe(t,e,n){var r,_,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?_=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?ee.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return z(t,s,r,_,null)}function z(t,e,n,r,_){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:_??++Ce,__i:-1,__u:0};return _==null&&E.vnode!=null&&E.vnode(o),o}function te(t){return t.children}function X(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?x(t):null}function $e(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return $e(t)}}function Ee(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!Y.__r++||ve!==E.debounceRendering)&&((ve=E.debounceRendering)||Se)(Y)}function Y(){var t,e,n,r,_,o,s,l;for(P.sort(oe);t=P.shift();)t.__d&&(e=P.length,r=void 0,o=(_=(n=t).__v).__e,s=[],l=[],n.__P&&((r=S({},_)).__v=_.__v+1,E.vnode&&E.vnode(r),ue(n.__P,r,_,n.__n,n.__P.namespaceURI,32&_.__u?[o]:null,s,o??x(_),!!(32&_.__u),l),r.__v=_.__v,r.__.__k[r.__i]=r,Me(s,r,l),r.__e!=o&&$e(r)),P.length>e&&P.sort(oe));Y.__r=0}function xe(t,e,n,r,_,o,s,l,c,a,h){var i,u,f,y,k,g,v=r&&r.__k||Te,p=e.length;for(c=Ve(n,e,v,c,p),i=0;i<p;i++)(f=n.__k[i])!=null&&(u=f.__i===-1?F:v[f.__i]||F,f.__i=i,g=ue(t,f,u,_,o,s,l,c,a,h),y=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&de(u.ref,null,f),h.push(f.ref,f.__c||y,f)),k==null&&y!=null&&(k=y),4&f.__u||u.__k===f.__k?c=He(f,c,t):typeof f.type=="function"&&g!==void 0?c=g:y&&(c=y.nextSibling),f.__u&=-7);return n.__e=k,c}function Ve(t,e,n,r,_){var o,s,l,c,a,h=n.length,i=h,u=0;for(t.__k=new Array(_),o=0;o<_;o++)(s=e[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=o+u,(s=t.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?z(null,s,null,null,null):ce(s)?z(te,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?z(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,l=null,(a=s.__i=Ke(s,n,c,i))!==-1&&(i--,(l=n[a])&&(l.__u|=2)),l==null||l.__v===null?(a==-1&&u--,typeof s.type!="function"&&(s.__u|=4)):a!=c&&(a==c-1?u--:a==c+1?u++:(a>c?u--:u++,s.__u|=4))):t.__k[o]=null;if(i)for(o=0;o<h;o++)(l=n[o])!=null&&!(2&l.__u)&&(l.__e==r&&(r=x(l)),Be(l,l));return r}function He(t,e,n){var r,_;if(typeof t.type=="function"){for(r=t.__k,_=0;r&&_<r.length;_++)r[_]&&(r[_].__=t,e=He(r[_],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=x(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ke(t,e,n,r){var _,o,s=t.key,l=t.type,c=e[n];if(c===null||c&&s==c.key&&l===c.type&&!(2&c.__u))return n;if(r>(c!=null&&!(2&c.__u)?1:0))for(_=n-1,o=n+1;_>=0||o<e.length;){if(_>=0){if((c=e[_])&&!(2&c.__u)&&s==c.key&&l===c.type)return _;_--}if(o<e.length){if((c=e[o])&&!(2&c.__u)&&s==c.key&&l===c.type)return o;o++}}return-1}function ye(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ze.test(e)?n:n+"px"}function G(t,e,n,r,_){var o;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ye(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ye(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(Pe,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r?n.u=r.u:(n.u=ae,t.addEventListener(e,o?se:ie,o)):t.removeEventListener(e,o?se:ie,o);else{if(_=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function ge(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ae++;else if(e.t<n.u)return;return n(E.event?E.event(e):e)}}}function ue(t,e,n,r,_,o,s,l,c,a){var h,i,u,f,y,k,g,v,p,H,I,j,M,he,q,ne,re,A=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[l=e.__e=n.__e]),(h=E.__b)&&h(e);e:if(typeof A=="function")try{if(v=e.props,p="prototype"in A&&A.prototype.render,H=(h=A.contextType)&&r[h.__c],I=h?H?H.props.value:h.__:r,n.__c?g=(i=e.__c=n.__c).__=i.__E:(p?e.__c=i=new A(v,I):(e.__c=i=new X(v,I),i.constructor=A,i.render=Ze),H&&H.sub(i),i.props=v,i.state||(i.state={}),i.context=I,i.__n=r,u=i.__d=!0,i.__h=[],i._sb=[]),p&&i.__s==null&&(i.__s=i.state),p&&A.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=S({},i.__s)),S(i.__s,A.getDerivedStateFromProps(v,i.__s))),f=i.props,y=i.state,i.__v=e,u)p&&A.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),p&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(p&&A.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,I),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,I)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(i.props=v,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(B){B&&(B.__=e)}),j=0;j<i._sb.length;j++)i.__h.push(i._sb[j]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,I),p&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,y,k)})}if(i.context=I,i.props=v,i.__P=t,i.__e=!1,M=E.__r,he=0,p){for(i.state=i.__s,i.__d=!1,M&&M(e),h=i.render(i.props,i.state,i.context),q=0;q<i._sb.length;q++)i.__h.push(i._sb[q]);i._sb=[]}else do i.__d=!1,M&&M(e),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++he<25);i.state=i.__s,i.getChildContext!=null&&(r=S(S({},r),i.getChildContext())),p&&!u&&i.getSnapshotBeforeUpdate!=null&&(k=i.getSnapshotBeforeUpdate(f,y)),l=xe(t,ce(ne=h!=null&&h.type===te&&h.key==null?h.props.children:h)?ne:[ne],e,n,r,_,o,s,l,c,a),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),g&&(i.__E=i.__=null)}catch(B){if(e.__v=null,c||o!=null)if(B.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,e.__e=l}else for(re=o.length;re--;)fe(o[re]);else e.__e=n.__e,e.__k=n.__k;E.__e(B,e,n)}else o==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):l=e.__e=Ye(n.__e,e,n,r,_,o,s,c,a);return(h=E.diffed)&&h(e),128&e.__u?void 0:l}function Me(t,e,n){for(var r=0;r<n.length;r++)de(n[r],n[++r],n[++r]);E.__c&&E.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(o){o.call(_)})}catch(o){E.__e(o,_.__v)}})}function Ye(t,e,n,r,_,o,s,l,c){var a,h,i,u,f,y,k,g=n.props,v=e.props,p=e.type;if(p=="svg"?_="http://www.w3.org/2000/svg":p=="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((f=o[a])&&"setAttribute"in f==!!p&&(p?f.localName==p:f.nodeType==3)){t=f,o[a]=null;break}}if(t==null){if(p==null)return document.createTextNode(v);t=document.createElementNS(_,p,v.is&&v),l&&(E.__m&&E.__m(e,o),l=!1),o=null}if(p===null)g===v||l&&t.data===v||(t.data=v);else{if(o=o&&ee.call(t.childNodes),g=n.props||F,!l&&o!=null)for(g={},a=0;a<t.attributes.length;a++)g[(f=t.attributes[a]).name]=f.value;for(a in g)if(f=g[a],a!="children"){if(a=="dangerouslySetInnerHTML")i=f;else if(!(a in v)){if(a=="value"&&"defaultValue"in v||a=="checked"&&"defaultChecked"in v)continue;G(t,a,null,f,_)}}for(a in v)f=v[a],a=="children"?u=f:a=="dangerouslySetInnerHTML"?h=f:a=="value"?y=f:a=="checked"?k=f:l&&typeof f!="function"||g[a]===f||G(t,a,f,g[a],_);if(h)l||i&&(h.__html===i.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(i&&(t.innerHTML=""),xe(t,ce(u)?u:[u],e,n,r,p=="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,s,o?o[0]:n.__k&&x(n,0),l,c),o!=null)for(a=o.length;a--;)fe(o[a]);l||(a="value",p=="progress"&&y==null?t.removeAttribute("value"):y!==void 0&&(y!==t[a]||p=="progress"&&!y||p=="option"&&y!==g[a])&&G(t,a,y,g[a],_),a="checked",k!==void 0&&k!==t[a]&&G(t,a,k,g[a],_))}return t}function de(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(_){E.__e(_,n)}}function Be(t,e,n){var r,_;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||de(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){E.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&Be(r[_],e,n||typeof t.type!="function");n||fe(t.__e),t.__c=t.__=t.__e=void 0}function Ze(t,e,n){return this.constructor(t,n)}function Je(t,e,n){var r,_,o,s;e==document&&(e=document.documentElement),E.__&&E.__(t,e),_=(r=!1)?null:e.__k,o=[],s=[],ue(e,t=e.__k=Xe(te,null,[t]),_||F,F,e.namespaceURI,_?null:e.firstChild?ee.call(e.childNodes):null,o,_?_.__e:e.firstChild,r,s),Me(o,t,s)}ee=Te.slice,E={__e:function(t,e,n,r){for(var _,o,s;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(t)),s=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,r||{}),s=_.__d),s)return _.__E=_}catch(l){t=l}throw t}},Ce=0,X.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},n),this.props)),t&&S(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ee(this))},X.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ee(this))},X.prototype.render=te,P=[],Se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe=function(t,e){return t.__v.__b-e.__v.__b},Y.__r=0,Pe=/(PointerCapture)$|Capture$/i,ae=0,ie=ge(!1),se=ge(!0);var Qe=0;function b(t,e,n,r,_,o){e||(e={});var s,l,c=e;if("ref"in c)for(l in c={},e)l=="ref"?s=e[l]:c[l]=e[l];var a={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Qe,__i:-1,__u:0,__source:_,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return E.vnode&&E.vnode(a),a}var Z,w,_e,we,J=0,We=[],R=E,Re=R.__b,be=R.__r,Le=R.diffed,De=R.__c,ke=R.unmount,Oe=R.__;function Fe(t,e){R.__h&&R.__h(w,t,J||e),J=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function V(t){return J=1,et(je,t)}function et(t,e,n){var r=Fe(Z++,2);if(r.t=t,!r.__c&&(r.__=[je(void 0,e),function(l){var c=r.__N?r.__N[0]:r.__[0],a=r.t(c,l);c!==a&&(r.__N=[a,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var _=function(l,c,a){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(u){return!!u.__c});if(h.every(function(u){return!u.__N}))return!o||o.call(this,l,c,a);var i=r.__c.props!==l;return h.forEach(function(u){if(u.__N){var f=u.__[0];u.__=u.__N,u.__N=void 0,f!==u.__[0]&&(i=!0)}}),o&&o.call(this,l,c,a)||i};w.u=!0;var o=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(l,c,a){if(this.__e){var h=o;o=void 0,_(l,c,a),o=h}s&&s.call(this,l,c,a)},w.shouldComponentUpdate=_}return r.__N||r.__}function Ae(t){return J=5,tt(function(){return{current:t}},[])}function tt(t,e){var n=Fe(Z++,7);return _t(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function nt(){for(var t;t=We.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(K),t.__H.__h.forEach(le),t.__H.__h=[]}catch(e){t.__H.__h=[],R.__e(e,t.__v)}}R.__b=function(t){w=null,Re&&Re(t)},R.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Oe&&Oe(t,e)},R.__r=function(t){be&&be(t),Z=0;var e=(w=t.__c).__H;e&&(_e===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(K),e.__h.forEach(le),e.__h=[],Z=0)),_e=w},R.diffed=function(t){Le&&Le(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(We.push(e)!==1&&we===R.requestAnimationFrame||((we=R.requestAnimationFrame)||rt)(nt)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),_e=w=null},R.__c=function(t,e){e.some(function(n){try{n.__h.forEach(K),n.__h=n.__h.filter(function(r){return!r.__||le(r)})}catch(r){e.some(function(_){_.__h&&(_.__h=[])}),e=[],R.__e(r,n.__v)}}),De&&De(t,e)},R.unmount=function(t){ke&&ke(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{K(r)}catch(_){e=_}}),n.__H=void 0,e&&R.__e(e,n.__v))};var Ne=typeof requestAnimationFrame=="function";function rt(t){var e,n=function(){clearTimeout(r),Ne&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Ne&&(e=requestAnimationFrame(n))}function K(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function le(t){var e=w;t.__c=t.__(),w=e}function _t(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function je(t,e){return typeof e=="function"?e(t):e}var m;(function(t){t.LOAD="LOAD",t.EXEC="EXEC",t.FFPROBE="FFPROBE",t.WRITE_FILE="WRITE_FILE",t.READ_FILE="READ_FILE",t.DELETE_FILE="DELETE_FILE",t.RENAME="RENAME",t.CREATE_DIR="CREATE_DIR",t.LIST_DIR="LIST_DIR",t.DELETE_DIR="DELETE_DIR",t.ERROR="ERROR",t.DOWNLOAD="DOWNLOAD",t.PROGRESS="PROGRESS",t.LOG="LOG",t.MOUNT="MOUNT",t.UNMOUNT="UNMOUNT"})(m||(m={}));const ot=(()=>{let t=0;return()=>t++})(),it=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),st=new Error("called FFmpeg.terminate()");var O,C,N,T,$,Q,D;class lt{constructor(){U(this,O,null);U(this,C,{});U(this,N,{});U(this,T,[]);U(this,$,[]);L(this,"loaded",!1);U(this,Q,()=>{d(this,O)&&(d(this,O).onmessage=({data:{id:e,type:n,data:r}})=>{switch(n){case m.LOAD:this.loaded=!0,d(this,C)[e](r);break;case m.MOUNT:case m.UNMOUNT:case m.EXEC:case m.FFPROBE:case m.WRITE_FILE:case m.READ_FILE:case m.DELETE_FILE:case m.RENAME:case m.CREATE_DIR:case m.LIST_DIR:case m.DELETE_DIR:d(this,C)[e](r);break;case m.LOG:d(this,T).forEach(_=>_(r));break;case m.PROGRESS:d(this,$).forEach(_=>_(r));break;case m.ERROR:d(this,N)[e](r);break}delete d(this,C)[e],delete d(this,N)[e]})});U(this,D,({type:e,data:n},r=[],_)=>d(this,O)?new Promise((o,s)=>{const l=ot();d(this,O)&&d(this,O).postMessage({id:l,type:e,data:n},r),d(this,C)[l]=o,d(this,N)[l]=s,_==null||_.addEventListener("abort",()=>{s(new DOMException(`Message # ${l} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(it));L(this,"load",({classWorkerURL:e,...n}={},{signal:r}={})=>(d(this,O)||(W(this,O,e?new Worker(new URL(e,import.meta.url),{type:"module"}):new Worker(new URL("/LightModeWizard/assets/worker-BAOIWoxA.js",import.meta.url),{type:"module"})),d(this,Q).call(this)),d(this,D).call(this,{type:m.LOAD,data:n},void 0,r)));L(this,"exec",(e,n=-1,{signal:r}={})=>d(this,D).call(this,{type:m.EXEC,data:{args:e,timeout:n}},void 0,r));L(this,"ffprobe",(e,n=-1,{signal:r}={})=>d(this,D).call(this,{type:m.FFPROBE,data:{args:e,timeout:n}},void 0,r));L(this,"terminate",()=>{const e=Object.keys(d(this,N));for(const n of e)d(this,N)[n](st),delete d(this,N)[n],delete d(this,C)[n];d(this,O)&&(d(this,O).terminate(),W(this,O,null),this.loaded=!1)});L(this,"writeFile",(e,n,{signal:r}={})=>{const _=[];return n instanceof Uint8Array&&_.push(n.buffer),d(this,D).call(this,{type:m.WRITE_FILE,data:{path:e,data:n}},_,r)});L(this,"mount",(e,n,r)=>{const _=[];return d(this,D).call(this,{type:m.MOUNT,data:{fsType:e,options:n,mountPoint:r}},_)});L(this,"unmount",e=>{const n=[];return d(this,D).call(this,{type:m.UNMOUNT,data:{mountPoint:e}},n)});L(this,"readFile",(e,n="binary",{signal:r}={})=>d(this,D).call(this,{type:m.READ_FILE,data:{path:e,encoding:n}},void 0,r));L(this,"deleteFile",(e,{signal:n}={})=>d(this,D).call(this,{type:m.DELETE_FILE,data:{path:e}},void 0,n));L(this,"rename",(e,n,{signal:r}={})=>d(this,D).call(this,{type:m.RENAME,data:{oldPath:e,newPath:n}},void 0,r));L(this,"createDir",(e,{signal:n}={})=>d(this,D).call(this,{type:m.CREATE_DIR,data:{path:e}},void 0,n));L(this,"listDir",(e,{signal:n}={})=>d(this,D).call(this,{type:m.LIST_DIR,data:{path:e}},void 0,n));L(this,"deleteDir",(e,{signal:n}={})=>d(this,D).call(this,{type:m.DELETE_DIR,data:{path:e}},void 0,n))}on(e,n){e==="log"?d(this,T).push(n):e==="progress"&&d(this,$).push(n)}off(e,n){e==="log"?W(this,T,d(this,T).filter(r=>r!==n)):e==="progress"&&W(this,$,d(this,$).filter(r=>r!==n))}}O=new WeakMap,C=new WeakMap,N=new WeakMap,T=new WeakMap,$=new WeakMap,Q=new WeakMap,D=new WeakMap;var Ie;(function(t){t.MEMFS="MEMFS",t.NODEFS="NODEFS",t.NODERAWFS="NODERAWFS",t.IDBFS="IDBFS",t.WORKERFS="WORKERFS",t.PROXYFS="PROXYFS"})(Ie||(Ie={}));const at=new Error("failed to get response body reader"),ct=new Error("failed to complete download"),ft="Content-Length",ut=t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const{result:_}=r;_ instanceof ArrayBuffer?e(new Uint8Array(_)):e(new Uint8Array)},r.onerror=_=>{var o,s;n(Error(`File could not be read! Code=${((s=(o=_==null?void 0:_.target)==null?void 0:o.error)==null?void 0:s.code)||-1}`))},r.readAsArrayBuffer(t)}),dt=async t=>{let e;if(typeof t=="string")/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t)?e=atob(t.split(",")[1]).split("").map(n=>n.charCodeAt(0)):e=await(await fetch(t)).arrayBuffer();else if(t instanceof URL)e=await(await fetch(t)).arrayBuffer();else if(t instanceof File||t instanceof Blob)e=await ut(t);else return new Uint8Array;return new Uint8Array(e)},ht=async(t,e)=>{var _;const n=await fetch(t);let r;try{const o=parseInt(n.headers.get(ft)||"-1"),s=(_=n.body)==null?void 0:_.getReader();if(!s)throw at;const l=[];let c=0;for(;;){const{done:i,value:u}=await s.read(),f=u?u.length:0;if(i){if(o!=-1&&o!==c)throw ct;e&&e({url:t,total:o,received:c,delta:f,done:i});break}l.push(u),c+=f,e&&e({url:t,total:o,received:c,delta:f,done:i})}const a=new Uint8Array(c);let h=0;for(const i of l)a.set(i,h),h+=i.length;r=a.buffer}catch(o){console.log("failed to send download progress event: ",o),r=await n.arrayBuffer()}return r},Ue=async(t,e,n=!1,r)=>{const _=n?await ht(t,r):await(await fetch(t)).arrayBuffer(),o=new Blob([_],{type:e});return URL.createObjectURL(o)};function pt(){const[t,e]=V(null),[n,r]=V(!1),[_,o]=V(!1),s=Ae(new lt),l=Ae(null),c=async()=>{try{await a()}catch(f){l.current.innerHTML="There was a problem converting the video to light mode. Check console logs",console.log(f)}},a=async()=>{const f=s.current;o(!0);try{await f.writeFile("input.mp4",await dt(t)),await f.exec(["-i","input.mp4","-vf","negate,hue=h=180,eq=contrast=1.2:saturation=1.1","output.mp4"]);const y=await f.readFile("output.mp4");e(URL.createObjectURL(new Blob([y.buffer],{type:"video/mp4"})))}catch(y){throw y}r(!0),o(!1)},h=async()=>{console.log("download placeholder");const f=document.createElement("a");f.href=t,f.setAttribute("download","ConvertedFileName.mp4"),document.body.appendChild(f),f.click(),f.parentNode.removeChild(f)};function i(){return t?b("div",{children:[b("video",{controls:!0,style:{"max-width":"80%"},src:t}),b("p",{ref:l})]}):b("p",{children:"Select a video to load"})}function u(){if(!_&&t)return n?b("button",{onClick:h,children:"Download"}):b("button",{onClick:c,children:"Convert to Light Mode"})}return b("div",{children:[b("input",{type:"file",accept:"video/mp4",onChange:async f=>{const y=f.target.files[0];if(r(!1),y){const k="https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm",g=s.current;g.on("log",({message:p})=>{l.current.innerHTML=p,console.log(p)});const v=URL.createObjectURL(y);await g.load({coreURL:await Ue(`${k}/ffmpeg-core.js`,"text/javascript"),wasmURL:await Ue(`${k}/ffmpeg-core.wasm`,"application/wasm")}),e(v)}}}),b(i,{}),b(u,{})]})}function mt(){return V(0),b("div",{children:[b("h1",{children:"Light Mode Wizard"}),b("div",{class:"card",children:b("p",{children:"Give me your dark mode videos and I'll give them light"})}),b(pt,{})]})}Je(b(mt,{}),document.getElementById("app"));
