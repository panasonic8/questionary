//class primary
class input{
  constructor(title, description){
    this.title= title;
    this.description=description;
  }
}

//class secundary(save, add, delete)
class create{
  savetask(element){
    if(localStorage.getItem("chest") === null){
      let tasks = [];
      tasks.push(element);
      localStorage.setItem("chest", JSON.stringify(tasks));
    }else{
      let tasks = JSON.parse(localStorage.getItem("chest"));
      tasks.push(element);
      localStorage.setItem("chest", JSON.stringify(tasks));
    }
    }

  addtask(){
let tasks = JSON.parse(localStorage.getItem("chest"));

let div = document.getElementById('div-form');
div.innerHTML="";
for(let i=0; i<tasks.length; i++){
  let title = tasks[i].title;

  let descript = tasks[i].description;
div.innerHTML += `<div class="divero" id="idero">
<strong>title:</strong>${title}
<strong>description:</strong>${descript}
<button type="button" class="btn btn-dark" name="delete" id="${i}">borrar</button>



</div>`

}
  }
  deletetask(element){

let idero = document.getElementById("idero");
if(element.name == "delete"){
  element.parentElement.remove();
  }
  }
  deleteall(){
    let tasks = JSON.parse(localStorage.getItem("chest"));
    tasks = [];

    localStorage.setItem("chest", JSON.stringify(tasks));
  }
  chaoninos(){
    var list = document.getElementById("div-form");

// As long as <ul> has a child node, remove it
while (list.hasChildNodes()) {
list.removeChild(list.firstChild);
}
  }
}

//events
var form = document.getElementById("form");
form.addEventListener("submit", function(e){
  var titulo = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const new_input = new input(titulo, desc);
  const new_create = new create();
  new_create.savetask(new_input);
  new_create.addtask();

  e.preventDefault();
});

const new_create = new create();
new_create.addtask();

 document.getElementById('div-form').addEventListener("click", function(e){
  const new_create = new create();
  new_create.deletetask(e.target);

});

var btn = document.getElementById('btn');

btn.addEventListener("click", function(){


  const new_create = new create();
new_create.deleteall();
new_create.chaoninos();
});
