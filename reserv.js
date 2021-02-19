//declaration

var moto = new Array("Electrique", "Essence");
var citadine = new Array("Electrique", "Essence", "Hybride", "Diesel");
var compact = new Array("Hybride", "Essence", "Diesel");
var berline = new Array("Hybride", "Essence", "Diesel");
var utilitaire = new Array("Diesel");
var engin = new Array("Essence", "Diesel");
var camion = new Array("Diesel");

var type = document.querySelectorAll('select');


type[0].addEventListener('click', function () {


    for (let i = 1; i < type[1].length; i++) {

        type[1].options[i].innerHTML ="";

    }
    for (let i = 1; i < type[2].length; i++) {

        type[2].options[i].innerHTML ="";

    }
    type[1].options.selectedIndex=0;
    type[2].options.selectedIndex=0;


    var index = type[0].options.selectedIndex;
    
  

    switch (index) {
        case 0:

            // for (let i = 1; i < type[1].length; i++) {

            //     type[1].options[i].innerHTML = "";

            // }
            for (let i = 1; i < type[2].length; i++) {
                type[2].options[i].innerHTML = "";

            }
            break;
        //--------------case 1-----------------------
        case 1:

            for (let i = 0; i < moto.length; i++) {

                type[1].options[i+1].innerHTML = moto[i];
            }
            for (let i = 1; i < type[2].length; i++) {
                type[2].options[i].innerHTML = "";

            }
            

            

            break;

        //--------------case 2-----------------------
        case 2:
             
            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";

            // }
            for (let i = 0; i < citadine.length; i++) {

                type[1].options[i+1].innerHTML = citadine[i];
            }
            type[2].options[1].innerHTML = "Manuelle";
            break;
        //--------------case 3-----------------------
        case 3:
            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";
              

            // }
            for (let i = 0; i < compact.length; i++) {

                type[1].options[i + 1].innerHTML = compact[i];
            }
            type[2].options[1].innerHTML = "Manuelle";
            break;
        //--------------case 4-----------------------
        case 4:

      
        
            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";
             
            // }
            for (let i = 0; i < compact.length; i++) {

                type[1].options[i + 1].innerHTML = compact[i];
            }

            type[2].options[1].innerHTML = "Automatique";
            break;
        //--------------case 5-----------------------
        case 5:
            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";

            // }

            for (let i = 0; i < utilitaire.length; i++) {

                type[1].options[i + 1].innerHTML = utilitaire[i];
            }
            type[2].options[1].innerHTML = "Manuelle";
            break;
        //--------------case 6-----------------------
        case 6:

            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";

            // }
            for (let i = 0; i < engin.length; i++) {

                type[1].options[i + 1].innerHTML = engin[i];
            }
            type[2].options[1].innerHTML = "Manuelle";
            break;
        //--------------case 7-----------------------
        case 7:
            // for (let i = 1; i < type[1].length; i++) {
            //     type[1].options[i].innerHTML = "";

            // }

            for (let i = 0; i < camion.length; i++) {

                type[1].options[i + 1].innerHTML = camion[i];
            }
            type[2].options[1].innerHTML = "Automatique";
            break;

        default:
            break;
    }



})



var price;
var types=new Array("moto","citadine","compact","berline","utlitaire","engin","camion");
var indexTypes=new Array("10","12","14","23.8","16","900","297.5");
var fuels=new Array("electrique","hybride","essence","diesel");
var indexFuel =new Array(0.05,0.09,0.14,0.21);
var resbtn= document.querySelector('.res-button');
var  total=document.querySelector(".total ").placeholder;
console.log(total);

resbtn.addEventListener('click', function (e) {
    
    var days=document.querySelector(".days").value;
    

        var a = type[0].options.selectedIndex;
        var b = type[1].options.selectedIndex;
        
      
    
   
    for (let index = 0; index < type[0].length; index++) {
        
        
        if (type[0].options[a].innerHTML.toLowerCase()==types[index]){
            
            
                    for (let i= 0; i< type[1].length;i++) {
                        
                       
                        if (type[1].options[b].innerHTML.toLowerCase()==fuels[i]){

                                  if ((type[0].options[a].innerHTML.toLowerCase() == "camion") &&(type[1].options[b].innerHTML.toLowerCase()=="diesel") || (type[0].options[a].innerHTML.toLowerCase() == "berline") ) {
                                            if ((type[0].options[a].innerHTML.toLowerCase() == "camion")) {
                                                price  = 250 * 0.40;
                                                price  = price + 250; 
                                                price  = price * days;
                                              
                                            }else if ((type[0].options[a].innerHTML.toLowerCase() == "berline")) {

                                                            if ((type[1].options[b].innerHTML.toLowerCase()=="diesel")) {
                                                                price  = 20 * 0.40;
                                                                price  = price + 20; 
                                                                price  = price * days;
                                                                
                                                            }else if ((type[1].options[b].innerHTML.toLowerCase()=="electrique")) {
                                                                price  = 20 * 0.24;
                                                                price  = price + 20; 
                                                                price  = price * days;
                                                                
                                                            }else if ((type[1].options[b].innerHTML.toLowerCase()=="hybride")) {
                                                                price  = 20 * 0.28;
                                                                price  = price + 20; 
                                                                price  = price * days;

                                                            
                                                        }else if ((type[1].options[b].innerHTML.toLowerCase()=="essence")) {
                                                            price  = 20 * 0.33;
                                                            price  = price + 20; 
                                                            price  = price * days;}}
                                      
                                            }else{
                                                price  = indexTypes[index] * indexFuel[i];
                                            
                                                price  = price + parseInt(indexTypes[index]); 
                                            
                                                price  = price * days;
                                                console.log(price);

                                            }

                          
                            
                                                                                 } 
                                                          }
                                                                         }
                    
                    
        };
                                               
                                               



    var total=document.querySelector(".total").placeholder=price;
    
     
    
})



