import{g as q}from"./assets/crypto-BrZYczla.js";import{a as p,i as y,S as $}from"./assets/vendor-JqD6knYj.js";p.defaults.baseURL="https://pixabay.com/api";async function v(e,a=1,t=15){try{return(await p.get("/",{params:{key:q(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:a}})).data}catch(s){throw console.error("Error fetching photos:",s),s}}function x(e){return`
  <li class="gallery-item">
    <a href="${e.largeImageURL}"
      class="galery-item-image-link">
      <img class="galery-item-image"
        src="${e.webformatURL}"
        alt="${e.tags}" />
    </a>
    <ul class="image-info">
      <li class="image-info-item">
        <p class="info-item-caption">Likes</p>
        <p class="info-item-value">${e.likes}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Views</p>
        <p class="info-item-value">${e.views}</p>

      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Comments</p>
        <p class="info-item-value">${e.comments}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Downloads</p>
        <p class="info-item-value">${e.downloads}</p>
      </li>
    </ul>
  </li>
`}function w(e){return e.map(x).join("")}function i(e,a,t="full"){switch(t){case"full":e.innerHTML=a;break;default:e.insertAdjacentHTML(t,a);break}}const f={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},b={error:{...f,color:"#ef4040",iconUrl:"error-icon.svg"},warning:{...f,color:"#ffa000",iconUrl:"caution-icon.svg"}};function d(e){y.warning({...b.warning,message:e})}function L(e){y.error({...b.error,message:e})}function S(e){e.classList.remove("visually-hidden")}function n(e){e.classList.add("visually-hidden")}const c={loader:document.querySelector(".js-loader")},h=2,l=document.querySelector(".gallery"),B=document.querySelector(".search-button"),m=document.querySelector(".search-input"),k=new $(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});B.addEventListener("click",C);const r=document.querySelector(".load-more-button");r.addEventListener("click",T);let o=1,H="",g=15,u=0;async function C(e){e.preventDefault();let a=String(m.value.trim());a=a.replace(/[*]/g,"");let t="",s="";if(!a||a.length<h){d(`Enter data for search, please. Min. ${h} symbols.`),m.value="",i(l,""),n(r);return}c.loader.classList.add("is-active"),i(l,""),c.loader.classList.remove("is-active"),H=a,o=1,s=await v(a,o,g),u=s.totalHits,s.hits.length===0?(L("Sorry, there are no images matching<br> your search query. Please, try again!"),m.value="",n(loadMessage),i(l,"")):(m.value="",t=w(s.hits),c.loader.classList.remove("is-active"),i(l,t),k.refresh(),u>o*g?S(r):(d("We're sorry, but you've reached<br>the end of search results."),n(r)))}async function T(e){e.preventDefault(),o+=1;let a="",t="";if(c.loader.classList.add("is-active"),n(r),t=await v(H,o,g),u=t.totalHits,t.hits.length===0)L("We're sorry, but you've reached<br>the end of search results.");else{a=w(t.hits),i(l,a,"beforeend"),k.refresh();const s=document.querySelector(".gallery-item");window.scrollBy({top:s.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),u>o*g?S(r):(d("We're sorry, but you've reached<br>the end of search results."),n(r))}c.loader.classList.remove("is-active")}window.onerror=(e,a,t,s,M)=>{console.error("Unhandled error:",M)};
//# sourceMappingURL=index.js.map
