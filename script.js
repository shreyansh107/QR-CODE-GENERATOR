
let query="Abhishek Kumar";
const qrImg = document.getElementById('qr-image');
let url='';
url="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data="+query;
qrImg.style.background = `url(${url})`;
function handlesubmit(){
    console.log("Handle submit invoked");
    query=document.getElementById("qr-text").value;
    url="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data="+query.replace(" ","+");
    qrImg.style.background = `url(${url})`; 
    console.log(query);
}
console.log(url);
