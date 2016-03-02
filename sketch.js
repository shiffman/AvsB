

function setup() {
  noCanvas();

  // How many total votes cast vs. remaining as percentage
  var cast = select('#cast');
  var castSlider = select('#castSlider');
  var left = select('#leftover');
  castSlider.input(function() {
    var c = this.value();
    cast.html(c);
    left.html(100-c);
    calculate();
  });


  // What does A have now?
  var currentAslider = select('#currentAslider');
  var currentA = select('#currentA');
  var currentB = select('#currentB');
  currentAslider.input(function() {
    var ca = this.value();
    currentA.html(ca);
    currentB.html(100-ca);
    calculate();
  });

  // What will A get of remaining votes?
  var remainingAslider = select('#remainingAslider');
  var remainingA = select('#remainingA');
  var remainingB = select('#remainingB');
  remainingAslider.input(function() {
    var ra = this.value();
    remainingA.html(ra);
    remainingB.html(100-ra);
    calculate();
  });


  // What are the final numbers
  var finalA = select('#finalA');
  var finalB = select('#finalB');

  // Calculate the final numbers
  function calculate() {

    // What do we got now?
    var ca = currentAslider.value();
    var ra = remainingAslider.value();
    var c = castSlider.value();

    // Final numbers
    var a = ((ca * c) + (ra*(100-c)))/100;
    var b = 100 - a;

    // Update DOM
    finalA.html(a);
    finalB.html(b);
  }
}

