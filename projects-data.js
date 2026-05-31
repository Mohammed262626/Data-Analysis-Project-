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
  },

  {
    id: "p08",
    name: "Contraceptive Results (Graphical Report)",
    domain: "Reproductive Health",
    n: 0,
    methods: ["Descriptive Statistics"],
    highlight: "Data available only as exported charts; no extractable tables",
    status: "done",
    detail: {
      sample: "Not specified",
      location: "Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "Contraceptive use and outcomes",
      stats: [],
      findings: [],
      figures: [
        { caption: "Fig1 — Contraceptive results chart 1", src: "" },
        { caption: "Fig2 — Contraceptive results chart 2", src: "" },
        { caption: "Fig3 — Contraceptive results chart 3", src: "" }
      ]
    }
  },
  {
    id: "p09",
    name: "Neonatal Clinical Outcomes and Risk Factors",
    domain: "Neonatology",
    n: 423,
    methods: ["Descriptive Statistics", "Chi-Square"],
    highlight: "76.6% complete recovery; 62.4% of symptom onset occurred after 72 hours",
    status: "done",
    detail: {
      sample: "423 newborns",
      location: "Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "Neonatal clinical signs, maternal risk factors, treatment and outcomes",
      stats: [
        { val: "76.6%", lbl: "Complete recovery" },
        { val: "63.1%", lbl: "Hospital delivery" },
        { val: "37.6%", lbl: "Symptoms in first 72 h" },
        { val: "66.7%", lbl: "Stay < 7 days" }
      ],
      findings: [
        { analysis: "Final outcome distribution", method: "Descriptive", result: "Complete recovery 76.6%, Death 3.5%, Escape 13.7%" },
        { analysis: "Place of delivery", method: "Descriptive", result: "Hospital 63.1%, Home 36.4%, Health center 0.5%" },
        { analysis: "Maternal risk factors", method: "Descriptive", result: "PROM 17.2%, None 60.1%, UTI 7.8%" }
      ],
      figures: [
        { caption: "Fig1 — Place of delivery distribution", src: "" },
        { caption: "Fig2 — Length of hospital stay", src: "" },
        { caption: "Fig3 — Final outcome distribution", src: "" }
      ]
    }
  },
  {
    id: "p03",
    name: "Cervical Cancer Knowledge, Attitude and Practice Among Nurses",
    domain: "Nursing",
    n: 70,
    methods: ["Descriptive Statistics", "Chi-Square Test", "Cross-tabulation"],
    highlight: "95.7% awareness but 64.3% never attended training; practice remains moderate (70%) despite good knowledge",
    status: "done",
    detail: {
      sample: "70 nurses/healthcare workers",
      location: "Kassala, Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "KAP regarding cervical cancer prevention and screening",
      stats: [
        { val: "95.7%", lbl: "Heard about cervical cancer" },
        { val: "84.3%", lbl: "Positive attitude" },
        { val: "54.3%", lbl: "Good knowledge" },
        { val: "70%", lbl: "Moderate practice" }
      ],
      findings: [
        { analysis: "Knowledge vs Years of experience", method: "Chi-Square", result: "χ² = 2.189, df = 3, p = 0.534" },
        { analysis: "Attitude vs Years of experience", method: "Chi-Square", result: "χ² = 9.696, df = 6, p = 0.138" },
        { analysis: "Practice vs Years of experience", method: "Chi-Square", result: "χ² = 2.830, df = 6, p = 0.830" },
        { analysis: "Overall KAP vs Experience", method: "Chi-Square", result: "χ² = 0.964, df = 3, p = 0.810" }
      ],
      figures: [
        { caption: "Fig1 — Knowledge score distribution", src: "" },
        { caption: "Fig2 — Attitude score distribution", src: "" },
        { caption: "Fig3 — Practice score distribution", src: "" }
      ]
    }
  },
  {
    id: "p04",
    name: "Effects of Chemotherapy on Renal Function in Cancer Patients",
    domain: "Oncology",
    n: 150,
    methods: ["One-sample t-test", "Independent t-test", "Pearson Correlation", "Multiple Regression"],
    highlight: "No-treatment-check group showed significantly higher urea (p=0.001); platinum agents associated with lower urea (p=0.005)",
    status: "done",
    detail: {
      sample: "150 cancer patients",
      location: "Kassala State, Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "Renal biomarkers (urea, creatinine) across chemotherapeutic drug classes",
      stats: [
        { val: "14.0%", lbl: "Abnormal urea" },
        { val: "12.7%", lbl: "Abnormal creatinine" },
        { val: "p=0.005", lbl: "Platinum vs urea" },
        { val: "p=0.001", lbl: "No-treatment-check vs urea" }
      ],
      findings: [
        { analysis: "Descriptive vs clinical reference", method: "One-sample t-test", result: "Urea: t = -9.042, p < 0.001; Creatinine: t = -10.853, p < 0.001" },
        { analysis: "Drug class association", method: "Independent t-test", result: "Platinum: lower urea (p = 0.005); No-treatment-check: higher urea (p = 0.001)" },
        { analysis: "Multivariate prediction", method: "Multiple Regression", result: "No-treatment-check predicted creatinine (β, p = 0.021); model R = 0.375" }
      ],
      figures: [
        { caption: "Fig1 — Urea levels by drug class", src: "" },
        { caption: "Fig2 — Creatinine levels by drug class", src: "" }
      ]
    }
  },
  {
    id: "p05",
    name: "Cancer Patient Demographics and Chemotherapy Side Effects",
    domain: "Oncology",
    n: 100,
    methods: ["Descriptive Statistics", "Cross-tabulation"],
    highlight: "79% peripheral neuropathy, 80% nausea, and 68% hair loss among chemotherapy patients",
    status: "done",
    detail: {
      sample: "100 cancer patients",
      location: "Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "Sociodemographic profile, cancer types, and chemotherapy adverse effects",
      stats: [
        { val: "53%", lbl: "Female" },
        { val: "80%", lbl: "Nausea" },
        { val: "79%", lbl: "Peripheral neuropathy" },
        { val: "68%", lbl: "Hair loss" }
      ],
      findings: [
        { analysis: "Side effect prevalence", method: "Descriptive", result: "Nausea 80%, Vomiting 50%, Diarrhea 35%, Fatigue 58%, Pain 51%" },
        { analysis: "Chemotherapy regimens", method: "Descriptive", result: "Cisplatin 35%, 5-FU 16%, Paclitaxel 14%, Tamoxifen 10%" },
        { analysis: "Renal impairment by cancer type", method: "Cross-tabulation", result: "RCC 25%, Bladder/Cervical/Ovarian 12.5% each" }
      ],
      figures: [
        { caption: "Fig1 — Cancer type distribution", src: "" },
        { caption: "Fig2 — Chemotherapy side effects", src: "" },
        { caption: "Fig3 — Comorbidity vs peripheral neuropathy", src: "" }
      ]
    }
  },
  {
    id: "p06",
    name: "Coagulation Profile and Platelet Indices in Pulmonary Tuberculosis",
    domain: "Pulmonology",
    n: 56,
    methods: ["Descriptive Statistics", "Pearson Correlation", "Independent t-test"],
    highlight: "87.5% had elevated D-dimer; plateletcrit mean (1.984%) was ~5× above the upper reference limit",
    status: "done",
    detail: {
      sample: "56 pulmonary TB patients",
      location: "Kassala TB Center, Eastern Sudan",
      design: "Cross-sectional",
      tool: "IBM SPSS Statistics",
      topic: "Hemostatic alterations in active pulmonary tuberculosis",
      stats: [
        { val: "87.5%", lbl: "Elevated D-dimer" },
        { val: "19.6%", lbl: "Abnormal platelet count" },
        { val: "1.984%", lbl: "Mean PCT (ref <0.39%)" }
      ],
      findings: [
        { analysis: "Coagulation correlations", method: "Pearson r", result: "PT–INR r = 0.763, p < 0.001; PT–D-dimer r = -0.268, p = 0.046" },
        { analysis: "Platelet indices intercorrelation", method: "Pearson r", result: "MPV–P-LCR r = 0.729, p < 0.001; PCT–P-LCR r = -0.430, p = 0.001" },
        { analysis: "Gender comparison", method: "Independent t-test", result: "No significant gender differences for any parameter (all p > 0.05)" }
      ],
      figures: [
        { caption: "Fig1 — D-dimer prevalence", src: "" },
        { caption: "Fig2 — Platelet count distribution", src: "" },
        { caption: "Fig3 — PT vs INR scatter", src: "" }
      ]
    }
  },
  {
    id: "p07",
    name: "Lipid Profile and Magnesium Levels in Type 2 Diabetes",
    domain: "Endocrinology",
    n: 140,
    methods: ["Independent t-test", "Pearson Correlation"],
    highlight: "Diabetics had significantly higher triglycerides (135.9 vs 76.7 mg/dL, p<<0.001) and lower magnesium (1.87 vs 1.96 mg/dL, p<<0.001)",
    status: "done",
    detail: {
      sample: "70 T2DM patients and 70 age/sex-matched controls",
      location: "Kassala State, Sudan",
      design: "Case-control",
      tool: "IBM SPSS Statistics",
      topic: "Association of diabetes with dyslipidemia and hypomagnesemia",
      stats: [
        { val: "135.9", lbl: "Mean TG cases (mg/dL)" },
        { val: "76.7", lbl: "Mean TG controls (mg/dL)" },
        { val: "p<<0.001", lbl: "TG difference" },
        { val: "p<<0.001", lbl: "Magnesium difference" }
      ],
      findings: [
        { analysis: "Cases vs Controls", method: "Independent t-test", result: "TG: p < 0.001; Mg: p < 0.001; Cholesterol: p = 0.187" },
        { analysis: "Age correlation (combined)", method: "Pearson r", result: "Age–TG: r = 0.379, p < 0.001; Age–Mg: r = -0.290, p = 0.001" },
        { analysis: "Mg vs Lipids (diabetics only)", method: "Pearson r", result: "Mg–Chol: r = 0.034, p = 0.782; Mg–TG: r = -0.067, p = 0.580" }
      ],
      figures: [
        { caption: "Fig1 — Triglycerides comparison", src: "" },
        { caption: "Fig2 — Magnesium comparison", src: "" },
        { caption: "Fig3 — Age vs triglycerides correlation", src: "" }
      ]
    }
  }
  // Add more projects here following the same structure
];
