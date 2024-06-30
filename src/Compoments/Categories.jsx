import { useState } from "react";
import iconiques from "../assets/categories/Iconiques.webp";
import piscine from "../assets/categories/piscine.jpeg";
import bordemer from "../assets/categories/BordDeMer.jpeg";
import avecvue from "../assets/categories/avecVue.jpeg";
import nouveau from "../assets/categories/nouveautes.jpeg";
import camping from "../assets/categories/Camping.jpeg";
import bordelac from "../assets/categories/bordDeLac.jpeg";
import chambres from "../assets/categories/Chambres.jpeg";
import tendance from "../assets/categories/Tendance.jpeg";
import sejourdec from "../assets/categories/sejoursDeco.jpeg";
import cabanes from "../assets/categories/cabanes.jpeg";
import chambrehote from "../assets/categories/chambresDHotes.jpeg";
import iles from "../assets/categories/iles.jpeg";
import campagne from "../assets/categories/campagne.jpeg";
import luxe from "../assets/categories/luxe.jpeg";
import villeembl from "../assets/categories/villesEmblematique.jpeg";
import souslestrop from "../assets/categories/sousLesTropique.jpeg";
import tinyh from "../assets/categories/tinyHouse.jpeg";
import jeux from "../assets/categories/espaceDejeux.jpeg";
import damm from "../assets/categories/dammusi.jpeg";
import grange from "../assets/categories/granges.jpeg";
import moulin from "../assets/categories/moulinAVent.jpeg";
import casapa from "../assets/categories/casaParticulares.jpeg";
import wow from "../assets/categories/wow!.jpeg";
import golf from "../assets/categories/golf.jpeg";
import toit from "../assets/categories/toitDuMonde.jpeg";
import bateau from "../assets/categories/bateaux.jpeg";
import artique from "../assets/categories/artique.jpeg";
import patrimoine from "../assets/categories/patrimoine.jpeg";
import dome from "../assets/categories/dome.jpeg";
import parcnat from "../assets/categories/parcNationaux.jpeg";
import chateaux from "../assets/categories/chateaux.jpeg";
import caravane from "../assets/categories/caravane.jpeg";
import maisontrog from "../assets/categories/maisonTroglodytes.jpeg";
import design from "../assets/categories/diesign.jpeg";
import surf from "../assets/categories/surf.jpeg";
import vigne from "../assets/categories/vignobles.jpeg";
import maisonorg from "../assets/categories/maisonOrganique.jpeg";
import ferme from "../assets/categories/fermes.jpeg";
import grandede from "../assets/categories/grandeDemeuers.jpeg";
import cuisine from "../assets/categories/cuisineEauipe.jpeg";
import ski from "../assets/categories/ski.jpeg";
import han from "../assets/categories/hanoks.jpeg";
import chalettipi from "../assets/categories/chaletTipi.jpeg";
import piano from "../assets/categories/pianoAQueue.jpeg";
import minsus from "../assets/categories/minsus.jpeg";
import maisoncyc from "../assets/categories/maisonCycladiaues.jpeg";
import cabaneberg from "../assets/categories/cabaneDeBerger.jpeg";
import cabaneperch from "../assets/categories/cabanePerchees.jpeg";
import deseert from "../assets/categories/desert.jpeg";
import yourt from "../assets/categories/yourtes.jpeg";
import ryo from "../assets/categories/roykans.jpeg";
import tour from "../assets/categories/tours.jpeg";
import logadapt from "../assets/categories/logementAdabtes.jpeg";
import piedpist from "../assets/categories/auPiedDesPistes.jpeg";
import sureau from "../assets/categories/surLEAU.jpeg";
import conteneur from "../assets/categories/conteneursMaritimes.jpeg";
import artcrea from "../assets/categories/artEtCreativite.jpeg";
import riad from "../assets/categories/riads.jpeg";
import trulli from "../assets/categories/trulli.jpeg";
import plage from "../assets/categories/plage.jpeg";
import lac from "../assets/categories/lacs.jpeg";
import filter from "../assets/filter.png";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ScrollDirection = {
  LEFT: "left",
  RIGHT: "right",
};

function Categories() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const categoriesList = [
    { name: "Iconiques", icon: <img src={iconiques} alt="Iconiques" /> },
    { name: "Piscines", icon: <img src={piscine} alt="Piscines" /> },
    { name: "Bord de Mer", icon: <img src={bordemer} alt="Bord de mer" /> },
    { name: "Avec Vue", icon: <img src={avecvue} alt="Avec Vue" /> },
    { name: "Nouveautés", icon: <img src={nouveau} alt="Nouveautés" /> },
    { name: "Camping", icon: <img src={camping} alt="Camping" /> },
    { name: "Bord de Lac", icon: <img src={bordelac} alt="Bord de lac" /> },
    { name: "Chambres", icon: <img src={chambres} alt="Chambres" /> },
    { name: "Tendance", icon: <img src={tendance} alt="Tendance" /> },
    {
      name: "Séjours déconnectés",
      icon: <img src={sejourdec} alt="Séjours déconnectés" />,
    },
    { name: "Cabanes", icon: <img src={cabanes} alt="Cabanes" /> },
    {
      name: "Chambre d'hôtes",
      icon: <img src={chambrehote} alt="Chambre d'hôtes" />,
    },
    { name: "Îles", icon: <img src={iles} alt="Îles" /> },
    { name: "Campagne", icon: <img src={campagne} alt="Campagne" /> },
    { name: "Luxe", icon: <img src={luxe} alt="Luxe" /> },
    {
      name: "Villes emblématiques",
      icon: <img src={villeembl} alt="Villes emblématiques" />,
    },
    {
      name: "Sous les Tropiques",
      icon: <img src={souslestrop} alt="Sous les Tropiques" />,
    },
    { name: "Tiny Houses", icon: <img src={tinyh} alt="Tiny House" /> },
    { name: "Espaces de jeu", icon: <img src={jeux} alt="Espace de jeu" /> },
    { name: "Dammusi", icon: <img src={damm} alt="Dammusi" /> },
    { name: "Granges", icon: <img src={grange} alt="Granges" /> },
    { name: "Moulins à vent", icon: <img src={moulin} alt="Moulins à vent" /> },
    {
      name: "Casa particulares",
      icon: <img src={casapa} alt="Casa particulares" />,
    },
    { name: "Wow !", icon: <img src={wow} alt="Wow" /> },
    { name: "Golf", icon: <img src={golf} alt="Golf" /> },
    { name: "Toit du monde", icon: <img src={toit} alt="Toit du monde" /> },
    { name: "Bateaux", icon: <img src={bateau} alt="Bateaux" /> },
    { name: "Artique", icon: <img src={artique} alt="Artique" /> },
    { name: "Patrimoine", icon: <img src={patrimoine} alt="Patrimoine" /> },
    { name: "Dômes", icon: <img src={dome} alt="Domes" /> },
    {
      name: "Parcs nationaux",
      icon: <img src={parcnat} alt="Parcs nationaux" />,
    },
    { name: "Châteaux", icon: <img src={chateaux} alt="Châteaux" /> },
    { name: "Caravanes", icon: <img src={caravane} alt="Caravanes" /> },
    { name: "Design", icon: <img src={design} alt="Design" /> },
    {
      name: "Maison troglodytes",
      icon: <img src={maisontrog} alt="Maison troglodytes" />,
    },
    { name: "Surf", icon: <img src={surf} alt="Surf" /> },
    { name: "Vignobles", icon: <img src={vigne} alt="Vignobles" /> },
    {
      name: "Grande demeuers",
      icon: <img src={grandede} alt="Grande demeuers" />,
    },
    {
      name: "Maisons organiques",
      icon: <img src={maisonorg} alt="Maisons organiques" />,
    },
    { name: "Fermes", icon: <img src={ferme} alt="Fermes" /> },
    {
      name: "Cuisines éauipées",
      icon: <img src={cuisine} alt="Cuisines éauipées" />,
    },
    { name: "Ski", icon: <img src={ski} alt="Ski" /> },
    { name: "Chalets tipi", icon: <img src={chalettipi} alt="Chalets tipi" /> },
    { name: "Hanoks", icon: <img src={han} alt="Hanoks" /> },
    {
      name: "Maison cycladiques",
      icon: <img src={maisoncyc} alt="Maison cycladiques" />,
    },
    { name: "Minsus", icon: <img src={minsus} alt="Minsus" /> },
    {
      name: "Pianos à queue",
      icon: <img src={piano} alt="BPianos à queue'" />,
    },
    {
      name: "Cabanes de berger",
      icon: <img src={cabaneberg} alt="Cabanes de berger" />,
    },
    {
      name: "Cabanes perchées",
      icon: <img src={cabaneperch} alt="Cabanes perchées" />,
    },
    { name: "Ryokans", icon: <img src={ryo} alt="Ryokans" /> },
    { name: "Yourtes", icon: <img src={yourt} alt="Yourtes" /> },
    { name: "Tours", icon: <img src={tour} alt="Tours" /> },
    { name: "Désert", icon: <img src={deseert} alt="Désert" /> },
    {
      name: "Au pied des pistes",
      icon: <img src={piedpist} alt="Au pied des pistes" />,
    },
    {
      name: "Logements adaptés",
      icon: <img src={logadapt} alt="Logements adaptés" />,
    },
    { name: "Sur l'eau", icon: <img src={sureau} alt="Sur l'eau" /> },
    {
      name: "Conteneurs maritimes",
      icon: <img src={conteneur} alt="Conteneurs maritimes" />,
    },
    {
      name: "Art et créativité",
      icon: <img src={artcrea} alt="Art et créativité" />,
    },
    { name: "Riad", icon: <img src={riad} alt="Riad" /> },
    { name: "Trulli", icon: <img src={trulli} alt="Trulli" /> },
    { name: "Plages", icon: <img src={plage} alt="Plages" /> },
    { name: "Lacs", icon: <img src={lac} alt="Lacs" /> },
  ];

  const groupWidth = 6 * 250;
  const containerWidth = 400;

  const handleScroll = (direction) => {
    const maxScrollPosition = categoriesList.length * 90 - containerWidth;
    console.log("categoriesList", categoriesList);
    if (direction === ScrollDirection.LEFT) {
      const newScrollPosition = Math.max(scrollPosition - groupWidth, 0);
      setScrollPosition(newScrollPosition);
    } else if (direction === ScrollDirection.RIGHT) {
      const newScrollPosition = Math.min(
        scrollPosition + groupWidth,
        maxScrollPosition
      );
      console.log("scrol poss", scrollPosition + groupWidth);
      console.log("maxScrollPosition", maxScrollPosition);

      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="relative pt-6 px-20 flex items-center gap-3">
      {scrollPosition > 0 && (
        <button
          onClick={() => handleScroll(ScrollDirection.LEFT)}
          className="p-1 bg-white rounded-full border border-black z-10 font-bold flex items-center justify-center text-sm"
        >
          <RiArrowLeftSLine />
        </button>
      )}
      <div className="flex items-center  overflow-hidden">
        <div
          className="flex transition-all	"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <div className="flex items-center">
            {categoriesList.map((category, index) => (
              <div key={index} className="w-[106px] flex-shrink-0">
                <div className="flex flex-col items-center cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-gray-700 pb-2 ">
                  <span className="w-6 h-auto">{category.icon}</span>
                  <span className="mt-1 text-[10px] font-sans text-gray-700">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {scrollPosition < categoriesList.length * 200 - containerWidth && (
       <button
          onClick={() => handleScroll(ScrollDirection.RIGHT)}
          className="p-1 bg-white rounded-full border border-black z-10 font-bold flex items-center justify-center text-sm "
          >
          <RiArrowRightSLine />
        </button>
          
      )}
      <button className="border border-black flex items-center gap-1 p-2 rounded-md cursor-pointer h-18 w-1/4">
        <img src={filter} className="h-5 w-5" alt="" />
        <span className="text-sm">Filtres</span>
      </button>
    </div>
  );
}

export default Categories;
