const   buttonEL = document.getElementById("button-el")
let myLeads = []
const inputEL = document.getElementById("input-el")
let ulEL = document.getElementById("ul-el")
const btnDel = document.getElementById("btn-del")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tabEL = document.getElementById("tab-el")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//const tabs=[{
  // url: "https://www.facebook.com"}]

   tabEL.addEventListener("click", function(){
         
    /*myLeads.push(tabs[0].url);
     localStorage.setItem("myLeads", JSON.stringify(myLeads));  
     renderLeads();


     chrome.tabs.query({active:true, currentWindow: true}, fucntion(tabs){

      myLeads.push(tabs[0].url)


      localStorage.setItem("myLeads", JSON.stringify(myLeads))

      render(myLeads)

     })*/

       chrome.tabs.query({
       active: true,
        currentWindow: true
      }, function(tabs) {
// and use that tab to fill in out title and url
       let tab = (tabs[0].url) 

       myLeads.push(tab)

       localStorage.setItem("myLeads", JSON.stringify(myLeads))

       render(myLeads)
        
        
   })


    
   })
   

function  render(leads)
{
    let listItems = ""

   for(let i=0;i<leads.length;i++)
  {
     //listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>";
   
   
    // secondary approach
   // listItems += "<li><a href='" +  myLeads[i] + "'>" + myLeads[i] + "</a></li>";
   
   
   
   // another approach
   /*  const li = document.createElement("li");
   li.textContent = myLeads[i];
   ulEl.append(li); */


   //template string

    listItems += `
    <li>
       <a target='_blank' href='${leads[i]}'> 
        ${leads[i]}   
       </a>
    </li>
    `;
  } 
    ulEL.innerHTML = listItems
  }


btnDel.addEventListener("dblclick" ,function()
{
     localStorage.clear()
     myLeads =[]
     render(myLeads)
})


buttonEL.addEventListener("click", function()
{
    myLeads.push(inputEL.value)
    inputEL.value = "" //clear the text area after adding line
   
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //save the array to local storage



    
    render(myLeads)
    
})




