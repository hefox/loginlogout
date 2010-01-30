(function ($) {

function loginlogoutAttach(context) {
  for(var url in login_destination = Drupal.settings.loginlogout.urls) {
    $("a[href='"+ url + "']").attr('href',  Drupal.settings.loginlogout.urls[url]);
  }
}
Drupal.behaviors.loginlogout = function(context) {
 	loginlogoutAttach(context);
} 
})(jQuery);
