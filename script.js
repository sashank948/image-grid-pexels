const autoGrid=document.querySelector(".autoGrid");
const button=document.querySelector("button");

let page=1;
let loading=false;
async function getImages(){
    if(loading) return
    loading=true;
    const res=await fetch(`https://api.pexels.com/v1/search?query=nature&per_page=10&page=${page}`,{headers:{Authorization:"R4ltdTzY09YXmOqCpgtW04IAMIeuWlhsliZroZT4u387lb4QVwNSnNuc",},});
    const data= await res.json();
    console.log(data);
    data.photos.forEach(element => {
        autoGrid.innerHTML+=
        ` 
        <div class="post">
        <img src="${element.src.medium}" alt="">
        <h4>${element.photographer}</h4>
        <p>${element.alt}</p>
      </div>`
        
    });
    page++;
    loading=false
    
    
}
getImages();
window.addEventListener("scroll",()=>{
    const nearBottom=window.innerHeight+window.scrollY>=document.body.offsetHeight-300;
    if(nearBottom){
        getImages();
    }
})
button.addEventListener('click',()=>getImages())