<?php
// --- Fonctions PHP inchangées ---
function enHebreux($nombre) { /* ... */ }
function enMorse($nombre) { /* ... */ }
function enChiffresRomains($nombre) { /* ... */ }
$secondes = intval(date("s"));
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Secondes</title>
<link rel="stylesheet" href="style.css">
<link rel="shortcut icon" href="./img/site-icon.ico">
</head>
<body>
<canvas id="fireworksCanvas"></canvas>
<div class="menu-btn" onclick="toggleMenu()">
    <div></div><div></div><div></div>
</div>
<div id="menu">
    <button onclick="changerMode('decimal')">Décimal</button>
    <button onclick="changerMode('hebreux')">Hébreu</button>
    <button onclick="changerMode('morse')">Morse</button>
    <button onclick="changerMode('hexa')">Hexa</button>
    <button onclick="changerMode('romain')">Romain</button>
    <button onclick="changerMode('binaire')">Binaire</button>
    <button onclick="changerMode('reverse')">Reverse</button>
    <button onclick="changerMode('motivation')">Motivation</button>
    <button onclick="changerMode('heure')">Heure actuelle</button>
    <button onclick="changerMode('math')">Mode Math</button>
    
    
    




    <!-- Slider pour masquer/afficher le texte -->
	<div class="switch-container">
    <div class="switch-text-container">
        <span class="switch-title">Mode difficile</span>
    </div>
    <label class="switch">
        <input type="checkbox" id="toggleText" checked>
        <span class="slider"></span>
    </label>
</div>
</div>


</div>

<h1 id="horloge">
    <span id="prefix">Il est: </span>
    <div id="affichage"></div>
    <span id="suffix"> secondes</span>
</h1>
</div>


<script>let secondes = <?php echo $secondes; ?>;</script>
<script src="script.js"></script>
</body>
</html>
