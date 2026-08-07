export const site = {
  name: "Gizakura",
  tagline: "The studio behind Resumurai",
  productName: "Resumurai",
  productUrl: "https://www.resumurai.com",
  productLogo: "/brand/resumurai-logo.png",
  productBlurb:
    "Build one profile, keep a clean public page, and share a link or QR code instead of hunting down another PDF attachment.",
  productTags: ["Public profiles", "Shareable links", "QR codes"] as const,
  email: "founders@gizakura.com",
  linkedin: "https://www.linkedin.com/company/gizakura",
  /** Temporary — replace when the real domain is locked. */
  domainHint: "gizakura.com",
  heroLine:
    "Four founders building tools people can actually share — starting with a digital resume and portfolio platform.",
  aboutHeading: "A small studio learning new tools as they ship.",
  aboutParagraphs: [
    "Gizakura is four founders shipping software together. We met as students, took on real product work over the summer, and kept going when the learning curve got steep: Cursor, Next.js, Supabase, Clerk, Prisma, Vercel, Cloudflare R2, and more, because we wanted something people could open and use, not a class project that dies at demo day.",
    "We care about craft without the corporate polish. Clear profiles. Fast links. Feedback from real users. If something feels wasteful or fake, we cut it.",
    "Right now our focus is Resumurai: a place to keep your resume and portfolio online, tailor versions for different roles, and share them with a simple link or QR code. More products will show up here when they’re real enough to talk about.",
  ] as const,
  teamIntro:
    "Students first. Still figuring it out as we go.",
  portfolioIntro:
    "What we’ve put in front of users so far.",
  comingSoonLabel: "Something new — TBD",
  contactHeading: "Say hi whenever",
  contactLine:
    "Whether it’s a question, an idea, or just curious about what we’re building, feel free to write us!",
} as const;

export type TeamMember = {
  id: string;
  index: string;
  name: string;
  role: string;
  location: string;
  /** Where they are in life / context */
  chapter: string;
  /** Longer personal + work narrative */
  about: string;
  passions: string[];
  /** Public Resumurai profile (preferred link on team cards) */
  resumuraiUrl: string;
  linkedin: string;
  photoUrl: string;
  /** Accents used by the v1 operator showcase */
  accent: string;
  accentSoft: string;
};

/** Fill these in when ready — layout already wired. */
export const team: TeamMember[] = [
  {
    id: "member-01",
    index: "01",
    name: "Matthew Wong",
    role: "Co-Founder & Tech Lead",
    location: "Fremont, CA",
    chapter:
      "Currently a 4th year Data Science student at the University of Michigan.",
    about:
      "I aspire to make billions of dollars and become filthy rich is what I would say, but I always wanted to create a legitimate product that people can use and enjoy with close feedback from users. With my friends, we took a leap into learning a variety of tech tools that helps make a SaaS like Supabase, Vercel, Railway, and so much more. Certainly it was challenging, but seeing the product come to life feels very rewarding. As the tech lead, I help organize what tools we need to build our application. At first coordinating tasks was difficult, but I learned what makes a leader and understood what everyone's capable of. I hope to connect everyone on the team to continue grow and learn new skills even if it may be challenging. In the future, I want to better provide to teams with opportunities to learn what it means to build a software product but also serve users the best usable products.",
    passions: ["Full Stack Development", "Digital Art", "Videography"],
    resumuraiUrl: "https://www.resumurai.com",
    linkedin: "https://www.linkedin.com/in/placeholder-one",
    photoUrl: "/team/matthew-wong.webp",
    accent: "#e8ff47",
    accentSoft: "rgba(232, 255, 71, 0.18)",
  },
  {
    id: "member-02",
    index: "02",
    name: "Caleb Ross",
    role: "Co-founder & VP of Product",
    location: "Grand Rapids, MI",
    chapter:
      "Currently a 4th-year Statistics and Data Science student at the University of Michigan.",
    about:
      "I originally joined the Gizakura team to get some valuable experience over the summer of 2026. Catching up with the latest AI tools, learning the processes of growing a startup, and tackling frontend and backend necessities for the first time turned into a challenging few months of learning new skills on the fly. While my academics are rooted in statistics and data science, my true passion lies in doing the heavy lifting that lets others thrive following my pursuits—even when I feel just as unequipped at first for the tasks. By bridging the gap between the surprisingly technical frontend and the user experience, I channel that focus into ensuring Resumurai is a highly practical and streamlined tool for both students and employers. In the future, I want to take these skills, team building, and experiences with other people to continue making friends.",
    passions: [
      "Football data analytics",
      "Studying Japanese",
      "Strategy games",
    ],
    resumuraiUrl: "https://www.resumurai.com/u/calebross/resume",
    linkedin: "https://www.linkedin.com/in/placeholder-two",
    photoUrl: "/team/caleb-ross.webp",
    accent: "#ff6b4a",
    accentSoft: "rgba(255, 107, 74, 0.18)",
  },
  {
    id: "member-03",
    index: "03",
    name: "Raymond Zhang",
    role: "Co-founder & Head of Marketing",
    location: "Ann Arbor, MI",
    chapter:
      "Building with the team and learning through the summer while shaping a product with real users.",
    about:
      "I’ve always wanted to use my technical knowledge of markets and economics to produce something meaningful that will hopefully leave an impact worth remembering. For a while, I searched for the right place to apply this knowledge, whether in sector-level economics, finance, firm behavior, or other areas that matter. My experiences, both academic and work-related, made me realize that I don’t want to be limited to one field. I want to use my knowledge to directly create change and help level the playing field for people, especially in work that isn’t purely market-centered.\n\nAt Gizakura, I’m here not just to help people find the products and services they’re looking for in this economy, but also to grow with the team. What matters is that I learn from others, contribute what I can, and better understand together what makes an incredible teammate and leader.",
    passions: ["Digital Art", "Literature", "Cinema & Animation"],
    resumuraiUrl: "https://www.resumurai.com",
    linkedin: "https://www.linkedin.com/in/placeholder-three",
    photoUrl: "/team/raymond-zhang.webp",
    accent: "#5ec8ff",
    accentSoft: "rgba(94, 200, 255, 0.18)",
  },
  {
    id: "member-04",
    index: "04",
    name: "Evan Chen",
    role: "Graphic Designer",
    location: "Chicago, IL",
    chapter:
      "Currently a senior Art student at DePaul University.",
    about:
      "As a primarily graphic design-focused individual, I have a passion for 3D animation and visual design, by using a mostly simplistic yet intriguing aesthetic for my work. My professional journey is turning these creative interests into something of use for companies I work for. During my time at Gizakura, I have actively put my skills to the test by designing logos which are simple yet convey the use of each product for the company.",
    passions: ["Graphic Design", "3D Animation", "Visual Design"],
    resumuraiUrl: "https://www.resumurai.com",
    linkedin: "https://www.linkedin.com/in/placeholder-four",
    photoUrl: "/team/evan-chen.webp",
    accent: "#c4a1ff",
    accentSoft: "rgba(196, 161, 255, 0.18)",
  },
];
