const{booksDatabase}=require("../db/book");
const add=(Newbook)=>{
    Newbook.id=booksDatabase.length+1;
    booksDatabase.push(Newbook);
    console.log("\n the books added!!\n");
    console.log("\n display after books added");
    console.log(booksDatabase);
}
// function dispay
const displayBooks=()=>{
    console.log("\n display all books");
    console.log(booksDatabase);
}

    

//update function
const update=(id,key,value)=>{
    var exists=booksDatabase.find(element=>element.id===id);
    if(!exists){
        console.log("\n books not found");
    }else{
        exists[key]=value;
        console.log("\n books updated");
        console.log(exists);
    }
}
//updating manyelements
const updatemanyelement=(id,obj)=>{
    var exists=booksDatabase.find(element=>element.id===id);
    if(!exists){
        console.log("\n books not found");

    }else{
        for(key in obj){
        exists[key]=obj[key]
    }
    console.log("\n books updated");
    console.log(exists);
    }
}
//remove books

const remove=(id)=>{
    var exists=booksDatabase.find(ele=>ele.id===id);
    if (!exists) {
      console.log("books not found\n");
  
      
    } else {
      var remaining=[];
      remaining=booksDatabase.filter(ele=>ele.id!==id);
      console.log(remaining);
      
    }  
  }
  


module.exports={
    add,
    displayBooks,
    update,
    updatemanyelement,
    remove,

};