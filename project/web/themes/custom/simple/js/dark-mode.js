(function($, Drupal, once) {
    Drupal.behaviors.dark_mode = {
        attach: function(context, settings) {
            once('dark_mode', 'body', context).forEach(function(element) {

                $('button.btn-dark-mode').click(function () {
                    $('body').toggleClass('dark');
               
                    // Create variables for both the body element and the button
                    const body_element = document.querySelector('body');
                    const button = document.querySelector('.btn-dark-mode');
                    
                    if (body_element.classList.contains('dark')) {
                        // Print light mode
                        button.innerHTML = 'Light'
                    } else {
                        // Print dark mode. From .theme file preprocess function
                        button.innerHTML = drupalSettings.simple.dark_mode.label;
                    }
                });
    
            });
        }
    }
})(jQuery, Drupal, once);