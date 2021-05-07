<template>
  <div class="wrapper">
    <nav class="side-navigation">
      <div class="logo">
        <a href="/">
          <img src="/logo2.png" alt="">
          Minipedia
        </a>
      </div>
      <ul>
        <li><a href="#main-page"> {{ $t('MainPage') }} </a></li>
        <li><a href="#contents"> {{ $t('Contents') }} </a></li>
        <li><a href="#current-events"> {{ $t('CurrentEvents') }} </a></li>
        <li><a href="#random-article"> {{ $t('RandomArticle') }} </a></li>
        <li><a href="#about-wikipedia"> {{ $t('AboutWikipedia') }} </a></li>
        <li><a href="#contact-us"> {{ $t('ContactUs') }} </a></li>
        <li><a href="#donate"> {{ $t('Donate') }} </a></li>
      </ul>
      <h3> {{ $t('Contribute') }}</h3>
      <ul>
        <li><a href="#help"> {{ $t('Help') }} </a></li>
        <li><a href="#learn-to-edit"> {{ $t('LearnToEdit') }} </a></li>
        <li><a href="#community-portal"> {{ $t('CommunityPortal') }} </a></li>
        <li><a href="#recent-changes"> {{ $t('RecentChanges') }} </a></li>
        <li><a href="#upload-file"> {{ $t('UploadFile') }} </a></li>
      </ul>
      <h3>{{ $t('Tools') }} </h3>
      <ul>
        <li><a href="#what-links-here"> {{ $t('WhatLinksHere') }} </a></li>
        <li><a href="#related-changes"> {{ $t('RelatedChanges') }} </a></li>
        <li><a href="#special-pages"> {{ $t('SpecialPages') }} </a></li>
        <li><a href="#permanent-link"> {{ $t('PermanentLink') }} </a></li>
        <li><a href="#page-information"> {{ $t('PageInformation') }} </a></li>
        <li><a href="#cite-this-page"> {{ $t('CiteThisPage') }} </a></li>
        <li><a href="#wikidata-item"> {{ $t('WikidataItem') }} </a></li>
      </ul>
      <h3> {{ $t('PrintExport') }} </h3>
      <ul>
        <li><a href="#download-as-pdf"> {{ $t('DownloadAsPDF') }} </a></li>
        <li><a href="#printable-version"> {{ $t('PrintableVersion') }}</a></li>
      </ul>
      <h3> {{ $t('InOtherProjects') }} </h3>
      <ul>
        <li><a href="#wikimedia-commons"> {{ $t('WikimediaCommons') }} </a></li>
      </ul>
      <h3> {{ $t('Languages') }} </h3>
      <ul>
        <li><a href="#беларуская">беларуская</a></li>
        <li><a href="#čeština">čeština</a></li>
        <li><a href="#deutsch">deutsch</a></li>
        <li><a href="#kaszëbsczi">kaszëbsczi</a></li>
        <li><a href="#lietuvių">lietuvių</a></li>
        <li><a href="#polski">polski</a></li>
        <li><a href="#русский">русский</a></li>
        <li><a href="#українська">українська</a></li>
        <li><a href="#中文">中文</a></li>
      </ul>
      </ul>
    </nav>

    <header class="banner">
      <ul>
        <li>
          <NuxtLink to="/register"> {{ $t('Register') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/please-login"> {{ $t('Login') }}</NuxtLink>
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
   background: white;
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
