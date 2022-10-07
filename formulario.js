const Questions = {
  method: "POST",
  action: "#",
  enctype: "multipart/form-data",
  acceptCharset: "utf-8",
  steps: true,
  questions: [
    {
      type: "radio",
      name: "question1",
      label: "¿Qué tipo de gafas utilizas?",
      options: [
        {
          label: "Gafas Monofocales",
          value: "option1",
          text: "Monofocales",
        },
        {
          label: "Gafas Progresivas",
          value: "option2",
          text: "Progresivas",
        },
      ],
      required: true,
      error: "Porfavor elige una opción",
    },
    {
      type: "radio",
      name: "question2",
      label: "¿Cuánto te costo tus últimas gafas?",
      options: [
        {
          label: "Menos de 100€",
          value: "option1",
          text: "Menos de 100€",
        },
        {
          label: "Entre 100€ y 300€",
          value: "option2",
          text: "Entre 100€ y 300€",
        },
        {
          label: "Entre 300€ y 1000€",
          value: "option3",
          text: "Entre 300€ y 1000€",
        },
        {
          label: "Más de 1000€",
          value: "option4",
          text: "Más de 1000€",
        },
      ],
      required: true,
      error: "Porfavor elige una opción",
    },
    {
      type: "text",
      name: "name",
      placeholder: "Cual es tu nombre?",
      title:
        "El nombre debe tener al menos 3 caracteres y contener solo letras",
    },
    {
      type: "text",
      name: "Zip",
      placeholder: "Introduce tu codigo postal",
      title: "Proporcione un código postal con el formato #####",
    },
    {
      type: "text",
      name: "Tel",
      placeholder: "Introduce tu telefono",
      required: true,
      title: "Proporcione un numero de telefono valido",
    },
    {
      type: "div",
      label: "Rellena por ultimo estos campos",
      questions: [
        {
          type: "email",
          name: "Email",
          required: true,
          placeholder: "Introduce tu email",
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
    let okForm = true;
    formData.forEach((value, key) => {
      formDataJson[key] = value;
      if (value === "") {
        formElement
          .querySelector(`[name="${key}"]`)
          .classList.add("is-invalid");
        okForm = false;
        return false;
      } else {
        formElement
          .querySelector(`[name="${key}"]`)
          .classList.remove("is-invalid");
        formElement.querySelector(`[name="${key}"]`).classList.add("is-valid");
      }
    });
    if (okForm) {
      console.log(formDataJson);
      alert("Gracias por rellenar el formulario");
    }
  });
});
