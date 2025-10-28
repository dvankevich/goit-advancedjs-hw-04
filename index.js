import{g}from"./assets/crypto-CIjeRjjh.js";import{S as p,i as n}from"./assets/vendor-DajmsvOt.js";function f(e){const o=`https://pixabay.com/api/?${new URLSearchParams({key:g(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).catch(a=>console.log("Error fetching photos:",a))}function u(e){return`
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
`}function h(e){return e.map(u).join("")}function r(e,i){e.innerHTML=i}const l={loader:document.querySelector(".js-loader")},c={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},y={...c,color:"#ef4040",iconUrl:"error-icon.svg"},d={...c,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},s=document.querySelector(".gallery"),v=document.querySelector(".search-button"),t=document.querySelector(".search-input"),w=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});v.addEventListener("click",L);function L(e){e.preventDefault();let i=String(t.value.trim());i=i.replace(/[*]/g,"");let o="";if(!i||i.length<3){n.warning({...d,message:"Enter data for search, please. Min. 3 symbols."}),t.value="",r(s,"");return}l.loader.classList.add("is-active"),f(i).finally(()=>{l.loader.classList.remove("is-active")}).then(a=>{a.hits.length===0?(n.error({...y,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),t.value="",r(s,"")):(t.value="",o=h(a.hits),r(s,o),w.refresh())}).catch(a=>{console.error("сталося щось дивне",a)})}window.onerror=(e,i,o,a,m)=>{console.error("Unhandled error:",m)};
//# sourceMappingURL=index.js.map
