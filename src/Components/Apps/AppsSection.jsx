import React, { Suspense } from 'react';
import AppsSectionItems from '../AppsSectionItems/AppsSectionItems';
import { Link } from 'lucide-react';

const AppsSection = () => {

    const appsPromise = fetch('apps.json').then(res => res.json())
    
    
    return (
        <div className='max-w-[1220px] mx-auto'>
            <div className='text-center m-10'>
                <h2 className='text-4xl font-bold'>Trending Apps</h2>
                <p className='mt-2 mb-5'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                    <AppsSectionItems appsPromise={appsPromise}></AppsSectionItems>
                </Suspense>
            </div>
            <div className='my-15 text-center'>
                
               <a href="/apps"> <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold px-20'>Show All</button></a>
            </div>
        </div>
    );
};

export default AppsSection;