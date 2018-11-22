/* console.log(React);
console.log(ReactDOM); */
const jsContainer = document.getElementById("js");
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;
const reactContainer = document.getElementById("react");
ReactDOM.render(
    /* TODO: React's version of the HTML template */
    reactContainer
  )