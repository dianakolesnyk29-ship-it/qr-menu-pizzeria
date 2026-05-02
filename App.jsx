import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Baby,
  Beer,
  BriefcaseBusiness,
  ChefHat,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Clock3,
  Fish,
  Flame,
  HandPlatter,
  MapPin,
  Phone,
  Pizza,
  Search,
  Sparkles,
  SunSnow,
  Utensils,
  Vegan,
  WalletCards,
} from "lucide-react";
import introLogo from "./assets/intro-logo-final.png";
import "./App.css";

const phones = [
  { label: "+39 379 2437707", href: "tel:+393792437707" },
  { label: "+39 379 2285156", href: "tel:+393792285156" },
];
const address = "Viale Istria 18/B, Conegliano";
const placeQuery = "Pizzeria Al Ponte, Viale Istria 18/B, Conegliano";
const encodedPlaceQuery = encodeURIComponent(placeQuery);
const directionsUrl = `geo:0,0?q=${encodedPlaceQuery}`;

const sections = [
  {
    id: "specialita",
    tab: "Specialita della casa",
    eyebrow: "Ricette ricche",
    title: "Specialita della casa",
    icon: Flame,
    items: [
      {
        name: "Saporita",
        desc: "Pomodoro, mozzarella, salamino, cipolla, grana e origano",
        price: "9,50",
      },
      {
        name: "Zingara",
        desc: "Pomodoro, mozzarella, peperoni, olive,salamino e origano",
        price: "9,50",
      },
      {
        name: "Contadina",
        desc: "Pomodoro, mozzarella, melanzane, salsiccia, gorgonzola e origano",
        price: "9,50",
      },
      {
        name: "La Taggiasca",
        desc: "Pomodoro, burrata, acciughe, olive taggiasche e origano",
        price: "11,00",
      },
      {
        name: "Greca",
        desc: "Pomodoro, mozzarella, olive, feta greca, frutto del cappero e origano",
        price: "10,00",
      },
      {
        name: "Rustica",
        desc: "Pomodoro, mozzarella, salamino, acciughe, cipolla di Tropea e origano",
        price: "10,00",
      },
      {
        name: "Mediterranea",
        desc: "Pomodoro, bufala, pomodorini secchi, salamino, olive taggiasche e origano",
        price: "11,00",
      },
      {
        name: "Squisita",
        desc: "Pomodoro, buffala, olive, speck e origano",
        price: "10,50",
      },
      {
        name: "Montanara",
        desc: "Pomodoro, mozzarella, salsiccia, porcini, cipolla e origano",
        price: "9,50",
      },
      {
        name: "Ariccia",
        desc: "Pomodoro, mozzarella, brie, peperoni, porchetta di Ariccia e origano",
        price: "11,00",
      },
      {
        name: "Satanica",
        desc: "Pomodoro, mozzarella, salamino, cipolla, gorgonzola, peperoncino e origano",
        price: "9,50",
      },
      {
        name: "Tentazione",
        desc: "Pomodoro, buffala DOP, speck in cottura, cipolla, pomodorini secchi e origano",
        price: "10,00",
      },

      {
        name: "Tre P",
        desc: "Pomodoro, mozzarella, porchetta di Ariccia, patatine fritte, peperoni e origano",
        price: "11,00",
      },

      {
        name: "Perissima",
        desc: "Mozzarella, speck, gorgonzola, noci, pere e origano",
        price: "10,50",
      },

      {
        name: "Sottobosco",
        desc: "Pomodoro, buffala DOP, salamino, porcini e origano",
        price: "10,00",
      },

      {
        name: "Nuvola",
        desc: "Pomodoro, mozzarella, misto funghi, patate lesse, speck e origano",
        price: "10,00",
      },

      {
        name: "Bud Spencer",
        desc: "Pomodoro, mozzarella, pancetta affumicata, cipolla, faggiole, peperoncino e origano",
        price: "10,00",
      },

      {
        name: "Istria",
        desc: "Mozzarella, prosciutto crudo, zucchine, stracchino e origano",
        price: "9,50",
      },

      {
        name: "Spianata",
        desc: "Pomodoro, bufala DOP a freddo, pomodorini secchi, olive, spianata calabra e origano",
        price: "10,00",
      },

      {
        name: "Calabrese",
        desc: "Pomodoro, burrata, spianata calabra, pomodorini secchi, cipolla e origano",
        price: "10,00",
      },

      {
        name: "Imperiale",
        desc: "Pomodoro, buffala DOP, pomodorini, cipolla, salamino, olive, pancetta affumicata, grana e origano",
        price: "11,00",
      },

      {
        name: "Pistacchio",
        desc: "Mozzarella, mortadella, burrata, granella di pistacchio e origano",
        price: "10,50",
      },

      {
        name: "Bacio",
        desc: "Pomodoro, mozzarella, stracchino, pomodorini secchi, crudo, burrata e origano",
        price: "12,00",
      },

      {
        name: "Ricotta Affumicata 1",
        desc: "Pomodoro, mozzarella, porcini, finferli, ricotta affumicata e origano",
        price: "10,50",
      },

      {
        name: "Ricotta Affumicata 2",
        desc: "Pomodoro, mozzarella, salmone affumicato, ricotta affumicata e origano",
        price: "10,50",
      },

      {
        name: "Novità Salsiccia",
        desc: "Pomodoro, mozzarella, salsiccia, stracchino, pomodorini secchi e origano",
        price: "10,50",
      },

      {
        name: "Belvedere",
        desc: "Mozzarella, pesto, porchetta di Ariccia, olive taggiasche, stracciatella e origano",
        price: "15,00",
      },
    ],
  },
  {
    id: "stagionali",
    tab: "Stagionali",
    eyebrow: "Proposte del momento",
    title: "Stagionali",
    icon: SunSnow,
    items: [
      {
        name: "Radicchio TV 1",
        desc: "Pomodoro, mozzarella, radicchio TV, pancetta affumicata, gorgonzola e origano",
        price: "10,50",
      },
      {
        name: "Radicchio TV 2",
        desc: "Pomodoro, mozzarella, radicchio TV, sopressa, stracchino e origano",
        price: "10,50",
      },
      {
        name: "Radicchio TV 3",
        desc: "Pomodoro, mozzarella, radicchio TV, salsiccia, chiodini e origano",
        price: "10,50",
      },
      {
        name: "Radicchio TV 4",
        desc: "Mozzarella, radicchio TV, finferli, sfilacci di cavallo e origano",
        price: "10,50",
      },
      {
        name: "Zucca 1",
        desc: "Crema di zucca, bufala DOP, porcini, buffala, speck e origano",
        price: "13,00",
      },
      {
        name: "Zucca 2",
        desc: "Crema di zucca, mozzarella, melanzane, salsiccia, ricotta affumicata e origano",
        price: "13,00",
      },
      {
        name: "Zucca 3",
        desc: "Crema di zucca, mozzarella, chiodini, scamorza affumicata, cipolla di Tropea e origano",
        price: "13,00",
      },
      {
        name: "Raffinata",
        desc: "Crema di asparaggi, buffala DOP, salsiccia, ricotta affumicata e origano",
        price: "13,00",
      },
      {
        name: "Stuzzicante",
        desc: "Crema di asparaggi, sopressa, porcini, grana e origano",
        price: "13,00",
      },

      {
        name: "Marzo",
        desc: "Crema di asparaggi, mozzarella, pancetta affumicata, finferli e origano",
        price: "13,00",
      },

      {
        name: "Asparagi",
        desc: "Pomodoro, mozzarella, asparagi, uovo, grana e origano",
        price: "9,90",
      },

      {
        name: "Autunno",
        desc: "Mozzarella, crema di zucca, radicchio, pancetta affumicata e origano",
        price: "9,50",
      },

      {
        name: "Trevigiana",
        desc: "Pomodoro, mozzarella, radicchio, scamorza affumicata e origano",
        price: "10,50",
      },

      {
        name: "Veneta",
        desc: "Pomodoro, mozzarella, radicchio, brie, salsiccia e origano",
        price: "10,50",
      },

      {
        name: "Sragionale",
        desc: "Pomodoro, mozzarella, radicchio, speck, gorgonzola e origano",
        price: "10,50",
      },
    ],
  },
  {
    id: "classiche",
    tab: "Classiche",
    eyebrow: "Le pizze di sempre",
    title: "Classiche",
    icon: Pizza,
    items: [
      { name: "Marinara", desc: "Pomodoro, aglio, olio e origano", price: "5,00" },
      { name: "Margherita", desc: "Pomodoro, mozzarella, basilico e origano", price: "6,00" },
      { name: "Bufala", desc: "Pomodoro, mozzarella di bufala DOP e origano", price: "8,00" },
      {
        name: "Romana",
        desc: "Pomodoro, mozzarella, capperi, acciughe e origano",
        price: "8,00",
      },
      { name: "Siciliana", desc: "Pomodoro, mozzarella, acciughe, olive, capperi e origano", price: "8,50" },
      {
        name: "Napoli",
        desc: "Pomodoro, mozzarella, salamino, acciughe e origano",
        price: "9,00",
      },
      {
        name: "Caprese",
        desc: "Pomodoro, mozzarella di bufala, pomodorini, basilico e origano",
        price: "9,00",
      },
      {
        name: "Prosciutto",
        desc: "Pomodoro, mozzarella, prosciutto cotto e origano",
        price: "7,50",
      },
      {
        name: "Prosciutto e funghi",
        desc: "Pomodoro, mozzarella, prosciutto cotto, funghi e origano",
        price: "8,50",
      },

      {
        name: "Capricciosa",
        desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi e origano",
        price: "9,00",
      },

      {
        name: "Quattro stagioni",
        desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, peperoni e origano",
        price: "9,50",
      },

      {
        name: "Diavola",
        desc: "Pomodoro, mozzarella, salamino piccante e origano",
        price: "8,00",
      },

      {
        name: "Viennese",
        desc: "Pomodoro, mozzarella, wurstel e origano",
        price: "7,50",
      },

       {
        name: "Salsiccia",
        desc: "Pomodoro, mozzarella, salsiccia e origano",
        price: "8,00",
      },

       {
        name: "Patatosa",
        desc: "Pomodoro, mozzarella, patatine fritte e origano",
        price: "7,50",
      },

       {
        name: "America",
        desc: "Pomodoro, mozzarella, wurstel, patatine fritte e origano",
        price: "8,50",
      },

       {
        name: "Parmigiana",
        desc: "Pomodoro, bufala, grana padano e origano",
        price: "8,90",
      },

       {
        name: "Boscaiola",
        desc: "Pomodoro, mozzarella, funghi misti, speck e origano",
        price: "9,90",
      },
      
       {
        name: "Pugliese",
        desc: "Pomodoro, mozzarella, olice,cipolla di Tropea, scamorza affumicata e origano",
        price: "9,50",
      },
    ],
  },
  {
    id: "bianche",
    tab: "Le bianche",
    eyebrow: "Senza pomodoro",
    title: "Le bianche",
    icon: HandPlatter,
    items: [
      { name: "Regina", desc: "Ricotta, pomodorini, mais, grana e origano", price: "8,50" },
      {
        name: "Gustosa",
        desc: "Mozzarella, salmone, cipolla, peperoni, brie e origano",
        price: "8,50",
      },
      {
        name: "Carbonara",
        desc: "Mozzarella, pancetta affumicata, uova, grana e origano",
        price: "8,50",
      },
      {
        name: "Autunno",
        desc: "Mozzarella, crema di zucca, radicchio, pancetta affumicata e origano",
        price: "8,90",
      },
      {
        name: "Pepata",
        desc: "Mozzarella, pancetta affumicata, gorgonzola, cipolla, grana, pepe verde e origano",
        price: "8,90",
      },
      { name: "Titti", desc: "Mozzarella, prosciutto cotto, mais e origano", price: "8,00" },
      { name: "Vogliosa", desc: "Mozzarella, patate lesse, salsiccia e origano", price: "8,50" },
    ],
  },
  {
    id: "calzoni",
    tab: "Calzoni",
    eyebrow: "Ripieni e dorati",
    title: "Calzoni",
    icon: ChefHat,
    items: [
      {
        name: "Calzone Classico",
        desc: "Pomodoro, mozzarella, champignon, prosciutto cotto e origano",
        price: "8,90",
      },
      {
        name: "Calzone Vegetariano",
        desc: "Pomodoro, mozzarella, misto verdure e origano",
        price: "8,90",
      },
      {
        name: "Calzone Quattro Formaggi",
        desc: "Pomodoro, mozzarella, formaggi misti e origano",
        price: "8,50",
      },
    ],
  },

  {
    id: "verdure",
    tab: "Le verdure",
    eyebrow: "Un mondo di sapori vegetali",
    title: "Le verdure",
    icon: Vegan,
    items: [
      { name: "Verdure", desc: "Pomodoro, mozzarella, verdure miste e origano", price: "9,50" },
      {
        name: "Italy",
        desc: "Pomodoro, mozzarella, rucola, pomodorini, scaglie di grana e origano",
        price: "9,00",
      },
      {
        name: "Fiorentina",
        desc: "Pomodoro, mozzarella, rucola, pomodorini, scaglie di grana, sfilacci di cavallo e origano",
        price: "9,90",
      },
      {
        name: "Ricotta e spinaci",
        desc: "Pomodoro, mozzarella, ricotta, spinaci e origano",
        price: "8,50",
      },
      {
        name: "Delicata",
        desc: "Pomodoro, mozzarella, brie, mais, rucola e origano",
        price: "8,90",
      },
    ],
  },

  {
    id: "formaggi",
    tab: "Formaggi",
    eyebrow: "Tutti i gusti dei formaggi, per veri amanti del sapore",
    title: "Formaggi",
    icon: Sparkles,
    items: [
      { name: "Quattro formaggi", desc: "Pomodoro, mozzarella, formaggi misti e origano", price: "9,00" },
      {
        name: "Intrigante",
        desc: "Pomodoro, mozzarella, prosciutto crudo, straciatella e origano",
        price: "9,50",
      },
      {
        name: "Philadelphia",
        desc: "Pomodoro, mozzarella, philadelphia, rucola, pomodorini e origano",
        price: "9,50",
      },

    ],
  },

  {
    id: "affettati",
    tab: "Affettati",
    eyebrow: "Le pizze con affettati, per chi ama i sapori decisi e ricchi di carattere",
    title: "Affettati",
    icon: Utensils,
    items: [
      {
        name: "Crudo",
        desc: "Pomodoro, mozzarella, prosciutto crudo e origano",
        price: "9,00",
      },
      {
        name: "Porchetta",
        desc: "Pomodoro, mozzarella, porchetta di Ariccia e origano",
        price: "9,50",
      },
      {
        name: "Speck e brie e noci",
        desc: "Pomodoro, mozzarella, speck, brie, noci e origano",
        price: "9,00",
      },
      {
        name: "Bresaola rucola e grana",
        desc: "Pomodoro, mozzarella, pancetta affumicata, scamorza affumicata e origano",
        price: "9,50",
      },
      {
        name: "Montebello",
        desc: "Pomodoro, mozzarella, chiodini, sopressa, grana e origano",
        price: "9,50",
      },
      {
        name: "Affumicata",
        desc: "Pomodoro, mozzarella, pancetta affumicata, scamorza affumicata e origano",
        price: "9,00",
      },
      {
        name: "Tirolese",
        desc: "Pomodoro, mozzarella, speck, gorgonzola e origano",
        price: "9,50",
      },
      {
        name: "Estiva",
        desc: "Pomodoro, mozzarella, stracchino, pomodorini, crudo e origano",
        price: "9,50",
      },
    ],
  },
  {
    id: "Pesce",
    tab: "Pesce",
    eyebrow: "Amanti del pesce",
    title: "Pesce",
    icon: Fish,
    items: [
      {
        name: "Tonno",
        desc: "Pomodoro, mozzarella, tonno e origano",
        price: "8,00",
      },
      {
        name: "Tonno e cipolla",
        desc: "Pomodoro, mozzarella, tonno, cipolla di Tropea e origano",
        price: "8,50",
      },
      {
        name: "Mare",
        desc: "Pomodoro, mozzarella, frutti di mare e origano",
        price: "11,00",
      },
      {
        name: "Norvegese",
        desc: "Pomodoro, mozzarella, salmone affumicato, philadelphia e origano",
        price: "11,00",
      },
      {
        name: "Azzurra",
        desc: "Pomodoro, mozzarella, salmone affumicato, zucchine e origano",
        price: "10,50",
      }
    ],
  },
  {
    id: "topolino",
    tab: "Topolino baby",
    eyebrow: "Per i piccoli ospiti",
    title: "Topolino baby",
    icon: Baby,
    items: [
      { name: "Patatosa", desc: "Pomodoro, mozzarella, patate fritte e origano", price: "7,00" },
      { name: "Wurstel", desc: "Pomodoro, mozzarella, wurstel e origano", price: "7,00" },
      {
        name: "Prosciutto",
        desc: "Pomodoro, mozzarella, prosciutto cotto e origano",
        price: "7,00",
      },
      { name: "Mais", desc: "Pomodoro, mozzarella, mais e origano", price: "7,00" },
    ],
  },
  {
    id: "variazioni",
    tab: "Variazioni",
    eyebrow: "Extra e personalizzazioni",
    title: "Variazioni",
    icon: WalletCards,
    items: [
      { name: "Pizza battuta", desc: "Base piu sottile (0,40)", price: "3,00" },
      { name: "Pasta doppia", desc: "Base con doppio impasto", price: "1,50" },
      { name: "Meta pizza doppia pasta", desc: "Costa il doppio della pizza", price: "1,50" },
      { name: "Aggiunta ingredienti", desc: "Ingredienti classici", price: "2,00" },
      { name: "Aggiunta ingredienti speciali", desc: "Affettati, burrata o salmone", price: "3,00" },
      { name: "Patate fritte", desc: "Porzione", price: "3,00" },
      { name: "Patate fritte maxi", desc: "Porzione grande", price: "4,00" },
       { name: "Patate fritte cono", desc: "Porzione grande", price: "4,00" },
    ],
  },
  {
    id: "bibite",
    tab: "Bibite",
    eyebrow: "Bevande principali",
    title: "Bibite",
    icon: Beer,
    items: [
      { name: "Acqua", desc: "Naturale o frizzante 0,50 l", price: "1,00" },
      { name: "Bibite in lattina", desc: "The pesca o limone", price: "2,50" },
      { name: "Bibite in bottiglia", desc: "Coca-Cola, Fanta", price: "3,50" },
      { name: "Birra", desc: "Bottiglia 0,33 l", price: "3,00" },
      { name: "Birra grande", desc: "Bottiglia 0,66 l", price: "4,00" },
    ],
  },
];

function clean(value) {
  return value
    .toLocaleLowerCase("it-IT")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function App() {
  const [page, setPage] = useState(() =>
    typeof window !== "undefined" && window.location.search.includes("menu") ? "menu" : "intro",
  );
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState("specialita");

  useEffect(() => {
    if (page !== "intro") {
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const timer = window.setTimeout(() => setPage("home"), 2600);
    return () => window.clearTimeout(timer);
  }, [page]);

  const filteredSections = useMemo(() => {
    const needle = clean(query.trim());

    if (!needle) {
      return sections;
    }

    return sections
      .map((section) => {
        const matchingItems = section.items.filter((item) =>
          clean(`${section.title} ${section.eyebrow} ${item.name} ${item.desc} ${item.price}`).includes(
            needle,
          ),
        );

        return { ...section, items: matchingItems };
      })
      .filter((section) => section.items.length > 0);
  }, [query]);

  if (page === "intro") {
    return <IntroScreen onSkip={() => setPage("home")} />;
  }

  if (page === "home") {
    return <HomeScreen onOpenMenu={() => setPage("menu")} />;
  }

  return (
    <MenuScreen
      filteredSections={filteredSections}
      openId={query ? "all" : openId}
      query={query}
      setOpenId={setOpenId}
      setPage={setPage}
      setQuery={setQuery}
    />
  );
}

function IntroScreen({ onSkip }) {
  return (
    <main className="intro-screen" aria-label="Pizzeria Al Ponte">
      <button className="intro-logo-button" type="button" onClick={onSkip} aria-label="Vai alla home">
        <img src={introLogo} alt="Pizzeria Al Ponte - Qualita e pasta" />
      </button>
    </main>
  );
}

function HomeScreen({ onOpenMenu }) {
  return (
    <main className="home-screen">
      {/*<div className="wood-fire-badge">
        <Flame size={18} aria-hidden="true" />
        Forno a legna
      </div>*/}

      <section className="home-hero-card" aria-label="Menu digitale Pizzeria Al Ponte">
        <p>Menu digitale</p>
        <h1>
          <span>Pizzeria</span>
          <span>Al Ponte</span>
        </h1>
        <span>Impasti lievitati, cottura tradizionale e sapori di casa.</span>
      </section>

      <section className="welcome-panel" aria-label="Benvenuto">
        <div className="welcome-head">
          <div>
            <p>Scansiona, scegli, ordina</p>
            <h2>Benvenuto</h2>
          </div>
          <span aria-hidden="true">
            <Flame size={25} />
          </span>
        </div>

        <button className="discover-button" type="button" onClick={onOpenMenu}>
          <Utensils size={24} aria-hidden="true" />
          Scopri il menu
        </button>

        <div className="home-feature-grid">
          <article>
            <Flame size={20} aria-hidden="true" />
            <strong>Forno a legna</strong>
            <p>Cottura tradizionale, impasti lievitati e profumo autentico.</p>
          </article>
          <article>
            <BriefcaseBusiness size={20} aria-hidden="true" />
            <strong>Asporto</strong>
            <p>Ordina chiamandoci e ritira direttamente in pizzeria o possibilta di consumazione in loco.</p>
          </article>
          <article>
            <Clock3 size={20} aria-hidden="true" />
            <strong>Martedi chiuso</strong>
            <p>Da mercoledi a lunedi dalle 18:00 alle 22:00.</p>
          </article>
        </div>

        <div className="home-contact-group home-directions-group" aria-label="Indicazioni stradali">
          <a className="home-contact" href={directionsUrl} aria-label="Apri indicazioni per Pizzeria Al Ponte">
            <MapPin size={17} aria-hidden="true" />
            {address}
          </a>
        </div>

        <div className="home-contact-group" aria-label="Numeri di telefono">
          {phones.map((phone) => (
            <a className="home-contact" href={phone.href} key={phone.href} aria-label={`Chiama ${phone.label}`}>
              <Phone size={17} aria-hidden="true" />
              {phone.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function MenuScreen({ filteredSections, openId, query, setOpenId, setPage, setQuery }) {
  const [scrollTargetId, setScrollTargetId] = useState("");
  const [categoryScroll, setCategoryScroll] = useState({ canGoBack: false, canGoForward: false });
  const categoryTabsRef = useRef(null);

  useEffect(() => {
    if (!scrollTargetId) {
      return undefined;
    }

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setScrollTargetId("");
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [openId, scrollTargetId]);

  useEffect(() => {
    const tabs = categoryTabsRef.current;

    if (!tabs) {
      return undefined;
    }

    const updateCategoryScroll = () => {
      const maxScroll = Math.max(0, tabs.scrollWidth - tabs.clientWidth);
      const nextState = {
        canGoBack: tabs.scrollLeft > 8,
        canGoForward: tabs.scrollLeft < maxScroll - 8,
      };

      setCategoryScroll((currentState) =>
        currentState.canGoBack === nextState.canGoBack && currentState.canGoForward === nextState.canGoForward
          ? currentState
          : nextState,
      );
    };

    const frame = window.requestAnimationFrame(updateCategoryScroll);
    tabs.addEventListener("scroll", updateCategoryScroll, { passive: true });
    window.addEventListener("resize", updateCategoryScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      tabs.removeEventListener("scroll", updateCategoryScroll);
      window.removeEventListener("resize", updateCategoryScroll);
    };
  }, []);

  const openSection = (sectionId) => {
    setQuery("");
    setOpenId(sectionId);
    setScrollTargetId(sectionId);
  };

  const moveCategoryTabs = (direction) => {
    const tabs = categoryTabsRef.current;

    if (!tabs) {
      return;
    }

    const maxScroll = Math.max(0, tabs.scrollWidth - tabs.clientWidth);
    const nextScroll = Math.min(
      maxScroll,
      Math.max(0, tabs.scrollLeft + direction * Math.max(210, tabs.clientWidth * 0.72)),
    );

    setCategoryScroll({
      canGoBack: nextScroll > 8,
      canGoForward: nextScroll < maxScroll - 8,
    });
    tabs.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  const toggleSection = (sectionId, isOpen) => {
    if (isOpen) {
      setOpenId("");
      return;
    }

    setOpenId(sectionId);
    setScrollTargetId(sectionId);
  };

  return (
    <main className="menu-screen">
      <header className="topbar">
        <button type="button" aria-label="Torna alla home" onClick={() => setPage("home")}>
          <ArrowLeft size={29} aria-hidden="true" />
        </button>
        <h1>Al Ponte</h1>
      </header>

      <section className="menu-hero" aria-label="Cottura tradizionale nel forno a legna">
        <div>
          <p>Qualita & pasta</p>
          <h2>Cottura tradizionale nel forno a legna</h2>
          <span>Classiche, specialita della casa, calzoni, bibite e variazioni.</span>
        </div>
      </section>

      <section className="menu-controls" aria-label="Cerca e filtra">
        <label className="menu-search">
          <Search size={24} aria-hidden="true" />
          <span className="sr-only">Cerca pizza o ingrediente</span>
          <input
            type="search"
            placeholder="Cerca pizza o ingrediente..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div
          className={`category-tabs-shell ${categoryScroll.canGoBack ? "can-scroll-back" : ""} ${
            categoryScroll.canGoForward ? "can-scroll-forward" : ""
          }`}
        >
          {categoryScroll.canGoBack && (
            <button
              className="category-tabs-nav category-tabs-nav-prev"
              type="button"
              aria-label="Torna alle categorie precedenti"
              onClick={() => moveCategoryTabs(-1)}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
          )}

          <div className="category-tabs" ref={categoryTabsRef} role="list" aria-label="Categorie menu">
            {sections.map((section) => (
              <button
                type="button"
                key={section.id}
                className={openId === section.id ? "active" : ""}
                onClick={() => openSection(section.id)}
              >
                {section.tab}
              </button>
            ))}
          </div>

          {categoryScroll.canGoForward && (
            <button
              className="category-tabs-nav category-tabs-nav-next"
              type="button"
              aria-label="Mostra altre categorie"
              onClick={() => moveCategoryTabs(1)}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          )}
        </div>
      </section>

      <section className="accordion-stack" aria-label="Menu pizze">
        {filteredSections.length === 0 ? (
          <div className="no-results">Nessuna pizza trovata.</div>
        ) : (
          filteredSections.map((section) => (
            <MenuCategory
              key={section.id}
              section={section}
              open={openId === "all" || openId === section.id}
              onToggle={toggleSection}
            />
          ))
        )}
      </section>

      <footer className="orders-card">
        <h2>Ordini e allergeni</h2>
        <p>Orari: Da mercoledi a lunedi dalle 18:00 alle 22:00. Martedi chiuso.</p>
        <div className="orders-actions" aria-label="Indicazioni e numeri per ordinare">
          <a className="orders-directions" href={directionsUrl} aria-label="Apri indicazioni per Pizzeria Al Ponte">
            <MapPin size={18} aria-hidden="true" />
            {address}
          </a>
          <div className="phone-pills">
            {phones.map((phone) => (
              <a href={phone.href} key={phone.href} aria-label={`Chiama ${phone.label}`}>
                <Phone size={17} aria-hidden="true" />
                {phone.label}
              </a>
            ))}
          </div>
        </div>
        <p>Il cliente e tenuto ad avvisare il personale di eventuali allergie o intolleranze alimentari.</p>
      </footer>
    </main>
  );
}

function MenuCategory({ section, open, onToggle }) {
  const Icon = section.icon;

  return (
    <article className={`menu-category ${open ? "is-open" : ""}`} id={section.id}>
      <button
        className="category-header"
        type="button"
        aria-expanded={open}
        aria-controls={`${section.id}-panel`}
        onClick={() => onToggle(section.id, open)}
      >
        <span className="category-icon-wrap" aria-hidden="true">
          <Icon className="category-icon" size={35} strokeWidth={1.85} />
        </span>
        <span>
          <small>{section.eyebrow}</small>
          <strong>{section.title}</strong>
        </span>
        <ChevronDown className="category-chevron" size={23} aria-hidden="true" />
      </button>

      {open && (
        <div className="category-panel" id={`${section.id}-panel`}>
          {section.items.map((item) => (
            <article className="pizza-row" key={`${section.id}-${item.name}`}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <strong>€ {item.price}</strong>
            </article>
          ))}
        </div>
      )}
    </article>
  );
}

export default App;
