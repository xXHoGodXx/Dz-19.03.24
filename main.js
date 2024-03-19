let boxes = document.querySelectorAll(".todos__column");
let age_inp = document.querySelector(".inp2")
let form = document.forms.form

let db =[
  {
    name: "Charles Ross",
    age: 21
  },
  {
    name: "Timothy Guerrero",
    age: 21
  },
  {
    name: "Addam Hoffman",
    age: 21
  }
]

let db_2 = [
  {
    name: "Chris Diaz",
    age: 41
  }
]

let db_3 = [
  {
    name: "Terry Guerrero",
    age: 54
  }, 
  {
    name: "Alan Adams",
    age: 89
  }
]
let main = document.querySelector('.todos__box')
let main_2 = document.querySelector('#in-progress')
let main_3 = document.querySelector('#done')

form.onsubmit = (e) => {
  e.preventDefault()
  
  let fm = new FormData(form)
  
  const data = {}
  
  fm.forEach((val, key) => {
    data[key] = val
    
  })
  
  if(age_inp.value <= 25) {

    db.push(data)
    reload(db, main)

  } else if(age_inp.value > 21 && age_inp.value <= 50) {
    db_2.push(data)
    reload_2(db_2, main_2)
  } else if(age_inp.value > 50) {
    db_3.push(data)
    reload_3(db_3, main_3)
  }
  
  
  
  
}

function reload_2(arr, place) {
  place.textContent = ""
  for(let item of arr) {
    
    let elem = document.createElement('div')
    let h1 = document.createElement('h1')
    let details = document.createElement('div')
    let h5 = document.createElement('h5')
    let span = document.createElement('span')
    function dragStart(e) {
       
      e.dataTransfer.setData("text/plain", e.target.id);
    
      setTimeout(() => {
        elem.classList.add("hide");
      }, 0);
    
    }
    elem.addEventListener("dragstart", dragStart);
    elem.setAttribute("id", Math.random())
    elem.setAttribute("draggable", true)
    elem.classList.add('elem-2')
    details.classList.add('details')
    
    h1.textContent = item.name
    h5.textContent = "Age"
    span.textContent = item.age
    place.append(elem)
    elem.append(h1, details)
    details.append(h5, span)
    
  }
  
  
}

reload_2(db_2, main_2)

function reload_3(arr, place) {
  place.textContent = ""
  for(let item of arr) {
    
    let elem = document.createElement('div')
    let h1 = document.createElement('h1')
    let details = document.createElement('div')
    let h5 = document.createElement('h5')
    let span = document.createElement('span')

    function dragStart(e) {
       
      e.dataTransfer.setData("text/plain", e.target.id);
    
      setTimeout(() => {
        elem.classList.add("hide");
      }, 0);
    
    }
    elem.addEventListener("dragstart", dragStart);

    elem.setAttribute("id", Math.random())
    elem.setAttribute("draggable", true)
    elem.classList.add('elem-2')
    details.classList.add('details')
    
    h1.textContent = item.name
    h5.textContent = "Age"
    span.textContent = item.age
    place.append(elem)
    elem.append(h1, details)
    details.append(h5, span)
    
  }
  
  
}
reload_3(db_3, main_3)

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
}

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  e.target.lastElementChild.append(draggable);
  draggable.classList.remove("hide");
}


boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});



function reload(arr, place) {
place.textContent = ""
    for(let item of arr) {

        let elem = document.createElement('div')
        let h1 = document.createElement('h1')
        let details = document.createElement('div')
        let h5 = document.createElement('h5')
        let span = document.createElement('span')
        
        function dragStart(e) {
       
          e.dataTransfer.setData("text/plain", e.target.id);
        
          setTimeout(() => {
            elem.classList.add("hide");
          }, 0);
        
        }
        elem.addEventListener("dragstart", dragStart);
        elem.setAttribute("id", Math.random())
        elem.setAttribute("draggable", true)
        elem.classList.add('elem-2')
        details.classList.add('details')
        
        h1.textContent = item.name
        h5.textContent = "Age"
        span.textContent = item.age
        place.append(elem)
        elem.append(h1, details)
        details.append(h5, span)

    }


}

reload(db, main)