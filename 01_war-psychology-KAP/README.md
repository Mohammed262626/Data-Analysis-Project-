
# 🧠 War Psychology KAP Study — Data Analysis Portfolio

> **Role:** Data Analyst  
> **Tool:** IBM SPSS Statistics  
> **Sample:** 300 Sudanese secondary school students  
> **Topic:** Knowledge, Attitudes & Practices (KAP) regarding psychological effects of war

---

## 📌 Project Overview

This project involved full statistical analysis of a cross-sectional KAP survey conducted among secondary school students affected by the ongoing conflict in Sudan. The data analyst role covered data preparation, descriptive analysis, inferential testing, and regression modelling — from raw responses through to interpreted outputs.

---

## 🗂️ Dataset Summary

| Variable | Detail |
|---|---|
| Sample size | n = 300 |
| Age group | Predominantly 16–18 years (71.7%) |
| Gender | 50% male / 50% female |
| Primary location | Omdurman, Sudan (95.7%) |
| Data type | Ordinal, nominal, multiple-response |
| Analysis software | IBM SPSS Statistics |

---

## 🔬 Analytical Methods Used

| Method | Purpose |
|---|---|
| Frequency & percentage tables | Demographic profiling, war exposure, coping behaviour |
| Mean & standard deviation | Summarising knowledge (max 21) and attitude (max 28) scores |
| Score classification (cut-points) | Categorising participants into Low / Moderate / Good / Positive / Very Positive |
| Cross-tabulation | Examining joint distribution of knowledge × attitude |
| Pearson Chi-Square (χ²) | Testing association between knowledge level and coping practices |
| Spearman's Rank Correlation (ρ) | Measuring strength/direction of knowledge–attitude relationship |
| Multiple Linear Regression | Predicting knowledge scores from coping methods |
| ANOVA (F-test) | Testing overall regression model significance |

---

## 📊 Results & Figures

### Figure 1 — War Exposure Profile

![War Exposure](figures/fig1_war_exposure.png)

The majority of students experienced direct war-related trauma. Witnessing shelling or gunfire was the most prevalent exposure (65.7%), and only 6.3% reported no exposure whatsoever.

---

### Figure 2 — Knowledge & Attitude Distributions

![Knowledge and Attitude](figures/fig2_knowledge_attitude.png)

Students demonstrated a strong **ceiling effect** on the knowledge scale:
- **Mean knowledge score: 19.41 / 21** (SD = 2.05)
- **97.7%** classified as *Good* knowledge
- **Mean attitude score: 24.77 / 28** (SD = 3.22)
- **88.0%** held *Very Positive* attitudes

---

### Figure 3 — Cross-Tabulation: Knowledge × Attitude

![Cross-Tabulation Heatmap](figures/fig3_crosstab_heatmap.png)

A statistically significant association was found between knowledge and attitude levels.

> **χ² = 80.744, df = 4, p < 0.001**  
> **Spearman's ρ = 0.328, p < 0.01** — moderate positive correlation

Students with *Good* knowledge overwhelmingly held *Very Positive* attitudes (261/293). Those with lower knowledge were more likely to remain *Neutral* or merely *Positive*.

---

### Figure 4 — Coping Behaviour When Stressed vs Anxious

![Coping Behaviour](figures/fig4_coping_behaviour.png)

When stressed, students leaned on **social isolation** (34.4%) and **family conversation** (33.5%).  
When anxious, **religious coping dominated**: prayer/supplication (52.1%) and Quran reading (30.3%).

---

### Figure 5 — Primary Support Source

![Support Source](figures/fig5_support_source.png)

**Family** was the primary support source for 56.7% of students, followed by friends (31.3%).  
Critically, **only 4.3% turned to a mental health specialist** — highlighting a significant gap in formal help-seeking despite high knowledge levels.

---

### Figure 6 — Significant Chi-Square Associations (Knowledge vs Practices)

![Chi-Square Associations](figures/fig6_chi_square.png)

Seven significant associations (all p < 0.05) were identified between knowledge level and coping practices:

| Practice | χ² | p-value |
|---|---|---|
| Do nothing when stressed | 23.413 | < 0.001 |
| No coping methods used | 13.752 | 0.001 |
| Reduce war news when tense | 12.797 | 0.012 |
| Support source: no one | 11.275 | 0.004 |
| Visit doctor / specialist | 11.310 | 0.003 |
| Support & listen to friend | 10.486 | 0.005 |
| Advise friend to visit sheikh | 6.835 | 0.033 |

Higher knowledge was associated with more **active, socially engaged coping** and less passivity.

---

### Figure 7 — Regression: Coping Methods Predicting Knowledge

![Regression Coefficients](figures/fig7_regression.png)

A multiple linear regression was performed with knowledge score as the outcome and coping methods as predictors.

| Model Statistic | Value |
|---|---|
| R² | 0.044 |
| Adjusted R² | 0.025 |
| F(6, 293) | 2.270 |
| p-value | 0.037 |

**Interpretation:** The model is statistically significant overall, but explains only **4.4% of variance in knowledge** — indicating coping methods are weak predictors in isolation. No individual predictor reached significance at α = 0.05, though *talking with family* approached it (B = 0.484, p = 0.058). The marginal R² suggests other unmeasured variables (trauma severity, prior education, media exposure) are stronger drivers of knowledge.

---

## 🧩 Analyst Notes

- **Multiple-response variables** were handled by computing binary dummy variables per option before frequency analysis
- **Chi-square assumptions** were checked — some cells had expected counts < 5, noted in interpretation
- **Regression model** was built using enter method; checked for multicollinearity before finalising predictors
- The **ceiling effect** in knowledge scores reduced statistical power for correlation and regression — flagged in reporting

---

## 📁 Repository Structure

```
war-psychology-KAP-analysis/
│
├── README.md               ← This file (portfolio showcase)
├── figures/                ← All generated visualisations
│   ├── fig1_war_exposure.png
│   ├── fig2_knowledge_attitude.png
│   ├── fig3_crosstab_heatmap.png
│   ├── fig4_coping_behaviour.png
│   ├── fig5_support_source.png
│   ├── fig6_chi_square.png
│   └── fig7_regression.png
├── outputs/
│   └── Result-1.docx       ← Full results tables
└── data/
    └── [Data not shared — participant confidentiality]
```

---

## 🛠️ Tools & Skills Demonstrated

`IBM SPSS` · `Descriptive Statistics` · `Chi-Square Testing` · `Spearman Correlation` · `Multiple Regression` · `ANOVA` · `Cross-Tabulation` · `Multiple-Response Analysis` · `Data Interpretation` · `Statistical Reporting`

---

*Analysis conducted as part of a community health research project on war-affected Sudanese youth.*
