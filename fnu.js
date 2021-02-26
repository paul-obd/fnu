function getdata() {

     var body = document.getElementById("body");
       var row = document.createElement('div');
       row.className += "row";
       var carouselslide = document.createElement('div');
       carouselslide.className += "carousel slide";
       carouselslide.id +="carouselExampleControls";
       var carouselinner = document.createElement('div');
       carouselinner.className += "carousel-inner";
   fetch('http://localhost:3000/home')
   .then(response => response.json())
   .then(json => {
       for (let i = 0; i < json.length; i++) {
           const element = json[i];
           var carouselitem = document.createElement('div');
           carouselitem.className += "carousel-item active";
           var img = document.createElement('img');
           img.className += "d-block w-100";
           img.src = (element.image) ; 

           carouselitem.appendChild(img);
           carouselinner.appendChild(carouselitem);

          
       }
        
        carouselslide.appendChild(carouselinner);
        row.appendChild(carouselslide);
        body.appendChild(row);


   })
 }
 getdata();

// function getdata(){
//     var div = document.getElementById('div');
//     fetch('http://localhost:3000/home')
//         .then(response => response.json())
//         .then(json => {
//                  for (let i = 0; i < json.length; i++) {
//                       const element = json[i];
//                       var carouselitem = document.createElement('div');
//                       carouselitem.className = "carousel-item active";
//                       var img = document.createElement('img');
//                       img.className = "d-block w-100";
//                       img.src = element.image ; 
//                       carouselitem.appendChild(img);
//                       div.appendChild(carouselitem)
//                     }
          
//       })
//     }

// getdata()