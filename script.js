let mode = "decimal";
let texteVisible = true;

// --- Fonctions de conversion ---
function enHebreux(n){ const lettres={1:'א',2:'ב',3:'ג',4:'ד',5:'ה',6:'ו',7:'ז',8:'ח',9:'ט',10:'י',20:'כ',30:'ל',40:'מ',50:'נ'}; if(n===0)return 'אפס'; if(lettres[n])return lettres[n]; const d=Math.floor(n/10)*10,u=n%10; return (lettres[d]||'')+(lettres[u]||''); }
function enMorse(n){ const morse={'0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'}; return String(n).split('').map(c=>morse[c]).join(' '); }
function enHexa(n){ return n.toString(16).toUpperCase(); }
function enRomains(n){ const romains=[["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]]; let res=""; for(let [sym,val] of romains){ while(n>=val){ res+=sym; n-=val; } } return res; }
function enBinaire(n){ return n.toString(2).padStart(6,'0'); }
function enReverse(n){ n = Number(n) % 60; return 60 - n; }
function enMotivation(n){
    const secondesMotiv = [
      "0 — Nouveau round, montre-leur qui c’est le boss.",
      "1 — Une seconde passée, t’es déjà plus fort qu’avant.",
      "2 — Continue, t’es lancé là.",
      "3 — À trois secondes t’es officiellement échauffé.",
      "4 — Ça avance, même si toi t’es pas prêt.",
      "5 — Cinq secondes, t’es déjà un survivant.",
      "6 — Continue, t’es pas venu pour rien.",
      "7 — Sept secondes, ça sent la réussite (ou le café).",
      "8 — Tranquille, tu gères.",
      "9 — Presque dix, t’es un champion de l’attente.",
      "10 — Dix secondes, t’es en mode pro.",
      "11 — On dirait que tu tiens le rythme.",
      "12 — Douze secondes, la légende grandit.",
      "13 — Treize, si t’as pas de chance, compense par du style.",
      "14 — Continue, c’est beau à voir (enfin… presque).",
      "15 — Un quart de minute, solide.",
      "16 — Sixteen vibes, ça roule.",
      "17 — Tu tiens toujours ? Respect.",
      "18 — Ça avance même si toi t’as toujours rien compris.",
      "19 — Le compteur t’aime bien, apparemment.",
      "20 — Vingt secondes, t’es officiellement engagé.",
      "21 — Reste focus, ça va le faire.",
      "22 — T’es constant, c’est plus que beaucoup de gens.",
      "23 — Tu progresses même sans t’en rendre compte.",
      "24 — T’es stable, presque pro.",
      "25 — Une seconde de plus, easy.",
      "26 — Continue, t’es sur ton flow.",
      "27 — T’es encore là, incroyable.",
      "28 — Tu tiens mieux que ma connexion Wi-Fi.",
      "29 — Demi-tour bientôt, courage.",
      "30 — La moitié, t’es un monstre.",
      "31 — Encore un pas, tranquille.",
      "32 — T’apprends quelque chose ? Non ? Moi non plus.",
      "33 — Trente-trois, le compteur te respecte.",
      "34 — Toujours debout, même la seconde en revient pas.",
      "35 — T’es officiellement têtu, bravo.",
      "36 — Ça avance bien pour quelqu’un qui fait rien.",
      "37 — Tu brilles (un peu… dans le noir).",
      "38 — On approche, t’inquiète.",
      "39 — Tu tiens plus longtemps que mes résolutions.",
      "40 — Quarante, là on parle.",
      "41 — Continue, t’as le mojo.",
      "42 — La réponse à la vie, bravo.",
      "43 — Encore un petit effort.",
      "44 — Tu mérites un cookie (virtuel).",
      "45 — T’as fait le plus dur.",
      "46 — Fin de course bientôt, lâche pas.",
      "47 — Tu tiens depuis 47 secondes, qui l’aurait cru ?",
      "48 — Allez, dernière énergie.",
      "49 — Plus que quelques secondes, champion.",
      "50 — Cinquante, t’es une machine.",
      "51 — On lâche rien maintenant.",
      "52 — Presque fini, respire.",
      "53 — Ça sent la victoire.",
      "54 — Accroche-toi, c’est bientôt fini.",
      "55 — T’es trop proche pour abandonner.",
      "56 — Dernier sprint.",
      "57 — Encore un peu, juste un peu.",
      "58 — T’as presque gagné.",
      "59 — Bravo, la boucle va reset, comme ta motivation."
    ];
    return secondesMotiv[n % 60] || '';
}
function enHeureSecondes() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
function enMath(seconde) {
    const calculs = [];
    const ops = ["+", "-", "*", "/"];

    for (let i = 0; i < 1; i++) {
        const op = ops[Math.floor(Math.random() * ops.length)];
        let a, b;

        switch(op) {
            case "+":
                b = Math.floor(Math.random() * (seconde + 1)); // b ≤ seconde
                a = seconde - b;
                break;
            case "-":
                b = Math.floor(Math.random() * 60); // b < 60
                a = seconde + b;
                break;
            case "*":
                // chercher un diviseur de seconde pour que le résultat soit entier
                let divisors = [];
                for (let d = 1; d <= 10; d++) {
                    if (seconde % d === 0) divisors.push(d);
                }
                b = divisors[Math.floor(Math.random() * divisors.length)];
                a = seconde / b;
                break;
            case "/":
                b = Math.floor(Math.random() * 10) + 1; // éviter 0
                a = seconde * b;
                break;
        }

        calculs.push(`${a} ${op} ${b}`);
    }

    return calculs.join("\n");
}







// --- Affichage ---
function afficher() {
    const affichageEl = document.getElementById("affichage");
    const prefix = document.getElementById("prefix");
    const suffix = document.getElementById("suffix");
    if (!affichageEl || !suffix) return;

    let val;

    // --- Choix du mode ---
    if(mode==="decimal") val = secondes;
    else if(mode==="hebreux") val = enHebreux(secondes);
    else if(mode==="morse") val = enMorse(secondes);
    else if(mode==="hexa") val = enHexa(secondes);
    else if(mode==="romain") val = enRomains(secondes);
    else if(mode==="binaire") val = enBinaire(secondes);
    else if(mode==="reverse") val = enReverse(secondes);
    else if(mode==="motivation") val = enMotivation(secondes);
    else if(mode==="heure") val = enHeureSecondes();
    else if(mode==="math") val = enMath(secondes);

    // --- Affichage selon le mode ---
    if(mode === "motivation") {
        if(prefix) prefix.style.display = "none";
        if(suffix) suffix.style.display = "none";
        affichageEl.textContent = val;
        affichageEl.style.whiteSpace = "nowrap";
        document.getElementById("horloge").style.fontSize = "2vw";
    } 
    else if(mode === "heure") {
        affichageEl.textContent = val;
        affichageEl.style.whiteSpace = "normal";
        if(prefix) prefix.style.display = texteVisible ? "inline" : "none";
        if(suffix){
            suffix.textContent = " secondes aujourd'hui";
            suffix.style.display = texteVisible ? "inline" : "none";
        }
        document.getElementById("horloge").style.fontSize = "4em";
    }
    else {
        affichageEl.textContent = val;
        affichageEl.style.whiteSpace = "normal";
        if(prefix) prefix.style.display = texteVisible ? "inline" : "none";
        if(suffix) {
            suffix.textContent = " secondes";
            suffix.style.display = texteVisible ? "inline" : "none";
        }
        document.getElementById("horloge").style.fontSize = "4em";
    }
}



// --- Changer le mode ---
function changerMode(nouveauMode) {
    mode = nouveauMode;

    // --- Gestion de la barre de progression ---
    const barreContainer = document.getElementById("barreProgressContainer");
    if(barreContainer){
        // Afficher uniquement si mode "barre"
        barreContainer.style.display = (mode === "barre") ? "inline-block" : "none";
    }

    // --- Gestion de la petite horloge ---
    const horlogeContainer = document.getElementById("horlogeContainer");
    if(horlogeContainer){
        horlogeContainer.style.display = (mode === "heure") ? "block" : "none";
    }

    // --- Gestion du texte et suffixe ---
    const affichageEl = document.getElementById("affichage");
    const suffix = document.getElementById("suffix");
    if(mode === "motivation" || mode === "barre" || mode === "heure"){
        // cacher prefix/suffix si besoin
        document.getElementById("prefix").style.display = "inline";
        affichageEl.style.display = (mode === "barre") ? "inline" : "inline-block";
        suffix.style.display = (mode === "barre") ? "inline" : "inline-block";
    } else {
        document.getElementById("prefix").style.display = "inline";
        affichageEl.style.display = "inline";
        suffix.style.display = "inline";
    }

    // --- Mise à jour de l'affichage principal ---
    afficher(); // ta fonction existante pour afficher les secondes, le mode math, etc.

    // --- Fermer le menu burger si ouvert ---
    document.body.classList.remove("open");
}




// --- Slider texte ---
const toggle = document.getElementById("toggleText");
if(toggle){
    toggle.addEventListener("change", function(){
        texteVisible = this.checked;
        afficher();
    });
}

// --- Menu burger ---
function toggleMenu(){ document.body.classList.toggle("open"); }

// --- Mise à jour chaque seconde ---
setInterval(()=>{ 
    secondes = new Date().getSeconds(); // seconde actuelle
    afficher();

    // Feux d'artifice à 0 secondes, 20% chance
    if(secondes === 0 && Math.random() < 1){
        let nbFeux = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        for(let i = 0; i < nbFeux; i++){ 
            feuArtifice();
        } 
    }
},1000);

// --- Canvas feux d’artifice ---
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas ? canvas.getContext("2d", {alpha:true}) : null;

function resizeCanvas(){
    if(!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let fireworks = [];
function feuArtifice(){
    if(!canvas) return;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ["#ff0043","#14fc56","#1e90ff","#f4f142","#ff00ff"];

    let particles = [];
    for(let i=0;i<50;i++){
        particles.push({
            x:x, y:y,
            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,
            color:colors[Math.floor(Math.random()*colors.length)],
            alpha:1
        });
    }
    fireworks.push(particles);
}

function animate(){
    if(!ctx||!canvas){ requestAnimationFrame(animate); return; }
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let f=fireworks.length-1; f>=0; f--){
        const particles = fireworks[f];
        for(let i=particles.length-1;i>=0;i--){
            const p = particles[i];
            if(p.alpha <=0){ particles.splice(i,1); continue; }
            ctx.globalAlpha=p.alpha;
            ctx.fillStyle=p.color;
            ctx.beginPath();
            ctx.arc(p.x,p.y,3,0,Math.PI*2);
            ctx.fill();
            p.x+=p.dx;
            p.y+=p.dy;
            p.dy+=0.05;
            p.alpha-=0.03;
        }
        if(particles.length===0) fireworks.splice(f,1);
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(animate);
}

animate();

// --- Initialisation ---
afficher();
