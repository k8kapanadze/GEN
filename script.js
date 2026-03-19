function showPage(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

let slides=document.querySelectorAll('.slide');
let i=0;
setInterval(()=>{
slides[i].classList.remove('active');
i=(i+1)%slides.length;
slides[i].classList.add('active');
},4000);

let basket=[];

function addToBasket(item){
basket.push(item);
render();
}

function render(){
let list=document.getElementById('basketList');
list.innerHTML='';
basket.forEach(i=>{
let li=document.createElement('li');
li.innerText=i;
list.appendChild(li);
});
}

function openForm(){
document.getElementById('formBox').innerHTML=`
<input placeholder="სახელი">
<input placeholder="ტელეფონი">
<button onclick="submitForm()">გაგზავნა</button>
`;
}

function submitForm(){
alert('გაგზავნილია');
}

function requestCall(){
alert('Call requested');
}

function checkout(){
alert('Order sent');
}
