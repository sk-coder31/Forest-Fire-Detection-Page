const divs = document.querySelectorAll('.container .pop');
console.log(divs)
  const popover = document.getElementById('popover');
console.log(divs.length);
  for(let i = 0; i < 75; i++){
      const dummyText = divs[i].getAttribute('node');
     
      divs[i].addEventListener('mouseenter', (e) => {
       // console.log('mouseenter', e);
          popover.textContent = dummyText;    
          popover.style.display = 'block';
          popover.style.left = `${e.pageX + 10}px`;
          popover.style.top = `${e.pageY + 10}px`;
      });

      divs[i].addEventListener('mousemove', (e) => {
          popover.style.left = `${e.pageX + 10}px`;
          popover.style.top = `${e.pageY + 10}px`;
      });

      divs[i].addEventListener('mouseleave', () => {
          popover.style.display = 'none';
      });
  };








const range1 = document.getElementById("range1");
let details;
let nodedetails;
function ColorChange(index,value){
    const div = document.getElementsByTagName("div");
    if(value>=0 && value<=30){
        div[index].style.backgroundColor = "green"
    }
    else if(value>30 && value<=40){
        div[index].style.backgroundColor = "yellow"
    }
    else if(value>40 && value<=50){
        div[index].style.backgroundColor = "orange"
    }
    else if(value>50){
        div[index].style.backgroundColor = "red"
    }
}
range1.addEventListener("change",()=>{
    const value = (document.getElementById("range1").value);
    // console.log(value)
   
    ColorChange(4,value);
        
    
    
})
const range2 = document.getElementById("range2");
range2.addEventListener("change",()=>{
    const value = (document.getElementById("range2").value);
    ColorChange(5,value);  
})
const range3 = document.getElementById("range3");
range3.addEventListener("change",()=>{
    const value = (document.getElementById("range3").value);
    ColorChange(6,value);
})

const range4 = document.getElementById("range4");
range4.addEventListener("change",()=>{
    const value = (document.getElementById("range4").value);
    ColorChange(7,value)
    
})

const range5 = document.getElementById("range5");
range5.addEventListener("change",()=>{
    const value = (document.getElementById("range5").value);
    console.log(value)
    ColorChange(8,value) 
})

const range6 = document.getElementById("range6");
range6.addEventListener("change",()=>{
    const value = (document.getElementById("range6").value);
    ColorChange(9,value) 
    
    
})

const range7= document.getElementById("range7");
range7.addEventListener("change",()=>{
    const value = (document.getElementById("range7").value);
    ColorChange(10,value) 
    
    
})
const range8 = document.getElementById("range8");
range8.addEventListener("change",()=>{
    const value = (document.getElementById("range8").value);
    ColorChange(11,value) 
    
    
})


const range9 = document.getElementById("range9");
range9.addEventListener("change",()=>{
    const value = (document.getElementById("range9").value);
    ColorChange(12,value) 
    
    
})
const range10 = document.getElementById("range10");
range10.addEventListener("change",()=>{
    const value = (document.getElementById("range10").value);
    ColorChange(13,value) 
})


  detail = document.querySelector(".node1");
 nodedetails=  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
  const wrapper = document.getElementById("displayover");
  const tag = document.createElement("h3");
  tag.style.textAlign="center";
  tag.style.marginTop="10px";
  tag.style.fontSize="25px"
  tag.textContent = "Details From  Node 1";
  wrapper.appendChild(tag);
  wrapper.style.display="block";
  setTimeout(()=>{
      wrapper.style.display="none";
      wrapper.removeChild(tag);
  },3000)
  
})


 detail = document.querySelector(".node2");
 nodedetails=  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
  const wrapper = document.getElementById("displayover");
  const tag = document.createElement("h3");
  tag.style.textAlign="center";
  tag.style.marginTop="10px";
  tag.style.fontSize="25px"
  tag.textContent = "Details From  Node 2";
  wrapper.appendChild(tag);
  wrapper.style.display="block";
  setTimeout(()=>{
      wrapper.style.display="none";
      wrapper.removeChild(tag);
  },3000)
  
})


  detail = document.querySelector(".node3");
 nodedetails =  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
  const wrapper = document.getElementById("displayover");
  const tag = document.createElement("h3");
  tag.style.textAlign="center";
  tag.style.marginTop="10px";
  tag.style.fontSize="25px"
  tag.textContent = "Details From  Node 3";
  wrapper.appendChild(tag);
  wrapper.style.display="block";
  setTimeout(()=>{
      wrapper.style.display="none";
      wrapper.removeChild(tag);
  },3000)
  
})


  detail = document.querySelector(".node4");
 nodedetails =  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
const customAttributeValue = detail.getAttribute('data');
  
  nodedetails.textContent= customAttributeValue
})


  detail = document.querySelector(".node5");
 nodedetails =  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
const customAttributeValue = detail.getAttribute('data');
  
  nodedetails.textContent= customAttributeValue
})


  detail = document.querySelector(".node6");
 nodedetails=  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
const customAttributeValue = detail.getAttribute('data');
  
  nodedetails.textContent= customAttributeValue
})


  detail= document.querySelector(".node7");
 nodedetails =  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
const customAttributeValue = detail.getAttribute('data');
  
  nodedetails.textContent= customAttributeValue
})


  detail = document.querySelector(".node8");
 nodedetails =  document.getElementById('nodedetails');
detail.addEventListener("click",()=>{
const customAttributeValue = detail.getAttribute('data');
  
  nodedetails.textContent= customAttributeValue
})





















