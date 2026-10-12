import { Mail } from 'lucide-react'
import { PageHeader, PageBody, Section, CONTACT_EMAIL } from './legal.jsx'

const topics = [
  {
    title: 'Login & verification',
    body: 'Make sure you are using your supported university email address. Verification codes are sent by email — check spam folders, then request a new code if the first one does not arrive.',
  },
  {
    title: 'Course or calendar issues',
    body: 'If a course, section, or event looks wrong, first try refreshing or re-selecting your academic setup in the app. If the problem continues, contact support with a description of what you expected to see.',
  },
  {
    title: 'Campus events',
    body: 'Campus events come from university and student-organization sources. If an event is missing or incorrect, let us know which event and what is wrong.',
  },
  {
    title: 'Chat & communities',
    body: 'If you cannot access a community or post a message, confirm your course section selection is up to date. Report broken behavior with a short description of what happened.',
  },
  {
    title: 'Reporting or blocking',
    body: 'You can report content or users, and block users, directly in the app. If you need to escalate something beyond the in-app tools, contact support.',
  },
  {
    title: 'Privacy questions',
    body: 'Questions about your data or this app’s privacy practices are covered in the Privacy Policy. For anything else, contact us using the address below.',
  },
  {
    title: 'Account deletion',
    body: 'You can delete your account directly from within Student App. If you cannot access your account and need help with deletion, contact support and we will assist you.',
  },
  {
    title: 'General support',
    body: 'For anything not covered above, email us with a short description of the problem and the device you are using.',
  },
]

function Support() {
  return (
    <>
      <PageHeader
        eyebrow="Student App"
        title="Support"
        intro="Find help with common issues, or contact us directly."
      />
      <PageBody>
        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="p-6 rounded-2xl border border-slate-800/60 bg-slate-900/30"
            >
              <h2 className="text-lg font-semibold text-white tracking-tight mb-2">
                {topic.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{topic.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-4">
            Contact support
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Email us and include a short description of the issue, the device
            you are using, and — if relevant — the screen where it happened.
            Never include passwords or verification codes.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </PageBody>
    </>
  )
}

export default Support
