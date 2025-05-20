let userInput = document.getElementById('userinput');
let searchButton = document.getElementById('searchbutton');
let cardContainer = document.getElementById('card-container')



searchButton.addEventListener('click',async(e)=>{
    e.preventDefault();
    if(userInput.value.trim()===''){
        return alert('Enter a movie name');
    }
    const movieTitle = userInput.value.trim();

     
    try{
        cardContainer.innerHTML='';
        
        const responce = await fetch (`http://www.omdbapi.com/?apikey=7989d72c&t=${encodeURIComponent(movieTitle)}`);
        const data = await responce.json()
        if(!data){
            alert('404 not found')
            return;
        }
        createcard(data);

    }
    
  

    
    catch(error){
       alert("Error: cannot fetch data")

    }
    
  


   


})



 function createcard(movie){
    let card = document.createElement('div')
    card.className="col-sm-12 col-md-6 col-lg-6"
    card.innerHTML=`
   
            <div class="card p-2 ">
            <div class="row align-items-center">
            <div class="col-lg-6 d-flex justify-content-center">
              <img class="rounded img-fluid poster w-100"
                src="${movie.Poster}"
                alt="movie poster">
               </div>
              <div class="col-lg-6">
               <div class="card-body ">
              
                <h2 id="movietitle" class="text-center fw-bold ">${movie.Title||"N/A"}</h2>
                <h3 id="movieyear" class="text-center fw-italic">${movie.Year||" "}</h3>
                <p class="card-text text-center" id="movieplot">${movie.Plot||" "}</p>
               
              </div>
              </div>
             </div>
            </div>
        
           

      
    `
    cardContainer.appendChild(card);

 }