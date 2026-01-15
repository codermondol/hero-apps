import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import ReviewChart from '../ReviewChart/ReviewChart';
import { addToStoredLS, getStoredApps } from '../../utility/addToDB';
import { formatDownloads } from '../../utility/FormatDownload';
import { toast } from 'react-toastify';

const AppsDetails = () => {
    const [isDisable, setIsDisable] = useState(false)

    const { id } = useParams()
    const appId = parseInt(id)
    const appsData = useLoaderData();
    const singleApp = appsData.find(app => app.id === appId)

    const { image, companyName, size, title, downloads, ratingAvg, reviews, description, ratings } = singleApp;

    useEffect(() => {
        const installedApps = getStoredApps();
        const dataStringify = installedApps.includes(String(id))
        setIsDisable(dataStringify);
    }, [id]);

    const handleInstallNow = (id) => {

        addToStoredLS(id)
        setIsDisable(true)
        toast('App Install Completed!')
    }


    return (
        <div className='max-w-[1220px] mx-auto py-20'>
            <div className='flex flex-col sm:flex-row gap-8 lg:gap-20'>
                <div className='w-6/12 lg:w-3/12 bg-[#f5f5f5] rounded-2xl overflow-hidden mx-auto'>
                    <img src={image} alt="" className='w-full h-auto object-cover rounded-2xl' />
                </div>
                <div className='w-9/12 space-y-4 text-center md:text-left mx-auto'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>{title}</h1>
                    <p>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{companyName}</span></p>
                    <div className='border-t-2 border-gray-200'></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
                        <div className='space-y-2'>
                            <img src={downloadIcon} alt="" className='mx-auto sm:m-3'/>
                            <p>Downloads</p>
                            <h4 className='text-3xl font-bold'>{formatDownloads(downloads)}</h4>
                        </div>
                        <div className='space-y-2'>
                            <img src={ratingIcon} alt="" className='mx-auto sm:m-3'/>
                            <p>Average Ratings</p>
                            <h4 className='text-3xl font-bold'>{ratingAvg}</h4>
                        </div>
                        <div className='space-y-2'>
                            <img src={reviewIcon} alt="" className='mx-auto sm:m-3'/>
                            <p>Total Reviews</p>
                            <h4 className='text-3xl font-bold'>{formatDownloads(reviews)}</h4>
                        </div>
                    </div>
                    <button
                        disabled={isDisable}
                        onClick={() => handleInstallNow(id)}
                        className={`btn text-white text-xl py-7 rounded transition-all duration-300 mt-10 ${isDisable
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#00D390] hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]'
                            }
    `}>
                        {isDisable ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

            <div className='border-t-2 border-gray-200 my-10'></div>

            <ReviewChart ratings={ratings}></ReviewChart>

            <div className='border-t-2 border-gray-200 my-10'></div>

            <div className='space-y-4 p-2'>
                <h4 className='text-xl font-bold'>Description</h4>
                <p className='text-base sm:text-lg leading-relaxed'>{description}</p>
            </div>


        </div>
    );
};

export default AppsDetails;