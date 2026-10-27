import type { ResearchPost } from './types';

export const october27ResearchPosts: ResearchPost[] = [
  {
    "slug": "globalcontractstaffing-milestone-evidence-study-3",
    "title": "Milestone Evidence Completeness in Global Contract Delivery",
    "summary": "A review protocol for testing whether accepted milestones can be reconstructed from the record.",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-27",
    "finding": "Milestone acceptance is only auditable when the original criteria, the delivered evidence, the client decision, and the invoice reference can be joined without relying on memory.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "This protocol examines closed milestones on distributed contract assignments. It does not evaluate engineering quality, legal entitlement, or the fairness of a client decision. The unit of analysis is a single milestone record with its acceptance evidence and invoice link.",
          "The review is designed for program managers who need to know whether the acceptance trail is complete enough for a client audit or a payment dispute. It produces a defect list, not a performance score."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Draw the population from a fixed export of milestones closed during a stated period. Record the query date, the client filter, the currency, and any exclusions. Sample across clients, delivery managers, contract types, and countries so the review does not overrepresent one easy workflow.",
          "For each milestone, capture the SOW identifier, original criteria, submission date, reviewer, decision date, evidence links, rework notes, and invoice reference. Missing evidence remains a finding rather than a reason to drop the record."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist: criteria present, evidence reachable, reviewer named, decision in writing, rework separated from scope change, and invoice matched. Test the checklist on ten records and calibrate the definitions before expanding.",
          "Have a second reviewer recheck a subset. Record disagreements by item rather than averaging them. If reviewers cannot agree on whether a demo recording satisfies a criterion, the criterion is probably too vague for the SOW."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled milestones, not the whole portfolio. A complete file does not prove the client was satisfied, and an incomplete file does not prove the work was poor. It shows whether the program can demonstrate what happened.",
          "Report counts with denominators and assign each defect an owner and a retest date. Use the results to revise the SOW template, the kickoff checklist, or the invoice gate. Do not present the findings as a legal opinion on acceptance."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "ILO non-standard forms of employment",
        "url": "https://www.ilo.org/topics/non-standard-forms-employment"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "globalcontractstaffing-approval-latency-brief-3",
    "title": "Approval Latency in Staff Augmentation: A Measurement Brief",
    "summary": "A timestamp-based protocol for separating queue delay, review time, and requester response time.",
    "cluster": "Management systems",
    "publishedAt": "2026-10-27",
    "finding": "A single end-to-end approval number hides the constraint; separate timestamps for submission, first action, clarification, and decision make the delay actionable.",
    "sections": [
      {
        "heading": "What this brief examines",
        "paragraphs": [
          "The brief looks at approvals that gate contract delivery: statements of work, change orders, timesheets, and access requests. It focuses on the measurement design rather than on a particular client or tool.",
          "The purpose is to help a program team choose one definition, collect consistent timestamps, and report a distribution that supports a process change."
        ]
      },
      {
        "heading": "Measurement design",
        "paragraphs": [
          "Define complete submission, first reviewer action, clarification request, clarification response, and final decision. Compute queue time, review time, requester time, and total elapsed time separately. Use business days at the reviewer's location and publish the holiday calendar.",
          "Segment by request type, client, and reviewer group. Report the count, median, ninetieth percentile, and the share of incomplete submissions. A small group should be labeled directional rather than ranked against a large one."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Test for timestamps that precede the submission, decisions recorded without a reviewer, and requests closed by a system migration. Compare a sample of records with the underlying messages. If the tool overwrites the first-action time, the queue measure is not trustworthy.",
          "Document any definition change with an effective date. Restating history under a new definition without a note makes trend comparisons misleading, especially when the change was introduced to make the numbers look better."
        ]
      },
      {
        "heading": "Practical interpretation",
        "paragraphs": [
          "A high queue time points to reviewer coverage or intake routing. A high review time points to unclear criteria or missing evidence. A high requester time points to an external dependency that may need a different escalation path.",
          "Use one change per cycle and remeasure over a full period. The brief does not claim that faster approval is always better; it claims that a visible delay can be assigned to the part of the process that owns it."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "ILO working time and work organization",
        "url": "https://www.ilo.org/topics/working-time"
      }
    ]
  },
  {
    "slug": "globalcontractstaffing-rate-change-lag-study-3",
    "title": "Rate-Change Lag and Back-Billing Exposure",
    "summary": "A review protocol for finding assignments where approved rate changes were applied late, early, or not at all.",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-27",
    "finding": "Rate-change risk concentrates at the boundary between approval and invoicing; comparing the approved version date with the first invoiced date exposes most errors.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "The protocol covers pay-rate and bill-rate changes on active contract assignments. It excludes statutory tax changes and one-off expense reimbursements. The unit of analysis is an approved rate version linked to at least one invoice.",
          "The review asks whether the effective date, the approved amount, and the invoiced amount agree. It does not decide whether the new rate was commercially fair."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Export assignments with a rate change in the period, including the prior rate, the new rate, the approval date, the effective date, the currency, and the invoice lines that followed. Sample across clients, countries, and change reasons.",
          "For each record, retain the approval note, the rate-card version, the timesheet dates, and the invoice reference. If the approval was verbal, record that as a finding rather than reconstructing a document after the fact."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Compare the effective date with the first invoice date and the last invoice at the old rate. Flag changes applied more than one cycle early or late, changes with no invoice effect, and invoices that combine a rate change with unrelated corrections.",
          "Check the notice period separately. A change can be invoiced on time and still breach the client contract because the notice was short. Treat commercial notice and billing accuracy as two findings with different owners."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The sample shows where the process fails, not the total financial exposure. A single late change on a large assignment can matter more than many small errors. Report the direction and the magnitude, not only a count.",
          "Assign corrections to finance, account management, or the contract owner based on cause. Retest the same population after the repair. Do not use the review to reopen settled invoices without a documented commercial decision."
        ]
      }
    ],
    "sources": [
      {
        "label": "ILO non-standard forms of employment",
        "url": "https://www.ilo.org/topics/non-standard-forms-employment"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "European Central Bank euro reference rates",
        "url": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
      }
    ]
  },
  {
    "slug": "globalcontractstaffing-asset-recovery-protocol-3",
    "title": "Asset Recovery for Cross-Border Contract Staff",
    "summary": "A protocol for testing device return, data sanitization, and closure evidence after an assignment ends.",
    "cluster": "Contract operations",
    "publishedAt": "2026-10-27",
    "finding": "Asset recovery is complete only when the physical device, the data state, and the custodian record agree; a tracking number alone proves shipment, not closure.",
    "sections": [
      {
        "heading": "What this brief examines",
        "paragraphs": [
          "The brief covers laptops, security tokens, test devices, and phones issued to contractors who work outside the hiring company's home country. It looks at the period from the return request to the closed asset record.",
          "It does not evaluate the contractor's conduct or the resale value of the equipment. The question is whether the program can show what happened to each asset."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Select assignments that ended in the period and had at least one issued asset. Record the asset class, serial number, issue date, return terms, shipping destination, and closure date.",
          "Collect the return request, the carrier tracking event, the receipt inspection, the sanitization record, and the custodian update. If any item is missing, keep the asset open in the review rather than inferring closure from the others."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Test four joins: asset to assignment, shipment to receipt, receipt to sanitization, and sanitization to reuse or disposal. A device that was received but never sanitized is still a data risk. A device that was sanitized but never returned is still a physical loss.",
          "Compare the stated return terms with the actual cost bearer. If the contract says the agency pays but the contractor paid, record the discrepancy. Reimbursement disputes often surface months later and distort the loss calculation."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review covers sampled assignments and may miss devices issued outside the asset system. Treat an empty register as a finding about registration, not proof that no devices exist.",
          "Report recovery time, non-return rate, sanitization completion, and cost by country. Assign fixes to the issue process, the courier contract, or the offboarding checklist. Retest after one full assignment cycle."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST SP 800-88 media sanitization",
        "url": "https://csrc.nist.gov/pubs/sp/800/88/r1/final"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "ISO 31000 risk management",
        "url": "https://www.iso.org/standard/65694.html"
      }
    ]
  },
  {
    "slug": "globalcontractstaffing-holiday-coverage-gap-3",
    "title": "Holiday Coverage Gaps in Distributed Contract Teams",
    "summary": "A protocol for comparing local holiday calendars with queue ownership, skills, and client deadlines.",
    "cluster": "Global team design",
    "publishedAt": "2026-10-27",
    "finding": "Coverage gaps appear where a statutory holiday removes the only qualified owner of a queue, even when the team's total headcount looks sufficient.",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "This brief examines coverage during public holidays observed at contractor work locations. It covers queues with an external deadline or a client-facing service level. It does not assess whether a particular holiday should be observed.",
          "The unit of analysis is a queue-day: one queue on one calendar date where the normal owner is unavailable because of a local holiday."
        ]
      },
      {
        "heading": "Data collection",
        "paragraphs": [
          "Build the calendar from worker locations and the client's critical dates. Map each queue to its primary owner, backup, required skills, and escalation contact. Record the source of each holiday date and the date the calendar was confirmed.",
          "Use the assignment register to find workers who are the only qualified owner of a queue. Add client deadlines from the SOW and any service-level commitments that do not pause for local holidays."
        ]
      },
      {
        "heading": "Analysis",
        "paragraphs": [
          "Compare queue-days with no available qualified owner against the client's deadlines. Count uncovered queue-days, single-owner queues, and swaps without a named substitute. Sample the escalation path for two or three dates to see whether the named contact was actually reachable.",
          "Separate a coverage gap from a capacity gap. A queue with three trained owners but two on holiday has a coverage problem; a queue with one trained owner all year has a capacity problem that a swap will not fix."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The calendar reflects the dates known at the time of review. Local announcements can change, and a contractor may take leave beyond the statutory day. Treat the result as a planning input, not a guarantee.",
          "Assign each single-owner queue a cross-training or temporary coverage action. Review again after the quarter and compare the uncovered queue-days. Do not use the review to deny a statutory holiday or to pressure a contractor to work."
        ]
      }
    ],
    "sources": [
      {
        "label": "ILO working time and work organization",
        "url": "https://www.ilo.org/topics/working-time"
      },
      {
        "label": "ILO non-standard forms of employment",
        "url": "https://www.ilo.org/topics/non-standard-forms-employment"
      },
      {
        "label": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  }
];
