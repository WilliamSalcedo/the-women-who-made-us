import { useTranslation } from 'react-i18next'

export default function PrivacyModal() {
  const { t } = useTranslation()

  return (
    <div className="w-[100%]">
      <div className="p-6 shadow-xl">
        <button
          onClick={() => window.history.back()}
          className="top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-black md:hidden"
          aria-label="Go back"
        >
          ←
        </button>
        <h1 className="font-futura mb-2 text-center text-white italic md:text-[25px] lg:text-[30px]">
          {t('text.privacy')}
        </h1>
        <div className="m-2 text-white">
          <p className="">Last Update: 02/2026</p>
          <p className="mt-10 text-justify">
            At Women Who Made Us (“we”, “our”, or “the Site”), we respect and protect the privacy of
            those who visit and interact with our website https://thewomenwhomadeus.com. This
            Privacy Policy explains how we collect, use, store, and protect your personal
            information.
          </p>
          <ol className="mt-5 list-decimal space-y-10 pl-5">
            <li>
              <h3 className="font-semibold">Information we collect</h3>

              <p className="mt-2">We may collect the following types of information:</p>

              <ol className="mt-4 list-[lower-alpha] space-y-6 pl-5">
                <li>
                  <p className="font-semibold">Information you provide directly</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Name and last name</li>
                    <li>Email address</li>
                    <li>
                      Any other information you choose to provide when subscribing or contacting us
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-semibold">Information collected automatically</p>
                  <p className="mt-2">
                    When you browse the Site, we may collect technical information such as:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>IP address</li>
                    <li>Browser type and device information</li>
                    <li>Pages visited and time spent on the Site</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    This data is collected in an aggregated manner for analytical purposes only.
                  </p>
                </li>
              </ol>
            </li>

            <li>
              <h3 className="font-semibold">How we use your information</h3>

              <p className="mt-2">We use your information to:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Send editorial content, newsletters, and project-related communications</li>
                <li>Manage subscriptions and mailing lists</li>
                <li>Improve the content, design, and performance of the Site</li>
                <li>Analyze usage for statistical purposes</li>
                <li>Comply with applicable legal obligations</li>
              </ul>

              <p className="mt-2 text-sm">We do not sell your personal data.</p>
            </li>

            <li>
              <h3 className="font-semibold">Legal basis for processing</h3>

              <p className="mt-2">We process personal data based on:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Your explicit consent</li>
                <li>Our legitimate interest in operating and improving the project</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold">Data storage and security</h3>

              <p className="mt-2">
                Your data is stored using secure technological services and reasonable safeguards.
              </p>
              <p className="mt-2">
                We implement appropriate technical and organizational measures to protect your
                information from unauthorized access, loss, or misuse.
              </p>
            </li>

            <li>
              <h3 className="font-semibold">Third-party services</h3>

              <p className="mt-2">We may use third-party services to:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Store and manage data</li>
                <li>Send email communications</li>
                <li>Analyze website traffic</li>
              </ul>

              <p className="mt-2">
                These providers process data only according to our instructions and applicable data
                protection standards.
              </p>
            </li>

            <li>
              <h3 className="font-semibold">Cookies</h3>

              <p className="mt-2">The Site may use cookies or similar technologies to:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Improve your browsing experience</li>
                <li>Analyze Site usage</li>
              </ul>

              <p className="mt-2">
                You may configure your browser to reject or delete cookies at any time.
              </p>
            </li>

            <li>
              <h3 className="font-semibold">Your rights</h3>

              <p className="mt-2">Depending on your location, you may have the right to:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Access your personal data</li>
                <li>Request correction or updates</li>
                <li>Request deletion of your data</li>
                <li>Withdraw your consent at any time</li>
              </ul>

              <p className="mt-2">
                To exercise these rights, please contact us at:
                <br />
                📩 <a href="mailto:hello@whomadeus.live">hello@whomadeus.live</a>
              </p>
            </li>

            <li>
              <h3 className="font-semibold">Email communications</h3>

              <p className="mt-2">If you subscribe to our newsletter:</p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>You will only receive communications related to the project</li>
                <li>You may unsubscribe at any time using the link provided in each email</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold">Children’s privacy</h3>

              <p className="mt-2">
                The Site is not intended for children under the age of 13, and we do not knowingly
                collect personal information from children.
              </p>
              <p className="mt-2">If such data is identified, it will be deleted promptly.</p>
            </li>

            <li>
              <h3 className="font-semibold">Changes to this policy</h3>

              <p className="mt-2">We may update this Privacy Policy from time to time.</p>
              <p className="mt-2">
                Any changes will be posted on this page with an updated revision date.
              </p>
            </li>

            <li>
              <h3 className="font-semibold">Contact</h3>

              <p className="mt-2">
                If you have any questions about this Privacy Policy or how we handle your data,
                please contact us at:
                <br />
                📩 <a href="mailto:hello@whomadeus.live">hello@whomadeus.live</a>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
