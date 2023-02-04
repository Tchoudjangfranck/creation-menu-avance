window.onload = function () 
{
    var buger_icon = document.getElementById("burger-icon");  
    var close_icon = document.getElementById("close-icon");
    var burger_item = document.getElementById("burger-item");
    var close_item = document.getElementById("close-item");
    var nav_item_1 = document.getElementById("nav-item-1");
    var nav_item_2 = document.getElementById("nav-item-2");
    var nav_item_3 = document.getElementById("nav-item-3");
    var nav_item_4 = document.getElementById("nav-item-4");
    var nav_item_5 = document.getElementById("nav-item-5");

    buger_icon.addEventListener("click", function()
    {
        burger_item.style.display = "none";
        close_item.style.display = "block";
        nav_item_1.style.display ="block";
        nav_item_2.style.display ="block";
        nav_item_3.style.display ="block";
        nav_item_4.style.display ="block";
        nav_item_5.style.display ="block";
    });  

    close_icon.addEventListener("click", function()
    {
        burger_item.style.display = "block";
        close_item.style.display = "none";
        nav_item_1.style.display ="none";
        nav_item_2.style.display ="none";
        nav_item_3.style.display ="none";
        nav_item_4.style.display ="none";
        nav_item_5.style.display ="none";


    });  
};