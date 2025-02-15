const spaces = [
    {
      title: "The Mice Galaxies",
      href: "space-1",
      description:
        "The Mice Galaxies will eventually merge into a single galaxy. They're located about 300 million light-years away in the constellation Coma Berenices. In this data sonification, brightness is represented with volume and pitch – brighter light is louder and lower pitched. The vertical position of objects in the image is used to control the pitch of sustained musical strings, and cymbals swell following the brightness of the galaxy cores.",
      note: "Features interacting spiral galaxies showcasing gravitational forces",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/07/52515250436-6ea8fea1ca-o1.jpg?resize=1200,1126",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-the-mice-galaxies.mp4",
    },
    {
      title: "Arp 140",
      href: "space-2",
      description:
        "This data sonification of Arp 140 shows a pair of interacting galaxies. The leftmost galaxy is a barred spiral galaxy known as NGC 275, and the right-side galaxy is a lenticular galaxy called NGC 274. In barred spiral galaxies, a bar of stars runs through the central bulge of the galaxy (seen here as a bright-white, vertical haze in NGC 275).",
      note: "Demonstrates unique galactic interaction between different galaxy types",
      image:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-arp-140.mp4",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-arp-140.mp4",
    },
    {
      title: "V838 Monocerotis",
      href: "space-3",
      description:
        "This data sonification of the star V838 Monocerotis, or V838 Mon, shows two Hubble images taken almost seven months apart. A pulse of light from the central star illuminates clouds of dust and gas surrounding V838 Mon. This star is located about 20,000 light-years away, at the outer edge of our Milky Way Galaxy. Brightness is mapped to pitch and volume, and the surrounding stars are pitched to musical notes.",
      note: "Showcases dramatic stellar evolution and light echo phenomenon",
      image: "https://live.staticflickr.com/65535/51218566742_1004d95078_z.jpg",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-v838-monocerotis.mp4",
    },
    {
      title: "RS Puppis",
      href: "space-4",
      description:
        "RS Puppis is one of the brightest known Cepheid variable stars in the Milky Way. These stars pulsate at regular intervals, varying in brightness as they expand and contract. The nebula surrounding RS Puppis contains thick clouds of gas and dust that reflect and scatter the star's pulsating light, creating a spectacular light echo that appears to ripple outward.",
      note: "Example of Cepheid variable star with remarkable light echoes",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/04/stsci-h-p1958a-f-2300-jpg.webp?resize=1200,1072",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-rs-puppis.mp4",
    },
    {
      title: "Pismis 24",
      href: "space-5",
      description:
        "Pismis 24 is a stunning star cluster that lies within the nebula NGC 6357, which resides about 8,000 light-years away. In this sonification of the Hubble image, a top-down scan maps brightness to volume and pitch for both the stars and nebula. The stars are assigned to musical pitches played on a classical guitar (brighter stars are louder and higher pitched), and the nebula uses a continuous range of frequencies.",
      note: "Houses some of the brightest and most massive stars known",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/06/hubble-trantula-potw2305a-jpg.webp?resize=1200,1189",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-pismis-24.mp4",
    },
    {
      title: "NGC 1300",
      href: "space-6",
      description:
        "The majestic barred spiral galaxy NGC 1300's arms hold blue clusters of young stars, pink clouds of star formation, and dark lanes of dust. NGC 1300 is considered to be prototypical of barred spiral galaxies. Barred spirals differ from normal spiral galaxies in that the arms of the galaxy do not spiral all the way into the center, but are connected to the two ends of a straight bar of stars containing the nucleus at its center.",
      note: "Exemplar of barred spiral galaxy structure",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-ngc-1300.mp4",
    },
    {
      title: "Black Hole at the Center of Galaxy M87",
      href: "space-7",
      description:
        "This sonification does not feature the EHT data, but rather looks at data from other telescopes that observed M87 on much wider scales at roughly the same time. This image of a jet emerging from the nucleus of M87 contains three panels that feature: X-rays from the Chandra X-ray Observatory, visible light from Hubble, and radio waves from the Atacama Large Millimeter Array in Chile.",
      note: "First-ever direct visualization of a black hole's environment",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-black-hole-at-the%20-center-of-galaxy-m87.mp4",
    },
    {
      title: "NGC 1569",
      href: "space-8",
      description:
        "NGC 1569 is a starburst dwarf galaxy located approximately 11 million light-years away in the constellation Camelopardalis. This small galaxy is undergoing an intense burst of star formation, creating clusters of massive stars that illuminate the surrounding gas with their intense radiation. The sonification translates the galaxy's vibrant features into an auditory experience.",
      note: "Demonstrates intense star formation in dwarf galaxies",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-ngc-1569.mp4",
    },
    {
      title: "Hoag's Object",
      href: "space-9",
      description:
        "Stretching over 100,000 light-years across, the galaxy dubbed Hoag's Object is slightly larger than our own home galaxy, the Milky Way. The blue ring is dominated by clusters of young, massive stars, while the yellow nucleus consists of mostly older stars. In this sonification, a clockwise radar scan transforms data in the image into sound.",
      note: "Rare ring galaxy with mysterious formation history",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-hoags-object.mp4",
    },
    {
      title: "Bubble Nebula",
      href: "space-10",
      description:
        "The Bubble Nebula, also known as NGC 7635, is an emission nebula located 7,100 light-years away in the constellation Cassiopeia. The bubble-like structure is created by stellar winds from a massive hot star at its center, pushing outward into the surrounding gas and dust. The sonification maps colors to different pitches, with brighter areas producing louder sounds.",
      note: "Showcases stellar wind interaction with interstellar medium",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-bubble-nebula.mp4",
    },
    {
      title: "Butterfly Nebula",
      href: "space-11",
      description:
        "The Butterfly Nebula, also called NGC 6302, is a bipolar planetary nebula located approximately 3,800 light-years away. Its striking butterfly-like appearance is created by the ejection of material from a dying star. The sonification represents different wavelengths of light as distinct musical elements, creating a complex audio representation of this celestial structure.",
      note: "Illustrates final stages of stellar evolution",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-butterfly-nebula.mp4",
    },
    {
      title: "NGC 2392",
      href: "space-12",
      description:
        "This starburst galaxy creates stars at a rate 100 times faster than in our own galaxy, the Milky Way! Brighter light is higher pitched and louder. The three color channels used to process this image are each given their own pitch range, with red representing lower pitches, green in medium pitches, and blue in high pitches.",
      note: "Known as the Eskimo Nebula, shows complex planetary nebula structure",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-ngc-2392.mp4",
    },
    {
      title: "Westerlund 2",
      href: "space-13",
      description:
        "Westerlund 2 is a young star cluster located about 20,000 light-years away in the constellation Carina. This cosmic nursery contains some of the brightest and hottest stars known in our galaxy. The sonification translates the cluster's various features into sound, with stellar brightness corresponding to volume and pitch, while different colors are assigned unique tonal qualities.",
      note: "Young star cluster showing early stellar evolution",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-wusterland-2.mp4",
    },
    {
      title: "Hubble Ultra Deep Field (2014)",
      href: "space-14",
      description:
        "The Hubble Ultra Deep Field represents the deepest visible-light image of the cosmos ever obtained, revealing galaxies that existed just 400 million years after the Big Bang. This sonification converts the vast array of galaxies into an audio experience, where distance from Earth is mapped to pitch and brightness controls volume.",
      note: "Deepest view into the early universe",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-hubble-ultra-deep-field-2014.mp4",
    },
    {
      title: "The Whirlpool Galaxy",
      href: "space-15",
      description:
        "The Whirlpool Galaxy (M51) is a grand-design spiral galaxy located approximately 31 million light-years away in the constellation Canes Venatici. Its interaction with a smaller companion galaxy has created distinctive spiral arms filled with new star formation. The sonification represents the galaxy's spiral structure through a clockwise sweep, where brightness determines volume and pitch.",
      note: "Classic example of galaxy interaction and spiral structure",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-the-whirlpool-galaxy.mp4",
    },
    {
      title: "Cat's Eye Nebula",
      href: "space-16",
      description:
        "The Cat's Eye Nebula (NGC 6543) is one of the most complex planetary nebulae known, located about 3,000 light-years away. Its intricate structure includes concentric gas shells, jets, and unusual shock-induced knots. The sonification maps the nebula's complex structure to sound, with different colors and brightness levels creating a rich audio landscape.",
      note: "Complex planetary nebula with mysterious structure",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-cats-eye-nebula.mp4",
    },
    {
      title: "Supernova 1987A",
      href: "space-17",
      description:
        "Supernova 1987A was one of the brightest stellar explosions seen from Earth in modern times. Located in the Large Magellanic Cloud, this supernova has been extensively studied since its discovery in 1987. The sonification interprets the complex structure of expanding gas and debris, with different elements producing distinct sounds.",
      note: "Closest observed supernova in modern times",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-supernova-1987a.mp4",
    },
    {
      title: "Bullet Cluster",
      href: "space-18",
      description:
        "The Bullet Cluster provides the strongest evidence yet for the existence of dark matter. This cosmic collision between two galaxy clusters shows the separation of dark matter from ordinary matter. The sonification represents multiple wavelengths of light, with X-rays, visible light, and gravitational lensing data each contributing distinct audio elements.",
      note: "Key evidence for dark matter existence",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-bullet-cluster.mp4",
    },
    {
      title: "Caldwell 73",
      href: "space-19",
      description:
        "Caldwell 73, also known as NGC 1851, is a globular cluster located in the constellation Columba. This dense collection of ancient stars provides insights into early galaxy evolution. The sonification maps star brightness to pitch and volume, creating a celestial symphony of stellar light.",
      note: "Ancient globular cluster showing stellar population",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-caldwell-73.mp4",
    },
    {
      title: "Abell 370",
      href: "space-20",
      description:
        "Abell 370 is a massive galaxy cluster that acts as a cosmic magnifying glass through gravitational lensing. This phenomenon distorts and amplifies the light from more distant galaxies behind it. The sonification represents the complex web of distorted galaxies and gravitational effects through an intricate audio landscape.",
      note: "Demonstrates gravitational lensing effects",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-abell-370.mp4",
    },
    {
      title: "Twin Galaxies AM 2026-424",
      href: "space-21",
      description:
        "This pair of interacting galaxies showcases the cosmic dance of galactic mergers. The gravitational forces between these two galaxies are creating tidal tails and distortions in their structures. The sonification translates the various features of this interaction into an audio experience that highlights the dynamic nature of galaxy evolution.",
      note: "Ongoing galaxy merger process",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-twin-galaxies-am-2026-424.mp4",
    },
    {
      title: "Helix Nebula",
      href: "space-22",
      description:
        "The Helix Nebula, also known as NGC 7293, is one of the closest planetary nebulae to Earth at about 700 light-years away. Its complex structure includes multiple shells of gas ejected by a dying star. The sonification maps the nebula's distinctive features to sound, with different colors and brightness levels creating a unique audio representation.",
      note: "Nearest bright planetary nebula to Earth",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-helix-nebula.mp4",
    },
    {
      title: "Cosmic Reef",
      href: "space-23",
      description:
        "The Cosmic Reef features two nebulae: NGC 2014 and NGC 2020. These stellar nurseries showcase the brilliant colors of star formation regions. The sonification interprets the various colors and structures in the image, with different wavelengths of light corresponding to different musical elements.",
      note: "Star formation regions in neighboring galaxies",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-cosmic-reef.mp4",
    },
    {
      title: "Lensing Galaxy Cluster",
      href: "space-24",
      description:
        "This massive galaxy cluster acts as a cosmic lens, bending and focusing light from more distant galaxies behind it. The gravitational lensing effect creates multiple images and arcs of background galaxies. The sonification represents these distorted images and the cluster's mass distribution through various audio elements.",
      note: "Shows strong gravitational lensing effects",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-lensing-galaxy-cluster.mp4",
    },
    {
      title: "Pillars of Creation",
      href: "space-25",
      description:
        "The iconic Pillars of Creation in the Eagle Nebula (M16) are towering columns of gas and dust where new stars are forming. This sonification maps the intricate structure of the pillars to sound, with dust appearing as lower notes and the bright newly formed stars as higher pitched sounds.",
      note: "Famous star-forming region showing stellar nursery",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-pillars-of-creation.mp4",
    },
    {
      title: "Milky Way Center",
      href: "space-26",
      description:
        "This image captures the central region of our Milky Way galaxy, showcasing the dense concentration of stars and the supermassive black hole at its core. The sonification represents the varying stellar densities and gas clouds, with different wavelengths of light producing distinct audio characteristics.",
      note: "Center of our galaxy showing dense star field",
      image:
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_TarantulaNebula_potw2506a.jpg?w=1863&h=2048&fit=crop&crop=faces%2Cfocalpoint",
      videoUrl:
        "https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/hubble-sonification-milky-way-center.mp4",
    },
  ];
  
  export default spaces;
  