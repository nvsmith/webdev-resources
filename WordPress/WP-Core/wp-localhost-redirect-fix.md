# WordPress Localhost URL Redirect Fix

Updated: 21 JAN 2026

- [WordPress Localhost URL Redirect Fix](#wordpress-localhost-url-redirect-fix)
    - [The Issue](#the-issue)
        - [Quick Fix (Immediate Access)](#quick-fix-immediate-access)
        - [Database Fix](#database-fix)
            - [Option A: Adminer / phpMyAdmin / AdminNeo](#option-a-adminer--phpmyadmin--adminneo)
            - [Option B: WP-CLI](#option-b-wp-cli)
        - [Cleanup](#cleanup)
    - [WordPress Boot Order \& URL Resolution Overview](#wordpress-boot-order--url-resolution-overview)
        - [Boot Order for WordPress Simplified](#boot-order-for-wordpress-simplified)
        - [URLs in WordPress](#urls-in-wordpress)
        - [How `wp-config.php` Overrides the Database](#how-wp-configphp-overrides-the-database)
        - [Authority Hierarchy (Highest → Lowest)](#authority-hierarchy-highest--lowest)
        - [Why the Database Still Matters](#why-the-database-still-matters)
        - [Practical Rules](#practical-rules)

## The Issue

Local WordPress site redirects to production domain after login. This happens if `home` and `siteurl` in the database are overwritten with the production URL.

### Quick Fix (Immediate Access)

Navigate to the config file at `app/public/wp-config.php`

**Above** the `/* That's all, stop editing! */` comment, add the following lines:

```php
define('WP_HOME', 'http://localhost:10123');
define('WP_SITEURL', 'http://localhost:10123');
```

This stops redirects instantly and allows you to log in. Afterwards, you will need to fix the database manually or use a plugin (like Better Search & Replace) to swap your production URL with your localhost URL.

### Database Fix

#### Option A: Adminer / phpMyAdmin / AdminNeo

1. Open your database
2. Open `wp_options`
3. Update these values with your full localhost URL:
    - `home`
    - `siteurl`

For example:

```
http://localhost:10123
```

#### Option B: WP-CLI

```bash
wp option update home 'http://localhost:10123'
wp option update siteurl 'http://localhost:10123'
```

### Cleanup

- Remove `WP_HOME` / `WP_SITEURL` from `wp-config.php`
- Clear browser cache
- Restart Local site

<br>

## WordPress Boot Order & URL Resolution Overview

### Boot Order for WordPress Simplified

1. `index.php`
2. `wp-config.php`
3. Database connection
4. Load `wp_options`
5. Resolve site URLs
6. Route request / apply redirects

**Note:** `wp-config.php` is loaded **before** WordPress reads the database.

### URLs in WordPress

By default, WordPress uses stored options:

- `home` → `wp_options.home`
- `siteurl` → `wp_options.siteurl`

These values control:

- Canonical URLs
- Login redirects
- Admin routing
- Asset URLs

### How `wp-config.php` Overrides the Database

The `wp-config.php` file can short circuit the process of loading from the database. When you define:

```php
define('WP_HOME', 'http://localhost:10123');
define('WP_SITEURL', 'http://localhost:10123');
```

WordPress:

- Sees these constants already defined in the configuration file
- Skips reading `home` / `siteurl` from the database
- Uses the constants for the entire request

**No database writes occur.** This is a runtime override only.

### Authority Hierarchy (Highest → Lowest)

1. Constants in `wp-config.php`
2. Filters (advanced usage)
3. Database (`wp_options`)
4. Inferred values

Higher levels always override lower ones.

### Why the Database Still Matters

- `wp-config.php` does **not** sync or update options
- Bad values remain stored until fixed
- Removing overrides re-exposes DB issues

### Practical Rules

- `wp-config.php` = execution-time truth
    - Use config overrides to regain access
- Database = stored truth
    - Fix the database for permanent correctness
