(function ($) {

function loginlogoutAttach(context) {
  var login_destination = Drupal.settings.loginlogout.login_destination;
  var logout_destination = Drupal.settings.loginlogout.logout_destination;
  if (login_destination && logout_destination) {
    var login = Drupal.settings.loginlogout.login;
    var logout = Drupal.settings.loginlogout.logout;
    $("a[href='"+ login + "']").attr('href', login_destination);
    $("a[href='"+ logout + "']").attr('href', logout_destination);
  }
}
Drupal.behaviors.loginlogout = function(context) {
 	loginlogoutAttach(context);
} 
})(jQuery);
