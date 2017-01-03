export let component = () => {
  let element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = ['Hello', 'webpack'].map((item) => item + ' ');

  return element;
}
