const { connectDB, getDB } = require("./config/db");

async function seed() {
    await connectDB();
    const db = getDB();

    console.log("Seeding data with specific examples...");

    const regions = [
        { name: "Tigray", capital: "Mekelle" },
        { name: "Amhara", capital: "Bahir Dar" },
        { name: "Oromia", capital: "Addis Ababa" },
        { name: "Somali", capital: "Jijiga" },
        { name: "Afar", capital: "Semera" },
        { name: "Sidama", capital: "Hawassa" },
        { name: "South Ethiopia", capital: "Wolaita Sodo" },
        { name: "Central Ethiopia", capital: "Hosanna" },
        { name: "South West Ethiopia", capital: "Bonga" },
        { name: "Gambella", capital: "Gambella" },
        { name: "Benishangul-Gumuz", capital: "Assosa" },
        { name: "Harari", capital: "Harar" }
    ];

    const locations = Array.from({ length: 25 }, (_, i) => ({
        name: `Location ${i + 1}`,
        description: `Natural wonder at site ${i + 1}`,
        price: Math.floor(Math.random() * 1000) + 100,
        rating: (Math.random() * 2 + 3).toFixed(1)
    }));

    await db.collection("Regions").deleteMany({});
    await db.collection("locations").deleteMany({});

    await db.collection("Regions").insertMany(regions);
    await db.collection("locations").insertMany(locations);

    console.log("Seeding complete!");
    process.exit(0);
}

seed();
