const formField = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: ""
}
const fillForm = () => {
    const dataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));

    if( dataFromLS === null) {
        return;
    }
    formData = dataFromLS;
    const arrDataLS = Object.keys(dataFromLS);
    for (const key of arrDataLS){
        formField.elements[key].value = dataFromLS[key];
    }
}
fillForm();
const onFieldFormInput = (event) => {
    const inputName = event.target.name;
        formData[inputName] = event.target.value.trim();
    
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

formField.addEventListener('input', onFieldFormInput);
const onFieldFormBtnClick = (event) => {
     event.preventDefault();
const email = formField.elements["email"].value.trim();        const message = formField.elements["message"].value.trim();
    if (email === "" || message === "") {
        alert('Fill please all fields');
        return;
    }
    formField.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
}
formField.addEventListener('submit', onFieldFormBtnClick);