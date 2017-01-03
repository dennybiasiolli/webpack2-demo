export default function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = ['Hello', 'webpack'].map(function(item) {
    return item + ' ';
  });

  return element;
}
