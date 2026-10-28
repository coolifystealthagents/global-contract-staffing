import type { ResearchPost } from './types';

export const october28ResearchPosts: ResearchPost[] = [
  {
    "slug": "gcs-onboarding-completeness-oct28",
    "title": "Onboarding Evidence Completeness in Global Contract Staffing",
    "summary": "A review protocol for testing which required onboarding records are missing when a contractor starts work?",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-28",
    "finding": "Onboarding is only auditable when the contract, payment, access, and first-task records can be joined without a private message.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "Which required onboarding records are missing when a contractor starts work? The review covers the documented contract record in a defined window. It does not evaluate legal classification, engineering quality, or the fairness of a client decision.",
          "The unit is one start, payment, change request, overlap window, or departure. The population is contractor starts in a defined quarter, sampled by country, role, and client."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Contractor starts in a defined quarter, sampled by country, role, and client. Freeze the export before selecting the sample. Record the query date, the country filter, the currency, and any exclusions.",
          "Sample across clients, roles, and countries so the review does not overrepresent one easy workflow. Missing records remain findings rather than reasons to drop the item."
        ]
      },
      {
        "heading": "Measures and evidence",
        "paragraphs": [
          "Signed scope, identity check, tax form, payment setup, access approval, and first-task evidence. Define each field, its allowed values, and the source system before collection begins.",
          "Keep the source link with the observation. A count without a denominator and an observation window is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Missing access approval and incomplete payment setup are the most common gaps. Record the reason code, the owner, and the recheck date. Silence is not a disposition.",
          "Have a second reviewer recheck a subset. Report disagreements by item rather than averaging them."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample of twenty starts finds four without a first-task approval and three without a payment reference. The numbers are illustrative. The stage split is the useful part because it shows where the wait belongs.",
          "Use the example to test the definitions with the team before expanding the sample."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "The result can describe the observed record. It can support one decision and one next review date; it cannot prove causation or compare the team with an unobserved population.",
          "Report unresolved items and limitations beside the finding. Stop when the source is missing or two records conflict."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "label": "World Bank",
        "url": "https://www.worldbank.org/"
      },
      {
        "label": "OECD",
        "url": "https://www.oecd.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "thumbnail": "/images/october-28/gcs-onboarding-completeness-oct28.svg"
  },
  {
    "slug": "gcs-payment-delay-oct28",
    "title": "Attributing Payment Delay in Cross-Border Contract Work",
    "summary": "A review protocol for testing where does a contractor payment wait: the invoice, the client approval, the bank, or the currency check?",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-28",
    "finding": "A single average payment time hides whether the delay belongs to the contractor, the client, or the bank.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "Where does a contractor payment wait: the invoice, the client approval, the bank, or the currency check? The review covers the documented contract record in a defined window. It does not evaluate legal classification, engineering quality, or the fairness of a client decision.",
          "The unit is one start, payment, change request, overlap window, or departure. The population is payments made in a defined quarter, sampled by country and contract type."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Payments made in a defined quarter, sampled by country and contract type. Freeze the export before selecting the sample. Record the query date, the country filter, the currency, and any exclusions.",
          "Sample across clients, roles, and countries so the review does not overrepresent one easy workflow. Missing records remain findings rather than reasons to drop the item."
        ]
      },
      {
        "heading": "Measures and evidence",
        "paragraphs": [
          "Invoice completeness, approval time, payment release, bank delay, and correction. Define each field, its allowed values, and the source system before collection begins.",
          "Keep the source link with the observation. A count without a denominator and an observation window is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Delays cluster in invoices with a missing period or an unapproved change. Record the reason code, the owner, and the recheck date. Silence is not a disposition.",
          "Have a second reviewer recheck a subset. Report disagreements by item rather than averaging them."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A payment takes nine days. The split shows two days in invoice correction and five days in client approval. The numbers are illustrative. The stage split is the useful part because it shows where the wait belongs.",
          "Use the example to test the definitions with the team before expanding the sample."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "The result can describe the observed record. It can support one decision and one next review date; it cannot prove causation or compare the team with an unobserved population.",
          "Report unresolved items and limitations beside the finding. Stop when the source is missing or two records conflict."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "label": "World Bank",
        "url": "https://www.worldbank.org/"
      },
      {
        "label": "OECD",
        "url": "https://www.oecd.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "thumbnail": "/images/october-28/gcs-payment-delay-oct28.svg"
  },
  {
    "slug": "gcs-change-order-cycle-oct28",
    "title": "How Long Does a SOW Change Order Take?",
    "summary": "A review protocol for testing what is the elapsed time from change request to approved scope, and where does it wait?",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-28",
    "finding": "Change orders wait longest when the commercial owner and the technical reviewer are not named together.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "What is the elapsed time from change request to approved scope, and where does it wait? The review covers the documented contract record in a defined window. It does not evaluate legal classification, engineering quality, or the fairness of a client decision.",
          "The unit is one start, payment, change request, overlap window, or departure. The population is change requests in a defined year, sampled by client and delivery team."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Change requests in a defined year, sampled by client and delivery team. Freeze the export before selecting the sample. Record the query date, the country filter, the currency, and any exclusions.",
          "Sample across clients, roles, and countries so the review does not overrepresent one easy workflow. Missing records remain findings rather than reasons to drop the item."
        ]
      },
      {
        "heading": "Measures and evidence",
        "paragraphs": [
          "Request date, estimate, review, approval, start date, and rework. Define each field, its allowed values, and the source system before collection begins.",
          "Keep the source link with the observation. A count without a denominator and an observation window is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Work starts before the estimate and approval are complete. Record the reason code, the owner, and the recheck date. Silence is not a disposition.",
          "Have a second reviewer recheck a subset. Report disagreements by item rather than averaging them."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A dashboard request takes twelve days. The record shows three days for the estimate and seven for client approval. The numbers are illustrative. The stage split is the useful part because it shows where the wait belongs.",
          "Use the example to test the definitions with the team before expanding the sample."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "The result can describe the observed record. It can support one decision and one next review date; it cannot prove causation or compare the team with an unobserved population.",
          "Report unresolved items and limitations beside the finding. Stop when the source is missing or two records conflict."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "label": "World Bank",
        "url": "https://www.worldbank.org/"
      },
      {
        "label": "OECD",
        "url": "https://www.oecd.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "thumbnail": "/images/october-28/gcs-change-order-cycle-oct28.svg"
  },
  {
    "slug": "gcs-overlap-utilization-oct28",
    "title": "Measuring Time-Zone Overlap in Distributed Delivery",
    "summary": "A review protocol for testing how much of the declared overlap window is actually available for decisions?",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-28",
    "finding": "A calendar overlap is not a decision window when the same hours are consumed by recurring meetings.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "How much of the declared overlap window is actually available for decisions? The review covers the documented contract record in a defined window. It does not evaluate legal classification, engineering quality, or the fairness of a client decision.",
          "The unit is one start, payment, change request, overlap window, or departure. The population is contract teams in a defined quarter, sampled by region pair and role."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Contract teams in a defined quarter, sampled by region pair and role. Freeze the export before selecting the sample. Record the query date, the country filter, the currency, and any exclusions.",
          "Sample across clients, roles, and countries so the review does not overrepresent one easy workflow. Missing records remain findings rather than reasons to drop the item."
        ]
      },
      {
        "heading": "Measures and evidence",
        "paragraphs": [
          "Declared overlap, meeting load, blocked time, decision time, and handoff delay. Define each field, its allowed values, and the source system before collection begins.",
          "Keep the source link with the observation. A count without a denominator and an observation window is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Handoffs wait when the only overlap is a status call with no decision owner. Record the reason code, the owner, and the recheck date. Silence is not a disposition.",
          "Have a second reviewer recheck a subset. Report disagreements by item rather than averaging them."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A team declares four overlap hours. Two are meetings, one is blocked, and one is available for review. The numbers are illustrative. The stage split is the useful part because it shows where the wait belongs.",
          "Use the example to test the definitions with the team before expanding the sample."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "The result can describe the observed record. It can support one decision and one next review date; it cannot prove causation or compare the team with an unobserved population.",
          "Report unresolved items and limitations beside the finding. Stop when the source is missing or two records conflict."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "label": "World Bank",
        "url": "https://www.worldbank.org/"
      },
      {
        "label": "OECD",
        "url": "https://www.oecd.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "thumbnail": "/images/october-28/gcs-overlap-utilization-oct28.svg"
  },
  {
    "slug": "gcs-offboarding-timeliness-oct28",
    "title": "Access Offboarding Timeliness for Contract Staff",
    "summary": "A review protocol for testing how long does contractor access remain active after the engagement ends?",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-28",
    "finding": "Offboarding is only complete when the removal is confirmed by the system owner, not when a ticket is opened.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "How long does contractor access remain active after the engagement ends? The review covers the documented contract record in a defined window. It does not evaluate legal classification, engineering quality, or the fairness of a client decision.",
          "The unit is one start, payment, change request, overlap window, or departure. The population is contractor departures in a defined year, sampled by system and client."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Contractor departures in a defined year, sampled by system and client. Freeze the export before selecting the sample. Record the query date, the country filter, the currency, and any exclusions.",
          "Sample across clients, roles, and countries so the review does not overrepresent one easy workflow. Missing records remain findings rather than reasons to drop the item."
        ]
      },
      {
        "heading": "Measures and evidence",
        "paragraphs": [
          "End date, removal request, actual removal, owner confirmation, and exceptions. Define each field, its allowed values, and the source system before collection begins.",
          "Keep the source link with the observation. A count without a denominator and an observation window is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Repository and shared-drive access are the most common items left open. Record the reason code, the owner, and the recheck date. Silence is not a disposition.",
          "Have a second reviewer recheck a subset. Report disagreements by item rather than averaging them."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A contractor leaves on Friday. Two accounts are removed the same day and one remains open for four days. The numbers are illustrative. The stage split is the useful part because it shows where the wait belongs.",
          "Use the example to test the definitions with the team before expanding the sample."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "The result can describe the observed record. It can support one decision and one next review date; it cannot prove causation or compare the team with an unobserved population.",
          "Report unresolved items and limitations beside the finding. Stop when the source is missing or two records conflict."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "label": "World Bank",
        "url": "https://www.worldbank.org/"
      },
      {
        "label": "OECD",
        "url": "https://www.oecd.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "thumbnail": "/images/october-28/gcs-offboarding-timeliness-oct28.svg"
  }
];
