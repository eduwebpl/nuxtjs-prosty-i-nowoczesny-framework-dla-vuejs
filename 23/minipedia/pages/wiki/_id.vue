<template>
  <article class="content">
    <h1>
      {{ $route.params.id }}
    </h1>
 
    <span class="notice">From Wikipedia, the free encyclopedia</span>
    
    <FullInfoBox :content="$store.state.fullInfo.general" />
    
    <p>{{ $store.state.summary }} </p>

    <TableOfContents :content="$store.state.content" />
    
    <ContentSection 
     v-for="section in $store.state.content" 
     :title="section.title"
     :content="section.content"
     :key="section.title"
     /> 

    <h2 id="references">References</h2>
    <ol class="references">
      <li>
        Yad Vashem (2010). "Ceremony Marking 68 Years Since its Murder of Korczak and the Children of
        the Orphanage". Yad Vashem The Holocaust Martyrs' and Heroes' Remembrance Authority. Retrieved
        27 January 2012.
      </li>
      <li>
        "Jewish Doctor Janusz Korczak Died With 190 Children at Treblinka Court: Changes Date of Death
        for Orphanage Director". JTA. 30 March 2015. Retrieved 30 March 2015.
      </li>
      <li>
        Sandra Joseph, Institute of Education in London (July–August 2002). "POLE APART - the life and
        work of Janusz Korczak". Young Minds Magazine 59. Archived from the original on 28 September
        2007. Retrieved 27 January 2012.
      </li>
      <li>
        "Polskie Stowarzyszenie im. Janusza Korczaka". www.pskorczak.org.pl (in Polish). Retrieved
        2016-03-12.
      </li>
      <li>
        Tadeusz Lewowicki (2000). "Janusz Korczak (1878–1942)" (PDF, 43 KB). Prospects:the quarterly
        review of comparative education, vol. XXIV, no. 1/2, 1994, p. 37–48. UNESCO: International
        Bureau of Education. Retrieved 27 January 2012.
      </li>
      <li>
        Prof. Barbara Smolińska–Theiss (2012). "Janusz Korczak – zarys portretu (the portrait)" (in
        Polish). Rok Janusza Korczaka (The official year of Janusz Korczak). Archived from the original
        on 15 April 2012. Retrieved 27 January 2012.
      </li>
      <li>
        The Month, Volume 39. Simpki, Marshall, and Company. 1968. p. 350. When Dr. Janusz Korczak, a
        Jewish philanthropist and agnostic, voluntarily chooses to follow the Jewish orphans under his
        care to the Nazi extermination camp in Treblinka...
      </li>
      <li>
        Chris Mullen (March 7, 1983). "Korczak's Children: Flawed Faces in a Warsaw Ghetto". The
        Heights. p. 24. Retrieved 25 August 2013. An assimilated Jew, he changed his name from Henryk
        Goldschmidt and was an agnostic who did not believe in forcing religion on children.
      </li>
      <li>
        Janusz Korczak (1978). Ghetto diary. Holocaust Library. p. 42. You know I am an agnostic, but I
        understood: Pedagogy, tolerance, and all that.
      </li>
      <li>
        Janusz Korczak; Aleksander Lewin (1996). Sława: Opowiadania (1898-1914) (in Polish). Oficyna
        Wydawnicza Latona. p. 387. ISBN 978-83-85449-35-5.
      </li>
      <li>
        Maria Falkowska (1978). Kalendarium życia, działalności i twórczości Janusza Korczaka (in
        Polish). Wydaw-a Szkolne i Pedagogiczne. p. 8.
      </li>
      <li>
        Joanna Cieśla (15 January 2012). "Henryk zwany Januszem. Janusz Korczak - pedagog
        rewolucjonista" (in Polish). S.P. Polityka. Historia. Retrieved 27 January 2012.
      </li>
      <li>
        Józef Ignacy Kraszewski (2012). "Moja Biblioteczka". Historia o Janaszu Korczaku i o pięknej
        Miecznikównie. LubimyCzytać.pl. Retrieved May 25, 2012.
      </li>
      <li>
        Hanna Mortkowicz-Olczakowa (1960). "Goldszmit Henryk", in Polski Słownik Biograficzny, T. VIII.
        P. 214
      </li>
      <li>
        "CENTOS". Jewish Historical Institute. Retrieved 2020-07-20.
      </li>
      <li>
        Dorit Gani (April 10, 2018). "Who Stood with the Orphans When the Nazis Came?". The National
        Library of Israel. Retrieved 26 November 2019.
      </li>
      <li>
        Agnieszka Litwiniuk (March 29, 2012). "Stefania Wilczyńska". Sylwetki warszawskich Żydówek
        (Profiles of Warsaw Jewish women) (in Polish). Warszefroj, Centrum Kultury Jidysz (Yidish
        Centre). Retrieved 14 December 2013.
      </li>
      <li>
        "Dom Sierot. Krochmalna 92". Swedish Holocaust Memorial Association. Retrieved 27 January 2012.
      </li>
      <li>
        "Perle, Joshua". Encyclopaedia Judaica. Encyclopedia.com. Retrieved June 15, 2019.
      </li>
      <li>
        Nick Shepley (7 December 2015). Hitler, Stalin and the Destruction of Poland: Explaining
        History. Andrews UK Limited. p. 55. ISBN 978-1-78333-143-7.
      </li>
      <li>
        Jerzy Waldorff, Władysław Szpilman, The Pianist. Page 96.
      </li>
      <li>
        Mary Berg, The Diary of Mary Berg: Growing Up in the Warsaw Ghetto, Oxford: Oneworld
        Publications, 1996, pages 169-170.
      </li>
      <li>
        "The Jewish Cemetery on Okopowa Street in Warsaw (Cmentarz żydowski przy ul. Okopowej w
        Warszawie)". Cmentarium. 2007. Retrieved January 8, 2013.
      </li>
      <li>
        Mirosław Gorzelanny (November 27, 2012). "School history". Specjalny Ośrodek Szkolno –
        Wychowawczy im Janusza Korczaka w Borzęciczkach. Archived from the original on June 26, 2013.
        Retrieved January 8, 2013.
      </li>
      <li>
        "Wyrok w sprawie Korczaka – omówienie". Fundacja Nowoczesna Polska. Retrieved 2016-03-12.
      </li>
      <li>
        "Wygrany spór o datę śmierci Korczaka. Prawda pokonała "własność intelektualną"". Dziennik
        Internautów. Retrieved 2016-03-12.
      </li>
      <li>
        "Author: Janusz Korczak". Wolne Lektury. Retrieved 2016-03-12.
      </li>
      <li>
        "Janusz Korczak", Book Institute
      </li>
      <li>
        Modig, Cecilia (2009). Never Violence – Thirty Years on from Sweden's Abolition of Corporal
        Punishment (PDF). Ministry of Health and Social Affairs, Sweden; Save the Children Sweden.
        Reference No. S2009.030. p. 8.
      </li>
      <li>
        Agata Anna Lisiak (2010). Urban Cultures in (post)colonial Central Europe. Purdue University
        Press. pp. 147–. ISBN 978-1-55753-573-3.
      </li>
      <li>
        "Monument to Janusz Korczak (Warsaw)". monuments-remembrance.eu. Retrieved 2020-04-09.
      </li>
      <li>
        Rin, Svi (April 1966). "גדולי חינוך בעמנו Book Review". Jewish Social Studies. 28: 127-128.
      </li>
      <li>
        Hickling, Alfred (June 12, 2008). "?". The Guardian. London.
      </li>
      <li>
        "Chlodnagaden nr. 33 - Dit Holbæk". Dit Holbæk (in Danish). 2017-03-14. Retrieved 2017-04-09.
      </li>
      <li>
        Knapp, Bettina (1995). French Theater Since 1968. New York: Twayne Publishers. ISBN 0805782974.
      </li>
      <li>
        "Korczak (2011) | British Youth Music Theatre".
      </li>

    </ol>

  </article>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    middleware: ['wiki-routing'],
  }
</script>

<style>
</style>
