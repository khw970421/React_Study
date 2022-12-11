export default function Counter({ $target, onIncrease, onDecrease }) {
  const $div = document.createElement("div");
  $target.appendChild($div);
  let count = 0;

  this.render = () => {
    $div.innerHTML = `
      <span id="count" style="font-size:40px">0</span><br/>
      <button id="plus">+</button>
      <button id="minus">-</button>
     `;

    $div.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        if (e.target.id === "plus") {
          count++;
          onIncrease($target, count);
        } else if (e.target.id === "minus") {
          count--;
          onDecrease($target, count);
        }
        $div.querySelector("#count").innerHTML = String(count);
      }
    });
  };

  this.render();
}
