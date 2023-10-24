// -------------------------------------------------------
function dateFormat(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

// -------------------------------------------------------
// Перевірка на валідність елемента
function checkValidation(event) {
    // let aa = $("input[name='flexRadio']:checked+label").text();
    const node = event.currentTarget;
    console.log(event.currentTarget.value);

    // Встановлення стилів css
    // Якщо значення елементу invalid
    if (!node.checkValidity()) {
        $(node).removeClass('is-valid');
        $(node).addClass('is-invalid');
    }
    else {
        $(node).removeClass('is-invalid');
        $(node).addClass('is-valid');              
    }      
}

// -------------------------------------------------------
// default-cтилі елементу форми 
function resetClassList(node) {
    if (node.classList.contains('is-valid') || node.classList.contains('is-invalid')) {
        $(node).removeClass('is-valid');
        $(node).removeClass('is-invalid');   
    }      
}