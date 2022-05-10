# Image Viewer

## Introduction

A simple and easy-to-use vanilla JavaScript that enables viewing images in a fullscreen modal.

Live Demo: https://winyumi.github.io/image-viewer/


## Usage

1. Add the `imageviewer.js` and `imageviewer.css` files to your assets folder.

2. Add the following code to the `<head>` of your HTML file. Adjust relative paths accordingly.

    ```html
    <link href="/assets/css/imageviewer.css" rel="stylesheet">
    <script src="/assets/js/imageviewer.js" async defer></script>
    ```

3. Add the `viewer` class to each desired `<a>` tag that links to an image.

    Example:
    ```html
    <a href="image.jpg" class="viewer">
      <img src="thumbnail.jpg" alt="">
    </a>
    ```

4. View your HTML page and click on your image to see it in action. You can close the modal by clicking outside of the full-view image, clicking the X at the top-right, or pressing ESC on your keyboard.


## Compatibility

This is compatible with any modern browser.
