import { PageHeader, PageBody, Section, BulletList, ContactLine } from './legal.jsx'

const EFFECTIVE_DATE = 'October 12, 2026'

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Student App"
        title="Privacy Policy"
        intro="This Privacy Policy explains what information Student App collects, how it is used, and the choices you have. Student App is operated by Schoen Cyber Solutions LLC."
        meta={`Effective Date: ${EFFECTIVE_DATE}`}
      />
      <PageBody>
        <Section title="Overview">
          <p>
            Student App is a mobile application that brings together class
            schedules, campus events, academic information, and student
            communities. This policy applies to the Student App mobile
            application and its supporting backend services.
          </p>
          <p>
            We aim to collect and retain only the information needed to provide
            the application&apos;s features.
          </p>
        </Section>

        <Section title="Information we collect">
          <h3 className="text-base font-semibold text-slate-200">Account and login data</h3>
          <p>
            To create and secure your account, we store your chosen username,
            optional profile details you provide (such as display name, bio, or
            program of study), and session data used to keep you signed in.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Email verification</h3>
          <p>
            We verify that you control a university email address before
            completing registration. Verification codes and the associated email
            address are processed for this purpose. Verification confirms
            control of the email address; it is not, by itself, proof of
            enrollment.
          </p>

          <h3 className="text-base font-semibold text-slate-200">University affiliation and academic setup</h3>
          <p>
            When you select your institution, academic term, program, and course
            sections, we store those selections so the app can build your
            schedule and grant access to the correct communities.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Course and schedule data</h3>
          <p>
            Official course offerings, section details, and academic calendar
            information are retrieved from supported university systems and
            public academic sources. Your specific section selections are stored
            as part of your account.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Calendar data</h3>
          <p>
            Personal events you create are stored with your account. If you
            choose to connect an external calendar (for example, a learning
            management system feed), we access that data only to display and
            synchronize your events. External calendar credentials and feed
            addresses are stored in encrypted form where they are retained at
            all.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Community content</h3>
          <p>
            Messages, posts, replies, and other content you create in student
            communities are stored so they can be displayed to other members of
            those communities.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Uploaded images</h3>
          <p>
            Images you attach to messages are stored in private object storage
            and are served only through the app to authorized users. When
            content or your account is deleted, the associated files are
            scheduled for removal.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Reports, moderation, and blocks</h3>
          <p>
            If you report content or block another user, we store those records
            to enforce your preferences and moderate the platform. Moderation
            actions, suspensions, and related audit records are retained to
            protect the community and platform integrity.
          </p>

          <h3 className="text-base font-semibold text-slate-200">Technical data</h3>
          <p>
            Our servers process standard technical information such as IP
            addresses and request metadata for security, abuse prevention, rate
            limiting, and operational monitoring. We do not run advertising or
            behavioral tracking in the app.
          </p>
        </Section>

        <Section title="How we use information">
          <BulletList
            items={[
              'Provide and operate the app features you use',
              'Verify your university email and configure your academic setup',
              'Display your schedule, events, and community content',
              'Enforce community guidelines, reports, blocks, and suspensions',
              'Maintain the security and reliability of the service',
              'Respond to support and privacy requests',
            ]}
          />
          <p>
            We do not sell your personal information, and we do not use it for
            advertising.
          </p>
        </Section>

        <Section title="User-generated content vs. university data">
          <p>
            Content you create (messages, images, profile details, personal
            events) is your content stored on our systems. Course catalogs,
            schedules, and campus event listings come from supported university
            systems and public academic sources; that source data is not your
            personal data and may be retained independently of your account.
          </p>
        </Section>

        <Section title="Third-party service providers">
          <p>
            We use a small number of service providers to operate Student App,
            including cloud infrastructure and database hosting, a private
            S3-compatible object store for uploaded images, a transactional
            email provider for verification emails, and in-memory data services
            for caching and rate limiting. These providers process data only as
            needed to deliver their services to us.
          </p>
          <p>
            Optional connections you configure, such as a university learning
            management system calendar feed, are fetched on your behalf and used
            only to provide the related feature.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            We retain account information while your account is active.
            Moderation and audit records may be retained after account deletion
            in anonymized form where needed for platform integrity. Server logs
            and security data are retained for limited operational periods.
          </p>
        </Section>

        <Section title="Account deletion">
          <p>
            You can delete your account directly from within Student App. When
            an account is deleted, your personal profile data, sessions,
            verification data, enrollments, calendar data, and uploaded media
            are removed or scheduled for removal. Community content you created
            may remain visible under an anonymized &quot;Deleted User&quot;
            attribution so existing discussions stay intact, and moderation
            audit records may be retained in anonymized form.
          </p>
          <p>
            If you cannot access your account and need help with deletion,
            contact us and we will assist you.
          </p>
        </Section>

        <Section title="Your rights and privacy requests">
          <p>
            Depending on where you live, you may have rights to access, correct,
            export, or delete your personal information. The app&apos;s account
            controls cover the most common actions directly; for anything else,
            contact us and we will respond within a reasonable timeframe.
          </p>
        </Section>

        <Section title="Children and minors">
          <p>
            Student App is intended for university students. It is not directed
            at children under 13, and we do not knowingly collect personal
            information from children under 13.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We take reasonable technical and organizational measures to protect
            your information, including encrypted transport, private media
            storage, access controls, and limited data retention. No method of
            transmission or storage is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section title="Independence from universities">
          <p>
            Student App is developed and operated independently by Schoen Cyber
            Solutions LLC. It is not affiliated with, endorsed by, sponsored by,
            or operated by Roosevelt University, Illinois Institute of
            Technology, or any other educational institution unless explicitly
            stated otherwise.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this Privacy Policy as the app and its features
            evolve. Material changes will be reflected on this page with an
            updated effective date.
          </p>
        </Section>

        <Section title="Contact">
          <ContactLine label="Privacy questions and requests" />
          <p className="text-sm text-slate-500">
            Schoen Cyber Solutions LLC
          </p>
        </Section>
      </PageBody>
    </>
  )
}

export default Privacy
