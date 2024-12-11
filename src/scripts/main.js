'use strict';

const inputs = document.querySelectorAll('input');

let inputsArray = Array.from(inputs);

for (const input of inputsArray) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class = 'field-label' for = "${input.id}" > ${input.name} </label>`,
  );
  const placeholderText = `${input.name.toLocaleLowerCase()}`;

  const capitalizeLetter =
    placeholderText.charAt(0).toLocaleUpperCase() + placeholderText.slice(1);

  input.placeholder = capitalizeLetter;

  if (input.placeholder === 'Firstname') {
    input.placeholder = 'First name';
  }

  if (input.placeholder === 'Lastname') {
    input.placeholder = 'Last name';
  }
}
