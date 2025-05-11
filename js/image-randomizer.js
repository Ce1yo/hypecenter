// Liste des images disponibles dans le dossier hypecenter
const images = [
    'Adidas-Foam-RNNR-Onyx-1.png.webp',
    'Adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Wethenew-1.png.webp',
    'Adidas-Yeezy-Slide-Onyx-Wethenew-1_1.png.webp',
    'Air-Jordan-4-Black-Cat-1_1.png.webp',
    'Air-Jordan-4-Retro-Military-Blue.webp.png',
    'AirJordan3RetroSPJBalvin2.png.webp',
    'AirJordan4MidnightNavy.png.webp',
    'Nike-Air-Force-1-Louis-Vuitton-Blue-1.png.webp',
    'Nike-SB-Dunk-Low-Yuto-Horigome-Asparagus-1.webp.png',
    'Nike-dunk-low-valentines-day-2022-DQ9324-600-1.png.webp',
    'Off-WhiteAirForce1MidSPPineGreen.png.webp',
    'Wethenew-Sneakers-France-Nike-Air-Presto-Off-White-The-Ten-White-1.png.webp',
    'Yeezy-Boost-350-v2-Dazzling-Blue-Wethenew-1_1.png.webp',
    'YeezyBoost350V2Slate.png.webp',
    'adidas-samba-nylon-wales-bonner-core-black4.png.webp',
    'adidas-samba-nylon-wales-bonner-cream-white3.png.webp',
    'adidas-samba-nylon-wales-bonner-desert-white7.webp.png',
    'adidas-samba-nylon-wales-bonner-fox-brown4.png.webp',
    'adidas-samba-nylon-wales-bonner-wonder-clay-royal4.webp.png',
    'adidas-samba-wales-bonner-ecrtin-brown-3.png.webp',
    'adidas-samba-wales-bonner-silver-2.png.webp',
    'adidas-samba-wales-bonner-studded-pack-black-1.webp.png',
    'adidas-yeezy-450-resin-wethenew-1.png.webp',
    'adidas-yeezy-700-Hi-Res-Blue-wethenew-1_1.png.webp',
    'adidas-yeezy-foam-rnnr-sulfur-wethenew-1_1.png.webp',
    'adidas-yeezy-slide-azure-1.png.webp',
    'adidas-yeezy-slide-resin-restock-pair-3.png.webp',
    'air-force-1-low-off-white-mca-university-blue-664328.png.webp',
    'air-jordan-1-low-travis-scott-fragment-420378.png.webp',
    'air-jordan-1-retro-high-off-white-chicago-the-ten-469946.png.webp',
    'air-jordan-1-retro-high-off-white-nrg-131445.png.webp',
    'air-jordan-1-retro-high-off-white-university-blue-196394.png.webp',
    'air-jordan-1-retro-high-travis-scott-cactus-jack-522008.png.webp',
    'air-jordan-1-retro-low-og-sp-travis-scott-canary.webp.png',
    'air-jordan-4-infrared-DH6927-061-wethenew-1.png.webp',
    'air-jordan-4-military-black-1_d333250f-2119-440a-b14b-48876e4b271b.png.webp',
    'air-jordan-4-retro-fire-red-2020-193982.png.webp',
    'air-jordan-4-retro-off-white-sail-838103.png.webp',
    'air-jordan-4-retro-red-thunder-14164-2.png.webp',
    'air-jordan-4-retro-union-off-noir-526698.png.webp',
    'air-jordan-4-retro-university-blue-463244.png.webp',
    'air-jordan-4-shimmer-238138.png.webp',
    'air-jordan-4-vivid-sulfur3.webp.png',
    'air-jordan-6-travis-scott-medium-olive-138778.png.webp',
    'air-jordan-jumpman-jack-tr-travis-scott-sail12.webp.png',
    'air-rubber-dunk-off-white-unc-788870-1.png.webp',
    'air-rubber-dunk-off-white-unc-788870.png.webp',
    'ayeezy-700-v3-fade-salt-1.png.webp',
    'dunk-low-off-white-lot-32-249812.png.webp',
    'dunk-low-off-white-pine-green-266461.png.webp',
    'jordan-air-jordan-3-j-balvin-rio.webp.png',
    'nike-air-max-1-travis-scott-cactus-jack-baroque-brown-DO9392-200-4.png.webp',
    'nike-dunk-low-off-white-lot-26-DM1602-116-4.png.webp',
    'nike-dunk-low-off-white-lot-50-4.png.webp',
    'nike-nike-dunk-low-off-white-lot-24_WTN1.png.webp',
    'nike-sb-air-jordan-4-pine-green-1.png.webp',
    'nike-sb-dunk-low-futura-laboratories-bleached-aqua4.webp.png',
    'nike-sb-dunk-low-pro-qs-fly-streetwear2.png.webp',
    'nike-sb-dunk-low-run-the-jewels-1.png.webp',
    'palm-angels-chemise-manche-courte-coton-blanc-logo-incurve-dos-noir.jpg.webp',
    'palm-angels-pantalon-de-jogging-nylon-vert-logo-blanc-bande-beige-.jpg.webp',
    'palm-angels-veste-de-survetement-zippee-col-montant-nylon-vert-logo-blanc-bande-beige.jpg.webp',
    'palm-angels-veste-zippee-noir-broderie-logo-bande-blanche.jpg.webp',
    'sb-dunk-low-parra-2021-912058.png.webp',
    'sb-dunk-low-supreme-rammellzee1.png.webp',
    'sb-dunk-low-travis-scott-888559.png.webp',
    'stone-island-blouson-coupe-vent-a-capuche-nylon-reps-deperlant-gris-.jpg.webp',
    'stone-island-sweat-shirt-a-capuche-cardigan-zippe-coton-molletonne-bleu-marine.jpg.webp',
    'stone-island-sweat-shirt-a-capuche-coton-molleton-noir.jpg.webp',
    'stone-island-sweat-shirt-a-capuche-coton-molleton-violet.jpg.webp',
    'stone-island-sweat-shirt-a-capuche-coton-orange-hoodie-compass.jpg.webp',
    'stone-island-sweat-shirt-a-capuche-hoodie-coton-molleton-gris-perle.jpg.webp',
    'stone-island-sweat-shirt-ras-du-cou-coton-molletonne-cotele-beige.jpg.webp',
    'stone-island-sweat-shirt-zippe-a-capuche-coton-molleton-blanc.jpg.webp',
    'stone-island-sweat-shirt-zippe-capuche-molleton-coton-flamme-bleu-mer.jpg.webp',
    'stone-island-sweat-shirt-zippe-capuche-molleton-coton-flamme-gris-anthracite.jpg.webp',
    'travis_scott_air_jordan_1_low_reverse_mocha_1.png.webp',
    'triple-s-black-red-281940.png.webp',
    'triple-s-triple-black-278615.png.webp',
    'yeezy-700-bright-blue-889546.png.webp',
    'yeezy-700-salt-113471.png.webp',
    'yeezy-700-v3-alvah-656499.png.webp',
    'yeezy-700-v3-azael-583213.png.webp',
    'yeezy-700-wave-runner-solid-grey-101579.png.webp',
    'yeezy-boost-350-v2-blue-tint-175876.png.webp',
    'yeezy-boost-350-v2-zebra-504922.png.webp',
    'yeezy-foam-rnnr-sand-671664.png.webp'
];

// Fonction pour mélanger aléatoirement un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour remplacer les images
function randomizeImages() {
    console.log('Début de randomizeImages');
    
    // Mélanger le tableau d'images
    const shuffledImages = shuffleArray([...images]);
    console.log('Images mélangées:', shuffledImages);

    // Sélectionner toutes les images
    const allImages = document.getElementsByTagName('img');
    console.log('Nombre total d\'images trouvées:', allImages.length);
    
    // Convertir la collection en tableau pour pouvoir utiliser forEach
    Array.from(allImages).forEach((img, index) => {
        // Vérifier si l'image n'est pas une icône ou une image de favicon
        if (!img.src.includes('favicon') && !img.src.includes('icon')) {
            const imageIndex = index % shuffledImages.length; // Utiliser le modulo pour boucler sur les images
            const newSrc = `/images/hypecenter/${shuffledImages[imageIndex]}`;
            console.log(`Remplacement de l'image ${index + 1}:`, newSrc);
            console.log('Ancienne source:', img.src);
            img.src = newSrc;
            img.alt = shuffledImages[imageIndex].split('.')[0];
        }
    });

    console.log('Fin de randomizeImages');
}

// Fonction pour attendre que le DOM soit chargé
function waitForDOM() {
    return new Promise((resolve) => {
        // Attendre un peu que le DOM soit stable
        setTimeout(() => {
            const images = document.querySelectorAll('.g-flow__card img, .g-flow__item img');
            console.log('Nombre total d\'images trouvées:', images.length);

            // Si aucune image n'est trouvée, réessayer après un court délai
            if (images.length === 0) {
                console.log('Aucune image trouvée, nouvelle tentative...');
                setTimeout(waitForDOM, 500);
                return;
            }

            resolve();
        }, 500);
    });
}

// Exécuter la fonction quand le document est chargé
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Document chargé, attente du DOM...');
    await waitForDOM();
    console.log('DOM chargé, remplacement des images...');
    randomizeImages();
});

