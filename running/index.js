const{add,displayBooks,update,updatemanyelement,remove}=require("../controller/bookController");

var Newbook1={
    title: 'The Great ingland',
     author: 'F. blunomars',
     year: 1900,
};
add(Newbook1);
displayBooks();
update(6,'author','p.bruno');
var up={

     title: 'The man in the jungle',
     author: 'Felnarndo',
     year: 1990,
}
updatemanyelement(2,up);
remove(5);

