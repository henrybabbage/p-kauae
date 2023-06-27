import{u as C,i as E,r as u,s as w,j as a,a as p,M as j,b as O,C as v,B as K,U as R,c as U,G as J,d as N,e as D,I as z,L as F,F as G,_ as $,f as q}from"./sanity-3c473299.js";var I,P,k,S,T;function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const H=["assetId","data","playbackId","status","thumbTime","filename"],ie=n=>C(E(n)?n._ref:"",H);function M(){return N({apiVersion:"2022-09-14"})}const x="secrets.mux";function Q(n){const{projectId:e,dataset:i}=n.config();return w(async()=>{const t=await n.fetch(`*[_id == $_id][0]{
        token,
        secretKey,
        enableSignedUrls,
        signingKeyId,
        signingKeyPrivate
      }`,{_id:x});return{token:(t==null?void 0:t.token)||null,secretKey:(t==null?void 0:t.secretKey)||null,enableSignedUrls:!!(t!=null&&t.enableSignedUrls)||!1,signingKeyId:(t==null?void 0:t.signingKeyId)||null,signingKeyPrivate:(t==null?void 0:t.signingKeyPrivate)||null}},[q,x,e,i])}function L(n,e,i,t){const{signingKeyId:s,signingKeyPrivate:r}=Q(n);if(!s)throw new TypeError("Missing signingKeyId");if(!r)throw new TypeError("Missing signingKeyPrivate");const{default:c}=w(()=>$(()=>import("./sign-27b75f55.js"),[]),["jsonwebtoken-esm/sign"]);return c(t?JSON.parse(JSON.stringify(t,(o,l)=>l??void 0)):{},atob(r),{algorithm:"RS256",keyid:s,audience:i,subject:e,noTimestamp:!0,expiresIn:"12h"})}function V(n){if(!(n!=null&&n.playbackId))throw console.error("Asset is missing a playbackId",{asset:n}),new TypeError("Missing playbackId");return n.playbackId}function y(n){var e,i,t,s;return(s=(t=(i=(e=n.data)==null?void 0:e.playback_ids)==null?void 0:i[0])==null?void 0:t.policy)!=null?s:"public"}function W(n){let{asset:e,client:i,height:t,width:s,start:r=e.thumbTime?Math.max(0,e.thumbTime-2.5):0,end:c=r+5,fps:o=15}=n;const l={height:t,width:s,start:r,end:c,fps:o},d=V(e);let m=new URLSearchParams(JSON.parse(JSON.stringify(l,(g,_)=>_??void 0)));if(y(e)==="signed"){const g=L(i,d,"g",l);m=new URLSearchParams({token:g})}return"https://image.mux.com/".concat(d,"/animated.gif?").concat(m)}function X(n){let{asset:e,client:i,fit_mode:t,height:s,time:r=e.thumbTime,width:c}=n;const o={fit_mode:t,height:s,time:r,width:c},l=V(e);let d=new URLSearchParams(JSON.parse(JSON.stringify(o,(m,g)=>g??void 0)));if(y(e)==="signed"){const m=L(i,l,"t",o);d=new URLSearchParams({token:m})}return"https://image.mux.com/".concat(l,"/thumbnail.png?").concat(d)}const h={aspect:16/9},A=u.memo(function(e){let{alt:i,src:t,height:s,width:r,aspectRatio:c}=e;return w(async()=>{const o=new Image(r,s);o.decoding="async",o.src=t,await o.decode()},["sanity-plugin-mux-input","image",t]),a("img",{alt:i,src:t,height:s,width:r,style:{aspectRatio:c}})}),f=p(j)(I||(I=b([`
  img {
    object-fit: cover;
  }
`]))),B=n=>{let{solo:e}=n;return D(z,{space:1,style:{marginTop:e?"-1.35em":void 0,marginBottom:e?void 0:"0.35rem"},children:[a(F,{}),"Signed playback policy"]})},Y=n=>{let{asset:e,height:i,width:t,showTip:s}=n;const r=M(),c=X({asset:e,client:r,height:i,width:t,fit_mode:"smartcrop"}),o=u.useMemo(()=>s&&y(e)==="signed"?a(B,{solo:!0}):void 0,[e,s]);return a(f,{mediaDimensions:h,subtitle:o,title:a(G,{children:null}),media:a(A,{alt:"",src:c,height:i,width:t})})},ae=u.memo(function(e){let{asset:i,width:t,showTip:s}=e;const{ErrorBoundary:r,didCatch:c,error:o}=O(),l=Math.round(t*9/16),d=u.useMemo(()=>s&&y(i)==="signed"?a(B,{}):void 0,[s,i]);return c?a(f,{subtitle:o.message,mediaDimensions:h,title:"Error when loading thumbnail",media:a(v,{radius:2,height:"fill",style:{position:"relative",width:"100%"},children:a(K,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0},children:a(R,{})})})}):a(r,{children:a(u.Suspense,{fallback:a(f,{isPlaceholder:!0,title:"Loading thumbnail...",subtitle:d,mediaDimensions:h}),children:a(Y,{showTip:s,asset:i,height:l,width:t})})})}),Z=p(j)(P||(P=b([`
  img {
    object-fit: contain;
  }
`]))),ee=n=>{let{asset:e,width:i}=n;const t=M(),s=W({asset:e,client:t,width:i});return a(Z,{withBorder:!1,mediaDimensions:h,media:a(A,{alt:"",src:s,width:i,aspectRatio:"16:9"})})},se=u.memo(function(e){let{asset:i,width:t}=e;const{ErrorBoundary:s,didCatch:r}=O();return r?null:a(s,{children:a(u.Suspense,{fallback:a(te,{children:a(f,{mediaDimensions:h,withBorder:!1,media:a(U,{muted:!0})})}),children:a(v,{height:"fill",tone:"transparent",children:a(ee,{asset:i,width:t})})})})}),te=p(K)(k||(k=b([`
  backdrop-filter: blur(8px) brightness(0.5) saturate(2);
  mix-blend-mode: color-dodge;
`]))),re=p(J)(S||(S=b([`
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`]))),oe=p(v)(T||(T=b([`
  border-top: 1px solid var(--card-border-color);
  position: sticky;
  bottom: 0;
  z-index: 200;
`])));export{se as A,oe as C,re as T,ae as V,x as _,M as a,V as b,L as c,X as d,y as g,ie as u};
