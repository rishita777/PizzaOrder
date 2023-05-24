// Write solution code here to dynamically add the form fields 

// Save the order details on clicking the submit button/* Write style code here*/
// Write solution code here to dynamically add the form fields 

// Save the order details on clicking the submit button

let order=[];
let id=0;

function validateForm()
{
  let myname=document.querySelector("#name").value;
  let myoder=document.querySelector("#order").value;

  if(myname==null || myname==""  )
  {
      document.getElementById("namespan").innerHTML = "Name cannot be blank";
          document.getElementById("name").style.border="2px solid red"
          return false;
  }
  if(mydes==null || mydes=="" ){
      document.getElementById("oderspan").innerHTML = "Oder cannot be blank";
          document.getElementById("oder").style.border="2px solid red"

          return false;
  }
}

function myclick(event)
{
  event.preventDefault();
let div=document.getElementById("div1");
let divtext=document.createElement("input")
divtext.style.border="none";
 divtext.setAttribute('placeholder','Category Name',style="font-wight=bold")
  divtext.setAttribute('Id','category');
  divtext.setAttribute('Class','col-2');
 div.appendChild(divtext);

 let divtext2=document.createElement("input")
divtext2.style.border="none";

  divtext2.setAttribute('placeholder','Item Name ' ) 
  divtext2.setAttribute('Id','Item Name');
  divtext2.setAttribute('Class','col-2');
 div.appendChild(divtext2);

 let divtext3=document.createElement("input")
divtext3.style.border="none";
  divtext3.setAttribute('placeholder',' Price' ) 
  divtext3.setAttribute('id','Price');
  divtext3.setAttribute('type','number');
  divtext3.setAttribute('Class','col-2');
 div.appendChild(divtext3);

 let divtext4=document.createElement("input")
 divtext4.style.border="none";
   divtext4.setAttribute('placeholder','Quantity' ) 
   divtext4.setAttribute('id','Quantity');
   divtext3.setAttribute('type','number');
   divtext4.setAttribute('Class','col-2');
  div.appendChild(divtext4);

  
 let divtext5=document.createElement("input")
 divtext5.style.border="none";
   divtext5.setAttribute('placeholder','Amount' ) 
   divtext5.setAttribute('Id','Amount');
   divtext3.setAttribute('type','number');
   divtext5.addEventListener('mouseover',displayamnt);
   divtext5.setAttribute('Class','col-2');
  div.appendChild(divtext5);
}




function displayamnt()
    {
        // event.preventDefault();
        // oderDetail.amt=parseInt(oderDetail.pr)*parseInt(oderDetail.qan);
         // alert(parseInt((document.getElementById("Price").value)*parseInt(document.getElementById("Quantity").value)))
        document.getElementById("Amount").value=parseInt((document.getElementById("Price").value)*parseInt(document.getElementById("Quantity").value));
        document.getElementById("totalamt").value=parseInt((document.getElementById("Price").value)*parseInt(document.getElementById("Quantity").value));
        
    }

        function submit()
{
    // event.preventDefault();
   let orderid=document.querySelector("#oder").value;
   let c_name=document.querySelector("#name").value;
   let c_email=document.querySelector("#email").value;
   let c_no=document.querySelector("#phone").value;
   let c_date=document.querySelector("#date").value;
   let add=document.querySelector("#add1").value;
   let cat=document.getElementById("category").value;
   let item=document.getElementById("item Name").value;
   let pr=document.getElementById("price").value;
   let qan=document.getElementById("Quantity").value;
   let amt=document.getElementById("Amount")
   let totamt=document.getElementById("totalamt");
//    if(c_name=="" || c_name==null)
//    {
//     document.getElementById("namespan").innerHTML="Name cannot be null";
//     document.getElementById("name").style.border="1px solid red";
//     // let r= document.createElement("i");
//     // let icon=document.createTextNode("");
//    }

    let oderDetail={
        id:orderid,
cus_name:c_name,
cus_email:c_email,
cus_no: c_no,
cus_date:c_date,
cus_add:add,
//         item:{
//         cus_cat:cat,
//         cus_item:item,
//         cus_pr:pr,
//         cus_qan:qan,
//         cus_amt:amt,
//         cus_total:totamt 
// }
       }
    id++;
    order.push(oderDetail);
    console.log(order);
    alert("Oder placed Successfully");
    // document.querySelector("form");
    // return false;

}





// function  saveData()
// {
// let order = {

//     "categoryname":document.getElementById("in1").value,
//     "itemName":document.getElementById("in2").value,
//     "price":document.getElementById("in3").value,
//     "quantity":document.getElementById("in4").value,
//     "amount":document.getElementById("in3").value * document.getElementById("in4").value
// }
// orderList.push(order);
// alert("Details submitted")
// document.getElementById("in5").value = order.amount;
// console.log(orderList);
// alert("Total bill amount is :"+order.amount);
// return false;
// }

// function displayamnt()
//     {
//       let amt=document.getElementById("Amount")
// amt=array.map(item=>item.pr*item.qan);
// return amt;

//     }



//     // Write solution code here to dynamically add the form fields 
// let orderItems=[];
// let id=0;

// function inputMenu(){

//     //create a div container
//     let mydiv3=document.querySelector("#div3");
//     let mydiv=document.createElement("div");
//     mydiv3.appendChild(mydiv);

//     // create category
//     let myCategory=document.createElement("label");
//     let myCategoryText=document.createTextNode("Category : ");
//     myCategory.appendChild(myCategoryText);
//     mydiv.appendChild(myCategory);

//     let myinputCategory=document.createElement("input");
//     myinputCategory.required;
//     myinputCategory.setAttribute("id","category");
//     mydiv.appendChild(myinputCategory);

//     mybr=document.createElement("br");
//     mydiv.appendChild(mybr);

//     //create Item Name
//     let myItemName=document.createElement("label");
//     let myItemNameText=document.createTextNode("Item Name : ");
//     myItemName.appendChild(myItemNameText);
//     mydiv.appendChild(myItemName);

//     let myinputItemName=document.createElement("input");
//     myinputItemName.required;
//     myinputItemName.setAttribute("id","itemName");
//     mydiv.appendChild(myinputItemName);

//     mybr1=document.createElement("br");
//     mydiv.appendChild(mybr1);
   

//     // create price
//     let myprice=document.createElement("label");
//     let mypricetext=document.createTextNode("price : ");
//     myprice.appendChild(mypricetext);
//     mydiv.appendChild(myprice);

//     let myinputprice=document.createElement("input");
//     myinputprice.required;
//     myinputprice.type="number";
//     myinputprice.setAttribute("id","price");
//     mydiv.appendChild(myinputprice);

//     mybr2=document.createElement("br");
//     mydiv.appendChild(mybr2);


//     //create quantity
//     let myQuantity=document.createElement("label");
//     let myQuantityText=document.createTextNode("Quantity : ");
//     myQuantity.appendChild(myQuantityText);
//     mydiv.appendChild(myQuantity);

//     let myinputQuantity=document.createElement("input");
//     myinputQuantity.required;
//     myinputQuantity.type="number";
//     myinputQuantity.setAttribute("id","quantity")
//     mydiv.appendChild(myinputQuantity);

//     mybr3=document.createElement("br");
//     mydiv.appendChild(mybr3);
    
//     //create a button 
//     let mybtn=document.createElement("button");
//     let mybtnText=document.createTextNode("Save");
//     mybtn.appendChild(mybtnText);
//     mybtn.style.backgroundColor="blue";
//     mybtn.style.color="aqua";
//     mybtn.onclick=saveItems;
//     mydiv.appendChild(mybtn);

// }
// function saveItems(){
//     let mycategory=document.querySelector("#category").value;
//     let myItemName=document.querySelector("#itemName").value;
//     let myprice=document.querySelector("#price").value;
//     let myquantity=document.querySelector("#quantity").value;

//     let a=myprice*myquantity;
//     let id=0
//     let item={
//         id:id,
//         category:mycategory,
//         itemName:myItemName,
//         price:myprice,
//         quantity:myquantity,
//         amount:a
//     }
//     orderItems.push(item);
//     alert("menu items saved");
//     document.getElementById("totalAmount").value=a;

//     console.log(orderItems);
//     return false;
// }

// // Save the order details on clicking the submit button
// function submitForm(){
//     let orderid=document.getElementById("orderId").value;
//     console.log(orderid);
// }