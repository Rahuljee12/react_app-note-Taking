

 display();
  document.getElementById("add-note").addEventListener("click",()=>{
    document.querySelector(".content-popup").style.display="flex";
  });
  document.getElementById("save").addEventListener("click",()=>{
    document.querySelector(".content-popup").style.display="none";
    let headvalue=document.getElementById("note-head");
    let data=document.getElementById("txt-area");
    let notelistobj;
    let notesVal=localStorage.getItem("notes-list");
    if(notesVal==null){
        notelistobj=[];

    }
    else{
        notelistobj=JSON.parse(notesVal);
        
    }
    let anothertempObj={tl:headvalue.value,txt:data.value};
   
    notelistobj.push(anothertempObj);
    localStorage.setItem("notes-list",JSON.stringify(notelistobj));
    data.value="";
    headvalue.value="";




    display();
    
  });
 function display(){
     let notevalObj;
    let dataval=localStorage.getItem("notes-list");
    if(dataval==null)
    {
   notevalObj=[];
    }
    else{
        notevalObj=JSON.parse(dataval);
    }
    let htmltag=``;
    let temp=``;
     notevalObj.forEach(function(element,index) {
         
     
      temp+=`<div class="note1">
     <div class="header-section">
    <i class="fa fa-trash" id ="${index}" onclick="deletenote(this.id)" style="font-size:1.2rem"></i>
      <i class="fa fa-edit" id="${index}" onclick="editnote(this.id)" style="font-size:1.2rem"></i>
      
     
      
     </div>
     <div class="body-section">
     <p class="not-head">${element.tl}</p>
      <p class="note-content">${element.txt}</p>
     </div>
 </div>`;
 
 if((index+1)%3==0){
     htmltag+=`<div  style="display:flex">`+temp+`</div><br>`;
    temp=``;
     
     
     
 }
 else if(notevalObj.length==(index+1)){
    htmltag+=`<div class="check" style="display:flex">`+temp+`</div><br>`;
 }

 
     });

     document.querySelector(".notes").innerHTML=htmltag;   
 };
 // Delete section ############################################################
 function deletenote(index){
     let notevalobj;
     let notelistval=localStorage.getItem("notes-list");
     if(notelistval==null){
         notevalobj=[];
     }
     else{
         notevalobj=JSON.parse(notelistval);
     }
     notevalobj.splice(index,1);
     localStorage.setItem("notes-list",JSON.stringify(notevalobj));
     display();
     console.log(notevalobj);
 };

 // Edit section #################################################################
 function editnote(index){
    let noteListobj; 
    
    let noteListStringVal=localStorage.getItem("notes-list");
    if(noteListStringVal==null)
    {
        noteListobj=[];
    }
    else{
        noteListobj=JSON.parse(noteListStringVal);
    }
    
document.getElementById("edit-head").value=noteListobj[index].tl;
document.getElementById("edit-txt").innerHTML=noteListobj[index].txt;
console.log(noteListobj[index].tl);
    
    document.querySelector(".edit-popup").style.display="flex";

   document.getElementById("confirm-edit").addEventListener("click",function(){
    noteListobj[index].txt=document.getElementById("edit-txt").value;
    noteListobj[index].tl=document.getElementById("edit-head").value;
        
      
      
     localStorage.setItem("notes-list",JSON.stringify(noteListobj));
       document.querySelector(".edit-popup").style.display="none";
       document.location.reload("true");
       display(); 
   });
   
  
    
 }
 
 