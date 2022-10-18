const Questions = {
  method: "POST",
  action: "#",
  enctype: "multipart/form-data",
  acceptCharset: "utf-8",
  steps: true,
  questions: [
    {
      type: "radio",
      name: "¿Qué tipo de gafas graduadas utilizas?",
      label: "¿Qué tipo de gafas graduadas utilizas?",
      options: [
        {
          label: "De lejos",
          value: "De lejos",
          text: "De lejos",
        },
        {
          label: "De Cerca",
          value: "De Cerca",
          text: "De Cerca",
        },
        {
          label: "Progresivas (ambas)",
          value: "Progresivas (ambas)",
          text: "Progresivas (ambas)",
        },
      ],
      required: true,
      error: "Porfavor elige una opción",
    },
    {
      type: "radio",
      name: "¿Cuánto te gastaste en tus últimas gafas?",
      label: "¿Cuánto te gastaste en tus últimas gafas?",
      options: [
        {
          label: "Entre 0 y 100 euros",
          value: "Entre 0 y 100 euros",
          text: "Entre 0 y 100 euros",
        },
        {
          label: "Entre 100 y 250 euros",
          value: "Entre 100 y 250 euros",
          text: "Entre 100 y 250 euros",
        },
        {
          label: "Más de 250 euros",
          value: "Más de 250 euros",
          text: "Más de 250 euros",
        },
      ],
      required: true,
      error: "Porfavor elige una opción",
    },
    {
      type: "radio",
      name: "¿Has comprado online alguna de tus gafas graduadas?",
      label: "¿Has comprado online alguna de tus gafas graduadas?",
      options: [
        {
          label: "Sí",
          value: "Sí",
          text: "Sí",
        },
        {
          label: "No",
          value: "No",
          text: "No",
        },
        {
          label: "¿Es posible?",
          value: "¿Es posible?",
          text: "¿Es posible?",
        },
      ],
      required: true,
      error: "Porfavor elige una opción",
    },
    {
      type: "div",
      label: "Indícanos tus datos para enviarte información sin compromiso :)",
      questions: [
        {
          type: "text",
          name: "name",
          placeholder: "Nombre",
          title:
            "El nombre debe tener al menos 3 caracteres y contener solo letras",
        },
        {
          type: "email",
          name: "Email",
          required: true,
          placeholder: "Email",
        },
        {
          type: "text",
          name: "Tel",
          placeholder: "Telefono",
          required: true,
          title: "Proporcione un numero de telefono valido",
        },
        // {
        //   type: "checkbox",
        //   name: "condiciones",
        //   placeholder: "Condiciones",
        //   required: true,
        //   title: "He leído y acepto la política de privacidad",
        // },
      ],
    },
    {
      type: "checkbox",
      name: "condiciones",
      label: "He leído y acepto la política de privacidad",
      required: true,
      title: "He leído y acepto la política de privacidad",
      error: "Acepte los terminos",
      options: [
        {
          label: "Sí",
          value: "option1",
          text: "Sí",
        },
      ],
    },
  ],
};

const forms = document.querySelectorAll(".divForm");

console.log(forms);

forms.forEach((form) => {
  console.log(form);
  const divForm = form.querySelector("#form");

  const formElement = document.createElement("form");
  formElement.setAttribute("method", form.method);
  formElement.setAttribute("action", form.action);
  formElement.setAttribute("enctype", form.enctype);
  formElement.setAttribute("accept-charset", form.acceptCharset);
  formElement.setAttribute("autocomplete", form.autocomplete);
  formElement.setAttribute("autocapitalize", form.autocapitalize);
  formElement.setAttribute("autocorrect", form.autocorrect);
  divForm.appendChild(formElement);

  const formQuestions = Questions.questions;
  for (let i = 0; i < formQuestions.length; i++) {
    const formQuestion = formQuestions[i];

    if (formQuestion.type == "radio") {
      const div = document.createElement("div");
      if (i !== 0) div.classList.add("d-none");
      const label = document.createElement("label");
      label.setAttribute("class", "fs-3 text-center");
      label.textContent = formQuestion.label;
      div.setAttribute("data-id", i);
      div.appendChild(label);

      formQuestion.options.forEach((inputElement, index) => {
        console.log(formQuestion.options);
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", formQuestion.name);
        input.setAttribute("value", inputElement.value);
        input.setAttribute("id", inputElement.value + index);
        input.setAttribute("class", "form-control mb-1 p-3 btn-check");
        if (inputElement.required)
          input.setAtribute("required", inputElement.required);
        if (index === 0) {
          input.checked = true;
        }
        div.appendChild(input);
        const label = document.createElement("label");
        label.setAttribute(
          "class",
          "fs-3 text-center btn btn-outline-primary "
        );
        label.setAttribute("for", inputElement.value + index);
        label.textContent = inputElement.text;
        div.appendChild(label);
        label.onclick = function () {
          input.checked = true;
          div.querySelector(".active")?.classList.remove("active");
          label.classList.add("active");
          formElement.querySelectorAll("button")[1]?.click();
        };
      });
      formElement.appendChild(div);
    }

    //Si la pregunta del formulario es de tipo CHECKBOX hace lo siguiente.
    if (formQuestion.type === "checkbox") {
      const div = document.createElement("div");
      if (i !== 0) div.classList.add("d-none");
      const checkboxElement = document.createElement("input");
      checkboxElement.setAttribute("type", "checkbox");
      checkboxElement.setAttribute("id", "checkbox");
      checkboxElement.setAttribute("name", "condiciones");
      checkboxElement.setAttribute("value", "checkbox");
      checkboxElement.setAttribute("checked", "checked");
      checkboxElement.setAttribute("required", "required");
      checkboxElement.setAttribute("class", "p3", "form-check-input");
      const label = document.createElement("label");
      label.setAttribute("for", formQuestion.name);
      label.setAttribute("class", "fs-3", "form-check-label");
      label.htmlFor = "checkbox";
      label.appendChild(
        document.createTextNode("He leído y acepto la política de privacidad")
      );
      div.appendChild(checkboxElement);
      div.appendChild(label);
      div.setAttribute("data-id", i);

      formElement.appendChild(div);
    }

    //Si la pregunta del formulario es de tipo SELECT hace lo siguiente.
    if (formQuestion.type === "select") {
      const div = document.createElement("div");
      if (i !== 0) div.classList.add("d-none");
      const label = document.createElement("label");
      label.setAttribute("for", formQuestion.name);
      label.setAttribute("class", "fs-3");
      label.innerHTML = formQuestion.label;
      div.appendChild(label);
      div.setAttribute("data-id", i);
      const selectElement = document.createElement("select");
      selectElement.setAttribute("name", formQuestion.name);
      selectElement.setAttribute("class", "form-select p-3");
      selectElement.setAttribute("required", formQuestion.required);
      selectElement.setAttribute("title", formQuestion.error);
      formElement.appendChild(selectElement);
      const selectOptions = formQuestion.options;
      for (let j = 0; j < selectOptions.length; j++) {
        const selectOption = selectOptions[j];
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", selectOption.text);
        optionElement.innerHTML = selectOption.text;
        selectElement.appendChild(optionElement);
      }
      div.appendChild(selectElement);
      formElement.appendChild(div);
    }

    //Si la pregunta del formulario es de tipo TEXT hace lo siguiente.
    if (formQuestion.type === "text") {
      const none = i !== 0 ? "d-none" : "";
      const inputElement = document.createElement("input");
      inputElement.setAttribute("type", "text");
      inputElement.setAttribute("data-id", i);
      inputElement.setAttribute("class", none + " form-control mt-2p p-3");
      inputElement.setAttribute("name", formQuestion.name);
      inputElement.setAttribute("placeholder", formQuestion.placeholder);
      inputElement.setAttribute("autocomplete", formQuestion.autocomplete);
      inputElement.setAttribute("autocapitalize", formQuestion.autocapitalize);
      inputElement.setAttribute("autocorrect", formQuestion.autocorrect);
      inputElement.setAttribute("title", formQuestion.title);
      formElement.appendChild(inputElement);
    }

    //Si la pregunta del formulario es de tipo DIV hace lo siguiente.
    if (formQuestion.type == "div") {
      const div = document.createElement("div");
      div.setAttribute("class", "d-none");
      const label = document.createElement("label");
      label.setAttribute("class", "fs-3 text-center");
      label.textContent = formQuestion.label;
      div.setAttribute("data-id", i);
      div.appendChild(label);
      formQuestion.questions.forEach((inputElement, index) => {
        const input = document.createElement("input");
        input.setAttribute("type", inputElement.type);
        input.setAttribute("name", inputElement.placeholder);
        input.setAttribute("placeholder", inputElement.placeholder);
        input.setAttribute("class", "form-control mb-1 p-3");

        div.appendChild(input);
      });
      formElement.appendChild(div);
    }
    //create buttons for next question remove d-none class
  }

  const buttonNext = document.createElement("button");
  buttonNext.setAttribute("type", "button");
  buttonNext.setAttribute("data-next", "0");
  buttonNext.setAttribute("class", "float-end btn btn-primary btn-lg m-3");
  buttonNext.innerHTML = '<i class="fas fa-arrow-right"></i>';

  const buttonPrevious = document.createElement("button");
  buttonPrevious.setAttribute("type", "button");

  buttonPrevious.setAttribute(
    "class",
    "d-none btn btn-primary btn-lg m-3 btn-block"
  );
  buttonPrevious.innerHTML = '<i class="fas fa-arrow-left"></i>';

  const buttonSubmit = document.createElement("button");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.setAttribute(
    "class",
    "d-none btn btn-primary btn-lg m-3 btn-block"
  );
  buttonSubmit.innerHTML = "Enviar";

  formElement.appendChild(buttonPrevious);
  formElement.appendChild(buttonNext);
  formElement.appendChild(buttonSubmit);

  const finishQuestion = formQuestions.length - 1;
  var step = 0;

  buttonNext.addEventListener("click", function (event) {
    event.preventDefault();
    const next = parseInt(event.target.getAttribute("data-next"));

    if (step >= 0) {
      buttonPrevious.classList.remove("d-none");
    } else {
      buttonPrevious.classList.add("d-none");
    }

    if (step === finishQuestion) {
      alert("Please wait...");
      return false;
    }
    const nextDiv = form.querySelector(`[data-id="${step + 1}"]`);
    const previousDiv = form.querySelector(`[data-id="${step}"]`);

    if (previousDiv.type && previousDiv.type == "text") {
      if (previousDiv.value === "") {
        previousDiv.classList.add("is-invalid");
        return false;
      } else {
        previousDiv.classList.remove("is-invalid");
        previousDiv.classList.add("is-valid");
      }
    }

    //Validar que el nombre no esté vacio y debe tener al menos 3 caracteres y contener solo letras
    if (previousDiv.name && previousDiv.name == "name") {
      if (
        previousDiv.value === "" ||
        !/^[A-Za-z\s]+$/.test(previousDiv.value) ||
        previousDiv.value.length < 3
      ) {
        previousDiv.classList.add("is-invalid");
        // alert("Por favor, introduce un nombre valido.");
        return false;
      } else {
        previousDiv.classList.remove("is-invalid");
        previousDiv.classList.add("is-valid");
      }
    }

    //Validar que el codigo postal no esté vacio, sea un numero y tenga una longitud de 5
    if (previousDiv.name && previousDiv.name == "Zip") {
      if (
        previousDiv.value === "" ||
        isNaN(previousDiv.value) ||
        previousDiv.value.length != 5
      ) {
        previousDiv.classList.add("is-invalid");
        // alert("Por favor, proporcione un código postal con el formato #####.");
        return false;
      } else {
        previousDiv.classList.remove("is-invalid");
        previousDiv.classList.add("is-valid");
      }
    }

    //Validar que el telefono no esté vacio, sea un numero y tenga una longitud de 9 digitos
    if (previousDiv.name && previousDiv.name == "Tel") {
      if (
        previousDiv.value === "" ||
        isNaN(previousDiv.value) ||
        previousDiv.value.length != 9
      ) {
        previousDiv.classList.add("is-invalid");
        // alert("Por favor, proporcione un telefono con 9 digitos.");
        return false;
      } else {
        previousDiv.classList.remove("is-invalid");
        previousDiv.classList.add("is-valid");
      }
    }

    //Validar que el email no esté vacio y contenga @
    if (previousDiv.type && previousDiv.type == "email") {
      if (
        previousDiv.value === "" ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(previousDiv.value)
      ) {
        previousDiv.classList.add("is-invalid");
        // alert("Por favor, proporcione un email valido.");
        return false;
      } else {
        previousDiv.classList.remove("is-invalid");
        previousDiv.classList.add("is-valid");
      }
    }

    nextDiv.classList.remove("d-none");
    previousDiv.classList.add("d-none");
    step = step + 1;
    if (step == finishQuestion) {
      buttonNext.classList.add("d-none");
      buttonSubmit.classList.remove("d-none");
    }
  });

  buttonPrevious.addEventListener("click", function (event) {
    event.preventDefault();
    if (step == 1) {
      buttonPrevious.classList.add("d-none");
    }
    const nextDiv = form.querySelector(`[data-id="${step - 1}"]`);
    const previousDiv = form.querySelector(`[data-id="${step}"]`);
    if (step == finishQuestion) {
      buttonSubmit.classList.add("d-none");
      buttonNext.classList.remove("d-none");
    }
    nextDiv.classList.remove("d-none");
    previousDiv.classList.add("d-none");
    step = step - 1;
  });

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = {};
    // let okForm = true;
    formData.forEach((value, key) => {
      formDataJson[key] = value;
      if (value === "") {
        formElement
          .querySelector(`[name="${key}"]`)
          .classList.add("is-invalid");
        // okForm = false;
        return false;
      } else {
        formElement
          .querySelector(`[name="${key}"]`)
          .classList.remove("is-invalid");
        formElement.querySelector(`[name="${key}"]`).classList.add("is-valid");
      }
    });
    // if (okForm) {
    //   console.log(formDataJson);
    //   alert("Gracias por rellenar el formulario");
    // }
    //Intentado integrar el backend
    console.log(formDataJson);
    fetch("php/post.php", {
      method: "POST",
      body: JSON.stringify(formDataJson),
    })
      .then(function (response) {
        console.log("Success:", response);
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (error) {
        console.log("Solicitud fallida:", error);
      })
      // .then((response) => response.json()) // convertir a json
      // .then((json) => console.log(json)) //imprimir los datos en la consola
      // .catch((err) => console.log("Solicitud fallida", err)) //capturar errores
      .finally(function () {
        document.querySelector("#formSuccess").classList.remove("d-none");
        formElement.classList.add("d-none");
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
