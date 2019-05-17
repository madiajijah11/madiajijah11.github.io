<!DOCTYPE html>
<html>
<head>
  <title>Name Filter</title>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no user-scalable=yes">
  <meta charset="utf-8">
</head>
<link rel="stylesheet" type="text/css" href="/bootstrap/css/namefilter.css">
<script type="text/javascript" src="/bootstrap/js/namefilter.js"></script>
<body>
  <div class="hero">
  <h1>Dian Rahmadani</h1>
</div>
<div class="toggles">
  <label for="invert-filter">Background invert filter %</label>
  <input class="invert-filter-toggle" id="invert-filter" type="range" min="-50" max="200" value="20"/>
  <label for="blend-mode">Blend mode filter</label>
  <select class="blend-mode-toggle" id="blend-mode">
    <option value="overlay">Overlay</option>
    <option value="multiply">Multiply</option>
    <option value="soft-light">Soft-Light</option>
    <option value="screen">Screen</option>
    <option value="hue">Hue</option>
    <option value="darken">Darken</option>
    <option value="lighten">Lighten</option>
    <option value="color">Color</option>
    <option value="luminosity">Luminosity</option>
    <option value="normal">Normal</option>
  </select>
</div>
</body>
</html>