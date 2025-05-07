import TheBlueZones from "./books/theBlueZones";
import TheCultureCode from "./books/theCultureCode";
import WhatITalkAbout from "./books/whatITalkAbout";
import NutritionCrisis from "./books/nutritionInCrisis";
import MansSearch from "./books/mansSearch";

const books = [
  {
    id: 1,
    title:
      "The Blue Zones Solution: Eating and Living Like the World's Healthiest People",
    author: "Dan Buettner",
    image:
      "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoted-handler-444709-e0.firebasestorage.app%2Fo%2Fbooks%252FThe%2520Blue%2520Zones%2520Solution%253A%2520Eating%2520and%2520Living%2520Like%2520the%2520World's%2520Healthiest%2520People%252Fen%252Fcover.webp%3Falt%3Dmedia%26token%3D53f15c45-02ea-4376-9d08-28f891b5bbb5&w=3840&q=75",
    parts: 5,
    time: 33,
    tags: ["Health & Nutrition", "Personal Development", "Self-Help"],
    preface:
      "This summary offers a concise overview of The Blue Zones Solution by Dan Buettner, capturing its key themes without replacing the book's rich research and storytelling. Translated into multiple languages and published by National Geographic, the book shares powerful insights on longevity and well-being across cultures. While unaffiliated with Buettner or his publishers, this summary serves as an educational guide to inspire further reading. We deeply respect the author's work and encourage readers to explore the full book for deeper case studies and real-world applications of the Blue Zones principles.",
    contents: TheBlueZones,
    aboutAuthor:
      "Dan Buettner is a National Geographic explorer, journalist, and bestselling author known for his research on longevity and happiness. He introduced the concept of Blue Zones—regions where people live exceptionally long and healthy lives—through books like The Blue Zones and The Blue Zones of Happiness. Buettner's work combines scientific research with cultural insights, identifying lifestyle habits that promote well-being. His findings have influenced global health initiatives, encouraging better diets, social engagement, and active living. Through his books, talks, and collaborations, Buettner continues to inspire people to adopt habits for a longer, healthier life.",
  },
  {
    id: 2,
    title: "The Culture Code: The Secrets of Highly Successful Groups",
    author: "Daniel Coyle",
    image:
      "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoted-handler-444709-e0.firebasestorage.app%2Fo%2Fbooks%252FThe%2520Culture%2520Code%253A%2520The%2520Secrets%2520of%2520Highly%2520Successful%2520Groups%252Fen%252Fcover.webp%3Falt%3Dmedia%26token%3D569ef4e1-7e25-46d2-ac2a-cd61592d42f8&w=3840&q=75",
    parts: 5,
    time: 43,
    tags: ["Productivity", "Leadership", "Personal Development"],
    preface:
      "This summary serves as a guide to The Culture Code by Daniel Coyle, not a replacement for the book. Coyle explores how high-performing groups build strong cultures through real-world examples, expert research, and psychological insights. Since its 2018 publication, the book has influenced leaders, businesses, sports teams, and the military, with translations in multiple languages. It provides in-depth narratives, scientific explanations, and practical exercises to help teams foster trust, collaboration, and purpose. While this summary highlights key ideas, reading the full book offers richer insights and actionable strategies. We encourage you to explore The Culture Code in its entirety to fully grasp its transformative lessons.",
    contents: TheCultureCode,
    aboutAuthor: "Daniel Coyle is a bestselling author known for his work on talent development, teamwork, and high-performance cultures. His notable books include The Talent Code, which explores how skill is built through deep practice, The Culture Code, which examines the secrets behind successful teams, and The Little Book of Talent, a practical guide to improving skills. Coyle’s research spans neuroscience, psychology, and leadership, offering valuable insights into personal and organizational growth. His engaging writing style and real-world examples make his books essential for anyone looking to enhance their performance, whether in sports, business, or personal development."
  },
  {
    id: 3,
    title: "What I Talk About When I Talk About Running",
    author: "Haruki Murakami",
    image: "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoted-handler-444709-e0.firebasestorage.app%2Fo%2Fbooks%252FWhat%2520I%2520Talk%2520About%2520When%2520I%2520Talk%2520About%2520Running%252Fcover.webp%3Falt%3Dmedia%26token%3Dd588a5a0-2ad4-44d0-a959-a147731d5681&w=1080&q=75",
    parts: 5,
    time: 48,
    tags: ["Biography", "Personal Development", "Self-Help"],
    preface:
      "Haruki Murakami’s What I Talk About When I Talk About Running is a reflective memoir on running, writing, and endurance. Originally published in Japanese (2007) and translated into English (2008) by Philip Gabriel, the book has resonated globally with athletes, artists, and deep thinkers. Murakami’s meditative prose mirrors the rhythm of his runs, offering insights into discipline and solitude. This summary is an appreciation, not a substitute—Murakami’s words are best experienced firsthand. Find the book at independent bookstores, major retailers, or libraries. If this sparks your interest, read the book and take the journey yourself.",
    contents: WhatITalkAbout,
    aboutAuthor: "Haruki Murakami is a renowned Japanese author, born on January 12, 1949, in Kyoto, Japan. He is celebrated for his unique blend of surrealism and poignant storytelling, with notable works including 'Norwegian Wood, 'Kafka on the Shore,' and '1Q84.' Beyond his literary achievements, Murakami is an avid long-distance runner, often attributing his physical regimen to his writing discipline."
  },
  {
    id: 4,
    title: "Nutrition in Crisis: Flawed Studies, Misleading Advice, and the Real Science of Human Metabolism",
    author: "Richard D. Feinman",
    image: "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoted-handler-444709-e0.firebasestorage.app%2Fo%2Fbooks%252FNutrition%2520in%2520Crisis%253A%2520Flawed%2520Studies%252C%2520Misleading%2520Advice%252C%2520and%2520the%2520Real%2520Science%2520of%2520Human%2520Metabolism%252Fen%252Fcover.webp%3Falt%3Dmedia%26token%3Dab91b7f3-7e07-4eaa-9784-f3cdc4e7af6e&w=1080&q=75",
    parts: 5,
    time: 37,
    tags: ["Health & Nutrition", "Personal Development"],
    preface:
      "This summary is a tribute to Nutrition in Crisis by Richard David Feinman, a biochemist specializing in metabolism. His book challenges conventional nutrition advice and advocates for evidence-based dietary science, particularly emphasizing low-carb approaches for metabolic health. While this summary captures key insights, it cannot replace the depth of Feinman’s research, scientific references, and personal perspectives. We encourage readers to explore the full book for a comprehensive understanding. This summary is independently created for educational purposes, respecting intellectual property rights. If this overview piques your interest, consider reading Nutrition in Crisis to gain deeper knowledge and make informed health decisions.",
    contents: NutritionCrisis,
    aboutAuthor: "Richard D. Feinman is a biochemist and researcher known for his contributions to nutrition science, particularly in the study of low-carbohydrate diets and metabolism. As a professor at SUNY Downstate Medical Center, he has explored the biochemical foundations of diet and disease, emphasizing the role of carbohydrate restriction in managing conditions like diabetes. Feinman is the author of The World Turned Upside Down: The Second Low-Carbohydrate Revolution, where he critiques conventional dietary guidelines. His work has influenced discussions on metabolic health and nutrition, advocating for evidence-based dietary approaches to improve health outcomes."
  },
  {
    id: 5,
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    image: "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoted-handler-444709-e0.firebasestorage.app%2Fo%2Fbooks%252FMan%25E2%2580%2599s%2520Search%2520for%2520Meaning%252Fcover.webp%3Falt%3Dmedia%26token%3De0174c4d-7186-43e2-b40d-8c6cf604477a&w=1080&q=75",
    parts: 5,
    time: 49,
    tags: ["Philosophy"],
    preface:
      "Viktor E. Frankl’s Man’s Search for Meaning is a profound exploration of human resilience and the quest for purpose, selling over 16 million copies worldwide. First published in 1946 in German and later in English in 1959, the book chronicles Frankl’s experiences in Nazi concentration camps and introduces logotherapy, his revolutionary approach to psychotherapy. Frankl (1905–1997), a neurologist, psychiatrist, and Holocaust survivor, emphasized that meaning is the central force in human motivation. While this summary highlights key insights, it cannot replace the depth and emotion of Frankl’s original work. We at Nosis are not affiliated with Frankl’s estate or publishers; our goal is to Ïinspire readers to explore his masterpiece firsthand. Let this serve as an invitation, not a substitute, for the powerful wisdom within Man’s Search for Meaning.",
    contents: MansSearch,
    aboutAuthor: "Viktor E. Frankl (1905–1997) was an Austrian psychiatrist, neurologist, and Holocaust survivor best known for his groundbreaking work in existential psychology. His most influential book, Man’s Search for Meaning, explores his experiences in Nazi concentration camps and introduces logotherapy, a therapeutic approach centered on finding purpose in life. Frankl believed that meaning could be discovered through work, love, and suffering. His insights continue to inspire those seeking resilience and personal growth. A pioneer in humanistic psychology, Frankl’s legacy endures in fields like psychotherapy, philosophy, and self-development, emphasizing the power of purpose in overcoming adversity."
    
  }
];

export default books;
