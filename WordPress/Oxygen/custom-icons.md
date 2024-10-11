# Custom Icons in Oxygen

It's recommended to use the [IcoMoon App](https://icomoon.io/app/) to create a **symobl-defs.svg** file that will be uploaded into Oxygen for use. Any icons you select and download as a set will be contained withing this single SVG file.

You can use the icons available in the app or upload your own SVG files to be added to a set.

1. Upload/select your desired icons for a set.
2. Click `Generate SVG & More`
3. Click the `gear icon` (next to the `Download` button).
    1. Name your set and any class prefix/suffix if you want.
    2. Check the `Use class selector`, `Add <title> to SVGs`, and `PNG` format boxes.
4. Click the `Download` button.
5. Edit the **symbol-defs.svg** file:
    1. In the `path` property, modify the attribute to be `fill="currentColor"` so that color can be controlled by Oxygen.
    2. The `style` attribute can be deleted.
6. Import this file via **WP Dashboard > Oxygen > Settings > SVG Sets**

Once your SVG file has been uploaded, you can add/modify icons as usual via the Oxygen GUI and select your custom icons by choosing your icon set from the dropdown menu instead of the default sets provided.
