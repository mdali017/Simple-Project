const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories(data.data.news_category))
}
// fetchCategories()

const showCategories = data =>{
     console.log(data)
    const categoriesContainer = document.getElementById('categories-container');
    data.forEach(element => {
        console.log(element)
        // const ulContainer = document.createElement('ul')
        //     ulContainer.classList.add('justify-center')
        //     ulContainer.innerHTML = `
                 
        //     <a class="ml-12  text-xl ">${element.category_name}</a>
            
            
        //     `;

        // categoriesContainer.appendChild(ulContainer)
        categoriesContainer.innerHTML += `<a class="ml-12  text-xl " onclick="fetchCategoryNews('${element.category_id}, ${element.category_name}')">${element.category_id,element.category_name}</a>`
    });  
}
// step-2

const fetchCategoryNews = (category_id, category_name) =>{
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data,category_name))
} 

// -----------------
const showAllNews = (data, category_name) =>{
         console.log(data, category_name)
}