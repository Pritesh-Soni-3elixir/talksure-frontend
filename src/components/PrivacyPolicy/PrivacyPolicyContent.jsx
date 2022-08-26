import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <section className="position-relative pt-5 mt-3 mx-3 mx-lg-5">
      <div className="title-section">
        <h1 className="display-3">Privacy Policy</h1>
        <p className="fst-italic">
          Effective starting: September 23, 2021 (
          <a className="text-decoration-none fst-normal" href="#">
            view archived versions
          </a>
          )
        </p>
      </div>
      <div className="policy-rules mt-5">
        <h2 className="display3">What this policy covers</h2>
        <p>
          Your privacy is important to us, and so is being transparent about how
          we collect, use, and share information about you. This policy is
          intended to help you understand:
        </p>
        <ul>
          <li className="my-3">
            <a href="#what-info">What information we collect about you</a>
          </li>
          <li className="my-3">
            <a href="#how-we-share">How we share information we collect</a>
          </li>
          <li className="my-3">
            <a href="#how-we-store">
              How we store and secure information we collect
            </a>
          </li>
        </ul>
        <p>
          This Privacy Policy covers the information we collect about you when
          you use our products or services, or otherwise interact with us (for
          example, by attending our premises or events or by communicating with
          us), unless a different policy is displayed. Atlassian, we and us
          refers to Atlassian Pty Ltd, Atlassian, Inc. and any of our corporate
          affiliates. We offer a wide range of products,{" "}
          <span>
            <a href="">including our cloud, server and data center products.</a>
          </span>{" "}
          We refer to all of these products, together with our other services
          and websites as "Services" in this policy.
        </p>
        <p>
          This policy also explains your choices surrounding how we use
          information about you, which include how you can object to certain
          uses of information about you and how you can access and update
          certain information about you.{" "}
          <strong>
            If you do not agree with this policy, do not access or use our
            Services or interact with any other aspect of our business.
          </strong>
        </p>
        {/* What-info */}
        <div id="what-info" className="my-3  ">
          <h2 className="display3">What information we collect about you</h2>
          <p>
            We collect information about you when you provide it to us, when you
            use our Services, and when other sources provide it to us, as
            further described below.{" "}
          </p>
          <h5 className="display3">Information you provide to us</h5>
          <p>
            We collect information about you when you input it into the Services
            or otherwise provide it directly to us.
          </p>
          <div>
            <h5 className="display3 d-inline">
              Account and Profile information:
            </h5>{" "}
            <p className="d-inline">
              We collect information about you when you register for an account,
              create or modify your profile, set preferences, sign-up for or
              make purchases through the Services. For example, you provide your
              contact information and, in some cases, billing information, when
              you register for the Services. You also have the option of adding
              a display name, profile photo, job title, and other details to
              your profile information to be displayed in our Services. We keep
              track of your preferences when you select settings within the
              Services.
            </p>
          </div>
        </div>
        {/* How we share */}
        <div id="how-we-share" className="my-3 py-3">
          <h2 className="display3">How we share information we collect</h2>
          <p>
            We make collaboration tools, and we want them to work well for you.
            This means sharing information through the Services and with certain
            third parties. We share information we collect about you in the ways
            discussed below, including in connection with possible business
            transfers. We are not in the business of selling information about
            you to advertisers or other third parties.
          </p>
          <div>
            <h5 className="display3 d-inline">
              To provide the Services and personalize your experience:
            </h5>{" "}
            <p className="d-inline">
              We use information about you to provide the Services to you,
              including to process transactions with you, authenticate you when
              you log in, provide customer support, and operate, maintain, and
              improve the Services. For example, we use the name and picture you
              provide in your account to identify you to other Service users.
              Our Services also include tailored features that personalize your
              experience, enhance your productivity, and improve your ability to
              collaborate effectively with others by automatically analyzing the
              activities of your team to provide search results, activity feeds,
              notifications, connections and recommendations that are most
              relevant for you and your team. For example, we may use your
              stated job title and activity to return search results we think
              are relevant to your job function. We also use information about
              you to connect you with other team members seeking your subject
              matter expertise. We may use your email domain to infer your
              affiliation with a particular organization or industry to
              personalize the content and experience you receive on our
              websites. Where you use multiple Services, we combine information
              about you and your activities to provide an integrated experience,
              such as to allow you to find information from one Service while
              searching from another or to present relevant product information
              as you travel across our websites. Based on your interactions with
              different Atlassian products and advertisements, we will
              personalize your experience and tailor our communications and
              offers to you. To opt out of this personalization, please contact
              privacy@atlassian.com.
            </p>
          </div>
          <div className="my-3">
            <h5 className="display3 d-inline">Customer support:</h5>{" "}
            <p className="d-inline">
              We use your information to resolve technical issues you encounter,
              to respond to your requests for assistance, to analyze crash
              information, and to repair and improve the Services. Where you
              give us express permission to do so, we share information with a
              third party expert for the purpose of responding to
              support-related requests.
            </p>
          </div>
        </div>
        {/* How we store */}
        <div id="how-we-store" className="my-3 py-3">
          <h2 className="display3">
            How we store and secure information we collect
          </h2>
          <h5 className="display3">Information storage and security</h5>
          <p>
            We use industry standard technical and organizational measures to
            secure the information we store. For more information on where and
            how we store your information, please see the{" "}
            <a href="">Atlassian Trust</a>, <a href="">Trello Trust</a>, and{" "}
            <a href="">Jira Align Trust</a> pages.
          </p>

          <div>
            <h5 className="display3 d-inline">Account information:</h5>{" "}
            <p className="d-inline">
              We retain your account information for as long as your account is
              active and a reasonable period thereafter in case you decide to
              re-activate the Services. We also retain some of your information
              as necessary to comply with our legal obligations, to resolve
              disputes, to enforce our agreements, to support business
              operations, and to continue to develop and improve our Services.
              Where we retain information for Service improvement and
              development, we take steps to eliminate information that directly
              identifies you, and we only use the information to uncover
              collective insights about the use of our Services, not to
              specifically analyze personal characteristics about you.
            </p>
          </div>
          <p className="mt-3 fw-bold">Administrators are able to: </p>
          <ul>
            <li>require you to reset your account password;</li>
            <li>
              access or retain information stored as part of your account;
            </li>
            <li>restrict, suspend or terminate your access to the Services;</li>
            <li>
              install or uninstall third-party apps or other integrations{" "}
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h5 className="display3">Contact us</h5>
          <p>
            Your information is controlled by Atlassian Pty Ltd and Atlassian,
            Inc. If you have questions or concerns about how your information is
            handled, please direct your inquiry to Atlassian Pty Ltd, which we
            have appointed to be responsible for facilitating such inquiries or,
            if you are a resident of the European Economic Area, please contact
            our EU Representative.{" "}
            <div className="">
              <br /> Atlassian Pty Ltd <br />
              c/o Atlassian, Inc. <br /> 350 Bush Street, Floor 13 <br /> San
              Francisco, CA 94104 <br /> E-Mail:{" "}
              <a href="mailto:privacy@atlassian.com">privacy@atlassian.com</a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
