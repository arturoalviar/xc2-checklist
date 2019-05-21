const blades = {
  homura: {
    method: "Story",
    isVisible: true,
    role: "atk",
    type: "fire",
    weapon: "Aegis Sword"
  },
  hikari: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "atk",
    type: "light",
    weapon: "Aegis Sword"
  },
  nia: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "hlr",
    type: "water",
    weapon: "Catalyst Scimitar"
  },
  byakou: {
    method: "Story",
    isVisible: true,
    role: "hlr",
    type: "water",
    weapon: "Dual Scythes"
  },
  hana: {
    method: "Story",
    isVisible: true,
    role: "tnk",
    type: "earth",
    weapon: "Drill Shield"
  },
  hanaQT: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "tnk",
    type: "earth",
    weapon: "Mech Arms"
  },
  hanaQTpi: {
    isSpoiler: true,
    method: "Random",
    isVisible: false,
    role: "atk",
    type: "earth",
    weapon: "Variable Saber"
  },
  suzaku: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "atk",
    type: "wind",
    weapon: "Dual Scythes"
  },
  kagutsuchi: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "tnk",
    type: "fire",
    weapon: "Whipswords"
  },
  wadatsumi: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "tnk",
    type: "water",
    weapon: "Chroma Katana"
  },
  saika: {
    isSpoiler: true,
    method: "Story",
    isVisible: false,
    role: "atk",
    type: "electric",
    weapon: "Big Bang Edge"
  },
  ibuki: {
    method: "Random",
    isVisible: true,
    role: "tnk",
    type: "wind",
    weapon: "Shield Hammer"
  },
  vasara: {
    method: "Random",
    isVisible: true,
    role: "tnk",
    type: "dark",
    weapon: "Chroma Katana"
  },
  hotaru: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "earth",
    weapon: "Bitball"
  },
  kubira: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "fire",
    weapon: "Greataxe"
  },
  azami: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "dark",
    weapon: "Ether Cannon"
  },
  uka: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "earth",
    weapon: "Knuckle Claws"
  },
  raiko: {
    method: "Random",
    isVisible: true,
    role: "tnk",
    type: "electric",
    weapon: "Shield Hammer"
  },
  tokiha: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "ice",
    weapon: "Megalance"
  },
  shiki: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "wind",
    weapon: "Knuckle Claws"
  },
  nyuutsu: {
    method: "Random",
    isVisible: true,
    role: "tnk",
    type: "fire",
    weapon: "Chroma Katana"
  },
  yuuouu: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "water",
    weapon: "Greataxe"
  },
  zakuro: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "electric",
    weapon: "Knuckle Claws"
  },
  musubi: {
    method: "Blade quest",
    isVisible: true,
    role: "hlr",
    type: "electric",
    weapon: "Bitball",
    link: "http://xenoblade.wikia.com/wiki/Tranquility",
    methodName: "Tranquility"
  },
  idaten: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "wind",
    weapon: "Bitball"
  },
  mei: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "dark",
    weapon: "Megalance"
  },
  dikarao: {
    method: "Core Crystal",
    isVisible: true,
    role: "atk",
    type: "earth",
    weapon: "Megalance",
    link: "http://xenoblade.wikia.com/wiki/Beastly_Core_Crystal",
    methodName: "Beastly Core Crystal"
  },
  teni: {
    method: "Core Crystal",
    isVisible: true,
    role: "atk",
    type: "electric",
    weapon: "Ether Cannon",
    link: "http://xenoblade.wikia.com/wiki/Sealed_Core_Crystal",
    methodName: "Sealed Core Crystal"
  },
  guren: {
    method: "Random",
    isVisible: true,
    role: "tnk",
    type: "ice",
    weapon: "Shield Hammer"
  },
  yaegiri: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "wind",
    weapon: "Greataxe"
  },
  mikumari: {
    method: "Blade quest",
    isVisible: true,
    role: "atk",
    type: "water",
    weapon: "Megalance",
    link: "http://xenoblade.wikia.com/wiki/Crystal_Clear",
    methodName: "Crystal Clear"
  },
  seori: {
    method: "Blade quest",
    isVisible: true,
    role: "tnk",
    type: "ice",
    weapon: "Chroma Katana",
    link: "http://xenoblade.wikia.com/wiki/Blade-Sharp_Memory",
    methodName: "Blade-Sharp Memory"
  },
  rinne: {
    method: "Core Crystal",
    isVisible: true,
    role: "atk",
    type: "water",
    weapon: "Ether Cannon",
    link: "http://xenoblade.wikia.com/wiki/Inherited_Core_Crystal",
    methodName: "Inherited Core Crystal"
  },
  menou: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "earth",
    weapon: "Greataxe"
  },
  kasane: {
    method: "Core Crystal",
    isVisible: true,
    role: "tnk",
    type: "dark",
    weapon: "Shield Hammer",
    link: "http://xenoblade.wikia.com/wiki/Lucky_Core_Crystal",
    methodName: "Lucky Core Crystal"
  },
  tsuki: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "ice",
    weapon: "Bitball"
  },
  nanakoori: {
    method: "Random",
    isVisible: true,
    role: "hlr",
    type: "ice",
    weapon: "Knuckle Claws"
  },
  kosmos: {
    method: "Random",
    isVisible: true,
    role: "atk",
    type: "light",
    weapon: "Ether Cannon"
  },
  hanabuster: {
    isDlc: true,
    method: "Blade quest",
    isVisible: false,
    role: "tnk",
    type: "light",
    weapon: "Shield Hammer"
  },
  telos: {
    isDlc: true,
    method: "Random",
    isVisible: false,
    role: "atk",
    type: "dark",
    weapon: "Greataxe"
  },
  shulk: {
    isDlc: true,
    method: "Challenge Battle Mode",
    isVisible: false,
    role: "atk",
    type: "light",
    weapon: "Monado"
  },
  fiorun: {
    isDlc: true,
    method: "Challenge Battle Mode",
    isVisible: false,
    role: "atk",
    type: "wind",
    weapon: "Knives"
  },
  hibana: {
    isDlc: true,
    method: "Core Crystal",
    isVisible: false,
    role: "hlr",
    type: "fire",
    weapon: "Bitball",
    link: "http://xenoblade.wikia.com/wiki/Ebullient_Core_Crystal",
    methodName: "Ebullient Core Crystal"
  },
  kamuya: {
    isDlc: true,
    method: "Core Crystal",
    isVisible: false,
    role: "tnk",
    type: "light",
    weapon: "Uchigatana",
    link: "http://xenoblade.wikia.com/wiki/Divine_Core_Crystal",
    methodName: "Divine Core Crystal"
  },
  eruma: {
    isDlc: true,
    method: "Challenge Battle Mode",
    isVisible: false,
    role: "atk",
    type: "dark",
    weapon: "Dual Swords"
  },
  yoshitsune: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "hlr",
    type: "electric",
    weapon: "Calamity Scythe"
  },
  benkei: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "atk",
    type: "earth",
    weapon: "Cobra Bardiche"
  },
  satahiko: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "tnk",
    type: "dark",
    weapon: "Infinity Fans"
  },
  kamui: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "atk",
    type: "wind",
    weapon: "Brilliant Twinblades"
  },
  zantetsu: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "tnk",
    type: "wind",
    weapon: "Sword Tonfa"
  },
  ragou: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "atk",
    type: "fire",
    weapon: "Decimation Cannon"
  },
  ootsuchi: {
    isNewGamePlus: true,
    method: "Random",
    isVisible: false,
    role: "tnk",
    type: "earth",
    weapon: "Rockrending Gauntlets"
  }
};

export default blades;
