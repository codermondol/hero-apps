import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps } from '../../utility/addToDB';
import InstalledApps from '../../Components/InstalledApps/InstalledApps';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([])

    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApps();
        const convertedStoredApp = storedAppData.map(app => parseInt(app))
        const installApps = data.filter(app => convertedStoredApp.includes(app.id))
        setInstalledApp(installApps)
    }, [])

    return (
        <div>
            <div className='max-w-[1220px] mx-auto'>
                <div className='text-center m-10'>
                    <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
                    <p className='mt-2 mb-5'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='flex justify-between my-8 items-center'>
                        <div><span className='font-bold text-xl'>({installedApp.length}) Apps Found</span></div>
                        <div>
                            
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