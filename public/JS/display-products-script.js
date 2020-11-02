for (var y=0; y<names.length; y++)
   {
     var newCard = document.createElement("div");
     newCard.className = "product-card";
     var element = document.getElementById("img-product-group");
     element.appendChild(newCard);
     var newBadge = document.createElement("div");
     newBadge.className = "badge";
     var textBadge = document.createTextNode("Hot");
     newBadge.appendChild(textBadge);
     newCard.appendChild(newBadge);
     var newTumb = document.createElement("div");
     newTumb.className = "product-tumb";
     var newImg = document.createElement("img");
     newImg.src = "https://images.unsplash.com/photo-1586250742655-e0f53e6412a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";
     newTumb.appendChild(newImg);
     newCard.appendChild(newTumb);
     var newDetails = document.createElement("div");
     newDetails.className = "product-details";
     var newCategory = document.createElement("span");
     newCategory.className = "product-category";
     var textCategory = document.createTextNode(categories[y]);
     newCategory.appendChild(textCategory);
     newDetails.appendChild(newCategory);
     newCard.appendChild(newDetails);
     var newH4 = document.createElement("h4");
     var a = document.createElement("a");
     a.href = "";
     var textH4 = document.createTextNode(names[y]);
     a.appendChild(textH4);
     newH4.appendChild(a);
     newDetails.appendChild(newH4);
     var newP = document.createElement("p");
     var pText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!");
     newP.appendChild(pText);
     newDetails.appendChild(newP);
     var newBottomDetails = document.createElement("div");
     newBottomDetails.className = "product-bottom-details";
     var newPrice = document.createElement("div");
     newPrice.className = "product-price";
     var strPrice = document.createTextNode(prices[y]);
     newPrice.appendChild(strPrice);
     newBottomDetails.appendChild(newPrice);
     newDetails.appendChild(newBottomDetails);
    }