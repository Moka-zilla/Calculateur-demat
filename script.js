// ==========================================
// 1. DICTIONNAIRE DE TRADUCTION (FR / EN)
// ==========================================
let currentLang = 'fr';

const translations = {
    fr: {
        meta_title: "Calculateur : Le Vrai Coût du Dématérialisé",
        header_title: 'Le Vrai Coût du <span class="highlight">Dématérialisé</span>',
        header_sub: "Ne laissez pas les stores numériques confisquer votre pouvoir d'achat et votre liberté de consommer.",
        habits_title: "⚙️ Vos Habitudes de Jeu",
        habits_desc: "Ajustez les curseurs selon votre profil pour un calcul sur mesure.",
        lbl_years: "Durée estimée (Génération de console)",
        help_years: "Une génération de console dure généralement entre 5 et 7 ans.",
        lbl_games: "Jeux neufs achetés par an",
        help_games: "Nombre de jeux achetés au tarif \"lancement\" chaque année.",
        lbl_price_demat: "Prix moyen sur le Store (Dématérialisé)",
        help_price_demat: "Prix fixe imposé sur le PS Store / Xbox Store (aucun revendeur concurrent).",
        lbl_price_phys: "Prix moyen en magasin (Physique)",
        help_price_phys: "Prix en grande surface ou e-commerce au lancement (concurrence forte).",
        lbl_resell_pct: "Jeux revendus en occasion",
        help_resell_pct: "Pourcentage de jeux physiques finis que vous revendez.",
        lbl_resell_price: "Gain moyen par jeu revendu",
        help_resell_price: "Prix de revente moyen sur Vinted, Leboncoin, ou en magasin d'occasion.",
        lbl_add_drive: "Inclure le coût du lecteur de disque (+120 €)",
        help_add_drive: "Pour la PS5 Slim ou PS5 Pro, le lecteur est vendu séparément. Nous le comptons comme investissement de départ pour être 100% honnête.",
        results_title: "💸 Impact sur votre Portefeuille",
        results_desc: "Comparatif financier global à la fin de la période.",
        loss_title: "Perte sèche en optant pour le 100% Dématérialisé :",
        tbl_th_item: "Poste de dépense",
        tbl_th_demat: "100% Démat",
        tbl_th_phys: "100% Physique",
        tbl_buy: "Achat des jeux",
        tbl_drive: "Lecteur de disque",
        tbl_resell: "Revente (Occasion)",
        tbl_total: "DÉPENSE RÉELLE NETTE",
        calc_title: "💡 Comment ce calcul est-il fait ?",
        eq_title: "Ce que cette perte représente concrètement :",
        eq_games_desc: "Jeux neufs offerts (à 60€ en magasin)",
        eq_psplus_desc: "D'abonnement annuel PS+ / GamePass offert<br><small style='color:var(--text-muted);'>(Calculé sur la base d'un abonnement 1 an à ~126€)</small>",
        eq_console_title: "Une console neuve gratuite !",
        eq_console_desc: "La somme perdue suffit à vous racheter la prochaine console à sa sortie !",
        abuse_title: "📊 Ce que ça change aujourd'hui & Les futurs abus possibles",
        abuse_desc: "En supprimant le lecteur de disque, les constructeurs obtiennent un monopole total. Voici les dangers et les dérives que le passage au 100% numérique entraîne :",
        ab_th_1: "Domaine & Enjeux",
        ab_th_2: "🟢 Avec le Physique (Actuel)",
        ab_th_3: "🔴 Avec le 100% Dématérialisé (Danger)",
        footer_text: "Outil d'information et de sensibilisation pour la défense des droits des joueurs et du pouvoir d'achat. Partagez librement.",
        
        // Textes dynamiques
        loss_summary_bad: "Vous dépensez cet argent à perte uniquement pour le confort de ne pas insérer de disque.",
        loss_summary_good: "Dans votre cas précis, le dématérialisé s'avère économiquement équivalent ou plus avantageux !",
        unit_year: "an",
        unit_years: "ans",
        unit_game: "jeu",
        unit_games: "jeux",
        
        // Tableau des abus
        abuses: [
            ["Concurrence & Libre marché", "Guerre des prix entre Carrefour, Leclerc, Amazon et Fnac. Les jeux sortent souvent à <strong>58 € au lieu de 80 €</strong> dès le jour de la sortie.", "<strong>Monopole absolu.</strong> Sony/Microsoft fixent les prix seuls. Maintien des jeux à 79,99 € pendant de longs mois sans concurrence pour les tirer vers le bas."],
            ["Revente & Prêt entre amis", "Vous êtes <strong>propriétaire</strong> de l'objet. Vous pouvez le revendre sur Vinted/Leboncoin, le prêter à un ami, ou l'acheter en occasion à petit prix.", "<strong>Interdiction de revente.</strong> Le jeu est lié à vie à votre compte. Impossible de prêter, revendre ou donner un jeu fini. Vos jeux perdent 100% de leur valeur monétaire dès l'achat."],
            ["Préservation dans le temps", "Dans 15 ans, insérez le disque : <strong>le jeu démarre</strong> (même sans connexion internet ni serveurs actifs). Vous possédez l'œuvre pour toujours.", "<strong>Dépendance aux serveurs.</strong> Si le store ferme ou si les droits d'auteur/musiques expirent (ex: <em>The Crew</em>), le jeu peut être effacé à distance de votre console."],
            ["⚠️ Abus potentiel #1 :<br>Modèle \"100% Location\" (Fin de l'achat)", "Tant qu'il y a un lecteur, vous pouvez acheter vos jeux à l'acte et y jouer hors-ligne indéfiniment sans payer de mensualité.", "Sans disques, ils pourront imposer un modèle à la Netflix : <strong>fin de l'achat à l'unité</strong>, obligation de payer un abonnement mensuel de plus en plus cher (GamePass / PS+) pour accéder à vos jeux."],
            ["⚠️ Abus potentiel #2 :<br>Prix dynamiques & Inflation", "Le marché physique régule les prix par l'offre et la demande physique, et les stocks des magasins en concurrence.", "Sans aucun magasin pour faire barrage, qu'est-ce qui empêchera les stores numériques de vendre les futurs jeux à <strong>90 € ou 100 €</strong> l'unité ? Vous n'aurez plus d'autre endroit où aller."],
            ["⚠️ Abus potentiel #3 :<br>Censure et réécriture rétroactive", "Un disque gravé en usine est <strong>inviolable</strong>. La version d'origine que vous avez achetée restera intacte à jamais.", "Via des mises à jour obligatoires ou des patchs silencieux sur les stores, un éditeur peut <strong>censurer des scènes</strong>, modifier des dialogues ou supprimer des musiques des années après votre achat."],
            ["⚠️ Abus potentiel #4 :<br>Fin du destockage et des bonnes affaires", "Les hypermarchés et revendeurs vident régulièrement leurs stocks physiques : bacs à soldes à 10 €, Black Friday, liquidation de rayons.", "Sur un store numérique, <strong>il n'y a aucun coût de stockage physique</strong>. L'éditeur n'a donc plus aucune obligation de casser les prix à 10 € pour vider des étagères."],
            ["⚠️ Abus potentiel #5 :<br>Bannissement et perte totale", "Si votre compte réseau est piraté, suspendu ou banni, vos disques sur votre étagère restent à vous et sont jouables sur un autre compte.", "Un litige avec le support, une opposition bancaire ou un piratage de compte entraîne la <strong>perte instantanée et définitive</strong> de l'intégralité de votre bibliothèque de jeux achetés depuis des années."],
            ["⚠️ Abus potentiel #6 :<br>Verrouillage par région (Fin de l'import)", "Vous pouvez acheter un jeu physique sorti uniquement au Japon ou aux USA et l'insérer dans votre console européenne : cela fonctionnera (dézonage).", "Les stores numériques peuvent facilement appliquer des <strong>blocages par adresse IP ou par carte bancaire régionale</strong>, vous empêchant d'acheter des jeux d'autres régions du monde."],
            ["⚠️ Abus potentiel #7 :<br>Perte du patrimoine familial (Héritage)", "Une collection de jeux physiques est un bien matériel que vous pouvez donner, revendre ou <strong>léguer à vos enfants ou petits-enfants</strong>.", "Les conditions d'utilisation des stores précisent qu'un compte est <strong>strictement personnel et non transférable</strong>. À votre décès, votre collection numérique valant des milliers d'euros est légalement perdue pour vos proches."],
            ["⚠️ Abus potentiel #8 :<br>Fin du prêt gratuit en médiathèque", "Les bibliothèques et médiathèques municipales prêtent gratuitement des jeux physiques, permettant aux familles modestes d'accéder à la culture vidéo-ludique.", "Le prêt public de jeux est <strong>techniquement impossible</strong> avec un modèle numérique où la licence d'utilisation est fusionnée de manière permanente et exclusive à votre compte privé."],
            ["⚠️ Abus potentiel #9 :<br>Obsolescence matérielle et écologie", "Même quand une console ne sera plus maintenue par son constructeur dans 20 ans, le marché du rétro-gaming la maintiendra en vie grâce aux disques.", "Le jour où les serveurs d'authentification fermeront, une console 100% dématérialisée deviendra incapable de lancer le moindre jeu, se transformant en un <strong>déchet électronique inutile et irrécupérable</strong>."],
            ["⚠️ Abus potentiel #10 :<br>Manipulation par la rareté numérique (FOMO)", "Un jeu physique continue d'exister en occasion pendant des décennies, vous avez tout votre temps pour y jouer ou l'acheter plus tard.", "Les éditeurs peuvent créer de la <strong>rareté artificielle</strong> en retirant soudainement un jeu du store (\"Édition numérique disponible pendant 3 mois seulement !\"), vous poussant à l'achat compulsif par peur de rater l'occasion."]
        ]
    },
    en: {
        meta_title: "Calculator: The True Cost of Digital Gaming",
        header_title: 'The True Cost of <span class="highlight">Digital Gaming</span>',
        header_sub: "Don't let digital storefronts take away your purchasing power and consumer freedom.",
        habits_title: "⚙️ Your Gaming Habits",
        habits_desc: "Adjust the sliders according to your profile for a custom calculation.",
        lbl_years: "Estimated duration (Console generation)",
        help_years: "A console generation typically lasts between 5 and 7 years.",
        lbl_games: "New games purchased per year",
        help_games: "Number of brand-new launch title games bought each year.",
        lbl_price_demat: "Average Store price (Digital)",
        help_price_demat: "Fixed price imposed on PS Store / Xbox Store (no retail competition).",
        lbl_price_phys: "Average retail price (Physical)",
        help_price_phys: "Price at supermarkets or online retailers at launch (strong competition).",
        lbl_resell_pct: "Games resold second-hand",
        help_resell_pct: "Percentage of finished physical games that you resell afterward.",
        lbl_resell_price: "Average profit per resold game",
        help_resell_price: "Average resale price on eBay, Craigslist, or trade-in stores.",
        lbl_add_drive: "Include disc drive cost (+$120)",
        help_add_drive: "For the PS5 Slim or PS5 Pro, the disc drive is sold separately. We count it as an initial investment for total honesty.",
        results_title: "💸 Impact on Your Wallet",
        results_desc: "Overall financial comparison by the end of the period.",
        loss_title: "Net financial loss from going 100% Digital:",
        tbl_th_item: "Expense item",
        tbl_th_demat: "100% Digital",
        tbl_th_phys: "100% Physical",
        tbl_buy: "Game purchases",
        tbl_drive: "Disc drive hardware",
        tbl_resell: "Resale (Second-hand)",
        tbl_total: "REAL NET EXPENSE",
        calc_title: "💡 How is this calculated?",
        eq_title: "What this loss represents in real life:",
        eq_games_desc: "Free new games (at $60 retail)",
        eq_psplus_desc: "Free annual PS+ / GamePass subscription years<br><small style='color:var(--text-muted);'>(Calculated based on a ~$130 yearly membership)</small>",
        eq_console_title: "A brand new free console!",
        eq_console_desc: "The money lost is enough to buy yourself the next-gen console at launch!",
        abuse_title: "📊 What changes today & Potential future abuses",
        abuse_desc: "By removing the disc drive, console makers gain a total monopoly. Here are the dangers and abuses brought by a 100% digital transition:",
        ab_th_1: "Domain & Stakes",
        ab_th_2: "🟢 With Physical Discs (Current)",
        ab_th_3: "🔴 With 100% Digital (Danger)",
        footer_text: "Information and awareness tool for defending gamer rights and purchasing power. Feel free to share.",
        
        // Dynamic text
        loss_summary_bad: "You are losing this money purely for the convenience of not inserting a physical disc.",
        loss_summary_good: "In your specific scenario, digital gaming is economically equivalent or more advantageous!",
        unit_year: "year",
        unit_years: "years",
        unit_game: "game",
        unit_games: "games",
        
        // Abuses Table
        abuses: [
            ["Competition & Free Market", "Price wars between retailers (Amazon, Walmart, BestBuy). Games often release at <strong>$60 instead of $70/$80</strong> on day one.", "<strong>Absolute monopoly.</strong> Sony/Microsoft set prices alone. Games stay locked at $79.99 for months without retail competition to drive prices down."],
            ["Resale & Lending to friends", "You are the legal <strong>owner</strong> of the item. You can resell it on eBay, lend it to a friend, or buy it used for cheap.", "<strong>Resale banned.</strong> The game is bound to your account for life. You cannot lend, sell, or give away a finished game. Your games lose 100% of their monetary value instantly."],
            ["Long-term Preservation", "In 15 years, insert the disc: <strong>the game launches</strong> (even without internet or active servers). You own the art forever.", "<strong>Server dependency.</strong> If the store closes or licensing/music rights expire (e.g., <em>The Crew</em>), the game can be wiped remotely from your console."],
            ["⚠️ Potential Abuse #1:<br>\"100% Rental\" Model (End of ownership)", "As long as discs exist, you can buy games individually and play offline indefinitely without paying a monthly fee.", "Without discs, they can enforce a Netflix-style model: <strong>no more individual game purchases</strong>, forcing you to pay an increasingly expensive monthly subscription (GamePass/PS+) to access your games."],
            ["⚠️ Potential Abuse #2:<br>Dynamic pricing & Inflation", "The physical retail market regulates prices through physical supply and demand among competing stores.", "Without physical retail barriers, what will stop digital storefronts from selling future games at <strong>$90 or $100</strong> each? You will have nowhere else to go."],
            ["⚠️ Potential Abuse #3:<br>Censorship & Retroactive editing", "A factory-pressed disc is <strong>tamper-proof</strong>. The original release version you bought will remain intact forever.", "Through mandatory updates or silent store patches, publishers can <strong>censor scenes</strong>, alter dialogue, or remove soundtracks years after your purchase."],
            ["⚠️ Potential Abuse #4:<br>End of clearance sales & Bargains", "Supermarkets and retailers regularly clear out physical inventory: $10 bargain bins, Black Friday deals, shelf liquidations.", "On a digital storefront, <strong>there is no physical storage cost</strong>. The publisher has no obligation or incentive to slash prices to $10 to clear out physical shelf space."],
            ["⚠️ Potential Abuse #5:<br>Account bans & Total loss", "If your online network account is hacked, suspended, or banned, the discs on your shelf remain yours and playable on another account.", "A payment dispute with support, a bank chargeback, or an account hack leads to the <strong>instant and permanent loss</strong> of your entire library of games purchased over the years."],
            ["⚠️ Potential Abuse #6:<br>Region locking (End of importing)", "You can buy a physical game released exclusively in Japan or Europe and insert it into your US console: it will work seamlessly (region-free).", "Digital stores can easily enforce <strong>IP address or regional credit card blocks</strong>, preventing you from purchasing games from other regions around the world."],
            ["⚠️ Potential Abuse #7:<br>Loss of family heritage (Inheritance)", "A physical game collection is tangible property that you can gift, resell, or <strong>pass down to your children or grandchildren</strong>.", "Store terms of service state that accounts are <strong>strictly personal and non-transferable</strong>. Upon death, your digital collection worth thousands of dollars is legally lost to your family."],
            ["⚠️ Potential Abuse #8:<br>End of free public library lending", "Municipal libraries and public institutions lend out physical games for free, allowing low-income families to access video game culture.", "Public lending is <strong>technically impossible</strong> under a digital model where the usage license is permanently and exclusively fused to a private individual account."],
            ["⚠️ Potential Abuse #9:<br>Hardware obsolescence & E-waste", "Even when a console is no longer supported by its creator in 20 years, the retro-gaming market will keep it alive through physical discs.", "The day authentication servers shut down, a 100% digital console becomes incapable of launching a single game, turning into <strong>useless and unrecoverable electronic waste</strong>."],
            ["⚠️ Potential Abuse #10:<br>FOMO & Artificial digital scarcity", "A physical game continues to exist on the second-hand market for decades; you have plenty of time to play or buy it later.", "Publishers can create <strong>artificial scarcity</strong> by suddenly delisting a game from the store (\"Digital edition available for 3 months only!\"), pushing you into compulsive buying out of fear of missing out."]
        ]
    }
};

// ==========================================
// 2. CHANGEMENT DE LANGUE DYNAMIQUE
// ==========================================
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Mise à jour des boutons FR / EN
    document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Mettre à jour tous les textes simples
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Mettre à jour le tableau des abus
    renderAbuseTable();

    // Relancer les calculs et textes dynamiques
    calculate();
}

function renderAbuseTable() {
    const tbody = document.getElementById('abuse-tbody');
    tbody.innerHTML = '';
    
    translations[currentLang].abuses.forEach((row, index) => {
        const tr = document.createElement('tr');
        if (index >= 3) tr.className = 'abuse-row'; // Style spécial pour les abus futurs
        
        tr.innerHTML = `
            <td><strong>${row[0]}</strong></td>
            <td>${row[1]}</td>
            <td class="danger-cell">${row[2]}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================
// 3. RÉCUPÉRATION DES ÉLÉMENTS DU DOM
// ==========================================
const elYears = document.getElementById('years');
const elGames = document.getElementById('games');
const elPriceDemat = document.getElementById('price-demat');
const elPricePhys = document.getElementById('price-phys');
const elResellPct = document.getElementById('resell-pct');
const elResellPrice = document.getElementById('resell-price');
const elAddDrive = document.getElementById('add-drive');

const valYears = document.getElementById('val-years');
const valGames = document.getElementById('val-games');
const valPriceDemat = document.getElementById('val-price-demat');
const valPricePhys = document.getElementById('val-price-phys');
const valResellPct = document.getElementById('val-resell-pct');
const valResellPrice = document.getElementById('val-resell-price');

const resBox = document.getElementById('result-box');
const resTotalLoss = document.getElementById('total-loss');
const resLossSummary = document.getElementById('loss-summary');
const tblTotalGames = document.getElementById('tbl-total-games');
const tblResellCount = document.getElementById('tbl-resell-count');
const tblDematBuy = document.getElementById('tbl-demat-buy');
const tblPhysBuy = document.getElementById('tbl-phys-buy');
const tblDriveCost = document.getElementById('tbl-drive-cost');
const tblResellGain = document.getElementById('tbl-resell-gain');
const tblDematTotal = document.getElementById('tbl-demat-total');
const tblPhysTotal = document.getElementById('tbl-phys-total');

const explanationList = document.getElementById('explanation-list');
const eqGames = document.getElementById('eq-games');
const eqPsplus = document.getElementById('eq-psplus');
const eqConsoleBox = document.getElementById('eq-console-box');

// ==========================================
// 4. FONCTION DE CALCUL PRINCIPALE
// ==========================================
function calculate() {
    const t = translations[currentLang];
    const curr = currentLang === 'fr' ? '€' : '$'; // Devise automatique selon la langue

    const years = parseInt(elYears.value);
    const gamesPerYear = parseInt(elGames.value);
    const priceDemat = parseFloat(elPriceDemat.value);
    const pricePhys = parseFloat(elPricePhys.value);
    const resellPct = parseFloat(elResellPct.value) / 100;
    const resellPrice = parseFloat(elResellPrice.value);
    const driveCost = elAddDrive.checked ? 120 : 0;

    // Mise à jour des labels de sliders avec pluriel géré
    valYears.textContent = `${years} ${years > 1 ? t.unit_years : t.unit_year}`;
    valGames.textContent = `${gamesPerYear} ${gamesPerYear > 1 ? t.unit_games : t.unit_game} / ${t.unit_year}`;
    valPriceDemat.textContent = `${priceDemat} ${curr}`;
    valPricePhys.textContent = `${pricePhys} ${curr}`;
    valResellPct.textContent = `${resellPct * 100} %`;
    valResellPrice.textContent = `${resellPrice} ${curr}`;

    // Mathématiques
    const totalGames = years * gamesPerYear;
    const gamesResold = Math.round(totalGames * resellPct);
    
    const totalDematBuy = totalGames * priceDemat;
    const totalDematNet = totalDematBuy; 

    const totalPhysBuy = totalGames * pricePhys;
    const totalResellGain = gamesResold * resellPrice;
    const totalPhysNet = totalPhysBuy + driveCost - totalResellGain;

    const loss = totalDematNet - totalPhysNet;

    // Mise à jour du tableau
    const txtTotal = currentLang === 'fr' ? 'au total' : 'in total';
    const txtResold = currentLang === 'fr' ? 'revendus' : 'resold';
    
    tblTotalGames.textContent = `(${totalGames} ${t.unit_games} ${txtTotal})`;
    tblResellCount.textContent = `(${gamesResold} ${t.unit_games} ${txtResold})`;
    
    tblDematBuy.textContent = `${Math.round(totalDematBuy).toLocaleString()} ${curr}`;
    tblPhysBuy.textContent = `${Math.round(totalPhysBuy).toLocaleString()} ${curr}`;
    tblDriveCost.textContent = `${driveCost} ${curr}`;
    tblResellGain.textContent = `- ${Math.round(totalResellGain).toLocaleString()} ${curr}`;
    
    tblDematTotal.textContent = `${Math.round(totalDematNet).toLocaleString()} ${curr}`;
    tblPhysTotal.textContent = `${Math.round(totalPhysNet).toLocaleString()} ${curr}`;

    // Affichage Perte & Design
    if (loss > 0) {
        resTotalLoss.textContent = `+ ${Math.round(loss).toLocaleString()} ${curr}`;
        resTotalLoss.style.color = 'var(--accent-red)';
        resBox.style.borderColor = 'var(--accent-red)';
        resBox.style.background = 'linear-gradient(135deg, rgba(255, 59, 92, 0.15), rgba(0,0,0,0))';
        resLossSummary.textContent = t.loss_summary_bad;
    } else {
        resTotalLoss.textContent = `${Math.round(loss).toLocaleString()} ${curr}`;
        resTotalLoss.style.color = 'var(--accent-green)';
        resBox.style.borderColor = 'var(--accent-green)';
        resBox.style.background = 'linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(0,0,0,0))';
        resLossSummary.textContent = t.loss_summary_good;
    }

    // Explications mathématiques dynamiques
    if (currentLang === 'fr') {
        explanationList.innerHTML = `
            <li><strong>Sur le Store numérique :</strong> ${totalGames} jeux achetés à ${priceDemat}${curr} = <strong>${totalDematBuy}${curr}</strong>. Aucun retour sur investissement possible.</li>
            <li><strong>En version Physique :</strong> ${totalGames} jeux achetés moins chers en magasin (${totalPhysBuy}${curr}), auxquels on ajoute le lecteur (+${driveCost}${curr}).</li>
            <li><strong>L'effet "Occasion" :</strong> En revendant ${gamesResold} jeux à ${resellPrice}${curr} l'unité, vous récupérez <strong>${totalResellGain}${curr}</strong> en argent comptant.</li>
            <li><strong>Bilan :</strong> ${totalDematNet}${curr} (Démat) - ${totalPhysNet}${curr} (Physique net) = <span style="color:var(--accent-red); font-weight:bold;">${Math.round(loss)}${curr} de perte pure</span>.</li>
        `;
    } else {
        explanationList.innerHTML = `
            <li><strong>On the Digital Store:</strong> ${totalGames} games bought at ${curr}${priceDemat} = <strong>${curr}${totalDematBuy}</strong>. Zero return on investment possible.</li>
            <li><strong>Physical Retail version:</strong> ${totalGames} games bought cheaper at retail (${curr}${totalPhysBuy}), plus the disc drive (+${curr}${driveCost}).</li>
            <li><strong>The "Second-Hand" effect:</strong> By reselling ${gamesResold} games at ${curr}${resellPrice} each, you get back <strong>${curr}${totalResellGain}</strong> in cold hard cash.</li>
            <li><strong>Summary:</strong> ${curr}${totalDematNet} (Digital) - ${curr}${totalPhysNet} (Net Physical) = <span style="color:var(--accent-red); font-weight:bold;">${curr}${Math.round(loss)} in pure loss</span>.</li>
        `;
    }

    // Équivalences
    const freeGames = Math.max(0, Math.floor(loss / 60)); 
    const psPlusPrice = currentLang === 'fr' ? 126 : 130; // Prix de référence annuel
    const freePsPlusYears = Math.max(0, (loss / psPlusPrice)).toFixed(1); 
    
    eqGames.textContent = freeGames;
    eqPsplus.textContent = `${freePsPlusYears} ${freePsPlusYears >= 2 ? t.unit_years : t.unit_year}`;

    if (loss >= 450) {
        eqConsoleBox.style.display = 'flex';
    } else {
        eqConsoleBox.style.display = 'none';
    }
}

// ==========================================
// 5. ÉCOUTEURS D'ÉVÉNEMENTS & INITIALISATION
// ==========================================
const allInputs = [elYears, elGames, elPriceDemat, elPricePhys, elResellPct, elResellPrice, elAddDrive];

allInputs.forEach(input => {
    input.addEventListener('input', calculate);
});

// Initialisation au chargement (Français par défaut + construction du tableau)
renderAbuseTable();
calculate();