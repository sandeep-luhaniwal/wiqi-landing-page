"use client";
import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="space-y-3">
    <Heading small semibold className="!text-xl !text-purple-900">
      {title}
    </Heading>
    <div className="text-purple-700 leading-relaxed">{children}</div>
  </section>
);

export default function ChildSafety() {
  return (
    <div className="min-h-screen !mx-auto">
      <div className="max-w-[1200px] !mx-auto px-4">
        {/* Header */}
        <header className="mt-12">
          <Heading bold className="!text-4xl !text-purple-900 mb-3">
            Child Safety Standards Policy
          </Heading>
        </header>

        {/* Content */}
        <div className="bg-white p-2 md:p-12 space-y-10 leading-relaxed text-purple-700">
          <Paragraph base className="!text-purple-700">
            This Child Safety Standards Policy applies to <strong>WiQi</strong>, published and operated by <strong>SamPro Holdings Limited</strong>.
          </Paragraph>

          <Section title="Our Commitment to Child Safety">
            <Paragraph base className="!text-purple-700">
              WiQi is committed to providing a safe environment for all users. We maintain a zero-tolerance policy toward Child Sexual Abuse and Exploitation (CSAE) and Child Sexual Abuse Material (CSAM).
            </Paragraph>
            <Paragraph base className="mt-2 !text-purple-700">
              We strictly prohibit any content, behavior, communication, or activity that exploits, abuses, endangers, sexualizes, or harms children in any way.
            </Paragraph>
          </Section>

          <Section title="Prohibited Content and Activities">
            <Paragraph base className="!text-purple-700">
              Users must not create, upload, share, transmit, request, promote, distribute, or engage in any content or activity involving:
            </Paragraph>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
              <li>Child Sexual Abuse Material (CSAM)</li>
              <li>Child Sexual Abuse and Exploitation (CSAE)</li>
              <li>Grooming or solicitation of minors</li>
              <li>Sexualization of minors</li>
              <li>Child trafficking or exploitation</li>
              <li>Sextortion involving minors</li>
              <li>Any form of abuse, harassment, or endangerment of children</li>
              <li>Attempts to facilitate or encourage illegal activity involving minors</li>
            </ul>
            <Paragraph base semibold className="mt-3 !text-purple-900">
              Any such activity is strictly forbidden and will result in immediate enforcement action.
            </Paragraph>
          </Section>

          <Section title="Reporting Child Safety Concerns">
            <Paragraph base className="!text-purple-700">
              Users who encounter content or behavior that may violate this policy are encouraged to report it immediately.
            </Paragraph>
            <Paragraph base className="mt-2 !text-purple-700">
              Reports can be submitted through:
            </Paragraph>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
              <li>In-app reporting tools (where available)</li>
              <li>
                Email:{" "}
                <a href="mailto:info@sam-pro.com" className="text-purple-900 font-semibold underline hover:text-purple-600 transition-colors">
                  info@sam-pro.com
                </a>
              </li>
            </ul>
            <Paragraph base semibold className="mt-3 !text-purple-900">
              We review child safety reports as a priority and take prompt action when violations are identified.
            </Paragraph>
          </Section>

          <Section title="Enforcement Actions">
            <Paragraph base className="!text-purple-700">
              If we determine that a user, account, or content violates this policy, we may take one or more of the following actions:
            </Paragraph>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
              <li>Remove offending content</li>
              <li>Restrict account functionality</li>
              <li>Suspend user accounts</li>
              <li>Permanently terminate user accounts</li>
              <li>Preserve evidence as required by law</li>
              <li>Report violations to relevant law enforcement authorities or child protection organizations</li>
            </ul>
          </Section>

          <Section title="Compliance with Laws and Regulations">
            <Paragraph base className="!text-purple-700">
              WiQi complies with applicable child protection laws and Google Play's Child Safety Standards requirements.
            </Paragraph>
            <Paragraph base className="mt-2 !text-purple-700">
              Where required by law, confirmed cases involving Child Sexual Abuse Material (CSAM) or Child Sexual Abuse and Exploitation (CSAE) may be reported to appropriate authorities.
            </Paragraph>
          </Section>

          <Section title="Age Restrictions">
            <Paragraph base className="!text-purple-700">
              Users must comply with any minimum age requirements applicable to the use of WiQi. We do not knowingly permit the use of our services for unlawful activities involving minors.
            </Paragraph>
          </Section>

          <Section title="Contact Information">
            <Paragraph base className="!text-purple-700">
              If you have questions or concerns regarding child safety on WiQi, please contact:
            </Paragraph>
            <div className="bg-purple-50 p-4 rounded-lg mt-4 space-y-1 text-purple-900">
              <Paragraph base semibold className="!text-purple-900">SamPro Holdings Limited</Paragraph>
              <Paragraph base className="!text-purple-900">
                Email:{" "}
                <a href="mailto:info@sam-pro.com" className="underline hover:text-purple-600 transition-colors">
                  info@sam-pro.com
                </a>
              </Paragraph>
              <Paragraph base className="!text-purple-900">
                Website:{" "}
                <a href="https://wiqi.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-600 transition-colors">
                  https://wiqi.net
                </a>
              </Paragraph>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
