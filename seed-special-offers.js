const fetch = require("node-fetch");

const API_BASE_URL = "https://venus-strapi-backend-production.up.railway.app";
const API_TOKEN = process.env.STRAPI_API_TOKEN || "your-api-token-here";

// Special offers data based on original Venus SPA website
const specialOffersData = [
  {
    title: "Oferta Andrzejkowa 2025",
    slug: "oferta-andrzejkowa-2025",
    description: [
      {
        type: "paragraph",
        children: [
          {
            text: "Zapraszamy na wyjątkowy weekend Andrzejkowy w Venus SPA! Odkryj magię tradycyjnych wróżb w luksusowym otoczeniu nad morzem.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "W pakiecie znajdziesz:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• 2 noclegi w komfortowych pokojach\n• Śniadania i kolacje w formie bufetu\n• Wieczór andrzejkowy z wróżbami i zabawami\n• Dostęp do krytego basenu i sauny\n• Spacery po sosnowym lesie",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Idealna oferta dla par i grup przyjaciół szukających niezapomnianego weekendu pełnego tradycji i relaksu.",
            type: "text",
          },
        ],
      },
    ],
    shortDescription:
      "Magiczny weekend andrzejkowy nad morzem z tradycyjnymi wróżbami, luksusowym zakwaterowaniem i pełnym wyżywieniem.",
    price: 890,
    originalPrice: 1200,
    validFrom: "2024-11-20",
    validTo: "2024-12-05",
    isActive: true,
    isFeatured: true,
    category: "holiday",
    terms: [
      {
        type: "paragraph",
        children: [
          {
            text: "Warunki oferty:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• Oferta ważna dla pobytów w okresie 29.11-01.12.2024\n• Cena dotyczy pobytu 2-osobowego\n• Wymagana rezerwacja z 7-dniowym wyprzedzeniem\n• Możliwość anulowania do 48h przed przyjazdem\n• Pakiet nie łączy się z innymi promocjami",
            type: "text",
          },
        ],
      },
    ],
    contactInfo: "Rezerwacje: recepcja@spa-venus.pl lub tel. +48 91 38 66 230",
    language: "pl",
    priority: 10,
  },
  {
    title: "Sylwester/Nowy Rok (2025/2026)",
    slug: "sylwester-nowy-rok-2025-2026",
    description: [
      {
        type: "paragraph",
        children: [
          {
            text: "Powitaj Nowy Rok 2026 w wyjątkowym stylu! Spędź sylwestrową noc w Venus SPA, gdzie elegancja spotyka się z nadmorskim klimatem.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Sylwestrowy pakiet obejmuje:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• 3 noclegi (30.12.2025 - 02.01.2026)\n• Wszystkie posiłki w formie bufetu\n• Sylwestrowy bal z orkiestrą na żywo\n• Szampan o północy\n• Dostęp do SPA i basenu\n• Noworoczny brunch\n• Pokaz sztucznych ogni",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Rozpocznij nowy rok w otoczeniu natury, z widokiem na morze i w towarzystwie najbliższych.",
            type: "text",
          },
        ],
      },
    ],
    shortDescription:
      "Ekskluzywny pakiet sylwestrowy z balem, pełnym wyżywieniem i dostępem do SPA. Idealne miejsce na powitanie Nowego Roku.",
    price: 2890,
    originalPrice: 3500,
    validFrom: "2024-10-01",
    validTo: "2024-12-20",
    isActive: true,
    isFeatured: true,
    category: "holiday",
    terms: [
      {
        type: "paragraph",
        children: [
          {
            text: "Warunki sylwestrowego pakietu:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• Oferta obowiązuje dla pobytu 30.12.2025 - 02.01.2026\n• Cena za osobę w pokoju 2-osobowym\n• Wymagana wpłata zaliczki 50%\n• Strój wieczorowy na sylwestrowy bal\n• Ograniczona liczba miejsc - max 200 osób",
            type: "text",
          },
        ],
      },
    ],
    contactInfo:
      "Pilne rezerwacje: recepcja@spa-venus.pl lub tel. +48 91 38 66 230",
    language: "pl",
    priority: 15,
  },
  {
    title: "Kinder Bal",
    slug: "kinder-bal",
    description: [
      {
        type: "paragraph",
        children: [
          {
            text: "Magiczny weekend dla całej rodziny! Kinder Bal w Venus SPA to niezapomniane przeżycie dla dzieci i rodziców.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Program weekendu:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• Kolorowy bal przebierańców dla dzieci\n• Animacje i konkursy z nagrodami\n• Malowanie twarzy i balony\n• Dyskoteka dla najmłodszych\n• Słodki poczęstunek\n• Dostęp do basenu i placu zabaw\n• Spacery po lesie z przewodnikiem",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Rodzice mogą odpocząć w SPA, podczas gdy dzieci bawią się pod opieką wykwalifikowanych animatorów.",
            type: "text",
          },
        ],
      },
    ],
    shortDescription:
      "Rodzinny weekend z balem przebierańców, animacjami dla dzieci i relaksem dla rodziców. Idealna oferta na rodzinny wypoczynek.",
    price: 650,
    originalPrice: 850,
    validFrom: "2024-11-01",
    validTo: "2025-03-31",
    isActive: true,
    isFeatured: false,
    category: "family",
    terms: [
      {
        type: "paragraph",
        children: [
          {
            text: "Warunki Kinder Balu:",
            type: "text",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "• Oferta dla rodzin z dziećmi w wieku 3-12 lat\n• Cena za dziecko, dorośli płacą standardową cenę\n• Wymagany kostium na bal przebierańców\n• Animacje odbywają się w soboty 15:00-19:00\n• Maksymalnie 50 dzieci na weekend",
            type: "text",
          },
        ],
      },
    ],
    contactInfo:
      "Rezerwacje rodzinne: recepcja@spa-venus.pl lub tel. +48 91 38 66 230",
    language: "pl",
    priority: 5,
  },
];

async function seedSpecialOffers() {
  console.log("🎁 Starting special offers seeding...");

  for (const offerData of specialOffersData) {
    try {
      console.log(`📝 Creating offer: ${offerData.title}`);

      const response = await fetch(`${API_BASE_URL}/api/special-offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: offerData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          `❌ Failed to create ${offerData.title}:`,
          response.status,
          errorData
        );
        continue;
      }

      const result = await response.json();
      console.log(`✅ Created: ${offerData.title} (ID: ${result.data.id})`);
    } catch (error) {
      console.error(`❌ Error creating ${offerData.title}:`, error.message);
    }
  }

  console.log("🎉 Special offers seeding completed!");
}

// Run the seeding function
if (require.main === module) {
  seedSpecialOffers().catch(console.error);
}

module.exports = { seedSpecialOffers, specialOffersData };
