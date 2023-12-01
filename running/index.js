const{add,displayBooks,update,updatemanyelement,remove}=require("../controller/bookController");

var Newbook1={
    title: 'The Great ingland',
     author: 'F. blunomars',
     year: 1900,
};
add(Newbook1);
displayBooks();
update(3,'author','p.bruno');
var up={
    id: 6,
     title: 'The man in the jungle',
     author: 'Felnarndo',
     year: 1990 
}
updatemanyelement(up);
remove(4);

