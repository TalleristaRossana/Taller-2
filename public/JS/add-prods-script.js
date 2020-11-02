
var names = [];
var categories = [];
var prices = [];

function add_element_to_array(){
         valueNameBox = document.getElementById('name').value;
         names.push(valueNameBox);
         valueCategoryBox = document.getElementById('category').value;
         categories.push(valueCategoryBox);
         valuePriceBox = document.getElementById('price').value;
         prices.push(valuePriceBox);
         alert("El articulo " + valueNameBox + " ha sido agregado en la categoria " + valueCategoryBox + " con el precio de " + valuePriceBox);
         console.log(names);
         console.log(categories);
         console.log(prices);
         return false;
}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<names.length; y++)
   {
     e += "Element " + y + " = " + names[y] + " " + categories[y] + " " + prices[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
