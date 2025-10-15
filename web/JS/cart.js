function addition() {
   let incvalue= document.querySelector(".changeqty")
   let value = parseInt(incvalue.innerHTML)
   value++;
   incvalue.innerHTML=value;
  let changevalue = document.querySelector(".qty")
changevalue.innerHTML= value
}

function deletion() {
    let incvalue= document.querySelector(".changeqty")
   let value = parseInt(incvalue.innerHTML)
   if(value>0){
 value--;
   }
   incvalue.innerHTML=value;
  let changevalue = document.querySelector(".qty")
changevalue.innerHTML= value
}