const btname = document.querySelectorAll('.button');
const body = document.querySelector('body')

console.log(btname)

btname.forEach(function(item){
    item.addEventListener('click', function(e){
      body.style.backgroundColor = e.target.id
    })
  
})

