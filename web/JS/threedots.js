const dots = document.getElementById("threeDots");
dots.addEventListener("click", () => {
 
  hiddenlist.style.right="0px"
});

shopclosing.addEventListener("click",()=>{
     hiddenlist.style.right="-350px";
})


document.querySelectorAll("#hrdwremainlist li, .hiddenlist ul li").forEach((list)=>{
  list.style.cursor="pointer"
  list.addEventListener("click",()=>{
    window.location.href="productslist.html"
  })
})