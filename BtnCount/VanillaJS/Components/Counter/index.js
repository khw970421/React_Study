export default function Counter({ $target , onIncrease , onDecrease }){
  const $div = document.createElement('div');
  $target.appendChild($div)
  let count = 0

  this.render = ()=>{
    const random = Math.floor(Math.random() * 1000000)
    const increaseId = `increase${random}`
    const decreaseId = `decrease${random}`

    $div.innerHTML = `
      <span id="count" style="font-size:40px">0</span><br/>
      <button id=${increaseId}>+</button>
      <button id=${decreaseId}>-</button>
     `

    document.querySelector(`#${increaseId}`).addEventListener('click',()=>{
      count++;
      $div.querySelector('#count').innerHTML = String(count)
      onIncrease($target , count);
    })

    document.querySelector(`#${decreaseId}`).addEventListener('click',()=>{
      count--;
      $div.querySelector('#count').innerHTML = String(count)
      onDecrease($target ,count);
    })
  }

  this.render();
}


