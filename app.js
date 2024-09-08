let expenseDesc=document.getElementById("inp1");
let pocketAmount=document.getElementById("inp0");
let amount=document.getElementById("inp2");
let opt=document.getElementById("category");
let table=document.getElementById("summarytable");
let btn=document.querySelector("#btn2");
let pocketbtn=document.querySelector("#btn1");
let para=document.querySelector("p")

btn.addEventListener("click",()=>{
    let newRow=document.createElement("tr");
    newRow.innerHTML=`<td>${expenseDesc.value}</td>
                       <td>${opt.value}</td>
                       <td>${amount.value}</td>`;
    table.appendChild(newRow);

    para.innerText=`Pocket Amount Rs. ${pocketAmount.value-amount.value}`;
    pocketAmount.value=pocketAmount.value-amount.value;
    expenseDesc.value="";
    amount.value="";
    
   
    
})
pocketbtn.addEventListener("click",()=>{
    console.log(pocketAmount.value);
    para.innerText=`Pocket Amount Rs. ${pocketAmount.value}`;
})

