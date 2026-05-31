// ============================================================
// PROJECT DATA — add or edit projects here
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
      ],
      figures: [
        { caption: "Fig1 — War exposure frequency distribution", src: "" },
        { caption: "Fig2 — Knowledge score by coping strategy", src: "" }
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
        { val: "91.2%", lbl: "Tanks Covered Tight" },
        { val: "62.5%", lbl: "Clean Monthly" },
        { val: "91.2%", lbl: "Believe Water Causes Disease" },
        { val: "37.5%", lbl: "Sought Treatment" },
        { val: "OR=19.1", lbl: "Belief → Treatment Seeking" }
      ],
      findings: [
        { analysis: "Primary water source distribution", method: "Descriptive frequencies", result: "Wells 51.2% · Tankers 26.2% · Public network 13.8% · Bottled 3.8% · Vendors 2.5% · Station 1.2%" },
        { analysis: "Regular water access", method: "Descriptive frequencies", result: "71.2% report irregular supply · 28.8% regular" },
        { analysis: "Water storage practices", method: "Descriptive frequencies", result: "81.2% store at home · 57.5% use barrels · 28.8% overhead tanks · 7.5% ground tanks · 6.2% jerrycans" },
        { analysis: "Tank cleaning frequency", method: "Descriptive frequencies", result: "62.5% monthly · 23.8% every 3 months · 6.2% every 6 months · 7.5% never" },
        { analysis: "Cleaning method", method: "Descriptive frequencies", result: "50% water + soap · 40% water only · 3.8% chlorine · 6.2% don't know" },
        { analysis: "Boiling before drinking", method: "Descriptive frequencies", result: "76.2% never · 21.2% sometimes · 2.5% always" },
        { analysis: "Home filter use", method: "Descriptive frequencies", result: "82.5% no filter · 17.5% use filter" },
        { analysis: "Sensory problems (color/smell/taste)", method: "Descriptive frequencies", result: "42.5% report problems · 35% color change · 28.8% bad taste · 8.8% abnormal smell" },
        { analysis: "Most affected age group", method: "Descriptive frequencies", result: "66.2% children <5 years · 18.8% children 5-15 · 11.2% elderly · 3.8% adults" },
        { analysis: "Tank type × Cleaning frequency", method: "Chi-Square cross-tab", result: "χ² significant (p=0.001) — barrel users clean monthly most often" },
        { analysis: "Belief → Treatment-seeking", method: "Binary Logistic Regression", result: "OR=19.135 (p=0.020) — belief that water causes disease is strongest predictor" },
        { analysis: "Model fit", method: "Logistic Regression diagnostics", result: "Nagelkerke R²=0.414 · Cox & Snell R²=0.303 · Overall correct classification 76.3%" }
      ],
      figures: [
        { caption: "Fig1 — Primary water source distribution", src: "" },
        { caption: "Fig2 — Water storage container types", src: "" },
        { caption: "Fig3 — Tank cleaning frequency by container type", src: "" },
        { caption: "Fig4 — Logistic regression odds ratios", src: "" }
      ]
    }
  }
  // Add more projects here following the same structure
];
