export default function LegalPage() {



    
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-sm text-neutral-800">
      {/* CONTACT SECTION */}
      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
        <p>
          If you have any questions about this mock project, your data, or how
          it's handled, please reach out to us.
        </p>
        <ul className="space-y-1">
          <li>Email: <a href="mailto:support@nikeairmock.com" className="text-blue-600 underline">support@nikeairmock.com</a></li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Mockingbird Lane, Swoosh City, NY 10001</li>
        </ul>
      </section>

      <hr className="border-neutral-300" />

      {/* PRIVACY POLICY */}
      <section id="privacy" className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Privacy Policy</h2>
        <p>
          This site is a mockup project and does not collect, store, or process personal data. However, in a real-world scenario, we would adhere strictly to GDPR and CCPA compliance regarding the use and protection of user information.
        </p>
        <p>
          No tracking cookies, analytics, or user account information is being used or stored in this mock design.
        </p>
        <p>
          If you were to submit contact information (e.g., email or messages), it would be treated with the highest confidentiality and never shared or sold.
        </p>
      </section>

      <hr className="border-neutral-300" />

      {/* TERMS OF SERVICE */}
      <section id="terms" className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Terms of Service</h2>
        <p>
          This website is a **non-commercial** educational mockup inspired by Nike Air® products. It is not affiliated with, sponsored by, or endorsed by Nike, Inc.
        </p>
        <p>
          All product names, logos, and brands are the property of their respective owners. All company, product, and service names used in this site are for identification and demonstration purposes only.
        </p>
        <p>
          Users may not attempt to use this mockup site for real transactions or attempt to impersonate Nike’s brand for commercial purposes.
        </p>
        <p>
          By using this site, you acknowledge that it is purely fictional and exists for showcasing front-end design and development only.
        </p>
      </section>

      <hr className="border-neutral-300" />

      {/* DISCLAIMER */}
      <section id="disclaimer" className="space-y-4 text-neutral-600 text-xs italic">
        <p>
          This site is a personal educational project designed for design and development practice. It is not an official Nike website and should not be interpreted as such.
        </p>
        <p>
          Nike, the Swoosh logo, and Nike Air are registered trademarks of Nike, Inc. All rights reserved to their respective owners.
        </p>
      </section>
    </div>
  );
}
