import{L as Qc,c as or}from"./pixel-D5hYLSCm.js";import{s as ea,K as th,b as eh,P as nh}from"./alpha-DK8uVy3-.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="160",ih=0,na=1,sh=2,Yl=1,ql=2,Cn=3,qn=0,Ge=1,nn=2,Nn=0,Gi=1,Fn=2,ia=3,sa=4,rh=5,si=100,oh=101,ah=102,ra=103,oa=104,lh=200,ch=201,hh=202,uh=203,fo=204,po=205,fh=206,dh=207,ph=208,mh=209,gh=210,_h=211,xh=212,vh=213,Mh=214,Sh=0,yh=1,Eh=2,ar=3,bh=4,Th=5,wh=6,Ah=7,Kl=0,Rh=1,Ch=2,Xn=0,jl=1,$l=2,Zl=3,Lo=4,Ph=5,Jl=6,Ql=300,Xi=301,Yi=302,mo=303,go=304,xr=306,lr=1e3,un=1001,_o=1002,Le=1003,aa=1004,Tr=1005,en=1006,Lh=1007,vs=1008,Yn=1009,Dh=1010,Uh=1011,Do=1012,tc=1013,Vn=1014,Wn=1015,vn=1016,ec=1017,nc=1018,li=1020,Ih=1021,fn=1023,Nh=1024,Fh=1025,ci=1026,qi=1027,Oh=1028,ic=1029,Bh=1030,sc=1031,rc=1033,wr=33776,Ar=33777,Rr=33778,Cr=33779,la=35840,ca=35841,ha=35842,ua=35843,oc=36196,fa=37492,da=37496,pa=37808,ma=37809,ga=37810,_a=37811,xa=37812,va=37813,Ma=37814,Sa=37815,ya=37816,Ea=37817,ba=37818,Ta=37819,wa=37820,Aa=37821,Pr=36492,Ra=36494,Ca=36495,zh=36283,Pa=36284,La=36285,Da=36286,ac=3e3,hi=3001,kh=3200,Gh=3201,lc=0,Hh=1,sn="",fe="srgb",On="srgb-linear",Uo="display-p3",vr="display-p3-linear",cr="linear",te="srgb",hr="rec709",ur="p3",_i=7680,Ua=519,Vh=512,Wh=513,Xh=514,cc=515,Yh=516,qh=517,Kh=518,jh=519,Ia=35044,Na=35048,Fa="300 es",xo=1035,Un=2e3,fr=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,vo=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function $h(n,t){return(n%t+t)%t}function Dr(n,t,e){return(1-e)*n+e*t}function Oa(n){return(n&n-1)===0&&n!==0}function Mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,s,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],f=s[6],y=s[1],v=s[4],A=s[7],D=s[2],w=s[5],T=s[8];return r[0]=o*_+a*y+l*D,r[3]=o*p+a*v+l*w,r[6]=o*f+a*A+l*T,r[1]=c*_+h*y+u*D,r[4]=c*p+h*v+u*w,r[7]=c*f+h*A+u*T,r[2]=d*_+m*y+g*D,r[5]=d*p+m*v+g*w,r[8]=d*f+m*A+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Vt;function hc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zh(){const n=dr("canvas");return n.style.display="block",n}const Ba={};function ms(n){n in Ba||(Ba[n]=!0,console.warn(n))}const za=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ka=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[On]:{transfer:cr,primaries:hr,toReference:n=>n,fromReference:n=>n},[fe]:{transfer:te,primaries:hr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vr]:{transfer:cr,primaries:ur,toReference:n=>n.applyMatrix3(ka),fromReference:n=>n.applyMatrix3(za)},[Uo]:{transfer:te,primaries:ur,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ka),fromReference:n=>n.applyMatrix3(za).convertLinearToSRGB()}},Jh=new Set([On,vr]),qt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Rs[t].toReference,s=Rs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Rs[n].primaries},getTransfer:function(n){return n===sn?cr:Rs[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xi;class uc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=dr("canvas")),xi.width=t.width,xi.height=t.height;const i=xi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qh=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nr(s[o].image)):r.push(Nr(s[o]))}else r=Nr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Nr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class He extends Zi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=un,s=un,r=en,o=vs,a=fn,l=Yn,c=He.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ts(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===hi?fe:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?hi:ac}set encoding(t){ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===hi?fe:sn}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ql;He.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,i=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,A=(m+1)/2,D=(f+1)/2,w=(h+d)/4,T=(u+_)/4,X=(g+p)/4;return v>A&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=T/i):A>D?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=w/s,r=X/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=X/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hi?fe:sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new He(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends eu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dc extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nu extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),w=Math.atan2(D,f*y);p=Math.sin(p*w)/D,a=Math.sin(a*w)/D}const A=a*y;if(l=l*p+d*A,c=c*p+m*A,h=h*p+g*A,u=u*p+_*A,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new C,Ga=new mi;class gi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ps.subVectors(this.max,rs),vi.subVectors(t.a,rs),Mi.subVectors(t.b,rs),Si.subVectors(t.c,rs),Bn.subVectors(Mi,vi),zn.subVectors(Si,Mi),Zn.subVectors(vi,Si);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Zn.z,Zn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Zn.z,0,-Zn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Zn.y,Zn.x,0];return!Or(e,vi,Mi,Si,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,vi,Mi,Si,Ps))?!1:(Ls.crossVectors(Bn,zn),e=[Ls.x,Ls.y,Ls.z],Or(e,vi,Mi,Si,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,Cs=new gi,vi=new C,Mi=new C,Si=new C,Bn=new C,zn=new C,Zn=new C,rs=new C,Ps=new C,Ls=new C,Jn=new C;function Or(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Jn.fromArray(n,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=i.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const iu=new gi,os=new C,Br=new C;class Ji{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):iu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Br)),this.expandByPoint(os.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,zr=new C,Ds=new C,kn=new C,kr=new C,Us=new C,Gr=new C;class pc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=kn.dot(this.direction),l=-kn.dot(Ds),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zr).addScaledVector(Ds,d),m}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,s,r){kr.subVectors(e,t),Us.subVectors(i,t),Gr.crossVectors(kr,Us);let o=this.direction.dot(Gr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(Us.crossVectors(kn,Us));if(l<0)return null;const c=a*this.direction.dot(kr.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(Gr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(i,We),Gn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(i,We)),Gn.normalize(),Is.crossVectors(We,Gn),s[0]=Gn.x,s[4]=Is.x,s[8]=We.x,s[1]=Gn.y,s[5]=Is.y,s[9]=We.y,s[2]=Gn.z,s[6]=Is.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],y=i[3],v=i[7],A=i[11],D=i[15],w=s[0],T=s[4],X=s[8],M=s[12],b=s[1],z=s[5],V=s[9],Z=s[13],L=s[2],N=s[6],W=s[10],K=s[14],q=s[3],Y=s[7],$=s[11],et=s[15];return r[0]=o*w+a*b+l*L+c*q,r[4]=o*T+a*z+l*N+c*Y,r[8]=o*X+a*V+l*W+c*$,r[12]=o*M+a*Z+l*K+c*et,r[1]=h*w+u*b+d*L+m*q,r[5]=h*T+u*z+d*N+m*Y,r[9]=h*X+u*V+d*W+m*$,r[13]=h*M+u*Z+d*K+m*et,r[2]=g*w+_*b+p*L+f*q,r[6]=g*T+_*z+p*N+f*Y,r[10]=g*X+_*V+p*W+f*$,r[14]=g*M+_*Z+p*K+f*et,r[3]=y*w+v*b+A*L+D*q,r[7]=y*T+v*z+A*N+D*Y,r[11]=y*X+v*V+A*W+D*$,r[15]=y*M+v*Z+A*K+D*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],y=u*p*c-_*d*c+_*l*m-a*p*m-u*l*f+a*d*f,v=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,A=h*_*c-g*u*c+g*a*m-o*_*m-h*a*f+o*u*f,D=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,w=e*y+i*v+s*A+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=y*T,t[1]=(_*d*r-u*p*r-_*s*m+i*p*m+u*s*f-i*d*f)*T,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*f+i*l*f)*T,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*m-i*l*m)*T,t[4]=v*T,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*f+e*d*f)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*T,t[8]=A*T,t[9]=(g*u*r-h*_*r-g*i*m+e*_*m+h*i*f-e*u*f)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*T,t[12]=D*T,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*p+e*u*p)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,p=o*u,f=a*u,y=l*c,v=l*h,A=l*u,D=i.x,w=i.y,T=i.z;return s[0]=(1-(_+f))*D,s[1]=(m+A)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(m-A)*w,s[5]=(1-(d+f))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+v)*T,s[9]=(p-y)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Un){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let m,g;if(a===Un)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Un){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,m=(i+s)*h;let g,_;if(a===Un)g=(o+r)*u,_=-2*u;else if(a===fr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const yi=new C,ln=new Kt,su=new C(0,0,0),ru=new C(1,1,1),Gn=new C,Is=new C,We=new C,Ha=new Kt,Va=new mi;class Qi{constructor(t=0,e=0,i=0,s=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ha,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ou=0;const Wa=new C,Ei=new mi,bn=new Kt,Ns=new C,as=new C,au=new C,lu=new mi,Xa=new C(1,0,0),Ya=new C(0,1,0),qa=new C(0,0,1),cu={type:"added"},hu={type:"removed"};class ge extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new C,e=new Qi,i=new mi,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Vt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(Ya,t)}rotateZ(t){return this.rotateOnAxis(qa,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(Ya,t)}translateZ(t){return this.translateOnAxis(qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ns.copy(t):Ns.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(as,Ns,this.up):bn.lookAt(Ns,as,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(bn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ge.DEFAULT_UP=new C(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new C,Tn=new C,Hr=new C,wn=new C,bi=new C,Ti=new C,Ka=new C,Vr=new C,Wr=new C,Xr=new C;let Fs=!1;class hn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){cn.subVectors(s,e),Tn.subVectors(i,e),Hr.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Tn),l=cn.dot(Hr),c=Tn.dot(Tn),h=Tn.dot(Hr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,i,s,r,o,a,l){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static isFrontFacing(t,e,i,s){return cn.subVectors(i,e),Tn.subVectors(t,e),cn.cross(Tn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),cn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,i),Ti.subVectors(r,i),Vr.subVectors(t,i);const l=bi.dot(Vr),c=Ti.dot(Vr);if(l<=0&&c<=0)return e.copy(i);Wr.subVectors(t,s);const h=bi.dot(Wr),u=Ti.dot(Wr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(bi,o);Xr.subVectors(t,r);const m=bi.dot(Xr),g=Ti.dot(Xr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ti,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ka.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Ka,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(bi,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Yr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=$h(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return qt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ze(Ce.r*255,0,255))*65536+Math.round(ze(Ce.g*255,0,255))*256+Math.round(ze(Ce.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=fe){qt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,s=Ce.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Os);const i=Dr(Hn.h,Os.h,e),s=Dr(Hn.s,Os.s,e),r=Dr(Hn.l,Os.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Et;Et.NAMES=gc;let uu=0;class ts extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Gi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fo&&(i.blendSrc=this.blendSrc),this.blendDst!==po&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pe extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new C,Bs=new Tt;class be{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class Io extends be{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class No extends be{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends be{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fu=0;const Ze=new Kt,qr=new ge,wi=new C,Xe=new gi,ls=new gi,Se=new C;class Ne extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?No:Io)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Xe.min,ls.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,ls.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(ls.min),Xe.expandByPoint(ls.max))}Xe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),Se.add(wi)),s=Math.max(s,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new C,h[b]=new C;const u=new C,d=new C,m=new C,g=new Tt,_=new Tt,p=new Tt,f=new C,y=new C;function v(b,z,V){u.fromArray(s,b*3),d.fromArray(s,z*3),m.fromArray(s,V*3),g.fromArray(o,b*2),_.fromArray(o,z*2),p.fromArray(o,V*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const Z=1/(_.x*p.y-p.x*_.y);isFinite(Z)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Z),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Z),c[b].add(f),c[z].add(f),c[V].add(f),h[b].add(y),h[z].add(y),h[V].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let b=0,z=A.length;b<z;++b){const V=A[b],Z=V.start,L=V.count;for(let N=Z,W=Z+L;N<W;N+=3)v(i[N+0],i[N+1],i[N+2])}const D=new C,w=new C,T=new C,X=new C;function M(b){T.fromArray(r,b*3),X.copy(T);const z=c[b];D.copy(z),D.sub(T.multiplyScalar(T.dot(z))).normalize(),w.crossVectors(X,z);const Z=w.dot(h[b])<0?-1:1;l[b*4]=D.x,l[b*4+1]=D.y,l[b*4+2]=D.z,l[b*4+3]=Z}for(let b=0,z=A.length;b<z;++b){const V=A[b],Z=V.start,L=V.count;for(let N=Z,W=Z+L;N<W;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new Kt,Qn=new pc,zs=new Ji,$a=new C,Ai=new C,Ri=new C,Ci=new C,Kr=new C,ks=new C,Gs=new Tt,Hs=new Tt,Vs=new Tt,Za=new C,Ja=new C,Qa=new C,Ws=new C,Xs=new C;class Xt extends ge{constructor(t=new Ne,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,t),o?ks.addScaledVector(Kr,h):ks.addScaledVector(Kr.sub(e),h))}e.add(ks)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(zs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(zs,$a)===null||Qn.origin.distanceToSquared($a)>(t.far-t.near)**2))&&(ja.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,D=v;A<D;A+=3){const w=a.getX(A),T=a.getX(A+1),X=a.getX(A+2);s=Ys(this,f,t,i,c,h,u,w,T,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=a.getX(p),v=a.getX(p+1),A=a.getX(p+2);s=Ys(this,o,t,i,c,h,u,y,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,D=v;A<D;A+=3){const w=A,T=A+1,X=A+2;s=Ys(this,f,t,i,c,h,u,w,T,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,A=p+2;s=Ys(this,o,t,i,c,h,u,y,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function du(n,t,e,i,s,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:n}}function Ys(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,Ri),n.getVertexPosition(c,Ci);const h=du(n,t,e,i,Ai,Ri,Ci,Ws);if(h){s&&(Gs.fromBufferAttribute(s,a),Hs.fromBufferAttribute(s,l),Vs.fromBufferAttribute(s,c),h.uv=hn.getInterpolation(Ws,Ai,Ri,Ci,Gs,Hs,Vs,new Tt)),r&&(Gs.fromBufferAttribute(r,a),Hs.fromBufferAttribute(r,l),Vs.fromBufferAttribute(r,c),h.uv1=hn.getInterpolation(Ws,Ai,Ri,Ci,Gs,Hs,Vs,new Tt),h.uv2=h.uv1),o&&(Za.fromBufferAttribute(o,a),Ja.fromBufferAttribute(o,l),Qa.fromBufferAttribute(o,c),h.normal=hn.getInterpolation(Ws,Ai,Ri,Ci,Za,Ja,Qa,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};hn.getNormal(Ai,Ri,Ci,u.normal),h.face=u}return h}class Te extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(_,p,f,y,v,A,D,w,T,X,M){const b=A/T,z=D/X,V=A/2,Z=D/2,L=w/2,N=T+1,W=X+1;let K=0,q=0;const Y=new C;for(let $=0;$<W;$++){const et=$*z-Z;for(let ct=0;ct<N;ct++){const H=ct*b-V;Y[_]=H*y,Y[p]=et*v,Y[f]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[f]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ct/T),u.push(1-$/X),K+=1}}for(let $=0;$<X;$++)for(let et=0;et<T;et++){const ct=d+et+N*$,H=d+et+N*($+1),j=d+(et+1)+N*($+1),at=d+(et+1)+N*$;l.push(ct,H,at),l.push(H,j,at),q+=6}a.addGroup(m,q,M),m+=q,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=Ki(n[e]);for(const s in i)t[s]=i[s]}return t}function pu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _c(n){return n.getRenderTarget()===null?n.outputColorSpace:qt.workingColorSpace}const Ms={clone:Ki,merge:Ie};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends xc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class _u extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new qe(Pi,Li,t,e);r.layers=this.layers,this.add(r);const o=new qe(Pi,Li,t,e);o.layers=this.layers,this.add(o);const a=new qe(Pi,Li,t,e);a.layers=this.layers,this.add(a);const l=new qe(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new qe(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vc extends He{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xu extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===hi?fe:sn),this.texture=new vc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Te(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Nn});r.uniforms.tEquirect.value=e;const o=new Xt(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=en),new _u(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const jr=new C,vu=new C,Mu=new Vt;class ni{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=jr.subVectors(i,e).cross(vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(jr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Ji,qs=new C;class Fo{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],y=s[13],v=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,p-m,A-f).normalize(),i[1].setComponents(l+r,d+c,p+m,A+f).normalize(),i[2].setComponents(l+o,d+h,p+g,A+y).normalize(),i[3].setComponents(l-o,d-h,p-g,A-y).normalize(),i[4].setComponents(l-a,d-u,p-_,A-v).normalize(),e===Un)i[5].setComponents(l+a,d+u,p+_,A+v).normalize();else if(e===fr)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Su(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];e?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class dn extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-o;for(let v=0;v<c;v++){const A=v*u-r;g.push(A,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const v=y+c*f,A=y+c*(f+1),D=y+1+c*(f+1),w=y+1+c*f;m.push(v,A,w),m.push(A,D,w)}this.setIndex(m),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:yu,alphahash_pars_fragment:Eu,alphamap_fragment:bu,alphamap_pars_fragment:Tu,alphatest_fragment:wu,alphatest_pars_fragment:Au,aomap_fragment:Ru,aomap_pars_fragment:Cu,batching_pars_vertex:Pu,batching_vertex:Lu,begin_vertex:Du,beginnormal_vertex:Uu,bsdfs:Iu,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:ku,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:Vu,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:qu,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:$u,emissivemap_pars_fragment:Zu,colorspace_fragment:Ju,colorspace_pars_fragment:Qu,envmap_fragment:tf,envmap_common_pars_fragment:ef,envmap_pars_fragment:nf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:rf,fog_vertex:of,fog_pars_vertex:af,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:hf,lightmap_fragment:uf,lightmap_pars_fragment:ff,lights_lambert_fragment:df,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:yf,lights_fragment_begin:Ef,lights_fragment_maps:bf,lights_fragment_end:Tf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:Pf,map_pars_fragment:Lf,map_particle_fragment:Df,map_particle_pars_fragment:Uf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Nf,morphcolor_vertex:Ff,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:kf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Vf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:jf,opaque_fragment:$f,packing:Zf,premultiplied_alpha_fragment:Jf,project_vertex:Qf,dithering_fragment:td,dithering_pars_fragment:ed,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:rd,shadowmap_vertex:od,shadowmask_pars_fragment:ad,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:fd,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:xd,uv_pars_vertex:vd,uv_vertex:Md,worldpos_vertex:Sd,background_vert:yd,background_frag:Ed,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:wd,cube_frag:Ad,depth_vert:Rd,depth_frag:Cd,distanceRGBA_vert:Pd,distanceRGBA_frag:Ld,equirect_vert:Dd,equirect_frag:Ud,linedashed_vert:Id,linedashed_frag:Nd,meshbasic_vert:Fd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:zd,meshmatcap_vert:kd,meshmatcap_frag:Gd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:Yd,meshphysical_frag:qd,meshtoon_vert:Kd,meshtoon_frag:jd,points_vert:$d,points_frag:Zd,shadow_vert:Jd,shadow_frag:Qd,sprite_vert:tp,sprite_frag:ep},st={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},gn={basic:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ie([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ie([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ie([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ie([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ie([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ie([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ie([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ie([st.lights,st.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};gn.physical={uniforms:Ie([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ks={r:0,b:0,g:0};function np(n,t,e,i,s,r,o){const a=new Et(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xr)?(h===void 0&&(h=new Xt(new Te(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Ki(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=qt.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new dn(2,2),new ke({name:"BackgroundMaterial",uniforms:Ki(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Ks,_c(n)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function ip(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(L,N,W,K,q){let Y=!1;if(o){const $=_(K,W,N);c!==$&&(c=$,m(c.object)),Y=f(L,K,W,q),Y&&y(L,K,W,q)}else{const $=N.wireframe===!0;(c.geometry!==K.id||c.program!==W.id||c.wireframe!==$)&&(c.geometry=K.id,c.program=W.id,c.wireframe=$,Y=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,X(L,N,W,K),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,W){const K=W.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Y=q[N.id];Y===void 0&&(Y={},q[N.id]=Y);let $=Y[K];return $===void 0&&($=p(d()),Y[K]=$),$}function p(L){const N=[],W=[],K=[];for(let q=0;q<s;q++)N[q]=0,W[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,N,W,K){const q=c.attributes,Y=N.attributes;let $=0;const et=W.getAttributes();for(const ct in et)if(et[ct].location>=0){const j=q[ct];let at=Y[ct];if(at===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),j===void 0||j.attribute!==at||at&&j.data!==at.data)return!0;$++}return c.attributesNum!==$||c.index!==K}function y(L,N,W,K){const q={},Y=N.attributes;let $=0;const et=W.getAttributes();for(const ct in et)if(et[ct].location>=0){let j=Y[ct];j===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const at={};at.attribute=j,j&&j.data&&(at.data=j.data),q[ct]=at,$++}c.attributes=q,c.attributesNum=$,c.index=K}function v(){const L=c.newAttributes;for(let N=0,W=L.length;N<W;N++)L[N]=0}function A(L){D(L,0)}function D(L,N){const W=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;W[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),q[L]!==N&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),q[L]=N)}function w(){const L=c.newAttributes,N=c.enabledAttributes;for(let W=0,K=N.length;W<K;W++)N[W]!==L[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function T(L,N,W,K,q,Y,$){$===!0?n.vertexAttribIPointer(L,N,W,q,Y):n.vertexAttribPointer(L,N,W,K,q,Y)}function X(L,N,W,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=K.attributes,Y=W.getAttributes(),$=N.defaultAttributeValues;for(const et in Y){const ct=Y[et];if(ct.location>=0){let H=q[et];if(H===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const j=H.normalized,at=H.itemSize,mt=e.get(H);if(mt===void 0)continue;const dt=mt.buffer,Ct=mt.type,Pt=mt.bytesPerElement,Mt=i.isWebGL2===!0&&(Ct===n.INT||Ct===n.UNSIGNED_INT||H.gpuType===tc);if(H.isInterleavedBufferAttribute){const St=H.data,I=St.stride,le=H.offset;if(St.isInstancedInterleavedBuffer){for(let xt=0;xt<ct.locationSize;xt++)D(ct.location+xt,St.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let xt=0;xt<ct.locationSize;xt++)A(ct.location+xt);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let xt=0;xt<ct.locationSize;xt++)T(ct.location+xt,at/ct.locationSize,Ct,j,I*Pt,(le+at/ct.locationSize*xt)*Pt,Mt)}else{if(H.isInstancedBufferAttribute){for(let St=0;St<ct.locationSize;St++)D(ct.location+St,H.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let St=0;St<ct.locationSize;St++)A(ct.location+St);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let St=0;St<ct.locationSize;St++)T(ct.location+St,at/ct.locationSize,Ct,j,at*Pt,at/ct.locationSize*St*Pt,Mt)}}else if($!==void 0){const j=$[et];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ct.location,j);break;case 3:n.vertexAttrib3fv(ct.location,j);break;case 4:n.vertexAttrib4fv(ct.location,j);break;default:n.vertexAttrib1fv(ct.location,j)}}}}w()}function M(){V();for(const L in a){const N=a[L];for(const W in N){const K=N[W];for(const q in K)g(K[q].object),delete K[q];delete N[W]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const W in N){const K=N[W];for(const q in K)g(K[q].object),delete K[q];delete N[W]}delete a[L.id]}function z(L){for(const N in a){const W=a[N];if(W[L.id]===void 0)continue;const K=W[L.id];for(const q in K)g(K[q].object),delete K[q];delete W[L.id]}}function V(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:A,disableUnusedAttributes:w}}function sp(n,t,e,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function rp(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=o||t.has("OES_texture_float"),D=v&&A,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:w}}function op(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ni,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:i,v=y*4;let A=f.clippingState||null;l.value=A,A=h(g,d,v,m);for(let D=0;D!==v;++D)A[D]=e[D];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,A=m;v!==_;++v,A+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ap(n){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=Xi:a===go&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mo||a===go)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xu(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Oo extends xc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,tl=[.125,.215,.35,.446,.526,.582],ri=20,$r=new Oo,el=new Et;let Zr=null,Jr=0,Qr=0;const ii=(1+Math.sqrt(5))/2,Di=1/ii,nl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ii,Di),new C(0,ii,-Di),new C(Di,0,ii),new C(-Di,0,ii),new C(ii,Di,0),new C(-ii,Di,0)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Jr,Qr),t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:vn,format:fn,colorSpace:On,depthBuffer:!1},s=sl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=cp(r,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,i,s){const a=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(el),h.toneMapping=Xn,h.autoClear=!1;const m=new pe({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Xt(new Te,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(el),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;js(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,$r)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nl[(s-1)%nl.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ri;p>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const f=[];let y=0;for(let T=0;T<ri;++T){const X=T/_,M=Math.exp(-X*X/2);f.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const A=this._sizeLods[s],D=3*A*(s>v-Oi?s-v+Oi:0),w=4*(this._cubeSize-A);js(e,D,w,3*A,2*A),l.setRenderTarget(e),l.render(u,$r)}}function lp(n){const t=[],e=[],i=[];let s=n;const r=n-Oi+1+tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Oi?l=tl[o-n+Oi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,X=w>2?0:-1,M=[T,X,0,T+2/3,X,0,T+2/3,X+1,0,T,X,0,T+2/3,X+1,0,T,X+1,0];y.set(M,_*g*w),v.set(d,p*g*w);const b=[w,w,w,w,w,w];A.set(b,f*g*w)}const D=new Ne;D.setAttribute("position",new be(y,_)),D.setAttribute("uv",new be(v,p)),D.setAttribute("faceIndex",new be(A,f)),t.push(D),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sl(n,t,e){const i=new rn(n,t,e);return i.texture.mapping=xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cp(n,t,e){const i=new Float32Array(ri),s=new C(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function rl(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ol(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mo||l===go,h=l===Xi||l===Yi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new il(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new il(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function up(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fp(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,A=y.length;v<A;v+=3){const D=y[v+0],w=y[v+1],T=y[v+2];d.push(D,w,w,T,T,D)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,A=y.length/3-1;v<A;v+=3){const D=v+0,w=v+1,T=v+2;d.push(D,w,w,T,T,D)}}else return;const p=new(hc(d)?No:Io)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dp(n,t,e,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function pp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function mp(n,t){return n[0]-t[0]}function gp(n,t){return Math.abs(t[1])-Math.abs(n[1])}function _p(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ie,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let L=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let X=0;y===!0&&(X=1),v===!0&&(X=2),A===!0&&(X=3);let M=h.attributes.position.count*X,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const z=new Float32Array(M*b*4*g),V=new dc(z,M,b,g);V.type=Wn,V.needsUpdate=!0;const Z=X*4;for(let N=0;N<g;N++){const W=D[N],K=w[N],q=T[N],Y=M*b*4*N;for(let $=0;$<W.count;$++){const et=$*Z;y===!0&&(o.fromBufferAttribute(W,$),z[Y+et+0]=o.x,z[Y+et+1]=o.y,z[Y+et+2]=o.z,z[Y+et+3]=0),v===!0&&(o.fromBufferAttribute(K,$),z[Y+et+4]=o.x,z[Y+et+5]=o.y,z[Y+et+6]=o.z,z[Y+et+7]=0),A===!0&&(o.fromBufferAttribute(q,$),z[Y+et+8]=o.x,z[Y+et+9]=o.y,z[Y+et+10]=o.z,z[Y+et+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:V,size:new Tt(M,b)},r.set(h,_),h.addEventListener("dispose",L)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){const A=g[v];A[0]=v,A[1]=d[v]}g.sort(gp);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mp);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const A=a[v],D=A[0],w=A[1];D!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+v)!==_[D]&&h.setAttribute("morphTarget"+v,_[D]),p&&h.getAttribute("morphNormal"+v)!==p[D]&&h.setAttribute("morphNormal"+v,p[D]),s[v]=w,f+=w):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function xp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Sc extends He{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:ci,h!==ci&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ci&&(i=Vn),i===void 0&&h===qi&&(i=li),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yc=new He,Ec=new Sc(1,1);Ec.compareFunction=cc;const bc=new dc,Tc=new nu,wc=new vc,al=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mr(n,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function Sp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function Ep(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;ul.set(i),n.uniformMatrix2fv(this.addr,!1,ul),xe(e,i)}}function bp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;hl.set(i),n.uniformMatrix3fv(this.addr,!1,hl),xe(e,i)}}function Tp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;cl.set(i),n.uniformMatrix4fv(this.addr,!1,cl),xe(e,i)}}function wp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function Rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function Cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function Pp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function Up(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function Ip(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Ec:yc;e.setTexture2D(t||r,s)}function Np(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tc,s)}function Fp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wc,s)}function Op(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||bc,s)}function Bp(n){switch(n){case 5126:return vp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return Ep;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return wp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(n,t){n.uniform1fv(this.addr,t)}function kp(n,t){const e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function Gp(n,t){const e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function Hp(n,t){const e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function Vp(n,t){const e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Wp(n,t){const e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xp(n,t){const e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yp(n,t){n.uniform1iv(this.addr,t)}function qp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function jp(n,t){n.uniform4iv(this.addr,t)}function $p(n,t){n.uniform1uiv(this.addr,t)}function Zp(n,t){n.uniform2uiv(this.addr,t)}function Jp(n,t){n.uniform3uiv(this.addr,t)}function Qp(n,t){n.uniform4uiv(this.addr,t)}function tm(n,t,e){const i=this.cache,s=t.length,r=Mr(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yc,r[o])}function em(n,t,e){const i=this.cache,s=t.length,r=Mr(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tc,r[o])}function nm(n,t,e){const i=this.cache,s=t.length,r=Mr(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wc,r[o])}function im(n,t,e){const i=this.cache,s=t.length,r=Mr(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bc,r[o])}function sm(n){switch(n){case 5126:return zp;case 35664:return kp;case 35665:return Gp;case 35666:return Hp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return Yp;case 35667:case 35671:return qp;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return $p;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class rm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Bp(e.type)}}class om{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sm(e.type)}}class am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function fl(n,t){n.seq.push(t),n.map[t.id]=t}function lm(n,t,e){const i=n.name,s=i.length;for(to.lastIndex=0;;){const r=to.exec(i),o=to.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fl(e,c===void 0?new rm(a,n,t):new om(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new am(a),fl(e,u)),e=u}}}class rr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lm(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function dl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const cm=37297;let hm=0;function um(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function fm(n){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(n);let i;switch(t===e?i="":t===ur&&e===hr?i="LinearDisplayP3ToLinearSRGB":t===hr&&e===ur&&(i="LinearSRGBToLinearDisplayP3"),n){case On:case vr:return[i,"LinearTransferOETF"];case fe:case Uo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+um(n.getShaderSource(t),o)}else return s}function dm(n,t){const e=fm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pm(n,t){let e;switch(t){case jl:e="Linear";break;case $l:e="Reinhard";break;case Zl:e="OptimizedCineon";break;case Lo:e="ACESFilmic";break;case Jl:e="AgX";break;case Ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bi).join(`
`)}function _m(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Bi(n){return n!==""}function ml(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(n){return n.replace(vm,Sm)}const Mm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(n,t){let e=Ot[t];if(e===void 0){const i=Mm.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(n){return n.replace(ym,Em)}function Em(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Am(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Rh:t="ENVMAP_BLENDING_MIX";break;case Ch:t="ENVMAP_BLENDING_ADD";break}return t}function Rm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Cm(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bm(e),c=Tm(e),h=wm(e),u=Am(e),d=Rm(e),m=e.isWebGL2?"":mm(e),g=gm(e),_=_m(r),p=s.createProgram();let f,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bi).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bi).join(`
`),y.length>0&&(y+=`
`)):(f=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),y=[m,xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Xn?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,dm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),o=So(o),o=ml(o,e),o=gl(o,e),a=So(a),a=ml(a,e),a=gl(a,e),o=_l(o),a=_l(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=v+f+o,D=v+y+a,w=dl(s,s.VERTEX_SHADER,A),T=dl(s,s.FRAGMENT_SHADER,D);s.attachShader(p,w),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(V){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(w).trim(),N=s.getShaderInfoLog(T).trim();let W=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,w,T);else{const q=pl(s,w,"vertex"),Y=pl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(K=!1);K&&(V.diagnostics={runnable:W,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:y}})}s.deleteShader(w),s.deleteShader(T),M=new rr(s,p),b=xm(s,p)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,cm)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Dm(t),e.set(t,i)),i}}class Dm{constructor(t){this.id=Pm++,this.code=t,this.usedTimes=0}}function Um(n,t,e,i,s,r,o){const a=new mc,l=new Lm,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,b,z,V,Z){const L=V.fog,N=Z.geometry,W=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),q=K&&K.mapping===xr?K.image.height:null,Y=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=$!==void 0?$.length:0;let ct=0;N.morphAttributes.position!==void 0&&(ct=1),N.morphAttributes.normal!==void 0&&(ct=2),N.morphAttributes.color!==void 0&&(ct=3);let H,j,at,mt;if(Y){const De=gn[Y];H=De.vertexShader,j=De.fragmentShader}else H=M.vertexShader,j=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const dt=n.getRenderTarget(),Ct=Z.isInstancedMesh===!0,Pt=Z.isBatchedMesh===!0,Mt=!!M.map,St=!!M.matcap,I=!!K,le=!!M.aoMap,xt=!!M.lightMap,Ut=!!M.bumpMap,pt=!!M.normalMap,se=!!M.displacementMap,Bt=!!M.emissiveMap,E=!!M.metalnessMap,x=!!M.roughnessMap,B=M.anisotropy>0,tt=M.clearcoat>0,Q=M.iridescence>0,nt=M.sheen>0,gt=M.transmission>0,lt=B&&!!M.anisotropyMap,ut=tt&&!!M.clearcoatMap,wt=tt&&!!M.clearcoatNormalMap,zt=tt&&!!M.clearcoatRoughnessMap,J=Q&&!!M.iridescenceMap,jt=Q&&!!M.iridescenceThicknessMap,Wt=nt&&!!M.sheenColorMap,Lt=nt&&!!M.sheenRoughnessMap,vt=!!M.specularMap,ft=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Yt=gt&&!!M.transmissionMap,ce=gt&&!!M.thicknessMap,Gt=!!M.gradientMap,it=!!M.alphaMap,P=M.alphaTest>0,rt=!!M.alphaHash,ot=!!M.extensions,At=!!N.attributes.uv1,yt=!!N.attributes.uv2,Zt=!!N.attributes.uv3;let Jt=Xn;return M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:j,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pt,instancing:Ct,instancingColor:Ct&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:On,map:Mt,matcap:St,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:q,aoMap:le,lightMap:xt,bumpMap:Ut,normalMap:pt,displacementMap:d&&se,emissiveMap:Bt,normalMapObjectSpace:pt&&M.normalMapType===Hh,normalMapTangentSpace:pt&&M.normalMapType===lc,metalnessMap:E,roughnessMap:x,anisotropy:B,anisotropyMap:lt,clearcoat:tt,clearcoatMap:ut,clearcoatNormalMap:wt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:jt,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:Lt,specularMap:vt,specularColorMap:ft,specularIntensityMap:Ft,transmission:gt,transmissionMap:Yt,thicknessMap:ce,gradientMap:Gt,opaque:M.transparent===!1&&M.blending===Gi,alphaMap:it,alphaTest:P,alphaHash:rt,combine:M.combine,mapUv:Mt&&_(M.map.channel),aoMapUv:le&&_(M.aoMap.channel),lightMapUv:xt&&_(M.lightMap.channel),bumpMapUv:Ut&&_(M.bumpMap.channel),normalMapUv:pt&&_(M.normalMap.channel),displacementMapUv:se&&_(M.displacementMap.channel),emissiveMapUv:Bt&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:lt&&_(M.anisotropyMap.channel),clearcoatMapUv:ut&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(M.sheenRoughnessMap.channel),specularMapUv:vt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:Yt&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:it&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:yt,vertexUv3s:Zt,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Mt||it),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ot&&M.extensions.derivatives===!0,extensionFragDepth:ot&&M.extensions.fragDepth===!0,extensionDrawBuffers:ot&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)b.push(z),b.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function A(M){const b=g[M.type];let z;if(b){const V=gn[b];z=Ms.clone(V.uniforms)}else z=M.uniforms;return z}function D(M,b){let z;for(let V=0,Z=c.length;V<Z;V++){const L=c[V];if(L.cacheKey===b){z=L,++z.usedTimes;break}}return z===void 0&&(z=new Cm(n,b,M,r),c.push(z)),z}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:X}}function Im(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Nm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ml(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,m,g,_,p){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Nm),i.length>1&&i.sort(d||vl),s.length>1&&s.sort(d||vl)}function h(){for(let u=t,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ml,n.set(i,[o])):s>=r.length?(o=new Ml,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Om(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Bm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let zm=0;function km(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gm(n,t){const e=new Om,i=Bm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);const r=new C,o=new Kt,a=new Kt;function l(h,u){let d=0,m=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,A=0,D=0,w=0,T=0,X=0,M=0;h.sort(km);const b=u===!0?Math.PI:1;for(let V=0,Z=h.length;V<Z;V++){const L=h[V],N=L.color,W=L.intensity,K=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*W*b,m+=N.g*W*b,g+=N.b*W*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],W);M++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const $=L.shadow,et=i.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,s.directionalShadow[_]=et,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=L.shadow.matrix,A++}s.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(N).multiplyScalar(W*b),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[f]=Y;const $=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&X++),s.spotLightMatrix[f]=$.matrix,L.castShadow){const et=i.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,s.spotShadow[f]=et,s.spotShadowMap[f]=q,w++}f++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(N).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,et=i.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,s.pointShadow[p]=et,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=L.shadow.matrix,D++}s.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(W*b),Y.groundColor.copy(L.groundColor).multiplyScalar(W*b),s.hemi[v]=Y,v++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=st.LTC_FLOAT_1,s.rectAreaLTC2=st.LTC_FLOAT_2):(s.rectAreaLTC1=st.LTC_HALF_1,s.rectAreaLTC2=st.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=st.LTC_FLOAT_1,s.rectAreaLTC2=st.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=st.LTC_HALF_1,s.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const z=s.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==f||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==A||z.numPointShadows!==D||z.numSpotShadows!==w||z.numSpotMaps!==T||z.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=y,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=w+T-X,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=M,z.directionalLength=_,z.pointLength=p,z.spotLength=f,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=A,z.numPointShadows=D,z.numSpotShadows=w,z.numSpotMaps=T,z.numLightProbes=M,s.version=zm++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const A=h[y];if(A.isDirectionalLight){const D=s.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),d++}else if(A.isSpotLight){const D=s.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(A.isRectAreaLight){const D=s.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const D=s.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){const D=s.hemi[p];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Sl(n,t){const e=new Gm(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Hm(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Sl(n,t),e.set(r,[l])):o>=a.length?(l=new Sl(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class Vm extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wm extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(n,t,e){let i=new Fo;const s=new Tt,r=new Tt,o=new ie,a=new Vm({depthPacking:Gh}),l=new Wm,c={},h=e.maxTextureSize,u={[qn]:Ge,[Ge]:qn,[nn]:nn},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let f=this.type;this.render=function(w,T,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Nn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=f!==Cn&&this.type===Cn,L=f===Cn&&this.type!==Cn;for(let N=0,W=w.length;N<W;N++){const K=w[N],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Y=q.getFrameExtents();if(s.multiply(Y),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||Z===!0||L===!0){const et=this.type!==Cn?{minFilter:Le,magFilter:Le}:{};q.map!==null&&q.map.dispose(),q.map=new rn(s.x,s.y,et),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const $=q.getViewportCount();for(let et=0;et<$;et++){const ct=q.getViewport(et);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),V.viewport(o),q.updateMatrices(K,et),i=q.getFrustum(),A(T,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Cn&&y(q,X),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(M,b,z)};function y(w,T){const X=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,X,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,X,m,_,null)}function v(w,T,X,M){let b=null;const z=X.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)b=z;else if(b=X.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=b.uuid,Z=T.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let N=L[Z];N===void 0&&(N=b.clone(),L[Z]=N,T.addEventListener("dispose",D)),b=N}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Cn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=X}return b}function A(w,T,X,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Cn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld);const Z=t.update(w),L=w.material;if(Array.isArray(L)){const N=Z.groups;for(let W=0,K=N.length;W<K;W++){const q=N[W],Y=L[q.materialIndex];if(Y&&Y.visible){const $=v(w,Y,M,b);w.onBeforeShadow(n,w,T,X,Z,$,q),n.renderBufferDirect(X,null,Z,$,w,q),w.onAfterShadow(n,w,T,X,Z,$,q)}}}else if(L.visible){const N=v(w,L,M,b);w.onBeforeShadow(n,w,T,X,Z,N,null),n.renderBufferDirect(X,null,Z,N,w,null),w.onAfterShadow(n,w,T,X,Z,N,null)}}const V=w.children;for(let Z=0,L=V.length;Z<L;Z++)A(V[Z],T,X,M,b)}function D(w){w.target.removeEventListener("dispose",D);for(const X in c){const M=c[X],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Km(n,t,e){const i=e.isWebGL2;function s(){let P=!1;const rt=new ie;let ot=null;const At=new ie(0,0,0,0);return{setMask:function(yt){ot!==yt&&!P&&(n.colorMask(yt,yt,yt,yt),ot=yt)},setLocked:function(yt){P=yt},setClear:function(yt,Zt,Jt,ve,De){De===!0&&(yt*=ve,Zt*=ve,Jt*=ve),rt.set(yt,Zt,Jt,ve),At.equals(rt)===!1&&(n.clearColor(yt,Zt,Jt,ve),At.copy(rt))},reset:function(){P=!1,ot=null,At.set(-1,0,0,0)}}}function r(){let P=!1,rt=null,ot=null,At=null;return{setTest:function(yt){yt?Pt(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(yt){rt!==yt&&!P&&(n.depthMask(yt),rt=yt)},setFunc:function(yt){if(ot!==yt){switch(yt){case Sh:n.depthFunc(n.NEVER);break;case yh:n.depthFunc(n.ALWAYS);break;case Eh:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case bh:n.depthFunc(n.EQUAL);break;case Th:n.depthFunc(n.GEQUAL);break;case wh:n.depthFunc(n.GREATER);break;case Ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=yt}},setLocked:function(yt){P=yt},setClear:function(yt){At!==yt&&(n.clearDepth(yt),At=yt)},reset:function(){P=!1,rt=null,ot=null,At=null}}}function o(){let P=!1,rt=null,ot=null,At=null,yt=null,Zt=null,Jt=null,ve=null,De=null;return{setTest:function(Qt){P||(Qt?Pt(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(Qt){rt!==Qt&&!P&&(n.stencilMask(Qt),rt=Qt)},setFunc:function(Qt,Ue,pn){(ot!==Qt||At!==Ue||yt!==pn)&&(n.stencilFunc(Qt,Ue,pn),ot=Qt,At=Ue,yt=pn)},setOp:function(Qt,Ue,pn){(Zt!==Qt||Jt!==Ue||ve!==pn)&&(n.stencilOp(Qt,Ue,pn),Zt=Qt,Jt=Ue,ve=pn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){De!==Qt&&(n.clearStencil(Qt),De=Qt)},reset:function(){P=!1,rt=null,ot=null,At=null,yt=null,Zt=null,Jt=null,ve=null,De=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,A=null,D=null,w=null,T=null,X=null,M=new Et(0,0,0),b=0,z=!1,V=null,Z=null,L=null,N=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),q=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=Y>=2);let et=null,ct={};const H=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),at=new ie().fromArray(H),mt=new ie().fromArray(j);function dt(P,rt,ot,At){const yt=new Uint8Array(4),Zt=n.createTexture();n.bindTexture(P,Zt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<ot;Jt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(rt,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(rt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Zt}const Ct={};Ct[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ct[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(n.DEPTH_TEST),l.setFunc(ar),Bt(!1),E(na),Pt(n.CULL_FACE),pt(Nn);function Pt(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Mt(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function St(P,rt){return m[P]!==rt?(n.bindFramebuffer(P,rt),m[P]=rt,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=rt),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=rt)),!0):!1}function I(P,rt){let ot=_,At=!1;if(P)if(ot=g.get(rt),ot===void 0&&(ot=[],g.set(rt,ot)),P.isWebGLMultipleRenderTargets){const yt=P.texture;if(ot.length!==yt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let Zt=0,Jt=yt.length;Zt<Jt;Zt++)ot[Zt]=n.COLOR_ATTACHMENT0+Zt;ot.length=yt.length,At=!0}}else ot[0]!==n.COLOR_ATTACHMENT0&&(ot[0]=n.COLOR_ATTACHMENT0,At=!0);else ot[0]!==n.BACK&&(ot[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function le(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const xt={[si]:n.FUNC_ADD,[oh]:n.FUNC_SUBTRACT,[ah]:n.FUNC_REVERSE_SUBTRACT};if(i)xt[ra]=n.MIN,xt[oa]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(xt[ra]=P.MIN_EXT,xt[oa]=P.MAX_EXT)}const Ut={[lh]:n.ZERO,[ch]:n.ONE,[hh]:n.SRC_COLOR,[fo]:n.SRC_ALPHA,[gh]:n.SRC_ALPHA_SATURATE,[ph]:n.DST_COLOR,[fh]:n.DST_ALPHA,[uh]:n.ONE_MINUS_SRC_COLOR,[po]:n.ONE_MINUS_SRC_ALPHA,[mh]:n.ONE_MINUS_DST_COLOR,[dh]:n.ONE_MINUS_DST_ALPHA,[_h]:n.CONSTANT_COLOR,[xh]:n.ONE_MINUS_CONSTANT_COLOR,[vh]:n.CONSTANT_ALPHA,[Mh]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(P,rt,ot,At,yt,Zt,Jt,ve,De,Qt){if(P===Nn){f===!0&&(Mt(n.BLEND),f=!1);return}if(f===!1&&(Pt(n.BLEND),f=!0),P!==rh){if(P!==y||Qt!==z){if((v!==si||w!==si)&&(n.blendEquation(n.FUNC_ADD),v=si,w=si),Qt)switch(P){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fn:n.blendFunc(n.ONE,n.ONE);break;case ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,D=null,T=null,X=null,M.set(0,0,0),b=0,y=P,z=Qt}return}yt=yt||rt,Zt=Zt||ot,Jt=Jt||At,(rt!==v||yt!==w)&&(n.blendEquationSeparate(xt[rt],xt[yt]),v=rt,w=yt),(ot!==A||At!==D||Zt!==T||Jt!==X)&&(n.blendFuncSeparate(Ut[ot],Ut[At],Ut[Zt],Ut[Jt]),A=ot,D=At,T=Zt,X=Jt),(ve.equals(M)===!1||De!==b)&&(n.blendColor(ve.r,ve.g,ve.b,De),M.copy(ve),b=De),y=P,z=!1}function se(P,rt){P.side===nn?Mt(n.CULL_FACE):Pt(n.CULL_FACE);let ot=P.side===Ge;rt&&(ot=!ot),Bt(ot),P.blending===Gi&&P.transparent===!1?pt(Nn):pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const At=P.stencilWrite;c.setTest(At),At&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pt(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){V!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),V=P)}function E(P){P!==ih?(Pt(n.CULL_FACE),P!==Z&&(P===na?n.cullFace(n.BACK):P===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),Z=P}function x(P){P!==L&&(q&&n.lineWidth(P),L=P)}function B(P,rt,ot){P?(Pt(n.POLYGON_OFFSET_FILL),(N!==rt||W!==ot)&&(n.polygonOffset(rt,ot),N=rt,W=ot)):Mt(n.POLYGON_OFFSET_FILL)}function tt(P){P?Pt(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function Q(P){P===void 0&&(P=n.TEXTURE0+K-1),et!==P&&(n.activeTexture(P),et=P)}function nt(P,rt,ot){ot===void 0&&(et===null?ot=n.TEXTURE0+K-1:ot=et);let At=ct[ot];At===void 0&&(At={type:void 0,texture:void 0},ct[ot]=At),(At.type!==P||At.texture!==rt)&&(et!==ot&&(n.activeTexture(ot),et=ot),n.bindTexture(P,rt||Ct[P]),At.type=P,At.texture=rt)}function gt(){const P=ct[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(P){at.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function Yt(P){mt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),mt.copy(P))}function ce(P,rt){let ot=u.get(rt);ot===void 0&&(ot=new WeakMap,u.set(rt,ot));let At=ot.get(P);At===void 0&&(At=n.getUniformBlockIndex(rt,P.name),ot.set(P,At))}function Gt(P,rt){const At=u.get(rt).get(P);h.get(rt)!==At&&(n.uniformBlockBinding(rt,At,P.__bindingPointIndex),h.set(rt,At))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},et=null,ct={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,A=null,D=null,w=null,T=null,X=null,M=new Et(0,0,0),b=0,z=!1,V=null,Z=null,L=null,N=null,W=null,at.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:Mt,bindFramebuffer:St,drawBuffers:I,useProgram:le,setBlending:pt,setMaterial:se,setFlipSided:Bt,setCullFace:E,setLineWidth:x,setPolygonOffset:B,setScissorTest:tt,activeTexture:Q,bindTexture:nt,unbindTexture:gt,compressedTexImage2D:lt,compressedTexImage3D:ut,texImage2D:vt,texImage3D:ft,updateUBOMapping:ce,uniformBlockBinding:Gt,texStorage2D:Wt,texStorage3D:Lt,texSubImage2D:wt,texSubImage3D:zt,compressedTexSubImage2D:J,compressedTexSubImage3D:jt,scissor:Ft,viewport:Yt,reset:it}}function jm(n,t,e,i,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):dr("canvas")}function _(E,x,B,tt){let Q=1;if((E.width>tt||E.height>tt)&&(Q=tt/Math.max(E.width,E.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const nt=x?Mo:Math.floor,gt=nt(Q*E.width),lt=nt(Q*E.height);u===void 0&&(u=g(gt,lt));const ut=B?g(gt,lt):u;return ut.width=gt,ut.height=lt,ut.getContext("2d").drawImage(E,0,0,gt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+gt+"x"+lt+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Oa(E.width)&&Oa(E.height)}function f(E){return a?!1:E.wrapS!==un||E.wrapT!==un||E.minFilter!==Le&&E.minFilter!==en}function y(E,x){return E.generateMipmaps&&x&&E.minFilter!==Le&&E.minFilter!==en}function v(E){n.generateMipmap(E)}function A(E,x,B,tt,Q=!1){if(a===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let nt=x;if(x===n.RED&&(B===n.FLOAT&&(nt=n.R32F),B===n.HALF_FLOAT&&(nt=n.R16F),B===n.UNSIGNED_BYTE&&(nt=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.R8UI),B===n.UNSIGNED_SHORT&&(nt=n.R16UI),B===n.UNSIGNED_INT&&(nt=n.R32UI),B===n.BYTE&&(nt=n.R8I),B===n.SHORT&&(nt=n.R16I),B===n.INT&&(nt=n.R32I)),x===n.RG&&(B===n.FLOAT&&(nt=n.RG32F),B===n.HALF_FLOAT&&(nt=n.RG16F),B===n.UNSIGNED_BYTE&&(nt=n.RG8)),x===n.RGBA){const gt=Q?cr:qt.getTransfer(tt);B===n.FLOAT&&(nt=n.RGBA32F),B===n.HALF_FLOAT&&(nt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(nt=gt===te?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function D(E,x,B){return y(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===Le||E===aa||E===Tr?n.NEAREST:n.LINEAR}function T(E){const x=E.target;x.removeEventListener("dispose",T),M(x),x.isVideoTexture&&h.delete(x)}function X(E){const x=E.target;x.removeEventListener("dispose",X),z(x)}function M(E){const x=i.get(E);if(x.__webglInit===void 0)return;const B=E.source,tt=d.get(B);if(tt){const Q=tt[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(E),Object.keys(tt).length===0&&d.delete(B)}i.remove(E)}function b(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const B=E.source,tt=d.get(B);delete tt[x.__cacheKey],o.memory.textures--}function z(E){const x=E.texture,B=i.get(E),tt=i.get(x);if(tt.__webglTexture!==void 0&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let nt=0;nt<B.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(B.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)n.deleteFramebuffer(B.__webglFramebuffer[Q]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,nt=x.length;Q<nt;Q++){const gt=i.get(x[Q]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(E)}let V=0;function Z(){V=0}function L(){const E=V;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function N(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function W(E,x){const B=i.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,E,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function K(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){at(B,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function q(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){at(B,E,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function Y(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){mt(B,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const $={[lr]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},et={[Le]:n.NEAREST,[aa]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Lh]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},ct={[Vh]:n.NEVER,[jh]:n.ALWAYS,[Wh]:n.LESS,[cc]:n.LEQUAL,[Xh]:n.EQUAL,[Kh]:n.GEQUAL,[Yh]:n.GREATER,[qh]:n.NOTEQUAL};function H(E,x,B){if(B?(n.texParameteri(E,n.TEXTURE_WRAP_S,$[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,$[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,$[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,et[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,et[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==un||x.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Le&&x.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Le||x.minFilter!==Tr&&x.minFilter!==vs||x.type===Wn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===vn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function j(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",T));const tt=x.source;let Q=d.get(tt);Q===void 0&&(Q={},d.set(tt,Q));const nt=N(x);if(nt!==E.__cacheKey){Q[nt]===void 0&&(Q[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[nt].usedTimes++;const gt=Q[E.__cacheKey];gt!==void 0&&(Q[E.__cacheKey].usedTimes--,gt.usedTimes===0&&b(x)),E.__cacheKey=nt,E.__webglTexture=Q[nt].texture}return B}function at(E,x,B){let tt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=n.TEXTURE_3D);const Q=j(E,x),nt=x.source;e.bindTexture(tt,E.__webglTexture,n.TEXTURE0+B);const gt=i.get(nt);if(nt.version!==gt.__version||Q===!0){e.activeTexture(n.TEXTURE0+B);const lt=qt.getPrimaries(qt.workingColorSpace),ut=x.colorSpace===sn?null:qt.getPrimaries(x.colorSpace),wt=x.colorSpace===sn||lt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const zt=f(x)&&p(x.image)===!1;let J=_(x.image,zt,!1,s.maxTextureSize);J=Bt(x,J);const jt=p(J)||a,Wt=r.convert(x.format,x.colorSpace);let Lt=r.convert(x.type),vt=A(x.internalFormat,Wt,Lt,x.colorSpace,x.isVideoTexture);H(tt,x,jt);let ft;const Ft=x.mipmaps,Yt=a&&x.isVideoTexture!==!0&&vt!==oc,ce=gt.__version===void 0||Q===!0,Gt=D(x,J,jt);if(x.isDepthTexture)vt=n.DEPTH_COMPONENT,a?x.type===Wn?vt=n.DEPTH_COMPONENT32F:x.type===Vn?vt=n.DEPTH_COMPONENT24:x.type===li?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:x.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ci&&vt===n.DEPTH_COMPONENT&&x.type!==Do&&x.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Vn,Lt=r.convert(x.type)),x.format===qi&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,x.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=li,Lt=r.convert(x.type))),ce&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,vt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,vt,J.width,J.height,0,Wt,Lt,null));else if(x.isDataTexture)if(Ft.length>0&&jt){Yt&&ce&&e.texStorage2D(n.TEXTURE_2D,Gt,vt,Ft[0].width,Ft[0].height);for(let it=0,P=Ft.length;it<P;it++)ft=Ft[it],Yt?e.texSubImage2D(n.TEXTURE_2D,it,0,0,ft.width,ft.height,Wt,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,it,vt,ft.width,ft.height,0,Wt,Lt,ft.data);x.generateMipmaps=!1}else Yt?(ce&&e.texStorage2D(n.TEXTURE_2D,Gt,vt,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Wt,Lt,J.data)):e.texImage2D(n.TEXTURE_2D,0,vt,J.width,J.height,0,Wt,Lt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,vt,Ft[0].width,Ft[0].height,J.depth);for(let it=0,P=Ft.length;it<P;it++)ft=Ft[it],x.format!==fn?Wt!==null?Yt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,J.depth,Wt,ft.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,J.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,J.depth,Wt,Lt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,J.depth,0,Wt,Lt,ft.data)}else{Yt&&ce&&e.texStorage2D(n.TEXTURE_2D,Gt,vt,Ft[0].width,Ft[0].height);for(let it=0,P=Ft.length;it<P;it++)ft=Ft[it],x.format!==fn?Wt!==null?Yt?e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,ft.width,ft.height,Wt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,it,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(n.TEXTURE_2D,it,0,0,ft.width,ft.height,Wt,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,it,vt,ft.width,ft.height,0,Wt,Lt,ft.data)}else if(x.isDataArrayTexture)Yt?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,vt,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Wt,Lt,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,J.width,J.height,J.depth,0,Wt,Lt,J.data);else if(x.isData3DTexture)Yt?(ce&&e.texStorage3D(n.TEXTURE_3D,Gt,vt,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Wt,Lt,J.data)):e.texImage3D(n.TEXTURE_3D,0,vt,J.width,J.height,J.depth,0,Wt,Lt,J.data);else if(x.isFramebufferTexture){if(ce)if(Yt)e.texStorage2D(n.TEXTURE_2D,Gt,vt,J.width,J.height);else{let it=J.width,P=J.height;for(let rt=0;rt<Gt;rt++)e.texImage2D(n.TEXTURE_2D,rt,vt,it,P,0,Wt,Lt,null),it>>=1,P>>=1}}else if(Ft.length>0&&jt){Yt&&ce&&e.texStorage2D(n.TEXTURE_2D,Gt,vt,Ft[0].width,Ft[0].height);for(let it=0,P=Ft.length;it<P;it++)ft=Ft[it],Yt?e.texSubImage2D(n.TEXTURE_2D,it,0,0,Wt,Lt,ft):e.texImage2D(n.TEXTURE_2D,it,vt,Wt,Lt,ft);x.generateMipmaps=!1}else Yt?(ce&&e.texStorage2D(n.TEXTURE_2D,Gt,vt,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Wt,Lt,J)):e.texImage2D(n.TEXTURE_2D,0,vt,Wt,Lt,J);y(x,jt)&&v(tt),gt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function mt(E,x,B){if(x.image.length!==6)return;const tt=j(E,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const nt=i.get(Q);if(Q.version!==nt.__version||tt===!0){e.activeTexture(n.TEXTURE0+B);const gt=qt.getPrimaries(qt.workingColorSpace),lt=x.colorSpace===sn?null:qt.getPrimaries(x.colorSpace),ut=x.colorSpace===sn||gt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,J=[];for(let it=0;it<6;it++)!wt&&!zt?J[it]=_(x.image[it],!1,!0,s.maxCubemapSize):J[it]=zt?x.image[it].image:x.image[it],J[it]=Bt(x,J[it]);const jt=J[0],Wt=p(jt)||a,Lt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),ft=A(x.internalFormat,Lt,vt,x.colorSpace),Ft=a&&x.isVideoTexture!==!0,Yt=nt.__version===void 0||tt===!0;let ce=D(x,jt,Wt);H(n.TEXTURE_CUBE_MAP,x,Wt);let Gt;if(wt){Ft&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ft,jt.width,jt.height);for(let it=0;it<6;it++){Gt=J[it].mipmaps;for(let P=0;P<Gt.length;P++){const rt=Gt[P];x.format!==fn?Lt!==null?Ft?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,rt.width,rt.height,Lt,rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,rt.width,rt.height,Lt,vt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ft,rt.width,rt.height,0,Lt,vt,rt.data)}}}else{Gt=x.mipmaps,Ft&&Yt&&(Gt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ft,J[0].width,J[0].height));for(let it=0;it<6;it++)if(zt){Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,J[it].width,J[it].height,Lt,vt,J[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,J[it].width,J[it].height,0,Lt,vt,J[it].data);for(let P=0;P<Gt.length;P++){const ot=Gt[P].image[it].image;Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,ot.width,ot.height,Lt,vt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ft,ot.width,ot.height,0,Lt,vt,ot.data)}}else{Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,vt,J[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,Lt,vt,J[it]);for(let P=0;P<Gt.length;P++){const rt=Gt[P];Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,Lt,vt,rt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ft,Lt,vt,rt.image[it])}}}y(x,Wt)&&v(n.TEXTURE_CUBE_MAP),nt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function dt(E,x,B,tt,Q,nt){const gt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),ut=A(B.internalFormat,gt,lt,B.colorSpace);if(!i.get(x).__hasExternalTextures){const zt=Math.max(1,x.width>>nt),J=Math.max(1,x.height>>nt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,nt,ut,zt,J,x.depth,0,gt,lt,null):e.texImage2D(Q,nt,ut,zt,J,0,gt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),pt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,Q,i.get(B).__webglTexture,0,Ut(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,Q,i.get(B).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(E,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let tt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||pt(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Wn?tt=n.DEPTH_COMPONENT32F:Q.type===Vn&&(tt=n.DEPTH_COMPONENT24));const nt=Ut(x);pt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,tt,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,tt,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,tt,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const tt=Ut(x);B&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,x.width,x.height):pt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const tt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<tt.length;Q++){const nt=tt[Q],gt=r.convert(nt.format,nt.colorSpace),lt=r.convert(nt.type),ut=A(nt.internalFormat,gt,lt,nt.colorSpace),wt=Ut(x);B&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ut,x.width,x.height):pt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const tt=i.get(x.depthTexture).__webglTexture,Q=Ut(x);if(x.depthTexture.format===ci)pt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===qi)pt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Mt(E){const x=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]=n.createRenderbuffer(),Ct(x.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ct(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(E,x,B){const tt=i.get(E);x!==void 0&&dt(tt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Mt(E)}function I(E){const x=E.texture,B=i.get(E),tt=i.get(x);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=x.version,o.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,nt=E.isWebGLMultipleRenderTargets===!0,gt=p(E)||a;if(Q){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)B.__webglFramebuffer[lt][ut]=n.createFramebuffer()}else B.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)B.__webglFramebuffer[lt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){const lt=E.texture;for(let ut=0,wt=lt.length;ut<wt;ut++){const zt=i.get(lt[ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&pt(E)===!1){const lt=nt?x:[x];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<lt.length;ut++){const wt=lt[ut];B.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);const zt=r.convert(wt.format,wt.colorSpace),J=r.convert(wt.type),jt=A(wt.internalFormat,zt,J,wt.colorSpace,E.isXRRenderTarget===!0),Wt=Ut(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,jt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),H(n.TEXTURE_CUBE_MAP,x,gt);for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)dt(B.__webglFramebuffer[lt][ut],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else dt(B.__webglFramebuffer[lt],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(x,gt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const lt=E.texture;for(let ut=0,wt=lt.length;ut<wt;ut++){const zt=lt[ut],J=i.get(zt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),H(n.TEXTURE_2D,zt,gt),dt(B.__webglFramebuffer,E,zt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),y(zt,gt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?lt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,tt.__webglTexture),H(lt,x,gt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)dt(B.__webglFramebuffer[ut],E,x,n.COLOR_ATTACHMENT0,lt,ut);else dt(B.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,lt,0);y(x,gt)&&v(lt),e.unbindTexture()}E.depthBuffer&&Mt(E)}function le(E){const x=p(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,Q=B.length;tt<Q;tt++){const nt=B[tt];if(y(nt,x)){const gt=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,lt=i.get(nt).__webglTexture;e.bindTexture(gt,lt),v(gt),e.unbindTexture()}}}function xt(E){if(a&&E.samples>0&&pt(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,tt=E.height;let Q=n.COLOR_BUFFER_BIT;const nt=[],gt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(E),ut=E.isWebGLMultipleRenderTargets===!0;if(ut)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){nt.push(n.COLOR_ATTACHMENT0+wt),E.depthBuffer&&nt.push(gt);const zt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(zt===!1&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]),zt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[gt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[gt])),ut){const J=i.get(x[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,tt,0,0,B,tt,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]);const zt=i.get(x[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Ut(E){return Math.min(s.maxSamples,E.samples)}function pt(E){const x=i.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Bt(E,x){const B=E.colorSpace,tt=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===xo||B!==On&&B!==sn&&(qt.getTransfer(B)===te?a===!1?t.has("EXT_sRGB")===!0&&tt===fn?(E.format=xo,E.minFilter=en,E.generateMipmaps=!1):x=uc.sRGBToLinear(x):(tt!==fn||Q!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=I,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=pt}function $m(n,t,e){const i=e.isWebGL2;function s(r,o=sn){let a;const l=qt.getTransfer(o);if(r===Yn)return n.UNSIGNED_BYTE;if(r===ec)return n.UNSIGNED_SHORT_4_4_4_4;if(r===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Dh)return n.BYTE;if(r===Uh)return n.SHORT;if(r===Do)return n.UNSIGNED_SHORT;if(r===tc)return n.INT;if(r===Vn)return n.UNSIGNED_INT;if(r===Wn)return n.FLOAT;if(r===vn)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ih)return n.ALPHA;if(r===fn)return n.RGBA;if(r===Nh)return n.LUMINANCE;if(r===Fh)return n.LUMINANCE_ALPHA;if(r===ci)return n.DEPTH_COMPONENT;if(r===qi)return n.DEPTH_STENCIL;if(r===xo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Oh)return n.RED;if(r===ic)return n.RED_INTEGER;if(r===Bh)return n.RG;if(r===sc)return n.RG_INTEGER;if(r===rc)return n.RGBA_INTEGER;if(r===wr||r===Ar||r===Rr||r===Cr)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ar)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===la||r===ca||r===ha||r===ua)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===la)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fa||r===da)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fa)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===da)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pa||r===ma||r===ga||r===_a||r===xa||r===va||r===Ma||r===Sa||r===ya||r===Ea||r===ba||r===Ta||r===wa||r===Aa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pa)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ma)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ga)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_a)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xa)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===va)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ma)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sa)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ya)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ea)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ba)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ta)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wa)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Aa)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pr||r===Ra||r===Ca)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Pr)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ra)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ca)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zh||r===Pa||r===La||r===Da)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===La)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===li?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Zm extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Qm extends Zi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const y=[],v=[],A=new Tt;let D=null;const w=new qe;w.layers.enable(1),w.viewport=new ie;const T=new qe;T.layers.enable(2),T.viewport=new ie;const X=[w,T],M=new Zm;M.layers.enable(1),M.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=y[H];return j===void 0&&(j=new eo,y[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=y[H];return j===void 0&&(j=new eo,y[H]=j),j.getGripSpace()},this.getHand=function(H){let j=y[H];return j===void 0&&(j=new eo,y[H]=j),j.getHandSpace()};function V(H){const j=v.indexOf(H.inputSource);if(j===-1)return;const at=y[j];at!==void 0&&(at.update(H.inputSource,H.frame,c||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",L);for(let H=0;H<y.length;H++){const j=v[H];j!==null&&(v[H]=null,y[H].disconnect(j))}b=null,z=null,t.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,ct.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new rn(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,at=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?qi:ci,at=_.stencil?li:Vn);const dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new rn(d.textureWidth,d.textureHeight,{format:fn,type:Yn,depthTexture:new Sc(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ct=t.properties.get(f);Ct.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(H){for(let j=0;j<H.removed.length;j++){const at=H.removed[j],mt=v.indexOf(at);mt>=0&&(v[mt]=null,y[mt].disconnect(at))}for(let j=0;j<H.added.length;j++){const at=H.added[j];let mt=v.indexOf(at);if(mt===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=v.length){v.push(at),mt=Ct;break}else if(v[Ct]===null){v[Ct]=at,mt=Ct;break}if(mt===-1)break}const dt=y[mt];dt&&dt.connect(at)}}const N=new C,W=new C;function K(H,j,at){N.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const mt=N.distanceTo(W),dt=j.projectionMatrix.elements,Ct=at.projectionMatrix.elements,Pt=dt[14]/(dt[10]-1),Mt=dt[14]/(dt[10]+1),St=(dt[9]+1)/dt[5],I=(dt[9]-1)/dt[5],le=(dt[8]-1)/dt[0],xt=(Ct[8]+1)/Ct[0],Ut=Pt*le,pt=Pt*xt,se=mt/(-le+xt),Bt=se*-le;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Bt),H.translateZ(se),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Pt+se,x=Mt+se,B=Ut-Bt,tt=pt+(mt-Bt),Q=St*Mt/x*E,nt=I*Mt/x*E;H.projectionMatrix.makePerspective(B,tt,Q,nt,E,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;M.near=T.near=w.near=H.near,M.far=T.far=w.far=H.far,(b!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,z=M.far);const j=H.parent,at=M.cameras;q(M,j);for(let mt=0;mt<at.length;mt++)q(at[mt],j);at.length===2?K(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),Y(H,M,j)};function Y(H,j,at){at===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=vo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let $=null;function et(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let mt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let dt=0;dt<at.length;dt++){const Ct=at[dt];let Pt=null;if(m!==null)Pt=m.getViewport(Ct);else{const St=u.getViewSubImage(d,Ct);Pt=St.viewport,dt===0&&(t.setRenderTargetTextures(f,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(f))}let Mt=X[dt];Mt===void 0&&(Mt=new qe,Mt.layers.enable(dt),Mt.viewport=new ie,X[dt]=Mt),Mt.matrix.fromArray(Ct.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Ct.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),dt===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Mt)}}for(let at=0;at<y.length;at++){const mt=v[at],dt=y[at];mt!==null&&dt!==void 0&&dt.update(mt,j,c||o)}$&&$(H,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const ct=new Mc;ct.setAnimationLoop(et),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}function tg(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,_c(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ge&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ge&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eg(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const A=v.program;i.uniformBlockBinding(y,A)}function c(y,v){let A=s[y.id];A===void 0&&(g(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",p));const D=v.program;i.updateUBOMapping(y,D);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const A=n.createBuffer(),D=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,A),A}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],A=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,T=A.length;w<T;w++){const X=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,b=X.length;M<b;M++){const z=X[M];if(m(z,w,M,D)===!0){const V=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let N=0;N<Z.length;N++){const W=Z[N],K=_(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+L,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,A,D){const w=y.value,T=v+"_"+A;if(D[T]===void 0)return typeof w=="number"||typeof w=="boolean"?D[T]=w:D[T]=w.clone(),!0;{const X=D[T];if(typeof w=="number"||typeof w=="boolean"){if(X!==w)return D[T]=w,!0}else if(X.equals(w)===!1)return X.copy(w),!0}return!1}function g(y){const v=y.uniforms;let A=0;const D=16;for(let T=0,X=v.length;T<X;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,z=M.length;b<z;b++){const V=M[b],Z=Array.isArray(V.value)?V.value:[V.value];for(let L=0,N=Z.length;L<N;L++){const W=Z[L],K=_(W),q=A%D;q!==0&&D-q<K.boundary&&(A+=D-q),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=K.storage}}}const w=A%D;return w>0&&(A+=D-w),y.__size=A,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Ac{constructor(t={}){const{canvas:e=Zh(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let A=!1,D=0,w=0,T=null,X=-1,M=null;const b=new ie,z=new ie;let V=null;const Z=new Et(0);let L=0,N=e.width,W=e.height,K=1,q=null,Y=null;const $=new ie(0,0,N,W),et=new ie(0,0,N,W);let ct=!1;const H=new Fo;let j=!1,at=!1,mt=null;const dt=new Kt,Ct=new Tt,Pt=new C,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return T===null?K:1}let I=i;function le(S,U){for(let k=0;k<S.length;k++){const G=S[k],O=e.getContext(G,U);if(O!==null)return O}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",rt,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=le(U,S),I===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,Ut,pt,se,Bt,E,x,B,tt,Q,nt,gt,lt,ut,wt,zt,J,jt,Wt,Lt,vt,ft,Ft,Yt;function ce(){xt=new up(I),Ut=new rp(I,xt,t),xt.init(Ut),ft=new $m(I,xt,Ut),pt=new Km(I,xt,Ut),se=new pp(I),Bt=new Im,E=new jm(I,xt,pt,Bt,Ut,ft,se),x=new ap(v),B=new hp(v),tt=new Su(I,Ut),Ft=new ip(I,xt,tt,Ut),Q=new fp(I,tt,se,Ft),nt=new xp(I,Q,tt,se),Wt=new _p(I,Ut,E),zt=new op(Bt),gt=new Um(v,x,B,xt,Ut,Ft,zt),lt=new tg(v,Bt),ut=new Fm,wt=new Hm(xt,Ut),jt=new np(v,x,B,pt,nt,d,l),J=new qm(v,nt,Ut),Yt=new eg(I,se,Ut,pt),Lt=new sp(I,xt,se,Ut),vt=new dp(I,xt,se,Ut),se.programs=gt.programs,v.capabilities=Ut,v.extensions=xt,v.properties=Bt,v.renderLists=ut,v.shadowMap=J,v.state=pt,v.info=se}ce();const Gt=new Qm(v,I);this.xr=Gt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(N,W,!1))},this.getSize=function(S){return S.set(N,W)},this.setSize=function(S,U,k=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,W=U,e.width=Math.floor(S*K),e.height=Math.floor(U*K),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(N*K,W*K).floor()},this.setDrawingBufferSize=function(S,U,k){N=S,W=U,K=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,U,k,G){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,k,G),pt.viewport(b.copy($).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,U,k,G){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,U,k,G),pt.scissor(z.copy(et).multiplyScalar(K).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){pt.setScissorTest(ct=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let G=0;if(S){let O=!1;if(T!==null){const ht=T.texture.format;O=ht===rc||ht===sc||ht===ic}if(O){const ht=T.texture.type,_t=ht===Yn||ht===Vn||ht===Do||ht===li||ht===ec||ht===nc,bt=jt.getClearColor(),Rt=jt.getClearAlpha(),kt=bt.r,It=bt.g,Nt=bt.b;_t?(m[0]=kt,m[1]=It,m[2]=Nt,m[3]=Rt,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=kt,g[1]=It,g[2]=Nt,g[3]=Rt,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ut.dispose(),wt.dispose(),Bt.dispose(),x.dispose(),B.dispose(),nt.dispose(),Ft.dispose(),Yt.dispose(),gt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",De),Gt.removeEventListener("sessionend",Qt),mt&&(mt.dispose(),mt=null),Ue.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=se.autoReset,U=J.enabled,k=J.autoUpdate,G=J.needsUpdate,O=J.type;ce(),se.autoReset=S,J.enabled=U,J.autoUpdate=k,J.needsUpdate=G,J.type=O}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ot(S){const U=S.target;U.removeEventListener("dispose",ot),At(U)}function At(S){yt(S),Bt.remove(S)}function yt(S){const U=Bt.get(S).programs;U!==void 0&&(U.forEach(function(k){gt.releaseProgram(k)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,G,O,ht){U===null&&(U=Mt);const _t=O.isMesh&&O.matrixWorld.determinant()<0,bt=jc(S,U,k,G,O);pt.setMaterial(G,_t);let Rt=k.index,kt=1;if(G.wireframe===!0){if(Rt=Q.getWireframeAttribute(k),Rt===void 0)return;kt=2}const It=k.drawRange,Nt=k.attributes.position;let ue=It.start*kt,Ve=(It.start+It.count)*kt;ht!==null&&(ue=Math.max(ue,ht.start*kt),Ve=Math.min(Ve,(ht.start+ht.count)*kt)),Rt!==null?(ue=Math.max(ue,0),Ve=Math.min(Ve,Rt.count)):Nt!=null&&(ue=Math.max(ue,0),Ve=Math.min(Ve,Nt.count));const Me=Ve-ue;if(Me<0||Me===1/0)return;Ft.setup(O,G,bt,k,Rt);let Sn,re=Lt;if(Rt!==null&&(Sn=tt.get(Rt),re=vt,re.setIndex(Sn)),O.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*St()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(O.isLine){let Ht=G.linewidth;Ht===void 0&&(Ht=1),pt.setLineWidth(Ht*St()),O.isLineSegments?re.setMode(I.LINES):O.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else O.isPoints?re.setMode(I.POINTS):O.isSprite&&re.setMode(I.TRIANGLES);if(O.isBatchedMesh)re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)re.renderInstances(ue,Me,O.count);else if(k.isInstancedBufferGeometry){const Ht=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Sr=Math.min(k.instanceCount,Ht);re.renderInstances(ue,Me,Sr)}else re.render(ue,Me)};function Zt(S,U,k){S.transparent===!0&&S.side===nn&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,As(S,U,k),S.side=qn,S.needsUpdate=!0,As(S,U,k),S.side=nn):As(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=wt.get(k),p.init(),y.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);const G=new Set;return S.traverse(function(O){const ht=O.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const bt=ht[_t];Zt(bt,k,O),G.add(bt)}else Zt(ht,k,O),G.add(ht)}),y.pop(),p=null,G},this.compileAsync=function(S,U,k=null){const G=this.compile(S,U,k);return new Promise(O=>{function ht(){if(G.forEach(function(_t){Bt.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){O(S);return}setTimeout(ht,10)}xt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Jt=null;function ve(S){Jt&&Jt(S)}function De(){Ue.stop()}function Qt(){Ue.start()}const Ue=new Mc;Ue.setAnimationLoop(ve),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(S){Jt=S,Gt.setAnimationLoop(S),S===null?Ue.stop():Ue.start()},Gt.addEventListener("sessionstart",De),Gt.addEventListener("sessionend",Qt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(U),U=Gt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,T),p=wt.get(S,y.length),p.init(),y.push(p),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(dt),at=this.localClippingEnabled,j=zt.init(this.clippingPlanes,at),_=ut.get(S,f.length),_.init(),f.push(_),pn(S,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,j===!0&&zt.beginShadows();const k=p.state.shadowsArray;if(J.render(k,S,U),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,S),p.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let O=0,ht=G.length;O<ht;O++){const _t=G[O];jo(_,S,_t,_t.viewport)}}else jo(_,S,U);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,U),Ft.resetDefaultState(),X=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function pn(S,U,k,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){G&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const _t=nt.update(S),bt=S.material;bt.visible&&_.push(S,_t,bt,k,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const _t=nt.update(S),bt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Pt.copy(_t.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(bt)){const Rt=_t.groups;for(let kt=0,It=Rt.length;kt<It;kt++){const Nt=Rt[kt],ue=bt[Nt.materialIndex];ue&&ue.visible&&_.push(S,_t,ue,k,Pt.z,Nt)}}else bt.visible&&_.push(S,_t,bt,k,Pt.z,null)}}const ht=S.children;for(let _t=0,bt=ht.length;_t<bt;_t++)pn(ht[_t],U,k,G)}function jo(S,U,k,G){const O=S.opaque,ht=S.transmissive,_t=S.transparent;p.setupLightsView(k),j===!0&&zt.setGlobalState(v.clippingPlanes,k),ht.length>0&&Kc(O,ht,U,k),G&&pt.viewport(b.copy(G)),O.length>0&&ws(O,U,k),ht.length>0&&ws(ht,U,k),_t.length>0&&ws(_t,U,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Kc(S,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ht=Ut.isWebGL2;mt===null&&(mt=new rn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?vn:Yn,minFilter:vs,samples:ht?4:0})),v.getDrawingBufferSize(Ct),ht?mt.setSize(Ct.x,Ct.y):mt.setSize(Mo(Ct.x),Mo(Ct.y));const _t=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(Z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const bt=v.toneMapping;v.toneMapping=Xn,ws(S,k,G),E.updateMultisampleRenderTarget(mt),E.updateRenderTargetMipmap(mt);let Rt=!1;for(let kt=0,It=U.length;kt<It;kt++){const Nt=U[kt],ue=Nt.object,Ve=Nt.geometry,Me=Nt.material,Sn=Nt.group;if(Me.side===nn&&ue.layers.test(G.layers)){const re=Me.side;Me.side=Ge,Me.needsUpdate=!0,$o(ue,k,G,Ve,Me,Sn),Me.side=re,Me.needsUpdate=!0,Rt=!0}}Rt===!0&&(E.updateMultisampleRenderTarget(mt),E.updateRenderTargetMipmap(mt)),v.setRenderTarget(_t),v.setClearColor(Z,L),v.toneMapping=bt}function ws(S,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ht=S.length;O<ht;O++){const _t=S[O],bt=_t.object,Rt=_t.geometry,kt=G===null?_t.material:G,It=_t.group;bt.layers.test(k.layers)&&$o(bt,U,k,Rt,kt,It)}}function $o(S,U,k,G,O,ht){S.onBeforeRender(v,U,k,G,O,ht),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,U,k,G,S,ht),O.transparent===!0&&O.side===nn&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,v.renderBufferDirect(k,U,G,O,S,ht),O.side=qn,O.needsUpdate=!0,v.renderBufferDirect(k,U,G,O,S,ht),O.side=nn):v.renderBufferDirect(k,U,G,O,S,ht),S.onAfterRender(v,U,k,G,O,ht)}function As(S,U,k){U.isScene!==!0&&(U=Mt);const G=Bt.get(S),O=p.state.lights,ht=p.state.shadowsArray,_t=O.state.version,bt=gt.getParameters(S,O.state,ht,U,k),Rt=gt.getProgramCacheKey(bt);let kt=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||G.environment),kt===void 0&&(S.addEventListener("dispose",ot),kt=new Map,G.programs=kt);let It=kt.get(Rt);if(It!==void 0){if(G.currentProgram===It&&G.lightsStateVersion===_t)return Jo(S,bt),It}else bt.uniforms=gt.getUniforms(S),S.onBuild(k,bt,v),S.onBeforeCompile(bt,v),It=gt.acquireProgram(bt,Rt),kt.set(Rt,It),G.uniforms=bt.uniforms;const Nt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),Jo(S,bt),G.needsLights=Zc(S),G.lightsStateVersion=_t,G.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=It,G.uniformsList=null,It}function Zo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Jo(S,U){const k=Bt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function jc(S,U,k,G,O){U.isScene!==!0&&(U=Mt),E.resetTextureUnits();const ht=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,bt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:On,Rt=(G.isMeshStandardMaterial?B:x).get(G.envMap||_t),kt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!k.morphAttributes.position,ue=!!k.morphAttributes.normal,Ve=!!k.morphAttributes.color;let Me=Xn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Sn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=Sn!==void 0?Sn.length:0,Ht=Bt.get(G),Sr=p.state.lights;if(j===!0&&(at===!0||S!==M)){const $e=S===M&&G.id===X;zt.setState(G,S,$e)}let he=!1;G.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Sr.state.version||Ht.outputColorSpace!==bt||O.isBatchedMesh&&Ht.batching===!1||!O.isBatchedMesh&&Ht.batching===!0||O.isInstancedMesh&&Ht.instancing===!1||!O.isInstancedMesh&&Ht.instancing===!0||O.isSkinnedMesh&&Ht.skinning===!1||!O.isSkinnedMesh&&Ht.skinning===!0||O.isInstancedMesh&&Ht.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ht.instancingColor===!1&&O.instanceColor!==null||Ht.envMap!==Rt||G.fog===!0&&Ht.fog!==ht||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==zt.numPlanes||Ht.numIntersection!==zt.numIntersection)||Ht.vertexAlphas!==kt||Ht.vertexTangents!==It||Ht.morphTargets!==Nt||Ht.morphNormals!==ue||Ht.morphColors!==Ve||Ht.toneMapping!==Me||Ut.isWebGL2===!0&&Ht.morphTargetsCount!==re)&&(he=!0):(he=!0,Ht.__version=G.version);let jn=Ht.currentProgram;he===!0&&(jn=As(G,U,O));let Qo=!1,is=!1,yr=!1;const Ae=jn.getUniforms(),$n=Ht.uniforms;if(pt.useProgram(jn.program)&&(Qo=!0,is=!0,yr=!0),G.id!==X&&(X=G.id,is=!0),Qo||M!==S){Ae.setValue(I,"projectionMatrix",S.projectionMatrix),Ae.setValue(I,"viewMatrix",S.matrixWorldInverse);const $e=Ae.map.cameraPosition;$e!==void 0&&$e.setValue(I,Pt.setFromMatrixPosition(S.matrixWorld)),Ut.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,is=!0,yr=!0)}if(O.isSkinnedMesh){Ae.setOptional(I,O,"bindMatrix"),Ae.setOptional(I,O,"bindMatrixInverse");const $e=O.skeleton;$e&&(Ut.floatVertexTextures?($e.boneTexture===null&&$e.computeBoneTexture(),Ae.setValue(I,"boneTexture",$e.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ae.setOptional(I,O,"batchingTexture"),Ae.setValue(I,"batchingTexture",O._matricesTexture,E));const Er=k.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0&&Ut.isWebGL2===!0)&&Wt.update(O,k,jn),(is||Ht.receiveShadow!==O.receiveShadow)&&(Ht.receiveShadow=O.receiveShadow,Ae.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($n.envMap.value=Rt,$n.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),is&&(Ae.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&$c($n,yr),ht&&G.fog===!0&&lt.refreshFogUniforms($n,ht),lt.refreshMaterialUniforms($n,G,K,W,mt),rr.upload(I,Zo(Ht),$n,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rr.upload(I,Zo(Ht),$n,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(I,"center",O.center),Ae.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(I,"normalMatrix",O.normalMatrix),Ae.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $e=G.uniformsGroups;for(let br=0,Jc=$e.length;br<Jc;br++)if(Ut.isWebGL2){const ta=$e[br];Yt.update(ta,jn),Yt.bind(ta,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function $c(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Zc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,U,k){Bt.get(S.texture).__webglTexture=U,Bt.get(S.depthTexture).__webglTexture=k;const G=Bt.get(S);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const k=Bt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){T=S,D=U,w=k;let G=!0,O=null,ht=!1,_t=!1;if(S){const Rt=Bt.get(S);Rt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Rt.__webglFramebuffer===void 0?E.setupRenderTarget(S):Rt.__hasExternalTextures&&E.rebindTextures(S,Bt.get(S.texture).__webglTexture,Bt.get(S.depthTexture).__webglTexture);const kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);const It=Bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[U])?O=It[U][k]:O=It[U],ht=!0):Ut.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?O=Bt.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[k]:O=It,b.copy(S.viewport),z.copy(S.scissor),V=S.scissorTest}else b.copy($).multiplyScalar(K).floor(),z.copy(et).multiplyScalar(K).floor(),V=ct;if(pt.bindFramebuffer(I.FRAMEBUFFER,O)&&Ut.drawBuffers&&G&&pt.drawBuffers(S,O),pt.viewport(b),pt.scissor(z),pt.setScissorTest(V),ht){const Rt=Bt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,k)}else if(_t){const Rt=Bt.get(S.texture),kt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,k||0,kt)}X=-1},this.readRenderTargetPixels=function(S,U,k,G,O,ht,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){pt.bindFramebuffer(I.FRAMEBUFFER,bt);try{const Rt=S.texture,kt=Rt.format,It=Rt.type;if(kt!==fn&&ft.convert(kt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=It===vn&&(xt.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&xt.has("EXT_color_buffer_float"));if(It!==Yn&&ft.convert(It)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===Wn&&(Ut.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&k>=0&&k<=S.height-O&&I.readPixels(U,k,G,O,ft.convert(kt),ft.convert(It),ht)}finally{const Rt=T!==null?Bt.get(T).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(S,U,k=0){const G=Math.pow(2,-k),O=Math.floor(U.image.width*G),ht=Math.floor(U.image.height*G);E.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,S.x,S.y,O,ht),pt.unbindTexture()},this.copyTextureToTexture=function(S,U,k,G=0){const O=U.image.width,ht=U.image.height,_t=ft.convert(k.format),bt=ft.convert(k.type);E.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,O,ht,_t,bt,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,_t,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,_t,bt,U.image),G===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k,G,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=S.max.x-S.min.x+1,_t=S.max.y-S.min.y+1,bt=S.max.z-S.min.z+1,Rt=ft.convert(G.format),kt=ft.convert(G.type);let It;if(G.isData3DTexture)E.setTexture3D(G,0),It=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),It=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Nt=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ve=I.getParameter(I.UNPACK_SKIP_PIXELS),Me=I.getParameter(I.UNPACK_SKIP_ROWS),Sn=I.getParameter(I.UNPACK_SKIP_IMAGES),re=k.isCompressedTexture?k.mipmaps[O]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,re.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(It,O,U.x,U.y,U.z,ht,_t,bt,Rt,kt,re.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(It,O,U.x,U.y,U.z,ht,_t,bt,Rt,re.data)):I.texSubImage3D(It,O,U.x,U.y,U.z,ht,_t,bt,Rt,kt,re),I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,Me),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),O===0&&G.generateMipmaps&&I.generateMipmap(It),pt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){D=0,w=0,T=null,pt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Uo?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?hi:ac}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===hi?fe:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ng extends Ac{}ng.prototype.isWebGL1Renderer=!0;class zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ig extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class di extends be{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new Kt,yl=new Kt,$s=[],El=new gi,sg=new Kt,cs=new Xt,hs=new Ji;class Vi extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ui),El.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ui),hs.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(i),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),yl.multiplyMatrices(i,Ui),cs.matrixWorld=yl,cs.raycast(t,$s);for(let o=0,a=$s.length;o<a;o++){const l=$s[o];l.instanceId=r,l.object=this,e.push(l)}$s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rc extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bl=new Kt,yo=new pc,Zs=new Ji,Js=new C;class rg extends ge{constructor(t=new Ne,e=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;bl.copy(s).invert(),yo.copy(t.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);Js.fromBufferAttribute(u,p),Tl(Js,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Js.fromBufferAttribute(u,g),Tl(Js,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(n,t,e,i,s,r,o){const a=yo.distanceSqToPoint(n);if(a<e){const l=new C;yo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Kn extends He{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends Ne{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=i/2;let f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(m,2));function y(){const A=new C,D=new C;let w=0;const T=(e-t)/i;for(let X=0;X<=r;X++){const M=[],b=X/r,z=b*(e-t)+t;for(let V=0;V<=s;V++){const Z=V/s,L=Z*l+a,N=Math.sin(L),W=Math.cos(L);D.x=z*N,D.y=-b*i+p,D.z=z*W,u.push(D.x,D.y,D.z),A.set(N,T,W).normalize(),d.push(A.x,A.y,A.z),m.push(Z,1-b),M.push(g++)}_.push(M)}for(let X=0;X<s;X++)for(let M=0;M<r;M++){const b=_[M][X],z=_[M+1][X],V=_[M+1][X+1],Z=_[M][X+1];h.push(b,z,Z),h.push(z,V,Z),w+=6}c.addGroup(f,w,0),f+=w}function v(A){const D=g,w=new Tt,T=new C;let X=0;const M=A===!0?t:e,b=A===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*b,0),d.push(0,b,0),m.push(.5,.5),g++;const z=g;for(let V=0;V<=s;V++){const L=V/s*l+a,N=Math.cos(L),W=Math.sin(L);T.x=M*W,T.y=p*b,T.z=M*N,u.push(T.x,T.y,T.z),d.push(0,b,0),w.x=N*.5+.5,w.y=W*.5*b+.5,m.push(w.x,w.y),g++}for(let V=0;V<s;V++){const Z=D+V,L=z+V;A===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),X+=3}c.addGroup(f,X,A===!0?1:2),f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Go extends Ne{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,m=new C,g=new Tt;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const f=r+p/i*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const p=_*(i+1);for(let f=0;f<i;f++){const y=f+p,v=y,A=y+i+1,D=y+i+2,w=y+1;a.push(v,A,w),a.push(A,D,w)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class og extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mn extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ho extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ag extends Ho{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const no=new Kt,wl=new C,Al=new C;class Cc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rl=new Kt,us=new C,io=new C;class lg extends Cc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),i.position.copy(us),io.copy(i.position),io.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(io),i.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),Rl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Pc extends Ho{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cg extends Cc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const Lc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ug=new Oo(-1,1,1,-1,0,1);class fg extends Ne{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}}const dg=new fg;class Vo{constructor(t){this._mesh=new Xt(dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ug)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class pg extends ns{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pl extends ns{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class mg extends ns{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Tt);this._width=i.width,this._height=i.height,e=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pg(Lc),this.copyPass.material.blending=Nn,this.clock=new hg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pl!==void 0&&(o instanceof Pl?i=!0:o instanceof mg&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _g extends ns{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const xg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends ns{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new rn(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new rn(r,o,{type:vn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=xg;this.highPassUniforms=Ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Lc;this.copyUniforms=Ms.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new pe,this.fsQuad=new Vo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ji.BlurDirectionX=new Tt(1,0);ji.BlurDirectionY=new Tt(0,1);const vg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mg extends ns{constructor(){super();const t=vg;this.uniforms=Ms.clone(t.uniforms),this.material=new og({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Vo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const fs=new C;function Je(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fs.copy(t),fs[i]=0,fs.normalize();const c=.5*o/(o+a),h=1-fs.angleTo(n)/l;return Math.sign(fs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Dc extends Te{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new C,l=new C,c=new C(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new C,_=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=Je(g,l,"z","y",r,i),d[f+1]=1-Je(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Je(g,l,"z","y",r,i),d[f+1]=1-Je(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Je(g,l,"x","z",r,t),d[f+1]=Je(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-Je(g,l,"x","z",r,t),d[f+1]=1-Je(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-Je(g,l,"x","y",r,t),d[f+1]=1-Je(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Je(g,l,"x","y",r,t),d[f+1]=1-Je(g,l,"y","x",r,e);break}}}const Qs=(n,t,e)=>`${n},${t},${e}`;class we{constructor(){this.cells=new Map}set(t,e,i,s,r=!1){return this.cells.set(Qs(t,e,i),{x:t,y:e,z:i,color:s,glow:r}),this}get(t,e,i){return this.cells.get(Qs(t,e,i))}has(t,e,i){return this.cells.has(Qs(t,e,i))}clear(t,e,i){return this.cells.delete(Qs(t,e,i)),this}box(t,e,i,s,r,o,a,l=!1){for(let c=Math.min(t,s);c<=Math.max(t,s);c++)for(let h=Math.min(e,r);h<=Math.max(e,r);h++)for(let u=Math.min(i,o);u<=Math.max(i,o);u++)this.set(c,h,u,a,l);return this}rounded(t,e,i,s,r,o,a,l=!1){this.box(t,e,i,s,r,o,a,l);for(let c=t;c<=s;c++)for(let h=e;h<=r;h++)for(let u=i;u<=o;u++){const d=c===t||c===s,m=h===e||h===r,g=u===i||u===o;(d&&m||d&&g||m&&g)&&this.clear(c,h,u)}return this}ellipsoid(t,e,i,s,r,o,a,l=!1){for(let c=Math.floor(t-s);c<=Math.ceil(t+s);c++)for(let h=Math.floor(e-r);h<=Math.ceil(e+r);h++)for(let u=Math.floor(i-o);u<=Math.ceil(i+o);u++)((c-t)/s)**2+((h-e)/r)**2+((u-i)/o)**2<=1&&this.set(c,h,u,a,l);return this}paint(t,e,i){for(const s of this.cells.values())t(s)&&(s.color=e,i!==void 0&&(s.glow=i));return this}carve(t){for(const[e,i]of this.cells)t(i)&&this.cells.delete(e);return this}mirrorX(t){for(const e of[...this.cells.values()])this.set(2*t-e.x,e.y,e.z,e.color,e.glow);return this}}const Sg=[{n:[1,0,0],u:[0,1,0],v:[0,0,1]},{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,1,0],u:[0,0,1],v:[1,0,0]},{n:[0,-1,0],u:[1,0,0],v:[0,0,1]},{n:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],u:[0,1,0],v:[1,0,0]}],yg=[.42,.62,.8,1],ds=new Et;function Eg(n,t,e){let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967295}function bg(n,{pivot:t=[0,0,0],size:e=.1,jitter:i=.035}={}){const s={solid:{p:[],n:[],c:[],i:[]},glow:{p:[],n:[],c:[],i:[]}},r=(a,l,c)=>n.has(a,l,c);for(const a of n.cells.values()){const l=a.glow?s.glow:s.solid;if(ds.set(a.color),!a.glow&&i){const c=1+(Eg(a.x,a.y,a.z)-.5)*2*i;ds.multiplyScalar(c)}for(const c of Sg){const[h,u,d]=c.n;if(r(a.x+h,a.y+u,a.z+d))continue;const m=l.p.length/3,g=[[0,0],[1,0],[1,1],[0,1]],_=[];for(const[p,f]of g){const y=p?1:-1,v=f?1:-1,A=a.x+.5*h+.5*y*c.u[0]+.5*v*c.v[0],D=a.y+.5*u+.5*y*c.u[1]+.5*v*c.v[1],w=a.z+.5*d+.5*y*c.u[2]+.5*v*c.v[2];l.p.push((A-t[0])*e,(D-t[1])*e,(w-t[2])*e),l.n.push(h,u,d);let T=3;if(!a.glow){const M=a.x+h,b=a.y+u,z=a.z+d,V=r(M+y*c.u[0],b+y*c.u[1],z+y*c.u[2]),Z=r(M+v*c.v[0],b+v*c.v[1],z+v*c.v[2]),L=r(M+y*c.u[0]+v*c.v[0],b+y*c.u[1]+v*c.v[1],z+y*c.u[2]+v*c.v[2]);T=V&&Z?0:3-(V+Z+L)}_.push(T);const X=yg[T];l.c.push(ds.r*X,ds.g*X,ds.b*X)}_[0]+_[2]>_[1]+_[3]?l.i.push(m,m+1,m+2,m,m+2,m+3):l.i.push(m+1,m+2,m+3,m+1,m+3,m)}}const o=a=>{if(!a.p.length)return null;const l=new Ne;return l.setAttribute("position",new Ee(a.p,3)),l.setAttribute("normal",new Ee(a.n,3)),l.setAttribute("color",new Ee(a.c,3)),l.setIndex(a.p.length/3>65535?new No(a.i,1):new Io(a.i,1)),l.computeBoundingSphere(),l};return{solid:o(s.solid),glow:o(s.glow)}}const R={night:460299,floor:855059,line:1775910,skin:14722172,skinShade:12878943,blush:15306620,hair:2759446,hairHi:4862247,eye:1642767,eyeHi:16774892,brow:2037010,mouth:9324086,hoodie:16735022,hoodieShade:14172959,hoodieDeep:11088408,cord:16773599,tee:1644576,pants:2499890,shoe:15855336,sole:1447196,phones:1841956,phonesPad:2894391,chair:1512990,chairSeam:2368301,chairAccent:16735022,metal:3815751,metalLight:5921128,desk:1710370,deskTop:2302509,shell:8157840,shellLight:10131629,shellDark:4473434,face:723472,research:13041466,build:16747039,check:10849279,alert:16723530,proven:6160266,signal:16735022,white:16184042,working:1096065,asking:16096779,plan:3900150,done:14369938},ee=n=>`#${n.toString(16).padStart(6,"0")}`;function Tg(){const n=new we;n.box(-2,-3,-2,2,0,1,R.skinShade),n.rounded(-5,0,-5,5,10,5,R.skin),n.carve(t=>t.y===0&&Math.abs(t.x)>=4),n.carve(t=>t.y===0&&t.z<=-3),n.rounded(-6,8,-6,6,11,4,R.hair),n.box(-5,2,-6,5,8,-6,R.hair),n.box(-5,8,5,1,10,6,R.hair),n.box(2,10,5,5,10,5,R.hair),n.set(-5,7,6,R.hair),n.set(-4,7,6,R.hair),n.box(-4,12,-4,4,12,3,R.hair),n.box(-2,13,-1,3,13,4,R.hairHi),n.box(0,14,1,2,14,3,R.hairHi),n.box(-5,10,6,-3,10,6,R.hairHi),n.box(2,12,4,4,12,4,R.hairHi),n.box(-4,11,5,-1,11,5,R.hairHi),n.box(-3,4,5,-2,5,5,R.eye),n.set(-2,5,5,R.eyeHi),n.box(2,4,5,3,5,5,R.eye),n.set(3,5,5,R.eyeHi),n.box(-4,7,5,-2,7,5,R.brow),n.box(2,7,5,4,7,5,R.brow),n.set(0,3,6,R.skinShade),n.box(-1,1,5,1,1,5,R.mouth),n.set(2,2,5,R.mouth),n.set(-4,3,5,R.blush),n.set(4,3,5,R.blush),n.set(-6,4,0,R.skin),n.set(6,4,0,R.skin);for(let t=-5;t<=5;t++)n.set(t,14-(Math.abs(t)>3?1:0),0,R.phones);n.box(-7,9,0,-6,12,0,R.phones),n.box(6,9,0,7,12,0,R.phones);for(const t of[-1,1]){n.rounded(t*6,2,-3,t*8,8,3,R.phones),n.box(t*6,3,-2,t*6,7,2,R.phonesPad);for(let e=3;e<=7;e++)for(let i=-2;i<=2;i++)(e===3||e===7||Math.abs(i)===2)&&n.set(t*9,e,i,R.signal,!0);n.box(t*9,4,-1,t*9,6,1,R.phonesPad)}return[[-8,2,3],[-8,1,4],[-7,1,5],[-6,1,6],[-5,1,6],[-4,1,6]].forEach(([t,e,i])=>n.set(t,e,i,R.phones)),n.set(-3,1,6,R.signal,!0),{vox:n,pivot:[0,-3,0]}}function wg(){const n=new we;return n.rounded(-5,0,-3,5,5,3,R.hoodie),n.rounded(-7,4,-3,7,12,3,R.hoodie),n.box(-5,0,-3,5,0,3,R.hoodieShade),n.rounded(-5,10,-6,5,14,-2,R.hoodieShade),n.box(-4,11,-5,4,13,-4,R.hoodieDeep),n.box(-3,12,-1,3,13,2,R.tee),n.box(-4,12,3,4,12,3,R.hoodieShade),n.box(-4,1,4,4,5,4,R.hoodieShade),n.box(-3,5,4,3,5,4,R.hoodieDeep),n.box(-2,8,4,-2,11,4,R.cord),n.box(2,8,4,2,11,4,R.cord),n.set(-2,7,4,R.white),n.set(2,6,4,R.white),n.set(2,7,4,R.cord),n.box(4,8,4,5,9,4,R.hoodieDeep),n.set(4,9,4,R.cord),{vox:n,pivot:[0,0,0]}}function Ag(){const n=new we;return n.rounded(-2,-9,-2,2,1,2,R.hoodie),n.box(-2,-3,-2,2,-3,2,R.hoodieShade),{vox:n,pivot:[0,0,0]}}function Rg(){const n=new we;return n.rounded(-2,-2,-2,2,2,7,R.hoodie),n.box(-2,-2,6,2,2,7,R.hoodieShade),{vox:n,pivot:[0,0,0]}}function Cg(n=1){const t=new we;t.box(-2,-1,0,2,0,2,R.skin),t.box(-2,-1,3,2,-1,3,R.skin);for(const e of[-2,-1,0,1])t.set(e,-2,4,R.skinShade);return t.box(n*3,-1,1,n*3,-1,2,R.skin),t.box(-2,0,0,2,0,0,R.skinShade),{vox:t,pivot:[0,0,0]}}function Pg(){const n=new we;return n.rounded(-3,-3,-2,3,2,9,R.pants),{vox:n,pivot:[0,0,0]}}function Lg(){const n=new we;return n.rounded(-2,-10,-2,2,1,2,R.pants),n.rounded(-3,-13,-3,3,-10,5,R.shoe),n.box(-3,-13,-3,3,-13,5,R.sole),n.box(-1,-10,1,1,-10,4,R.cord),n.box(-3,-12,-3,3,-12,-3,R.signal),{vox:n,pivot:[0,0,0]}}function Dg(){const n=new we;for(let t=0;t<5;t++){const e=t/5*Math.PI*2+.3;for(let i=0;i<=7;i++)n.set(Math.round(Math.sin(e)*i),1,Math.round(Math.cos(e)*i),R.metal);n.box(Math.round(Math.sin(e)*7),0,Math.round(Math.cos(e)*7),Math.round(Math.sin(e)*7),0,Math.round(Math.cos(e)*7),R.chair)}n.box(-1,2,-1,1,8,1,R.metalLight),n.rounded(-7,8,-7,7,11,7,R.chair),n.box(-8,10,-6,-7,12,7,R.chairAccent),n.box(7,10,-6,8,12,7,R.chairAccent);for(const t of[-1,1])n.box(t*9,11,-3,t*9,17,-2,R.metal),n.rounded(t*10,17,-5,t*8,18,3,R.chair);n.rounded(-8,11,-10,8,41,-7,R.chair),n.paint(t=>t.z<=-7&&Math.abs(t.x)>=6&&t.y<36,R.chairAccent),n.carve(t=>t.y>=37&&Math.abs(t.x)>=6),n.carve(t=>t.y>=33&&t.y<=35&&(t.x===4||t.x===-4)),n.rounded(-4,36,-7,4,39,-6,R.chairSeam);for(let t=14;t<32;t+=4)n.box(-5,t,-7,5,t,-7,R.chairSeam);return n.box(-1,25,-7,1,28,-7,R.chairAccent),{vox:n,pivot:[0,0,0]}}function Ug(){const n=new we;n.rounded(-24,15,-9,24,16,9,R.deskTop),n.box(-23,14,-8,23,14,8,R.desk),n.box(-24,15,9,24,15,9,R.signal,!0);for(const t of[-1,1])n.box(t*21,0,-8,t*22,14,-6,R.desk),n.box(t*21,0,6,t*22,14,8,R.desk),n.box(t*21,0,-8,t*22,1,8,R.metal),n.box(t*21,2,-1,t*22,12,1,R.desk);return n.box(-3,17,-8,3,17,-5,R.metal),n.box(-1,18,-7,1,22,-6,R.metalLight),n.box(15,17,1,19,17,5,R.chairSeam),n.rounded(16,18,2,18,21,4,R.white),n.box(19,19,3,19,20,3,R.white),n.box(16,21,2,18,21,4,3810328),{vox:n,pivot:[0,0,0]}}function Ig(){const n=new we;n.rounded(-34,0,-26,34,3,26,1381404),n.box(-33,3,-25,33,3,25,1776164);for(let t=-33;t<=33;t+=6)n.box(t,3,-25,t,3,25,2105130);for(let t=-25;t<=25;t+=6)n.box(-33,3,t,33,3,t,2105130);return n.box(-34,2,-26,34,2,-26,R.signal,!0),n.box(-34,2,26,34,2,26,R.signal,!0),n.box(-34,2,-26,-34,2,26,R.signal,!0),n.box(34,2,-26,34,2,26,R.signal,!0),{vox:n,pivot:[0,3.5,0]}}function Ng(n){const t=new we,e=R[n];t.rounded(-5,0,-4,5,8,4,R.shell),t.box(-5,8,-4,5,8,4,R.shellLight),t.rounded(-4,1,4,4,7,5,R.face),t.box(-5,0,-4,5,0,4,R.shellDark);for(const i of[-1,1])t.rounded(i*6,2,-2,i*7,6,2,R.shellDark),t.set(i*7,4,0,e,!0);if(n==="research"&&(t.box(-3,3,6,3,4,6,e,!0),t.set(-3,5,6,e,!0),t.set(3,5,6,e,!0),t.box(0,9,0,0,12,0,R.shellDark),t.box(-1,13,-1,1,15,1,e,!0),t.box(-3,9,-3,3,9,3,R.shellDark)),n==="build"&&(t.box(-3,3,6,-2,5,6,e,!0),t.box(2,3,6,3,5,6,e,!0),t.rounded(-5,8,-4,5,11,4,R.build),t.box(-6,8,-5,6,8,6,R.build),t.box(-1,11,-3,1,12,3,16755021),t.box(-1,9,5,1,10,5,R.white,!0),t.box(-5,9,-4,5,9,4,14247439)),n==="check"){t.box(-3,3,6,-2,5,6,e,!0),t.box(2,3,6,3,5,6,e,!0);for(let i=1;i<=4;i++)for(let s=2;s<=6;s++)(i===1||i===4||s===2||s===6)&&t.set(i,s,7,R.check);t.box(4,6,6,5,7,6,R.check),t.box(-1,9,-3,1,13,1,R.check),t.box(-1,12,2,1,12,2,e,!0)}return{vox:t,pivot:[0,0,0]}}function Fg(n){const t=new we,e=R[n];return t.rounded(-4,0,-3,4,6,3,R.shell),t.box(-3,6,-2,3,6,2,R.shellLight),t.box(-2,2,4,2,4,4,R.shellDark),t.box(-1,3,4,1,3,4,e,!0),n==="research"&&(t.rounded(-3,1,-5,3,5,-4,R.shellDark),t.box(-2,2,-6,2,2,-6,e,!0),t.box(-2,4,-6,2,4,-6,e,!0)),n==="build"&&(t.box(-4,0,-3,4,1,3,R.build),t.box(3,0,4,4,1,4,14247439)),n==="check"&&t.box(-4,5,-3,4,5,3,R.check),{vox:t,pivot:[0,0,0]}}function Og(n){const t=new we;t.rounded(-1,-5,-1,1,0,1,R.shellDark);const e=n==="build"?R.build:R.shellLight;return t.rounded(-2,-8,-2,2,-5,2,e),{vox:t,pivot:[0,0,0]}}function Bg(n){const t=new we;return n==="research"?(t.rounded(-2,-2,-2,2,0,2,R.shellDark),t.box(-1,-3,-1,1,-3,1,R.research,!0),{vox:t,pivot:[0,0,0]}):(t.box(-1,-3,-1,1,0,1,R.shellDark),t.rounded(-2,-5,-2,2,-3,3,n==="build"?R.build:R.shellLight),{vox:t,pivot:[0,0,0]})}function zg(){const n=new we;return n.box(0,0,0,0,0,7,R.shellDark),n.box(-1,-1,8,1,1,9,R.check,!0),{vox:n,pivot:[0,0,0]}}function kg(){const n=new we,t=18,e=18;n.box(-t,0,-2,t,1,2,R.shellDark),n.box(-t,2*e+2,-2,t,2*e+3,2,R.shellDark),n.box(-t,0,-2,-t+1,2*e+3,2,R.shellDark),n.box(t-1,0,-2,t,2*e+3,2,R.shellDark),n.box(-t+2,2,-2,t-2,2*e+1,-1,1184024);for(const i of[-1,1])n.box(i*(t-3),-14,-1,i*(t-2),-1,0,R.metal),n.box(i*(t-6),-15,-4,i*(t+1),-14,3,R.shellDark);return n.box(-t+2,2*e+4,-1,t-2,2*e+4,1,R.shellDark),{vox:n,pivot:[0,-15,0]}}const Gg={w:16184042,o:16747039,l:13041466,v:10849279,p:16732064,y:16765503,s:7039104,r:16723530,g:6160266,b:8366335},Ll=[["..........",".......ll.",".......ll.","....oo.ll.","....oo.ll.",".vv.oo.ll.",".vv.oo.ll.",".vv.oo.ll.","wwwwwwwwww",".........."],["...wwww...","..w....w..","..w....w..","..w....w..",".oooooooo.",".oooooooo.",".oooyyooo.",".ooooyooo.",".oooooooo.",".........."],["..........",".vvvvvvvv.",".vvvvvvvv.",".vwwvwwvv.",".vvvvvvvv.",".vwwwwvvv.",".vvvvvvvv.","...vv.....","...v......",".........."],["....ww....","...wwww...","...wbbw...","...wwww...","..wwwwww..","..wwwwww..","..o.ww.o..","....oo....","....yy....",".....y...."],["..........","..llll....",".l....l...",".l....l...",".l....l...","..llll....","......ww..",".......ww.","........ww",".........."],["....yy....",".y.yyyy.y.","..yyyyyy..",".yyy..yyy.","yyy....yyy","yyy....yyy",".yyy..yyy.","..yyyyyy..",".y.yyyy.y.","....yy...."],["..........",".pp....pp.","pppp..pppp","pppppppppp","pppppppppp",".pppppppp.","..pppppp..","...pppp...","....pp....",".........."],["...oooo...","..oooooo..","..oo..oo..","..oo..oo..","..oooooo..","...oooo...","....oo....","....oo....","..ssssss..",".........."],["..........","..........","bbbbbbbbbb","bbbbbbbbbb","ssssssssss","bbbbbbbbbb","bwwbbbbbbb","bbbbbbbbbb","..........",".........."],["....yy....","...yyyy...","..yyyyyy..","..yyyyyy..","..yyyyyy..",".yyyyyyyy.","yyyyyyyyyy","..........","....yy....",".........."]];function Uc(n){const t=Ll[n%Ll.length],e=[];for(let i=0;i<10;i++)for(let s=0;s<10;s++){const r=t[9-i][s];e.push(r==="."?null:Gg[r])}return e}function Hg(){const n=new we,t=6;for(let e=0;e<44;e++){const i=e>38?e-38:0,s=t-Math.floor(i/2);n.box(-s,e,-s,s,e,s,e%6===5?1644578:2368303)}for(let e=4;e<38;e+=6)for(const i of[-1,1])n.box(-t+1,e,i*t,t-1,e,i*t,R.research,!0),n.box(i*t,e,-t+1,i*t,e,t-1,R.research,!0);return n.box(-2,44,-2,2,46,2,R.research,!0),n.rounded(-9,-2,-9,9,0,9,1381404),{vox:n,pivot:[0,-2,0]}}const pr={solid:new Mn({vertexColors:!0,roughness:.78,metalness:0}),glow:new pe({vertexColors:!0,toneMapped:!1})};pr.glow.color.setScalar(1.7);const ro=new Map;function Ic(n,t,e=.1){const i=`${n}@${e}`;if(!ro.has(i)){const s=t();ro.set(i,bg(s.vox,{pivot:s.pivot,size:e}))}return ro.get(i)}function Qe(n,t,{size:e=.1,shadow:i=!0}={}){const s=Ic(n,t,e),r=new $t;if(s.solid){const o=new Xt(s.solid,pr.solid);o.castShadow=i,o.receiveShadow=!0,r.add(o)}return s.glow&&r.add(new Xt(s.glow,pr.glow)),r}function Ye(n,t,e,i,s){return n.position.set(t,e,i),s&&s.add(n),n}let oo;function Wo(n,t,e=.5){if(!oo){const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.35,"rgba(255,255,255,.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),oo=new Kn(s)}const i=new Xt(new dn(t*2,t*2),new pe({map:oo,color:n,transparent:!0,opacity:e,depthWrite:!1,blending:Fn,toneMapped:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=1,i}const oi=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),Dl=[[["`",1],["1",1],["2",1],["3",1],["4",1],["5",1],["6",1],["7",1],["8",1],["9",1],["0",1],["-",1],["=",1],["⌫",2]],[["Tab",1.5],["Q",1],["W",1],["E",1],["R",1],["T",1],["Y",1],["U",1],["I",1],["O",1],["P",1],["[",1],["]",1],["\\",1.5]],[["Caps",1.75],["A",1],["S",1],["D",1],["F",1],["G",1],["H",1],["J",1],["K",1],["L",1],[";",1],["'",1],["Enter",2.25]],[["Shift",2.25],["Z",1],["X",1],["C",1],["V",1],["B",1],["N",1],["M",1],[",",1],[".",1],["/",1],["Shift ",2.75]],[["Ctrl",1.25],["⌘",1.25],["Alt",1.25],["",6.25],["Alt ",1.25],["Fn",1.25],["☰",1.25],["Ctrl ",1.25]]],zi=.1,Vg=["N","L","P","D","G","C","S","Enter","Shift","Ctrl"];function Wg(n){const i=document.createElement("canvas");i.width=i.height=1024;const s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,i.width,i.height);const r=new Map;n.forEach(([a,l],c)=>{const h=c%8*128,u=Math.floor(c/8)*128;s.save(),s.translate(h+128/2,u+128/2),s.scale(1/l,1);const d=a.trim();s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.font=`600 ${d.length>1?34:54}px 'Archivo Variable', Arial, sans-serif`,s.fillText(d,0,2),s.restore(),r.set(a,[c%8/8,1-(Math.floor(c/8)+1)/8,1/8])});const o=new Kn(i);return o.colorSpace=fe,o.anisotropy=4,{texture:o,uv:r,blank:[7/8,0,1/8]}}function Xg(n,[t,e,i],s){const r=new Te(n*zi-.016,.045,zi-.016),o=r.attributes.uv;for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l,[h,u,d]=a===2?[t,e,i]:s,m=a===2?0:.3;o.setXY(c,h+d*(m+o.getX(c)*(1-2*m)*(a===2?1:.1)),u+d*(m+o.getY(c)*(1-2*m)*(a===2?1:.1)))}return r}class Yg{constructor(t){this.group=new $t,t.add(this.group);const e=Dl.flat();this.atlas=Wg(e);const i=new Xt(new Dc(1.56,.045,.58,2,.02),new Mn({color:1381403,roughness:.5,metalness:.3}));i.position.y=.022,i.castShadow=i.receiveShadow=!0,this.group.add(i);const s=document.createElement("canvas");s.width=256,s.height=8;const r=s.getContext("2d"),o=r.createLinearGradient(0,0,256,0);o.addColorStop(0,ee(R.research)),o.addColorStop(.5,ee(R.signal)),o.addColorStop(1,ee(R.check)),r.fillStyle=o,r.fillRect(0,0,256,8);const a=new Xt(new dn(1.5,.52),new pe({map:new Kn(s),toneMapped:!1,color:new Et(1.1,1.1,1.1)}));a.rotation.x=-Math.PI/2,a.position.y=.047,this.group.add(a),this.capMaterial=new Mn({color:2368300,roughness:.6,emissive:16777215,emissiveMap:this.atlas.texture,emissiveIntensity:.55});const l=[];this.keys={},Dl.forEach((u,d)=>{let g=-u.reduce((_,[,p])=>_+p,0)*zi/2;u.forEach(([_,p])=>{const f=g+p*zi/2;g+=p*zi;const y=(d-2)*zi,v=Xg(p,this.atlas.uv.get(_),this.atlas.blank),A=_.trim();if(Vg.includes(A)&&!this.keys[A]){const D=this.capMaterial.clone(),w=new Xt(v,D);w.position.set(f,.078,y),w.castShadow=!0,this.group.add(w),this.keys[A]={mesh:w,material:D,press:0,glow:0,x:f,z:y}}else v.translate(f,.078,y),l.push(v)})});const c=qg(l),h=new Xt(c,this.capMaterial);h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.glowColor=new Et(R.signal)}update(t,e){for(const[i,s]of Object.entries(this.keys)){const r=t[i]||{press:0,glow:0};s.press=oi(s.press,r.press,30,e),s.glow=oi(s.glow,r.glow,14,e),s.mesh.position.y=.078-s.press*.022,s.material.color.setHex(2368300).lerp(this.glowColor,s.glow*.85),s.material.emissiveIntensity=.55+s.glow*2.5}}hand(t){var e;return(((e=this.keys[t])==null?void 0:e.x)??0)>0?0:1}reach(t){var e;return Math.min(1,Math.abs(((e=this.keys[t])==null?void 0:e.x)??0)/.5)}worldPosition(t,e=new C){const i=this.keys[t];return i?i.mesh.getWorldPosition(e):e}}function qg(n){let t=0,e=0;for(const h of n)t+=h.attributes.position.count,e+=h.index.count;const i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint32Array(e);let a=0,l=0;for(const h of n){i.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);for(let u=0;u<h.index.count;u++)o[l+u]=h.index.array[u]+a;a+=h.attributes.position.count,l+=h.index.count}const c=new Ne;return c.setAttribute("position",new be(i,3)),c.setAttribute("normal",new be(s,3)),c.setAttribute("uv",new be(r,2)),c.setIndex(new be(o,1)),c}function ki(n,t,e,i,s,r){n.beginPath(),n.roundRect(t,e,i,s,r)}function Eo(n,t,e,i,s,r,o="left"){const{cells:a,width:l}=or(t),c=o==="center"?e-l*s/2:e;n.fillStyle=r;for(const[h,u]of a)n.fillRect(c+h*s,i+u*s,s-1,s-1)}class Ul{constructor(t,e,i){this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=Math.round(1024*e/t),this.ctx=this.canvas.getContext("2d"),this.draw=i,this.key="",this.texture=new Kn(this.canvas),this.texture.colorSpace=fe,this.texture.anisotropy=4;const s=new Xt(new Dc(t+.06,e+.06,.05,2,.02),new Mn({color:1184023,roughness:.45,metalness:.4}));s.castShadow=!0;const r=new Xt(new dn(t,e),new pe({map:this.texture,toneMapped:!1}));r.material.color.setScalar(1.25),r.position.z=.027;const o=new Xt(new Te(t*.8,.018,.01),new pe({color:R.check,toneMapped:!1}));o.material.color.multiplyScalar(1.6),o.position.set(0,-e/2+.06,-.031),this.group=new $t,this.group.add(s,r,o)}refresh(t){const e=JSON.stringify(t);e!==this.key&&(this.key=e,this.draw(this.ctx,this.canvas.width,this.canvas.height,t),this.texture.needsUpdate=!0)}}const Nc={working:"Working",plan:"Plan ready",done:"Idle"},Pe=(n,t=600)=>`${t} ${n}px "Archivo Variable", Arial`,Fi=n=>`500 ${n}px ui-monospace, Menlo, Consolas, monospace`;function bo(n,t,e,i,s){n.fillStyle=ee(R[s]),n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.fill()}function Il(n,t,e,i){n.font=Fi(24);const s=Math.max(40,n.measureText(t).width+22);return n.fillStyle="#26242f",ki(n,e,i-20,s,40,6),n.fill(),n.fillStyle="#f3efe8",n.textAlign="center",n.fillText(t,e+s/2,i+1),n.textAlign="left",s}function Kg(n,t,e,i){n.fillStyle="#0d0c13",n.fillRect(0,0,t,e),n.fillStyle="#16151f",n.fillRect(0,0,t,72),Eo(n,"imba",28,22,4,ee(R.signal)),n.textBaseline="middle",n.font=Pe(28),n.fillStyle="#8f8aa6",n.fillText("Spawns",150,37),n.textAlign="right",n.fillStyle="#d9d4ea",n.fillText(`${i.count} working`,t-28,37),n.textAlign="left",i.rank&&(n.fillStyle="rgba(255,91,46,.12)",n.fillRect(0,72,t,112),Eo(n,i.rank,t/2,100,i.rank.length>11?6:8,ee(R.signal),"center"));const s=i.rank?198:90,r=56;i.rows.slice(0,Math.floor((e-s)/r)).forEach((a,l)=>{const c=s+l*r;n.fillStyle=l===0?"#1d1b29":"#12111a",ki(n,20,c,t-40,46,8),n.fill(),bo(n,48,c+23,10,a.state),n.fillStyle="#e8e4f4",n.font=Pe(26),n.fillText(a.task,76,c+24),n.textAlign="right",n.fillStyle=ee(R[a.state]),n.font=Pe(22,500),n.fillText(Nc[a.state],t-44,c+24),n.textAlign="left"})}const jg=[["read","Read","src/checkout/total.ts"],["run","npm test","3 failed"],["edit","Edit total.ts","+42 −9"],["run","npm test","41 passed"],["think","Refunds use this total too",""],["you","Keep the old total for refunds",""],["plan","Plan approved","4 steps"],["edit","Edit refunds.ts","+18 −2"]],$g=["Keep the old total for refunds","Add a refund total","Migrate the orders table","Test both totals"],Zg=[["src/checkout/total.ts",42,9],["src/refunds/refunds.ts",18,2],["db/orders.sql",6,0]],Jg=["Add the refund export","Split the price cache","Tidy the sign-in page"];function Qg(n,t,e,i){if(n.fillStyle="#0d0c13",n.fillRect(0,0,t,e),n.textBaseline="middle",i.view==="none"){Eo(n,"imba",t/2,e/2-20,8,"#2a2735","center");return}n.fillStyle="#16151f",n.fillRect(0,0,t,76);const s={changes:"Changes",graph:"Commit graph"}[i.view];if(s?(n.fillStyle="#f3efe8",n.font=Pe(32,700),n.fillText(s,32,39)):(i.state&&bo(n,44,38,12,i.state),n.fillStyle="#f3efe8",n.font=Pe(32,700),n.fillText(i.task,72,39),i.state&&(n.textAlign="right",n.fillStyle=ee(R[i.state]),n.font=Pe(26),n.fillText(Nc[i.state],t-32,39),n.textAlign="left")),i.view==="feed"){jg.slice(0,i.lines).slice(-6).forEach(([a,l,c],h)=>{const u=116+h*78;if(a==="you"){n.strokeStyle=ee(R.signal),n.lineWidth=3,ki(n,120,u-30,t-152,60,10),n.stroke(),n.fillStyle="#f3efe8",n.font=Pe(28),n.fillText(l,144,u);return}const d={read:"#6f6a86",run:"#6f6a86",edit:ee(R.working),think:"#4a4660",plan:ee(R.plan)}[a];n.fillStyle=d,n.fillRect(32,u-12,24,24),n.fillStyle=a==="think"?"#8f8aa6":"#e8e4f4",n.font=a==="run"?Fi(28):Pe(28,a==="think"?500:600),n.fillText(a==="run"?`$ ${l}`:l,76,u),c&&(n.textAlign="right",n.font=Fi(26),n.fillStyle=/failed/.test(c)?ee(R.alert):/passed|\+/.test(c)?ee(R.working):"#8f8aa6",n.fillText(c,t-32,u),n.textAlign="left")});return}if(i.view==="plan"){n.fillStyle="rgba(59,130,246,.1)",n.fillRect(0,76,t,e-76),n.fillStyle=ee(R.plan),n.font=Pe(28),n.fillText("Plan",32,124),$g.forEach((o,a)=>{const l=184+a*62;n.fillStyle="#6f6a86",n.font=Fi(26),n.fillText(`${a+1}`,32,l),n.fillStyle="#e8e4f4",n.font=Pe(28),n.fillText(o,72,l)}),n.fillStyle=ee(R.plan),ki(n,32,452,300,84,10),n.fill(),n.fillStyle="#f3efe8",n.font=Pe(32,700),n.fillText("Approve",60,495),Il(n,"P",264,494);return}if(i.view==="changes"){Zg.forEach(([o,a,l],c)=>{const h=124+c*64;n.fillStyle=c===0?"#1d1b29":"#12111a",ki(n,20,h-26,t-40,52,8),n.fill(),n.fillStyle="#e8e4f4",n.font=Fi(26),n.fillText(o,40,h),n.textAlign="right",n.fillStyle=ee(R.working),n.fillText(`+${a}`,t-120,h),n.fillStyle=ee(R.alert),n.fillText(l?`−${l}`:"",t-40,h),n.textAlign="left"});for(let o=0;o<5;o++){const a=330+o*50,l=o%3!==1;n.fillStyle=l?"rgba(16,185,129,.12)":"rgba(255,46,74,.12)",n.fillRect(20,a,t-40,42),n.fillStyle=ee(l?R.working:R.alert),n.font=Fi(28),n.fillText(l?"+":"−",36,a+21),n.fillStyle="#b9b4cc",n.fillRect(76,a+17,160+o*131%460,9)}return}n.fillStyle="#34313f",n.fillRect(58,130,4,e-150);const r=i.committed?{state:"working",text:i.task,extra:"just now"}:{state:"asking",text:"Uncommitted",extra:"3 files"};n.fillStyle=i.committed?"rgba(16,185,129,.12)":"rgba(245,158,11,.1)",ki(n,20,96,t-40,76,10),n.fill(),i.committed?bo(n,60,134,16,r.state):(n.fillStyle="#0d0c13",n.beginPath(),n.arc(60,134,13,0,Math.PI*2),n.fill(),n.strokeStyle=ee(R.asking),n.lineWidth=5,n.stroke()),n.fillStyle="#f3efe8",n.font=Pe(30,700),n.fillText(r.text,96,134),i.committed?(n.textAlign="right",n.fillStyle=ee(R.working),n.font=Pe(24,500),n.fillText(r.extra,t-44,134),n.textAlign="left"):(n.fillStyle="#b9b4cc",n.font=Pe(24,500),n.fillText(r.extra,330,134),n.fillStyle="#b9b4cc",n.font=Pe(26),n.fillText("Commit",t-190,134),Il(n,"C",t-90,134)),Jg.forEach((o,a)=>{const l=236+a*96;n.fillStyle=ee(R.check),n.beginPath(),n.arc(60,l,11,0,Math.PI*2),n.fill(),n.fillStyle="#b9b4cc",n.font=Pe(28,500),n.fillText(o,96,l)})}class t_{constructor(t){this.cols=84,this.rows=22;const e=.19,i=new dn(e*.82,e*.82);this.mesh=new Vi(i,new pe({toneMapped:!1}),this.cols*this.rows);const s=new Kt;for(let r=0;r<this.rows;r++)for(let o=0;o<this.cols;o++)this.mesh.setMatrixAt(r*this.cols+o,s.makeTranslation((o-(this.cols-1)/2)*e,(this.rows-1-r)*e,0));this.mesh.instanceColor=new di(new Float32Array(this.cols*this.rows*3),3),this.frame=new Xt(new dn(this.cols*e+.4,this.rows*e+.4),new Mn({color:789265,roughness:.6})),this.frame.position.set(0,(this.rows-1)*e/2,-.03),this.group=new $t,this.group.add(this.mesh,this.frame),t.add(this.group),this.lit=new Float32Array(this.cols*this.rows),this.target=new Float32Array(this.cols*this.rows),this.color=new Et,this.logo()}clearTarget(){this.target.fill(0)}plot(t,e,i=1){t>=0&&e>=0&&t<this.cols&&e<this.rows&&(this.target[e*this.cols+t]=i)}logo(t){this.clearTarget();const e=[...Qc.matchAll(/M(\d+) (\d+)/g)].map(o=>[+o[1],+o[2]]),i=t?2:3,s=Math.floor((this.cols-19*i)/2),r=0;for(const[o,a]of e)for(let l=0;l<i;l++)for(let c=0;c<i;c++)this.plot(s+o*i+l,r+a*i+c,1)}words(t,e,i){this.clearTarget();const s=or(t),r=!i&&s.width*2<=this.cols-4?2:1,o=Math.floor((this.cols-s.width*r)/2),a=r===2?0:3;for(const[l,c]of s.cells)for(let h=0;h<r;h++)for(let u=0;u<r;u++)this.plot(o+l*r+h,a+c*r+u,1);if(e){const l=or(e),c=Math.floor((this.cols-l.width)/2);for(const[h,u]of l.cells)this.plot(c+h,15+u,.45)}}update(t,e,i,s){const r=this.mesh.instanceColor.array;for(let o=0;o<this.lit.length;o++){this.lit[o]=oi(this.lit[o],this.target[o],9+o%7,t);const a=.05+.04*Math.sin(e*1.7+o*.37),l=this.lit[o];this.color.copy(i).multiplyScalar(a).lerp(s,Math.min(1,l));const c=.15+l*1.9;r[o*3]=this.color.r*c,r[o*3+1]=this.color.g*c,r[o*3+2]=this.color.b*c}this.mesh.instanceColor.needsUpdate=!0}}class e_{constructor(t){this.root=new $t,t.add(this.root),Ye(Qe("chair",Dg),0,0,0,this.root),this.hips=Ye(new $t,0,1.5,.1,this.root),this.torso=Ye(new $t,0,0,0,this.hips),this.torso.add(Qe("torso",wg)),this.head=Ye(new $t,0,1.3,.05,this.torso),this.head.add(Qe("head",Tg));const e=new Mn({color:R.skin,roughness:.8});this.lids=[-2.5,2.5].map(i=>{const s=new Xt(new Te(.2,.2,.02),e);return s.position.set(i*.1,.45,.56),s.scale.y=.01,this.head.add(s),s}),this.arms=[-1,1].map(i=>{const s=Ye(new $t,i*.75,1.02,0,this.torso);s.add(Qe("upper-arm",Ag));const r=Ye(new $t,0,-.8,0,s);r.add(Qe("forearm",Rg));const o=Ye(new $t,0,0,.78,r);return o.add(Qe(`hand${i}`,()=>Cg(-i))),{s:i,shoulder:s,elbow:r,wrist:o,tap:0,reach:0}});for(const i of[-1,1]){const s=Ye(new $t,i*.32,-.05,0,this.hips);s.rotation.y=i*.06,s.add(Qe("thigh",Pg)),Ye(new $t,0,-.05,.8,s).add(Qe("shin",Lg))}this.look=new Tt,this.lookTarget=new Tt,this.blinkAt=2}update(t,e,{typing:i=0,hands:s=[{},{}],look:r=[0,0],lean:o=0}){const a=Math.sin(t*1.6);this.torso.rotation.x=.12+o*.1+a*.01,this.hips.position.y=1.5+a*.004,this.lookTarget.set(r[0],r[1]),this.look.x=oi(this.look.x,this.lookTarget.x,4,e),this.look.y=oi(this.look.y,this.lookTarget.y,4,e),this.head.rotation.set(-.06+this.look.y+a*.01,this.look.x,this.look.x*-.08),this.arms.forEach((c,h)=>{const u=s[h]||{};c.tap=oi(c.tap,u.tap||0,26,e),c.reach=oi(c.reach,u.reach||0,10,e);const d=i*Math.max(0,Math.sin(t*17+h*2.1))*.07;c.shoulder.rotation.set(-.5-c.reach*.06,c.reach*.12*-c.s,c.s*.14),c.elbow.rotation.set(.42+d*.4-c.tap*.1,-c.s*.44+c.reach*.25*c.s,0),c.wrist.rotation.set(.22+d+c.tap*.35,c.s*.2,0)}),t>this.blinkAt&&(this.blinkAt=t+2.5+(Math.sin(t*13.7)+1)*1.8,this.blinkStart=t);const l=this.blinkStart!==void 0?1-Math.min(1,Math.abs(t-this.blinkStart-.07)/.07):0;for(const c of this.lids)c.scale.y=Math.max(.01,l)}}class n_{constructor(t){this.group=new $t,t.add(this.group),Ye(Qe("platform",Ig),0,0,.8,this.group),this.operator=new e_(this.group);const e=Ye(Qe("desk",Ug),0,0,1.9,this.group);e.rotation.y=Math.PI,this.keyboard=new Yg(this.group),this.keyboard.group.position.set(0,1.655,1.42),this.keyboard.group.rotation.y=Math.PI,this.left=new Ul(1.46,.86,Kg),this.right=new Ul(1.46,.86,Qg);for(const[s,r]of[[this.left,-1],[this.right,1]]){Ye(s.group,r*.78,2.2,2.42,this.group),s.group.rotation.y=Math.PI+r*.34;const o=new Xt(new Te(.06,.5,.06),new Mn({color:3815751,roughness:.5,metalness:.5}));Ye(o,r*.78,1.9,2.5,this.group)}this.wall=new t_(this.group),this.wall.group.position.set(0,2.2,-5.4),this.monitorLight=new Pc(13620991,5,5,1.6),this.monitorLight.position.set(0,2.4,2.1),this.group.add(this.monitorLight);const i=Wo(R.signal,4.2,.22);i.position.set(0,.37,.8),this.group.add(i),this.wallBase=new Et(R.check),this.wallAccent=new Et(R.signal)}update(t,e,i){this.operator.update(t,e,i.operator),this.keyboard.update(i.keys,e),this.left.refresh(i.spawns),this.right.refresh(i.detail);const s=`${i.wall}|${i.narrow}`;s!==this.wallKey&&(this.wallKey=s,i.wall==="logo"?this.wall.logo(i.narrow):this.wall.words(i.wall,i.wallSub,i.narrow)),this.wall.update(e,t,this.wallBase,this.wallAccent)}}const gs=16,F={build:1,built:8.5,scanEnd:10.4,fixThrow:10.8,fixed:11.4,rescanEnd:12.5,meet:12.6,slap:13.05,send:13.1,part:13.55,sent:14.7,clear:15.2},_s=.7,xn=(n,t)=>t.set((n%10-4.5)*.15,1.725+(Math.floor(n/10)-4.5)*.15,.045);function Ss(n){let t=null;return n>=F.built&&n<F.scanEnd&&(t=(n-F.built)/(F.scanEnd-F.built)),n>=F.fixed&&n<F.rescanEnd&&(t=(n-F.fixed)/(F.rescanEnd-F.fixed)),t===null?null:1.725+(t*10-5)*.15}const i_=[["out",.85],["read",.45],["back",.8],["toss",.3]];function s_(n){for(const t of[.6,3,5.4]){let e=n-t;if(e<0)break;for(const[i,s]of i_){if(e<s)return{phase:i,k:e/s};e-=s}}return null}const r_=.85,je=(n,t,e)=>new C(n,t,e),Be={build:je(-1.35,0,.5),research:je(0,3.05,.45),check:je(1.35,0,.55)},o_={build:1,research:0,check:-1},Nl=je(-1.1,0,.78),tr=[je(1.62,0,1.05),je(1.18,0,.3)],Fl=je(1.3,0,1.2),er=[je(-.6,0,1.1),je(.6,0,1.1)],$i=je(0,1.35,1.5),To=je(0,1.7,0),Fc={build:[[0,Be.build,1],[10.3,Be.build,1],[10.55,Nl,1.3],[11.55,Nl,1.3],[11.95,Be.build,1],[F.rescanEnd,Be.build,1],[F.meet+.4,er[0],Math.PI/2],[F.part,er[0],Math.PI/2],[F.part+.5,Be.build,1],[gs,Be.build,1]],check:[[0,Be.check,-1],[1.8,Be.check,-1],[2.5,tr[0],-1.3],[4.6,tr[0],-1.3],[5.3,tr[1],-.8],[7.4,tr[1],-.8],[8.2,Fl,-1.65],[F.meet,Fl,-1.65],[F.meet+.4,er[1],-Math.PI/2],[F.part,er[1],-Math.PI/2],[F.part+.5,Be.check,-1],[gs,Be.check,-1]]},mr=(n,t,e)=>Math.max(t,Math.min(e,n)),on=n=>mr(n,0,1),Dt=n=>(n=on(n),n*n*(3-2*n)),Oc=n=>1-(1-on(n))**3,me=(n,t,e)=>n+(t-n)*e,pi=(n,t,e)=>on((n-t)/(e-t)),oe=(n,t,e)=>n<=t||n>=e?0:Math.sin(Math.PI*(n-t)/(e-t)),tn=(n,t,e)=>oe(n,t,e)**2,_n=(n,t,e,i=.15)=>Dt((n-t)/i)*Dt((e-n)/i),ne=(n,t,e,i,s=i)=>Dt((n-t)/i)*(1-Dt((n-e)/s)),wo=n=>Math.atan2(Math.sin(n),Math.cos(n)),ai=(n,t,e)=>n+wo(t-n)*e,Ol=(n,t)=>{const e=Math.sin(n*127.1+t*311.7)*43758.5453;return(e-Math.floor(e))*2-1},ys=(n,t,e)=>{const i=n*t+e,s=Math.floor(i);return me(Ol(s,e),Ol(s+1,e),Dt((i-s)/.2))},a_=n=>n<0?0:Math.exp(-n*9)*Math.cos(n*22),l_=je(0,-.68,0),c_=je(0,.38,0),Pn=new C,Ke=new C,xs=new C,gr=new C,h_=new C,u_=new C,Ao=(n,t,e)=>n.squad.rig.worldToLocal(n.arms[t].localToWorld(e.copy(l_))),f_=(n,t)=>n.squad.rig.worldToLocal(n.head.localToWorld(t.set(0,.4,.25)));function Bc(n,t,e,i){p_(n),n.role==="build"?x_(n,t,e,t.t,i):n.role==="check"?v_(n,t,e,t.t):M_(n,t,e,t.t,i),__(n,t,e)}function d_(n){const t=n.agents[0],e=[n.t,n.shown,t.presence,t.target,t.landAt];n.shown=1,t.presence=1,t.target=1,t.landAt=-1e3;const i=(o,a)=>(n.t=o,Bc(t,n,0,null),n.rig.updateMatrixWorld(!0),Ao(t,a,new C)),s=o=>{let a=Math.min(10+o,n.throws);return a%2!==o&&a--,F.build-_s+a*n.gap},r=[i(s(0),0),i(s(1),1),i(F.fixThrow,0)];return[n.t,n.shown,t.presence,t.target,t.landAt]=e,r}function p_(n){n.root.position.copy(n.home),n.root.rotation.set(0,n.yaw,0),n.body.position.set(0,.55,0),n.body.rotation.set(0,0,0),n.head.rotation.set(0,0,0),n.arms[0].rotation.set(0,0,-.12),n.arms[1].rotation.set(0,0,.12),n.legs[0].rotation.set(0,0,0),n.legs[1].rotation.set(0,0,0),n.wand&&n.wand.rotation.set(0,0,0),n.stretch=1}function zc(n,t,e){if(e<=0)return;const i=Math.sin(t*1.8+n.seed),s=Math.sin(t*.7+n.seed*2.3);n.body.position.y+=i*.014*e,n.body.position.x+=s*.03*e,n.body.rotation.z-=s*.045*e,n.legs[0].rotation.z+=s*.045*e,n.legs[1].rotation.z+=s*.045*e,n.arms[0].rotation.z-=(i*.03+s*.04)*e,n.arms[1].rotation.z+=(i*.03-s*.04)*e,n.arms[0].rotation.x+=Math.sin(t*1.8+n.seed-.7)*.05*e,n.arms[1].rotation.x+=Math.sin(t*1.8+n.seed-1.2)*.05*e}function kc(n,t){let e=0;for(;e<n.length-2&&t>=n[e+1][0];)e++;const[i,s,r]=n[e],[o,a,l]=n[e+1],c=pi(t,i,o),h=Dt(c),u=s.distanceTo(a),d={pos:h_.lerpVectors(s,a,h),yaw:ai(r,l,h),walk:0,ease:0,phase:0,back:!1,gaze:1};if(u>.01?d.gaze=0:(e>0&&n[e-1][1].distanceTo(s)>.01&&(d.gaze*=Dt((t-i)/.35)),e<n.length-2&&n[e+2][1].distanceTo(a)>.01&&(d.gaze*=1-Dt((t-o+.35)/.35))),u>.01&&c>0&&c<1){d.walk=Math.min(1,Math.sin(Math.PI*c)*2.5),d.ease=Dt(Math.min(c,1-c)/.5),d.phase=h*Math.max(1,Math.round(Math.min(u/.26,(o-i)*4.5)))*Math.PI;let m=Math.atan2(a.x-s.x,a.z-s.z);Math.max(Math.abs(wo(m-r)),Math.abs(wo(m-l)))>2&&(m+=Math.PI,d.back=!0),d.yaw=ai(d.yaw,m,d.ease)}return d}function Gc(n,t){const e=t.walk;if(e<=0)return;const i=Math.sin(t.phase);n.legs[0].rotation.x+=i*.8*e,n.legs[1].rotation.x-=i*.8*e,n.arms[0].rotation.x-=i*.6*e,n.arms[1].rotation.x+=i*.6*e,n.body.position.y+=(Math.abs(Math.cos(t.phase))*.07-.035)*e,n.body.rotation.z+=i*.06*e,n.body.rotation.x+=(t.back?-.06:.14)*e}let Xo=0,_r=0;function Hc(n,t,e,i){n.root.updateMatrixWorld(!0),Pn.copy(e).applyMatrix4(n.squad.rig.matrixWorld),t.parent.worldToLocal(Pn).sub(t.position),i&&Pn.sub(i),Xo=Math.atan2(Pn.x,Pn.z),_r=Math.atan2(Pn.y,Math.hypot(Pn.x,Pn.z))}const m_=(n,t)=>{const e=Math.abs(n)-t;return e<=0?n:Math.sign(n)*t*(1-Dt(e/(Math.PI-t)))};function ae(n,t,e=1){if(e<=0)return;Hc(n,n.head,t,c_);const i=1-Dt((Math.abs(_r)-.9)/.6);n.head.rotation.x=me(n.head.rotation.x,mr(-_r,-.4,.55),e),n.head.rotation.y=me(n.head.rotation.y,m_(Xo,1.3)*i,e)}function In(n,t,e,i=1){i<=0||(Hc(n,t,e),t.rotation.x=me(t.rotation.x,-(Math.PI/2+_r),i),t.rotation.y=me(t.rotation.y,Xo,i),t.rotation.z=me(t.rotation.z,0,i))}function ye(n,t,e,i){n.rotation.x=me(n.rotation.x,t,i),n.rotation.y=me(n.rotation.y,0,i),n.rotation.z=me(n.rotation.z,e,i)}const nr=[Ss(F.built),Ss(F.rescanEnd-1e-9)];function Vc(n){const t=Ss(n);return t!==null?t:n<F.built?nr[0]:n<F.fixed?me(nr[1],nr[0],Dt(pi(n,F.scanEnd,F.fixed))):nr[1]}function Es(n,t,e,i){i<=0||(ae(n,t.localDeck,i),n.head.rotation.y+=ys(e,.35,n.seed)*.5*i,n.head.rotation.x+=ys(e,.27,n.seed+5)*.12*i)}function Yo(n,t,e){t.cardSeen&&ae(n,t.cardLocal,ne(e,F.send+.25,F.sent-.2,.4,.2))}function qo(n,t,e){n.head.rotation.y+=Math.sin(t*20)*.25*on(1-t/.8)*e}function Bl(n,t,e,i=1,s=.85){if(i<=0)return;let r=0;e>-.45&&e<-.14?r=s*Dt((e+.45)/.31):e>=-.14&&e<.1?r=me(s,-1.45,Dt((e+.14)/.24)):e>=.1&&e<.5&&(r=-1.45*(1-Dt((e-.1)/.4))),n.rotation.x=me(n.rotation.x,r,i),n.rotation.y=me(n.rotation.y,0,i),n.rotation.z=me(n.rotation.z,(t?1:-1)*(.12+.15*oe(e,-.45,.5)),i)}function bs(n,t,e,i){i<=0||(ye(n.arms[t],.35,(t?1:-1)*(2.45+Math.sin(e*13+n.seed)*.38),i),n.head.rotation.z+=(t?-1:1)*.08*i)}const Wc=(n,t)=>{t>0&&(ye(n.arms[0],.25,-2.95,t),ye(n.arms[1],.25,2.95,t))},Ro=(n,t)=>{t>0&&(ye(n.arms[0],.45,-2.4,t),ye(n.arms[1],.45,2.4,t))},Xc=(n,t)=>{t>0&&(ye(n.arms[0],-1.25,.85,t),ye(n.arms[1],-1.25,-.85,t))},ao=(n,t)=>{t>0&&(ye(n.arms[0],-1.05,.45,t),ye(n.arms[1],-1.05,-.45,t))};function Yc(n,t){const e=oe(t,F.slap+.09,F.slap+.42);return n.root.position.y+=.42*e,n.stretch*=1+.14*e-.2*tn(t,F.slap-.03,F.slap+.14)-.22*tn(t,F.slap+.37,F.slap+.6),n.legs[0].rotation.x-=.5*e,n.legs[1].rotation.x+=.5*e,u_.copy($i).setY($i.y+.42*e)}const Dn=.55,zl=n=>Dt((n.presence-Dn)/(1-Dn)),lo=.08,g_=n=>n<lo?Dt(n/lo):a_(n-lo);function __(n,t,e){const i=n.presence;let s=1;if(n.target){const a=on(i/Dn);a<1&&(n.root.position.y+=2.6*(1-a*a),n.stretch*=1+1.2*a*(1-a),s=.3+.7*Oc(i/.3),n.arms[0].rotation.z-=1.2*a,n.arms[1].rotation.z+=1.2*a);const l=e-n.landAt;if(a>=1&&l>0&&l<2.2){n.stretch*=1-.28*g_(l);const c=Math.exp(-l*5);n.arms[0].rotation.z-=1.2*c,n.arms[1].rotation.z+=1.2*c,n.head.rotation.y+=Math.sin(l*26)*.35*on(1-l/.4);const h=_n(l,.35,1.9,.3);bs(n,0,e,h),ae(n,t.localDeck,h)}}else n.root.position.y+=(1-i)*2,n.stretch*=1+(1-i)*.9,s=i;const r=r_*s*t.shown,o=r/Math.sqrt(n.stretch);n.root.scale.set(o,r*n.stretch,o)}function x_(n,t,e,i,s){const{body:r,arms:o,legs:a}=n,l=kc(Fc.build,i);n.root.position.copy(l.pos),n.root.rotation.y=l.yaw;const c=F.build-_s,h=t.throws,u=(i-c)/t.gap,d=t.detectAt,m=ne(i,0,F.built-.3,.3,.25),g=ne(i,F.built-.3,d,.25,.22)+ne(i,11.6,F.rescanEnd-.1,.3,.25),_=ne(i,d,10.22,.22,.25),p=ne(i,10.22,11.6,.25,.3),f=_n(i,F.slap-.3,F.slap+.12,.15),y=ne(i,F.slap,F.part-.1,.2,.25),v=_n(i,F.part+.5,F.sent+.05,.3),A=_n(i,F.clear-.1,F.clear+.75,.15),D=t.mood,w=Dt(D.asking),T=Dt(D.plan),X=Dt(D.done),M=St=>e-(t.heard[St]??-1e3),b=M("plan"),z=M("commit"),V=g*zl(t.agents[2]),Z=(g-V)*(1-Math.max(w,T,X)),L=on(m+V+_+p+f+y+v+A+l.walk);zc(n,e,1-L),Gc(n,l);const N=ne(i,F.rescanEnd-.1,F.slap+.3,.25,.3),W=ne(i,F.clear-.45,F.clear+.35,.3,.4)*.8,K=ne(i,0,F.built-.3,.7,.25),q=Z*(1-Dt(.5+1.5*Math.sin(e*.5+n.seed))*(1-_n(b,.2,3.4,.6))),Y=1-on(K+V+_+p+N+W+q),$=Math.max(D.asking,D.plan),et=1-Dt(n.root.position.distanceTo(Be.build)/.2),ct=Math.max(Dt($)*.8,Y*.55*et);if(ct>0){const St=Math.atan2(t.localDeck.x-n.root.position.x,t.localDeck.z-n.root.position.z);n.root.rotation.y=ai(n.root.rotation.y,St,ct),a[0].rotation.x-=.35*oe($,0,.5),a[1].rotation.x-=.35*oe($,.5,1)}if(m>0){r.rotation.y+=(.6+.2*Math.cos(Math.PI*mr(u,0,h+1)))*m,r.rotation.x+=.1*m,a[0].rotation.z-=.14*m,a[1].rotation.z+=.14*m;for(const St of[0,1]){const I=2*Math.round((u-St)/2)+St;if(I<1||I>h)continue;const le=(u-I)*t.gap;Bl(o[St],St,le,m),a[St].rotation.x-=.3*oe(le,-.35,.2)*m,r.position.y-=.04*oe(le,-.05,.35)*m}}if(V>0&&(r.position.y+=Math.abs(Math.sin(e*9+n.seed))*.025*V,a[0].rotation.x-=Math.max(0,Math.sin(e*11+n.seed))*.25*V,o[0].rotation.x-=.65*V,o[0].rotation.z+=.5*V,o[1].rotation.x-=.65*V,o[1].rotation.z-=.5*V),Z>0&&(r.rotation.y+=.25*q,o[0].rotation.x+=.45*Z,o[0].rotation.z+=.25*Z,o[1].rotation.x+=.45*Z,o[1].rotation.z-=.25*Z),_>0&&(n.root.position.y+=.12*oe(i-d,0,.28),r.rotation.x-=.18*_,Wc(n,_)),p>0){const St=oe(i,10.3,F.fixThrow);r.position.y-=.1*St*p,r.rotation.x+=(.35*oe(i,F.fixThrow-.05,11.2)-.25*St)*p,r.rotation.y+=.45*p,Bl(o[0],0,i-F.fixThrow,p,1.15),o[1].rotation.x-=.5*p,o[1].rotation.z+=.35*p}const H=oe(i,F.fixThrow+.02,11.18);n.root.position.y+=.24*H,n.stretch*=1+.12*H-.16*tn(i,11.14,11.42),a[0].rotation.x+=.5*H,a[1].rotation.x-=.3*H;const j=oe(b,.15,.45),at=oe(z,.2,.55);n.root.position.y+=.14*j+.22*at,n.stretch*=1+.08*j+.1*at-.12*tn(b,.4,.62)-.14*tn(z,.5,.75);const mt=Yc(n,i);r.rotation.x+=.15*f,A>0&&(r.rotation.y+=.5*A),o[0].rotation.x-=2.7*oe(i,F.rescanEnd,F.rescanEnd+.45),In(n,o[0],$i,f),Ro(n,y),bs(n,0,e,v);const dt=Math.max(0,i-F.clear);if(xs.set(Math.sin(dt*8)*.55,1.7+Math.cos(dt*8)*.35,.05),In(n,o[1],xs,A),w>0&&ye(o[0],.35,-2.4+Math.sin(e*5+n.seed)*.22,w),In(n,o[1],To,T*.9),Xc(n,X),Ro(n,_n(z,.1,1.4,.35)),Es(n,t,e,Y),K>0){const St=mr(u-.5,0,h-1),I=Math.floor(St),le=t.perThrow,xt=t.order.length-1;xn(t.order[Math.min(xt,le*I)],Ke).lerp(xn(t.order[Math.min(xt,le*(I+1))],Pn),St-I),ae(n,Ke,K)}ae(n,Ke.set(ys(e,.5,n.seed+9)*.55,1.725+ys(e,.4,n.seed+4)*.5,.1),q),ae(n,Ke.set(0,Vc(i),.1),V),ae(n,xn(t.defect,Ke),_+p),qo(n,i-d,_),ae(n,mt,N),ae(n,xs,W),Yo(n,t,i);const Ct=zl(t.agents[1]),Pt=((s==null?void 0:s.phase)==="back"?Dt((s.k-.55)/.45):(s==null?void 0:s.phase)==="toss"?1-Dt(s.k):0)*Ct;Pt>0&&ae(n,Ke.copy(t.agents[1].root.position).setY(t.agents[1].root.position.y+.8),Pt*.9),(s==null?void 0:s.phase)==="toss"&&(n.head.rotation.x+=.25*tn(s.k,.45,1)*Ct),ae(n,t.localDeck,Math.max(w,T)),ae(n,To,T*.85*Dt(.5+1.5*Math.sin(e*1.1+n.seed))),n.head.rotation.z+=.14*w,Es(n,t,e,X);const Mt=M("steer");ae(n,t.localDeck,_n(Mt,.45,2,.4)*.7),n.head.rotation.x+=.2*tn(Mt,.85,1.2)+.16*tn(Mt,1.2,1.55)+.28*tn(b,.1,.5)}function v_(n,t,e,i){const{body:s,arms:r,legs:o,wand:a}=n,l=kc(Fc.check,i);n.root.position.copy(l.pos),n.root.rotation.y=l.yaw;const c=Vc(i),h=i-t.detectAt,u=_n(i,1.9,8.15,.3)*(1-l.walk),d=ne(i,8.05,F.scanEnd-.12,.3,.15)+ne(i,11.25,F.meet-.05,.15,.25),m=ne(i,t.detectAt,10.45,.1,.15),g=ne(i,10.45,F.fixThrow,.15,.15),_=ne(i,F.fixThrow,11.25,.15,.15),p=_n(i,F.slap-.22,F.slap+.1,.1),f=ne(i,F.slap,F.part-.1,.12,.15),y=_n(i,F.part+.5,F.sent+.05,.15),v=on(u+d+m+g+_+p+f+y+l.walk);if(zc(n,e,Math.max(.4,1-v)),Gc(n,l),d>0&&(s.rotation.y-=.35*d,s.rotation.x+=.1*d),m>0){const M=oe(h,0,.4);n.root.position.x-=Math.sin(l.yaw)*.16*M,n.root.position.z-=Math.cos(l.yaw)*.16*M,n.root.position.y+=.1*oe(h,0,.26),s.rotation.x-=.32*M,o[0].rotation.x-=.45*oe(h,.36,.56)}const A=Yc(n,i);s.rotation.x+=.15*p;const D=Dt(.5+Math.sin(e*.45+n.seed)*2);u>0&&(r[0].rotation.x+=me(-.9,-2,D)*u,r[0].rotation.z+=me(.5,.82,D)*u,r[1].rotation.x+=me(-1+.35*Math.max(0,Math.sin(e*8+n.seed)),-.35,D)*u,r[1].rotation.z-=.3*(1-D)*u),d>0&&(In(n,r[1],Ke.set(0,c,.1),d),r[0].rotation.x+=.55*d,r[0].rotation.z+=.2*d),r[1].rotation.x-=.8*oe(i,F.scanEnd-.08,F.scanEnd+.1),In(n,r[0],xn(t.defect,Ke),m*Dt((h-.12)/.15));const w=xs.copy(t.agents[0].root.position).setY(t.agents[0].root.position.y+1.25);In(n,r[0],w,g),Xc(n,_),r[1].rotation.x-=2.8*oe(i,F.rescanEnd,F.rescanEnd+.4),In(n,r[1],$i,p),Ro(n,f),bs(n,0,e,y),a.rotation.x=Math.PI/2*on(d)-1.4*p+Math.PI*2*(Dt(pi(i,8.1,8.5))+Dt(pi(i,F.rescanEnd,F.rescanEnd+.4)));const T=ne(i,1.45,8.05,.35,.3)*.85,X=ne(i,F.meet-.05,F.slap+.3,.25,.3);Es(n,t,e,1-on(T+d+m+g+_+X)),ae(n,To,T*l.gaze),u>0&&(n.head.rotation.z+=.2*D*u,n.head.rotation.y+=ys(e,.7,n.seed+2)*.3*u),ae(n,Ke.set(0,c,.1),d),ae(n,xn(t.defect,Ke),m+_),qo(n,h,m),ae(n,w,g),ae(n,A,X),Yo(n,t,i)}function M_(n,t,e,i,s){const{root:r,body:o,arms:a,legs:l}=n,c=e*.9+n.seed;if(gr.set(Math.sin(c)*.14,Math.sin(c*2)*.09,Math.sin(c*2+1)*.05),r.position.add(gr),r.rotation.z=-Math.cos(c)*.13,o.rotation.x=.1+Math.cos(c*2)*.05,a[0].rotation.set(.25+Math.sin(c*2-.8)*.12,0,-.38),a[1].rotation.set(.25+Math.sin(c*2-1.1)*.12,0,.38),l[0].rotation.x=.22+Math.sin(e*7+n.seed)*.06,l[1].rotation.x=.22+Math.sin(e*7+n.seed+1.3)*.06,s){S_(n,t,e,s);return}const h=i-t.detectAt,u=ne(i,F.built-.2,t.detectAt,.25,.08)+ne(i,F.fixed,F.rescanEnd-.2,.2,.2),d=ne(i,t.detectAt,F.scanEnd,.08,.12),m=ne(i,F.scanEnd,F.fixed,.12,.2),g=pi(i,F.rescanEnd+.1,F.slap+.15),_=oe(g,0,1),p=ne(i,F.rescanEnd-.2,F.part+.1,.2,.15),f=ne(i,F.part+.1,F.sent+.05,.15,.15),y=on(u+d+m+p+f);r.position.y+=.8*oe(i,F.rescanEnd,F.part+.15)-.2*u+.3*oe(h,0,.35)*d+Math.abs(Math.sin(e*15))*.05*m,r.position.z+=.35*u,r.rotation.y+=Math.PI*2*Dt(pi(i,F.slap+.15,F.part+.1));const v=-Math.PI*2*Dt(g);o.rotation.x+=.3*u+v,o.position.y+=.32*(1-Math.cos(v)),o.position.z-=.32*Math.sin(v),Wc(n,d),m>0&&(ye(a[0],-2.5+Math.sin(e*15)*.45,-.3,m),ye(a[1],-2.5-Math.sin(e*15)*.45,.3,m)),i>F.fixed&&(ye(a[0],-.95,.5,u),ye(a[1],-.95,-.5,u)),_>0&&(ye(a[0],0,-1.5,_),ye(a[1],0,1.5,_),l[0].rotation.x-=.9*_,l[1].rotation.x-=.9*_),bs(n,0,e,f),bs(n,1,e+.5,f),Es(n,t,e,1-y),ae(n,Ke.set(0,Ss(i)??1.05,.1),u),ae(n,xn(t.defect,Ke),d),qo(n,h,d),ae(n,Ke.copy(t.agents[0].root.position).setY(t.agents[0].root.position.y+1.2),m),Yo(n,t,i)}const kl=n=>xs.copy(n.agents[0].root.position).setY(n.agents[0].root.position.y+1.25);function S_(n,t,e,i){const{root:s,body:r,head:o,arms:a,legs:l}=n,c=t.fetch,h=i.k,u=Math.atan2(c.x-n.home.x,c.z-n.home.z),d=Math.atan2(Be.build.x-n.home.x,Be.build.z-n.home.z),m=ai(n.yaw,d,.5);if(Es(n,t,e,1),i.phase==="out"||i.phase==="back"){const g=i.phase==="out",_=g?tn(h,0,.3):0,p=Dt(g?pi(h,.14,1):h),f=Math.sin(p*Math.PI);s.position.lerpVectors(g?n.home:c,g?c:n.home,p).add(gr),s.position.y+=f*1.5-_*.18,s.rotation.y=g?ai(n.yaw,u,Dt(h/.8)):ai(u,m,Dt(h/.9)),s.rotation.z+=Math.sin(p*Math.PI*2)*.35,r.rotation.x+=.75*f-.4*_-(g?0:.3*tn(h,.7,1)),l[0].rotation.x+=.8*f+.4*_,l[1].rotation.x+=.8*f+.4*_,g?(a[0].rotation.x+=1*f-.6*_,a[0].rotation.z-=.35*f,a[1].rotation.x+=1*f-.6*_,a[1].rotation.z+=.35*f):ao(n,1);const y=g?Dt(h/.35):1-Dt((h-.65)/.35);o.rotation.x=me(o.rotation.x,.25*f-.2*_,y),o.rotation.y=me(o.rotation.y,0,y),g||ae(n,kl(t),1-y)}else if(i.phase==="read"){s.position.copy(c).add(gr),s.position.y+=Math.sin(h*Math.PI*2)*.06,s.rotation.y=u;const g=Dt(h/.15),_=Dt((h-.65)/.35);ye(a[0],-2.2+Math.sin(e*26)*.2,.1,g),ye(a[1],-2.2+Math.sin(e*26+1.7)*.2,-.1,g),ao(n,_);const p=g*(1-Dt((h-.8)/.2));o.rotation.set((-.3+Math.sin(e*19)*.07)*p,Math.sin(e*6)*.22*p,0)}else{s.rotation.y=ai(n.yaw,m,1-Dt(h));const g=oe(h,0,.55);r.rotation.x+=.3*tn(h,0,.7),ao(n,1-Dt((h-.45)/.55));const _=kl(t);In(n,a[0],_,g),In(n,a[1],_,g),ae(n,_,1-Dt(h))}}const ui=new C(0,0,16),fi=new C(0,0,-8.5),co=30,Wi=(n,t,e,i=new C)=>i.set(ui.x-n,t,ui.z-e),Co=["build","research","check"],qc=[[9,-20],[9,20],[16,-8],[16,8],[9,-50],[9,50],[16,-32],[16,32],[16,-56],[16,56]].map(([n,t])=>{const e=t*Math.PI/180,i=new C(Math.sin(e)*n,0,ui.z-Math.cos(e)*n);return{pos:i,yaw:Math.atan2(ui.x-i.x,ui.z-i.z)}}),y_=n=>qc[n].pos,Ko=n=>Math.max(0,Math.min(1,n)),Ii=n=>(n=Ko(n),n*n*(3-2*n)),E_=n=>(n=Ko(n)-1,1+n*n*((2.2+1)*n+2.2)),Gl=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),b_=(n,t,e)=>n<t?Math.min(t,n+e):Math.max(t,n-e),mn=new Kt,Ln=new C,Oe=new C,ir=new mi,ps=new C,An=new Et,T_=new Qi,Rn=new C,ei=new C,Ni=new Kt().makeScale(0,0,0);class w_{constructor(t,e,i,s){this.role=t,this.squad=e,this.slot=i,this.index=s,this.seed=s*1.37,this.root=new $t,e.rig.add(this.root),this.body=new $t,this.body.position.set(0,.55,0),this.root.add(this.body),this.head=new $t,this.head.position.set(0,.68,0),this.body.add(this.head),this.arms=[-1,1].map(r=>{const o=new $t;return o.position.set(r*.52,.55,0),this.body.add(o),o}),this.legs=[-1,1].map(r=>{const o=new $t;return o.position.set(r*.22,.02,0),this.body.add(o),o}),t==="check"&&(this.wand=new $t,this.wand.position.set(0,-.72,0),this.arms[1].add(this.wand));for(const r of[this.root,this.body,this.head,...this.arms])r.rotation.order="YXZ";this.home=Be[t].clone(),this.yaw=o_[t],this.target=0,this.presence=0,this.appearAt=0,this.landAt=-1e3,this.stretch=1}}const A_=new Te(1.7,.06,.08),R_=new Te(1.62,.05,.05);function C_(n){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#0f0e16",e.fillRect(0,0,128,128),e.strokeStyle=ee(R.proven),e.lineWidth=8,e.strokeRect(4,4,120,120),Uc(n).forEach((s,r)=>{s!==null&&(e.fillStyle=ee(s),e.fillRect(24+r%10*8,24+(9-Math.floor(r/10))*8,7,7))});const i=new Kn(t);return i.colorSpace=fe,i.magFilter=Le,i}class P_{constructor(t,e){const i=qc[e];this.index=e,this.anchor=new $t,this.anchor.position.copy(i.pos),this.anchor.rotation.y=i.yaw,t.group.add(this.anchor),this.anchor.updateMatrixWorld(!0),this.quat=this.anchor.quaternion.clone(),this.rig=new ge,this.rig.position.copy(i.pos),this.rig.rotation.y=i.yaw,this.board=Qe("board-frame",kg,{size:.05}),this.anchor.add(this.board),this.status=new Xt(A_,new pe({color:0,toneMapped:!1})),this.status.position.set(0,2.79,0),this.anchor.add(this.status),this.scan=new Xt(R_,new pe({color:new Et(R.check).multiplyScalar(2.4),toneMapped:!1})),this.scan.position.z=.1,this.anchor.add(this.scan);const s=new Ne;s.setAttribute("position",new be(new Float32Array(9),3)),this.fan=new Xt(s,new pe({color:R.check,transparent:!0,opacity:.22,blending:Fn,depthWrite:!1,side:nn,toneMapped:!1})),this.fan.frustumCulled=!1,this.anchor.add(this.fan),this.pad=Wo(R.signal,2.4,0),this.pad.position.set(0,.02,.7),this.anchor.add(this.pad),this.colors=Uc(e),this.order=[],this.colors.forEach((o,a)=>{o!==null&&this.order.push(a)}),this.defect=this.order[Math.floor(this.order.length*.55)],this.defectRow=Math.floor(this.defect/10),this.perThrow=4,this.throws=Math.ceil(this.order.length/this.perThrow),this.placedAt=new Float32Array(100).fill(1/0),this.gap=(F.built-F.build)/this.throws,this.order.forEach((o,a)=>{this.placedAt[o]=F.build+(Math.floor(a/this.perThrow)+1)*this.gap}),this.detectAt=F.built+(this.defectRow+.5)/10*(F.scanEnd-F.built),this.pixelScale=new Float32Array(100),this.agents=Co.map((o,a)=>new w_(o,this,e,e*3+a)),this.shown=0,this.t=0,this.mode="time",this.offset=e*4.3+2,this.lastT=0,this.mood={asking:0,plan:0,done:0},this.heard={},this.rig.updateMatrixWorld(!0),this.localDeck=this.rig.worldToLocal(Wi(0,3.2,.2));const r=Ln.copy(i.pos).sub(fi).setY(0).normalize();this.fetch=this.rig.worldToLocal(fi.clone().addScaledVector(r,1.7).setY(3+e%3*.9)),this.card=new Xt(new dn(.62,.62),new pe({map:C_(e),toneMapped:!1,side:nn})),this.card.material.color.setScalar(1.6),this.card.visible=!1,t.group.add(this.card),this.cardFrom=this.anchor.localToWorld(new C(0,2.95,.2)),this.cardLocal=new C,this.cardSeen=!1}toWorld(t,e){return e.copy(t).applyMatrix4(this.anchor.matrixWorld)}}class L_{constructor(t,e){this.fx=e,this.group=new $t,t.add(this.group),this.squads=Array.from({length:10},(h,u)=>new P_(this,u)),this.agents=this.squads.flatMap(h=>h.agents),this.delivered=0,this.release=d_(this.squads[0]);const i=Qe("monolith",Hg);i.scale.setScalar(1.5),i.position.copy(fi),this.group.add(i);const s=Wo(R.research,5,.35);s.position.set(fi.x,.03,fi.z),this.group.add(s),this.parts=[];for(const h of Co){const u=[["body",()=>Fg(h),1],["head",()=>Ng(h),1],["arm",()=>Og(h),2],["leg",()=>Bg(h),2]];h==="check"&&u.push(["wand",zg,1]);for(const[d,m,g]of u){const _=Ic(`agent-${d}-${h}`,m);for(const p of["solid","glow"]){if(!_[p])continue;const f=new Vi(_[p],pr[p],10*g);f.castShadow=p==="solid",f.receiveShadow=p==="solid",f.frustumCulled=!1,f.instanceMatrix.setUsage(Na),this.group.add(f),this.parts.push({role:h,name:d,per:g,mesh:f})}}}const r=(h,u,d=u)=>{const m=new Vi(new Te(u,u,d),new pe({toneMapped:!1}),h);return m.instanceColor=new di(new Float32Array(h*3),3),m.instanceMatrix.setUsage(Na),m.frustumCulled=!1,this.group.add(m),m};this.pixels=r(1e3,.128,.07),this.flying=r(100,.13),this.lights=r(co,.3),this.stack=r(16,1),this.stack.material=new Mn({roughness:.4,emissive:16777215,emissiveIntensity:0}),this.stackBase=Wi(1.2,1.66,1.85);const o=document.createElement("canvas");o.width=4,o.height=128;const a=o.getContext("2d"),l=a.createLinearGradient(0,0,0,128);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.7,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,1)"),a.fillStyle=l,a.fillRect(0,0,4,128);const c=new ko(.3,.3,7,16,1,!0);c.translate(0,3.5,0),this.beams=new Vi(c,new pe({alphaMap:new Kn(o),transparent:!0,blending:Fn,depthWrite:!1,toneMapped:!1,side:nn}),co),this.beams.instanceColor=new di(new Float32Array(co*3),3),this.beams.frustumCulled=!1,this.group.add(this.beams)}update(t,e,i){const s=i.agents;this.stateOf=i.stateOf;let r=0;for(const o of this.agents){const a=o.index<s?1:0;if(a&&!o.target){const l=i.instant?0:r++*.045;o.target=1,o.appearAt=i.instant?t-5:t+.5+l,i.instant||this.fx.bolt(Wi(0,1.7,1.2),o.squad.toWorld(o.home,new C).setY(.1),R[o.role],l)}if(!a&&o.target&&(o.target=0),o.target){const l=o.presence,c=i.instant?.01:.75;t>=o.appearAt&&(o.presence=Math.min(1,l+e/c)),l<Dn&&o.presence>=Dn&&(o.landAt=i.instant?t-5:t-(o.presence-Dn)*c)}else o.presence=Math.max(0,o.presence-e/.35)}for(const o of this.squads){const a=o.agents[0],l=o.index===0&&i.squad0!==null&&(a.target||a.presence===0);if(l){const{from:c,to:h,at:u}=i.squad0,d=o.agents.some(m=>m.target&&(m.presence<Dn||t-m.landAt<1.9));i.instant||a.presence<.01||i.snap&&(o.t<c||o.t>h)?o.t=u:o.t<c?o.t=Math.min(h,o.t+Math.min(3,1+2*(c-o.t))*e):o.t>h?o.t=Math.max(h,o.t-Math.min(3,.5+4*(o.t-h))*e):(o.t>c||!d)&&(o.t=Math.min(h,o.t+e)),o.mode="story"}else o.mode==="story"&&(o.offset=o.t-t,o.mode="time"),o.t=((t+o.offset)%gs+gs)%gs;if(o.index===0){const c=l?i.stateOf(0):"working";for(const h in o.mood)o.mood[h]=b_(o.mood[h],c===h?1:0,e*2.5)}o.t>=F.sent&&o.lastT<F.sent&&o.t-o.lastT<2&&o.agents[0].presence>.9&&this.delivered++,o.lastT=o.t,o.shown=Gl(o.shown,o.agents[0].target?1:0,5,e),this.updateSquad(o,t,e)}this.writeInstances(),this.updateStack(Math.min(16,this.delivered),t)}updateSquad(t,e,i){const s=t.t,r=t.shown,o=r>.01;t.anchor.visible=o,t.card.visible=!1;const a=this.pixels,l=a.instanceColor.array,c=t.index*100,h=t.agents[0].presence>.5,u=Ii((s-F.clear)/.7),d=s>=t.detectAt&&s<F.scanEnd;for(let y=0;y<100;y++){const v=t.colors[y];let A=v!==null&&s>=t.placedAt[y]&&h?1-u:0;const D=y===t.defect;D&&s>=F.scanEnd&&s<F.fixed&&(A=0),t.pixelScale[y]=Gl(t.pixelScale[y],A,22,i);const w=t.pixelScale[y]*r;if(w<.01){a.setMatrixAt(c+y,Ni);continue}t.toWorld(xn(y,Ln),Oe),mn.compose(Oe,t.quat,ps.setScalar(w)),a.setMatrixAt(c+y,mn);let T=1.35;D&&s<F.fixed?(An.setHex(R.alert),T=d||s>=F.scanEnd?1.4+Math.abs(Math.sin(e*14))*2.4:1.35):An.setHex(v),s>=F.rescanEnd&&s<F.rescanEnd+.5&&(T+=(1-(s-F.rescanEnd)/.5)*1.6),l[(c+y)*3]=An.r*T,l[(c+y)*3+1]=An.g*T,l[(c+y)*3+2]=An.b*T}const m=Ss(s),g=h&&t.agents[2].presence>.5&&m!==null;t.scan.visible=g,t.fan.visible=g,t.scanY=m??0,g&&(t.scan.position.y=m,t.scan.material.color.setHex(s>=t.detectAt&&s<F.scanEnd?R.alert:R.check).multiplyScalar(2.4),t.fan.material.color.setHex(s>=t.detectAt&&s<F.scanEnd?R.alert:R.check));let _=1710370,p=1;if(h&&s>=F.build&&s<F.built&&(_=R.build,p=.9+.3*Math.sin(e*6)),h&&s>=F.built&&s<F.fixed&&(_=s>=t.detectAt?R.alert:R.check,p=s>=t.detectAt?1.5+Math.sin(e*16):1.4),h&&s>=F.fixed&&s<F.rescanEnd&&(_=R.check,p=1.4),h&&s>=F.rescanEnd&&s<F.clear+.7&&(_=R.proven,p=2.2),t.status.material.color.setHex(_).multiplyScalar(p),t.pad.material.opacity=r*(s>=F.rescanEnd&&s<F.clear?.5:.22),t.pad.material.color.setHex(s>=F.rescanEnd&&s<F.clear?R.proven:R.signal),t.anchor.scale.setScalar(.4+.6*E_(r)),o&&h&&s>=F.send&&s<F.sent){const y=Ii((s-F.send)/(F.sent-F.send)),v=Ln.copy(this.stackBase);v.y+=.3,t.card.position.lerpVectors(t.cardFrom,v,y),t.card.position.y+=Math.sin(y*Math.PI)*3.2,t.card.scale.setScalar(1-y*.35),t.card.rotation.set(-y*1.2,t.anchor.rotation.y+y*Math.PI*2,0),t.card.visible=!0,t.rig.worldToLocal(t.cardLocal.copy(t.card.position))}t.cardSeen=t.card.visible;const f=s_(s);for(const y of t.agents)Bc(y,t,e,f),this.beam(y,t);t.rig.updateMatrixWorld(!0);for(const y of t.agents)this.light(y,t,e);this.updateFlying(t,f,h&&o)}light(t,e,i){var a;const s=Ii((t.presence-Dn)/(1-Dn))*e.shown;if(!t.target||s<.01){this.lights.setMatrixAt(t.index,Ni);return}t.root.localToWorld(Ln.set(0,1.7,0)).sub(t.root.localToWorld(Oe.set(0,0,0))),t.head.getWorldPosition(Oe).add(Ln),mn.compose(Oe,e.quat,ps.setScalar(s)),this.lights.setMatrixAt(t.index,mn);const r=((a=this.stateOf)==null?void 0:a.call(this,t.index))??"working",o=r==="asking"?.35+.65*Math.abs(Math.sin(i*4)):1;An.setHex(R[r]).multiplyScalar(1.7*o).toArray(this.lights.instanceColor.array,t.index*3)}headOf(t,e=new C){return this.agents[t].head.localToWorld(e.set(0,.4,0))}heard(t,e){this.squads[0].heard[t]=e}updateFlying(t,e,i){const s=t.t,r=t.index*10;let o=0;const a=(c,h,u,d,m,g,_,p=1)=>{o>=10||p<.01||(Ln.lerpVectors(c,h,u),Ln.y+=Math.sin(u*Math.PI)*d,t.toWorld(Ln,Oe),ir.setFromEuler(T_.set(_*u*6,_*u*4,0)).premultiply(t.quat),mn.compose(Oe,ir,ps.setScalar(t.shown*p)),this.flying.setMatrixAt(r+o,mn),An.setHex(m).multiplyScalar(g).toArray(this.flying.instanceColor.array,(r+o)*3),o++)};i&&s>=F.build-_s&&s<F.built&&t.order.forEach((c,h)=>{const u=(s-(t.placedAt[c]-_s))/_s;u>=0&&u<1&&a(this.release[(Math.floor(h/t.perThrow)+1)%2],xn(c,ei),u,.9,c===t.defect?R.alert:t.colors[c],1.6,1)}),i&&s>=F.scanEnd&&s<F.scanEnd+.6&&(xn(t.defect,Rn),a(Rn,ei.copy(Rn).setZ(.9).setY(.06),(s-F.scanEnd)/.6,.35,R.alert,1.8,-1)),i&&s>=F.fixThrow&&s<F.fixed&&a(this.release[2],xn(t.defect,ei),(s-F.fixThrow)/(F.fixed-F.fixThrow),1,t.colors[t.defect],2.2,1);const l=t.agents[1];if(t.shown>.01&&l.presence>.5&&e&&e.phase!=="out"&&(Ao(l,0,Rn).add(Ao(l,1,ei)).multiplyScalar(.5),e.phase==="read"&&a(Rn,Rn,0,0,R.research,2.4,0,Ii((e.k-.6)/.3)),e.phase==="back"&&a(Rn,Rn,0,0,R.research,2.4,0),e.phase==="toss"&&i&&a(Rn,f_(t.agents[0],ei),Ii(e.k),.5,R.research,2.4,1,1-.8*Ii((e.k-.7)/.3))),i&&t.agents[2].presence>.5&&s>=F.slap&&s<F.slap+.45){const c=(s-F.slap)/.45;for(let h=0;h<6;h++){const u=h/6*Math.PI*2+.4;ei.set(Math.cos(u)*.75,Math.sin(u)*.75,.2).add($i),a($i,ei,Oc(c),0,R.proven,3,1,(1-c)*.5)}}for(;o<10;o++)this.flying.setMatrixAt(r+o,Ni)}beam(t,e){const i=t.target?Math.sin(Math.PI*Ko(t.presence*1.15)):0;Oe.copy(t.root.position).setY(0),e.toWorld(Oe,Oe),mn.compose(Oe,e.quat,ps.set(1,.2+i,1)),this.beams.setMatrixAt(t.index,i>.01?mn:Ni),An.setHex(R[t.role]).multiplyScalar(i*1.1).toArray(this.beams.instanceColor.array,t.index*3)}writeInstances(){for(const t of this.squads){const e=t.agents[2];if(t.fan.visible&&e.wand){e.wand.updateWorldMatrix(!0,!1);const i=t.anchor.worldToLocal(Ln.set(0,0,.95).applyMatrix4(e.wand.matrixWorld)),s=t.fan.geometry.attributes.position;s.setXYZ(0,i.x,i.y,i.z),s.setXYZ(1,-.8,t.scanY,.1),s.setXYZ(2,.8,t.scanY,.1),s.needsUpdate=!0}}for(const{role:t,name:e,per:i,mesh:s}of this.parts){let r=0;for(const o of this.squads){const a=o.agents[Co.indexOf(t)],l=e==="body"?[a.body]:e==="head"?[a.head]:e==="arm"?a.arms:e==="leg"?a.legs:[a.wand];for(const c of l)s.setMatrixAt(r++,a.presence>.001&&o.shown>.01?c.matrixWorld:Ni)}s.instanceMatrix.needsUpdate=!0}this.pixels.instanceMatrix.needsUpdate=!0,this.pixels.instanceColor.needsUpdate=!0,this.flying.instanceMatrix.needsUpdate=!0,this.flying.instanceColor.needsUpdate=!0,this.lights.instanceMatrix.needsUpdate=!0,this.lights.instanceColor.needsUpdate=!0,this.beams.instanceMatrix.needsUpdate=!0,this.beams.instanceColor.needsUpdate=!0}updateStack(t,e){for(let i=0;i<16;i++){if(i>=t){this.stack.setMatrixAt(i,Ni);continue}Oe.copy(this.stackBase),Oe.y+=.012+i*.022,ir.setFromEuler(new Qi(0,Math.PI+Math.sin(i*2.7)*.18,0)),mn.compose(Oe,ir,ps.set(.5,.018,.5)),this.stack.setMatrixAt(i,mn),An.setHex(i===t-1?R.proven:2828854).toArray(this.stack.instanceColor.array,i*3)}this.stack.material.emissiveIntensity=0,this.stack.instanceMatrix.needsUpdate=!0,this.stack.instanceColor.needsUpdate=!0}}const Hl=n=>Math.max(0,Math.min(1,n)),sr=new Kt,ho=new C,uo=new mi,Vl=new C,Wl=new Et,D_=new C(0,0,1),Xl=new Kt().makeScale(0,0,0);class U_{constructor(t){this.group=new $t,t.add(this.group),this.time=0,this.bolts=[],this.boltMesh=new Vi(new Te(1,1,1),new pe({toneMapped:!1}),40),this.boltMesh.instanceColor=new di(new Float32Array(120),3),this.boltMesh.frustumCulled=!1,this.group.add(this.boltMesh),this.rings=Array.from({length:10},()=>{const l=new Xt(new Go(.92,1,64),new pe({transparent:!0,blending:Fn,depthWrite:!1,toneMapped:!1}));return l.rotation.x=-Math.PI/2,l.visible=!1,this.group.add(l),{mesh:l,start:-99,pos:new C,radius:1,life:1}});const e=520,i=new Float32Array(e*3);for(let l=0;l<e;l++)i[l*3]=(Math.random()-.5)*46,i[l*3+1]=Math.random()*12,i[l*3+2]=Math.random()*44-16;const s=document.createElement("canvas");s.width=s.height=32;const r=s.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,32,32);const a=new Ne;a.setAttribute("position",new be(i,3)),this.dust=new rg(a,new Rc({size:.09,map:new Kn(s),color:16756874,transparent:!0,opacity:.55,depthWrite:!1,blending:Fn,toneMapped:!1})),this.dust.frustumCulled=!1,this.group.add(this.dust),this.signMesh=new Vi(new Te(.86,.86,.5),new pe({toneMapped:!1}),900),this.signMesh.instanceColor=new di(new Float32Array(900*3),3),this.signMesh.frustumCulled=!1,this.group.add(this.signMesh),this.sign={text:null,cells:[],changed:0,cell:.3},this.signAt=new C(0,7.4,-12)}bolt(t,e,i,s=0){this.bolts.push({from:t.clone(),to:e.clone(),color:i,start:this.time+s}),this.bolts.length>40&&this.bolts.shift()}ring(t,e,i=4,s=1.1){const r=this.rings.find(o=>this.time-o.start>o.life)||this.rings[0];r.start=this.time,r.pos.copy(t),r.radius=i,r.life=s,r.mesh.material.color.setHex(e)}setSign(t,e){const i=`${t}|${e}`;if(i===this.sign.key)return;this.sign.key=i,this.sign.changed=this.time;const s=t?e?t.split(" "):[t]:[],r=e?.2:.3,o=[];s.forEach((a,l)=>{const c=or(a);for(const[h,u]of c.cells)o.push({x:(h-c.width/2+.5)*r,y:((s.length-1-l)*9+(6-u))*r,col:h/Math.max(1,c.width)})}),this.sign.cells=o,this.sign.cell=r}update(t,e,{sign:i=0}={}){this.time=t;let s=0;this.bolts=this.bolts.filter(l=>t-l.start<.6);for(const l of this.bolts){if(t<l.start)continue;const c=Hl((t-l.start)/.5);if(c>=1){l.landed||(l.landed=!0,this.ring(l.to,l.color,1.6,.7));continue}const h=ho.lerpVectors(l.from,l.to,c);h.y+=Math.sin(c*Math.PI)*2.2;const u=Math.max(0,c-.08),d=new C().lerpVectors(l.from,l.to,u);d.y+=Math.sin(u*Math.PI)*2.2;const m=h.distanceTo(d)+.05;uo.setFromUnitVectors(D_,d.clone().sub(h).normalize()),sr.compose(h.clone().add(d).multiplyScalar(.5),uo,Vl.set(.07,.07,m)),this.boltMesh.setMatrixAt(s,sr),Wl.setHex(l.color).multiplyScalar(3).toArray(this.boltMesh.instanceColor.array,s*3),s++}for(let l=s;l<40;l++)this.boltMesh.setMatrixAt(l,Xl);this.boltMesh.instanceMatrix.needsUpdate=!0,this.boltMesh.instanceColor.needsUpdate=!0;for(const l of this.rings){const c=(t-l.start)/l.life;l.mesh.visible=c>=0&&c<1,l.mesh.visible&&(l.mesh.position.set(l.pos.x,.06,l.pos.z),l.mesh.scale.setScalar(.2+c*l.radius),l.mesh.material.opacity=(1-c)*.9)}const r=this.dust.geometry.attributes.position;for(let l=0;l<r.count;l++){let c=r.getY(l)+e*(.12+l%5*.03);c>12&&(c=0),r.setY(l,c),r.setX(l,r.getX(l)+Math.sin(t*.3+l)*e*.05)}r.needsUpdate=!0;const o=this.sign.cells,a=t-this.sign.changed;for(let l=0;l<900;l++){const c=o[l];if(!c||i<=.01){this.signMesh.setMatrixAt(l,Xl);continue}const h=Hl((a-c.col*.35)/.35),u=1-Math.pow(1-h,3);ho.set(this.signAt.x+c.x,this.signAt.y+c.y+(1-u)*2.5,this.signAt.z),sr.compose(ho,uo.identity(),Vl.setScalar(this.sign.cell*u*i)),this.signMesh.setMatrixAt(l,sr);const d=Math.max(0,1-a*1.2)*2;Wl.setHex(R.signal).multiplyScalar(1.5+d+Math.sin(t*3+c.x*2)*.15).toArray(this.signMesh.instanceColor.array,l*3)}this.signMesh.instanceMatrix.needsUpdate=!0,this.signMesh.instanceColor.needsUpdate=!0}}const I_=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-5*i));function N_(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#0c0b12",t.fillRect(0,0,128,128),t.fillStyle="#1d1a2b",t.fillRect(0,0,128,3),t.fillRect(0,0,3,128),t.fillStyle="#15131f",t.fillRect(0,63,128,2),t.fillRect(63,0,2,128);const e=new Kn(n);return e.wrapS=e.wrapT=lr,e.repeat.set(60,60),e.anisotropy=8,e.colorSpace=fe,e}class B_{constructor(t,{onPress:e,onState:i}={}){this.canvas=t,this.onPress=e,this.onState=i,this.renderer=new Ac({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=Lo,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ql,this.renderer.setClearColor(R.night,1),this.renderer.info.autoReset=!1,this.scene=new ig,this.scene.background=new Et(R.night),this.scene.fog=new zo(R.night,.021),this.camera=new qe(38,1,.1,160),this.build(),this.composer=null,this.target=0,this.s=0,this.lastS=0,this.time=0,this.frames=0,this.motion=!0,this.keyStarts={},this.pointer=new Tt,this.lookAt=new C,this.camPos=new C,this.lost=!1,t.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.lost=!0,this.publish()}),t.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.resize(!0),this.publish()}),addEventListener("resize",()=>this.resize()),addEventListener("pointermove",r=>{r.pointerType==="mouse"&&this.pointer.set(r.clientX/innerWidth-.5,r.clientY/innerHeight-.5)},{passive:!0}),this.resize(!0);const s=ea(this.target,0);this.s=this.lastS=this.target,this.shot(s,1,!0)}build(){const t=this.scene,e=new Xt(new dn(240,240),new Mn({map:N_(),roughness:.82,metalness:.1}));e.rotation.x=-Math.PI/2,e.position.y=-.001,e.receiveShadow=!0,t.add(e),t.add(new ag(9274564,1774626,1.35)),this.key=new so(16768196,2.6),this.key.castShadow=!0,this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,Object.assign(this.key.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:60}),t.add(this.key,this.key.target);const i=new so(9403391,2.4);i.position.set(-10,9,-20),t.add(i);const s=new so(16738877,1.4);s.position.set(12,5,30),t.add(s);const r=new Pc(R.research,24,18,1.6);r.position.set(fi.x,4,fi.z+1.5),t.add(r),this.fx=new U_(t),this.deck=new n_(t),this.deck.group.position.copy(ui),this.deck.group.rotation.y=Math.PI,this.arena=new L_(t,this.fx),this.lanes=[];const o=Wi(0,.012,3.5);for(let l=0;l<10;l++){const c=y_(l).clone();c.y=.012;const h=o.distanceTo(c)-1.2,u=new Xt(new dn(.07,h),new pe({color:R.signal,transparent:!0,opacity:0,blending:Fn,depthWrite:!1,toneMapped:!1}));u.rotation.x=-Math.PI/2;const d=o.clone().lerp(c,.5-.6/o.distanceTo(c));u.position.copy(d),u.rotation.z=-Math.atan2(c.x-o.x,o.z-c.z),t.add(u),this.lanes.push(u)}const a=new Mn({color:1249818,roughness:.7});for(let l=0;l<12;l++){const c=(l/11-.5)*Math.PI*1.25,h=30,u=7+l%3*2.5,d=new $t;d.position.set(Math.sin(c)*h,0,ui.z-6-Math.cos(c)*h),d.rotation.y=c;const m=new Xt(new Te(1.6,u,1.6),a);m.position.y=u/2,d.add(m);const g=[R.signal,R.check,R.research][l%3];for(const _ of[-.55,.55]){const p=new Xt(new Te(.12,u-1.5,.12),new pe({color:new Et(g).multiplyScalar(1.8),toneMapped:!1}));p.position.set(_,u/2,.82),d.add(p)}t.add(d)}}resize(t){var a;const e=this.canvas.clientWidth||innerWidth,i=this.canvas.clientHeight||innerHeight,s=e<700,r=Math.min(devicePixelRatio||1,s?1.6:1.75);if(!t&&e===this.w&&i===this.h&&r===this.ratio)return;this.w=e,this.h=i,this.ratio=r,this.phone=s,this.renderer.setPixelRatio(r),this.renderer.setSize(e,i,!1),this.key.shadow.mapSize.set(s?1024:2048,s?1024:2048),this.key.shadow.map&&(this.key.shadow.map.dispose(),this.key.shadow.map=null);const o=new rn(e*r,i*r,{type:vn,samples:s?0:4});(a=this.composer)==null||a.dispose(),this.composer=new gg(this.renderer,o),this.composer.setPixelRatio(r),this.composer.setSize(e,i),this.composer.addPass(new _g(this.scene,this.camera)),this.bloom=new ji(new Tt(e/2,i/2),.6,.45,.92),this.composer.addPass(this.bloom),this.composer.addPass(new Mg),this.camera.aspect=e/i,this.dirty=!0}setTarget(t){Math.abs(t-this.s)>1.3?this.jump(t):this.target=t}jump(t){this.target=this.s=this.lastS=t,this.snap=!0,this.dirty=!0}setMotion(t){this.motion=t,this.dirty=!0}setCovered(t){t!==!!this.covered&&(this.covered=t,t||(this.dirty=!0))}press(t){var e;for(const i of th[t].keys)this.keyStarts[i]=this.time;(t==="spawn"||t==="orchestrate"||t==="loop")&&this.fx.ring(Wi(0,0,1.5),t==="loop"?R.check:R.signal,t==="orchestrate"?22:7,t==="orchestrate"?1.8:1.1),t==="steer"&&this.fx.bolt(this.deck.keyboard.worldPosition("S",new C),this.arena.headOf(0),R.signal),t==="plan"&&this.fx.ring(this.arena.headOf(0).setY(0),R.working,2.4,1),t==="commit"&&this.fx.ring(Wi(0,0,1.5),R.working,7,1.1),this.arena.heard(t,this.time),(e=this.onPress)==null||e.call(this,t)}shot(t,e,i){const s=this.w/this.h,r=this.camOverride||eh(this.s,s<1),o=this.camera,a=new C(...r.pos),l=new C(...r.target);s<1&&a.sub(l).multiplyScalar(1+(1-s)*1.05).add(l),this.motion&&(a.x+=Math.sin(this.time*.21)*.12+this.pointer.x*.5,a.y+=Math.sin(this.time*.17)*.08-this.pointer.y*.3);const c=i?1:1-Math.exp(-6*e);this.camPos.lerp(a,c),this.lookAt.lerp(l,c),i&&(this.camPos.copy(a),this.lookAt.copy(l)),o.position.copy(this.camPos),o.lookAt(this.lookAt),o.fov=r.fov*(s<1?1.12:1),s>=1?o.setViewOffset(this.w*1.22,this.h,0,0,this.w,this.h):o.setViewOffset(this.w,this.h*1.3,0,this.h*.3,this.w,this.h),o.updateProjectionMatrix(),this.key.target.position.copy(this.lookAt),this.key.position.copy(this.lookAt).add(new C(9,15,12))}frame(t){const e=Math.min(.05,(t-(this.last??t))/1e3);if(this.last=t,this.lost||this.covered)return;this.motion&&(this.time+=e);const i=this.s;this.s=I_(this.s,this.target,5,e),Math.abs(this.s-this.target)<5e-4&&(this.s=this.target);for(const u of nh)this.lastS<u.at&&this.s>=u.at&&this.press(u.action);if(this.lastS=this.s,!(this.motion||this.s!==i||this.dirty))return;const r=this.dirty;this.dirty=!1;const o=ea(this.s,this.time);o.instant=!this.motion,o.snap=this.snap,o.narrow=this.w/this.h<1;const a=this.time,l={},c=[{tap:0},{tap:0}];for(const[u,d]of Object.entries(this.keyStarts)){const m=a-d,g=m<.22?1:0;l[u]={press:g,glow:Math.exp(-m*1.4)},g&&(c[this.deck.keyboard.hand(u)].tap=1)}o.operator={typing:o.typing,hands:c,look:o.look,lean:o.chapter===5?.4:0},o.keys=l;const h=this.motion?e:0;this.arena.update(a,this.motion?e:1,o),this.deck.update(a,this.motion?e:1,o),this.fx.setSign(o.rank,this.w<700),this.fx.update(a,h,o);for(let u=0;u<10;u++)this.lanes[u].material.opacity=this.arena.squads[u].shown*.32;this.shot(o,e||.016,this.snap),this.snap=!1,this.renderer.info.reset(),this.composer.render(h),this.frames++,this.story=o,(this.frames%10===0||this.s!==i||r)&&this.publish()}publish(){var e,i,s,r;const t=this.renderer.info.render;window.imbaScene={ready:!0,frames:this.frames,s:+this.s.toFixed(3),agents:((e=this.story)==null?void 0:e.agents)??0,rank:((i=this.story)==null?void 0:i.rank)??"",wall:((s=this.story)==null?void 0:s.wall)??"",delivered:this.arena.delivered,calls:t.calls,triangles:t.triangles,motion:this.motion,contextLost:this.lost},(r=this.onState)==null||r.call(this,this.story)}start(){const t=e=>{this.frame(e),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}}export{B_ as World};
