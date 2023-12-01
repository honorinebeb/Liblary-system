const{add,displayBooks,update,updatemanyelement}=require("../controller/bookController");

var Newbook1={
    title: 'The Great ingland',
     author: 'F. blunomars',
     year: 1900,
};
add(Newbook1);
displayBooks();
update(3,'author','p.bruno');
updatemanyelement()

