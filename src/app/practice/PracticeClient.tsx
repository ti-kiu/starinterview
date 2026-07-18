"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Speech Recognition types
interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
}

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: () => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

// Types
interface InterviewInfo {
  resume: string;
  position: string;
  jobDescription: string;
  difficulty: "entry" | "mid" | "senior";
  language: "en" | "zh" | "ja" | "ko" | "es" | "fr" | "de";
}

interface FeedbackData {
  scores: {
    situation: number;
    task: number;
    action: number;
    result: number;
    overall: number;
  };
  feedback: string;
  starFeedback: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  highScoreExample: string;
  improvedAnswer: string;
}

interface QuestionFeedback {
  question: string;
  answer: string;
  timeSpent: number;
  feedback: FeedbackData;
}

type Step = "info" | "interview" | "report";

const JOB_PRESETS = [
  {
    title: "Software Engineer",
    titleZh: "软件工程师",
    desc: "Building and maintaining software applications",
    descZh: "构建和维护软件应用程序",
    fullDescription: `Job Title: Software Engineer

Role Summary: We are seeking a skilled Software Engineer to join our engineering team. You will be responsible for designing, developing, and maintaining high-quality software solutions that power our products and services.

Responsibilities:
• Design, develop, and maintain scalable software applications using modern technologies
• Write clean, well-tested, and efficient code following best practices
• Collaborate with cross-functional teams to define and implement new features
• Participate in code reviews and provide constructive feedback to team members
• Troubleshoot, debug, and resolve complex technical issues
• Optimize application performance and ensure reliability
• Stay up-to-date with emerging technologies and industry trends

Requirements:
• Bachelor's degree in Computer Science or related field
• 3+ years of experience in software development
• Proficiency in one or more programming languages (Python, Java, JavaScript, Go, etc.)
• Experience with cloud platforms (AWS, GCP, or Azure)
• Strong problem-solving skills and attention to detail
• Excellent communication and teamwork abilities`,
  },
  {
    title: "Product Manager",
    titleZh: "产品经理",
    desc: "Leading product strategy and cross-functional teams",
    descZh: "领导产品战略和跨职能团队",
    fullDescription: `Job Title: Product Manager

Role Summary: We are looking for an experienced Product Manager to lead the development and execution of our product strategy. You will work closely with engineering, design, and business teams to deliver products that delight our customers and drive business growth.

Responsibilities:
• Define product vision, strategy, and roadmap based on market research and user feedback
• Gather and prioritize product requirements from stakeholders and customers
• Write detailed product requirements documents (PRDs) and user stories
• Work closely with engineering and design teams throughout the product development lifecycle
• Analyze product metrics and user behavior to inform product decisions
• Conduct competitive analysis and identify market opportunities
• Present product updates and strategies to leadership and stakeholders

Requirements:
• Bachelor's degree in Business, Technology, or related field
• 4+ years of experience in product management
• Strong analytical and problem-solving skills
• Excellent communication and presentation abilities
• Experience with Agile/Scrum methodologies
• Data-driven mindset with experience using analytics tools`,
  },
  {
    title: "Data Analyst",
    titleZh: "数据分析师",
    desc: "Analyzing data to drive business decisions",
    descZh: "分析数据以驱动业务决策",
    fullDescription: `Job Title: Data Analyst

Role Summary: We are seeking a Data Analyst to join our data team. You will be responsible for interpreting data, analyzing results, and providing actionable insights that drive strategic business decisions.

Responsibilities:
• Interpret data and analyze results using statistical techniques
• Identify, analyze, and interpret trends or patterns in complex data sets
• Develop and implement data collection systems and strategies
• Create and maintain dashboards and reports for key stakeholders
• Work with management to prioritize business and information needs
• Filter and clean data by reviewing computer reports and performance indicators
• Collaborate with engineering teams to implement data collection improvements

Requirements:
• Bachelor's degree in Statistics, Mathematics, Economics, or related field
• 2+ years of experience in data analysis
• Proficiency in SQL and data visualization tools (Tableau, Power BI, etc.)
• Experience with statistical analysis and modeling
• Strong attention to detail and accuracy
• Excellent communication skills to present findings to non-technical audiences`,
  },
  {
    title: "Marketing Manager",
    titleZh: "市场经理",
    desc: "Planning and executing marketing campaigns",
    descZh: "策划和执行营销活动",
    fullDescription: `Job Title: Marketing Manager

Role Summary: We are looking for a creative and strategic Marketing Manager to lead our marketing efforts. You will be responsible for developing and executing marketing strategies that increase brand awareness, generate leads, and drive customer acquisition.

Responsibilities:
• Develop and implement comprehensive marketing strategies aligned with business goals
• Plan and execute multi-channel marketing campaigns (digital, social media, email, content)
• Manage marketing budget and allocate resources effectively
• Analyze campaign performance and optimize strategies based on data
• Lead market research to identify customer needs and market trends
• Collaborate with sales teams to align marketing and sales efforts
• Manage external agencies and vendors as needed

Requirements:
• Bachelor's degree in Marketing, Business, or related field
• 5+ years of experience in marketing, with at least 2 years in a management role
• Strong understanding of digital marketing channels and tactics
• Experience with marketing analytics and CRM tools
• Excellent project management and organizational skills
• Creative thinking and ability to develop innovative campaigns`,
  },
  {
    title: "Project Manager",
    titleZh: "专案经理",
    desc: "Managing projects and coordinating teams",
    descZh: "项目管理和团队协调",
    fullDescription: `Job Title: Project Manager

Role Summary: We are seeking an experienced Project Manager to lead and manage projects from inception to completion. You will be responsible for planning, executing, and closing projects while ensuring they are delivered on time, within scope, and within budget.

Responsibilities:
• Define project scope, goals, and deliverables in collaboration with stakeholders
• Develop detailed project plans, schedules, and resource allocation
• Manage project risks and issues, and develop mitigation strategies
• Coordinate with cross-functional teams to ensure project alignment
• Track project progress and provide regular status updates to stakeholders
• Facilitate meetings and ensure effective communication among team members
• Conduct post-project evaluations and identify lessons learned

Requirements:
• Bachelor's degree in Business, Management, or related field
• 4+ years of experience in project management
• PMP or equivalent certification preferred
• Strong leadership and team management skills
• Excellent communication and stakeholder management abilities
• Proficiency in project management tools (Jira, Asana, MS Project, etc.)`,
  },
  {
    title: "UX Designer",
    titleZh: "用户体验设计师",
    desc: "Designing user-centered digital experiences",
    descZh: "设计以用户为中心的数字体验",
    fullDescription: `Job Title: UX Designer

Role Summary: We are looking for a talented UX Designer to create exceptional user experiences for our products. You will combine user research, interaction design, and visual design to create intuitive and delightful digital experiences.

Responsibilities:
• Conduct user research, including interviews, surveys, and usability testing
• Create user personas, journey maps, and information architecture
• Design wireframes, prototypes, and high-fidelity mockups
• Collaborate with product managers and engineers to define user requirements
• Develop and maintain design systems and component libraries
• Iterate on designs based on user feedback and analytics data
• Advocate for user-centered design principles across the organization

Requirements:
• Bachelor's degree in Design, HCI, or related field
• 3+ years of experience in UX/UI design
• Proficiency in design tools (Figma, Sketch, Adobe XD)
• Strong portfolio demonstrating user-centered design process
• Experience with prototyping and user testing
• Excellent communication and collaboration skills`,
  },
];

// Translations
const translations = {
  en: {
    // Step 1: Interview Setup
    createInterview: "Create Mock Interview",
    resume: "Resume",
    resumePlaceholder: "Paste your resume here for personalized feedback...",
    position: "Position",
    positionPlaceholder: "e.g. Software Engineer, Product Manager...",
    jobDescription: "Job Description (optional)",
    jobDescriptionPlaceholder: "Paste the job description for more targeted questions...",
    difficulty: "Difficulty",
    entry: "Entry Level",
    mid: "Mid Level",
    senior: "Senior Level",
    language: "Interview Language",
    english: "English",
    chinese: "Chinese",
    japanese: "Japanese",
    korean: "Korean",
    spanish: "Spanish",
    french: "French",
    german: "German",
    startInterview: "Start Interview →",
    generating: "Generating...",

    // Interview
    question: "Question",
    of: "of",
    endReview: "End & Review",
    backToSetup: "← Back to Setup",
    recordAnswer: "Click to start recording",
    stopRecording: "Recording... (click to stop)",
    textInput: "Or type your answer",
    textPlaceholder: "Type your STAR answer here...",
    getFeedback: "Get Feedback",
    analyzing: "Analyzing...",
    overallScore: "Overall Score",
    detailedFeedback: "Detailed Feedback",
    improvedVersion: "Improved Version",
    highScoreExample: "90+ Score Example",
    viewExample: "View Example",
    hideExample: "Hide Example",
    nextQuestion: "Next Question →",
    viewReport: "View Full Report",
    words: "words",
    seconds: "s",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    noVoice: "Voice input not supported in this browser",

    // Report
    interviewReport: "Interview Report",
    avgScore: "Average Score",
    completionTime: "Avg. Answer Time",
    starBreakdown: "STAR Breakdown",
    questionsAndFeedback: "Questions & Feedback",
    exportPDF: "Export PDF",
    startNewInterview: "Start New Interview",
  },
  zh: {
    // Step 1: Interview Setup
    createInterview: "建立模擬面試",
    resume: "履历",
    resumePlaceholder: "粘贴您的简历以获得个性化反馈...",
    position: "面试岗位",
    positionPlaceholder: "如：软件工程师、产品经理...",
    jobDescription: "岗位描述（可选）",
    jobDescriptionPlaceholder: "粘贴岗位描述以获得更有针对性的面试问题...",
    difficulty: "面试难度",
    entry: "应届毕业生",
    mid: "中级",
    senior: "高级",
    language: "面试语言",
    english: "英语",
    chinese: "中文",
    japanese: "日语",
    korean: "韩语",
    spanish: "西班牙语",
    french: "法语",
    german: "德语",
    startInterview: "開始模擬面試",
    generating: "生成中...",

    // Interview
    question: "问题",
    of: "/",
    endReview: "结束并查看",
    backToSetup: "← 返回设置",
    recordAnswer: "点击开始录音回答",
    stopRecording: "录音中...（点击停止）",
    textInput: "或直接输入您的回答",
    textPlaceholder: "在此输入您的STAR回答...",
    getFeedback: "获取反馈",
    analyzing: "分析中...",
    overallScore: "总分",
    detailedFeedback: "详细反馈",
    improvedVersion: "改进版本",
    highScoreExample: "90+分范例",
    viewExample: "查看范例",
    hideExample: "隐藏范例",
    nextQuestion: "下一题 →",
    viewReport: "查看完整报告",
    words: "字",
    seconds: "秒",
    situation: "情境",
    task: "任务",
    action: "行动",
    result: "结果",
    noVoice: "您的浏览器不支持语音输入",

    // Report
    interviewReport: "面试报告",
    avgScore: "平均分",
    completionTime: "平均用时",
    starBreakdown: "STAR维度分析",
    questionsAndFeedback: "问题与反馈",
    exportPDF: "导出PDF",
    startNewInterview: "开始新面试",
  },
};

function getSpeechRecognition(): (new () => SpeechRecognitionInstance) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as Record<string, unknown>;
  const SR = (w.SpeechRecognition || w.webkitSpeechRecognition) as
    | (new () => SpeechRecognitionInstance)
    | undefined;
  return SR || null;
}

function PracticePageInner() {
  const searchParams = useSearchParams();
  const t = translations.en; // Default to English

  // Interview info (Step 1)
  const [interviewInfo, setInterviewInfo] = useState<InterviewInfo>({
    resume: "",
    position: "",
    jobDescription: "",
    difficulty: "mid",
    language: "en",
  });

  // Interview state (Step 3)
  const [step, setStep] = useState<Step>("info");
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [questionFeedbacks, setQuestionFeedbacks] = useState<
    QuestionFeedback[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Voice state
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  // Timer state
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // High score example visibility
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    setVoiceSupported(!!getSpeechRecognition());
  }, []);

  // Timer logic
  useEffect(() => {
    if (step === "interview" && !feedback) {
      setElapsedSeconds(0);
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step, feedback, currentQIndex]);

  const startRecording = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) {
      setError(t.noVoice);
      return;
    }
    const recognition = new SR();
    const langMap: Record<string, string> = {
      en: "en-US",
      zh: "zh-CN",
      ja: "ja-JP",
      ko: "ko-KR",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
    };
    recognition.lang = langMap[interviewInfo.language] || "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    let finalTranscript = "";
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setUserAnswer((prev) => {
        const base = prev ? prev + " " : "";
        return base + finalTranscript;
      });
    };

    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);

    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  }, [interviewInfo.language, t.noVoice]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }, []);

  // Start interview - generate questions
  const handleStartInterview = async () => {
    if (!interviewInfo.position.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: interviewInfo.position,
          jobDescription: interviewInfo.jobDescription,
          language: interviewInfo.language,
          difficulty: interviewInfo.difficulty,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate questions");
      const data = await res.json();
      const questionTexts = data.questions.map(
        (q: { id: number; question: string }) => q.question
      );
      setQuestions(questionTexts);
      setCurrentQIndex(0);
      setQuestionFeedbacks([]);
      setStep("interview");
    } catch {
      setError(
        interviewInfo.language === "zh"
          ? "生成问题失败，请重试"
          : "Failed to generate questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Submit answer
  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) return;

    setLoading(true);
    setError("");
    if (timerRef.current) clearInterval(timerRef.current);

    try {
      const res = await fetch("/api/practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: interviewInfo.position,
          question: questions[currentQIndex],
          userAnswer,
          jobDescription: interviewInfo.jobDescription,
          language: interviewInfo.language,
        }),
      });

      if (!res.ok) throw new Error("Failed to get feedback");
      const data: FeedbackData = await res.json();
      setFeedback(data);
      setShowExample(false);

      setQuestionFeedbacks((prev) => [
        ...prev,
        {
          question: questions[currentQIndex],
          answer: userAnswer,
          timeSpent: elapsedSeconds,
          feedback: data,
        },
      ]);
    } catch {
      setError(
        interviewInfo.language === "zh"
          ? "获取反馈失败，请重试"
          : "Failed to get feedback. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Next question
  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setUserAnswer("");
      setFeedback(null);
      setElapsedSeconds(0);
    } else {
      setStep("report");
    }
  };

  // Calculate averages
  const avgScore =
    questionFeedbacks.length > 0
      ? Math.round(
          questionFeedbacks.reduce(
            (sum, q) => sum + q.feedback.scores.overall,
            0
          ) / questionFeedbacks.length
        )
      : 0;

  const avgTime =
    questionFeedbacks.length > 0
      ? Math.round(
          questionFeedbacks.reduce((sum, q) => sum + q.timeSpent, 0) /
            questionFeedbacks.length
        )
      : 0;

  const avgStarScores =
    questionFeedbacks.length > 0
      ? {
          situation:
            Math.round(
              (questionFeedbacks.reduce(
                (sum, q) => sum + q.feedback.scores.situation,
                0
              ) /
                questionFeedbacks.length) *
                10
            ) / 10,
          task:
            Math.round(
              (questionFeedbacks.reduce(
                (sum, q) => sum + q.feedback.scores.task,
                0
              ) /
                questionFeedbacks.length) *
                10
            ) / 10,
          action:
            Math.round(
              (questionFeedbacks.reduce(
                (sum, q) => sum + q.feedback.scores.action,
                0
              ) /
                questionFeedbacks.length) *
                10
            ) / 10,
          result:
            Math.round(
              (questionFeedbacks.reduce(
                (sum, q) => sum + q.feedback.scores.result,
                0
              ) /
                questionFeedbacks.length) *
                10
            ) / 10,
        }
      : { situation: 0, task: 0, action: 0, result: 0 };

  // ==================== Step 1: Interview Info ====================
  if (step === "info") {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            {t.createInterview}
          </h1>

          {/* Resume */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.resume}
            </label>
            <textarea
              value={interviewInfo.resume}
              onChange={(e) =>
                setInterviewInfo((prev) => ({
                  ...prev,
                  resume: e.target.value,
                }))
              }
              placeholder={t.resumePlaceholder}
              rows={4}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
            />
          </div>

          {/* Position */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.position} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={interviewInfo.position}
              onChange={(e) =>
                setInterviewInfo((prev) => ({
                  ...prev,
                  position: e.target.value,
                }))
              }
              placeholder={t.positionPlaceholder}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.jobDescription}
            </label>
            <textarea
              value={interviewInfo.jobDescription}
              onChange={(e) =>
                setInterviewInfo((prev) => ({
                  ...prev,
                  jobDescription: e.target.value,
                }))
              }
              placeholder={t.jobDescriptionPlaceholder}
              rows={4}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
            />
          </div>

          {/* Difficulty */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.difficulty}
            </label>
            <div className="flex gap-3">
              {(["entry", "mid", "senior"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() =>
                    setInterviewInfo((prev) => ({ ...prev, difficulty: d }))
                  }
                  className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                    interviewInfo.difficulty === d
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  {t[d]}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.language}
            </label>
            <select
              value={interviewInfo.language}
              onChange={(e) =>
                setInterviewInfo((prev) => ({
                  ...prev,
                  language: e.target.value as InterviewInfo["language"],
                }))
              }
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
            >
              <option value="en">{t.english}</option>
              <option value="zh">{t.chinese}</option>
              <option value="ja">{t.japanese}</option>
              <option value="ko">{t.korean}</option>
              <option value="es">{t.spanish}</option>
              <option value="fr">{t.french}</option>
              <option value="de">{t.german}</option>
            </select>
          </div>

          {/* Start button */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleStartInterview}
            disabled={loading || !interviewInfo.position.trim()}
            className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-hover transition disabled:opacity-50 shadow-lg shadow-primary/25"
          >
            {loading ? t.generating : t.startInterview}
          </button>
        </div>
      </div>
    );
  }

  // ==================== Interview ====================
  if (step === "interview") {
    const currentQuestion = questions[currentQIndex];

    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                setStep("info");
                setQuestions([]);
                setQuestionFeedbacks([]);
              }}
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              {t.backToSetup}
            </button>
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <span className="text-sm font-medium">
                {t.question} {currentQIndex + 1} {t.of} {questions.length}
              </span>
            </div>
            <button
              onClick={() => setStep("report")}
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              {t.endReview}
            </button>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 mb-6 shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-neutral-900 text-center leading-relaxed">
              &ldquo;{currentQuestion}&rdquo;
            </p>

            {/* Timer */}
            <p className="text-center text-neutral-400 text-sm mt-4">
              {Math.floor(elapsedSeconds / 60)}:
              {String(elapsedSeconds % 60).padStart(2, "0")} / 2:00
            </p>

            {/* Voice record button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                  isRecording
                    ? "bg-red-500 animate-pulse"
                    : "bg-primary hover:bg-primary-hover"
                } text-white shadow-lg`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center text-neutral-400 text-xs mt-2">
              {isRecording ? t.stopRecording : t.recordAnswer}
            </p>

            {/* Text input */}
            {!feedback && (
              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-2">{t.textInput}</p>
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder={t.textPlaceholder}
                  rows={6}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                />
                <p className="text-xs text-neutral-400 mt-1">
                  {userAnswer.split(/\s+/).filter(Boolean).length} {t.words}
                </p>
              </div>
            )}
          </div>

          {/* Submit button */}
          {!feedback && (
            <button
              onClick={handleSubmitAnswer}
              disabled={loading || !userAnswer.trim()}
              className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition disabled:opacity-50 shadow-lg shadow-primary/25"
            >
              {loading ? t.analyzing : t.getFeedback}
            </button>
          )}

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          {/* Feedback display */}
          {feedback && (
            <div className="mt-8 space-y-6">
              {/* Overall score */}
              <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-6 text-white text-center">
                <p className="text-sm font-medium opacity-80 mb-1">
                  {t.overallScore}
                </p>
                <p className="text-5xl font-bold">
                  {feedback.scores.overall}
                  <span className="text-2xl opacity-80">/100</span>
                </p>
              </div>

              {/* STAR scores with feedback */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(["situation", "task", "action", "result"] as const).map(
                  (key) => (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-neutral-200 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">
                          {t[key]}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {feedback.scores[key]}/10
                        </span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2 mb-3">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{
                            width: `${feedback.scores[key] * 10}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs text-neutral-600">
                        {feedback.starFeedback[key]}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Detailed feedback */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-lg mb-3">
                  {t.detailedFeedback}
                </h3>
                <p className="text-neutral-700 whitespace-pre-wrap leading-relaxed text-sm">
                  {feedback.feedback}
                </p>
              </div>

              {/* Improved version */}
              <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                <h3 className="font-semibold text-lg mb-3 text-green-800">
                  ✅ {t.improvedVersion}
                </h3>
                <p className="text-neutral-700 whitespace-pre-wrap leading-relaxed text-sm">
                  {feedback.improvedAnswer}
                </p>
              </div>

              {/* High score example */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <button
                  onClick={() => setShowExample(!showExample)}
                  className="flex items-center justify-between w-full"
                >
                  <h3 className="font-semibold text-lg">
                    ⭐ {t.highScoreExample}
                  </h3>
                  <span className="text-sm text-primary">
                    {showExample ? t.hideExample : t.viewExample}
                  </span>
                </button>
                {showExample && (
                  <p className="text-neutral-700 whitespace-pre-wrap leading-relaxed text-sm mt-4 pt-4 border-t border-neutral-200">
                    {feedback.highScoreExample}
                  </p>
                )}
              </div>

              {/* Next button */}
              <button
                onClick={handleNextQuestion}
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition shadow-lg shadow-primary/25"
              >
                {currentQIndex < questions.length - 1
                  ? t.nextQuestion
                  : t.viewReport}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ==================== Step 4: Report ====================
  if (step === "report") {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold">
              {t.interviewReport}
            </h1>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition text-sm font-medium"
            >
              📥 {t.exportPDF}
            </button>
          </div>

          {/* Score overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-6 text-white text-center">
              <p className="text-sm opacity-80 mb-1">{t.avgScore}</p>
              <p className="text-5xl font-bold">
                {avgScore}
                <span className="text-2xl opacity-80">/100</span>
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 text-center">
              <p className="text-sm text-neutral-500 mb-1">
                {t.completionTime}
              </p>
              <p className="text-5xl font-bold text-neutral-900">
                {avgTime}
                <span className="text-2xl text-neutral-400">
                  {t.seconds}
                </span>
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 text-center">
              <p className="text-sm text-neutral-500 mb-1">{t.question}</p>
              <p className="text-5xl font-bold text-neutral-900">
                {questionFeedbacks.length}
                <span className="text-2xl text-neutral-400">
                  /{questions.length}
                </span>
              </p>
            </div>
          </div>

          {/* STAR breakdown */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">{t.starBreakdown}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(["situation", "task", "action", "result"] as const).map(
                (key) => (
                  <div key={key} className="text-center">
                    <p className="text-3xl font-bold text-primary">
                      {avgStarScores[key]}
                      <span className="text-lg text-neutral-400">/10</span>
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      {t[key]}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Questions & feedback */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-bold">{t.questionsAndFeedback}</h2>
            {questionFeedbacks.map((qf, i) => (
              <details
                key={i}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 hover:bg-neutral-50 transition list-none">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-medium text-sm text-neutral-900">
                      {qf.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-primary">
                      {qf.feedback.scores.overall}/100
                    </span>
                    <span className="text-neutral-400 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </div>
                </summary>
                <div className="px-6 pb-6 space-y-4 border-t border-neutral-100 pt-4">
                  <div>
                    <p className="text-xs text-neutral-400 mb-1">
                      Your answer ({qf.timeSpent}
                      {t.seconds}):
                    </p>
                    <p className="text-sm text-neutral-700 bg-neutral-50 rounded-lg p-3">
                      {qf.answer}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 mb-1">
                      {t.detailedFeedback}:
                    </p>
                    <p className="text-sm text-neutral-700">
                      {qf.feedback.feedback}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 mb-1">
                      {t.improvedVersion}:
                    </p>
                    <p className="text-sm text-neutral-700 bg-green-50 rounded-lg p-3">
                      {qf.feedback.improvedAnswer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Actions */}
          <button
            onClick={() => {
              setStep("info");
              setQuestions([]);
              setQuestionFeedbacks([]);
              setUserAnswer("");
              setFeedback(null);
              setInterviewInfo({ resume: "", position: "", jobDescription: "", difficulty: "mid", language: "en" });
            }}
            className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-hover transition"
          >
            {t.startNewInterview}
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={<div className="p-8 text-center">Loading...</div>}
    >
      <PracticePageInner />
    </Suspense>
  );
}
