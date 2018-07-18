/*
*
*  On crée un variable avec le nom de la Ville
*/

var strasbourg=[48.57340529999999,7.752111300000024];

/*
*  On fait la création de la MAP
* avec la variable "Strasbourg" on a donne
* les coordonnées du centre de la carte
* qu'aurait pu être un endroit à proximité de Strasbourg.
*
* On crée une variable qu'on l'appele "L"
*  qui possède un méthode 'MAP' où nous
*  envoyons une variable 'map'. Au même temps,
*  on demande qu'il s'affiche la Latitude et
*  la Longitude, ensuite le niveau de ZOOM
*
*/
var map=L.map('map').setView(strasbourg, 7);


/*
 * On fait la Création de la Calque image, en utilisant d'autres sources.
 * car on a besoin d'une carte.
 * Dans la source on trouve une infinité des cartes, par notre exercice
 * on a pris celle qui ressemble la plus similar à celle de Google Maps.
 * Malheureusement, la carte est très lourde, avec une vitesse de
 * téléchargement lente, c'est penible l'affichage.
 */

L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',{
    maxZoom:20
    }).addTo(map);


/*
* On crée notre ballon.
* on met en commentaire la méthode 'ombre'
* parce que dans notre exercice on n'a pas un fichier pour l'ombre.
*/

var PinIcon = L.Icon.extend({
    options: {
        //shadowUrl: '-shadow.png',
        iconSize:     [38, 40],  // la taille de l'icon, dans notre cas c'est le ballon
        shadowSize:   [50, 64],  // la taille de l'ombre. On l'a désactivé car on n'a pas d'un fichier pour l'ombre.
        iconAnchor:   [10, 45],  // Le point où on montre le ballon (icon)
        shadowAnchor: [4, 62],   // point pour l'ombre, on n'a pas de l'ombre
        popupAnchor:  [-3, -76]  // l'endroit où sort la description du ballon (icon)
    }
});


/*
*On crée les ballon avec des differentes couleurs.
*Les differentes couleurs montraint la taille de la ville
*où se trouve le centre de Formation.
*/

var redIcon = new PinIcon({iconUrl: 'red-pin-md.png'}),
    pinkIcon = new PinIcon({iconUrl: 'pink-pin-md.png'}),
    greenIcon = new PinIcon({iconUrl: 'green-pin-md.png'}),
    orangeIcon = new PinIcon({iconUrl: 'orange-pin-md.png'});


/*
*On ajoute les TROIS villes plus grandes avec la couleur orange
*juste pour montrer la taille de centre de Formation par rapport
*aux autres qui sont d'une taille plus moderée.
*/

L.marker([49.1065237, 6.2334335000000465], {icon: orangeIcon}).addTo(map).bindPopup("<h3>Metz</h3>");
L.marker([48.7050197, 6.14384199999995], {icon: orangeIcon}).addTo(map).bindPopup("<h3>Nancy</h3>");
L.marker([48.557575, 7.747591100000022], {icon: orangeIcon}).addTo(map).bindPopup("<h3>Strasbourg</h3>");


/*
*Les centres de taille modérée sont affiches avec un ballon de la
*couleur rouge.
*/

L.marker([47.7430065, 7.293399000000022], {icon: redIcon}).addTo(map).bindPopup("<h4>Mulhouse</h4>");
L.marker([48.8012197, 7.773465100000067], {icon: redIcon}).addTo(map).bindPopup("<h4>Haguenau</h4>");


/*
*Les centres de taille plus modeste sont affiches avec un ballon de la
*couleur verte.
*/
L.marker([48.74384799999999, 7.368093000000044], {icon: greenIcon}).addTo(map).bindPopup("<h5>Saverne</h5>");
L.marker([48.2597372, 7.45523060000005], {icon: greenIcon}).addTo(map).bindPopup("<h5>Sélestat</h5>");
L.marker([48.07554559999999, 7.344609999999989], {icon: greenIcon}).addTo(map).bindPopup("<h5>Colmar</h5>");



L.icon = function (options) {
    return new L.Icon(options);
};
