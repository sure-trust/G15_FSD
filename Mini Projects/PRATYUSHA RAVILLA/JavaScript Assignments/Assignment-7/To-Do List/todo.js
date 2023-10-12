//taking id input-box here 
let inputBox = document.getElementById('input-box');

//taking id of list-container here
let listContainer = document.getElementById('list-container');

//defining addTask() function  
function addTask(){

    //checking if the input box is empty or not using if cond...
    if(inputBox.value===''){
        alert('you must write something!');
    }
    else{
        // creating HTML element 'li' using below line
        let li=document.createElement('li');
       //it takes the inputBox value using innerHTML
        li.innerHTML =inputBox.value;
        //it display the value in listContainer
        listContainer.appendChild(li);
        //to delete the list items using span
        let span=document.createElement('span');
        span.innerHTML="\u00d7";  //to add cross icon 
        li.appendChild(span);  // to display the span
    }

    // to empty the inputBox after adding value to list
       inputBox.value= '';

       // to call the saveData functon to save the data everytime
       saveData();
}

    // adding code for click function

    listContainer.addEventListener('click',function(e){

        // first it will check where we have clicked
        if(e.target.tagName==="LI"){  // if we clicked on li it will toggle/untoggle the check box
            e.target.classList.toggle('checked');
            saveData();  // added saveData here to update the checked and unchecked lists
        }
        else if(e.target.tagName==="SPAN"){ // if we click on span it will remove the cross button
            e.target.parentElement.remove();
            saveData();  // added save data here to update deleted span values
        }
    },false);

    // to store the list values locally...

    function saveData(){
        localStorage.setItem('data', listContainer.innerHTML);
    }
    // to display the updated data, creating the new function

    function showTask(){
        listContainer.innerHTML=localStorage.getItem('data');

    }
    showTask();  // to call the function