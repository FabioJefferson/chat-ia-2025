import React from "react";
// Icônes réutilisées
import { GiHamburgerMenu } from "react-icons/gi"; // Menu (☰)
import { IoArrowUpCircleOutline, IoSend } from "react-icons/io5"; // Uploader, Envoyer
import { BsPencilSquare, BsGlobe2 } from "react-icons/bs"; // Éditer (crayon), Globe (Parcouru)
import { RiMoreFill } from "react-icons/ri"; // Trois points
import { HiOutlineSearch } from "react-icons/hi"; // Loupe (recherche)
import { RiGpsLine } from "react-icons/ri"; // Grok/DeepSearch logo
import { LuMic } from "react-icons/lu"; // Microphone
import { MdOutlineKeyboardArrowDown } from "react-icons/md"; // Flèche bas
import CodeSnippetMobile from "./CodeSnippet-mobile";
import CodeSnippetWithHLJS from "./CodeSnippetWithHLJS";
import ChartDisplay from "./ChartDisplay";
import ImageGalleryMobile from "./ImageGallery-mobile";
import ImageModal from "./ImageModal"
import UserMessageBubble from "./UserMessageBubble";
import AITableMessage from "./AITableMessage";
import QuoteBlock from "./QuoteBlock";
import ChatReactionButtons from "./ChatReactionButtons";


const ChatConversationMobile = () => {

  // Exemple de données pour le tableau
  const madagascarData = [
    {
      aspect: 'Sécurité',
      situation: 'Couvre-feu en vigueur à Antananarivo ; tensions persistantes',
      consequence: 'Risque d\'escalade ; abris sur place recommandés',
    },
    {
      aspect: 'Économie',
      situation: 'Pauvreté extrême (75 % sous le seuil) ; dépendance à Jirama',
      consequence: 'Aggravation des pénuries ; impact sur le tourisme',
    },
    {
      aspect: 'Politique',
      situation: 'Gouvernement dissous ; nouveau cabinet en formation',
      consequence: 'Demandes de démission du président ; rôle clé de la jeunesse',
    },
    {
      aspect: 'International',
      situation: 'Suivi par l\'ONU et médias mondiaux',
      consequence: 'Alertes voyages ; possible ingérence diplomatique',
    },
  ];
  const exampleCode = `
       import React from "react";
       import { BsGoogle } from "react-icons/bs"; // Vous devrez installer react-icons
       import { FaApple } from "react-icons/fa"; // Vous devrez installer react-icons
       
       const Login = () => { // ce login est pour le design sur PC
         var myLogo = "./src/assets/ioasis-logo.png";
         myLogo = null;
       
         return (
           <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white w-full">
             <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
               {/* Partie gauche : le formulaire de connexion */}
               <div className="w-1/2 p-10 flex flex-col justify-center items-center">
                 <h2 className="text-2xl font-bold mb-8">Log into your account</h2>
                 <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200">
                   Login with X
                 </button>
                 <div className="flex items-center w-3/4 mb-4">
                   <hr className="flex-grow border-gray-600" />
                   <span className="mx-4 text-gray-500">or</span>
                   <hr className="flex-grow border-gray-600" />
                 </div>
                 <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600">
                   <BsGoogle className="mr-2" /> Login with Google
                 </button>
                 <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600">
                   <FaApple className="mr-2" /> Login with Apple
                 </button>
                 <p className="text-sm mt-4">
                   Don't have an account?{" "}
                   <span className="text-blue-400 cursor-pointer">Sign up</span>
                 </p>
               </div>
       
               {/* Partie droite : l'image ou le logo */}
               <div className="w-1/2 bg-gray-900 rounded-r-lg">
                 <div className="flex items-center justify-center h-full">
                   {myLogo != null ? (
                     <img src={myLogo} alt="logo I-oasis" />
                   ) : (
                     <span className="text-gray-600 text-4xl font-bold">
                       Your Logo Here
                     </span>
                   )}
                 </div>
               </div>
             </div>
           </div>
         );
       };
       
       export default Login;
       ";`;


  // 1 - 2. Bar et Line Data
  const Data_Bar_Line = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
    datasets: [
      {
        label: 'Visiteurs (Site A)',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Visiteurs (Site B)',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // 3 - 4. Doughnut et Pie Data
  const Data_Doughnut_Pie = {
    labels: ['Ordinateur', 'Mobile', 'Tablette', 'Autres'],
    datasets: [
      {
        label: 'Utilisation (%)',
        data: [55, 30, 10, 5],
        backgroundColor: [
          'rgb(59, 130, 246)',
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(16, 185, 129)',
        ],
        hoverOffset: 10,
      },
    ],
  };

  // 5. Radar Data
  const Data_Radar = {
    labels: ['Vitesse', 'Polyvalence', 'Stabilité', 'Coût', 'Sécurité', 'Scalabilité'],
    datasets: [
      {
        label: 'Produit A',
        data: [65, 59, 90, 81, 56, 55],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
      },
    ]
  };

  // 6. Scatter Data
  const Data_Scatter = {
    datasets: [
      {
        label: 'Corrélation Vente/Température',
        data: [
          { x: 15, y: 1200 }, { x: 18, y: 1500 }, { x: 22, y: 2200 },
          { x: 25, y: 2800 }, { x: 26, y: 2500 }, { x: 30, y: 3500 },
        ],
        backgroundColor: 'rgb(16, 185, 129)',
        pointRadius: 6,
      },
    ],
  };

  // 7 - Polar Area
  const Data_PolarArea = {
    // Labels pour chaque rayon (souvent utilisés pour comparer des catégories)
    labels: ['Design', 'Développement', 'Marketing', 'Opérations', 'Recherche'],
    datasets: [
      {
        label: 'Budget Alloué (K€)',
        data: [15, 25, 10, 20, 30], // Les valeurs
        backgroundColor: [
          'rgba(59, 130, 246, 0.6)',
          'rgba(239, 68, 68, 0.6)',
          'rgba(245, 158, 11, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(147, 51, 234, 0.6)', // Violet
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  // 8 - bulles (Bubble)
  const Data_Bubble = {
    // Les labels (étiquettes) ne sont pas utilisés pour les axes X/Y,
    // mais le tableau datasets est obligatoire.
    datasets: [
      {
        label: 'Projets (Taille: Budget)', // La taille de la bulle représente le budget
        // Chaque point est défini par {x, y, r}
        data: [
          // { x: Temps de Développement (jours), y: Complexité (score), r: Budget (k€) }
          { x: 20, y: 35, r: 15 }, // Petite Bulle, Petit Budget
          { x: 45, y: 60, r: 25 }, // Moyenne Bulle
          { x: 10, y: 20, r: 10 }, // Très Petite Bulle
          { x: 70, y: 75, r: 40 }, // Grosse Bulle, Grand Budget
          { x: 30, y: 50, r: 20 },
        ],
        backgroundColor: 'rgba(147, 51, 234, 0.6)', // Couleur Violette
        borderColor: 'rgb(147, 51, 234)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(147, 51, 234, 0.8)',
      },
    ],
  };

  const tableDataGroq = [
    {
      plateforme: 'grok.com',
      acces_gratuit: 'Oui',
      mode_vocal: 'Non',
      quotas_eleves: 'Oui',
    },
    {
      plateforme: 'x.com',
      acces_gratuit: 'Oui',
      mode_vocal: 'Non',
      quotas_eleves: 'Oui (abonnement premium)',
    },
    // ... autres lignes
  ];

  // État pour gérer l'image actuellement sélectionnée pour la modale
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Cette ligne indique à Vite de chercher tous les fichiers .png, .jpg, ou .jpeg
  // dans le dossier '../assets/' (ajustez ce chemin si besoin !)
  const modules = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true });

  // Fonction pour générer le tableau d'images (imageResults)
  const getDynamicImageResults = () => {
    return Object.keys(modules).map((path, index) => {

      // L'URL publique de l'image est stockée dans la propriété 'default'
      const url = modules[path].default;

      // Extrait le nom du fichier pour le texte alternatif (alt)
      // Exemple : 'image_0dcba3.jpg' devient 'image 0dcba3'
      const fileName = path.split('/').pop().split('.')[0];

      return {
        id: index + 1,
        url: url,
        // Nettoie le nom de fichier pour un texte lisible (ex: remplace les underscores)
        alt: fileName.replace(/_/g, ' '),
        label: fileName.replace(/_/g, ' ') // Ajoute un label pour l'affichage dans la grille
      };
    });
  };
  // Données d'images factices pour l'exemple (remplacez par vos vraies données)
  const imageResults = getDynamicImageResults();

  const definitionText = "I-oasis Chat est conçu pour fournir des réponses utiles et véridiques, en s'inspirant du Guide du voyageur galactique et de JARVIS de Iron Man.";
  const citationSource = "xAI";

  // Fonction passée à ImageGalleryMobile pour ouvrir la modale
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {/* 
      <header className="fixed top-0 z-50 flex justify-between items-center w-full mb-6 pt-2"> */}
      <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-black/90 backdrop-blur-sm">
        <GiHamburgerMenu className="text-2xl text-white cursor-pointer" />
        <div className="flex space-x-3">
          <RiMoreFill className="text-2xl text-white cursor-pointer" />
          <IoArrowUpCircleOutline className="text-2xl text-white cursor-pointer" />
          <BsPencilSquare className="text-2xl text-white cursor-pointer" />
        </div>
      </header>
      <div className="relative mt-10 flex flex-col min-h-screen bg-black text-white p-4">
        {/* En-tête de la navigation (Haut de l'écran) */}

        {/* Contenu de la conversation */}
        <div className=" text-left flex-grow overflow-y-auto pb-24 md:max-w-4xl md:mx-auto">
          {/* Message de l'utilisateur (Question) */}
          <UserMessageBubble message="comment va madagascar en ce moment parceque
              actuellement je suis à dubai ?"/>
          <div className="Affichage des sources  pb-4 px-3 bg-gray-950 rounded-lg">
            <>
              {/* Conteneur des cartes de recherche/filtres */}
              {/*         <div className="flex flex-col space-y-3 mb-8">
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-xl border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
            <span className="flex items-center">
              <span className="mr-2">❌</span> Madagascar since:2025-0...
            </span>
            <span>Publications 10</span>
          </div>

          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-xl border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
            <span className="flex items-center">
              <BsGlobe2 className="mr-2 text-xl text-gray-400" /> Parcouru https://www.aljazeera.com/where/...
            </span>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-xl border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
            <span className="flex items-center">
              <BsGlobe2 className="mr-2 text-xl text-gray-400" /> Parcouru https://www.bbc.com/news/topics...
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-xl border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
            <span className="flex items-center">
              <HiOutlineSearch className="mr-2 text-xl text-gray-400" /> Madagascar current news ...
            </span>
            <span>Résultats 10</span>
          </div>

          <button className="text-center text-sm font-semibold text-gray-400 mt-2 hover:text-white">
            Afficher moins
          </button>
        </div> */}
            </>
            {/* Réponse de Grok (Situation actuelle) */}
            <div className="mb-4">
              <p className="text-gray-200 text-left leading-relaxed text-lg mb-4">
                Salut ! Madagascar traverse actuellement une période
                mouvementée, surtout sur le plan politique et social. Voici un
                aperçu rapide de la situation en ce début octobre 2025, basé sur
                les actualités récentes :
              </p>
              <h3 className="text-xl font-bold mb-3 text-white">
                Situation politique et sociale
              </h3>
              <>
                {/* Bouton d'action/réflexion (Intégré dans le texte, comme dans l'image) */}
                {/* <button className="flex items-center justify-between w-full p-3 mb-4 text-sm font-semibold rounded-xl border border-gray-700 bg-gray-800 hover:bg-gray-700">
              <span className="flex items-center">
                <RiGpsLine className="mr-2 text-xl" /> Réfléchir plus intensément
              </span>
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </button> */}
              </>
              {/* Suite du paragraphe */}
              <p className="text-gray-200 leading-relaxed">
                [Suite du paragraphe...] septembre, l'île connait des
                troubles, qui ont éclaté fin septembre, sont principalement dus à
                des ...
              </p>
            </div>
            {/* Section Chronologie Récente (NOUVELLE SECTION) */}
            <h4 className="text-lg font-bold mb-2 text-white">
              Chronologie récente :
            </h4>
            <ul className="list-disc ml-10 space-y-0.5 text-gray-200">
              {/* Élément 1 : 25 septembre */}
              <li>
                <span className="font-bold text-white">25 septembre</span> :
                Manifestations violentes à Antananarivo ; barricades, incendies
                (dont une station de téléphérique), affrontements avec la police
                (gaz lacrymogène, balles en caoutchouc). Au moins 5 morts
                confirmés initialement.
              </li>
              {/* Élément 2 : 26-28 septembre */}
              <li>

                <span className="font-bold text-white">26-28 septembre</span> :
                Couvre-feu de 19h à 5h imposé dans la capitale ; renvoi du
                ministre de l'Énergie. Nouvelles marches, avec des slogans comme
                "L'eau et l'électricité sont des droits humains".
              </li>
              {/* Élément 3 : 29 septembre */}
              <li>
                <span className="font-bold text-white">29 septembre</span> : Le
                président Andry...
              </li>
            </ul>

            <h3 className="text-white font-bold text-lg mb-2">
              <br />
              Bloc de citation
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Pour mettre en avant une idée, une définition ou une citation.
            </p>
            {/* Utilisation du composant de citation refactorisé */}
            <QuoteBlock
              citation={definitionText}
              source={citationSource}
            />

            {/* 💡 Positionnement de la barre de boutons */}
            <div className="flex justify-start">
              <ChatReactionButtons />
            </div>


            {/* Affichage du tableau refactorisé */}
            <AITableMessage title="Pour comparer des données ou organiser des informations de manière structurée. Exemple :" data={madagascarData} />


            {/* Affichage d'un snippet de code */}
            <CodeSnippetWithHLJS language="jsx" code={exampleCode} />

            {/* Section Graphique */}
            <div className="bg-[rgb(40, 44, 53)] p-4 rounded-xl mb-4">
              <h3 className="text-xl font-bold mb-3 text-white">
                Graphique (Chart.js)
              </h3>

              {/* Utilisation du composant ChartDisplay */}
              {/* 1. Graphique en Barres */}
              <ol className="list-inside"> {/* Optional: list-inside can change where the number is positioned */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Voici une comparaison de performance mensuelle entre deux sites sous forme de **graphique en barres** :
                </li>
                {/* Other list items go here */}
                <ChartDisplay
                  chartType="Bar"
                  data={Data_Bar_Line}
                  title="Performance Mensuelle des Sites"
                />

                {/* 2. Graphique en Lignes */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Les mêmes données, présentées sous forme de **graphique en lignes**, pour mieux visualiser la tendance :
                </li>
                <ChartDisplay
                  chartType="Line"
                  data={Data_Bar_Line}
                  title="Tendance d'Affluence (Lignes)"
                />

                {/* 3. Graphique en Doughnut (Tarte/Beignet) */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Voici un autre exemple, un graphique en **Doughnut**, pour la répartition proportionnelle :
                </li>
                <ChartDisplay
                  chartType="Doughnut"
                  data={Data_Doughnut_Pie}
                  title="Répartition des Appareils Utilisés"
                  legendLabel="Pourcentage du trafic"
                />

                {/* 4. Graphique en Camembert (Pie) */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Ou la même information, présentée sous forme de **Camembert (Pie Chart)** :
                </li>
                <ChartDisplay
                  chartType="Pie"
                  data={Data_Doughnut_Pie}
                  title="Répartition (Camembert)"
                  legendLabel="Pourcentage du trafic"
                />

                {/* 5. Graphique Radar */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Un graphique **Radar** pour comparer plusieurs critères de performance du Produit A :
                </li>
                <ChartDisplay
                  chartType="Radar"
                  data={Data_Radar}
                  title="Évaluation Multicritères du Produit A"
                />

                {/* 6. Graphique Scatter (Nuage de Points) */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Et enfin, un graphique de type **Scatter (Nuage de Points)** pour visualiser la corrélation entre les variables X et Y :
                </li>
                <ChartDisplay
                  chartType="Scatter"
                  data={Data_Scatter}
                  title="Corrélation Vente vs. Température"
                />

                {/* 7. Graphique Polar Area */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Pour la comparaison de catégories sur une base circulaire, voici un exemple de **Polar Area** :
                </li>
                <ChartDisplay
                  chartType="PolarArea"
                  data={Data_PolarArea} // Utilise l'objet de données que j'avais défini.
                  title="Répartition du Budget par Département"
                />

                {/* 7. Graphique Bubble */}
                <li className="text-gray-200 leading-relaxed text-lg my-4 list-decimal ml-6">
                  Pour un graphique en **Bulles (Bubble)** qui visualise trois dimensions de données à la fois :
                </li>
                <ChartDisplay
                  chartType="Bubble" // Nouveau type
                  data={Data_Bubble} // Utilise l'objet de données que nous venons de créer
                  title="Analyse de Projets (Temps, Complexité, Budget)"
                />
              </ol>
            </div>
            {/* 1. Affichage de la Galerie/Carrousel d'Images (Exemple 2/2) */}
            <ImageGalleryMobile
              images={imageResults}
              initialIndex={0} // Commence sur la 2ème image (la grille)
              onImageSelect={handleImageSelect} // Fonction pour ouvrir la modale
            />

            {/* 2. Affichage de la Modale Plein Écran */}
            <ImageModal
              imageUrl={selectedImage ? selectedImage.url : null}
              altText={selectedImage ? selectedImage.alt : ''}
              onClose={() => setSelectedImage(null)}
            />
          </div>
        </div>
        {/* Barre de saisie flottante (Bas de l'écran) */}
        <div className="fixed bottom-0 left-0 right-0 p-2 bg-black border-t border-gray-800">
          <div className="flex items-center w-full max-w-lg mx-auto bg-gray-800 rounded-full h-12 px-2">
            <LuMic className="text-xl text-gray-400 cursor-pointer ml-2" />
            <input
              type="text"
              placeholder="Ask anything, Grok..."
              className="flex-grow h-full bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 text-base"
            />
            {/* Bouton d'envoi (Icône seule) */}
            <div className="flex items-center justify-center text-white bg-gray-600 rounded-full h-8 w-8 cursor-pointer">
              <IoSend className="text-base mx-auto w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatConversationMobile;
