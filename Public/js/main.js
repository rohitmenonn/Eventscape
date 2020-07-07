$('.nav-toggler').on('click', (e) => {
    e.preventDefault()
    $('.nav-links').slideToggle();
})

function myFunction(x) {
    if(!x.matches)
    {
      $('.nav-links').show();
    }
  }
  
  var x = window.matchMedia("(max-width: 56.25rem)")
  myFunction(x) 
  x.addListener(myFunction)