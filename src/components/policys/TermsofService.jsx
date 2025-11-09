import React from 'react';

// Main component containing the Privacy Policy content
const Policy = () => {
    // In a real application, this might come from a CMS or config file
    const lastUpdatedDate = "November 10, 2025";
    const contactEmail = "yy3134659@gmail.com";

    // Reusable component for list items
    const PolicyListItem = ({ title, children }) => (
        <li className="pl-2">
            <strong className="font-medium text-gray-900">{title}</strong>: {children}
        </li>
    );

    return (
        // Global container mimicking the structure from the HTML version
        <div className="bg-gray-50 min-h-screen p-4 sm:p-8 flex justify-center items-start">
            <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-6 md:p-10 lg:p-12 border border-gray-100">

                {/* Header */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-gray-200">
                    Privacy Policy for DirectCodeUI Capture Extension
                </h1>

                {/* Data Collection and Usage Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection and Usage</h2>
                    <p className="text-gray-600 mb-4">
                        This extension collects and processes the following data exclusively to provide the core functionality of generating code from images:
                    </p>
                    <ul className="list-disc space-y-3 pl-6 text-gray-700">
                        <PolicyListItem title="Screenshots">
                            Only the selected area of webpages you choose to capture is collected. This data is temporary and used immediately for API processing.
                        </PolicyListItem>
                        <PolicyListItem title="API Keys">
                            Your Gemini API keys are required for processing and are stored securely and exclusively <span className="text-indigo-600 font-semibold">locally in your browser's storage</span>.
                        </PolicyListItem>
                        <PolicyListItem title="Authentication Token">
                            Login token for DirectCodeUI services, used only to verify the user's access.
                        </PolicyListItem>
                    </ul>
                </section>

                {/* Data Storage Section (Highlighted) */}
                <section className="mb-8 p-5 bg-indigo-50 rounded-xl border border-indigo-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage</h2>
                    <p className="text-gray-700">
                        All collected data, including your API keys and temporary screenshot data, is stored <strong className="font-bold">locally in your browser</strong> using browser storage APIs. 
                        <span className="font-bold text-indigo-700">We do not store your API keys or screenshots on our servers.</span>
                    </p>
                </section>

                {/* Third-Party Services Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
                    <p className="text-gray-600">
                        Captured screenshots are processed through Google's <strong className="font-medium">Gemini API</strong> to generate code. Your data is sent to Google's servers for processing and is subject to <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:text-blue-800 underline transition duration-150">Google's privacy policy</a>.
                    </p>
                </section>

                {/* Data Sharing Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing</h2>
                    <p className="text-gray-600">
                        We do not share your personal data with any third parties except as strictly necessary to provide the service (i.e., sending the captured image to the Google Gemini API for processing).
                    </p>
                </section>

                {/* Contact and Update Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h2>
                    <p className="text-gray-600 mb-1">
                        For privacy concerns or questions about this policy, please contact: 
                        <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:text-blue-800 font-medium">
                            {contactEmail}
                        </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Last updated: <span className="font-medium">{lastUpdatedDate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Policy;