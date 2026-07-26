export interface InterviewQuestionPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  type: "role" | "company" | "competency";
  intro: string;
  whyAsked: string[];
  questions: {
    question: string;
    starExample: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
    tips: string[];
  }[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
}

const pages: InterviewQuestionPage[] = [
  // === ROLE-BASED (Tier 1) ===
  {
    slug: "software-engineer",
    title: "Software Engineer Interview Questions — STAR Method Examples (2026)",
    h1: "Software Engineer Interview Questions & STAR Method Answers",
    metaDescription:
      "Prepare for software engineer interviews with 10 behavioral questions and STAR method sample answers. Practice with AI feedback for free.",
    type: "role",
    intro:
      "Software engineer interviews test more than coding skills. Behavioral questions assess how you handle conflict, ship under pressure, and collaborate across teams. Use the STAR method to structure clear, compelling answers.",
    whyAsked: [
      "They want to see how you handle real technical challenges, not just theory.",
      "Engineers work on teams — they need to know you communicate and collaborate well.",
      "Past behavior predicts future performance under similar pressure.",
      "They're evaluating your problem-solving process, not just the outcome.",
    ],
    questions: [
      {
        question: "Tell me about a time you had to debug a critical production issue.",
        starExample: {
          situation: "Our payment processing service started failing for 15% of transactions during peak hours.",
          task: "As the on-call engineer, I needed to identify the root cause and restore service within our 30-minute SLA.",
          action: "I checked the deployment history and found a recent config change. I rolled back the change, verified metrics returned to normal, then conducted a post-mortem to add automated config validation.",
          result: "Service restored in 12 minutes. The validation pipeline we built prevented 3 similar incidents over the next quarter.",
        },
        tips: [
          "Emphasize your systematic debugging process.",
          "Show you prioritize user impact over perfect fixes.",
          "Mention preventive measures you implemented.",
        ],
      },
      {
        question: "Describe a time you had to make a difficult technical decision with incomplete information.",
        starExample: {
          situation: "We needed to choose between two database technologies for a new service, but had limited benchmarking data.",
          task: "I was responsible for making the recommendation that would serve us for the next 3 years.",
          action: "I built a proof-of-concept with both options, ran load tests with realistic data volumes, consulted with engineers who had used each in production, and documented trade-offs in a decision matrix.",
          result: "We chose the option that scaled 3x better. The decision framework I created became the standard template for all future tech evaluations.",
        },
        tips: [
          "Show you're data-driven even with limited data.",
          "Demonstrate you consult others and build consensus.",
          "Highlight the lasting impact of your decision process.",
        ],
      },
      {
        question: "Give an example of when you had to push back on a requirement.",
        starExample: {
          situation: "Product wanted to add a real-time collaboration feature with a 2-week deadline before a major launch.",
          task: "I needed to explain the technical risks while still delivering value to users.",
          action: "I scoped the full feature and showed it would take 6 weeks. I proposed a phased approach: ship a simpler version in 2 weeks that covered 80% of use cases, then iterate.",
          result: "We launched on time with the simplified version. User feedback showed 85% satisfaction, and we completed the full feature in the next sprint without delaying the launch.",
        },
        tips: [
          "Don't just say no — propose alternatives.",
          "Quantify the trade-offs (time, scope, quality).",
          "Show you understand business priorities.",
        ],
      },
      {
        question: "Tell me about a time you improved the performance of a system.",
        starExample: {
          situation: "Our API response times had degraded from 200ms to 2 seconds over 6 months.",
          task: "I was asked to investigate and bring response times back under 500ms.",
          action: "I profiled the application and found N+1 database queries and missing indexes. I added query optimization, implemented caching for frequently accessed data, and set up performance monitoring dashboards.",
          result: "Response times dropped to 150ms — better than the original baseline. The monitoring dashboard caught two subsequent regressions before they hit production.",
        },
        tips: [
          "Use specific numbers (before/after metrics).",
          "Show you address root causes, not symptoms.",
          "Mention monitoring or prevention you added.",
        ],
      },
      {
        question: "Describe a time you mentored a junior engineer.",
        starExample: {
          situation: "A new grad on our team was struggling with code reviews — getting 20+ comments on every PR.",
          task: "As their onboarding buddy, I needed to help them ramp up without overwhelming them.",
          action: "I created a personal coding style guide with examples, paired with them on 3 PRs to show my thought process, and set up weekly 1:1s to review patterns in the feedback they were receiving.",
          result: "Within 4 weeks, their PR comments dropped to 3-5 on average. They became one of the strongest contributors on the team within 6 months.",
        },
        tips: [
          "Show empathy and patience in your approach.",
          "Demonstrate you create systems, not just give advice.",
          "Quantify the improvement.",
        ],
      },
    ],
    commonMistakes: [
      "Saying 'we' instead of 'I' — interviewers want YOUR contribution.",
      "Focusing on the technical solution without explaining the business impact.",
      "Giving vague results ('it was faster') instead of specific metrics.",
      "Choosing examples where you weren't the primary decision-maker.",
      "Not mentioning what you learned or would do differently.",
    ],
    faqs: [
      {
        question: "How many behavioral questions should I prepare for a software engineer interview?",
        answer: "Prepare 8-10 STAR stories that cover: debugging, technical decisions, collaboration, conflict, mentoring, and shipping under pressure. Most FAANG-style interviews have 1-2 behavioral rounds with 4-6 questions each.",
      },
      {
        question: "Should I use technical jargon in my STAR answers?",
        answer: "Match your audience. With engineers, use technical terms. With hiring managers or recruiters, explain the impact in plain language. When in doubt, briefly explain the technical context then focus on the outcome.",
      },
      {
        question: "Can I use the same story for multiple questions?",
        answer: "Yes, but emphasize different aspects. A story about debugging a production issue can answer 'tell me about working under pressure' and 'describe a time you improved a system' — just shift the focus between urgency and technical depth.",
      },
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager Interview Questions — STAR Method Examples (2026)",
    h1: "Product Manager Interview Questions & STAR Method Answers",
    metaDescription:
      "Master product manager behavioral interviews with 10 STAR method questions and sample answers. Practice with AI feedback for free.",
    type: "role",
    intro:
      "Product manager interviews evaluate your ability to make decisions with ambiguity, influence without authority, and ship products that move metrics. Behavioral questions reveal how you actually operate.",
    whyAsked: [
      "PMs make hundreds of small decisions — they need to see your decision-making framework.",
      "You'll work with engineering, design, sales, and executives — they want to see how you navigate different stakeholders.",
      "Past product decisions show whether you think about users, business, and technical feasibility together.",
    ],
    questions: [
      {
        question: "Tell me about a time you had to say no to a feature request from a major customer.",
        starExample: {
          situation: "Our largest enterprise customer (20% of revenue) requested a custom reporting feature that would take 3 months to build.",
          task: "I needed to maintain the relationship while protecting our product roadmap.",
          action: "I analyzed the request and found that 80% of their need could be solved with existing features configured differently. I presented the analysis, offered to customize their setup, and added the remaining 20% to our Q3 roadmap.",
          result: "The customer stayed happy, we saved 2 months of engineering time, and the feature eventually benefited 15 other enterprise accounts.",
        },
        tips: [
          "Show you use data to make decisions, not just gut feeling.",
          "Demonstrate you can push back while maintaining relationships.",
          "Highlight the broader impact beyond the one customer.",
        ],
      },
      {
        question: "Describe a time you launched a feature that didn't hit its metrics.",
        starExample: {
          situation: "We launched a new onboarding flow expecting 30% improvement in activation. After 2 weeks, activation was flat.",
          task: "I needed to diagnose why and decide whether to iterate or revert.",
          action: "I dug into the funnel data and found the drop was in step 3 — users were confused by a new terminology. I ran a quick user test, simplified the copy, and A/B tested the fix.",
          result: "The updated version improved activation by 22%. I documented the process and now always run usability tests before launching onboarding changes.",
        },
        tips: [
          "Be honest about failures — it shows self-awareness.",
          "Focus on what you did to fix it, not just the failure.",
          "Show what you learned and how it changed your process.",
        ],
      },
      {
        question: "Give an example of how you used data to change the direction of a product.",
        starExample: {
          situation: "Our team was planning to build a social sharing feature based on competitor analysis.",
          task: "Before committing engineering resources, I wanted to validate the hypothesis.",
          action: "I set up a fake-door test — added a 'Share' button that showed a 'Coming soon' message. I tracked clicks over 2 weeks and surveyed users who clicked.",
          result: "Only 2% of users clicked, and most said they'd never actually share. We killed the feature and redirected the 6-week effort to the search improvement that users actually requested in surveys.",
        },
        tips: [
          "Show you validate before building.",
          "Demonstrate comfort with quantitative and qualitative data.",
          "Highlight the resource savings from not building the wrong thing.",
        ],
      },
    ],
    commonMistakes: [
      "Talking about what the team did without clarifying YOUR role.",
      "Not quantifying impact (revenue, users, conversion rates).",
      "Choosing examples where everything went smoothly — they want to see how you handle failure.",
      "Forgetting to mention stakeholders you had to influence.",
      "Not connecting your example to the company's product or values.",
    ],
    faqs: [
      {
        question: "What's the most important skill PM interviewers look for in behavioral rounds?",
        answer: "Decision-making under ambiguity. Every behavioral question is secretly asking: 'How do you figure out what to do when you don't have perfect information?' Show your framework, not just the outcome.",
      },
      {
        question: "How should I prepare for PM behavioral interviews?",
        answer: "Build a story bank of 8-10 experiences covering: data-driven decisions, stakeholder management, failure recovery, launching products, prioritization, and cross-functional collaboration. Practice adapting each story to different questions.",
      },
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst Interview Questions — STAR Method Examples (2026)",
    h1: "Data Analyst Interview Questions & STAR Method Answers",
    metaDescription:
      "Prepare for data analyst interviews with STAR method behavioral questions and sample answers. Practice with AI feedback for free.",
    type: "role",
    intro:
      "Data analyst interviews test your ability to turn raw data into actionable insights, communicate findings to non-technical stakeholders, and handle ambiguous business problems with rigor.",
    whyAsked: [
      "They want to see how you approach messy, real-world data problems.",
      "Communication matters as much as technical skill — can you explain insights to a PM or executive?",
      "Past projects show your analytical depth and business impact.",
    ],
    questions: [
      {
        question: "Tell me about a time your analysis changed a business decision.",
        starExample: {
          situation: "The marketing team wanted to increase ad spend by 50% based on strong click-through rates.",
          task: "I was asked to validate whether the increased spend would be profitable.",
          action: "I built a cohort analysis showing that while CTR was high, the acquired users had 60% lower LTV than organic users. I presented the findings with a recommendation to target a different audience segment.",
          result: "We reallocated 30% of the budget to the higher-LTV segment, improving overall ROAS by 25% without increasing total spend.",
        },
        tips: [
          "Show you think beyond the surface metric.",
          "Demonstrate you proactively dig deeper when something looks off.",
          "Quantify the business impact of your analysis.",
        ],
      },
      {
        question: "Describe a time you had to work with messy or incomplete data.",
        starExample: {
          situation: "I was tasked with building a customer churn model, but 40% of customer records had missing fields.",
          task: "I needed to deliver actionable insights within 2 weeks despite the data quality issues.",
          action: "I documented the gaps, used multiple imputation for missing values, and ran sensitivity analysis to show which conclusions were robust. I also flagged the data quality issues to the engineering team with specific recommendations.",
          result: "The model achieved 78% accuracy. More importantly, the engineering fixes I recommended reduced missing data by 60% for future analyses.",
        },
        tips: [
          "Don't hide data problems — address them transparently.",
          "Show you can still deliver value despite imperfect conditions.",
          "Mention the systemic improvements you drove.",
        ],
      },
    ],
    commonMistakes: [
      "Focusing on tools (SQL, Python, Tableau) instead of business impact.",
      "Not explaining WHY your analysis mattered to the business.",
      "Giving generic answers without specific metrics.",
      "Not mentioning how you communicated findings to stakeholders.",
    ],
    faqs: [
      {
        question: "What's the difference between data analyst and data scientist behavioral questions?",
        answer: "Data analyst questions focus more on communication, business impact, and working with stakeholders. Data scientist questions lean toward experimentation, modeling decisions, and handling ambiguity in research. Both value clear storytelling with data.",
      },
    ],
  },
  // === COMPANY-BASED (Tier 1) ===
  {
    slug: "amazon",
    title: "Amazon Interview Questions — STAR Method & Leadership Principles (2026)",
    h1: "Amazon Interview Questions — STAR Method & Leadership Principles",
    metaDescription:
      "Prepare for Amazon interviews with STAR method answers aligned to Leadership Principles. 10 behavioral questions with sample answers. Free practice.",
    type: "company",
    intro:
      "Amazon interviews are built around their 16 Leadership Principles. Every behavioral question maps to 1-2 principles. Your STAR answers need to explicitly demonstrate these principles through real examples.",
    whyAsked: [
      "Amazon uses a 'Bar Raiser' process — every answer is scored against Leadership Principles.",
      "They want 'peculiar' examples that show you think like an Amazonian.",
      "The interviewer is looking for specific, data-backed evidence, not generalizations.",
    ],
    questions: [
      {
        question: "Tell me about a time you obsessed over a customer problem.",
        starExample: {
          situation: "Customer complaints about our checkout flow had increased 40% month-over-month.",
          task: "As the product owner, I needed to identify and fix the root cause within the sprint.",
          action: "I read 200 customer support tickets, watched 15 session recordings, and found the issue: a confusing error message on the payment page. I worked with design to simplify the flow and with engineering to add clearer error states.",
          result: "Checkout complaints dropped 65% and conversion improved by 8%. I established a monthly review of customer feedback as a standing agenda item.",
        },
        tips: [
          "Use the word 'obsess' — it's an Amazon Leadership Principle.",
          "Show you go deep into customer pain, not just surface-level metrics.",
          "Demonstrate you created a lasting process, not just a one-time fix.",
        ],
      },
      {
        question: "Describe a time you had to make a decision without enough data.",
        starExample: {
          situation: "We had 48 hours to decide whether to delay a launch due to a potential security vulnerability.",
          task: "I needed to weigh the security risk against the business impact of missing our Q4 launch window.",
          action: "I assessed the vulnerability severity (medium), consulted with security to understand exploitability, and decided to launch with a mitigation plan and a dedicated sprint to fix the vulnerability in week 2.",
          result: "We launched on time with no security incidents. The vulnerability was patched within 10 days. The framework I used became our standard for launch risk decisions.",
        },
        tips: [
          "Amazon values 'Bias for Action' — show you can decide quickly.",
          "Explain your risk assessment framework.",
          "Show you balanced multiple factors (security, business, timeline).",
        ],
      },
      {
        question: "Tell me about a time you disagreed with your manager and how you handled it.",
        starExample: {
          situation: "My manager wanted to use a monolithic architecture for a new service, but I believed microservices would be more scalable.",
          task: "I needed to voice my disagreement constructively while respecting the decision-making process.",
          action: "I built a technical design document comparing both approaches with projected costs, scaling characteristics, and maintenance overhead. I presented it in our architecture review and asked the team for input.",
          result: "After discussion, we chose a hybrid approach — monolith for the core with microservices for the scaling-heavy components. My manager appreciated the data-driven approach and started requiring design docs for all architecture decisions.",
        },
        tips: [
          "Show 'Have Backbone; Disagree and Commit' in action.",
          "Demonstrate you disagree with data, not emotions.",
          "Show the relationship stayed strong after the disagreement.",
        ],
      },
    ],
    commonMistakes: [
      "Not referencing Amazon Leadership Principles by name or concept.",
      "Giving answers that sound rehearsed or generic.",
      "Focusing on 'we' instead of 'I' — Amazon interviewers drill into YOUR specific actions.",
      "Choosing examples without measurable results.",
      "Not showing bias for action — Amazon wants people who move fast.",
    ],
    faqs: [
      {
        question: "How many Leadership Principles should I cover in my Amazon interview?",
        answer: "Prepare at least one story per principle, but expect each story to naturally cover 2-3 principles. In a typical loop of 5-6 interviews, you'll need to cover most of the 16 principles across your answers.",
      },
      {
        question: "What are the most important Amazon Leadership Principles for behavioral interviews?",
        answer: "Customer Obsession, Ownership, Bias for Action, Deliver Results, and Dive Deep come up most frequently. But be prepared for all 16 — Bar Raisers specifically look for less common ones like 'Learn and Be Curious' and 'Earn Trust'.",
      },
    ],
  },
  {
    slug: "google",
    title: "Google Interview Questions — STAR Method & Googleyness (2026)",
    h1: "Google Interview Questions — STAR Method Answers & Tips",
    metaDescription:
      "Prepare for Google interviews with STAR method behavioral questions. Sample answers for Googleyness, leadership, and role-related questions. Free practice.",
    type: "company",
    intro:
      "Google behavioral interviews evaluate four areas: General Cognitive Ability, Leadership, Role-Related Knowledge, and Googleyness. Your STAR answers need to show intellectual humility, collaboration, and impact at scale.",
    whyAsked: [
      "Google looks for 'Googleyness' — comfort with ambiguity, bias toward action, and collaborative nature.",
      "They evaluate how you think, not just what you did.",
      "Impact at scale matters — Google wants to see your work affected many users or teams.",
    ],
    questions: [
      {
        question: "Tell me about a time you took a risk and it didn't work out.",
        starExample: {
          situation: "I proposed migrating our authentication service to a new framework I'd researched, expecting 3x performance improvement.",
          task: "I led the migration with a team of 3 engineers over 4 weeks.",
          action: "After 3 weeks, we discovered the new framework had a critical incompatibility with our session management. I made the call to halt the migration and revert, documenting everything we learned.",
          result: "We lost 3 weeks of work, but the documentation helped another team avoid the same mistake 6 months later. I now always build a time-boxed proof-of-concept before committing to a full migration.",
        },
        tips: [
          "Google values intellectual humility — show you can admit mistakes.",
          "Focus on what you learned, not just the failure.",
          "Show the systemic improvement that came from the failure.",
        ],
      },
      {
        question: "Describe a time you had to work with someone whose style was very different from yours.",
        starExample: {
          situation: "I was paired with a designer who preferred to work asynchronously and rarely spoke in meetings, while I prefer real-time collaboration.",
          task: "We needed to ship a feature together in 3 weeks.",
          action: "I asked about their preferred workflow and adapted — we switched to written design docs with async comments instead of live meetings. I added structured feedback templates to make reviews more efficient.",
          result: "We shipped on time and the collaboration was so effective that the async-first process was adopted by 2 other teams. I learned that adapting my style gets better results than expecting others to match mine.",
        },
        tips: [
          "Show you adapt to others, not the other way around.",
          "Demonstrate empathy and curiosity about different working styles.",
          "Highlight the broader team impact of your adaptation.",
        ],
      },
    ],
    commonMistakes: [
      "Not showing intellectual humility — Google hates arrogance.",
      "Giving answers that don't demonstrate scale or impact.",
      "Focusing too much on technical details and not enough on collaboration.",
      "Not showing curiosity or learning from the experience.",
      "Being too formal — Google values authentic, conversational answers.",
    ],
    faqs: [
      {
        question: "What is 'Googleyness' in a Google interview?",
        answer: "Googleyness is a combination of comfort with ambiguity, bias toward action, collaborative nature, and valuing diverse perspectives. Show you're someone people enjoy working with who can thrive in an unstructured environment.",
      },
    ],
  },
  // === COMPETENCY-BASED (Tier 1) ===
  {
    slug: "leadership",
    title: "Leadership Interview Questions — STAR Method Examples (2026)",
    h1: "Leadership Interview Questions & STAR Method Answers",
    metaDescription:
      "Master leadership behavioral interview questions with STAR method sample answers. Prove your leadership skills with structured examples. Free practice.",
    type: "competency",
    intro:
      "Leadership questions aren't just for managers. Every employer wants to see that you can influence, motivate, and drive results — whether you have formal authority or not.",
    whyAsked: [
      "Leadership is about impact, not title — they want to see you've made things happen.",
      "They're evaluating your ability to handle conflict, make decisions, and inspire others.",
      "Past leadership examples predict how you'll handle similar situations at their company.",
    ],
    questions: [
      {
        question: "Tell me about a time you led a team through a difficult project.",
        starExample: {
          situation: "Our team was behind schedule on a critical product launch with 3 engineers out sick.",
          task: "As the project lead, I needed to deliver on time with 40% less capacity.",
          action: "I re-scoped the project to focus on the must-have features, redistributed work based on each person's strengths, and set up daily 15-minute standups to unblock issues quickly. I also escalated to get one contractor for 2 weeks.",
          result: "We launched 2 days late (vs. the projected 2 weeks) with all critical features. The team rated the project 4.5/5 in the retrospective, and the re-scoping framework became our standard for resource-constrained projects.",
        },
        tips: [
          "Show you make tough calls under pressure.",
          "Demonstrate you protect your team while delivering results.",
          "Highlight the lasting process improvement.",
        ],
      },
      {
        question: "Give an example of when you had to motivate a disengaged team member.",
        starExample: {
          situation: "A senior engineer on my team had become quiet in meetings and was delivering at 50% of their usual pace.",
          task: "I needed to understand what was going on and help them re-engage.",
          action: "I scheduled a private 1:1 and asked open-ended questions. I learned they felt stuck on repetitive tasks. I worked with management to assign them a greenfield project that matched their interests.",
          result: "Their output returned to normal within 2 weeks, and they delivered the best feature of the quarter. I now check in with team members monthly about their growth interests.",
        },
        tips: [
          "Show empathy and genuine care for people.",
          "Demonstrate you solve root causes, not symptoms.",
          "Highlight the systemic change you implemented.",
        ],
      },
    ],
    commonMistakes: [
      "Only giving examples where you had a formal leadership title.",
      "Focusing on what you told people to do instead of how you influenced them.",
      "Not showing empathy or emotional intelligence.",
      "Choosing examples without measurable team outcomes.",
    ],
    faqs: [
      {
        question: "Can I use examples where I wasn't a manager?",
        answer: "Absolutely. Leadership is about influence, not authority. Examples of leading without a title — like driving a process change, mentoring a colleague, or championing a project — are often more impressive than management examples.",
      },
    ],
  },
  {
    slug: "conflict-resolution",
    title: "Conflict Resolution Interview Questions — STAR Method (2026)",
    h1: "Conflict Resolution Interview Questions & STAR Method Answers",
    metaDescription:
      "Prepare for conflict resolution interview questions with STAR method examples. Show you can handle workplace disagreements professionally. Free practice.",
    type: "competency",
    intro:
      "Conflict resolution questions test your emotional intelligence, communication skills, and ability to find win-win solutions. Every workplace has conflict — employers want to see you handle it constructively.",
    whyAsked: [
      "They want to see you can disagree without creating enemies.",
      "Conflict handling reveals your emotional intelligence and maturity.",
      "Past conflict resolution predicts how you'll handle future team dynamics.",
    ],
    questions: [
      {
        question: "Tell me about a time you had a conflict with a coworker.",
        starExample: {
          situation: "A colleague and I disagreed about the technical approach for a shared project. Tensions rose and we started CC'ing our managers on every email.",
          task: "I needed to resolve the conflict before it affected the project timeline.",
          action: "I suggested we grab coffee and talk it through offline. I listened to their concerns first, then shared mine. We found that we actually agreed on 80% of the approach — the disagreement was about one specific component.",
          result: "We combined the best of both approaches and delivered on time. We also established a rule: if a disagreement goes beyond 2 emails, have a conversation instead.",
        },
        tips: [
          "Show you take initiative to resolve conflict, not avoid it.",
          "Demonstrate active listening — you heard their perspective first.",
          "Highlight the process improvement that prevented future conflicts.",
        ],
      },
    ],
    commonMistakes: [
      "Saying you've never had a conflict — that's not believable.",
      "Painting the other person as entirely wrong.",
      "Focusing on winning the argument instead of finding a solution.",
      "Not showing what you learned from the experience.",
    ],
    faqs: [
      {
        question: "What if the conflict wasn't resolved?",
        answer: "That's okay — be honest. Focus on what you did to try to resolve it, what you learned, and how it changed your approach. Interviewers value honesty over a perfect outcome.",
      },
    ],
  },
  {
    slug: "tell-me-about-yourself",
    title: "Tell Me About Yourself — STAR Method Answer Framework (2026)",
    h1: "How to Answer 'Tell Me About Yourself' with the STAR Method",
    metaDescription:
      "Learn how to answer 'Tell me about yourself' in interviews using a proven framework. Sample answers for different experience levels. Free practice.",
    type: "competency",
    intro:
      "'Tell me about yourself' is the most common interview opening. It's not an invitation to recite your resume — it's a chance to set the narrative for the entire interview.",
    whyAsked: [
      "The interviewer wants a quick snapshot of your professional journey.",
      "They're evaluating your communication skills and self-awareness.",
      "Your answer sets the frame for the rest of the interview.",
    ],
    questions: [
      {
        question: "Tell me about yourself.",
        starExample: {
          situation: "I'm a product manager with 5 years of experience in B2B SaaS, most recently at a Series B startup.",
          task: "In my current role, I own the entire onboarding experience for new enterprise customers.",
          action: "I redesigned the onboarding flow based on customer interviews and data analysis, reducing time-to-value from 14 days to 5 days. I also built a self-serve onboarding track that handles 60% of customers without CSM involvement.",
          result: "These changes improved 90-day retention by 18% and freed up our CSM team to focus on high-value accounts. I'm now looking to bring this user-centric, data-driven approach to a larger-scale product.",
        },
        tips: [
          "Use the Present-Past-Future framework: where you are, how you got here, where you're going.",
          "Keep it to 90 seconds — they'll ask follow-ups if interested.",
          "End with why you're excited about THIS role.",
        ],
      },
    ],
    commonMistakes: [
      "Reciting your entire resume chronologically.",
      "Going into personal details (hometown, family, hobbies) unless relevant.",
      "Taking more than 2 minutes.",
      "Not connecting your story to the role you're interviewing for.",
      "Being too modest or too boastful.",
    ],
    faqs: [
      {
        question: "How long should my 'tell me about yourself' answer be?",
        answer: "60-90 seconds. Think of it as a movie trailer — give the highlights that make them want to learn more, not the full story.",
      },
      {
        question: "Should I mention my education?",
        answer: "Only if it's recent (last 3 years) or directly relevant to the role. For experienced professionals, focus on your career trajectory and impact.",
      },
    ],
  },
  // === MORE ROLES (Tier 2) ===
  {
    slug: "marketing-manager",
    title: "Marketing Manager Interview Questions — STAR Method (2026)",
    h1: "Marketing Manager Interview Questions & STAR Method Answers",
    metaDescription:
      "Prepare for marketing manager interviews with STAR method behavioral questions and sample answers. Prove your marketing impact. Free practice.",
    type: "role",
    intro:
      "Marketing manager interviews test your ability to drive growth, manage campaigns, work with cross-functional teams, and make data-driven decisions. Behavioral questions reveal how you actually operate under pressure.",
    whyAsked: [
      "They want to see you can balance creativity with data-driven decision making.",
      "Marketing requires cross-functional collaboration — they need to see you work well with sales, product, and design.",
      "Past campaign performance predicts future results.",
    ],
    questions: [
      {
        question: "Tell me about a campaign that didn't perform as expected.",
        starExample: {
          situation: "We launched a paid social campaign expecting 5% conversion rate, but it only achieved 1.2%.",
          task: "I needed to diagnose the issue and decide whether to optimize or reallocate the budget.",
          action: "I analyzed the audience segments and found our targeting was too broad. I narrowed to lookalike audiences based on our highest-LTV customers, refreshed the creative to address specific pain points, and A/B tested landing pages.",
          result: "Conversion improved to 4.8% within 2 weeks. The audience insights we gained also improved our email targeting, boosting open rates by 15%.",
        },
        tips: [
          "Show you're comfortable with failure and quick iteration.",
          "Demonstrate analytical rigor in diagnosing problems.",
          "Highlight the ripple effect of your learnings.",
        ],
      },
    ],
    commonMistakes: [
      "Talking about vanity metrics (impressions, followers) instead of business impact.",
      "Not showing data literacy or analytical thinking.",
      "Giving examples without clear before/after metrics.",
      "Not mentioning collaboration with other teams.",
    ],
    faqs: [
      {
        question: "What metrics should I mention in marketing behavioral answers?",
        answer: "Focus on business metrics: conversion rate, CAC, LTV, ROAS, revenue impact. Avoid vanity metrics unless you can connect them to business outcomes.",
      },
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager Interview Questions — STAR Method (2026)",
    h1: "Project Manager Interview Questions & STAR Method Answers",
    metaDescription:
      "Master project manager behavioral interviews with STAR method questions and sample answers. Show your delivery and stakeholder skills. Free practice.",
    type: "role",
    intro:
      "Project manager interviews evaluate your ability to deliver on time, manage stakeholders, handle scope creep, and keep teams aligned. Behavioral questions reveal your actual delivery track record.",
    whyAsked: [
      "They want evidence you can actually ship projects, not just plan them.",
      "Stakeholder management is critical — they need to see you navigate competing priorities.",
      "Past project failures show your resilience and problem-solving ability.",
    ],
    questions: [
      {
        question: "Tell me about a project that was at risk of missing its deadline.",
        starExample: {
          situation: "A critical product launch was 3 weeks behind schedule due to unexpected technical complexity.",
          task: "As the project manager, I needed to get us back on track without sacrificing quality.",
          action: "I facilitated a scope review with stakeholders, identified features that could be deferred to phase 2, negotiated a 1-week extension with the VP, and restructured the team into parallel workstreams.",
          result: "We launched only 1 week late instead of the projected 4 weeks. The phased approach actually improved the product because we got user feedback on phase 1 before building phase 2.",
        },
        tips: [
          "Show you're proactive — you caught the risk early.",
          "Demonstrate stakeholder management and negotiation skills.",
          "Highlight the silver lining or unexpected benefit.",
        ],
      },
    ],
    commonMistakes: [
      "Talking about project plans instead of actual delivery outcomes.",
      "Not showing how you handled scope creep or changing requirements.",
      "Giving examples where you just escalated instead of solving the problem.",
      "Not quantifying the impact (on time, on budget, etc.).",
    ],
    faqs: [
      {
        question: "Should I mention specific project management methodologies (Agile, Scrum, etc.)?",
        answer: "Only if relevant to the story. Focus on the outcome and your decision-making process. Saying 'I used Scrum' is less impressive than showing how you adapted the process to deliver results.",
      },
    ],
  },
  // === MORE COMPANIES (Tier 2) ===
  {
    slug: "meta",
    title: "Meta (Facebook) Interview Questions — STAR Method (2026)",
    h1: "Meta Interview Questions — STAR Method Answers & Tips",
    metaDescription:
      "Prepare for Meta (Facebook) interviews with STAR method behavioral questions. Sample answers for move fast, be bold, and other Meta values. Free practice.",
    type: "company",
    intro:
      "Meta interviews evaluate you against their core values: Move Fast, Be Bold, Focus on Long-term Impact, Build Awesome Things, and Live in the Future. Behavioral questions map directly to these values.",
    whyAsked: [
      "Meta values 'Move Fast' — they want to see you ship quickly and iterate.",
      "They look for 'Be Bold' — taking calculated risks, not playing it safe.",
      "Impact at scale is non-negotiable — Meta serves billions of users.",
    ],
    questions: [
      {
        question: "Tell me about a time you moved fast on an important decision.",
        starExample: {
          situation: "A competitor launched a feature similar to one on our 3-month roadmap.",
          task: "I had to decide within 24 hours whether to accelerate our timeline.",
          action: "I pulled the team together, assessed our progress (we were 40% done), and decided to ship a minimal version in 1 week. I cut 3 non-critical features and focused on the core value proposition.",
          result: "We shipped in 9 days. User adoption was 3x our projections because we focused on the one thing users cared about most. The stripped-down approach became our default for competitive responses.",
        },
        tips: [
          "Use the phrase 'move fast' — it resonates with Meta interviewers.",
          "Show you make trade-offs deliberately, not carelessly.",
          "Demonstrate speed without sacrificing user value.",
        ],
      },
    ],
    commonMistakes: [
      "Being too cautious — Meta wants bold thinkers.",
      "Not showing impact at scale (millions of users, not hundreds).",
      "Being too rigid about process — Meta values flexibility.",
      "Not demonstrating user empathy.",
    ],
    faqs: [
      {
        question: "What are Meta's most important values for behavioral interviews?",
        answer: "Move Fast, Be Bold, Focus on Long-term Impact, Build Awesome Things, and Live in the Future. Prepare stories that demonstrate each of these, with specific metrics showing scale.",
      },
    ],
  },
  {
    slug: "microsoft",
    title: "Microsoft Interview Questions — STAR Method (2026)",
    h1: "Microsoft Interview Questions — STAR Method Answers & Tips",
    metaDescription:
      "Prepare for Microsoft interviews with STAR method behavioral questions. Sample answers for growth mindset, inclusion, and collaboration. Free practice.",
    type: "company",
    intro:
      "Microsoft interviews evaluate Growth Mindset, Diversity & Inclusion, Customer Obsession, and One Microsoft (collaboration). Since Satya Nadella's transformation, Microsoft values learning and empathy over knowing everything.",
    whyAsked: [
      "Microsoft values 'Growth Mindset' — they want to see you learn from failures.",
      "'One Microsoft' means collaboration across teams — show you break silos.",
      "Customer obsession drives everything — show you start with the user.",
    ],
    questions: [
      {
        question: "Tell me about a time you learned something from a failure.",
        starExample: {
          situation: "I shipped a feature without adequate testing and it caused a P1 incident affecting 10,000 users.",
          task: "I needed to fix the immediate issue and prevent it from happening again.",
          action: "I led the incident response, communicated transparently with affected users, and conducted a blameless post-mortem. I then built an automated testing checklist that became required for all deployments.",
          result: "Zero similar incidents in the following year. The testing checklist was adopted by 4 other teams. I learned that speed without safety is just recklessness.",
        },
        tips: [
          "Use the phrase 'growth mindset' — it's core to Microsoft culture.",
          "Show genuine learning, not just fixing the immediate problem.",
          "Demonstrate the systemic improvement you drove.",
        ],
      },
    ],
    commonMistakes: [
      "Not showing vulnerability or willingness to learn.",
      "Being too individual-focused — Microsoft values collaboration.",
      "Not connecting your work to customer impact.",
      "Ignoring diversity and inclusion aspects.",
    ],
    faqs: [
      {
        question: "How is Microsoft's interview different from other tech companies?",
        answer: "Microsoft places more emphasis on growth mindset, collaboration, and empathy compared to other tech companies. They want to see you're coachable and that you lift others up, not just deliver individually.",
      },
    ],
  },
];

export function getInterviewQuestionPage(slug: string): InterviewQuestionPage | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getAllInterviewQuestionSlugs(): string[] {
  return pages.map((p) => p.slug);
}

export function getInterviewPagesByType(type: "role" | "company" | "competency") {
  return pages.filter((p) => p.type === type);
}

export default pages;
