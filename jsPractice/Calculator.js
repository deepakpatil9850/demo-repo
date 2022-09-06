
document.getElementById('bnt').addEventListener("click",()=>{
    let enterValue=document.getElementById('entValue').value;
    const result=eval(enterValue);
    console.log(result)
    document.getElementById('demo').innerText=result;
});