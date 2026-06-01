// ============================================================
// PROJECT DATA — Simply provide the folder name for each project
// ============================================================
const projects = [
  {
    id: "p01",
    name: "War Psychology KAP Study",
    domain: "Community Health",
    n: 300,
    methods: ["Chi-Square", "Spearman ρ", "Regression", "ANOVA"],
    highlight: "97.7% good knowledge · 4.3% sought professional help",
    status: "done",
    folderName: "01_war-psychology-KAP", // Matches your GitHub folder name
    detail: {
      sample: "300 students",
      location: "Omdurman, Sudan",
      design: "Cross-sectional survey",
      tool: "IBM SPSS Statistics",
      topic: "KAP — Psychological effects of war",
      stats: [
        { val: "97.7%", lbl: "Good Knowledge" },
        { val: "88.0%", lbl: "Very Positive Attitude" },
        { val: "65.7%", lbl: "Witnessed Shelling" },
        { val: "4.3%", lbl: "Sought Professional Help" },
        { val: "ρ=.328", lbl: "Knowledge–Attitude Corr." },
        { val: "R²=.044", lbl: "Regression Variance" }
      ],
      findings: [
        { analysis: "Knowledge distribution", method: "Descriptive + cut-points", result: "Mean 19.41/21 · 97.7% Good" },
        { analysis: "Attitude distribution", method: "Descriptive + cut-points", result: "Mean 24.77/28 · 88.0% Very Positive" },
        { analysis: "Knowledge × Attitude", method: "Chi-Square + Spearman ρ", result: "χ²=80.744, p<.001 · ρ=0.328" },
        { analysis: "Knowledge × Practices", method: "Chi-Square × 7 tests", result: "All significant, p<.05" },
        { analysis: "Coping → Knowledge", method: "Multiple Regression + ANOVA", result: "R²=0.044 · F(6,293)=2.270 · p=.037" }
      ]
    }
  },
  {
    id: "p02",
    name: "Water Safety Analysis — Omdurman",
    domain: "Environmental Health",
    n: 80,
    methods: ["Descriptive Stats", "Cross-tabs", "Logistic Regression", "Chi-Square"],
    highlight: "91.3% believe water causes disease · 51.2% rely on wells · OR=19.1 for treatment-seeking",
    status: "done",
    folderName: "02_water-safety-omdurman", 
    detail: {
      sample: "80 households",
      location: "Omdurman, Sudan",
      design: "Cross-sectional household survey",
      tool: "R Studio",
      topic: "Water source, storage, sanitation practices & disease perception",
      stats: [
        { val: "51.2%", lbl: "Wells as Primary Source" },
        { val: "26.2%", lbl: "Tanker Trucks" },
        { val: "81.2%", lbl: "Store Water at Home" },
        { val: "OR=19.1", lbl: "Belief → Treatment Seeking" }
      ],
      findings: [
        { analysis: "Primary water source distribution", method: "Descriptive frequencies", result: "Wells 51.2% · Tankers 26.2%" }
      ]
    }
  }
  // Add remaining projects here similarly...
];
