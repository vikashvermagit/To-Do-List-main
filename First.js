const input=document.querySelector('#search');
const button=document.querySelector('#button');
const firstelement=document.querySelector('.checked')
const list=document.querySelector('.list')



button.addEventListener('click', function() {
    addtask();
});


function addtask(){
    if(input.value===''){
        alert("you have to write something!")
    }else{
        let li=document.createElement('li');
        li.textContent=input.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='Delete';
        li.appendChild(span);
    }
    input.value='';
    savedata();
}

list.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove('.checked'); // Remove the parent <li> element
        savedata();
    }
}, false);



function savedata(){
    localStorage.setItem("data",list.innerHTML)
}

function showdata(){
    list.innerHTML=localStorage.getItem("data");
}
showdata();

