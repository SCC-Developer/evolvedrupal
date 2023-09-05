#!/bin/bash

/usr/local/bin/gitpod-setup-ddev.sh
composer install
ddev exec drush si --existing-config --account-dpass=admin123 -y
