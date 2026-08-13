export interface ScenarioPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: string;
  intro: string;
  whyAsked: string;
  sampleAnswers: {
    context: string;
    situation: string;
    task: string;
    action: string;
    result: string;
  }[];
  tips: string[];
  mistakes: string[];
  faqs: { question: string; answer: string }[];
}

const pages: ScenarioPage[] = [
  {
    slug: "tell-me-about-a-time-you-failed",
    title: 'Tell Me About a Time You Failed — STAR Method Answer Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Failed" with STAR',
    metaDescription: 'Learn how to answer "tell me about a time you failed" with 3 STAR method sample answers. Show growth mindset and self-awareness. Free practice with AI feedback.',
    category: "Failure & Resilience",
    intro: 'This question tests your self-awareness, honesty, and ability to learn from mistakes. Interviewers don\'t want perfection — they want to see you can fail, reflect, and improve.',
    whyAsked: 'Interviewers ask about failure to assess your growth mindset, accountability, and resilience. How you talk about failure reveals more about your character than how you talk about success.',
    sampleAnswers: [
      {
        context: "Software Engineer",
        situation: "I was responsible for deploying a new feature to production on a Friday afternoon despite our team's informal rule against Friday deploys.",
        task: "I needed to ship the feature before the weekend because a client demo was scheduled for Monday morning.",
        action: "I skipped the full staging test to save time. The feature broke the checkout flow for 30% of users over the weekend. On Monday, I led the incident response, rolled back the change, and personally apologized to the affected customers.",
        result: "I learned to never skip staging tests regardless of deadlines. I proposed and implemented a mandatory staging gate in our CI/CD pipeline. Since then, zero similar incidents in 18 months.",
      },
      {
        context: "Product Manager",
        situation: "I pushed for building a feature based on my own assumption that users wanted social sharing, without validating with data or user research.",
        task: "I was leading the Q2 roadmap and allocated 6 weeks of engineering time to this feature.",
        action: "After launch, the feature had 1.2% adoption. I conducted post-launch user interviews and discovered users actually wanted better search, not social sharing. I presented the findings to leadership and proposed we pivot.",
        result: "We reallocated the team to search improvements, which increased user engagement by 25%. I now always validate assumptions with data before committing engineering resources.",
      },
    ],
    tips: [
      "Choose a real failure, not a disguised strength ('I work too hard').",
      "Take full responsibility — don't blame others or circumstances.",
      "Focus 20% on the failure, 80% on what you learned and changed.",
      "Show the lasting impact of what you learned.",
    ],
    mistakes: [
      "Choosing a trivial failure that doesn't show growth.",
      "Blaming teammates or external factors.",
      "Spending too long on the failure itself.",
      "Not showing what you'd do differently today.",
    ],
    faqs: [
      { question: "Can I use a failure from my personal life?", answer: "Professional examples are stronger, but personal examples work if they demonstrate clear learning and growth. Avoid anything too personal or sensitive." },
      { question: "What if my failure had serious consequences?", answer: "Own it. Interviewers respect honesty. Show you took accountability, fixed the immediate issue, and built systems to prevent it from happening again." },
      { question: "How recent should my failure example be?", answer: "Within the last 2-3 years is ideal. It shows you're actively learning and growing. Very old examples may seem like you haven't grown since." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-had-a-conflict",
    title: 'Tell Me About a Time You Had a Conflict — STAR Method Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Had a Conflict" with STAR',
    metaDescription: 'Answer "tell me about a time you had a conflict" with 3 STAR method examples. Show emotional intelligence and conflict resolution skills. Free practice.',
    category: "Conflict Resolution",
    intro: "Conflict questions test your emotional intelligence, communication skills, and ability to find solutions. Every workplace has conflict — employers want to see you handle it constructively.",
    whyAsked: "They want to see you can disagree without creating enemies, listen to other perspectives, and find win-win solutions. Conflict handling reveals your maturity and professionalism.",
    sampleAnswers: [
      {
        context: "Cross-team collaboration",
        situation: "The engineering team and the marketing team disagreed about the timeline for a product launch. Marketing wanted to announce at a conference in 3 weeks; engineering said 6 weeks minimum.",
        task: "As the product manager, I needed to find a solution that satisfied both teams without compromising quality or the marketing opportunity.",
        action: "I organized a joint meeting where both teams presented their constraints. I proposed a phased launch: a limited beta at the conference with key features, followed by a full launch 3 weeks later.",
        result: "Both teams agreed. The conference generated 500 beta signups, and the full launch had 2,000 users on day one. The phased approach became our standard for time-sensitive launches.",
      },
      {
        context: "Peer disagreement",
        situation: "A colleague consistently took credit for joint work in team meetings, presenting our shared contributions as solely their own.",
        task: "I needed to address this without damaging our working relationship.",
        action: "I asked to speak with them privately. I used 'I' statements: 'I noticed in the meeting that the project was presented without mentioning our collaboration. I'd appreciate if we could present our joint work together.'",
        result: "They apologized — they hadn't realized how it came across. We started co-presenting our work, and our manager noticed the improved teamwork. We both got promoted that cycle.",
      },
    ],
    tips: [
      "Show you take initiative to resolve conflict, not avoid it.",
      "Demonstrate active listening — you heard their perspective first.",
      "Highlight the process improvement that prevented future conflicts.",
      "Use 'I' statements, not 'you' accusations.",
    ],
    mistakes: [
      "Saying you've never had a conflict — that's not believable.",
      "Painting the other person as entirely wrong.",
      "Focusing on winning the argument instead of finding a solution.",
      "Not showing what you learned from the experience.",
    ],
    faqs: [
      { question: "What if the conflict wasn't resolved?", answer: "Be honest. Focus on what you did to try to resolve it, what you learned, and how it changed your approach. Interviewers value honesty over a perfect outcome." },
      { question: "Should I mention if I escalated to management?", answer: "Yes, if that was the right call. Show you tried to resolve it directly first, and escalated only when necessary. Don't make it sound like you just complained to your boss." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-showed-leadership",
    title: 'Tell Me About a Time You Showed Leadership — STAR Method Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Showed Leadership" with STAR',
    metaDescription: 'Answer "tell me about a time you showed leadership" with 3 STAR method examples. Show influence, decision-making, and team impact. Free practice.',
    category: "Leadership",
    intro: "Leadership isn't about titles — it's about influence, initiative, and impact. This question tests whether you can drive results and inspire others, regardless of your formal role.",
    whyAsked: "Employers want people who take ownership, make decisions, and lift others up. Past leadership behavior predicts future performance in similar situations.",
    sampleAnswers: [
      {
        context: "Leading without a title",
        situation: "Our team was stuck in unproductive meetings with no clear outcomes. Morale was dropping and project timelines were slipping.",
        task: "I wasn't the manager, but I decided to take initiative to improve our team's effectiveness.",
        action: "I proposed a new meeting structure: 15-minute standups with a clear agenda, action items tracked in a shared doc, and a 'no agenda, no meeting' rule. I volunteered to facilitate the first few sessions.",
        result: "Meeting time dropped by 40%, and our sprint velocity improved by 25%. The manager adopted the format permanently and asked me to present it to other teams.",
      },
    ],
    tips: [
      "Leading without a title is often more impressive than formal management.",
      "Show you influenced outcomes, not just told people what to do.",
      "Quantify the team-level impact, not just your personal contribution.",
      "Demonstrate empathy and awareness of team dynamics.",
    ],
    mistakes: [
      "Only giving examples where you had a formal leadership title.",
      "Focusing on what you told people to do instead of how you influenced them.",
      "Not showing empathy or emotional intelligence.",
      "Choosing examples without measurable team outcomes.",
    ],
    faqs: [
      { question: "Can I use examples where I wasn't a manager?", answer: "Absolutely. Leadership is about influence, not authority. Examples of leading without a title — like driving a process change, mentoring a colleague, or championing a project — are often more impressive than management examples." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-went-above-and-beyond",
    title: 'Tell Me About a Time You Went Above and Beyond — STAR Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Went Above and Beyond" with STAR',
    metaDescription: 'Answer "tell me about a time you went above and beyond" with 3 STAR method examples. Show initiative and dedication. Free practice with AI feedback.',
    category: "Initiative & Ownership",
    intro: "This question tests whether you do the minimum required or actively look for ways to add value. Employers want people who take ownership beyond their job description.",
    whyAsked: "They want to see you're intrinsically motivated, not just doing what's asked. Going above and beyond shows you care about the outcome, not just the task.",
    sampleAnswers: [
      {
        context: "Customer success",
        situation: "A customer emailed about a billing issue on a Friday evening. It was technically a finance team issue, not my responsibility as a support engineer.",
        task: "I wanted to help the customer before the weekend, even though it wasn't my job.",
        action: "I investigated the billing issue, found it was a duplicate charge, and processed the refund myself after getting finance approval via Slack. I also proactively checked if other customers were affected.",
        result: "The customer wrote a glowing review. It turned out 12 other customers had the same issue — I flagged it and we fixed the root cause. I received a company-wide recognition award.",
      },
    ],
    tips: [
      "Show you went beyond your job description, not just did your job well.",
      "Demonstrate you thought about the broader impact, not just the immediate task.",
      "Highlight the ripple effect of your initiative.",
      "Keep it genuine — don't sound like you're bragging.",
    ],
    mistakes: [
      "Choosing an example that's just doing your job well.",
      "Making it sound like you're a martyr who overworks.",
      "Not explaining WHY you went above and beyond.",
      "Forgetting to mention the impact on others.",
    ],
    faqs: [
      { question: "What if I don't have a dramatic example?", answer: "Small examples work too. Helping a colleague with their workload, suggesting a process improvement, or staying late to meet a deadline are all valid. Focus on the intention and impact, not the drama." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-worked-under-pressure",
    title: 'Tell Me About a Time You Worked Under Pressure — STAR Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Worked Under Pressure" with STAR',
    metaDescription: 'Answer "tell me about a time you worked under pressure" with 3 STAR method examples. Show composure, prioritization, and results under stress. Free practice.',
    category: "Resilience & Stress Management",
    intro: "Every job has high-pressure moments. This question tests your ability to stay calm, prioritize effectively, and deliver results when stakes are high.",
    whyAsked: "Employers want to know you won't crumble under pressure. They're looking for composure, clear thinking, and the ability to prioritize when everything feels urgent.",
    sampleAnswers: [
      {
        context: "Product launch deadline",
        situation: "Three days before a major product launch, we discovered a critical bug that affected 20% of user signups.",
        task: "I had to coordinate the fix while managing stakeholder expectations and keeping the launch date.",
        action: "I triaged the bug with engineering, set up hourly status updates for stakeholders, and prepared a contingency plan in case we couldn't fix it in time. I also identified a temporary workaround.",
        result: "We fixed the bug 12 hours before launch. The launch went smoothly with 5,000 signups on day one. My contingency planning impressed the VP and I was asked to lead all future launch coordination.",
      },
    ],
    tips: [
      "Show you stay calm and systematic, not panicked.",
      "Demonstrate prioritization — what you chose to focus on and why.",
      "Include communication — how you kept others informed.",
      "Highlight the outcome and what you learned about handling pressure.",
    ],
    mistakes: [
      "Saying you 'thrive under pressure' without a specific example.",
      "Not showing how you managed your own stress.",
      "Focusing on the chaos instead of your systematic response.",
      "Choosing a situation that was self-created pressure.",
    ],
    faqs: [
      { question: "What if my example is from a personal situation?", answer: "Professional examples are preferred. Personal examples work only if they directly impacted your work and you can show clear professional growth from the experience." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-disagreed-with-your-manager",
    title: 'Tell Me About a Time You Disagreed With Your Manager — STAR Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Disagreed With Your Manager" with STAR',
    metaDescription: 'Answer "tell me about a time you disagreed with your manager" with 3 STAR method examples. Show backbone and professionalism. Free practice with AI.',
    category: "Professional Courage",
    intro: "This question tests whether you can voice disagreement constructively while respecting authority. Employers want people who think independently but also know when to commit.",
    whyAsked: "They want to see 'disagree and commit' in action — can you voice your opinion, back it with data, and then fully support the final decision even if it's not yours?",
    sampleAnswers: [
      {
        context: "Technical direction",
        situation: "My manager wanted to rewrite our entire backend in a new framework, but I believed the existing architecture could be optimized with a fraction of the effort.",
        task: "I needed to present an alternative without undermining my manager's authority.",
        action: "I built a proof-of-concept optimization that achieved 80% of the performance gains in 2 weeks vs. the projected 3-month rewrite. I presented the data in our 1:1, not in front of the team.",
        result: "My manager agreed to try the optimization first. It worked, saving 10 weeks of engineering time. My manager appreciated that I disagreed privately with data, and started consulting me on technical decisions.",
      },
    ],
    tips: [
      "Disagree in private, not in front of the team.",
      "Use data and evidence, not opinions.",
      "Show you committed fully once the decision was made.",
      "Demonstrate the relationship stayed strong after the disagreement.",
    ],
    mistakes: [
      "Saying you never disagree with authority — that sounds like you don't think independently.",
      "Making your manager look bad or incompetent.",
      "Not showing what happened after the disagreement.",
      "Choosing an example where you were clearly wrong.",
    ],
    faqs: [
      { question: "What if my manager was right and I was wrong?", answer: "That's actually a great answer! Show you learned from the experience, updated your thinking, and grew. Intellectual humility is highly valued." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-made-a-mistake",
    title: 'Tell Me About a Time You Made a Mistake — STAR Method Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Made a Mistake" with STAR',
    metaDescription: 'Answer "tell me about a time you made a mistake" with 3 STAR method examples. Show accountability, problem-solving, and growth. Free practice with AI.',
    category: "Accountability",
    intro: "Mistakes happen. This question tests your accountability, honesty, and ability to recover. Interviewers want to see you own your mistakes and learn from them.",
    whyAsked: "They want to see you take responsibility rather than deflect blame. How you handle mistakes reveals your character and growth potential.",
    sampleAnswers: [
      {
        context: "Data error",
        situation: "I accidentally sent an email campaign to our entire list instead of just the segment I was targeting, which included customers who had already purchased.",
        task: "I needed to minimize the damage and prevent it from happening again.",
        action: "I immediately sent a follow-up email apologizing for the mistake. I then implemented a double-check system in our email platform requiring segment verification before sending.",
        result: "The follow-up email actually had a 15% higher open rate than normal, and some customers appreciated the honesty. The verification system prevented 3 similar mistakes over the next year.",
      },
    ],
    tips: [
      "Own the mistake completely — no 'mistakes were made' passive voice.",
      "Show immediate action to fix the problem.",
      "Demonstrate the systemic change you implemented.",
      "Find the silver lining if there is one (authentically).",
    ],
    mistakes: [
      "Blaming someone else or circumstances.",
      "Choosing a mistake that was actually someone else's fault.",
      "Not showing what you learned or changed.",
      "Minimizing the mistake ('it wasn't a big deal').",
    ],
    faqs: [
      { question: "How big should the mistake be?", answer: "Big enough to be meaningful, small enough that it doesn't raise red flags about your competence. A mistake that affected a project or a customer is good. A mistake that cost the company millions is too much." },
    ],
  },
  {
    slug: "tell-me-about-a-time-you-had-to-learn-something-quickly",
    title: 'Tell Me About a Time You Had to Learn Something Quickly — STAR Examples (2026)',
    h1: 'How to Answer "Tell Me About a Time You Had to Learn Quickly" with STAR',
    metaDescription: 'Answer "tell me about a time you had to learn something quickly" with 3 STAR method examples. Show adaptability and learning agility. Free practice.',
    category: "Adaptability & Learning",
    intro: "This question tests your learning agility and adaptability. In fast-paced environments, you often need to get up to speed quickly on new tools, domains, or skills.",
    whyAsked: "They want to see you can ramp up quickly without hand-holding. Learning agility is one of the strongest predictors of long-term career success.",
    sampleAnswers: [
      {
        context: "New technology",
        situation: "I was assigned to lead a project using React, which I had never used before. The project started in 2 weeks.",
        task: "I needed to become proficient enough in React to lead a team of 3 engineers within 2 weeks.",
        action: "I completed an intensive React course, built 3 practice projects, studied our existing React codebase, and paired with a senior React developer for 2 hours daily. I documented my learning in a shared wiki.",
        result: "I led the project successfully, delivering on time. The learning wiki I created became the onboarding resource for all new React developers. I learned that structured learning with hands-on practice is the fastest way to ramp up.",
      },
    ],
    tips: [
      "Show a structured approach to learning, not just 'I studied hard'.",
      "Demonstrate you used multiple learning methods (courses, practice, pairing).",
      "Highlight how your learning benefited others too.",
      "Be specific about the timeline and what you achieved.",
    ],
    mistakes: [
      "Being vague about how you learned ('I just figured it out').",
      "Not showing the outcome of your learning.",
      "Choosing something too easy to learn quickly.",
      "Not mentioning how you applied what you learned.",
    ],
    faqs: [
      { question: "Does it have to be a technical skill?", answer: "No. Learning a new domain, industry, process, or soft skill all work. The key is showing a structured approach and rapid application." },
    ],
  },
];

export function getScenarioPage(slug: string): ScenarioPage | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getAllScenarioSlugs(): string[] {
  return pages.map((p) => p.slug);
}

export default pages;
