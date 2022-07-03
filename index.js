var checked = false;


$("#pricing-range").change(function (event) {
  var level = this.value;
  if (checked === true) {
    applyDiscount(checked);
  } else {
    findPrice(level);
  }

});

$("#billing-switch").change(function (event) {
  if (this.checked === true) {
    checked = true;
    applyDiscount(checked);
  } else {
    checked = false;
    applyDiscount(checked);
  }
  return checked;
});

function applyDiscount (checked) {
  var level = $("#pricing-range").val();

  if (checked === true) {
    findPrice(level);
    var price = $(".price-per-month").html();
    price = price.slice(1);
    var discountPrice = Number(price * 0.75).toFixed(2);
    $(".price-per-month").html("$" + discountPrice);
  } else {
    findPrice(level);
  }
}

function findPrice (level) {
  switch (level) {
    case "0" :
      $(".num-pageviews").html("10k ");
      $(".price-per-month").html("$8.00");
      break;

    case "1" :
      $(".num-pageviews").html("50k ");
      $(".price-per-month").html("$12.00");
      break;

    case "2" :
      $(".num-pageviews").html("100k ");
      $(".price-per-month").html("$16.00");
      break;

    case "3" :
      $(".num-pageviews").html("500k ");
      $(".price-per-month").html("$24.00");
      break;

    case "4" :
      $(".num-pageviews").html("1M ");
      $(".price-per-month").html("$36.00");
      break;

    default:
      console.log("something went wrong");
  }
}

// Slider Styling

$( '.slider' ).on( 'input', function( ) {
  var percentage = this.value * 25;
  $( this ).css( 'background', 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+percentage +'%, hsl(224, 65%, 95%) ' + percentage + '%, hsl(224, 65%, 95%) 100%)' );
} );
