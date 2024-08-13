export enum category {
  "furniture-storage" = "Meubles & Rangement",
  "arcade-game" = "Arcade et Jeu",
  "audiovisual-hifi" = "Audiovisuel & Hi-Fi",
  "chairs" = "Chaises et Fauteuils",
  "bedroom" = "Chambre à coucher",
  "kitchen" = "Cuisine",
  "wall-decor" = "Décoration Murale",
  "decoration" = "Décoration",
  "divers" = "Divers",
  "flag-logo" = "Drapeau et Logo",
  "lighting" = "Éclairages",
  "figurine-statue" = "Figurine et Statue",
  "computer-office" = "Informatique et Bureautique",
  "food-drinks" = "Nourriture & Boissons",
  "bathroom" = "Salle de bains",
  "fitness-sport" = "Fitness & Sport",
  "tables-desks" = "Tables et Bureaux",
  "carpets" = "Tapis",
  "nature-plant" = "Nature & Végétal",
  "bags-suitcases" = "Sacs & Valises",
  "beach-holidays" = "Vacances à la Plage",
  "boxes-crates" = "Boîtes & Caisses",
  "construction-buildings" = "Construction & Bâtiments",
  "jewelry-accessories" = "Bijoux & Accessoires",
}

enum categoryInverse {
  "Meubles & Rangement" = "furniture-storage",
  "Arcade & Jeu" = "arcade-game",
  "Audiovisuel & Hi-Fi" = "audiovisual-hifi",
  "Chaises & Fauteuils" = "chairs",
  "Chambre à coucher" = "bedroom",
  "Cuisine" = "kitchen",
  "Décoration Murale" = "wall-decor",
  "Décoration" = "decoration",
  "Divers" = "divers",
  "Drapeau & Logo" = "flag-logo",
  "Éclairages" = "lighting",
  "Figurine & Statue" = "figurine-statue",
  "Informatique & Bureautique" = "computer-office",
  "Nourriture & Boissons" = "food-drinks",
  "Salle de bains" = "bathroom",
  "Fitness & Sport" = "fitness-sport",
  "Tables & Bureaux" = "tables-desks",
  "Tapis" = "carpets",
  "Nature & Végétal" = "nature-plant",
  "Sacs & Valises" = "bags-suitcases",
  "Vacances à la Plage" = "beach-holidays",
  "Boîtes & Caisses" = "boxes-crates",
  "Construction & Bâtiments" = "construction-buildings",
  "Bijoux & Accessoires" = "jewelry-accessories",
}

export const findType = (type: string): category => {
  return category[type as keyof typeof category];
};

export const findSlug = (type: string): categoryInverse => {
  return categoryInverse[type as keyof typeof categoryInverse];
};
