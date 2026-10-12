import { PageHeader, PageBody, Section, BulletList } from './legal.jsx'

const EFFECTIVE_DATE = 'October 12, 2026'

function Guidelines() {
  return (
    <>
      <PageHeader
        eyebrow="Student App"
        title="Community Guidelines"
        intro="Student App communities work best when everyone feels safe to ask questions, share useful information, and connect. These guidelines apply to all community spaces in the app."
        meta={`Effective Date: ${EFFECTIVE_DATE}`}
      />
      <PageBody>
        <Section title="What's welcome">
          <BulletList
            items={[
              'Course questions and study help',
              'Campus information and event discussion',
              'Respectful discussion, even when you disagree',
              'Sharing useful academic resources',
              'Helping other students find their way',
            ]}
          />
        </Section>

        <Section title="What's not allowed">
          <BulletList
            items={[
              'Harassment or bullying of other users',
              'Hate speech',
              'Threats of violence or harm',
              'Sexual exploitation content',
              'Illegal content or activity',
              'Scams and spam',
              'Impersonating another person',
              'Doxxing or publishing private information',
              'Abusing the reporting tools',
              'Trying to evade moderation, suspensions, or blocks',
            ]}
          />
        </Section>

        <Section title="Reporting and blocking">
          <p>
            You can report content or users directly in the app, and you can
            block other users to hide their content from your view. Reporting
            something does not remove it automatically — it creates a record for
            review.
          </p>
        </Section>

        <Section title="Enforcement">
          <p>
            Schoen Cyber Solutions may remove content that violates these
            guidelines, and accounts may be suspended for violations. Serious or
            repeated violations may result in permanent restriction. Moderation
            decisions prioritize the safety of students and the integrity of the
            platform.
          </p>
        </Section>

        <Section title="A note on scope">
          <p>
            Student App is operated by Schoen Cyber Solutions LLC and is not an
            official university system. University policies and codes of conduct
            continue to apply separately to your conduct as a student.
          </p>
        </Section>
      </PageBody>
    </>
  )
}

export default Guidelines
