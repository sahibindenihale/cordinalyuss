const VEHICLES = [
  {
    "brand": "Volkswagen",
    "model": "Passat",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 1600,
    "image": "passat.png",
    "type": "Sedan"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1400,
    "image": "golf.png",
    "type": "Hatchback"
  },
  {
    "brand": "Volkswagen",
    "model": "Caddy",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Manuel",
    "price": 1200,
    "image": "caddy.png",
    "type": "Ticari"
  },
  {
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2022,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 1200,
    "image": "jetta.png",
    "type": "Sedan"
  },
  {
    "brand": "Volkswagen",
    "model": "Polo",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 900,
    "image": "polo.png",
    "type": "Hatchback"
  },
  {
    "brand": "Volkswagen",
    "model": "Arteon",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1900,
    "image": "arteon.png",
    "type": "Sedan"
  },
  {
    "brand": "Ford",
    "model": "Focus",
    "year": 2022,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 850,
    "image": "ford-focus.png",
    "type": "Hatchback"
  },
  {
    "brand": "Ford",
    "model": "Puma",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1200,
    "image": "ford-puma.png",
    "type": "SUV"
  },
  {
    "brand": "Ford",
    "model": "Fiesta",
    "year": 2022,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 850,
    "image": "ford-fiesta.png",
    "type": "Hatchback"
  },
  {
    "brand": "Ford",
    "model": "Focus Sedan",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 1400,
    "image": "ford-focus-sedan.png",
    "type": "Sedan"
  },
  {
    "brand": "Ford",
    "model": "Courier",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Manuel",
    "price": 1100,
    "image": "ford-courier.png",
    "type": "Ticari"
  },
  {
    "brand": "Audi",
    "model": "A3",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1500,
    "image": "audi-a3.png",
    "type": "Sedan"
  },
  {
    "brand": "Audi",
    "model": "A4",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1600,
    "image": "audi-a4.png",
    "type": "Sedan"
  },
  {
    "brand": "Audi",
    "model": "Q3",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 2100,
    "image": "audi-Q3.png",
    "type": "SUV"
  },
  {
    "brand": "Audi",
    "model": "Q7",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 3800,
    "image": "audi-Q7.png",
    "type": "SUV"
  },
  {
    "brand": "BMW",
    "model": "320d",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 1600,
    "image": "bmw-320d.png",
    "type": "Sedan"
  },
  {
    "brand": "BMW",
    "model": "520d",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 1900,
    "image": "bmw-520d.png",
    "type": "Sedan"
  },
  {
    "brand": "BMW",
    "model": "525",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 2000,
    "image": "bmw-525.png",
    "type": "Sedan"
  },
  {
    "brand": "Dacia",
    "model": "Sandero",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Manuel",
    "price": 900,
    "image": "dacia-sendero.png",
    "type": "Hatchback"
  },
  {
    "brand": "Fiat",
    "model": "Egea",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Manuel",
    "price": 850,
    "image": "fiat-egea.png",
    "type": "Sedan"
  },
  {
    "brand": "Honda",
    "model": "Civic",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 1200,
    "image": "honda-civic.png",
    "type": "Sedan"
  },
  {
    "brand": "Hyundai",
    "model": "i20",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 850,
    "image": "Hyundai-i20.png",
    "type": "Hatchback"
  },
  {
    "brand": "Kia",
    "model": "Rio",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 850,
    "image": "kia-rio.png",
    "type": "Hatchback"
  },
  {
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "fuel": "Elektrik",
    "transmission": "Otomatik",
    "price": 5500,
    "image": "porshe-taycan.png",
    "type": "Premium"
  },
  {
    "brand": "Land Rover",
    "model": "Range Rover Sport",
    "year": 2024,
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "price": 5500,
    "image": "range-rover-sport.png",
    "type": "SUV"
  },
  {
    "brand": "Renault",
    "model": "Clio",
    "year": 2023,
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "price": 850,
    "image": "renault-clio.png",
    "type": "Hatchback"
  },
  {
    "brand": "Renault",
    "model": "Sembol",
    "year": 2023,
    "fuel": "Dizel",
    "transmission": "Manuel",
    "price": 850,
    "image": "renault-sembol.png",
    "type": "Sedan"
  }
];
const HERO_SLIDES = [
  {
    "image": "hero-1.png",
    "eyebrow": "Online Rezervasyon",
    "title": "%35’e Varan İndirim",
    "description": "Online rezervasyona özel avantajlı fiyatlarla aracını hemen ayır, teslimatta ek ücretsiz vale ayrıcalığını yakala."
  },
  {
    "image": "hero-2.png",
    "eyebrow": "Güvence Önceliğimiz",
    "title": "Full Kaskolu Sigortalı Araçlar",
    "description": "Kasko dahil, hasar güvenceli ve 7/24 yol destekli araçlarla güvenle yola çıkın."
  },
  {
    "image": "hero-3.png",
    "eyebrow": "Geniş Filo",
    "title": "Ekonomik ve Lüks Araç Seçenekleri",
    "description": "Şehir içi kullanım, iş seyahati ve premium deneyim için her ihtiyaca uygun araç seçenekleri."
  },
  {
    "image": "hero-4.png",
    "eyebrow": "Sürüş Özgürlüğü",
    "title": "Sınırsız KM ile Seyahatinizin Tadını Çıkarın",
    "description": "Ekstra kilometre ücreti olmadan daha özgür, daha rahat ve daha keyifli yolculuk deneyimi."
  }
];
const CAMPAIGNS = [
  "Online rezervasyona özel %35’e varan indirim fırsatları",
  "Ek ücretsiz vale ile teslimat",
  "Aynı gün hızlı teslimat imkanı",
  "Full kaskolu ve sigortalı güvenli filo",
  "Ekonomik ve lüks araç seçenekleri bir arada",
  "7/24 destek ve hızlı rezervasyon imkanı"
];
