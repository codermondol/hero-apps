import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps } from '../../utility/addToDB';
import InstalledApps from '../../Components/InstalledApps/InstalledApps';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([])
    const [sort, setSort] = useState('');
    const [selectedSort, setSelectedSort] = useState(false)

    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApps();
        const convertedStoredApp = storedAppData.map(app => parseInt(app))
        const installApps = data.filter(app => convertedStoredApp.includes(app.id))
        setInstalledApp(installApps)

    }, [data])

    const handleSort = type => {
        setSort(type)
        setSelectedSort(true)
        const sorted = [...installedApp].sort((a, b) => {
            const aD = parseInt(String(a.downloads).replace(/,/g, ""), 10) || 0;
            const bD = parseInt(String(b.downloads).replace(/,/g, ""), 10) || 0;

            return type === "high"
                ? bD - aD
                : aD - bD; 
        });

        setInstalledApp(sorted);
    }

    return (
        <div>
            <div className='max-w-[1220px] mx-auto'>
                <div className='text-center m-10'>
                    <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
                    <p className='mt-2 mb-5'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='flex justify-between my-8 items-center'>
                        <div><span className='font-bold text-xl'>({installedApp.length}) Apps Found</span></div>
                        <div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn m-1">
                                   Sort By: {!selectedSort ? 'Downloads' : sort === 'low' ? 'Low to High' : 'High to Low' }
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li onClick={() => handleSort("low")} className='p-2 font-bold cursor-pointer'>Low to High</li>
                                    <li onClick={() => handleSort("high")} className='p-2 font-bold cursor-pointer'>High to Low</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        installedApp.map(installedItem => <InstalledApps
                            key={installedItem.id}
                            installedItem={installedItem}
                        ></InstalledApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;