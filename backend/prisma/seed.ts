import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Define the event data to be seeded
  const eventData = [
    {
      name: "Summer Fest",
      description: "Annual summer festival with music, food, and games.",
      date: new Date("2024-06-21"),
      location: "Central Park",
      price: 145000,
      category: "Music",
      imageUrl: "/public/event1.png"
    },
    {
      name: "Tech Conference 2024",
      description: "A gathering of top tech innovators and industry leaders.",
      date: new Date("2024-07-15"),
      location: "Convention Center",
      price: 150000,
      category: "Conference",
      imageUrl: "/public/event2.png"
    },
    {
        name: "Book Fair",
        description: "Discover the world’s best authors and books.",
        location: "Town Hall",
        date: new Date("2024-08-05"),
        price: 10000,
        category: "Bazaar",
        imageUrl: "/public/event3.png"
      },
      {
        name: "Autumn Fest",
        description: "Annual summer festival with music, food, and games.",
        location: "Central Park",
        date: new Date("2024-06-21"),
        price: 245000,
        category: "Music",
        imageUrl: "/public/event4.png"
      },
      {
        name: "Econ Conference 2024",
        description: "A gathering of top tech innovators and industry leaders.",
        location: "Convention Center",
        date: new Date("2024-07-15"),
        price: 350000,
        category: "Conference",
        imageUrl: "/public/event5.png"
      },
      {
        name: "Art Fair",
        description: "Discover the world’s best authors and books.",
        location: "Town Hall",
        date: new Date("2024-08-05"),
        price: 100000,
        category: "Art & Exhibition",
        imageUrl: "/public/event6.png"
      },
      {
        name: "We The Fest",
        description: "Annual summer festival with music, food, and games.",
        location: "Central Park",
        date: new Date("2024-06-21"),
        price: 145000,
        category: "Music",
        imageUrl: "/public/event1.png"
      },
      {
        name: "Math Conference 2024",
        description: "A gathering of top tech innovators and industry leaders.",
        location: "Convention Center",
        date: new Date("2024-07-15"),
        price: 150000,
        category: "Conference",
        imageUrl: "/public/event2.png"
      },
      {
        name: "Shoe Fair",
        description: "Discover the world’s best authors and books.",
        location: "Town Hall",
        date: new Date("2024-08-05"),
        price: 10000,
        category: "Bazaar",
        imageUrl: "/public/event3.png"
      },
      {
        name: "Marine Fest",
        description: "Annual summer festival with music, food, and games.",
        location: "Central Park",
        date: new Date("2024-06-21"),
        price: 245000,
        category: "Conference",
        imageUrl: "/public/event4.png"
      },
      {
        name: "Physics Conference 2024",
        description: "A gathering of top tech innovators and industry leaders.",
        location: "Convention Center",
        date: new Date("2024-07-15"),
        price: 350000,
        category: "Conference",
        imageUrl: "/public/event5.png"
      },
      {
        name: "Museum The Exhibit",
        description: "Discover the world’s best authors and books.",
        location: "Town Hall",
        date: new Date("2024-08-05"),
        price: 100000,
        category: "Art & Exhibition",
        imageUrl: "/public/event6.png"
      }

    
  ];


  for (const event of eventData) {
    await prisma.events.create({
      data: event,
    });
  }
}


main()
  .catch((error) => {
    console.error("Error seeding database:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
