import { PageHeader, PageBody, Section, BulletList, ContactLine } from './legal.jsx'

const EFFECTIVE_DATE = 'October 12, 2026'

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Student App"
        title="Terms of Use"
        intro="These Terms of Use govern your use of Student App, operated by Schoen Cyber Solutions LLC. By creating an account or using the app, you agree to these terms."
        meta={`Effective Date: ${EFFECTIVE_DATE}`}
      />
      <PageBody>
        <Section title="Eligibility and accounts">
          <p>
            Student App is intended for university students. To use the app you
            must verify control of a supported university email address and
            provide accurate information during setup. You are responsible for
            keeping your account secure and for activity that occurs under it.
          </p>
        </Section>

        <Section title="An independent service">
          <p>
            Student App is developed and operated independently by Schoen Cyber
            Solutions LLC. It is not an official university system and is not
            affiliated with, endorsed by, sponsored by, or operated by Roosevelt
            University, Illinois Institute of Technology, or any other
            educational institution unless explicitly stated otherwise.
          </p>
          <p>
            Academic, schedule, and event information shown in the app comes
            from supported university systems and public sources. Always confirm
            important academic details — such as registration deadlines, exam
            times, and official announcements — through your university&apos;s
            official channels.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree to use Student App responsibly and lawfully. You may not:</p>
          <BulletList
            items={[
              'Harass, bully, threaten, or harm other users',
              'Post hate speech, sexual exploitation material, or illegal content',
              'Impersonate another person or misrepresent your identity',
              'Publish other people’s private information without consent',
              'Send spam, run scams, or misuse reporting tools',
              'Attempt to disrupt, probe, or gain unauthorized access to the service or its systems',
              'Use the app in a way that violates applicable law or your university’s policies',
            ]}
          />
          <p>
            Our{' '}
            <a href="/student-app/community-guidelines/" className="text-accent hover:text-white transition-colors">
              Community Guidelines
            </a>{' '}
            describe expected behavior in more detail.
          </p>
        </Section>

        <Section title="User-generated content">
          <p>
            You retain ownership of the content you create in Student App. By
            posting content, you grant us a limited license to store, display,
            and transmit it as needed to operate the service — for example, to
            show your messages to other members of your communities.
          </p>
          <p>
            You are responsible for the content you post. Do not post content
            you do not have the right to share.
          </p>
        </Section>

        <Section title="Moderation and suspension">
          <p>
            We may review reported content, remove content that violates these
            terms or the Community Guidelines, and suspend or restrict accounts
            that violate them. Moderation decisions are made at our discretion
            with the goal of protecting users and the integrity of the platform.
          </p>
          <p>
            Serious or repeated violations may result in permanent restriction
            of your account.
          </p>
        </Section>

        <Section title="External systems and third-party services">
          <p>
            Student App integrates with supported university systems and public
            academic resources to display course, schedule, and event
            information. The availability and accuracy of that data depends on
            those external sources. We are not responsible for the content,
            availability, or policies of third-party systems or services.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The Student App software, branding, and site content are owned by
            Schoen Cyber Solutions LLC or its licensors. University names and
            marks remain the property of their respective institutions; their
            use here is descriptive only.
          </p>
        </Section>

        <Section title="Service availability and changes">
          <p>
            We work to keep Student App reliable, but we do not guarantee
            uninterrupted or error-free operation. Features may change, be
            suspended, or be discontinued over time. We may update these terms;
            continued use of the app after changes take effect constitutes
            acceptance.
          </p>
        </Section>

        <Section title="Account deletion and termination">
          <p>
            You can delete your account at any time from within the app.
            Deletion removes or anonymizes your personal data as described in
            our{' '}
            <a href="/student-app/privacy/" className="text-accent hover:text-white transition-colors">
              Privacy Policy
            </a>
            . We may also suspend or terminate accounts that violate these
            terms.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            Student App is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, express or implied, to the maximum
            extent permitted by law. We do not warrant that academic or event
            information is complete, accurate, or current.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Schoen Cyber Solutions LLC
            will not be liable for indirect, incidental, consequential, or
            punitive damages, or for lost data, lost profits, or missed academic
            deadlines arising from your use of the app.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the State of Illinois,
            United States, without regard to conflict-of-law principles.
          </p>
        </Section>

        <Section title="Contact">
          <ContactLine label="Questions about these terms" />
          <p className="text-sm text-slate-500">Schoen Cyber Solutions LLC</p>
        </Section>
      </PageBody>
    </>
  )
}

export default Terms
