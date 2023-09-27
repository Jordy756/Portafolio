(() => {
    const inputs = document.querySelectorAll(".input, .textarea");
    const typeOfErrors = ["valueMissing", "typeMismatch"];
    const errorMessages = {
        name: {
            valueMissing: "Este campo no puede ir vacío",
        },
        email: {
            valueMissing: "Este campo no puede ir vacío",
            typeMismatch: "El formato del correo no es válido",
        },
        message: {
            valueMissing: "Este campo no puede ir vacío",
        },
    };

    inputs.forEach(input => input.addEventListener("input", input => validate(input.target)));

    const validate = input => {
        const span = input.parentElement.querySelector(".input-error");
        input.validity.valid ? (span.innerHTML = "") : (span.innerHTML = showMessage(input));
    };

    const showMessage = input => {
        let message = "";
        typeOfErrors.forEach(error => input.validity[error] && (message = errorMessages[input.id][error]));
        return message;
    };
})();
