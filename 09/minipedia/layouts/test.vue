<template>
  <div class="wrapper">
    <header class="banner">
      <ul>
        <li>
          <a href="#create-account">
            Create account
          </a>
        </li>
        <li>
          <a href="#login">
            Log in
          </a>
        </li>
      </ul>

      <input type="search" list="autocomplete" class="site-search" placeholder="🔍 Search minipedia">
      <datalist id="autocomplete">
        <!-- <option value=""> -->
      </datalist>
    </header>

    <Nuxt />
  </div>
</template>

<style>
 h1 {
   font-size: 2rem;
   font-weight: normal;
   margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
   border-bottom: 0.1rem solid var(--border-color)
  }

  figure {
   margin: 0;
   margin-bottom: 0.5rem;
  }

  figcaption {
   white-space: nowrap;
   font-weight: normal;
   font-size: 0.9em;
  }

  h2 {
   font-weight: normal;
  }

  .side-navigation h3 {
   font-weight: normal;
   font-size: 1em;
   color: black;
   opacity: 0.6;
  }

  body {
   line-height: 1.6;
   font-size: 0.9rem;
   font-family: sans-serif;
   padding: 0 1rem;
  }

  :root {
   --gray: #f6f6f6;
   --border-color: rgb(162, 169, 177);
   --light-blue: #A7D7F9;
  }

  .box {
   background: var(--gray);
   padding: 0.1rem;
   border: 0.1rem solid var(--border-color);
  }

  .full-bio {
   max-width: 271px;
   border-collapse: separate;
   border-spacing: 0.5rem;
   float: right;
   margin-left: 1rem;
   margin-bottom: 1rem;
   position: relative;
   font-size: 0.85rem;
  }

  .full-bio::before {
   position: absolute;
   left: -1.1rem;
   width: 1rem;
   height: 100%;
   background: white;
   z-index: 1;
   content: '';
   display: inline-block;
  }

  .full-bio [colspan="2"] {
   text-align: center;
  }

  .full-bio td {
   vertical-align: center;
  }

  .full-bio td:first-child {
   font-weight: bold;
  }

  .site-search {
   font-size: 1rem;
   padding: 0.2rem;
   padding-left: 0.5rem;
   width: 15rem;
   border-color: var(--border-color);
   border-style: solid;
   ;
   border-radius: 0.5rem;
   margin-bottom: 0.4rem;
   font-size: 0.9rem;

  }

  .wrapper {
   display: grid;
   grid-template-areas:
    "sidenav banner banner banner"
    "sidenav content content content";
   grid-template-columns: max-content 1fr;
   grid-template-rows: max-content 1fr;
  }

  .logo {
   grid-area: logo;
  }

  .logo a {
   text-decoration: none !important;
   color: black !important;
  }

  .side-navigation {
   grid-area: sidenav;
   padding: 1rem;
  }

  .content {
   grid-area: content;
   background: white;
   padding: 1rem;
   border: 0.1rem solid var(--light-blue);
  }

  a {
   text-decoration: none;
   color: #0645ad;
  }

  ul {
   padding: 0;
   margin: 0;
   list-style-type: none;
  }

  ol {
   padding: 0 2ch;
  }

  body {
   background: var(--gray);
  }

  .toc .box {
   display: inline-block;
   grid-template-columns: max-content;
   padding: 0.5rem;
  }

  .toc h2 {
   margin: 0 auto;
   font-weight: bold;
   border: none;
   font-size: 1rem;
   text-align: center;
  }


  .references {
   column-count: 2;
   column-gap: 2rem;
  }

  .references li {
   margin-bottom: 0.5rem;
  }

  .banner {
   margin-left: auto;
   text-align: right;
  }

  .banner ul {
   display: flex;
   justify-content: flex-end;
   margin-bottom: 1rem;
  }

  .banner ul li {
   margin-left: 1rem;
  }

  .banner input {
   display: inline-block;
  }

  .notice {
   display: block;
   margin-bottom: 1.5rem;
  }

  .logo a {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 2rem;
   text-transform: uppercase;
   font-family: cursive;
  }

  .logo img {
   width: 7rem;
   margin-bottom: 0.3rem;
  }
</style>
