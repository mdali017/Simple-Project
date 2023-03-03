// console.log("hi")
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}
const displayCategories = category =>{
    // console.log(category)

    const catagoriesContainer = document.getElementById('category-container');
    category.forEach(element => {
        // console.log(element)

        const linkContainer  = document.createElement('p');
        linkContainer.innerHTML = `<a onclick ="catagoriesDetails('${element.category_id}','${element.category_name}')" class="nav-link me-3 active" href="#">${element.category_name}</a>`
        catagoriesContainer.appendChild(linkContainer)

        // catagoriesContainer.innerHTML += `<a class="nav-link me-3 active" href="#">${element.category_name}</a>`
    });
}
// loadCategories()
// ----------------------------------------------------
const catagoriesDetails = (category_id, category_name) =>{
    // console.log(category_id) 
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))
}

const showAllNews = (data, category_name) =>{
    //   console.log(data, category_name)
      document.getElementById('news-count').innerText = data.length
      document.getElementById('category-news').innerText = category_name



     const newsContainer =  document.getElementById('all-news')
         newsContainer.innerHTML = '';
      data.forEach(element => {
        console.log(element);
        
    //     newsContainer.innerHTML += `
    //     <div class="card mb-3 mt-5" >
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img src="..." class="img-fluid rounded-start" alt="...">
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">Card title</h5>
    //           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //     `;

        const card = document.createElement('div');
         card.classList.add('card', 'mb-3', )
         card.innerHTML = `
         <div class="row g-0">
         <div class="col-md-4">
           <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">${element.title}</h5>
             <p class="card-text">${element.details.slice(0, 400)}</p>
             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
           </div>
           <div class="card-footer">
              <div>
                 <img src="${element.author.img}" class="img-fluid rounded-start w-25 h-25" width="40" height="40" alt="...">
              </div>
              <div></div>
              <div></div>
              <div></div>
           </div>
         </div>
       </div>
         `;
         newsContainer.appendChild(card);
      });
}
