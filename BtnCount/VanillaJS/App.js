import Counter from './Components/Counter/index.js'

const $app = document.querySelector('#app')
const $target = $app;

let totalCount = 0;

$app.innerHTML =
  `<div>
        <span>TotalCount</span>
        <span id="totalCount" >0</span>
    </div><br>`

new App({
  $target : $app
})

function App({ $target }){
  new Counter({
    $target,
    onIncrease : ($target  )=>{
      totalCount++
      $target.querySelector('#totalCount').innerHTML = String(totalCount)
    },
    onDecrease : ($target )=>{
      totalCount--
      $target.querySelector('#totalCount').innerHTML = String(totalCount)
    }
  }),
  new Counter({
    $target,
    onIncrease : ($target )=>{
      totalCount++
      $target.querySelector('#totalCount').innerHTML = String(totalCount)
    },
    onDecrease : ($target )=>{
      totalCount--
      $target.querySelector('#totalCount').innerHTML = String(totalCount)
    }
  }),
    new Counter({
      $target,
      onIncrease : ($target )=>{
        totalCount++
        $target.querySelector('#totalCount').innerHTML = String(totalCount)
      },
      onDecrease : ($target )=>{
        totalCount--
        $target.querySelector('#totalCount').innerHTML = String(totalCount)
      }
    })
}
