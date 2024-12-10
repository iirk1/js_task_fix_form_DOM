'use strict';

const inputs = document.querySelectorAll('input');

let inputsArray = Array.from(inputs);

console.log(inputsArray);

for (const input of inputsArray) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class = 'field-label' for = "${input.id}" > ${input.name} </label>`,
  );
  const placeholderText = `${input.name.toLocaleLowerCase()}`;

  const capitalizeLetter =
    placeholderText.charAt(0).toLocaleUpperCase() + placeholderText.slice(1);

  input.placeholder = capitalizeLetter;
}
