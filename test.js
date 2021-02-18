


//-------------------------------Gallery-filter------------------
const productname = document.querySelector("body > section.content-6 > ol");
const productLi = document.querySelectorAll("body > section.content-6 > ol > li");
const productimg = document.querySelectorAll('.product img');


productname.addEventListener('click', function (event) {
    if (event.target.nodeName != 'OL') {
        //active classe

        const item = event.target;
        productLi.forEach(li => {

            li.className = ""

        });
        item.classList.add('active-gallery');

        //filter
        const value=item.textContent.toLowerCase();
        productimg.forEach(img => {
           img.style.display='none';
           if(img.getAttribute('data-filter')==value || value=='all'){
               
                 img.style.display='block';  
           }

        })

    }

})


