const spaces = [
  {
    title: "The Mice Galaxies",
    href: "the-mice-galaxies",
    note: "The Mice Galaxies (NGC 4676) are a pair of colliding spiral galaxies in the Coma Berenices constellation, showcasing tidal tails due to their gravitational interaction.",
    description: `The Mice Galaxies will eventually merge into a single galaxy. 
    They’re located about 300 million light-years away in the constellation Coma Berenices. In this data sonification, 
    brightness is represented with volume and pitch – brighter light is louder and lower pitched. 
    The vertical position of objects in the image is used to control the pitch of sustained musical strings, 
    and cymbals swell following the brightness of the galaxy cores. `,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Merging_galaxies_NGC_4676_%28captured_by_the_Hubble_Space_Telescope%29.jpg/1200px-Merging_galaxies_NGC_4676_%28captured_by_the_Hubble_Space_Telescope%29.jpg",
  },



  {
    title: "Arp 140",
    href: "arp-140",
    note: "Arp 140 is an interacting galaxy pair consisting of a distorted spiral galaxy and an elliptical galaxy, showcasing tidal interactions and star formation activity.",
    description: `This data sonification of Arp 140 shows a pair of interacting galaxies. 
    The leftmost galaxy is a barred spiral galaxy known as NGC 275, and the right-side galaxy is a lenticular galaxy called 
    NGC 274. In barred spiral galaxies, a bar of stars runs through the central bulge of the galaxy 
    (seen here as a bright-white, vertical haze in NGC 275).`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Hubble_Space_Telecope_image_of_galaxy_group_ARP_140.jpg/1200px-Hubble_Space_Telecope_image_of_galaxy_group_ARP_140.jpg",
  },



  {
    title: "V838 Monocerotis",
    href: "v838-monocerotis",
    note: "V838 Monocerotis is a red variable star that underwent a sudden and dramatic outburst in 2002, producing a spectacular light echo in the surrounding interstellar dust.",
    description: `This data sonification of the star V838 Monocerotis, or V838 Mon, shows two Hubble images taken almost seven months 
    apart. A pulse of light from the central star illuminates clouds of dust and gas surrounding V838 Mon. This star is located 
    about 20,000 light-years away, at the outer edge of our Milky Way Galaxy. Brightness is mapped to
    pitch and volume, and the surrounding stars are pitched to musical notes.`,
    image: "https://science.nasa.gov/wp-content/uploads/2023/07/37596697535-fc1b87bf42-o.jpg",
  },



  {
    title: "RS Puppis",
    href: "rs-puppis",
    note: "RS Puppis is a luminous Cepheid variable star, known for its rhythmic brightness variations and a striking light echo caused by surrounding interstellar dust.",
    description: `RS Puppis is a glittering star 200 times larger than our Sun and wreathed with dust reflecting starlight. 
    Located about 6,500 light-years away, this star rhythmically brightens and dims over a six-week cycle. Pitch is assigned based on 
    direction from the center; as the circle travels inward, points at the top of the circle are mapped to higher notes and points 
    near the bottom are mapped to lower notes.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Heic1323a_-1243686232.jpg"
  },



  {
    title: "Pismis 24",
    href: "pismis-24",
    note: "Pismis 24 is a young star cluster in the Carina constellation, home to some of the most massive and luminous stars known, including Pismis 24-1.",
    description: `Pismis 24 is a stunning star cluster that lies within the nebula NGC 6357, which resides about 8,000 light-years away. 
    In this sonification of the Hubble image, a top-down scan maps brightness to volume and pitch for both the stars and nebula. 
    The stars are assigned to musical pitches played on a classical guitar (brighter stars are louder and higher pitched), and the 
    nebula uses a continuous range of frequencies (brighter regions are louder and higher pitched).`,
    image: "https://cdn.sci.esa.int/documents/34247/35306/1567218228988-heic0619a-wallpaper.jpg/5b7e0b6c-236e-e18e-5d20-c1a9bbabc2d4?version=1.0&t=1567218230689",
  },



  {
    title: "NGC 1300",
    href: "ngc-1300",
    note: "NGC 1300 is a grand design barred spiral galaxy in the Eridanus constellation, known for its prominent central bar and well-defined spiral arms.",
    description: `The majestic barred spiral galaxy NGC 1300’s arms hold blue clusters of young stars, pink clouds of star formation, 
    and dark lanes of dust. NGC 1300 is considered to be prototypical of barred spiral galaxies. Barred spirals differ from normal 
    spiral galaxies in that the arms of the galaxy do not spiral all the way into the center, but are connected to the two ends of a 
    straight bar of stars containing the nucleus at its center. To represent this image with sound, louder volume is assigned to brighter 
    light. Light farther from the center is pitched higher as a counterclockwise radar scans across the galaxy. NGC 1300 resides nearly 
    70 million light-years away in the constellation Eridanus.`,
    image: "https://stsci-opo.org/STScI-01F7PFFTGDHN8S880EA3PGFYQ2.jpg",
  },



  {
    title: "Black Hole at M87",
    href: "black-hole",
    note: "The black hole at M87, known as M87*, is a supermassive black hole at the center of the galaxy Messier 87, famously imaged by the Event Horizon Telescope in 2019 as the first direct image of a black hole's event horizon.",
    description: `This sonification does not feature the EHT data, but rather looks at data from other telescopes that observed M87 on 
    much wider scales at roughly the same time. This image of a jet emerging from the nucleus of M87 contains three panels that feature: 
    X-rays from the Chandra X-ray Observatory, visible light from Hubble, and radio waves from the Atacama Large Millimeter Array in 
    Chile. The brightest region of the image is where the black hole is found, and the structure ejecting from it is the jet, produced 
    by material falling onto the black hole.`,
    image: "https://cdn.britannica.com/26/205226-050-B2621B00/Black-hole-M87-centre-evidence-supermassive-black.jpg",
  },



  {
    title: "NGC 1569",
    href: "ngc-1569",
    note: "NGC 1569 is a dwarf irregular galaxy in the Camelopardalis constellation, known for its intense starburst activity and massive star clusters, likely triggered by past interactions.",
    description: `This starburst galaxy creates stars at a rate 100 times faster than in our own galaxy, the Milky Way! Brighter 
    light is higher pitched and louder. The three color channels used to process this image are each given their own pitch range, with 
    red representing lower pitches, green in medium pitches, and blue in high pitches.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Starburst_in_a_Dwarf_Irregular_Galaxy.jpg/1200px-Starburst_in_a_Dwarf_Irregular_Galaxy.jpg",
  },



  {
    title: "Hoag's Object",
    href: "hoags-object",
    note: "Hoag's Object is a rare ring galaxy in the Serpens constellation, characterized by a nearly perfect circular ring of young, hot blue stars surrounding an older yellow core.",
    description: `Stretching over 100,000 light-years across, the galaxy dubbed Hoag’s Object is slightly larger than our own home galaxy,
     the Milky Way. The blue ring is dominated by clusters of young, massive stars, while the yellow nucleus consists of mostly older 
     stars. In this sonification, a clockwise radar scan transforms data in the image into sound. Bright light is represented with louder 
     volume, and light farther from the center is higher-pitched.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hoag%27s_object.jpg/800px-Hoag%27s_object.jpg",
  },



  {
    title: "Bubble Nebula",
    href: "bubble-nebula",
    note: "The Bubble Nebula (NGC 7635) is an emission nebula in the Cassiopeia constellation, formed by the stellar wind of a massive, hot young star pushing against surrounding interstellar gas.",
    description: `Fittingly named the Bubble Nebula, this beautiful cosmic object is roughly seven light-years across and resides 7,100 
    light-years from Earth. Scanned from top to bottom, color is mapped to pitch in this sonification of the nebula. The bright blue of 
    the bubble can be heard as higher pitches; the red and orange regions’ lower pitches are heard most clearly at the beginning on the 
    left and in the top half of the bubble in the middle. Brightness controls the volume and stars are represented by chimes.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_Bubble_Nebula_-_NGC_7635_-_Heic1608a.jpg/1200px-The_Bubble_Nebula_-_NGC_7635_-_Heic1608a.jpg",
  },



  {
    title: "Butterfly Nebula",
    href: "butterfly-nebula",
    note: "The Butterfly Nebula (NGC 6302) is a bipolar planetary nebula in the Scorpius constellation, featuring twin lobes of gas and dust ejected by a dying central star.",
    description: `The "wings" of the butterfly are regions of gas heated to more than 36,000° F (about 20,000° C) that are tearing 
    across space at more than 600,000 miles an hour (966,000 kph)! This sonification scans left to right. Vertical position is mapped 
    to pitch – meaning that light towards the top of the image is higher pitched. The nebula is played on strings and synthetic tones, 
    while stars are represented by digital harp. Brightness controls the volume, and the tilted hourglass orientation of the nebula 
    produces an overall rising motion, with the prominent iron-rich jet producing a quick rise near the center.`,
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/754349main_butterfly_nebula_full_full.jpg",
  },



  {
    title: "Westerlund 2",
    href: "westerlund-2",
    note: "Westerlund 2 is a young, massive star cluster in the Carina constellation, hosting some of the hottest, brightest, and most massive stars known, surrounded by dense nebular gas and dust.",
    description: `In the sonified version of this data, sounds sweep from left to right across the field of view with brighter light 
    producing louder sound. The pitch of the notes indicates the vertical position of the sources in the image with the higher pitches 
    towards the top of the image. The Hubble data is played by strings, either plucked for individual stars or bowed for diffuse clouds. 
    Chandra’s X-ray data is represented by bells, and the more diffuse X-ray light is played by more sustained tones.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/NASA_Unveils_Celestial_Fireworks_as_Official_Hubble_25th_Anniversary_Image.jpg/1200px-NASA_Unveils_Celestial_Fireworks_as_Official_Hubble_25th_Anniversary_Image.jpg",
  },
];

export default spaces;
