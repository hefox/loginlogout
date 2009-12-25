(function ($) {

function loginlogoutAttach(context) {
  var destination = Drupal.settings.loginlogout.destination;
  if (destination) {
    $("a[href='/logout']").attr('href', '/logout?'+destination);
    $("a[href='/user/login']").attr('href', '/user/login?'+destination)
  }
}
Drupal.behaviors.loginlogout = function(context) {
 	loginlogoutAttach(context);
} 
})(jQuery);
