import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import SingleAppsItems from '../../Components/SingleAppsItems/SingleAppsItems';
import SingleApps from '../../Components/SingleApps/SingleApps';

const Apps = () => {
    const data = useLoaderData()
    const [search, setSearch] = useState('');
    const [filteredApps, setFilteredApps] = useState([])

    useEffect(() => {
        const queries = search.trim().toLowerCase();

        if (!queries) {
            setFilteredApps(data)
        }
        else {
            const result = data.filter(app => (app.title || '').toLowerCase().includes(queries));
            setFilteredApps(result)
        }
    }, [data, search])

    return (
        <div>
            <div className='max-w-[1220px] mx-auto'>
                <div className='text-center m-10'>
                    <h2 className='text-4xl font-bold'>Our All Applications</h2>
                    <p className='mt-2 mb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between my-8 items-center'>
                    <div><span className='font-bold text-xl'>({data.length}) Apps Found</span></div>
                    <div>
                        <label className="input p-6 rounded-xl">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search"
                                name="search"
                                id=""
                                placeholder='Search Apps'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='text-xl  border-gray-200 bg-white p-4 rounded-xl' />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20'>
                    {
                        filteredApps.length === 0 ? (
                            <div className='col-span-full flex flex-col items-center justify-center text-center'>
                                <p className={`text-5xl my-6 font-bold`}>No App Found</p>
                                
                            </div>
                        ) : (
                            filteredApps.map(singleData => <SingleApps
                                key={singleData.id}
                                singleData={singleData}
                            ></SingleApps>)
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Apps;