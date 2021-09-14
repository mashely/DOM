

//var restaurant_name = document.getElementById("title");
var restaurant_name = document.querySelector("#title");
// var desc = document.querySelector(".description");
var foods  = document.querySelector("#foods");
var add_to_cart = document.querySelector("#add_to_cart");
var checkout = document.querySelector("#checkout");
var dom_total = document.querySelector("#dom_total");
var reset_button = document.querySelector("#reset");

var total= 0;
var total_items= 0;

add_to_cart.classList.add("hidden");


var body = document.querySelector("body");


// restaurant_name.innerHTML = "<h1>PAKO</h1>";
// desc.innerHTML ="A place to eat";



// var ul = document.createElement("ul");
// body.appendChild(ul);

// for(var i=0; i < 10; i++)
// {
//     var li = document.createElement("li");
//     li.innerHTML = "Hello there is a number" + i;
//     ul.appendChild(li);
 
// }
    
// var newsdiv = document.createElement("div");
// newsdiv.innerHTML = "abc";
// restaurant_name.appendChild(newsdiv);

var food_list = [
{name:"changu fish",price:5.00},
{name:"ugali",price:2.00},
{name:"egus soap",price:6.00},
{name:"eba",price:4.00},
{name:"nasir wot",price:3.50},
{name:"gomen",price:7.00}
];

 for (var i=0; i< food_list.length; i++)
 {
 var newoption = document.createElement("option");
 newoption.value = food_list[i].price;
 newoption.innerHTML = food_list[i].name;
 foods.appendChild(newoption);
 } 

//  var btn  = document.querySelector("#btn");
//  btn.addEventListener("click" ,   function(){
//     alert("we sell food")
//  });
// foods.addEventListener("change", function()
// {

//    console.log("Ihave changed the type of food");
// })


user_selection = {text:null, value:null};



foods.addEventListener("change", function()
{
   var selected_item = document.querySelector("#foods option:checked");
  
   user_selection.text = selected_item.text;
   user_selection.value = selected_item.value;

   // console.log(selected_item.value);
   // console.log(selected_item.text);


  var Notification = document.querySelector("#notification");
  var display_text = document.querySelector("#user_selected_text");
  var display_value = document.querySelector("#user_selected_value");

 if(Number(user_selection.value) > 0)
  {
  Notification.innerHTML = "You have selected:";
  display_text.innerHTML = user_selection.text;
  //display_value.innerHTML = user_selection.value;
  display_value.innerHTML = Number(user_selection.value).toFixed(2);
  add_to_cart.classList.remove("hidden");
  add_to_cart.classList.add("green");

   }
   else
   {
    Notification.innerHTML = "";
    display_text.innerHTML = null;
    display_value.innerHTML = null;
    add_to_cart.classList.add("hidden");
  }
})    

add_to_cart.addEventListener("click", function(){

   if(total_items < 4){
 var checkout_item = document.createElement("div");
 checkout_item.innerHTML = user_selection.text + " " + Number(user_selection.value).toFixed(2);
 checkout.appendChild(checkout_item);
 total_items ++;
 total += Number(user_selection.value);
 dom_total.innerHTML = total.toFixed(2);
   }
   else
   {
      alert("we apologize but you have exceeded the maximum order");
   }
})

reset_button.addEventListener("click", function(){
  resetAll();
});


function resetAll(){
   total = 0;
   total_items = 0;
   checkout.innerHTML = "";
   notification.innerHTML = "";
   display_text.innerHTML = null;
   display_value.innerHTML = null;
   add_to_cart.classList.add("hidden");
   notification.innerHTML="";
   dom_total.innerHTML = "";
}