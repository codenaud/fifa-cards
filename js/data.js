const players = [
  {
    playerName: 'Lukaku',
    playerImage: '../img/players/lukaku.png',
    value: '94',
    position: 'st',
    team: 'Chelsea',
    teamLogo: '../img/teams/chelsea.png',
    nationality: 'Belgium',
    nationalityFlag: '../img/flags/belgium.svg',
    isLegend: 'no',
    stats: {
      pac: 89,
      sho: 94,
      pas: 81,
      drib: 90,
      def: 33,
      phy: 83,
    },
  },
  {
    playerName: 'Ronaldo',
    playerImage: '../img/players/cristiano-ronaldo.png',
    value: '90',
    position: 'st',
    team: 'Manchester United',
    teamLogo: '../img/teams/manchester-united.png',
    nationality: 'Portugal',
    nationalityFlag: '../img/flags/portugal.svg',
    isLegend: 'no',
    stats: {
      pac: 85,
      sho: 91,
      pas: 81,
      drib: 86,
      def: 34,
      phy: 75,
    },
  },
  {
    playerName: 'Messi',
    playerImage: '../img/players/messi.png',
    value: '98',
    position: 'rw',
    team: 'PSG',
    teamLogo: '../img/teams/psg.png',
    nationality: 'Argentina',
    nationalityFlag: '../img/flags/argentina.svg',
    isLegend: 'no',
    stats: {
      pac: 93,
      sho: 97,
      pas: 97,
      drib: 99,
      def: 40,
      phy: 78,
    },
  },
  {
    playerName: 'Ronaldinho',
    playerImage: '../img/players/ronaldinho.png',
    value: '95',
    position: 'lw',
    team: 'Legend',
    teamLogo: '../img/teams/fut-icons.png',
    nationality: 'Brazil',
    nationalityFlag: '../img/flags/brazil.svg',
    isLegend: 'yes',
    stats: {
      pac: 94,
      sho: 93,
      pas: 92,
      drib: 98,
      def: 39,
      phy: 82,
    },
  },
  {
    playerName: 'Pelé',
    playerImage: '../img/players/pele.png',
    value: '99',
    position: 'cam',
    team: 'Legend',
    teamLogo: '../img/teams/fut-icons.png',
    nationality: 'Brazil',
    nationalityFlag: '../img/flags/brazil.svg',
    isLegend: 'yes',
    stats: {
      pac: 96,
      sho: 97,
      pas: 96,
      drib: 97,
      def: 62,
      phy: 79,
    },
  },
  {
    playerName: 'Maradona',
    playerImage: '../img/players/maradona.png',
    value: '98',
    position: 'cam',
    team: 'Legend',
    teamLogo: '../img/teams/fut-icons.png',
    nationality: 'Argentina',
    nationalityFlag: './img/flags/argentina.svg',
    isLegend: 'yes',
    stats: {
      pac: 93,
      sho: 94,
      pas: 95,
      drib: 98,
      def: 42,
      phy: 78,
    },
  },
  {
    playerName: 'Sergio Ramos',
    playerImage: '../img/players/sergio-ramos.png',
    value: '84',
    position: 'cb',
    team: 'PSG',
    teamLogo: '../img/teams/psg.png',
    nationality: 'Spain',
    nationalityFlag: './img/flags/spain.svg',
    isLegend: 'no',
    stats: {
      pac: 61,
      sho: 69,
      pas: 73,
      drib: 70,
      def: 83,
      phy: 77,
    },
  },
  {
    playerName: 'Mbappé',
    playerImage: '../img/players/mbappe.png',
    value: '91',
    position: 'st',
    team: 'PSG',
    teamLogo: '../img/teams/psg.png',
    nationality: 'France',
    nationalityFlag: './img/flags/france.svg',
    isLegend: 'no',
    stats: {
      pac: 97,
      sho: 88,
      pas: 80,
      drib: 92,
      def: 36,
      phy: 77,
    },
  },
  {
    playerName: 'Neymar',
    playerImage: '../img/players/neymar.png',
    value: '89',
    position: 'lw',
    team: 'PSG',
    teamLogo: '../img/teams/psg.png',
    nationality: 'Brazil',
    nationalityFlag: './img/flags/brazil.svg',
    isLegend: 'no',
    stats: {
      pac: 89,
      sho: 82,
      pas: 84,
      drib: 93,
      def: 36,
      phy: 62,
    },
  },
  {
    playerName: 'Zidane',
    playerImage: '../img/players/zidane.png',
    value: '97',
    position: 'cam',
    team: 'Legend',
    teamLogo: '../img/teams/fut-icons.png',
    nationality: 'France',
    nationalityFlag: './img/flags/france.svg',
    isLegend: 'yes',
    stats: {
      pac: 86,
      sho: 93,
      pas: 98,
      drib: 98,
      def: 76,
      phy: 88,
    },
  },
  {
    playerName: 'Piqué',
    playerImage: '../img/players/pique.png',
    value: '88',
    position: 'cb',
    team: 'FC Barcelona',
    teamLogo: '../img/teams/barcelona.png',
    nationality: 'Spain',
    nationalityFlag: './img/flags/spain.svg',
    isLegend: 'no',
    stats: {
      pac: 57,
      sho: 63,
      pas: 70,
      drib: 67,
      def: 88,
      phy: 78,
    },
  },
  {
    playerName: 'Cruyff',
    playerImage: '../img/players/cruyff.png',
    value: '95',
    position: 'cf',
    team: 'Legend',
    teamLogo: '../img/teams/fut-icons.png',
    nationality: 'Netherlands',
    nationalityFlag: './img/flags/netherlands.svg',
    isLegend: 'yes',
    stats: {
      pac: 92,
      sho: 94,
      pas: 92,
      drib: 98,
      def: 43,
      phy: 75,
    },
  },
];

function showPlayers() {
  // Let's grab a reference to <div> with id '#player-cards'
  const container = document.querySelector('#players-cards');
  console.log(container);

  // Let's grab a reference to our <template> for each player
  const template = document.querySelector('#template-players-cards').content;
  console.log(template);

  // Let's create a fragment to avoid reflow
  const fragment = document.createDocumentFragment();

  for (const player of players) {
    // create a clone base on template
    const clone = template.cloneNode(true);

    // Customize properties
    clone.querySelector('#value').textContent = player.value;
    clone.querySelector('#position').textContent = player.position;
    clone.querySelector('#nationality img').src = player.nationalityFlag;
    clone.querySelector('#nationality img').alt = player.nationality;
    clone.querySelector('#team img').src = player.teamLogo;
    clone.querySelector('#team img').alt = player.team;
    clone.querySelector('#playerImage img').src = player.playerImage;
    clone.querySelector('#playerImage img').alt = player.playerName;
    clone.querySelector('#playerName').textContent = player.playerName;
    clone.querySelector('#pac').textContent = player.stats.pac;
    clone.querySelector('#sho').textContent = player.stats.sho;
    clone.querySelector('#pas').textContent = player.stats.pas;
    clone.querySelector('#drib').textContent = player.stats.drib;
    clone.querySelector('#def').textContent = player.stats.def;
    clone.querySelector('#phy').textContent = player.stats.phy;

    // Check if the player is a legend and add the 'silver' class
    if (player.isLegend === 'yes') {
      clone.querySelector('#player-cards').classList.add('silver');
    }

    // And add <div> to fragment
    fragment.appendChild(clone);
  }

  // Finally, add fragment to container
  container.appendChild(fragment);
}
showPlayers();
