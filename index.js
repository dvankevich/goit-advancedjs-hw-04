import{g as f}from"./assets/crypto-B3DhVupQ.js";import{a as g,S as u,i as n}from"./assets/vendor-Dn0gpu8d.js";g.defaults.baseURL="https://pixabay.com/api";async function h(e,a=1,i=15){try{return(await g.get("/",{params:{key:f(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:a}})).data}catch(o){throw console.error("Error fetching photos:",o),o}}function y(e){return`
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
`}function d(e){return e.map(y).join("")}function t(e,a){e.innerHTML=a}const l={loader:document.querySelector(".js-loader")},c={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},m={error:{...c,title:"Error",color:"#ef4040",iconUrl:"error-icon.svg"},warning:{...c,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"}},s=document.querySelector(".gallery"),v=document.querySelector(".search-button"),r=document.querySelector(".search-input"),w=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});v.addEventListener("click",L);function L(e){e.preventDefault();let a=String(r.value.trim());a=a.replace(/[*]/g,"");let i="";if(!a||a.length<3){n.warning({...m.warning,message:"Enter data for search, please. Min. 3 symbols."}),r.value="",t(s,"");return}l.loader.classList.add("is-active"),h(a).finally(()=>{l.loader.classList.remove("is-active")}).then(o=>{o.hits.length===0?(n.error({...m.error,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),r.value="",t(s,"")):(r.value="",i=d(o.hits),t(s,i),w.refresh())}).catch(o=>{console.error("сталося щось дивне",o)})}window.onerror=(e,a,i,o,p)=>{console.error("Unhandled error:",p)};
//# sourceMappingURL=index.js.map
