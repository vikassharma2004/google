import React from 'react';

const Profile = () => {
    return (
        <div className="bg-gray-50 font-display">
           

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-6 sm:p-8 bg-black/90">
                        <div className="flex items-center space-x-6">
                            <img className="h-24 w-24 rounded-full border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PBPi4-jI6Sktk8QQFAquYi56b1v5isaRZg&s" alt="" />
                            <div>
                                <h1 className="text-2xl font-bold text-white">John Anderson</h1>
                                <div className="mt-2 flex items-center space-x-6 text-white">
                                    <div className="flex items-center">
                                        <i className="fas fa-fire-alt mr-2"></i>
                                        <span>12 Reports Submitted</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-bell mr-2"></i>
                                        <span>5 Active Alerts</span>
                                    </div>
                                </div>
                            </div>
                            <button className="ml-auto !rounded-button bg-white text-black px-4 py-2 font-medium">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex">
                            <a href="#" className="w-1/3 py-4 px-1 text-center border-b-2 border-black font-medium text-black">
                                Profile Settings
                            </a>
                            <a href="#" className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                Fire Reports
                            </a>
                            <a href="#" className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                Saved Locations
                            </a>
                        </nav>
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-2">
                                <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                                <input type="text" defaultValue="John" className="mt-1 block w-full border-gray-300 focus:border-black focus:ring-black" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                                <input type="text" defaultValue="Anderson" className="mt-1 block w-full border-gray-300 focus:border-black focus:ring-black" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                            <input type="email" defaultValue="john.anderson@example.com" className="mt-1 block w-full border-gray-300 focus:border-black focus:ring-black" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="tel" defaultValue="+1 (555) 123-4567" className="mt-1 block w-full border-gray-300 focus:border-black focus:ring-black" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Location</label>
                                            <input type="text" defaultValue="San Francisco, CA" className="mt-1 block w-full border-gray-300 focus:border-black focus:ring-black" />
                                        </div>
                                    </div>
                                </form>

                                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-6">Notification Preferences</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                                            <p className="text-sm text-gray-500">Receive updates about fire alerts via email</p>
                                        </div>
                                        <button type="button" className="bg-black relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" role="switch" aria-checked="true">
                                            <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                                <span className="opacity-0 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                                    <i className="fas fa-check text-black text-xs"></i>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                                            <p className="text-sm text-gray-500">Receive urgent alerts via text message</p>
                                        </div>
                                        <button type="button" className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" role="switch" aria-checked="false">
                                            <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                                <span className="opacity-100 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                                    <i className="fas fa-times text-gray-400 text-xs"></i>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                                            <p className="text-sm text-gray-500">Receive alerts through mobile app</p>
                                        </div>
                                        <button type="button" className="bg-black relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" role="switch" aria-checked="true">
                                            <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                                <span className="opacity-0 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                                    <i className="fas fa-check text-black text-xs"></i>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h2 className="text-lg font-medium text-gray-900 mb-6">Alert Settings</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Wind Speed Threshold</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input type="number" defaultValue="30" className="block w-full pr-12 border-gray-300 focus:border-black focus:ring-black" />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Temperature Threshold</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input type="number" defaultValue="35" className="block w-full pr-12 border-gray-300 focus:border-black focus:ring-black" />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">°C</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Alert Radius</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input type="number" defaultValue="10" className="block w-full pr-12 border-gray-300 focus:border-black focus:ring-black" />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">km</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-sm font-medium text-gray-700 mb-4">Emergency Contacts</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <i className="fas fa-user-circle text-gray-400 text-xl mr-3"></i>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                                                        <p className="text-sm text-gray-500">+1 (555) 987-6543</p>
                                                    </div>
                                                </div>
                                                <button className="text-gray-400 hover:text-gray-500">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <i className="fas fa-user-circle text-gray-400 text-xl mr-3"></i>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">Mike Williams</p>
                                                        <p className="text-sm text-gray-500">+1 (555) 234-5678</p>
                                                    </div>
                                                </div>
                                                <button className="text-gray-400 hover:text-gray-500">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <button className="mt-4 !rounded-button w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 font-medium hover:bg-gray-50">
                                            Add Emergency Contact
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;