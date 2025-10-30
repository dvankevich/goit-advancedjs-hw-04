import{g as q}from"./assets/crypto-BrZYczla.js";import{a as p,i as y,S as $}from"./assets/vendor-JqD6knYj.js";p.defaults.baseURL="https://pixabay.com/api";async function v(e,t=1,a=15){try{return(await p.get("/",{params:{key:q(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:t}})).data}catch(s){throw console.error("Error fetching photos:",s),s}}function x(e){return`
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
`}function w(e){return e.map(x).join("")}function i(e,t,a="full"){switch(a){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(a,t);break}}const d={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},b={error:{...d,color:"#ef4040",iconUrl:"error-icon.svg"},warning:{...d,color:"#ffa000",iconUrl:"caution-icon.svg"}};function f(e){y.warning({...b.warning,message:e})}function L(e){y.error({...b.error,message:e})}function S(e){e.classList.remove("visually-hidden")}function n(e){e.classList.add("visually-hidden")}const c={loader:document.querySelector(".js-loader")},l=document.querySelector(".gallery"),B=document.querySelector(".search-button"),m=document.querySelector(".search-input"),r=document.querySelector(".load-more-button"),k=new $(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),h=2;let o=1,H="",g=15,u=0;B.addEventListener("click",C);r.addEventListener("click",T);async function C(e){e.preventDefault();let t=String(m.value.trim());t=t.replace(/[*]/g,"");let a="",s="";if(!t||t.length<h){f(`Enter data for search, please. Min. ${h} symbols.`),m.value="",i(l,""),n(r);return}c.loader.classList.add("is-active"),i(l,""),n(r),H=t,o=1,s=await v(t,o,g),u=s.totalHits,s.hits.length===0?(L("Sorry, there are no images matching<br> your search query. Please, try again!"),m.value="",c.loader.classList.remove("is-active"),i(l,"")):(m.value="",a=w(s.hits),c.loader.classList.remove("is-active"),i(l,a),k.refresh(),u>o*g?S(r):(f("We're sorry, but you've reached<br>the end of search results."),n(r)))}async function T(e){e.preventDefault(),o+=1;let t="",a="";if(c.loader.classList.add("is-active"),n(r),a=await v(H,o,g),u=a.totalHits,a.hits.length===0)L("We're sorry, but you've reached<br>the end of search results.");else{t=w(a.hits),i(l,t,"beforeend"),k.refresh();const s=document.querySelector(".gallery-item");window.scrollBy({top:s.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),u>o*g?S(r):(f("We're sorry, but you've reached<br>the end of search results."),n(r))}c.loader.classList.remove("is-active")}window.onerror=(e,t,a,s,M)=>{console.error("Unhandled error:",M)};
//# sourceMappingURL=index.js.map
