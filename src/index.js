const init = () => {
const inputForm = document.querySelector('form'); /*created variable for form on page*/
inputForm.addEventListener('submit', (event) => { /*type of event is 'submit', 'event' is the object represented as passed in argument. Callback function to handle event*/
    event.preventDefault(); /*callback method to override forms behavior*/
    const input = document.querySelector('input#searchByID'); /*accessing input directly*/
    // console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        summary.innerText = data.summary;
    });

});
  
}

document.addEventListener('DOMContentLoaded', init);