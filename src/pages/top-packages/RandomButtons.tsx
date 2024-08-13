const ExploreEgypt = () => {
  const places = [
    "Keep Exploring Egypt",
    "Egyptian Museum in Cairo",
    "Alexandria National Museum",
    "The Sphinx",
    "Cairo Citadel",
    "Valley of the Kings",
    "Abu Simbel Temples",
    "Philae Temple",
    "Luxor Temple",
    "Pyramids of Giza",
    "Karnak Temple Complex",
    "Temple of Kom Ombo",
    "Temple of Edfu",
    "Islamic Cairo (Al-Muizz Street)",
    "Catacombs of Kom el Shoqafa",
    "Khan el-Khalili Bazaar",
    "Temple of Hatshepsut",
    "Montazah Palace Gardens",
    "Alexandria Library",
    "Mount Sinai",
    "White Desert National Park",
    "Aswan High Dam",
    "Ras Mohammed National Park",
    "St. Catherine's Monastery",
    "Sharm El Sheikh beaches",
    "Elephantine Island",
    "Dahab's Blue Hole",
  ];

  return (
    <div className=" mx-auto p-4 mt-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded p-1 text-center inline-block"
          >
            <span className="text-sm text-black font-segoe font-semibold">
              {place}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreEgypt;
