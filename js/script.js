$( function() {
    $( "#datepicker" ).datepicker({     
      changeMonth: true,
    changeYear: true,
    minDate: '0m+1d',
    showAnim: "fadeIn",
              dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
    );
  } );
$( function() {
    $( "#tabs" ).tabs();
  } );
