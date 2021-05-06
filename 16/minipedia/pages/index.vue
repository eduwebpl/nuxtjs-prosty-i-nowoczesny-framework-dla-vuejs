<template>
  <article class="content">
    {{ $store.state.exampleState }}
    <h1>
      Janusz Korczak
    </h1>

    <span v-tooltip="'Please support the original source of the data'" class="notice">From Wikipedia, the free encyclopedia</span>
    
    
    <FullInfoBox :content="fullInfo" />
    
    <p>Janusz Korczak, the pen name of Henryk Goldszmit (22 July 1878 or 1879 – 7 August 1942), was a
      Polish Jewish educator, children's author and pedagogue known as Pan Doktor ("Mr. Doctor") or Stary
      Doktor ("Old Doctor"). After spending many years working as a principal of an orphanage in Warsaw, he
      refused sanctuary repeatedly and stayed with his orphans when the entire population of the institution
      was sent from the Ghetto to the Treblinka extermination camp by the Nazis, during the Grossaktion
      Warschau of 1942.</p>

    <TableOfContents :content="content" />
    
    <ContentSection 
     v-for="section in content" 
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
 import { mapMutations } from 'vuex';

  export default {
    layout: 'default',
    methods: {
      ...mapMutations({
       rename: 'rename'
      }),
    },
    mounted() {
     this.rename('modified state');
    },
    computed: {
      fullInfo() {
        return {
          "Profile photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Janusz_Korczak.PNG/220px-Janusz_Korczak.PNG",
          "Born ": "Henryk Goldszmit 22 July 1878",
          "Died": `c. 7 August 1942 (aged 64)
        Treblinka extermination camp, German-occupied Poland`,
        "Occupation": [`Children's author`, `humanitarian`, `pediatrician`, `child pedagogue and defender of children's rights`]
        };
      },
      content() {
        return [{
          title: 'Biography',
          content: [
            `Korczak was born in Warsaw in 1878. He was unsure of his birth date, which he attributed to his
    father's
    failure to promptly acquire a birth certificate for him. His parents were Józef Goldszmit, a
    respected lawyer from a family of proponents of the haskalah, and Cecylia née Gębicka, daughter
    of a
    prominent Kalisz family. Born to a Jewish family, he was an agnostic in his later life who did
    not
    believe in forcing religion on children. His father fell ill around 1890 and was admitted
    to a
    mental hospital, where he died six years later on 25 April 1896. Spacious apartments were
    given
    up on Miodowa street, then Świętojerska. As his family's financial situation worsened, Henryk,
    while
    still attending the gymnasium (the current 8th Lycée in Warsaw began to work as a tutor for
    other
    pupils. In 1896 he debuted on the literary scene with a satirical text on raising children,
    Węzeł
    gordyjski (The Gordian Knot).`,
            `In 1898, he used Janusz Korczak as a pen name in the Ignacy Jan Paderewski Literary Contest. The
    name
    originated from the book Janasz Korczak and the Pretty Swordsweeperlady (O Janaszu Korczaku i
    pięknej
    Miecznikównie) by Józef Ignacy Kraszewski. In the 1890s he studied in the Flying University.
    During
    the years 1898–1904 Korczak studied medicine at the University of Warsaw and also wrote for
    several
    Polish language newspapers. After graduation, he became a pediatrician. In 1905−1912 Korczak worked
    at
    Bersohns and Baumans Children's Hospital in Warsaw. During the Russo-Japanese War, in 1905–06 he
    served
    as a military doctor. Meanwhile, his book Child of the Drawing Room (Dziecko salonu) gained him some
    literary recognition.`,
            `Korczak's orphanage is still in operation at 6 Jaktorowska Street
    In 1907–08, Korczak went to study in Berlin. While working for the Orphans' Society in 1909, he met
    Stefania Wilczyńska, his future closest associate. In 1911–1912, he became a director of Dom Sierot
    in
    Warsaw, an orphanage of his own design for Jewish children. He hired Wilczyńska as his
    assistant.
    There he formed a kind-of-a-republic for children with its own small parliament, court, and a
    newspaper.
    He reduced his other duties as a doctor. Some of his descriptions of the summer camp for Jewish
    children
    in this period and subsequently, were later published in his Fragmenty Utworów and have been
    translated
    into English.`,
            `During World War I, in 1914 Korczak became a military doctor with the rank of lieutenant. He served
    again as a military doctor in the Polish Army with the rank of major during the Polish-Soviet War,
    but
    after a brief stint in Łódź was assigned to Warsaw. After the wars, he continued his practice in
    Warsaw.`
          ]
        },
        {
          title: 'Childhood',
          content: ['Hello world']
         
        },
        {
          title: 'Writings',
          content: ['Hello world2']
         
        }
        ]
      }
    }
  }

</script>

<style>
</style>
