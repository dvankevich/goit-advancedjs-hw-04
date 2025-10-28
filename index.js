import{g as p}from"./assets/crypto-CIjeRjjh.js";import{S as f,i as n}from"./assets/vendor-DajmsvOt.js";function u(e){const o=`https://pixabay.com/api/?${new URLSearchParams({key:p(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).catch(a=>console.log("Error fetching photos:",a))}function h(e){return`
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
`}function y(e){return e.map(h).join("")}function t(e,i){e.innerHTML=i}const l={loader:document.querySelector(".js-loader")},c={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},m={error:{...c,title:"Error",color:"#ef4040",iconUrl:"error-icon.svg"},warning:{...c,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"}},s=document.querySelector(".gallery"),d=document.querySelector(".search-button"),r=document.querySelector(".search-input"),w=new f(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});d.addEventListener("click",v);function v(e){e.preventDefault();let i=String(r.value.trim());i=i.replace(/[*]/g,"");let o="";if(!i||i.length<3){n.warning({...m.warning,message:"Enter data for search, please. Min. 3 symbols."}),r.value="",t(s,"");return}l.loader.classList.add("is-active"),u(i).finally(()=>{l.loader.classList.remove("is-active")}).then(a=>{a.hits.length===0?(n.error({...m.error,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),r.value="",t(s,"")):(r.value="",o=y(a.hits),t(s,o),w.refresh())}).catch(a=>{console.error("сталося щось дивне",a)})}window.onerror=(e,i,o,a,g)=>{console.error("Unhandled error:",g)};
//# sourceMappingURL=index.js.map
