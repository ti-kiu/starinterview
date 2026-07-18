"use client";

export default function AIFeedbackShowcase() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 max-w-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-primary text-lg">★</span>
        </div>
        <div>
          <p className="font-semibold text-sm">AI Feedback</p>
          <p className="text-xs text-neutral-500">Your STAR Score: 82/100</p>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {[
          { label: "Situation", score: 8, color: "bg-blue-500" },
          { label: "Task", score: 7, color: "bg-green-500" },
          { label: "Action", score: 9, color: "bg-yellow-500" },
          { label: "Result", score: 6, color: "bg-purple-500" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div
              className={`${item.color} text-white text-xs font-bold rounded-lg py-1.5 mb-1`}
            >
              {item.score}/10
            </div>
            <p className="text-[10px] text-neutral-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Improvement Suggestion */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
        <p className="text-xs font-semibold text-amber-800 mb-2">
          💡 Suggested Improvement
        </p>
        <p className="text-xs text-amber-700 leading-relaxed">
          <span className="line-through opacity-60">
            &quot;The project was successful.&quot;
          </span>
        </p>
        <p className="text-xs text-amber-900 font-medium mt-2">
          ✅ &quot;The project increased user retention by 40% and generated
          $2M in additional revenue.&quot;
        </p>
      </div>

      {/* Success Rate */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-green-800">
            📈 Interview Success Rate
          </p>
          <span className="text-xs font-bold text-green-600">+65%</span>
        </div>
        <div className="w-full bg-green-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: "82%" }}
          ></div>
        </div>
        <p className="text-[10px] text-green-600 mt-2">
          Based on 500+ users who practiced with StarInterview
        </p>
      </div>
    </div>
  );
}
