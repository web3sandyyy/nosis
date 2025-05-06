const categories = [
  {
    en: "Start-up & Entrepreneurship",
    hi: "स्टार्टअप और उद्यमिता",
    ib: "Startup & Kewirausahaan",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FStart-up%20%26%20Entrepreneurship%2Ficon.svg%2Bxml?alt=media&token=8d64693d-e82f-472b-ad06-b5275d92f494",
  },
  {
    en: "Philosophy",
    hi: "फ़िलॉसफ़ी",
    ib: "Filosofi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FPhilosophy%2Ficon.svg%2Bxml?alt=media&token=51dc5fb8-20c2-4edf-b7b3-0d8b57415fcb",
  },
  {
    en: "Personal Development",
    hi: "पर्सनल डेवलपमेंट",
    ib: "Pengembangan Personal",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FPersonal%20Development%20%2Ficon.svg%2Bxml?alt=media&token=cc543f58-6c3d-41fb-a716-f2171667ebf5",
  },
  {
    en: "Fiction",
    hi: "फ़िक्शन",
    ib: "Fiksi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FFiction%2Ficon.svg%2Bxml?alt=media&token=9d914dc6-6ec1-4ac4-9fe6-896ed4f7f8ee",
  },
  {
    en: "Science & Technology",
    hi: "साइंस और टेक्नोलॉजी",
    ib: "Sains & Teknologi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FScience%20%26%20Technology%2Ficon.svg%2Bxml?alt=media&token=e055eef8-a270-4e7e-b62c-06a6f3637d2e",
  },
  {
    en: "Leadership",
    hi: "लीडरशिप",
    ib: "Kepemimpinan",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FLeadership%2Ficon.svg%2Bxml?alt=media&token=51dc5fb8-20c2-4edf-b7b3-0d8b57415fcb",
  },
  {
    en: "Productivity",
    hi: "प्रोडक्टिविटी",
    ib: "Produktivitas",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FProductivity%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Spirituality",
    hi: "स्पिरिचुएलिटी",
    ib: "Spiritualitas",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FSpirituality%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Business",
    hi: "बिज़नेस",
    ib: "Bisnis",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FBusiness%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Global Politics",
    hi: "ग्लोबल पॉलिटिक्स",
    ib: "Politik Global",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FGlobal%20Politics%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Lifestyle",
    hi: "लाइफ़स्टाइल",
    ib: "Gaya Hidup",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FLifestyle%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Romance",
    hi: "रोमांस",
    ib: "Romansa",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FRomance%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Entertainment",
    hi: "एंटरटेनमेंट",
    ib: "Hiburan",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FEntertainment%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Biographies",
    hi: "बायोग्राफ़ीज़",
    ib: "Biografi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FBiographies%20%2Ficon.svg%2Bxml?alt=media&token=217d8eb1-9431-4763-864b-db3f4c48d7e0",
  },
  {
    en: "Health & Nutrition",
    hi: "हेल्थ और न्यूट्रिशन",
    ib: "Kesehatan & Nutrisi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FHealth%20%26%20Nutrition%20%2Ficon.svg%2Bxml?alt=media&token=ae036568-174f-4eec-8680-63d668fca274",
  },
  {
    en: "Self-Help",
    hi: "सेल्फ हेल्प",
    ib: "Self Help",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FSelf-Help%2Ficon.svg%2Bxml?alt=media&token=c0fa44a4-7842-4779-8fce-ced2ddb97124",
  },
  {
    en: "Psychology",
    hi: "साइकोलॉजी",
    ib: "Psikologi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FPsychology%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
  {
    en: "Finance & Investments",
    hi: "फाइनेंस और इन्वेस्टमेंट्स",
    ib: "Finansial & Investasi",
    icon: "https://firebasestorage.googleapis.com/v0/b/noted-handler-444709-e0.firebasestorage.app/o/categories%2FFinance%20%26%20Investments%2Ficon.svg%2Bxml?alt=media&token=30ae658c-ff4d-47e6-9b55-760e60e68e38",
  },
];

export default categories;
