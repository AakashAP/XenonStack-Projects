window.addEventListener('scroll', function () {
    const element = document.querySelector('#animation-init');
    const position = element.getBoundingClientRect();

    // checking for partial visibility
    if (position.top + 400 < window.innerHeight && position.bottom >= 400) {
        document.getElementById('animation-row').classList.add("why-xenonstack-row-animate");
    }
});



window.addEventListener('scroll', function () {
  const element = document.querySelector('#animationCards');
  const position = element.getBoundingClientRect();

  // checking for partial visibility
  if (position.top + 200 < window.innerHeight && position.bottom >= 200) {
    document.getElementById('firstleftside').classList.add("animationCards-leftNormal");
    document.getElementById('firstRightside').classList.add("animationCards-rightNormal");
  }
  if(position.top + 600 < window.innerHeig