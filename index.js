import{g as u}from"./assets/crypto-BrZYczla.js";import{a as m,i as g,S as h}from"./assets/vendor-JqD6knYj.js";m.defaults.baseURL="https://pixabay.com/api";async function y(e,a=1,r=15){try{return(await m.get("/",{params:{key:u(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:a}})).data}catch(o){throw console.error("Error fetching photos:",o),o}}function d(e){return`
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
`}function v(e){return e.map(d).join("")}function s(e,a){e.innerHTML=a}const n={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},p={error:{...n,color:"#ef4040",iconUrl:"error-icon.svg"},warning:{...n,color:"#ffa000",iconUrl:"caution-icon.svg"}};function w(e){g.warning({...p.warning,message:e})}function L(e){g.error({...p.error,message:e})}const l={loader:document.querySelector(".js-loader")},c=2,t=document.querySelector(".gallery"),S=document.querySelector(".search-button"),i=document.querySelector(".search-input"),k=new h(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});S.addEventListener("click",$);function $(e){e.preventDefault();let a=String(i.value.trim());a=a.replace(/[*]/g,"");let r="";if(!a||a.length<c){w(`Enter data for search, please. Min. ${c} symbols.`),i.value="",s(t,"");return}l.loader.classList.add("is-active"),y(a).finally(()=>{l.loader.classList.remove("is-active")}).then(o=>{o.hits.length===0?(L("Sorry, there are no images matching<br> your search query. Please, try again!"),i.value="",s(t,"")):(i.value="",r=v(o.hits),s(t,r),k.refresh())}).catch(o=>{console.error("сталося щось дивне",o)})}window.onerror=(e,a,r,o,f)=>{console.error("Unhandled error:",f)};
//# sourceMappingURL=index.js.map
