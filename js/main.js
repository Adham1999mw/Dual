// handle head-img
let overlay = document.getElementsByClassName("head-img")[0]
let arr_l = document.getElementsByClassName("arrow-l")[0]
let arr_r = document.getElementsByClassName("arrow-r")[0]
let text = document.getElementsByClassName("text")[0]
let text_arr = document.querySelector(".head-img .img .text .fa-angle-right")

overlay.addEventListener("mouseenter", ()=>{
    arr_l.style.opacity=1
    arr_r.style.opacity=1
})
overlay.addEventListener("mouseleave", ()=>{
    arr_l.style.opacity=0
    arr_r.style.opacity=0
})
text.addEventListener("mouseenter",()=>{
    text_arr.style.opacity=1
    
})
text.addEventListener("mouseleave",()=>{
    text_arr.style.opacity=0
})
////////////////////////////////////////////////////////
// nav
let nav = document.getElementsByClassName("nav")[0]
let our = document.getElementsByClassName("our")[0]
let ourmenu =document.getElementById("ourmenu")
let all_a = document.querySelectorAll("#ourmenu ul a")
let tri = document.getElementsByClassName("triangle")[0]


our.addEventListener("mouseenter",()=>{
    ourmenu.style.height="280px"
    all_a.forEach(ele =>{
        ele.style.fontSize="12px"
    })
})
ourmenu.addEventListener("mouseleave",()=>{
    ourmenu.style.height="0px"
    all_a.forEach(ele =>{
        ele.style.fontSize="0px"
    })
})

window.addEventListener("scroll",()=>{
    if(scrollY>=580){
        tri.classList.add("triangleplus")
        ourmenu.style.bottom="-270px"
        

    }else if (scrollY<=nav.offsetTop) {
        tri.classList.remove("triangleplus")
        tri.classList.add("triangle")
        ourmenu.style.bottom="63px"
    }
})


// WHY


let why = document.getElementsByClassName("why")[0]
let whyall = document.querySelectorAll(".why .par .col")
let whyad = document.getElementsByClassName("whyadd")[0]
let h2 = document.querySelector(".whyadd h1")


window.addEventListener("scroll",()=>{

    if((why.getBoundingClientRect().top)>0&&why.getBoundingClientRect().top<innerHeight-300){
        
        whyall.forEach(ele=>{
            ele.classList.add("whyop")
        })
    whyad.classList.add("side")

    }
})
//galerry



let galeryall = document.querySelector("#gallerysec  .gallery");
let galleryH1 = document.querySelector("#gallerysec h1")
let galleryImg = document.querySelector("#gallerysec .galimg")
console.log(galleryImg);
window.addEventListener("scroll",()=>{

    if((galeryall.getBoundingClientRect().top)>0&&galeryall.getBoundingClientRect().top<innerHeight-100){
        galeryall.classList.add("opa")
        galleryH1.classList.add("side")
        galleryImg.classList.add("flipx")
    }
})


// offers 
let offad =document.getElementsByClassName("offad")[0]
let offres = document.querySelectorAll(".ofpar .col")
let offadH1 = document.querySelector("#offerssec .offers .offad h1")
window.addEventListener("scroll", () =>{
    if(scrollY>=offad.offsetTop-300){
        offad.classList.add("opa")
        offadH1.classList.add("side")
        offres.forEach(ele =>{
            ele.classList.add("animof")
        })
    }
})


//up 
let up = document.getElementsByClassName("up")[0]

up.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})



// active 

let erp = document.getElementsByClassName("erp")[0]
//why
let galler = document.getElementsByClassName("gallery")[0]
let offresall = document.getElementsByClassName("offers")[0]
let footer = document.getElementsByClassName("footer")[0]
let all = [erp,why,galler,offresall,footer]



// window.addEventListener("scroll",()=>{
//     all.forEach(ele=>{
        
//         if(scrollY>= ele.offsetTop && (ele.offsetTop + ele.offsetHeight) ){
//             nall.forEach(ele =>{
//             ele.classList.remove("navac")

//                 ele.classList.add("navac")
//             })
//         }
//     })
// })

// window.addEventListener("scroll",()=>{

//     nall.forEach(ele=>{
//         if(scrollY <=600){
//             ele.classList.remove("navac")
//         }
//         else if(scrollY >=600 && scrollY <=1050 ){
//             ele.classList.remove("navac")
//             nall[1].classList.add("navac")
//         }else if (scrollY >=1050 && scrollY <=2212 ){
//             ele.classList.remove("navac")
//             nall[2].classList.add("navac")
            
//         }
//         else if (scrollY >=2212 && scrollY <=2966 ){
//             ele.classList.remove("navac")
//             nall[4].classList.add("navac")
//         }
//         else if (scrollY >=2996 && scrollY <=3900 ){
//             ele.classList.remove("navac")
//             nall[5].classList.add("navac")
//         }
//         else if (scrollY >=3900  ){
//             ele.classList.remove("navac")
//             nall[14].classList.add("navac")
//         }
//     })

// })



























// viewport

let sections = document.querySelectorAll("section");
let nall = document.querySelectorAll(".nav .menu ul li");

let viewport = (e)=>{
    sections.forEach(ele=>{
    
        if(ele.getBoundingClientRect().top>-100&&ele.getBoundingClientRect().top<innerHeight){

            nall.forEach(el=>{
                if(ele.id===el.id){
                    el.classList.add("navac")
                }else{
                    el.classList.remove("navac")
                    
                }
            })
        }
    })
}
window.addEventListener("scroll",viewport);


let galleryad = document.getElementsByClassName("galleryad")[2]
let gettouch =document.getElementsByClassName("gettouch")[0]
let inputContacts = document.querySelectorAll(".gettouch form div")
let iconContact = document.querySelectorAll(".geticons .first i")
let pContact=document.querySelectorAll(".geticons .first p")
let textcontact = document.getElementsByClassName("textcontact")[0]
let forget = document.querySelector("#forget")



window.addEventListener("scroll",()=>{
    if((gettouch.getBoundingClientRect().top)>0&&gettouch.getBoundingClientRect().top<innerHeight-150){
        forget.classList.add("opa")
        inputContacts.forEach(ele=>{
            ele.classList.add("inputAnim")
        })
        iconContact.forEach(ele=>{
            ele.classList.add("inputAnimdown")
        })
        pContact.forEach(ele=>{
            ele.classList.add("inputAnimleft")
        })
        textcontact.classList.add("inputAnim")
        galleryad.classList.add("side")
        
    }
})





// ////////////////////////////////


// let ulinfo = document.querySelector(".ulinfo ul");
// let colors = document.querySelectorAll(".infoParent div");

// let k=0;

// ulinfo.addEventListener("click",(e)=>{
//     colors.forEach((ele,ind)=>{
        
//         if(e.target.textContent===ele.getAttribute("data-nav")){
            
//             if(ind>k){
//                 colors.forEach(el=>{
//                     el.classList.remove("infotop")
//                     el.classList.remove("infobottom")
//                 })
//                 ele.classList.add("infotop")
//                 setTimeout(()=>{
//                 ele.classList.add("heightul") 
                    
//                 },0)

//                 k=ind;
//             }else if(ind<k) {
//                 colors.forEach(el=>{
//                     el.classList.remove("infotop")
//                     el.classList.remove("infobottom")
//                 })
//                 ele.classList.add("infobottom") 
//                 setTimeout(()=>{
//                     ele.classList.add("bbt") 
                        
//                     },0)

//                 k=ind;

//             }
            
//         }else {
//             ele.classList.remove("heightul")
//             ele.classList.remove("bbt")


            

//         }
        
//     })
    
    
// })






// info_ul.addEventListener("click",(e)=>{
//     info_li.forEach(ele=>{
//         ele.classList.remove("pressor")
//     })
//     e.target.classList.add("pressor")
// })


////////////////

let secallinfoo = document.querySelector("#allinfoo")
let allinfoH1 =document.querySelector("#allinfoo .galleryad h1")
let infoAlllis = document.querySelectorAll("#allinfo .container .infoul ul li")
let infoSections = document.querySelectorAll(".infopar main")
let we=0;
let info_ul = document.querySelector(".infoul ul")
let info_li = document.querySelectorAll(".infoul ul li")
window.addEventListener("scroll",()=>{
    if((secallinfoo.getBoundingClientRect().top)>0&&secallinfoo.getBoundingClientRect().top<innerHeight-150){
        
        allinfoH1.classList.add("side")
        
    }
})
info_li[0].classList.add("pressor")
infoSections[0].classList.add("intop","toup")
info_li.forEach((ele,ind)=>{
    ele.addEventListener("click", (e)=>{
        info_li.forEach(ele=>{
            ele.classList.remove("pressor")
        })
        e.target.classList.add("pressor")
        infoSections.forEach(sec=>{
            sec.classList.remove("inbottom")
            sec.classList.remove("intop")
            if(e.target.getAttribute("data-nav")===sec.getAttribute("data-nav")){
                if(ind>we){ 
                    sec.classList.add("intop")
                    setTimeout(()=>{
                        sec.classList.add("toup")
                    },0)
                    we=ind;
                }else if(ind<we){

                    sec.classList.add("inbottom")
                    setTimeout(()=>{
                        sec.classList.add("todown")
                    },0)
                    we=ind;
                }
            }else {
                sec.classList.remove("toup")
                sec.classList.remove("todown")
            }
        })
    })
})






// infoSections.forEach(el=>{
//     el.classList.add("hideop")
// })
// infoSections[0].classList.add("showop")

// infoAlllis.forEach(li=>{
//     li.addEventListener("click",()=>{
//         infoSections.forEach(ele=>{

//             if(li.getAttribute("data-nav")===ele.getAttribute("data-nav")){
    
//                 ele.classList.add("showop")
//             }else{
//                 ele.classList.remove("showop")
                
//             }
            
//         })
//     })
// })
// infoAllUl.addEventListener("click",(e)=>{
//     infoSections.forEach(ele=>{

//         if(e.target.getAttribute("data-nav")===ele.getAttribute("data-nav")){

//             ele.classList.add("showop")
//         }else{
//             ele.classList.remove("showop")
            
//         }
        
//     })
// })


let allone  = document.querySelectorAll(".fourdivs div .allone")
let aboutone = document.querySelectorAll(".fourdivs .aboutone")
let p_allone = document.querySelectorAll(".allone p")


aboutone.forEach(ele=>{
    ele.addEventListener("click",()=>{
        allone.forEach(el=>{
            if(ele.getAttribute("data-la")===el.getAttribute("data-la")){
                console.log(ele);
                setTimeout(()=>{
                ele.classList.add("clsdisd")

                },0)
                el.classList.toggle("clsdis")
                p_allone.forEach(ele=>{
                    ele.classList.add("cl")
                })
            }else{
                el.classList.remove("clsdis")
                ele.classList.remove("clsdisd")

            }
        })
    })
})