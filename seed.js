const { connectDB, getDB } = require("./config/db");

async function seed() {
    await connectDB();
    const db = getDB();

    console.log("Seeding data with specific examples...");

    const regions = [
        { name: "Tigray", capital: "Mekelle", image: "Tigray.jpg" },
        { name: "Amhara", capital: "Bahir Dar", image: "Amhara.jpg" },
        { name: "Oromia", capital: "Addis Ababa", image: "Oromia.jpg" },
        { name: "Somali", capital: "Jijiga", image: "Somali.jpg" },
        { name: "Afar", capital: "Semera", image: "Afar.jpg" },
        { name: "Sidama", capital: "Hawassa", image: "Sidama.jpg" },
        { name: "South Ethiopia", capital: "Wolaita Sodo", image: "South_Ethiopia.jpg" },
        { name: "Central Ethiopia", capital: "Hosanna", image: "Central_Ethiopia.jpg" },
        { name: "South West Ethiopia", capital: "Bonga", image: "South_West_Ethiopia.jpg" },
        { name: "Gambella", capital: "Gambella", image: "Gambella.jpg" },
        { name: "Benishangul-Gumuz", capital: "Assosa", image: "Benishangul-Gumuz.jpg" },
        { name: "Harari", capital: "Harar", image: "Harari.jpg" }
    ];

    const locations = [
        { name: "Lima Coffee Farm", region: "Oromia", description: "A lush coffee plantation known for its high-quality Arabica beans.", price: 450, rating: "4.8", image: "Lima_Coffee_Farm.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Axum Obelisks", region: "Tigray", description: "Ancient stone monoliths dating back to the Axumite Empire.", price: 600, rating: "4.9", image: "Axum_Obelisks.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Lalibela Churches", region: "Amhara", description: "Rock-hewn churches carved from solid volcanic rock.", price: 800, rating: "5.0", image: "Lalibela_Churches.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Simien Mountains", region: "Amhara", description: "Stunning mountain ranges with unique wildlife like the Gelada baboon.", price: 550, rating: "4.7", image: "Simien_Mountains.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Bale Mountains", region: "Oromia", description: "Home to the Ethiopian wolf and diverse alpine flora.", price: 500, rating: "4.6", image: "Bale_Mountains.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Erta Ale Volcano", region: "Afar", description: "A continuously active basaltic shield volcano with a lava lake.", price: 1200, rating: "4.9", image: "Erta_Ale_Volcano.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Danakil Depression", region: "Afar", description: "One of the hottest and lowest places on Earth, with colorful salt lakes.", price: 1500, rating: "4.8", image: "Danakil_Depression.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Blue Nile Falls", region: "Amhara", description: "A spectacular waterfall on the Blue Nile river, known as Tis Abay.", price: 300, rating: "4.5", image: "Blue_Nile_Falls.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Gondar Castles", region: "Amhara", description: "The 'Camelot of Africa', featuring 17th-century royal palaces.", price: 400, rating: "4.7", image: "Gondar_Castles.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Lake Tana Monasteries", region: "Amhara", description: "Ancient island monasteries with beautiful orthodox paintings.", price: 350, rating: "4.6", image: "Lake_Tana_Monasteries.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Sof Omar Cave", region: "Oromia", description: "One of the largest underground cave systems in Africa.", price: 450, rating: "4.4", image: "Sof_Omar_Cave.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Tiya Stones", region: "Central Ethiopia", description: "A UNESCO World Heritage site with mysterious carved stelae.", price: 250, rating: "4.3", image: "Tiya_Stones.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Konso Cultural Landscape", region: "South Ethiopia", description: "Terraced hills and fortified stone-walled settlements.", price: 350, rating: "4.5", image: "Konso_Cultural_Landscape.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Harar Jugol", region: "Harari", description: "The historic walled city with 82 mosques and unique shrines.", price: 400, rating: "4.8", image: "Harar_Jugol.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Abijatta-Shalla National Park", region: "Oromia", description: "Two soda lakes with thousands of flamingos and hot springs.", price: 300, rating: "4.2", image: "Abijatta-Shalla_National_Park.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Awash National Park", region: "Afar", description: "Savannah landscapes with gazelles, oryx, and the Awash waterfall.", price: 350, rating: "4.3", image: "Awash_National_Park.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Omo Valley", region: "South Ethiopia", description: "Culturally diverse region home to many unique ethnic groups.", price: 900, rating: "4.9", image: "Omo_Valley.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Lake Hawassa", region: "Sidama", description: "A beautiful Rift Valley lake perfect for bird watching and fish markets.", price: 200, rating: "4.5", image: "Lake_Hawassa.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Nechisar National Park", region: "South Ethiopia", description: "Located between Lakes Abaya and Chamo, famous for 'crocodile market'.", price: 450, rating: "4.6", image: "Nechisar_National_Park.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Mago National Park", region: "South Ethiopia", description: "Dense savannah park home to the Mursi people and diverse wildlife.", price: 500, rating: "4.4", image: "Mago_National_Park.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Gheralta Mountains", region: "Tigray", description: "Spectacular cliffs with hidden rock-hewn churches.", price: 600, rating: "4.9", image: "Gheralta_Mountains.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Lake Langano", region: "Oromia", description: "A popular resort lake safe for swimming and water sports.", price: 400, rating: "4.3", image: "Lake_Langano.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Wenchi Crater Lake", region: "Oromia", description: "An extinct volcano with a beautiful lake and an island monastery.", price: 350, rating: "4.7", image: "Wenchi_Crater_Lake.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Debre Damo Monastery", region: "Tigray", description: "Accessible only by rope, this is one of Ethiopia's oldest monasteries.", price: 300, rating: "4.5", image: "Debre_Damo_Monastery.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Yeha Temple", region: "Tigray", description: "The oldest standing structure in Ethiopia, dating to the 7th century BC.", price: 200, rating: "4.2", image: "Yeha_Temple.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Semera Wildlife", region: "Afar", description: "Unique desert-adapted species near the regional capital.", price: 250, rating: "4.1", image: "Semera_Wildlife.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Gambella Wetlands", region: "Gambella", description: "Vast swamps and rivers home to the white-eared kob migration.", price: 600, rating: "4.4", image: "Gambella_Wetlands.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Jimma Aba Jifar Palace", region: "Oromia", description: "The historic wooden palace of the King of Jimma.", price: 150, rating: "4.3", image: "Jimma_Aba_Jifar_Palace.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Arba Minch Forty Springs", region: "South Ethiopia", description: "Natural springs that give the city its name, near forest walks.", price: 100, rating: "4.2", image: "Arba_Minch_Forty_Springs.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Bonga Coffee Forest", region: "South West Ethiopia", description: "The birthplace of Arabica coffee, with ancient wild coffee trees.", price: 300, rating: "4.7", image: "Bonga_Coffee_Forest.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Kafa Biosphere Reserve", region: "South West Ethiopia", description: "A UNESCO reserve protecting a diverse range of flora and fauna.", price: 400, rating: "4.6", image: "Kafa_Biosphere_Reserve.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] },
        { name: "Bahir Dar Lakefront", region: "Amhara", description: "Beautiful palm-lined avenues and views of the Blue Nile source.", price: 250, rating: "4.6", image: "Bahir_Dar_Lakefront.jpg", availableHotels: ["Sentral Hotel", "Tekeze Hotel"] }
    ];

    await db.collection("Regions").deleteMany({});
    await db.collection("locations").deleteMany({});

    await db.collection("Regions").insertMany(regions);
    await db.collection("locations").insertMany(locations);

    console.log("Seeding complete!");
    process.exit(0);
}

seed();

