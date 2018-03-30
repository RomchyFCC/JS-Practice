
// variables
const form = document.querySelector('.contactForm');
const formLabels = document.querySelectorAll('label');
const submitButton = document.getElementById('submitButton');
const formWindow = document.querySelector('.form-window');
const formInputs = document.querySelectorAll('.formFieldInput');

let autoFill = false;
let submitable = false;

// functions
// create a div element with paragraph and button child nodes
function createElement() {
  // parent element
  const div = document.createElement('DIV');
  div.classList.add('submited');

  // text child element
  const message = document.createElement('P');
  const messageText = document.createTextNode('Thank you for submiting!');
  message.classList.add('message');

  // button child element
  const button = document.createElement('BUTTON');
  const buttonText = document.createTextNode('Back');
  button.classList.add('backButton');

  // append child elements to parents
  button.appendChild(buttonText);
  message.appendChild(messageText);
  div.appendChild(message);
  div.appendChild(button);
  div.addEventListener('click', () => addForm());

  return div;
}

// if input is focused on add animation class
function addFormClass(e) {
  formLabels.forEach(label => {
    if (label.htmlFor === e.target.id) {
      label.classList.add('labelAnimation');
      label.parentNode.classList.add('formGroupAnimation');

      // check if autofill button is active and add default value to the clicked item
      if (autoFill === true) {
        e.target.value = e.target.dataset.example
        checkForm();
      }
    }
  })
}

// if input is not focused or does not contain text remove class animation
function removeFormClass(e) {
  formLabels.forEach(label => {
    if (label.htmlFor === e.target.id && e.target.value === '') {
      label.classList.remove('labelAnimation');
    }
    label.parentNode.classList.remove('formGroupAnimation');
  })
}

// check if all inputs have a value and form can be submited
function checkForm() {
  submitable = true;

  // check each input if it contains a value
  formInputs.forEach(input => {
    if (!input.value) {
      submitable = false;
      submitButton.id = 'submitButton';
    }
  })

  // if all inputs have a value make the form submitable
  if(submitable) {
    submitButton.id = 'submitable';
  }
}

// if the user submits the form clear the inputs and show created element(thank you message)
function submitForm(e) {
  e.preventDefault();
  if (submitable === false) {
    return;
  }
  // if we want to pass the information,we could use a function here
  // form.submit();

  // full form reset
  form.reset();
  submitable = false;
  submitButton.id = 'submitButton';
  formLabels.forEach(label => {
    label.classList.remove('labelAnimation');
    label.parentNode.classList.remove('formGroupAnimation');
  })

  // with the help of a promise we make sure everything happens in order
  let classPromise = new Promise ((resolve, reject) => {
    form.classList.add('removeForm');
    form.addEventListener('transitionend', () => {
      // seems redundant to add this check but, this event is fired again when you return to original view
      if (form.classList.contains('removeForm')) {
        form.classList.add('removeFormDOM');
      }
      // check if form has been removed with display:none
      if(form.classList.contains('removeForm')) {
        resolve();
      }
    })
  }) // end of promise
  // after the form is removed add a thank you message
  classPromise.then(() => {
    formWindow.appendChild(createElement());
  })
} // end of submitForm

// when the user clicks back, return back to form view
function addForm() {
  const createdElement = document.querySelector('.submited');
  formWindow.removeChild(createdElement);
  form.classList.remove('removeFormDOM', 'removeForm');
}

// event listeners
form.addEventListener('focusin', e => addFormClass(e));
form.addEventListener('focusout', e => removeFormClass(e));
formInputs.forEach(input => input.addEventListener('keyup', () => checkForm()))
submitButton.addEventListener('click', e => submitForm(e));

// extra functionality
window.addEventListener('keydown', e => (e.key === 'Control') ? autoFill = true : autoFill = false);
window.addEventListener('keyup', () => (autoFill = false));