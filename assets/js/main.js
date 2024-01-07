const ipAddressPlaceholder=document.querySelector("#ipaddress")
// get the ip address from this url "https://ipv4.icanhazip.com/"
const xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(this.readyState=== 4 && this.status === 200){
        console.log(xhr.responseText)
        ipAddressPlaceholder.textContent = xhr.responseText;
    }
    else{
        ipAddressPlaceholder.textContent= "IP address not found"
    }
};
xhr.open("GET","https://ipv4.icanhazip.com/")
xhr.send();