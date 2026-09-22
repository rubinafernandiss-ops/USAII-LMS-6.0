# What's new in USAII Intuitive LMS 5.3

## 5.3: Comprehension and Mastery

Built on 5.2, following Dr. Milton's feedback and his recommendations PDF. Everything not listed here works as before.

### The two metrics

| Metric | Meaning | Evidence (recommended weight) |
|---|---|---|
| **Comprehension** | How well the learner understands the concepts, principles, terminology, and appropriate choices. | End-of-lesson knowledge checks (45%) · Scenario-based judgment questions (25%) · Final assessment, knowledge items (30%) |
| **Mastery** | How well the learner can apply them in a realistic workplace decision, task, or scenario. | Comprehension score (30%) · Applied activities scored against a rubric (45%) · Final scenario-based items (25%) |

- **Per learning objective first.** Each lesson is one learning objective. Both metrics are calculated per objective, then averaged, so an easy topic with many questions cannot outweigh the others. Final questions not linked to a lesson form one "Whole course" objective.
- **Missing evidence.** When an objective has no evidence of one kind yet, that weight is shared by the evidence it does have.
- **What never counts:** lessons opened, videos watched, time on a page, logins, clicks, simply submitting an activity, and viewing the Study Guide. Completion stays a separate metric.
- **No misleading 0%.** Until a learner has two scored checkpoints, learners see "Comprehension: Not measured yet" and "Mastery: Building evidence". Mastery also needs a measured Comprehension and at least one piece of applied evidence.
- **Scored checkpoints** are a graded lesson check, a rubric-scored activity, or a final assessment attempt.
- **Which attempts count.** Lesson checks are open book with instant feedback, so the first and most recent graded tries count equally. On the final assessment, the most recent attempt counts. Practice attempts after the last graded attempt never count.
- **Resubmissions.** An activity's latest scored version counts until a newer version is scored.
- **Weights** live in one place, `shared/metrics.ts` (`METRIC_WEIGHTS`), if USAII revises the model.

### For learners
- **My Learning:** "Mastered" is removed. Each lesson shows progress only (Completed, In progress, Not started). A compact Comprehension and Mastery strip sits beneath the course title, each with an information icon showing the two-sentence explanation.
- **Dashboard:** the rings are now Course completed, Comprehension, and Mastery. Chance of passing moves to the tiles.
- **My Progress:** the two metrics lead the page. "Comprehension by topic" uses the same numbers as the metric. The study-habits card is labeled as engagement only.
- **Activities:** learners see what their work is checked for before submitting, and after review, whether each criterion was Met, Partly met, or Not met.
- **Wording:** "Mastered" is renamed "Strong" in the skill tree and topic statuses. "Mastery" and "Comprehension" are used only for the two metrics.

### For instructors
- **New page: Comprehension & Mastery.**
  - Class averages, how many learners are measured, and distribution against the pass mark.
  - Class average for each kind of evidence.
  - A learner table showing what each learner needs: "Finished, needs practice", "Needs work on concepts", "Understands, needs application", "Building evidence", or "On track".
  - Results by learning objective and for each rubric criterion.
  - Percent correct for each final assessment item.
  - An Assessment design check.
- **Cohort:** adds Comprehension and Mastery tiles and columns.
- **View Assessment:** score each rubric criterion as Met, Partly met, or Not met. Scores are required to Approve or mark Not approved, and optional for Request resubmission. The list shows "Rubric not scored yet" where needed.
- **Course Builder:**
  - Every question is tagged **Knowledge** or **Scenario judgment**.
  - Final assessment questions choose the **learning objective** they assess.
  - Activities get a **rubric criteria** editor, with what "Met" looks like for each criterion.
  - A **Comprehension and Mastery readiness** panel warns about missing evidence, for example an activity without criteria, which then counts toward progress only.

### Data
- **Seeded courses.** Both USAII courses ship with question types, final question objectives, and rubrics for all 18 activities. The Day 2 use-case list uses the five recommended criteria.
- **Upgrading.** Existing databases update automatically from version 5 to 6. Learner records are untouched, and only missing design is filled in. Older attempts are read from their answers, but only when they still reproduce the recorded score.
- **Scoring records.** Each new attempt records what every question measured. Rubric criteria are copied into each score, so later course edits never change past results.

### How an activity review works (three steps in View Assessment)
1. **Score the rubric.** Rate each criterion as Met, Partly met, or Not met. This measures the quality of the work and becomes the learner's **Mastery** evidence.
2. **Write feedback.** Say what works and what to change. A note is required for Request resubmission and Not approved.
3. **Decide.**
   - **Approve** means done.
   - **Request resubmission** means revise and send again.
   - **Not approved** means not accepted, but the learner can still revise.

The decision tells the learner what happens next. The scores do not change the decision, and the decision does not change the scores. If they contradict each other, the LMS asks the instructor to confirm first:
- Approving while a criterion is Not met.
- Marking Not approved while every criterion is Met.

The learner sees the decision, the note, and the result for each criterion.
