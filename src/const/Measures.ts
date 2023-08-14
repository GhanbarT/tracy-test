import { Measures } from "@/types/Measure";

export const measures: Measures = {
  SocialFacilitation: {
    name: "تسهیلگری اجتماعی",
    formula: "SUM(1,9,17,25,33,41)",
    score: 0,
    order: 1,
  },
  Management: {
    name: "مدیریت",
    formula: "SUM(2,10,18,26,34,42)",
    score: 0,
    order: 2,
  },
  RetailTrade: {
    name: "تجارت خرد (جزئیات تجارت)",
    formula: "SUM(3,11,19,27,35,43)",
    score: 0,
    order: 3,
  },
  DataProcessing: {
    name: "پردازش اطلاعات",
    formula: "SUM(4,12,20,28,36,44)",
    score: 0,
    order: 4,
  },
  Mechanical: {
    name: "مکانیکی",
    formula: "SUM(5,13,21,29,37,45)",
    score: 0,
    order: 5,
  },
  NatureOutdoor: {
    name: "طبیعت/ فضای باز",
    formula: "SUM(6,14,22,30,38,46)",
    score: 0,
    order: 6,
  },
  Artistic: {
    name: "هنری",
    formula: "SUM(7,15,23,31,39,47)",
    score: 0,
    order: 7,
  },
  AssistingServices: {
    name: "خدمات یاورانه",
    formula: "SUM(8,16,24,32,40,48)",
    score: 0,
    order: 8,
  },
  SocialSciences: {
    name: "علوم اجتماعی",
    formula: "SUM(49,59,69,79,89,99)",
    score: 0,
    order: 9,
  },
  Leadership: {
    name: "رهبری",
    formula: "SUM(50,60,70,80,90,100)",
    score: 0,
    order: 10,
  },
  BusinessSystems: {
    name: "سیستمهای تجاری کسب",
    formula: "SUM(51,61,71,81,91,101)",
    score: 0,
    order: 11,
  },
  QualityControl: {
    name: "کنترل کیفیت",
    formula: "SUM(52,62,72,82,92,102)",
    score: 0,
    order: 12,
  },
  Handicrafts: {
    name: "کار دستی",
    formula: "SUM(53,63,73,83,93,103)",
    score: 0,
    order: 13,
  },
  PersonalServices: {
    name: "خدمات شخصی",
    formula: "SUM(54,64,74,84,94,104)",
    score: 0,
    order: 14,
  },
  FinancialAnalysis: {
    name: "تحلیل مالی",
    formula: "SUM(55,65,75,85,95,105)",
    score: 0,
    order: 15,
  },
  NaturalSciences: {
    name: "علوم طبیعی",
    formula: "SUM(56,66,76,86,96,106)",
    score: 0,
    order: 16,
  },
  ConstructionRepair: {
    name: "ساخت/تعمیر",
    formula: "SUM(57,67,77,87,97,107)",
    score: 0,
    order: 17,
  },
  BasicServices: {
    name: "خدمات پایه",
    formula: "SUM(58,68,78,88,98,108)",
    score: 0,
    order: 18,
  },
  People: {
    name: "مردم",
    formula:
      "0.924 * SUM(SocialFacilitation,AssistingServices) + 0.383 * SUM(Management,Artistic)",
    score: 0,
    order: 19,
  },
  Objects: {
    name: "اشیاء",
    formula:
      "0.924 * SUM(DataProcessing,Mechanical) + 0.383 * SUM(RetailTrade,NatureOutdoor)",
    score: 0,
    order: 20,
  },
  Data: {
    name: "داده‌ها",
    formula:
      "0.924 * SUM(Management,RetailTrade) + 0.383 * SUM(SocialFacilitation,DataProcessing)",
    score: 0,
    order: 21,
  },
  Ideas: {
    name: "عقاید",
    formula:
      "0.924 * SUM(Artistic,NatureOutdoor) + 0.383 * SUM(Mechanical,AssistingServices)",
    score: 0,
    order: 22,
  },
  Realism: {
    name: "واقع‌گرائی",
    formula: "SUM(Mechanical)",
    score: 0,
    order: 23,
  },
  Searching: {
    name: "جستجوگری",
    formula: "SUM(NatureOutdoor)",
    score: 0,
    order: 24,
  },
  Social: {
    name: "اجتماعی",
    formula: "(2 * SUM(AssistingServices) + SUM(SocialFacilitation)) / 3",
    score: 0,
    order: 25,
  },
  Impulsive: {
    name: "تهوری",
    formula: "(2 * SUM(Management) + SUM(SocialFacilitation)) / 3",
    score: 0,
    order: 26,
  },
  Conventional: {
    name: "قراردادی",
    formula: "(2 * SUM(DataProcessing) + SUM(RetailTrade)) / 3",
    score: 0,
    order: 27,
  },
  PeopleObjects: {
    name: "مردم/اشیاء",
    formula: "SUM(People) - SUM(Objects)",
    score: 0,
    order: 28,
  },
  DataIdeas: {
    name: "داده‌ها/عقاید",
    formula: "SUM(Ideas) - SUM(Data)",
    score: 0,
    order: 29,
  },
  Prestige: {
    name: "پرستیژ",
    formula:
      "(2 * SUM(Leadership) + 0.71 * SUM(FinancialAnalysis,BusinessSystems,SocialSciences,NaturalSciences) - 2 * SUM(Handicrafts) - 0.71 * SUM(QualityControl,ConstructionRepair,PersonalServices,BasicServices)) / 2",
    score: 0,
    order: 30,
  },
};
