# WordPress Localhost URL Redirect Fix

**Problem**

Local WordPress site redirects to production domain after login. This happens if `home` and `siteurl` in the database are overwritten with the production URL.

## Quick Fix (Immediate Access)

Navigate to the config file at `app/public/wp-config.php`

**Above** the `/* That's all, stop editing! */` comment, add the following lines:

```php
define('WP_HOME', 'http://localhost:10123');
define('WP_SITEURL', 'http://localhost:10123');
```

This stops redirects instantly and allows you to log in. Afterwards, you will need to fix the database manually or use a plugin (like Better Search & Replace) to swap your production URL with your localhost URL.

## Database Fix

### Option A: Adminer / phpMyAdmin

1. Open your database
2. Open `wp_options`
3. Update these values with your full localhost URL:
    - `home`
    - `siteurl`

For example:

```
http://localhost:10123
```

### Option B: WP-CLI

```bash
wp option update home 'http://localhost:10123'
wp option update siteurl 'http://localhost:10123'
```

## Cleanup

- Remove `WP_HOME` / `WP_SITEURL` from `wp-config.php`
- Clear browser cache
- Restart Local site
