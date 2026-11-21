(function () {
  "use strict";

  const quiz = {
    title: "75. Quiz im Bahnhof",
    description: "30 Fragen aus sechs Kategorien. Am Ende bekommst du deine Punkte und die Auflösung.",
    logo: "assets/images/quiz-logo-75.png",
    hero: "assets/images/quiz-75.png",
    questionCount: 30,
    categories: [{"id": "flaggen", "name": "Spaß mit Flaggen", "image": "assets/images/category-flaggen-photo.jpg", "start": 1, "end": 5}, {"id": "sozialkunde", "name": "Sozialkunde", "image": "assets/images/category-sozialkunde-photo.jpg", "start": 6, "end": 10}, {"id": "musik", "name": "Musiktitel – übersetzt ins Deutsche", "image": "assets/images/category-musik-photo.jpg", "start": 11, "end": 15}, {"id": "xy", "name": "Aktenzeichen XY", "image": "assets/images/category-xy-photo.jpg", "start": 16, "end": 20}, {"id": "physik", "name": "Physik", "image": "assets/images/category-physik-photo.jpg", "start": 21, "end": 25}, {"id": "lokal", "name": "Lokales und Aktuelles aus der AZ", "image": "assets/images/category-lokal-photo.jpg", "start": 26, "end": 30}],
    questions: [
      qSingle(1, "flaggen", "Elfenbeinküste oder Irland?", [["a", "Elfenbeinküste"], ["b", "Irland"]], "a", "Die Flagge zeigt die Elfenbeinküste.", "assets/images/flag-cote-ivoire.png"),
      qSingle(2, "flaggen", "Indonesien oder Polen?", [["a", "Indonesien"], ["b", "Polen"]], "a", "Gesucht war Indonesien.", "assets/images/flag-indonesia.png"),
      qSingle(3, "flaggen", "Australien oder Neuseeland?", [["a", "Australien"], ["b", "Neuseeland"]], "b", "Die abgebildete Flagge gehört zu Neuseeland.", "assets/images/flag-new-zealand.png"),
      qSingle(4, "flaggen", "Kamerun oder Senegal?", [["a", "Kamerun"], ["b", "Senegal"]], "b", "Die abgebildete Flagge gehört zum Senegal.", "assets/images/flag-senegal.png"),
      qMatch(5, "flaggen", "Der Freistaat Bayern hat sieben Regierungsbezirke. Im Staatswappen gibt es aber nur vier Wappen, die die Regierungsbezirke repräsentieren. Ordnet die sieben Regierungsbezirke dem jeweiligen Wappen zu.", [["1","Mittelfranken"],["2","Niederbayern"],["3","Oberbayern"],["4","Oberfranken"],["5","Oberpfalz"],["6","Schwaben"],["7","Unterfranken"]], [["a","oben links"],["b","oben rechts"],["c","unten links"],["d","unten rechts"]], {"1":"b","2":"c","3":"c","4":"b","5":"a","6":"d","7":"b"}, "a: Goldener Löwe. b: Fränkischer Rechen. c: Blauer Panther. d: Drei schwarze Löwen."),
      qMatch(6, "sozialkunde", "Inoffizielle Rangfolge der protokollarischen Rangordnung in Deutschland\nDer Bundespräsident ist auf Rang 1, aber wer folgt ihm auf den Rängen 2 bis 5?", [["2","Rang 2"],["3","Rang 3"],["4","Rang 4"],["5","Rang 5"]], [["a","Bundeskanzler der Bundesrepublik Deutschland"],["b","Präsident des Bundesrates"],["c","Präsident des Bundesverfassungsgerichts"],["d","Präsident des Deutschen Bundestages"]], {"2":"d","3":"a","4":"b","5":"c"}, "Nach dem Bundespräsidenten folgen Bundestagspräsident, Bundeskanzler, Bundesratspräsident und der Präsident des Bundesverfassungsgerichts."),
      qMatch(7, "sozialkunde", "Reihenfolge bei der Gründung der BRD\nTipp: Es beginnt mit a)", [["1","Schritt 1"],["2","Schritt 2"],["3","Schritt 3"],["4","Schritt 4"],["5","Schritt 5"]], [["a","Einführung D-Mark"],["b","Gründung Deutsche Bundesbank"],["c","Wahl Bundeskanzler"],["d","Wahl Bundespräsident"],["e","Wahl Bundestag"]], {"1":"a","2":"e","3":"d","4":"c","5":"b"}, "Die D-Mark kam 1948. 1949 folgten die Wahlen von Bundestag, Bundespräsident und Bundeskanzler. Die Deutsche Bundesbank wurde 1957 gegründet."),
      qText(8, "sozialkunde", "Welcher Bundeskanzler war der erste, der als amtierender Bundeskanzler nach einer Bundestagswahl nicht wieder zum Bundeskanzler gewählt wurde?", "Kiesinger", ["kiesinger", "kurt georg kiesinger", "kurt kiesinger"], "Gesucht war Kurt Georg Kiesinger."),
      qText(9, "sozialkunde", "Wann fand nach einer Bundestagswahl der erste komplette Austausch einer Bundesregierung statt, d.h. vorher Parteien A und B, danach Parteien C und D? (Gültige Antwort: Jahr oder Parteien)", "1998 / SPD und Grüne", ["1998", "im jahr 1998", "spd mit grüne", "spd und grüne", "spd grüne", "spd die grünen", "spd und die grünen", "spd bündnis 90 die grünen", "spd und bündnis 90 die grünen", "rot grün"], "Die erste vollständige Ablösung war 1998: SPD mit Grünen."),
      qText(10, "sozialkunde", "Hans-Dietrich Genscher war der Bundesminister mit der längsten Amtszeit (als Bundesminister des Inneren und als Bundesminister des Auswärtigen). In wie vielen Bundeskabinetten war er Mitglied?", "9", ["9", "neun", "in 9", "in neun", "9 bundeskabinetten", "neun bundeskabinetten", "in 9 bundeskabinetten", "in neun bundeskabinetten"], "Genscher war Mitglied in neun Bundeskabinetten."),
      qSingle(11, "musik", "Von wem stammt das Lied mit dem Titel ‚Herr Eitel‘?\n\nTipps: Länge 5:37 Minuten - Dancefloor", [["a", "Ace of Base"], ["b", "Blue System"], ["c", "Culture Beat"], ["d", "Dr. Alban"]], "c", "Der Originaltitel „Mr. Vain“ stammt von Culture Beat."),
      qSingle(12, "musik", "Von wem stammt das Lied mit dem Titel ‚Wachspuppe, Kleiepuppe‘?\n\nTipps: Länge 2:20 Minuten – französisch", [["a", "France Gall"], ["b", "Patricia Kaas"], ["c", "Vanessa Paradis"], ["d", "Zaz"]], "a", "Der Titel „Poupée de cire, poupée de son“ stammt von France Gall."),
      qSingle(13, "musik", "Von wem stammt das Lied mit dem Titel ‚Regenschirm‘?\n\nTipps: Länge 4:35 Minuten – R&B", [["a", "Alicia Keys"], ["b", "Beyoncé"], ["c", "Nicole Scherzinger"], ["d", "Rihanna"]], "d", "„Umbrella“ stammt von Rihanna."),
      qSingle(14, "musik", "Von wem stammt das Lied mit dem Titel ‚Der Wasserfloh‘?\n\nTipps: Länge 4:50 Minuten - italienisch", [["a", "Adriano Celentano"], ["b", "Angelo Branduardi"], ["c", "Eros Ramazzotti"], ["d", "Zucchero"]], "b", "„La pulce d’acqua“ stammt von Angelo Branduardi."),
      qSingle(15, "musik", "Von wem stammt das Lied mit dem Titel ‚Das Abendessen ist fertig‘?\n\nTipps: Länge 22:53 Minuten – Progressive Rock", [["a", "Emerson, Lake and Palmer"], ["b", "Genesis"], ["c", "Pink Floyd"], ["d", "Yes"]], "b", "„Supper’s ready“ stammt von Genesis."),
      qText(16, "xy", "Was hat die „Kryptoqueen“ Ruja Ignatova 2010 in Waltenhofen gekauft, weswegen sie 2016 aufgrund Insolvenzverschleppung, Betrugs und Verletzung der Buchhaltungspflicht verurteilt wurde?", "Gusswerk Waltenhofen", ["gusswerk waltenhofen", "gusswerk", "das gusswerk", "das gusswerk waltenhofen"], "Gesucht war das Gusswerk Waltenhofen."),
      qText(17, "xy", "Wieviel € hat ein Bauhofmitarbeiter beim Leeren der Parkuhren im Laufe der Jahre der Stadt Kempten gestohlen? (+/- 100.000 €)\n\nWir lassen sowohl die Summe, für die er verurteilt wurde, als auch die Summe, die er insgesamt gestohlen hat, als Antwort gelten.\n\nDu kannst einen der beiden Beträge eingeben.", "1,34 Mio € / 1,9 Mio €", [], "Es gelten 1,24–1,44 Mio. € (verurteilt) oder 1,80–2,00 Mio. € (Gesamtsumme)."),
      qText(18, "xy", "1963 wurde der US-Präsident John F. Kennedy in welcher Stadt erschossen?", "Dallas", ["dallas", "in dallas", "dallas texas", "in dallas texas"], "Kennedy wurde in Dallas erschossen."),
      qText(19, "xy", "Wie hieß der österreichische Thronfolger, der 1914 in Sarajevo erschossen wurde?", "Erzherzog Franz Ferdinand", ["franz ferdinand", "erzherzog franz ferdinand"], "Gesucht war Erzherzog Franz Ferdinand."),
      qText(20, "xy", "Wo genau wurde 1987 der ehemalige Schleswig-Holsteiner Ministerpräsident Uwe Barschel tot in seinem Hotelzimmer in Genf gefunden?", "In der Badewanne", ["badewanne", "in der badewanne", "in einer badewanne"], "Uwe Barschel wurde in der Badewanne gefunden."),
      qSelfcheck(21, "physik", "Was ist das Besondere an der Rotation des Planeten Venus?\nWir lassen 2 Antwortmöglichkeiten gelten.", "Die Venus dreht sich rückwärts oder langsamer als ihr Umlauf", "Eine der beiden Aussagen reicht: Die Venus rotiert rückwärts. Oder: Eine Umdrehung um die eigene Achse dauert rund 243 Erdtage und damit länger als ein Umlauf um die Sonne (rund 225 Erdtage)."),
      qText(22, "physik", "Das Internationale Einheitensystem oder SI (französisch: Système international d’unités) ist als Einheitensystem für physikalische Größen weltweit verbreitet. Es gibt 7 Basiseinheiten. Nennt uns 4 davon (Einheit oder Einheitszeichen).\n\nTipp: Die Einheit ‚Elektrische Spannung‘ mit der Einheit ‚Volt‘ und dem Einheitszeichen ‚V‘ ist keine Basiseinheit.", "Vier von sieben: Ampere (A), Meter (m), Candela (cd), Kilogramm (kg), Mol (mol), Kelvin (K), Sekunde (s)", [], "Es zählen vier der sieben SI-Basiseinheiten."),
      qText(23, "physik", "Wenn ein Flugzeug so schnell wie der Schall ist, ist es 1 Mach schnell. Wie viel km/h sind 1 Mach (bei einer Temperatur von 20°C)? (+/- 50 km/h)", "1234,8 km/h", [], "Bei 20 °C entspricht Mach 1 etwa 1234,8 km/h; 1180–1290 km/h zählen."),
      qText(24, "physik", "Das ohmsche Gesetz besagt:\n„Die Stärke des durch ein Objekt fließenden elektrischen Stroms ist proportional der elektrischen Spannung“\nWie lautet die aus der Schulzeit bekannte Formel?\n\nTipp: schweizerischer Kanton", "R = U / I oder I = U / R oder U = R x I", [], "Eine der drei gleichwertigen Formen des Ohmschen Gesetzes zählt."),
      qText(25, "physik", "Der Erdumfang beträgt ungefähr 39.960 km. Eine Seemeile entspricht 1/60 Breitengrad am Äquator. Wie viele km (alternativ auch m) ist eine Seemeile?", "1,85 km bzw. 1850 m", ["1 85", "1850", "1852"], "Es zählen 1,85 km, 1850 m oder der korrekte Wert 1852 m."),
      qText(26, "lokal", "Die Sonnen GmbH, Hersteller von Batteriespeichern aus Wildpoldsried, hat Ende Oktober Insolvenz angemeldet. Zu welchem Konzern gehörte Sonnen von März 2019 bis August 2026?", "Shell", ["shell"], "Sonnen gehörte von März 2019 bis August 2026 zu Shell."),
      qText(27, "lokal", "In welcher Allgäuer Stadt feiert der Marvel Film „Avengers: Doomsday“ am 16.12.2026 Deutschlandpremiere, weil der Palast von Dr. Doom dem dortigen Rathaus nachempfunden ist?", "Memmingen", ["memmingen"], "Gesucht war Memmingen."),
      qText(28, "lokal", "Am Hochvogel wird von Wissenschaftlern in naher Zukunft ein riesiger Felssturz prophezeit. In welchem Jahr des letzten Jahrhunderts ereignete sich ebenfalls bereits ein gewaltiger Felssturz am Hochvogel? (+/-5 Jahre)", "1935", [], "Es zählen die Jahre 1930 bis 1940; das Ereignis war am 27.05.1935."),
      qText(29, "lokal", "Bei welchem Fußballverein wurde Dieter Frey aus Wiggensbach am 04.11.2026 Sportvorstand?", "1. FC Nürnberg", ["nürnberg", "1 fc nürnberg", "fc nürnberg", "beim 1 fc nürnberg"], "Dieter Frey wurde Sportvorstand beim 1. FC Nürnberg."),
      qText(30, "lokal", "Zu welcher Partei gehört die am 06.11.2026 nach einem halben Jahr im Amt als erste Bürgermeisterin der Stadt Sonthofen zurückgetretene Martina Neusinger?", "Freie Wähler", ["freie wähler", "die freien wähler", "freien wählern", "fw"], "Martina Neusinger gehört zu den Freien Wählern.")
    ]
  };

  const stats = {"teams": [{"name": "Trio Infanale", "score": 22, "answers": [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]}, {"name": "Die Samlanbande", "score": 20, "answers": [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1]}, {"name": "Ringos", "score": 17, "answers": [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1]}, {"name": "Die Warmduscher", "score": 17, "answers": [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1]}, {"name": "Die Schlaubergsträßler", "score": 16, "answers": [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1]}, {"name": "Blackout", "score": 16, "answers": [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1]}, {"name": "Allein unter Frauen", "score": 16, "answers": [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1]}, {"name": "(K)Iller 41", "score": 13, "answers": [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1]}, {"name": "Obstsalat", "score": 11, "answers": [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1]}, {"name": "Die Besserwisser", "score": 11, "answers": [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]}], "questionCorrect": [3, 4, 8, 8, 5, 4, 3, 2, 10, 0, 3, 4, 9, 6, 0, 6, 0, 8, 6, 10, 4, 3, 5, 9, 6, 7, 8, 1, 7, 10], "categories": [{"name": "Spaß mit Flaggen", "correct": 28, "possible": 50}, {"name": "Sozialkunde", "correct": 19, "possible": 50}, {"name": "Musiktitel – übersetzt ins Deutsche", "correct": 22, "possible": 50}, {"name": "Aktenzeichen XY", "correct": 30, "possible": 50}, {"name": "Physik", "correct": 27, "possible": 50}, {"name": "Lokales und Aktuelles aus der AZ", "correct": 33, "possible": 50}]};

  const root = document.querySelector(".quiz-app");
  const state = { index: 0, answers: {}, categoryIntroShown: {} };

  if (!root) return;
  if (root.dataset.mode === "statistics") renderStatistics();
  else renderIntro();

  function qSingle(id, category, prompt, options, correct, explanation, questionImage) {
    return {
      id,
      category,
      type: "single",
      prompt,
      options: options.map(([key, label]) => ({ key, label })),
      correct,
      explanation,
      questionImage
    };
  }

  function qMatch(id, category, prompt, items, choices, correct, explanation) {
    return {
      id,
      category,
      type: "matching",
      prompt,
      items: items.map(([key, label]) => ({ key, label })),
      choices: choices.map(([key, label]) => ({ key, label })),
      correct,
      explanation
    };
  }

  function qText(id, category, prompt, answerLabel, accepted, explanation) {
    return { id, category, type: "text", prompt, answerLabel, accepted, explanation };
  }

  function qSelfcheck(id, category, prompt, answerLabel, criteria) {
    return { id, category, type: "selfcheck", prompt, answerLabel, criteria };
  }

  function questionVisual(question, assetPrefix = "") {
    if (question.questionImage) {
      return `<img class="question-flag" src="${escapeAttr(assetPrefix + question.questionImage)}" alt="Gesuchte Flagge">`;
    }
    if (question.id !== 5) return "";
    return `<figure class="coat-of-arms">
      <img src="${escapeAttr(assetPrefix + "assets/images/bayern-wappen.png")}" alt="Bayerisches Staatswappen mit vier markierten Feldern">
      <span class="crest-a" aria-hidden="true">a</span><span class="crest-b" aria-hidden="true">b</span>
      <span class="crest-c" aria-hidden="true">c</span><span class="crest-d" aria-hidden="true">d</span>
    </figure>`;
  }

  function renderIntro() {
    state.index = 0;
    state.answers = {};
    state.categoryIntroShown = {};
    root.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <img class="logo" src="${escapeAttr(quiz.logo)}" alt="IG OMa">
          <p class="kicker">IG OMa präsentiert</p>
          <h1>${escapeHtml(quiz.title)}</h1>
          <p class="lead">${escapeHtml(quiz.description)}</p>
          <p class="intro-credit">Das Quiz wurde von der Quizgruppe „Team Dunkelkammer“ der IG OMa zusammengestellt.</p>
          <div class="actions">
            <button class="button button-primary" type="button" data-action="start">Quiz starten</button>
            <a class="button button-secondary" href="./statistik/index.html">Vor-Ort-Auswertung</a>
          </div>
          <p class="note">Deine Antworten bleiben auf deinem Gerät. Die Vor-Ort-Ergebnisse der Teams kannst du separat ansehen.</p>
          <div class="category-preview" aria-label="Themenrunden">
            ${quiz.categories.map((category) => `
              <article>
                <img src="${escapeAttr(category.image)}" alt="">
                <span>${escapeHtml(category.name)}</span>
              </article>`).join("")}
          </div>
        </div>
        <div class="hero-visual">
          <img src="${escapeAttr(quiz.hero)}" alt="75. Quiz im Bahnhof">
        </div>
      </section>`;
    root.querySelector("[data-action='start']").addEventListener("click", () => {
      renderQuestion();
      scrollToRoot();
    });
  }

  function formatStat(value) {
    return value.toLocaleString("de-DE", { maximumFractionDigits: 1 });
  }

  function teamCategoryScore(team, category) {
    return team.answers.slice(category.start - 1, category.end).reduce((sum, point) => sum + point, 0);
  }

  function rateClass(rate) {
    if (rate >= 0.7) return "rate-high";
    if (rate < 0.4) return "rate-low";
    return "rate-medium";
  }

  function renderStatistics(teamSort = "score", questionSort = "number", categoryFilter = "") {
    const teamCount = stats.teams.length;
    const scores = stats.teams.map((team) => team.score).sort((a, b) => b - a);
    const totalCorrect = stats.questionCorrect.reduce((total, correct) => total + correct, 0);
    const totalPossible = teamCount * quiz.questionCount;
    const median = (scores[Math.floor((teamCount - 1) / 2)] + scores[Math.floor(teamCount / 2)]) / 2;
    const sortCategory = quiz.categories.find((category) => category.id === teamSort);
    const sortedTeams = [...stats.teams].sort((a, b) => {
      if (teamSort === "name") return a.name.localeCompare(b.name, "de");
      if (sortCategory) return teamCategoryScore(b, sortCategory) - teamCategoryScore(a, sortCategory) || b.score - a.score;
      return b.score - a.score;
    });
    const distribution = [...new Set(scores)].map((score) => ({ score, count: scores.filter((value) => value === score).length }));
    const categories = stats.categories.map((category, index) => ({
      ...category,
      ...quiz.categories[index],
      rate: category.correct / category.possible
    })).sort((a, b) => b.rate - a.rate);
    const highest = Math.max(...stats.questionCorrect);
    const lowest = Math.min(...stats.questionCorrect);
    const questionNames = (score) => quiz.questions.filter((q) => stats.questionCorrect[q.id - 1] === score).map((q) => q.id).join(", ");
    const questionRows = quiz.questions
      .filter((question) => !categoryFilter || question.category === categoryFilter)
      .map((question) => ({ question, correct: stats.questionCorrect[question.id - 1] }))
      .sort((a, b) => {
        if (questionSort === "easy") return b.correct - a.correct;
        if (questionSort === "hard") return a.correct - b.correct;
        return a.question.id - b.question.id;
      });

    root.innerHTML = `
      <section class="result-shell statistics-page">
        <header class="result-hero">
          <p class="kicker">Vor-Ort-Auswertung</p>
          <h1>Statistik zum 75. Quiz im Bahnhof</h1>
          <p>${teamCount} Teams · ${quiz.questionCount} Fragen · ${quiz.categories.length} Kategorien</p>
          <nav class="stats-jump" aria-label="Statistikbereiche">
            <a href="#punkteverteilung">Punkteverteilung</a>
            <a href="#kategorien">Kategorien</a>
            <a href="#fragen">Fragen</a>
            <a href="#teams">Teams</a>
          </nav>
        </header>
        <section class="result-section">
          <h2>Der Quizabend in Zahlen</h2>
          <dl class="stats-overview">
            <div><dt>Durchschnitt pro Team</dt><dd>${formatStat(totalCorrect / teamCount)} / ${quiz.questionCount}</dd></div>
            <div><dt>Median der Teampunkte</dt><dd>${formatStat(median)} / ${quiz.questionCount}</dd></div>
            <div><dt>Niedrigste bis höchste Punktzahl</dt><dd>${scores.at(-1)}–${scores[0]}</dd></div>
            <div><dt>Richtige Antworten insgesamt</dt><dd>${totalCorrect} von ${totalPossible} (${formatStat(totalCorrect / totalPossible * 100)} %)</dd></div>
          </dl>
          <p><strong>Am häufigsten richtig:</strong> Nr. ${questionNames(highest)} (${highest} von ${teamCount} Teams).</p>
          <p><strong>Am seltensten richtig:</strong> Nr. ${questionNames(lowest)} (${lowest} von ${teamCount} Teams).</p>
        </section>
        <section class="result-section" id="punkteverteilung">
          <h2>Punkteverteilung</h2>
          <div class="stats-question-list">${distribution.map(({ score, count }) => `
            <div class="stats-distribution"><span>${score} Punkte</span>
              <div class="mini-bar" aria-hidden="true"><span style="width:${count / Math.max(...distribution.map((row) => row.count)) * 100}%"></span></div>
              <strong>${count} ${count === 1 ? "Team" : "Teams"}</strong>
            </div>`).join("")}</div>
        </section>
        <section class="result-section" id="kategorien">
          <h2>Kategorien im Vergleich</h2>
          <p>${escapeHtml(categories[0].name)} hatte die höchste Trefferquote (${formatStat(categories[0].rate * 100)} %).
             ${escapeHtml(categories.at(-1).name)} hatte die niedrigste (${formatStat(categories.at(-1).rate * 100)} %).</p>
          <div class="stats-category-grid">
          ${categories.map((category) => {
            const rates = stats.questionCorrect.slice(category.start - 1, category.end);
            const easiest = rates.flatMap((n, i) => n === Math.max(...rates) ? [category.start + i] : []);
            const hardest = rates.flatMap((n, i) => n === Math.min(...rates) ? [category.start + i] : []);
            return `<article class="category-result stats-category-card ${rateClass(category.rate)}">
              <h3>${escapeHtml(category.name)}</h3>
              <p>Fragen ${category.start}–${category.end} · Ø ${formatStat(category.correct / teamCount)} von ${category.end - category.start + 1} Punkten</p>
              <strong>${formatStat(category.rate * 100)} % richtig</strong>
              <div class="mini-bar" aria-hidden="true"><span style="width:${category.rate * 100}%"></span></div>
              <p>${category.correct} richtig · ${category.possible - category.correct} nicht richtig</p>
              <p>Meiste Treffer: Nr. ${easiest.join(", ")} (${Math.max(...rates)}/${teamCount})<br>Wenigste Treffer: Nr. ${hardest.join(", ")} (${Math.min(...rates)}/${teamCount})</p>
            </article>`;
          }).join("")}</div>
        </section>
        <section class="result-section" id="fragen">
          <h2>Alle ${quiz.questionCount} Fragen</h2>
          <div class="stats-filters">
            <label>Kategorie
              <select data-stats-filter>
                <option value="">Alle Kategorien</option>
                ${quiz.categories.map((category) => `<option value="${category.id}" ${category.id === categoryFilter ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("")}
              </select>
            </label>
            <label>Sortierung
              <select data-question-sort>
                <option value="number" ${questionSort === "number" ? "selected" : ""}>Nach Fragennummer</option>
                <option value="easy" ${questionSort === "easy" ? "selected" : ""}>Meiste richtige zuerst</option>
                <option value="hard" ${questionSort === "hard" ? "selected" : ""}>Meiste falsche zuerst</option>
              </select>
            </label>
          </div>
          <p class="note">${questionRows.length} Fragen angezeigt. „Nicht richtig“ umfasst alle Antworten ohne Punkt.</p>
          <div class="stats-question-list">${questionRows.map(({ question, correct }) => `
            <article class="stats-question-card ${rateClass(correct / teamCount)}">
              <h3>Frage ${question.id} · ${escapeHtml(getCategory(question.category).name)}</h3>
              <p class="stats-prompt">${escapeHtml(question.prompt)}</p>
              ${questionVisual(question, "../")}
              <p><strong>${correct} richtig</strong> · ${teamCount - correct} nicht richtig · ${formatStat(correct / teamCount * 100)} % Trefferquote</p>
              <div class="mini-bar" aria-hidden="true"><span style="width:${correct / teamCount * 100}%"></span></div>
              ${statsSolutionMarkup(question)}
            </article>`).join("")}</div>
        </section>
        <section class="result-section" id="teams">
          <h2>Teamwertung</h2>
          <div class="stats-filters"><label>Teams sortieren
            <select data-team-sort>
              <option value="score" ${teamSort === "score" ? "selected" : ""}>Gesamtpunkte</option>
              <option value="name" ${teamSort === "name" ? "selected" : ""}>Alphabetisch</option>
              ${quiz.categories.map((category) => `<option value="${category.id}" ${teamSort === category.id ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("")}
            </select>
          </label></div>
          <p class="note">Der Gesamtplatz richtet sich nach den Quizpunkten. Bei Gleichstand teilen sich Teams den Platz. Die Tabelle lässt sich horizontal scrollen.</p>
          <div class="stats-table-wrap" tabindex="0" role="region" aria-label="Teamwertung mit Kategoriepunkten"><table class="stats-table stats-team-breakdown">
            <thead><tr><th scope="col">Gesamtplatz</th><th scope="col">Team</th><th scope="col">Gesamt</th>${quiz.categories.map((category) => `<th scope="col">${escapeHtml(category.name)}</th>`).join("")}</tr></thead>
            <tbody>${sortedTeams.map((team) => `<tr><td>${scores.indexOf(team.score) + 1}</td><th scope="row">${escapeHtml(team.name)}</th><td><strong>${team.score} / ${quiz.questionCount}</strong></td>
              ${quiz.categories.map((category) => `<td>${teamCategoryScore(team, category)} / ${category.end - category.start + 1}</td>`).join("")}</tr>`).join("")}</tbody>
          </table></div>
        </section>
        <div class="result-actions"><a class="button button-primary" href="../index.html">Zum Quiz</a></div>
      </section>`;
    root.querySelector("[data-team-sort]").addEventListener("change", (event) => {
      renderStatistics(event.target.value, questionSort, categoryFilter);
      root.querySelector("[data-team-sort]").focus({ preventScroll: true });
    });
    root.querySelector("[data-question-sort]").addEventListener("change", (event) => {
      renderStatistics(teamSort, event.target.value, categoryFilter);
      root.querySelector("[data-question-sort]").focus({ preventScroll: true });
    });
    root.querySelector("[data-stats-filter]").addEventListener("change", (event) => {
      renderStatistics(teamSort, questionSort, event.target.value);
      root.querySelector("[data-stats-filter]").focus({ preventScroll: true });
    });
  }

  function renderQuestion() {
    const question = quiz.questions[state.index];
    const category = getCategory(question.category);
    if (!state.categoryIntroShown[category.id]) {
      renderCategoryIntro(category);
      return;
    }
    const answered = quiz.questions.filter((item) => answerComplete(item, state.answers[String(item.id)])).length;
    const progress = ((state.index + 1) / quiz.questionCount) * 100;
    root.innerHTML = `
      <section class="quiz-shell">
        <header class="quiz-topbar">
          <div>
            <span class="category-label">${escapeHtml(category.name)}</span>
            <span class="question-position">Frage ${question.id} von ${quiz.questionCount}</span>
          </div>
        </header>
        <div class="progress" role="progressbar" aria-label="Quizfortschritt" aria-valuemin="0" aria-valuemax="30" aria-valuenow="${state.index + 1}">
          <div class="progress-fill" style="width:${progress.toFixed(2)}%"></div>
        </div>
        <article class="question-card">
          <div class="question-heading${question.questionImage ? " has-flag" : ""}">
            <span class="question-number">${question.id}</span>
            <h2>${escapeHtml(question.prompt)}</h2>
            ${question.questionImage ? questionVisual(question) : ""}
          </div>
          ${question.id === 5 ? questionVisual(question) : ""}
          <div class="answer-area">${answerMarkup(question)}</div>
          <p class="inline-error" role="alert" hidden>Bitte beantworte diese Frage, bevor du weitergehst.</p>
        </article>
        <footer class="question-footer">
          <button class="button button-secondary" type="button" data-action="back" ${state.index === 0 ? "disabled" : ""}>Zurück</button>
          <span class="answered-count">${answered} von 30 beantwortet</span>
          <button class="button button-primary" type="button" data-action="next">${state.index === quiz.questionCount - 1 ? "Quiz auswerten" : "Weiter"}</button>
        </footer>
      </section>`;

    bindInputs(question);
    root.querySelector("[data-action='back']").addEventListener("click", () => {
      if (state.index > 0) {
        state.index -= 1;
        renderQuestion();
        scrollToRoot();
      }
    });
    root.querySelector("[data-action='next']").addEventListener("click", () => {
      const answer = state.answers[String(question.id)];
      if (!answerComplete(question, answer)) {
        root.querySelector(".inline-error").hidden = false;
        return;
      }
      if (state.index < quiz.questionCount - 1) {
        state.index += 1;
        renderQuestion();
        scrollToRoot();
        return;
      }
      renderTieBreaker();
    });
  }

  function renderTieBreaker() {
    root.innerHTML = `
      <section class="result-shell">
        <h1>Schätzfrage</h1>
        <p>Wie lang ist die Iller vom Illerursprung (= Zusammenfluss von Breitach, Stillach und Trettach) bei Oberstdorf bis zur Einmündung in die Donau bei Ulm?</p>
        <form>
          <label class="text-answer"><span>Dein Tipp in Kilometern (freiwillig)</span>
            <input name="estimate" type="number" min="0" step="any" inputmode="decimal">
          </label>
          <div class="result-actions"><button class="button button-primary" type="submit">Weiter zur Auflösung</button></div>
        </form>
      </section>`;
    root.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      openSelfcheckReview(event.currentTarget.elements.estimate.value);
    });
    scrollToRoot();
  }

  function openSelfcheckReview(estimate) {
    const question = quiz.questions.find((item) => item.type === "selfcheck");
    const answer = state.answers[question.id];
    root.innerHTML = `
      <section class="review-modal" role="dialog" aria-modal="true" aria-labelledby="review-title">
        <div class="review-modal-card">
          <p class="kicker">Manuelle Überprüfung</p>
          <h1 id="review-title">Passt deine Antwort zu Frage ${question.id}?</h1>
          <div class="answer-box"><strong>Fragestellung</strong>${escapeHtml(question.prompt)}</div>
          <div class="answer-box"><strong>Deine Antwort</strong>${escapeHtml(answer.text)}</div>
          <div class="answer-box"><strong>Bewertungsregel</strong>${escapeHtml(question.criteria)}</div>
          <p class="review-question">Passt deine Antwort sinngemäß?</p>
          <div class="review-actions">
            <button class="button button-primary" type="button" data-review="yes">Ja, richtig</button>
            <button class="button button-secondary" type="button" data-review="no">Nein, nicht richtig</button>
          </div>
        </div>
      </section>`;
    root.querySelectorAll("[data-review]").forEach((button) => {
      button.addEventListener("click", () => {
        answer.self = button.dataset.review;
        renderResult(estimate);
      });
    });
    root.querySelector("[data-review]").focus();
  }

  function renderCategoryIntro(category) {
    root.innerHTML = `
      <section class="category-intro">
        <div class="category-intro-image">
          <img src="${escapeAttr(category.image)}" alt="">
        </div>
        <div class="category-intro-copy">
          <p class="kicker">Neue Kategorie</p>
          <h1>${escapeHtml(category.name)}</h1>
          <button class="button button-primary" type="button" data-action="start-category">Weiter</button>
        </div>
      </section>`;
    root.querySelector("[data-action='start-category']").addEventListener("click", () => {
      state.categoryIntroShown[category.id] = true;
      renderQuestion();
      scrollToRoot();
    });
  }

  function answerMarkup(question) {
    const answer = state.answers[String(question.id)];
    if (question.type === "single") {
      return `<fieldset class="options"><legend class="sr-only">Antwort auswählen</legend>${question.options.map((option) => `
        <label class="option">
          <input type="radio" name="q${question.id}" value="${escapeAttr(option.key)}" ${answer === option.key ? "checked" : ""}>
          <span class="option-key" aria-hidden="true">${escapeHtml(option.key.toUpperCase())}</span>
          <span>${escapeHtml(option.label)}</span>
        </label>`).join("")}</fieldset>`;
    }
    if (question.type === "matching") {
      const selected = answer && typeof answer === "object" ? answer : {};
      return `<div class="match-list">${question.items.map((item) => `
        <label class="match-row">
          <strong>${escapeHtml(item.label)}</strong>
          <select data-match-item="${escapeAttr(item.key)}">
            <option value="">Bitte auswählen</option>
            ${question.choices.map((choice) => `<option value="${escapeAttr(choice.key)}" ${selected[item.key] === choice.key ? "selected" : ""}>${escapeHtml(choice.key)}) ${escapeHtml(choice.label)}</option>`).join("")}
          </select>
        </label>`).join("")}</div>`;
    }
    if (question.type === "selfcheck") {
      return `<label class="text-answer">
        <span>Deine Antwort</span>
        <textarea rows="3" data-self-text>${escapeHtml(answer && answer.text ? answer.text : "")}</textarea>
        <small>Die sinngemäße Bewertung erfolgt erst in der Auflösung.</small>
      </label>`;
    }
    return `<label class="text-answer">
      <span>Deine Antwort</span>
      <textarea rows="3" data-text-answer>${escapeHtml(answer || "")}</textarea>
      <small>Groß- und Kleinschreibung zählen nicht.</small>
    </label>`;
  }

  function bindInputs(question) {
    const id = String(question.id);
    if (question.type === "single") {
      root.querySelectorAll(`input[name="q${question.id}"]`).forEach((input) => {
        input.addEventListener("change", () => {
          state.answers[id] = input.value;
          hideError();
        });
      });
      return;
    }
    if (question.type === "matching") {
      root.querySelectorAll("[data-match-item]").forEach((select) => {
        select.addEventListener("change", () => {
          if (!state.answers[id] || typeof state.answers[id] !== "object") state.answers[id] = {};
          state.answers[id][select.dataset.matchItem] = select.value;
          hideError();
        });
      });
      return;
    }
    if (question.type === "selfcheck") {
      const textarea = root.querySelector("[data-self-text]");
      const ensureAnswer = () => {
        if (!state.answers[id] || typeof state.answers[id] !== "object") state.answers[id] = { text: "", self: "" };
        return state.answers[id];
      };
      if (textarea) {
        textarea.addEventListener("input", () => {
          ensureAnswer().text = textarea.value;
          hideError();
        });
      }
      return;
    }
    const input = root.querySelector("[data-text-answer]");
    if (input) {
      input.addEventListener("input", () => {
        state.answers[id] = input.value;
        hideError();
      });
    }
  }

  function answerComplete(question, answer) {
    if (!question) return false;
    if (question.type === "single") return typeof answer === "string" && answer.length > 0;
    if (question.type === "matching") {
      return answer && typeof answer === "object" && question.items.every((item) => typeof answer[item.key] === "string" && answer[item.key].length > 0);
    }
    if (question.type === "selfcheck") {
      return answer && typeof answer === "object" && typeof answer.text === "string" && answer.text.trim().length > 0;
    }
    return typeof answer === "string" && answer.trim().length > 0;
  }

  function renderResult(estimate) {
    const result = scoreQuiz();
    root.innerHTML = `
      <section class="result-shell">
        <header class="result-hero">
          <p class="kicker">Dein Ergebnis</p>
          <div class="score-ring" aria-label="${result.total} von ${result.maximum} Punkten">
            <strong>${result.total}</strong><span>/ ${result.maximum}</span>
          </div>
          <h1>${result.percent.toLocaleString("de-DE")} % richtig</h1>
          <p>${escapeHtml(resultText(result.total))}</p>
          <p class="note">Dein Ergebnis wurde nicht gespeichert.</p>
        </header>

        ${teamComparisonMarkup(result.total)}

        <section class="result-section">
          <h2>Deine Kategorien im Vergleich</h2>
          <div class="category-result-grid">
            ${result.categories.map((category) => `
              <article class="category-result">
                <span>${escapeHtml(category.name)}</span>
                <strong>${category.score} / ${category.maximum}</strong>
                <p>Vor Ort: Ø ${formatStat(category.average)} / ${category.maximum}</p>
                <div class="mini-bar"><span style="width:${category.maximum ? (category.score / category.maximum) * 100 : 0}%"></span></div>
              </article>`).join("")}
          </div>
        </section>

        <section class="result-section">
          <h2>Auflösung</h2>
          <div class="solution-list">
            ${result.details.map(solutionMarkup).join("")}
          </div>
          <p><strong>Schätzfrage zur Iller:</strong> 147 km.${estimate ? ` Dein Tipp: ${escapeHtml(estimate.replace(".", ","))} km.` : ""} Die Schätzfrage zählt nicht zu den 30 Quizpunkten.</p>
        </section>

        <div class="result-actions">
          <a class="button button-secondary" href="./statistik/index.html">Gesamte Vor-Ort-Statistik</a>
          <button class="button button-primary" type="button" data-action="restart">Quiz noch einmal spielen</button>
        </div>
      </section>`;
    root.querySelector("[data-action='restart']").addEventListener("click", () => {
      renderIntro();
      scrollToRoot();
    });
    scrollToRoot();
  }

  function teamComparisonMarkup(score) {
    const teams = [...stats.teams, { name: "Du", score, isPlayer: true }]
      .sort((a, b) => b.score - a.score || Number(Boolean(b.isPlayer)) - Number(Boolean(a.isPlayer)));
    let rank = 0;
    const rows = teams.map((team, index) => {
      if (index === 0 || teams[index - 1].score !== team.score) rank = index + 1;
      return { ...team, rank };
    });
    const player = rows.find((team) => team.isPlayer);
    const tied = stats.teams.some((team) => team.score === score);
    const average = stats.teams.reduce((sum, team) => sum + team.score, 0) / stats.teams.length;
    const difference = score - average;
    return `
      <section class="result-section" aria-labelledby="team-comparison-title">
        <h2 id="team-comparison-title">Vergleich mit den Vor-Ort-Teams</h2>
        <p>Mit <strong>${score} von ${quiz.questionCount} Punkten</strong> wärst du auf
          <strong>${tied ? "dem geteilten Platz" : "Platz"} ${player.rank} von ${teams.length}</strong> gelandet, wenn du vor Ort mitgespielt hättest.</p>
        <p>Vor Ort lag der Durchschnitt bei <strong>${formatStat(average)} Punkten</strong>.
          ${difference === 0 ? "Du liegst genau im Durchschnitt." : `Dein Ergebnis liegt ${formatStat(Math.abs(difference))} Punkte ${difference > 0 ? "darüber" : "darunter"}.`}</p>
        <div class="stats-table-wrap">
          <table class="stats-table team-comparison-table" aria-label="Punktestand mit deinem Ergebnis">
            <thead><tr><th scope="col">Platz</th><th scope="col">Team</th><th scope="col">Punkte</th></tr></thead>
            <tbody>${rows.map((team) => `
              <tr${team.isPlayer ? ' class="player-row"' : ""}>
                <td>${team.rank}</td><th scope="row">${escapeHtml(team.name)}</th><td>${team.score}</td>
              </tr>`).join("")}</tbody>
          </table>
        </div>
        <p class="note">Die Platzierung richtet sich nach den Quizpunkten. Bei Gleichstand wird der Platz geteilt.</p>
      </section>`;
  }

  function scoreQuiz() {
    const details = quiz.questions.map((question) => {
      const submitted = state.answers[String(question.id)];
      const correct = isCorrect(question, submitted);
      return {
        question,
        correct,
        submittedLabel: answerLabel(question, submitted),
        correctLabel: correctLabel(question)
      };
    });
    const total = details.filter((detail) => detail.correct).length;
    const categories = quiz.categories.map((category) => {
      const items = details.filter((detail) => detail.question.category === category.id);
      return {
        name: category.name,
        score: items.filter((item) => item.correct).length,
        average: stats.questionCorrect.slice(category.start - 1, category.end).reduce((sum, correct) => sum + correct, 0) / stats.teams.length,
        maximum: items.length
      };
    });
    return {
      total,
      maximum: quiz.questionCount,
      percent: Math.round((total / quiz.questionCount) * 100),
      categories,
      details
    };
  }

  function isCorrect(question, answer) {
    if (question.type === "single") return answer === question.correct;
    if (question.type === "matching") {
      return question.items.every((item) => answer && answer[item.key] === question.correct[item.key]);
    }
    if (question.type === "selfcheck") return answer && answer.self === "yes";
    const normalized = normalizeAnswer(answer);
    switch (question.id) {
      case 17: {
        const amount = readNumber(answer, /^(?:euro|€)?$/i, true);
        const euros = amount > 0 && amount < 10 ? amount * 1e6 : amount;
        return (euros >= 1240000 && euros <= 1440000) || (euros >= 1800000 && euros <= 2000000);
      }
      case 22: {
        const units = [
          ["ampere", "a"], ["meter", "m"], ["candela", "cd"],
          ["kilogramm", "kg"], ["mol"], ["kelvin", "k"], ["sekunde", "sekunden", "s"]
        ];
        const tokens = new Set(normalized.split(" "));
        return units.filter((aliases) => aliases.some((alias) => tokens.has(alias))).length >= 4;
      }
      case 23: {
        const speed = readNumber(answer, /^(?:km\s*\/\s*h|kmh)?$/i);
        return speed >= 1180 && speed <= 1290;
      }
      case 24: {
        const formula = String(answer).toLowerCase().replace(/\s+/g, "").replace(/[×·x⋅]/g, "*").replace(/÷/g, "/");
        const sides = formula.split("=");
        if (sides.length !== 2) return false;
        return ["r=u/i", "i=u/r", "u=r*i", "u=i*r"].some((valid) =>
          formula === valid || sides.slice().reverse().join("=") === valid
        );
      }
      case 25: {
        const value = readNumber(answer, /^(?:km|m|kilometer|meter)?$/i);
        const unit = String(answer).trim().match(/[a-z]+$/i)?.[0].toLowerCase();
        if (unit === "km" || unit === "kilometer") {
          return [1.85, 1.852].includes(Number(String(answer).trim().replace(/\s*(?:kilometer|km)$/i, "").replace(",", ".")));
        }
        if (unit === "m" || unit === "meter") return value === 1850 || value === 1852;
        return [1.85, 1.852, 1850, 1852].includes(value);
      }
      case 28: {
        const year = readNumber(answer, /^(?:n\.\s*chr\.)?$/i);
        return Number.isInteger(year) && year >= 1930 && year <= 1940;
      }
      default:
        return question.accepted.some((accepted) => normalized === normalizeAnswer(accepted));
    }
  }

  function readNumber(answer, allowedUnit, allowMillions = false) {
    const match = String(answer).trim().match(/^((?:\d{1,3}(?:[. \u202f\u00a0]\d{3})+(?:,\d+)?|\d+(?:[.,]\d+)?))\s*(.*)$/);
    if (!match) return NaN;
    const [, number, suffix] = match;
    const million = allowMillions && /^(?:mio\.?|million(?:en)?)(?:\s*(?:euro|€))?$/i.test(suffix);
    if (!million && !allowedUnit.test(suffix)) return NaN;
    const compact = number.replace(/\s/g, "");
    const value = Number(/^\d{1,3}(?:\.\d{3})+(?:,|$)/.test(compact)
      ? compact.replaceAll(".", "").replace(",", ".")
      : compact.replace(",", "."));
    return million ? value * 1e6 : value;
  }

  function answerLabel(question, answer) {
    if (question.type === "single") {
      return question.options.find((option) => option.key === answer)?.label || "Keine Antwort";
    }
    if (question.type === "matching") {
      if (!answer || typeof answer !== "object") return "Keine Antwort";
      return question.items.map((item) => {
        const choice = question.choices.find((entry) => entry.key === answer[item.key]);
        return `${item.label}: ${choice ? choice.key + ") " + choice.label : "offen"}`;
      }).join("; ");
    }
    if (question.type === "selfcheck") {
      if (!answer || typeof answer !== "object") return "Keine Antwort";
      const text = String(answer.text || "").trim();
      if (!answer.self) return text;
      const judgment = answer.self === "yes" ? "als passend gewertet" : "als nicht passend gewertet";
      return `${text} (${judgment})`;
    }
    return String(answer || "Keine Antwort").trim();
  }

  function correctLabel(question) {
    if (question.type === "single") {
      return question.options.find((option) => option.key === question.correct)?.label || "";
    }
    if (question.type === "matching") {
      return question.items.map((item) => {
        const choice = question.choices.find((entry) => entry.key === question.correct[item.key]);
        return `${item.label}: ${choice ? choice.key + ") " + choice.label : ""}`;
      }).join("; ");
    }
    return question.answerLabel;
  }

  function statsSolutionMarkup(question) {
    const explanation = question.criteria || question.explanation;
    return `
      <details class="stats-solution">
        <summary>Lösung zu Frage ${question.id} anzeigen</summary>
        <div>
          <p><strong>${escapeHtml(correctLabel(question))}</strong></p>
          ${explanation ? `<p>${escapeHtml(explanation)}</p>` : ""}
          ${solutionVisual(question, "../")}
        </div>
      </details>`;
  }

  function solutionVisual(question, assetPrefix = "") {
    if (question.id !== 24) return "";
    return `<p>Merkspruch aus der PowerPoint: Uri.</p><img class="solution-crest" src="${escapeAttr(assetPrefix + "assets/images/waltenhofen-wappen.png")}" alt="Wappen auf der Lösungsfolie">`;
  }

  function solutionMarkup(detail) {
    return `
      <details class="solution ${detail.correct ? "is-correct" : "is-wrong"}">
        <summary><span>${detail.correct ? "Richtig" : "Falsch"}</span> Frage ${detail.question.id}: ${escapeHtml(detail.question.prompt)}</summary>
        <div class="solution-body">
          ${questionVisual(detail.question)}
          <div class="solution-columns">
            <div class="answer-box"><strong>Deine Antwort</strong>${escapeHtml(detail.submittedLabel)}</div>
            <div class="answer-box"><strong>Richtige Antwort</strong>${escapeHtml(detail.correctLabel)}</div>
          </div>
          ${detail.question.type === "selfcheck" ? `<div class="answer-box resolution-selfcheck"><strong>Bewertungsregel</strong><p>${escapeHtml(detail.question.criteria)}</p></div>` : ""}
          ${detail.question.explanation ? `<p>${escapeHtml(detail.question.explanation)}</p>` : ""}
          <p class="note">Vor Ort richtig: ${stats.questionCorrect[detail.question.id - 1]} von ${stats.teams.length} Teams.</p>
          ${solutionVisual(detail.question)}
        </div>
      </details>`;
  }

  function resultText(score) {
    if (score >= 26) return "Stark gespielt. Das wäre ein sehr souveräner Quizabend gewesen.";
    if (score >= 20) return "Sehr ordentlich. Da war viel Bahnhof-Quiz-Gefühl dabei.";
    if (score >= 14) return "Solide Runde. Ein paar Stolperfragen waren diesmal gut versteckt.";
    return "Da waren einige fiese Fragen dabei. Beim zweiten Durchgang sieht die Welt bestimmt schon anders aus.";
  }

  function getCategory(id) {
    return quiz.categories.find((category) => category.id === id) || quiz.categories[0];
  }

  function hideError() {
    const error = root.querySelector(".inline-error");
    if (error) error.hidden = true;
  }

  function normalizeAnswer(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function scrollToRoot() {
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
