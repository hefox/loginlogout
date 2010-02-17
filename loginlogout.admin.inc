<?php

/*
 * Form defination 
 */
function loginlogout_settings() {
  $form = array();
  $form['loginlogout_additional_urls'] = array(
    '#type' => 'textarea',
    '#title' => t('Additional urls'),
    '#default_value' => variable_get('loginlogout_additional_urls', ''),
    '#description' => t('One per line additional paths to use with loginlogout, for example user/register.'),
  );
  
  return system_settings_form($form); 
}