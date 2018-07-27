function isset(){var t=arguments,e=t.length,n=0;if(0===e)throw new Error("Empty isset");for(;n!==e;){if(void 0===t[n]||null===t[n])return!1;n++}return!0}function randomInteger(t,e){var n=t-.5+Math.random()*(e-t+1);return n=Math.round(n),Math.abs(n)}function printTime(){var t=new Date,e="Last Sync: "+t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" @ "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();console.log(e)}function generateIndecies(t){var e=[];for(i=0;i<t;i++)e.push(i);return e.shuffle(),e}function clearStr(t){return t.trim().toLowerCase()}function reverseDataAttr(t,e){var n=t.getAttribute("data-"+e),r=t.getAttribute("data-reverse-"+e);t.setAttribute("data-"+e,r),t.setAttribute("data-reverse-"+e,n)}function myCallback(t,e){window[t].apply(this,e)}function sendRequest(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=document.querySelector('meta[name="csrf-token"]'),a=new XMLHttpRequest;a.open("POST",t,!1),a.setRequestHeader("X-CSRF-TOKEN",o.getAttribute("content")),a.setRequestHeader("Content-type","application/json; charset=utf-8"),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){if(""==a.responseText)return;var t=JSON.parse(a.responseText);isset(t.cb)?myCallback(t.cb,t.data):isset(r)?r[n](t.data):isset(t.data)&&isset(n)&&myCallback(n,t.data)}},a.send(e)}function loadDataFromPage(t){var e,n=document.querySelector('meta[name="csrf-token"]'),r=new XMLHttpRequest;return r.open("POST",t,!1),r.setRequestHeader("X-CSRF-TOKEN",n.getAttribute("content")),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&(e=JSON.parse(r.responseText))},r.send(),e}function loadDataFromCurrentPage(){var t,e=window.location.href,n=document.querySelector('meta[name="csrf-token"]'),r=new XMLHttpRequest;return r.open("POST",e,!1),r.setRequestHeader("X-CSRF-TOKEN",n.getAttribute("content")),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&(t=JSON.parse(r.responseText))},r.send(),t}function insertAfter(t,e){return e.parentNode.insertBefore(t,e.nextSibling)}function removeElementsByClass(t){for(var e=document.getElementsByClassName(t);e.length>0;)e[0].parentNode.removeChild(e[0])}function removeElementById(t){var e=document.getElementById(t);isset(e)&&e.parentNode.removeChild(e)}function toJSONString(t){for(var e={},n=t.querySelectorAll("input, select, textarea"),r=0;r<n.length;++r){var o=n[r],a=o.name,i=o.value;("checkbox"!=o.type||o.checked)&&(a&&(e[a]=i))}return e.id=t.id,JSON.stringify(e)}function showAuthAlert(){var t=document.querySelector(".alert-auth");isset(t)&&(t.style.display="block")}function animate(t){var e=t.timing,n=t.draw,r=t.duration,o=performance.now();requestAnimationFrame(function t(a){var i=(a-o)/r;i>1&&(i=1);var s=e(i);n(s),i<1&&requestAnimationFrame(t)})}function handleTouchStart(t){xDown=t.touches[0].clientX,yDown=t.touches[0].clientY}function handleTouchMove(t){if(xDown&&yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY,r=xDown-e,o=yDown-n;Math.abs(r)>Math.abs(o)&&t.target.className.indexOf("bilingual")>-1&&Text.switch(t),xDown=null,yDown=null}}function getPosition(t){for(var e=0,n=0;t;){if("BODY"==t.tagName){var r=t.scrollLeft||document.documentElement.scrollLeft,o=t.scrollTop||document.documentElement.scrollTop;e+=t.offsetLeft-r+t.clientLeft,n+=t.offsetTop-o+t.clientTop}else e+=t.offsetLeft-t.scrollLeft+t.clientLeft,n+=t.offsetTop-t.scrollTop+t.clientTop;t=t.offsetParent}return{x:e,y:n}}String.prototype.upFirstLetter=function(){return this.charAt(0).toUpperCase()+this.slice(1)},Array.prototype.diff=function(t){return this.filter(function(e){return t.indexOf(e)<0})},Array.prototype.shuffle=function(){var t,e,n;for(n=this.length;n;n--)t=Math.floor(Math.random()*n),e=this[n-1],this[n-1]=this[t],this[t]=e},Array.prototype.array_values=function(){var t=[];for(var e in this)t.push(this[e]);return t},Array.prototype.remove=function(t,e){var n=this.slice((e||t)+1||this.length);return this.length=t<0?this.length+t:t,this.push.apply(this,n)},Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),function(t){"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(t){for(var e=this,n=(e.document||e.ownerDocument).querySelectorAll(t),r=0;n[r]&&n[r]!==e;)++r;return Boolean(n[r])}),"function"!=typeof t.closest&&(t.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null})}(window.Element.prototype),SVGElement&&SVGElement.prototype&&(SVGElement.prototype.hasClass=function(t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(this.getAttribute("class"))},SVGElement.prototype.addClass=function(t){this.hasClass(t)||this.setAttribute("class",this.getAttribute("class")+" "+t)},SVGElement.prototype.removeClass=function(t){var e=this.getAttribute("class").replace(new RegExp("(\\s|^)"+t+"(\\s|$)","g"),"$2");this.hasClass(t)&&this.setAttribute("class",e)},SVGElement.prototype.toggleClass=function(t){this.hasClass(t)?this.removeClass(t):this.addClass(t)}),String.prototype.splice||(String.prototype.splice=function(t,e,n){return t<0?this+n:this.slice(0,t)+n+this.slice(t+Math.abs(e))}),String.prototype.nthIndexOf=function(t,e,n){for(e=e||0,n=n||0;e>0;){if((n=this.indexOf(t,n))<0)return-1;--e,++n}return n-1},String.prototype.trim||function(){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}();var Behavior={};Behavior.init=function(){window.addEventListener("click",Behavior.closeMenu);for(var t=document.querySelectorAll("*[data-behavior]"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-behavior");if("toggleSelf"==n)Behavior.toggleSelfInit(t[e],e);else{var r=t[e].getAttribute("data-actions");r=r.split(",");for(var o="",a=0;a<r.length;a++)o=n+r[a].upFirstLetter(),t[e].addEventListener(r[a],Behavior[o],!1)}}},Behavior.socialClick=function(t){var e=t.target.closest("[data-behavior]"),n=e.getAttribute("data-href");return window.open(n,"newwindow","toolbar=0,status=0,width=626,height=436"),!1},Behavior.submitClick=function(t){t.preventDefault();var e=t.target.closest("[data-behavior]"),n=e.getAttribute("data-form");document.getElementById(n).submit()},window.addEventListener("load",Behavior.init);var Comment={};Comment.init=function(){if(Comment.box=document.querySelector(".comments"),isset(Comment.box)){Comment.boxItems=document.querySelector(".comments__items");for(var t=document.querySelectorAll(".comments__form"),e=0;e<t.length;e++)t[e].addEventListener("submit",Comment.send);for(var n=document.getElementsByName("sort"),e=n.length;e--;)n[e].addEventListener("click",Comment.sort)}},Comment.add=function(t){var e=document.getElementById(t.id);e.querySelector("i").innerHTML=t.msg,Comment.boxItems.innerHTML=t.html+Comment.boxItems.innerHTML,e.reset()},Comment.sort=function(t){Comment.boxItems.setAttribute("data-sort",t.target.value)},Comment.send=function(t){t.preventDefault();var e=t.target,n=toJSONString(e);sendRequest(e.action,n,"add",Comment)},window.addEventListener("load",Comment.init);var Alert={};Alert.init=function(){for(var t=document.querySelectorAll(".alert__close"),e=0;e<t.length;e++)t[e].addEventListener("click",Alert.close)},Alert.close=function(t){var e=t.target.closest(".alert");if(isset(e.getAttribute("data-cookie"))){sendRequest(location.protocol+"//"+location.host+"/set",JSON.stringify({value:e.getAttribute("data-cookie")}))}e.style.display="none"};var pos,id;Alert.chatterPopup=function(t,e){var n=document.createElement("div");n.className="chatter-popup",n.innerHTML='<div class="chatter-popup__title"><i class="icon" data-icon="info_outline"></i>'+t+'</div><div class="chatter-popup__content">'+e+"</div>",document.body.appendChild(n),pos=-100,animate({duration:700,timing:function(t){return Math.pow(t,2)},draw:function(t){n.style.bottom=120*t-110+"px"}}),setTimeout(function(){n.remove()},6e3,n)},window.addEventListener("load",Alert.init),window.__forceSmoothScrollPolyfill__=!0;var xDown=null,yDown=null,Text={};Text.key=function(t){switch(t=t||window.event,t.keyCode){case 37:Text.prevBtn.click();break;case 39:Text.nextBtn.click();break;case 107:Text.box.querySelector(".book-reader__font-size[data-step='10']").click();break;case 109:Text.box.querySelector(".book-reader__font-size[data-step='-10']").click()}},Text.removePageFromText=function(t){var e=t.split(" ");return e.splice(-1,1),e.join(" ")+" "},Text.init=function(){if(Text.box=document.querySelector(".book-reader"),isset(Text.box)){document.onkeydown=Text.key,document.addEventListener("touchstart",handleTouchStart,!1),document.addEventListener("touchmove",handleTouchMove,!1),Text.unloaded=!1,Text.font=100,Text.h1=document.getElementsByTagName("h1")[0],Text.h1Base=Text.removePageFromText(Text.h1.innerHTML),Text.titleBase=Text.removePageFromText(document.title),Text.currentPage=parseInt(Text.box.getAttribute("data-page")),Text.data=bookData,Text.totalPages=bookTotalPages,Text.content=Text.box.querySelector(".book-reader__content"),Text.nextBtn=Text.box.querySelector(".next-page"),Text.nextBtn.addEventListener("click",Text.next),Text.nextBtn.addEventListener("click",Text.loadTimeOut),Text.prevBtn=Text.box.querySelector(".prev-page"),Text.prevBtn.addEventListener("click",Text.preview),Text.prevBtn.addEventListener("click",Text.loadTimeOut),Text.cps=Text.box.querySelector(".current-page");for(var t=Text.box.querySelectorAll(".book-reader__font-size"),e=0;e<t.length;e++)t[e].addEventListener("click",Text.changeFont);Text.view=Text.box.querySelector(".book-reader__view"),Text.view.addEventListener("click",Text.changeView);for(var n=document.getElementsByName("color"),e=n.length;e--;)n[e].addEventListener("click",Text.changeColorScheme);Text.bookmarkBox=Text.box.querySelector(".book-reader__bookmark"),isset(Text.bookmarkBox)&&(Text.bookmarkBox.addEventListener("click",Text.sendBookmark),isset(Text.bookmarkBox.getAttribute("data-page"))&&(Text.bookmarkPage=parseInt(Text.bookmarkBox.getAttribute("data-page")))),Text.setEventListeners()}},Text.changeColorScheme=function(t){document.body.className=t.target.value},Text.load=function(){Text.data=loadDataFromPage(Text.box.getAttribute("data-src")),Text.data=Text.data.data,Text.totalPages=Text.data.length,isset(Text.unloaded)&&(Text.unloaded=!1,Text.createPage())},Text.loadTimeOut=function(){Text.nextBtn.removeEventListener("click",Text.loadTimeOut),Text.prevBtn.removeEventListener("click",Text.loadTimeOut),setTimeout(function(){Text.load()},1200)},Text.createPage=function(){if(!Text.unloaded){var t,e;t=Text.currentPage+1,Text.cps.innerHTML=t,e=Text.box.getAttribute("data-src")+"/page-"+t,document.title=Text.titleBase+t,history.pushState(t,Text.h1Base+t,e),history.replaceState(t,Text.h1Base+t,e);for(var n=document.querySelectorAll(".current-page"),r=n.length;r--;)n[r].innerHTML=t;isset(Text.bookmarkBox)&&(Text.bookmarkPage==Text.currentPage?Text.bookmarkBox.setAttribute("data-state","on"):Text.bookmarkBox.setAttribute("data-state","")),isset(Text.data[Text.currentPage])?(Text.content.innerHTML=Text.data[Text.currentPage],Text.setEventListeners()):(Text.unloaded=!0,Text.content.innerHTML=Text.content.getAttribute("data-help")),Text.box.scrollIntoView()}},Text.next=function(t){t.preventDefault(),Text.unloaded||Text.nextBtn.classList.contains("disabled")||(Text.currentPage++,Text.btnDisabled(),Text.createPage())},Text.preview=function(t){t.preventDefault(),Text.unloaded||Text.prevBtn.classList.contains("disabled")||(Text.currentPage--,Text.btnDisabled(),Text.createPage())},Text.btnDisabled=function(){Text.currentPage+1==Text.totalPages?Text.nextBtn.className+=" disabled":(Text.nextBtn.classList.remove("disabled"),currentPage=Text.currentPage+2,Text.nextBtn.href=Text.box.getAttribute("data-src")+"/page-"+currentPage),0==Text.currentPage?Text.prevBtn.className+=" disabled":1==Text.currentPage?Text.prevBtn.href=Text.box.getAttribute("data-src"):(Text.prevBtn.classList.remove("disabled"),currentPage=Text.currentPage,Text.prevBtn.href=Text.box.getAttribute("data-src")+"/page-"+currentPage)},Text.changeFont=function(t){var e=parseInt(t.target.getAttribute("data-step"));Text.font+e>150||Text.font+e<70||(Text.font+=e,lineHeight=1.45*Text.font,lineHeight<120&&(lineHeight=120),lineHeight>150&&(lineHeight=150),Text.content.style.fontSize=Text.font+"%",Text.content.style.lineHeight=lineHeight+"%")},Text.changeView=function(t){if("split"==Text.content.getAttribute("data-view")){Text.content.setAttribute("data-view","full"),t.target.setAttribute("data-state","");var e=document.querySelector("[data-target=full]");isset(e)&&e.classList.remove("hidden")}else Text.content.setAttribute("data-view","split"),t.target.setAttribute("data-state","on")},Text.changeShowMode=function(t){"on"==t.target.getAttribute("data-state")?(document.body.setAttribute("data-mode",""),t.target.setAttribute("data-state","")):(document.body.setAttribute("data-mode","dark"),t.target.setAttribute("data-state","on"))},Text.setBookmark=function(t){if(t)Text.bookmarkPage=Text.currentPage,Text.bookmarkBox.setAttribute("data-state","on");else{var e=document.querySelector(".alert-bookmark");isset(e)&&(e.style.display="block")}},Text.sendBookmark=function(){sendRequest(window.location.href+"/b",{},"setBookmark",Text)},Text.switch=function(t){if("split"!=Text.content.getAttribute("data-view")){var e=t.target.closest(".bilingual");"on"==e.getAttribute("data-translate")?e.setAttribute("data-translate",""):e.setAttribute("data-translate","on")}},Text.setEventListeners=function(){for(var t=Text.content.querySelectorAll(".bilingual__switch"),e=0;e<t.length;e++)t[e].addEventListener("click",Text.switch);t=Text.content.querySelectorAll(".bilingual__original");for(var e=0;e<t.length;e++)t[e].addEventListener("click",Text.getTranslate)},Text.getTranslate=function(t){var e=window.getSelection();if(!e||e.rangeCount<1)return!0;var n,r=e.getRangeAt(0),o=e.anchorNode,a=/[a-zA-Zéâêîôûàèùëïüÿçáíñóúìòöäß\-']/;for(r.setStart(o,r.startOffset),r.setEnd(o,r.endOffset);0!==r.startOffset;)if(r.setStart(o,r.startOffset-1),n=r.toString(),-1==n.charAt(0).search(a)){r.setStart(o,r.startOffset+1);break}for(;r.endOffset<o.length;)if(r.setEnd(o,r.endOffset+1),n=r.toString(),-1==n.slice(-1).search(a)){r.setEnd(o,r.endOffset-1);break}sendRequest(Text.box.getAttribute("data-translate"),JSON.stringify({text:r.toString(),clientY:t.clientY,y:t.pageY}),"showTranslate",Text)},Text.showTranslate=function(t){var e,n=Text.box.querySelector(".dictionary");n.style.display="block",Text.box.querySelector(".dictionary .dictionary__content").innerHTML=t.html,(e=window.innerHeight-t.clientY-n.clientHeight)<0&&window.scrollTo(0,t.y-t.clientY+n.clientHeight+20)},Text.dictionaryPosition=function(){var t,e=document.querySelector(".dictionary"),n=document.querySelector(".book-reader__pager");"fixed"==e.style.position?(dY=e.offsetTop+e.clientHeight+5,t=dY-getPosition(n).y):(d=getPosition(e),t=document.querySelector(".container__bottom").clientHeight+n.clientHeight-getPosition(e).y+e.clientHeight),e.style.position=t>0?"relative":"fixed"},window.addEventListener("load",Text.init);var LazyImage={};LazyImage.init=function(){for(var t=document.querySelectorAll("*[data-load-image]"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-load-image");"IMG"==t[e].tagName?t[e].src=n:t[e].style.backgroundImage="url('"+n+"')"}},window.addEventListener("load",LazyImage.init);var Rating={};Rating.init=function(){if(Rating.box=document.querySelector(".rating"),isset(Rating.box))for(var t=Rating.box.querySelectorAll(".stars__out"),e=0;e<t.length;e++)t[e].addEventListener("click",Rating.vote)},Rating.vote=function(t){sendRequest(window.location.href+"/r",JSON.stringify({value:t.target.closest(".stars__out").getAttribute("data-value")}),"result",Rating)},Rating.result=function(t){if(t&&(Rating.box.querySelector(".rating__text").innerHTML=t.m,t.v)){var e=".stars__out[data-value='"+t.v+"']";Rating.box.querySelector(e).classList+=" active",Rating.box.querySelector(".stars").classList+=" voted";for(var n=Rating.box.querySelectorAll(".stars__out"),r=0;r<n.length;r++)n[r].removeEventListener("click",Rating.vote)}},window.addEventListener("load",Rating.init);