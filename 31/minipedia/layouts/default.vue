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
        <li v-for="lang in languages">
          <nuxt-link :to="switchLocalePath(lang.lang)"> {{ lang.displayName.nativeName }} </nuxt-link>
        </li>
      </ul>
    </nav>

    <header class="banner">
      <ul>
        <li>
          <nuxt-link :to="localePath('/register')">{{ $t('Register') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/login')">{{ $t('Login') }} </nuxt-link>
        </li>
      </ul>

      <input type="search" list="autocomplete" class="site-search" placeholder="🔍 Search minipedia">
      <datalist id="autocomplete">
        <!-- <option value=""></option> -->
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
<script>
  export default {
    middleware: 'wiki-translations',
    computed: {
      languages() {
        return this.$store.state.langlinks
          .filter(lang => {
            return ['es', 'fr', 'en'].includes(lang.lang);
          })
          .map(lang => {
           return {
            ...lang,
            displayName: this.languageDisplayNames[lang.lang]
           }
          })
      },
      languageDisplayNames() {
        return {
          "ab": {
            "name": "Abkhaz",
            "nativeName": "аҧсуа"
          },
          "aa": {
            "name": "Afar",
            "nativeName": "Afaraf"
          },
          "af": {
            "name": "Afrikaans",
            "nativeName": "Afrikaans"
          },
          "ak": {
            "name": "Akan",
            "nativeName": "Akan"
          },
          "sq": {
            "name": "Albanian",
            "nativeName": "Shqip"
          },
          "am": {
            "name": "Amharic",
            "nativeName": "አማርኛ"
          },
          "ar": {
            "name": "Arabic",
            "nativeName": "العربية"
          },
          "an": {
            "name": "Aragonese",
            "nativeName": "Aragonés"
          },
          "hy": {
            "name": "Armenian",
            "nativeName": "Հայերեն"
          },
          "as": {
            "name": "Assamese",
            "nativeName": "অসমীয়া"
          },
          "av": {
            "name": "Avaric",
            "nativeName": "авар мацӀ, магӀарул мацӀ"
          },
          "ae": {
            "name": "Avestan",
            "nativeName": "avesta"
          },
          "ay": {
            "name": "Aymara",
            "nativeName": "aymar aru"
          },
          "az": {
            "name": "Azerbaijani",
            "nativeName": "azərbaycan dili"
          },
          "bm": {
            "name": "Bambara",
            "nativeName": "bamanankan"
          },
          "ba": {
            "name": "Bashkir",
            "nativeName": "башҡорт теле"
          },
          "eu": {
            "name": "Basque",
            "nativeName": "euskara, euskera"
          },
          "be": {
            "name": "Belarusian",
            "nativeName": "Беларуская"
          },
          "bn": {
            "name": "Bengali",
            "nativeName": "বাংলা"
          },
          "bh": {
            "name": "Bihari",
            "nativeName": "भोजपुरी"
          },
          "bi": {
            "name": "Bislama",
            "nativeName": "Bislama"
          },
          "bs": {
            "name": "Bosnian",
            "nativeName": "bosanski jezik"
          },
          "br": {
            "name": "Breton",
            "nativeName": "brezhoneg"
          },
          "bg": {
            "name": "Bulgarian",
            "nativeName": "български език"
          },
          "my": {
            "name": "Burmese",
            "nativeName": "ဗမာစာ"
          },
          "ca": {
            "name": "Catalan; Valencian",
            "nativeName": "Català"
          },
          "ch": {
            "name": "Chamorro",
            "nativeName": "Chamoru"
          },
          "ce": {
            "name": "Chechen",
            "nativeName": "нохчийн мотт"
          },
          "ny": {
            "name": "Chichewa; Chewa; Nyanja",
            "nativeName": "chiCheŵa, chinyanja"
          },
          "zh": {
            "name": "Chinese",
            "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
          },
          "cv": {
            "name": "Chuvash",
            "nativeName": "чӑваш чӗлхи"
          },
          "kw": {
            "name": "Cornish",
            "nativeName": "Kernewek"
          },
          "co": {
            "name": "Corsican",
            "nativeName": "corsu, lingua corsa"
          },
          "cr": {
            "name": "Cree",
            "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
          },
          "hr": {
            "name": "Croatian",
            "nativeName": "hrvatski"
          },
          "cs": {
            "name": "Czech",
            "nativeName": "česky, čeština"
          },
          "da": {
            "name": "Danish",
            "nativeName": "dansk"
          },
          "dv": {
            "name": "Divehi; Dhivehi; Maldivian;",
            "nativeName": "ދިވެހި"
          },
          "nl": {
            "name": "Dutch",
            "nativeName": "Nederlands, Vlaams"
          },
          "en": {
            "name": "English",
            "nativeName": "English"
          },
          "eo": {
            "name": "Esperanto",
            "nativeName": "Esperanto"
          },
          "et": {
            "name": "Estonian",
            "nativeName": "eesti, eesti keel"
          },
          "ee": {
            "name": "Ewe",
            "nativeName": "Eʋegbe"
          },
          "fo": {
            "name": "Faroese",
            "nativeName": "føroyskt"
          },
          "fj": {
            "name": "Fijian",
            "nativeName": "vosa Vakaviti"
          },
          "fi": {
            "name": "Finnish",
            "nativeName": "suomi, suomen kieli"
          },
          "fr": {
            "name": "French",
            "nativeName": "français, langue française"
          },
          "ff": {
            "name": "Fula; Fulah; Pulaar; Pular",
            "nativeName": "Fulfulde, Pulaar, Pular"
          },
          "gl": {
            "name": "Galician",
            "nativeName": "Galego"
          },
          "ka": {
            "name": "Georgian",
            "nativeName": "ქართული"
          },
          "de": {
            "name": "German",
            "nativeName": "Deutsch"
          },
          "el": {
            "name": "Greek, Modern",
            "nativeName": "Ελληνικά"
          },
          "gn": {
            "name": "Guaraní",
            "nativeName": "Avañeẽ"
          },
          "gu": {
            "name": "Gujarati",
            "nativeName": "ગુજરાતી"
          },
          "ht": {
            "name": "Haitian; Haitian Creole",
            "nativeName": "Kreyòl ayisyen"
          },
          "ha": {
            "name": "Hausa",
            "nativeName": "Hausa, هَوُسَ"
          },
          "he": {
            "name": "Hebrew",
            "nativeName": "עברית"
          },
          "iw": {
            "name": "Hebrew",
            "nativeName": "עברית"
          },
          "hz": {
            "name": "Herero",
            "nativeName": "Otjiherero"
          },
          "hi": {
            "name": "Hindi",
            "nativeName": "हिन्दी, हिंदी"
          },
          "ho": {
            "name": "Hiri Motu",
            "nativeName": "Hiri Motu"
          },
          "hu": {
            "name": "Hungarian",
            "nativeName": "Magyar"
          },
          "ia": {
            "name": "Interlingua",
            "nativeName": "Interlingua"
          },
          "id": {
            "name": "Indonesian",
            "nativeName": "Bahasa Indonesia"
          },
          "ie": {
            "name": "Interlingue",
            "nativeName": "Originally called Occidental; then Interlingue after WWII"
          },
          "ga": {
            "name": "Irish",
            "nativeName": "Gaeilge"
          },
          "ig": {
            "name": "Igbo",
            "nativeName": "Asụsụ Igbo"
          },
          "ik": {
            "name": "Inupiaq",
            "nativeName": "Iñupiaq, Iñupiatun"
          },
          "io": {
            "name": "Ido",
            "nativeName": "Ido"
          },
          "is": {
            "name": "Icelandic",
            "nativeName": "Íslenska"
          },
          "it": {
            "name": "Italian",
            "nativeName": "Italiano"
          },
          "iu": {
            "name": "Inuktitut",
            "nativeName": "ᐃᓄᒃᑎᑐᑦ"
          },
          "ja": {
            "name": "Japanese",
            "nativeName": "日本語 (にほんご／にっぽんご)"
          },
          "jv": {
            "name": "Javanese",
            "nativeName": "basa Jawa"
          },
          "kl": {
            "name": "Kalaallisut, Greenlandic",
            "nativeName": "kalaallisut, kalaallit oqaasii"
          },
          "kn": {
            "name": "Kannada",
            "nativeName": "ಕನ್ನಡ"
          },
          "kr": {
            "name": "Kanuri",
            "nativeName": "Kanuri"
          },
          "ks": {
            "name": "Kashmiri",
            "nativeName": "कश्मीरी, كشميري‎"
          },
          "kk": {
            "name": "Kazakh",
            "nativeName": "Қазақ тілі"
          },
          "km": {
            "name": "Khmer",
            "nativeName": "ភាសាខ្មែរ"
          },
          "ki": {
            "name": "Kikuyu, Gikuyu",
            "nativeName": "Gĩkũyũ"
          },
          "rw": {
            "name": "Kinyarwanda",
            "nativeName": "Ikinyarwanda"
          },
          "ky": {
            "name": "Kirghiz, Kyrgyz",
            "nativeName": "кыргыз тили"
          },
          "kv": {
            "name": "Komi",
            "nativeName": "коми кыв"
          },
          "kg": {
            "name": "Kongo",
            "nativeName": "KiKongo"
          },
          "ko": {
            "name": "Korean",
            "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
          },
          "ku": {
            "name": "Kurdish",
            "nativeName": "Kurdî, كوردی‎"
          },
          "kj": {
            "name": "Kwanyama, Kuanyama",
            "nativeName": "Kuanyama"
          },
          "la": {
            "name": "Latin",
            "nativeName": "latine, lingua latina"
          },
          "lb": {
            "name": "Luxembourgish, Letzeburgesch",
            "nativeName": "Lëtzebuergesch"
          },
          "lg": {
            "name": "Luganda",
            "nativeName": "Luganda"
          },
          "li": {
            "name": "Limburgish, Limburgan, Limburger",
            "nativeName": "Limburgs"
          },
          "ln": {
            "name": "Lingala",
            "nativeName": "Lingála"
          },
          "lo": {
            "name": "Lao",
            "nativeName": "ພາສາລາວ"
          },
          "lt": {
            "name": "Lithuanian",
            "nativeName": "lietuvių kalba"
          },
          "lu": {
            "name": "Luba-Katanga",
            "nativeName": ""
          },
          "lv": {
            "name": "Latvian",
            "nativeName": "latviešu valoda"
          },
          "gv": {
            "name": "Manx",
            "nativeName": "Gaelg, Gailck"
          },
          "mk": {
            "name": "Macedonian",
            "nativeName": "македонски јазик"
          },
          "mg": {
            "name": "Malagasy",
            "nativeName": "Malagasy fiteny"
          },
          "ms": {
            "name": "Malay",
            "nativeName": "bahasa Melayu, بهاس ملايو‎"
          },
          "ml": {
            "name": "Malayalam",
            "nativeName": "മലയാളം"
          },
          "mt": {
            "name": "Maltese",
            "nativeName": "Malti"
          },
          "mi": {
            "name": "Māori",
            "nativeName": "te reo Māori"
          },
          "mr": {
            "name": "Marathi (Marāṭhī)",
            "nativeName": "मराठी"
          },
          "mh": {
            "name": "Marshallese",
            "nativeName": "Kajin M̧ajeļ"
          },
          "mn": {
            "name": "Mongolian",
            "nativeName": "монгол"
          },
          "na": {
            "name": "Nauru",
            "nativeName": "Ekakairũ Naoero"
          },
          "nv": {
            "name": "Navajo, Navaho",
            "nativeName": "Diné bizaad, Dinékʼehǰí"
          },
          "nb": {
            "name": "Norwegian Bokmål",
            "nativeName": "Norsk bokmål"
          },
          "nd": {
            "name": "North Ndebele",
            "nativeName": "isiNdebele"
          },
          "ne": {
            "name": "Nepali",
            "nativeName": "नेपाली"
          },
          "ng": {
            "name": "Ndonga",
            "nativeName": "Owambo"
          },
          "nn": {
            "name": "Norwegian Nynorsk",
            "nativeName": "Norsk nynorsk"
          },
          "no": {
            "name": "Norwegian",
            "nativeName": "Norsk"
          },
          "ii": {
            "name": "Nuosu",
            "nativeName": "ꆈꌠ꒿ Nuosuhxop"
          },
          "nr": {
            "name": "South Ndebele",
            "nativeName": "isiNdebele"
          },
          "oc": {
            "name": "Occitan",
            "nativeName": "Occitan"
          },
          "oj": {
            "name": "Ojibwe, Ojibwa",
            "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
          },
          "cu": {
            "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
            "nativeName": "ѩзыкъ словѣньскъ"
          },
          "om": {
            "name": "Oromo",
            "nativeName": "Afaan Oromoo"
          },
          "or": {
            "name": "Oriya",
            "nativeName": "ଓଡ଼ିଆ"
          },
          "os": {
            "name": "Ossetian, Ossetic",
            "nativeName": "ирон æвзаг"
          },
          "pa": {
            "name": "Panjabi, Punjabi",
            "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
          },
          "pi": {
            "name": "Pāli",
            "nativeName": "पाऴि"
          },
          "fa": {
            "name": "Persian",
            "nativeName": "فارسی"
          },
          "pl": {
            "name": "Polish",
            "nativeName": "polski"
          },
          "ps": {
            "name": "Pashto, Pushto",
            "nativeName": "پښتو"
          },
          "pt": {
            "name": "Portuguese",
            "nativeName": "Português"
          },
          "qu": {
            "name": "Quechua",
            "nativeName": "Runa Simi, Kichwa"
          },
          "rm": {
            "name": "Romansh",
            "nativeName": "rumantsch grischun"
          },
          "rn": {
            "name": "Kirundi",
            "nativeName": "kiRundi"
          },
          "ro": {
            "name": "Romanian, Moldavian, Moldovan",
            "nativeName": "română"
          },
          "ru": {
            "name": "Russian",
            "nativeName": "русский язык"
          },
          "sa": {
            "name": "Sanskrit (Saṁskṛta)",
            "nativeName": "संस्कृतम्"
          },
          "sc": {
            "name": "Sardinian",
            "nativeName": "sardu"
          },
          "sd": {
            "name": "Sindhi",
            "nativeName": "सिन्धी, سنڌي، سندھی‎"
          },
          "se": {
            "name": "Northern Sami",
            "nativeName": "Davvisámegiella"
          },
          "sm": {
            "name": "Samoan",
            "nativeName": "gagana faa Samoa"
          },
          "sg": {
            "name": "Sango",
            "nativeName": "yângâ tî sängö"
          },
          "sr": {
            "name": "Serbian",
            "nativeName": "српски језик"
          },
          "gd": {
            "name": "Scottish Gaelic; Gaelic",
            "nativeName": "Gàidhlig"
          },
          "sn": {
            "name": "Shona",
            "nativeName": "chiShona"
          },
          "si": {
            "name": "Sinhala, Sinhalese",
            "nativeName": "සිංහල"
          },
          "sk": {
            "name": "Slovak",
            "nativeName": "slovenčina"
          },
          "sl": {
            "name": "Slovene",
            "nativeName": "slovenščina"
          },
          "so": {
            "name": "Somali",
            "nativeName": "Soomaaliga, af Soomaali"
          },
          "st": {
            "name": "Southern Sotho",
            "nativeName": "Sesotho"
          },
          "es": {
            "name": "Spanish; Castilian",
            "nativeName": "español, castellano"
          },
          "su": {
            "name": "Sundanese",
            "nativeName": "Basa Sunda"
          },
          "sw": {
            "name": "Swahili",
            "nativeName": "Kiswahili"
          },
          "ss": {
            "name": "Swati",
            "nativeName": "SiSwati"
          },
          "sv": {
            "name": "Swedish",
            "nativeName": "svenska"
          },
          "ta": {
            "name": "Tamil",
            "nativeName": "தமிழ்"
          },
          "te": {
            "name": "Telugu",
            "nativeName": "తెలుగు"
          },
          "tg": {
            "name": "Tajik",
            "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
          },
          "th": {
            "name": "Thai",
            "nativeName": "ไทย"
          },
          "ti": {
            "name": "Tigrinya",
            "nativeName": "ትግርኛ"
          },
          "bo": {
            "name": "Tibetan Standard, Tibetan, Central",
            "nativeName": "བོད་ཡིག"
          },
          "tk": {
            "name": "Turkmen",
            "nativeName": "Türkmen, Түркмен"
          },
          "tl": {
            "name": "Tagalog",
            "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
          },
          "tn": {
            "name": "Tswana",
            "nativeName": "Setswana"
          },
          "to": {
            "name": "Tonga (Tonga Islands)",
            "nativeName": "faka Tonga"
          },
          "tr": {
            "name": "Turkish",
            "nativeName": "Türkçe"
          },
          "ts": {
            "name": "Tsonga",
            "nativeName": "Xitsonga"
          },
          "tt": {
            "name": "Tatar",
            "nativeName": "татарча, tatarça, تاتارچا‎"
          },
          "tw": {
            "name": "Twi",
            "nativeName": "Twi"
          },
          "ty": {
            "name": "Tahitian",
            "nativeName": "Reo Tahiti"
          },
          "ug": {
            "name": "Uighur, Uyghur",
            "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
          },
          "uk": {
            "name": "Ukrainian",
            "nativeName": "українська"
          },
          "ur": {
            "name": "Urdu",
            "nativeName": "اردو"
          },
          "uz": {
            "name": "Uzbek",
            "nativeName": "zbek, Ўзбек, أۇزبېك‎"
          },
          "ve": {
            "name": "Venda",
            "nativeName": "Tshivenḓa"
          },
          "vi": {
            "name": "Vietnamese",
            "nativeName": "Tiếng Việt"
          },
          "vo": {
            "name": "Volapük",
            "nativeName": "Volapük"
          },
          "wa": {
            "name": "Walloon",
            "nativeName": "Walon"
          },
          "cy": {
            "name": "Welsh",
            "nativeName": "Cymraeg"
          },
          "wo": {
            "name": "Wolof",
            "nativeName": "Wollof"
          },
          "fy": {
            "name": "Western Frisian",
            "nativeName": "Frysk"
          },
          "xh": {
            "name": "Xhosa",
            "nativeName": "isiXhosa"
          },
          "yi": {
            "name": "Yiddish",
            "nativeName": "ייִדיש"
          },
          "yo": {
            "name": "Yoruba",
            "nativeName": "Yorùbá"
          },
          "za": {
            "name": "Zhuang, Chuang",
            "nativeName": "Saɯ cueŋƅ, Saw cuengh"
          }
        }
      }
    }
  }

</script>
