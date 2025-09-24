import React, { useState } from 'react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfl-2H-ImSN2f_Kh0dmST3mWQwuOe9yNwiWM5Vb7mkTGZ8e3g/formResponse';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('entry.885119771', form.name);
            formData.append('entry.244321098', form.email);
            formData.append('entry.17915129', form.message);

            await fetch(FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });

         
            setSubmitted(true);
            setForm({ name: '', email: '', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="w-full h-full  bg-black ">
            <div className='h-[150px] w-full'></div>
        <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-xl mx-auto font-sans  ">
            <style jsx="true">{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .spinner {
                    animation: spin 1s linear infinite;
                }
            `}</style>
            
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
            
            {submitted ? (
                <div className="text-green-400 text-center text-lg py-12">✅ Message sent successfully!</div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-red-400 text-center">{error}</p>}
                    <div>
                        <label htmlFor="name" className="block text-sm text-gray-300">Full Name / Username</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-300">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm text-gray-300">Feedback / Questions</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                <span>Sending...</span>
                            </div>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            )}
        </div>
        <div className='h-[100px] w-full'></div>
        </div>
    );
};

export default ContactForm;
