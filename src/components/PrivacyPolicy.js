import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: 24/10/2024</p>

      <p>
        At <strong>EliteDrive Academy</strong>, your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our services, including our mobile application ("App"). By using the EliteDrive Academy App, you agree to the practices described in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a. Personal Information</h3>
      <p>
        We collect the following personal information:
        <ul>
          <li><strong>Instructors</strong>: Name, email, phone number, profile picture, location (postcode or GPS), qualifications, subscription status, and other details you provide.</li>
          <li><strong>Students</strong>: Name, email, profile picture, location, and interactions with instructors.</li>
        </ul>
      </p>

      <h3>b. Usage Data</h3>
      <p>
        We collect data about how you interact with the app, such as search queries, feedback, comments, and interactions with instructors or students.
      </p>

      <h3>c. Location Data</h3>
      <p>
        We collect location data (either postcode or GPS coordinates) to help students find instructors nearby.
      </p>

      <h3>d. Camera and Photo Access</h3>
      <p>
        Instructors may upload student pictures for administrative purposes. We request camera access to allow direct photo uploads within the app.
      </p>

      <h3>e. Device Information</h3>
      <p>
        We may collect device-specific information such as the device model, operating system, and other diagnostic data to improve app functionality.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your personal information to:
        <ul>
          <li>Manage and create profiles for instructors and students.</li>
          <li>Enable students to search for instructors by location and instructors to update profiles, upload pictures, and manage student information.</li>
          <li>Facilitate communication between students and instructors.</li>
          <li>Provide location-based search results for students.</li>
          <li>Allow students to rate instructors and leave feedback.</li>
          <li>Ensure security and prevent fraud.</li>
          <li>Verify instructor subscription status to allow them to maintain an active account and be visible to nearby students.</li>
        </ul>
      </p>

      <h2>3. Subscriptions for Instructors</h2>
      <p>
        To maintain an active account and be displayed to nearby students, instructors are required to subscribe to one of our subscription plans:
        <ul>
          <li><strong>Weekly Subscription</strong>: A subscription plan that renews every week.</li>
          <li><strong>Monthly Subscription</strong>: A subscription plan that renews every month.</li>
        </ul>
        Instructors with an active subscription will be shown to students in the app's search results based on their location and preferences. If a subscription is not active, the instructor's profile may not be visible to students.
      </p>

      <h2>4. Data Sharing and Disclosure</h2>
      <p>
        We do not sell your personal data to third parties. However, we may share your data with:
        <ul>
          <li>Other users, including students and instructors, through profiles, feedback, and ratings.</li>
          <li>Service providers to help deliver and improve our services (e.g., cloud hosting, analytics).</li>
          <li>Legal authorities if required by law to protect the safety and security of users.</li>
        </ul>
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>6. Your Choices and Rights</h2>
      <p>
        You have the right to:
        <ul>
          <li>Access your data and update or correct inaccurate information in your profile.</li>
          <li>Delete your account and personal data, subject to legal obligations.</li>
          <li>Opt out of location services by disabling GPS access on your device.</li>
        </ul>
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page, and you are encouraged to review this page periodically.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please contact us at:
        <br /><strong>Email:</strong> elitedriveacademy@outlook.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
