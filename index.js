// let btn=document.getElementById('btn');
// console.log(btn);
// btn.addEventListener('click',function(){

// alert('hello jquery');
  




// })
//  $("p").css({
//         "display":"none",})


let button=$("#btn")
// console.log(button.text())
let p=$("p")
$("#btn").click(()=>{
    // $("#btn").toggle();
    if($("#btn").text()=="hide"){
        p.css("display","none");
        $("#btn").text("show");
    }
    else{
        p.css("display","block");
        $("#btn").text("hide");
    }
    //    $("p").css({
    //     "display":"block",
    //     "background":"red",
    //     "color":"white"
    //    })
})
 
console.log($("p"));


