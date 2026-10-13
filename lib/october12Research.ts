import type { ResearchPost } from './types';

const sources=[
  {label:'ILO Non-standard Forms of Employment',url:'https://www.ilo.org/topics/non-standard-forms-employment'},
  {label:'ILO Working Time and Work Organization',url:'https://www.ilo.org/topics/working-time-and-work-organization'},
  {label:'U.S. Department of Labor Worker Classification',url:'https://www.dol.gov/agencies/whd/flsa/misclassification'},
  {label:'IRS Independent Contractor Guidance',url:'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined'},
  {label:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
  {label:'NIST Cybersecurity Framework',url:'https://www.nist.gov/cyberframework'},
  {label:'CISA Identity and Access Management',url:'https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators'},
  {label:'OECD Guidelines for Multinational Enterprises',url:'https://mneguidelines.oecd.org/mneguidelines/'},
  {label:'European Commission Data Protection',url:'https://commission.europa.eu/law/law-topic/data-protection_en'},
  {label:'UK ICO Data Protection Guide',url:'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/'},
  {label:'GAO Internal Control Standards',url:'https://www.gao.gov/products/gao-14-704g'},
  {label:'World Bank Worldwide Governance Indicators',url:'https://www.worldbank.org/en/publication/worldwide-governance-indicators'},
];

const specs=[
  ['contract-handoff-latency-study','Contract Handoff Latency Study','Contract operations','A reproducible cohort review of elapsed time, ownership gaps, and repeated work across regional handoffs.','handoff records','creation time, sending region, receiving region, acknowledgment, decision dependency, completion time, and exception reason','separate waiting time caused by an approved dependency from time with no confirmed owner'],
  ['access-removal-completion-audit','Access Removal Completion Audit','Management systems','An evidence-based audit of whether contractor access removals are requested, executed, and independently confirmed.','ended assignments','end date, sponsor, systems, removal request, executor, completion evidence, last activity, and exceptions','treat a submitted ticket as a request, not proof that access was removed'],
  ['distributed-queue-rework-analysis','Distributed Queue Rework Analysis','Contract operations','A coded review of reopened work that distinguishes evidence gaps, routing errors, rule changes, and review corrections.','reopened queue items','initial state, source evidence, first disposition, reopening trigger, later evidence, final disposition, and owner changes','avoid labeling every reopened item as an operator error when policy or source information changed'],
  ['deliverable-acceptance-reliability','Deliverable Acceptance Reliability','Role design','A double-review method for testing whether distributed teams apply written acceptance criteria consistently.','submitted deliverables','brief version, checklist version, reviewer, criterion results, exceptions, revision request, acceptance, and timestamps','distinguish ambiguous criteria from genuine nonconformance before attributing rework'],
  ['cross-border-coverage-continuity-method','Cross-Border Coverage Continuity Method','Global team design','A scenario-based method for evaluating queue continuity across holidays, outages, and limited overlap windows.','coverage events','event type, affected region, forecast queue, backup assignment, access readiness, handoff evidence, service result, and recovery actions','measure whether the documented fallback worked without assuming all delays were preventable'],
] as const;

export const october12ResearchPosts: ResearchPost[]=specs.map(([slug,title,cluster,summary,population,fields,caution],index)=>({
  slug,title,cluster,summary,publishedAt:'2026-10-12',thumbnail:`/images/october-12/${slug}.png`,finding:`The ${title.toLowerCase()} uses a fixed population, stratified sample, five-dimension rubric, and retained decision evidence so another reviewer can reproduce the classifications.`,
  sections:[
    {heading:'Research question',paragraphs:[`This brief asks whether ${population} preserve enough evidence to reconstruct ownership, timing, boundaries, and completion. It evaluates documented workflow reliability rather than legal status, worker performance, or the validity of an individual commercial decision.`]},
    {heading:'Population and sampling frame',paragraphs:[`Define ${population} from a fixed system export. Retain the query date, filters, exclusions, count, and sampling seed. Stratify by region, workflow state, age, and owner, then include both completed and unresolved work to avoid selecting only easy cases.`]},
    {heading:'Evidence fields',paragraphs:[`Collect ${fields}. Use a written data dictionary and mark missing fields explicitly. Preserve source references in a restricted review file so a second reviewer can reproduce each classification without relying on interviews.`]},
    {heading:'Evaluation rubric',paragraphs:[`Score intake completeness, ownership clarity, exception visibility, decision routing, and completion evidence as present, partial, absent, or not applicable. The key caution is to ${caution}. Resolve reviewer disagreements through a named method owner and retain the original ratings.`]},
    {heading:'Analysis plan',paragraphs:[`Report counts and proportions with denominators, missing-data rates, and the prespecified strata. Compare patterns descriptively unless the design supports inference. Investigate records behind a difference before connecting it to a region, vendor, individual, or policy.`]},
    {heading:'Governance and privacy',paragraphs:[`Minimize personal and commercial data in the analysis file. Restrict crosswalk access, follow retention rules, and publish only aggregated observations. Route worker-classification, employment, tax, privacy, security, and contractual questions to qualified owners.`]},
    {heading:'Limits and replication',paragraphs:[`The method observes documentation in the selected period and does not establish causation or legal compliance. Retain the export query, seed, rubric version, calculations, reviewer notes, and exceptions. Disclose system or definition changes before comparing a later cycle.`]},
  ],sources:[...sources.slice(index+2),...sources.slice(0,index+2)].slice(0,10)
}));
