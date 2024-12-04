<!DOCTYPE html>
<!-- This page is adapted from w3schools "How to make a link tree website https://www.w3schools.com/howto/howto_website_create_linktree.asp" -->
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Add your name below -->
  <title>Arianna Nahim</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body class="main-text-color">
  <!-- Content container. Everything except footer goes here -->
  <div class="container">
    <!-- Image and name container. Put your replacement photo—which you should crop to be square—in the images folder, then change the source attribute to images/yourportraitfilename.jpg. This path says, "Look in the images folder for yourportraitfilename.jpg." Be sure to change the alt text, too. -->
    <div class="image-container">
      <img src="images/portrait.jpg" alt="Photo by Art Hauntington">
    </div>
    <div class="intro">
      I'm <span class="name"><strong>Arianna Nahim</strong></span>, aspiring journalist/news reporter. You guys seen Seinfeld?
    </div>
    <div class="section-header">
      <h1>My work</h1>
    </div>
    <!-- Replace the # inside of the href="#" with your links. -->
    <div class="links-container">
      <div class="button toggle">Blog post</div>
      <div class="slidedown">
        <div class="description">
          <h2>Blog post title</h2>
          <p>Creativity is at risk with AI.</p>
          <a href="#" class="external-link" target="_blank">Read</a>
        </div>
      </div>

      <div class="button toggle">Video</div>
      <div class="slidedown">
        <div class="description">
          <h2>Video title</h2>
          <p>How to get the PERFECT eyeliner look.</p>
          <a href="#" class="external-link" target="_blank">Watch</a>
        </div>
      </div>

      <div class="button toggle">Podcast</div>
      <div class="slidedown">
        <div class="description">
          <h2>Podcast title</h2>
          <p>Listen to a fun and light hearted chat over "hot takes."</p>
          <a href="#" class="external-link" target="_blank">Listen</a>
        </div>
      </div>
    </div>

    <!-- Replace # with PDF from Google Docs, or replace the entire section with whatever you want. Or delete it! Or add another section below it!-->
    <div class="section-header">
      <h1>About me</h1>
    </div>

    <div class="links-container">
      <a href="https://drive.google.com" class="button" target="_blank">Resume</a>
    </div>

  </div>
  <div class="footer">
    <p>© Arianna Nahim, 2024. Based on a design by <a
        href="https://www.w3schools.com/howto/howto_website_create_linktree.asp" target="_blank">w3schools</a>.
    </p>
  </div>
  <script type="text/javascript" src="js/slider.js"></script>
</body>

</html>
