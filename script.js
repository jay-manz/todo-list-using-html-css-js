const inputField = document.getElementById('input-field');
const listContainer = document.getElementById('list-container');

addTask = () => {
    if(inputField.value === ''){
        alert('You must input a text');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputField.value = '';
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    };
}, false);

saveData = ()=> {
    localStorage.setItem('data', listContainer.innerHTML);
}
showTask = ()=> {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();


// inputField.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         addTask();
//     }
// });




