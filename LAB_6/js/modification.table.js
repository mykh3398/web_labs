// -------------------------------------------------------
// Зареєструватись
function onSignUp(formRegister) {
    addRow(formRegister);
    formRegister.reset();
}

// -------------------------------------------------------
// Copy (action = 1) / Del (action = 2) 
function onActionRows(formTable, action) {
    // Обираємо всі елементи таблиці "відчекані"
    const checkboxes = $("#idDataTableBody input[type=checkbox]:checked");

    Array.from(checkboxes).forEach(check => {
        check.checked = false;
        // Вибираємо батьківський елемент checkbox'a - рядок tr таблиці #idDataTableBody
        const row = $(check).parents('#idDataTableBody tr');
        if (row.length > 0) 
            action === 1 ? copyRow(row) : deleteRow(row);
    });

    // виділених рядків немає => кнопки Copy, Del недоступні  
    formTable.copy.disabled = formTable.del.disabled = true;           
}  

// -------------------------------------------------------
function addRow(form) {

    let newRow = 
        `<tr>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox">
                </div>
            </td>
            <td>${form.email.value}</td>
            <td>${form.lastName.value}</td>
            <td>${form.firstName.value}</td>
            <td>${form.middleName.value}</td>
            <td>${$("input[name='flexRadio']:checked+label").text()}</td>
            <td>${form.birthday.value}</td>
            <td>${form.phone.value}</td>
            <td>${form.group.value}</td>
            <td>${form.addFile.value}</td>
        </tr>`;

    $("#idDataTableBody").append(newRow);   
    console.log(`Додано рядок`);    
}

// -------------------------------------------------------
function copyRow(row) {

    const newRow = row.clone();  
    // checked = false для нового рядка         
    $("input[type=checkbox]", newRow).prop('checked', false);

    // Додаємо рядок
    $("#idDataTableBody").append(newRow);
    console.log("Копія рядку");  
}

// -------------------------------------------------------
function deleteRow(row) {
    // Видаляємо рядок
    row.remove();
    console.log("Видалено рядок");
 
}