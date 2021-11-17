menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

var reciepi = [

    "1) Mix water, yeast, flour, and salt in a large mixing bowl. The dough rises to become about 50% larger, so use a big bowl. ...", 

   "2) Put vegetable oil on the pans, then sprinkle cornmeal on the oil. ...", 


    "3) Add pizza sauce, cheese, and toppings (optional, see pizza article)", 

   "4) Bake at 425°F for about 15 to 20 minutes."

]


function reciepiu(){

document.getElementById("g").innerHTML = reciepi;

}

function restaurant(){

    document.getElementById("h").innerHTML = restaurant9;
    
    }

    var restaurant9= [

        "1) CFC", 
    
       "2) KFC", 
    
        "3) ZAFRAN RESTAURANT", 

        "4) MONGINIS", 
    
       "5) SUGARS AND SPICE "
    
    ]






