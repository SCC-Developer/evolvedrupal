<?php

/**
 * @file
 * Theme settings form for AL Theme theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function al_theme_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['al_theme'] = [
    '#type' => 'details',
    '#title' => t('AL Theme'),
    '#open' => TRUE,
  ];

  $form['al_theme']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
