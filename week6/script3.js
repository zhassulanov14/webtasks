let cars = [{
     "brand": "Toyota",
     "model": "Camry",
     "year": 1999,
     "price": 20000,
     "image_url": "https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"
}, {
     "brand": "BMW",
     "model": "X6",
     "year": 2014,
     "price": 25000,
     "image_url": "https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"
}, {
     "brand": "Daewoo",
     "model": "Nexia",
     "year": 2007,
     "price": 15000,
     "image_url": "https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"
}];
let icons="basket.png";
let icons1="dollar.jpg"
for (var i = 0; i < cars.length; i++) {
     var image = document.createElement('img');
     image.innerHTML = "<img>";
     image.src = cars[i]["image_url"];
     style = image.style;
     style.width = "100px";
     style.height = "80px";
     style.margin = "5px";
     image.setAttribute("data-credits",String(cars[i]["price"]));
     var p = document.createElement('p');
     p.innerHTML = cars[i]["brand"] +" "+ cars[i]["model"];
     p.style.position = "absolute";
     p.style.top = "70px";
     p.style.left = "10px";
     document.querySelector('#card'+(i+1)).appendChild(image);
     document.querySelector('#card'+(i+1)).appendChild(p);
}
for(var i=0;i<cars.length;i++){
     var image1=document.createElement('img');
     image1.innerHTML="<img>";
     image1.src=icons;
     style = image1.style;
     style.width = "20px";
     style.height = "12px";
     style.margin = "5px";
    document.querySelector('#basket'+(i+1)).appendChild(image1);
}
    var r=0;
   const imaged=document.querySelector('#basket1');
    const image2=imaged.querySelector('img');
function click1() {
 switch(image2.src.substring(image2.src.lastIndexOf('/')+1,image2.src.length)){
    case icons:
        image2.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[0]["price"];
        break;
    case icons1:
       document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
         document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[0]["price"];;
        image2.src=icons;
        break;

}

}
image2.addEventListener('click',click1);
    const imaged1=document.querySelector('#basket2');
    const image3=imaged1.querySelector('img');
function click2() {

switch(image3.src.substring(image3.src.lastIndexOf('/')+1,image3.src.length)){
    case icons:
        image3.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[1]["price"];;
        break;
    case icons1:
    document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[1]["price"];;
        image3.src=icons;
        break;

}

}
image3.addEventListener('click',click2);

const imaged2=document.querySelector('#basket3');
 const image4=imaged2.querySelector('img');
function click3() {

switch(image4.src.substring(image4.src.lastIndexOf('/')+1,image4.src.length)){
    case icons:
        image4.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[2]["price"];;
        break;
    case icons1:  
        image4.src=icons;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[2]["price"];;
        break;
}

}
image4.addEventListener('click',click3);