import React from 'react';
import Layout from './Layout';
import AllSections from '../../constants/SecurityConstants/AllSections';

const Security = () => {

    const { sections, additionalSections, footerContent } = AllSections()

    return (
        <Layout>
            <div className='lg:w-10/12 w-full px-5 lg:px-0 mx-auto'>
                <div className="bg-gray-100">
                    <header className="bg-green-700 text-white">
                        <div className="p-6 flex flex-col md:flex-row items-center md:justify-between">
                            <h1 className="text-3xl font-bold">Your Security</h1>
                            <p className="text-xl mt-2 md:mt-0">Find out how to stay safe and secure when banking online.</p>
                        </div>
                    </header>

                    <main className="max-w-7xl mx-auto p-6">
                        <section className="text-center py-8">
                            <h2 className="text-2xl font-bold">Your Security gives you the latest tips to protect your accounts, whenever you need them.</h2>
                        </section>

                        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                            {sections.map((section, index) => (
                                <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-start">
                                    {section.imageUrl ? (
                                        <img src={section.imageUrl} alt={section.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                                    ) : (
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-700 p-2 rounded-full text-white">
                                                <i className={section.icon}></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-green-700 ml-4">{section.title}</h3>
                                        </div>
                                    )}
                                    <p className="mb-4">{section.description}</p>
                                    <button className="mt-auto bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">{section.buttonText}</button>
                                </div>
                            ))}
                        </section>

                        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                            {additionalSections.map((section, index) => (
                                <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-700 p-2 rounded-full text-white">
                                            <i className={section.icon}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-green-700 ml-4">{section.title}</h3>
                                    </div>
                                    <p className="mb-4">{section.description}</p>
                                    {section.list && (
                                        <ul className="list-disc list-inside">
                                            {section.list.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </section>

                        <section className="text-center py-8 bg-gray-200">
                            <h2 className="text-2xl font-bold">Check how safe you are online</h2>
                            <p>Find out if your security knowledge is basic, intermediate or advanced. <a href="#" className="text-green-700 underline">Take the quiz</a>.</p>
                        </section>

                        <footer className="bg-gray-800 text-white text-center py-8">
                            <div className="max-w-7xl mx-auto p-6">
                                <p className="text-lg font-bold">Our online and mobile banking guarantee</p>
                                {footerContent.map((content, index) => (
                                    <p key={index} className="mt-2">{content}</p>
                                ))}
                                <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">Read our fraud guarantee in full</button>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

export default Security;
