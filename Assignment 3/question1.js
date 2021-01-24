var library =[ 
{
    author: "'Bill Gates'",
    title: 'The Road Ahead',
    readingstatus: true,
},
{
    author: "'Steave Jobs'",
    title: 'Walter Isaacson',
    readingstatus: true,

},
{
    author: "'Suzanne Collins'",
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingstatus: false
    
}];
for(var i=0; i<library.length; i++){
    if(i<2){
        console.log("Already read", library[i].author, "by", library[i].title);
    }
    else{
        console.log("You still need to read" ,library[i].title, "by", library[i].author);
    }
}



