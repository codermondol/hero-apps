import React from 'react';
import { data, useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { Space } from 'lucide-react';
import ReviewChart from '../ReviewChart/ReviewChart';
import { addToStoredLS } from '../../utility/addToDB';
import { formatDownloads } from '../../utility/FormatDownload';

const AppsDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const appsData = useLoaderData();
    const singleApp = appsData.find(app => app.id === appId)

    const { image, companyName, size, title, downloads, ratingAvg, reviews, description, ratings } = singleApp;

    const handleInstallNow = (id) => {
        //Store with id
        //where to store {local store}
        // array like collection
        // if book already exist the show a alart
        // if the book exist then push in the collection or array

        addToStoredLS(id)
    }


    return (
        <div className='max-w-[1220px] mx-auto py-20'>
            <div className='flex gap-20'>
                <div className='w-3/12 bg-[#f5f5f5] rounded-2xl'>
                    <img src={image} alt="" className='w-full h-auto object-cover rounded-2xl' />
                </div>
                <div className='w-9/12 space-y-4'>
                    <h1 className='font-bold text-5xl'>{title}</h1>
                    <p>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{companyName}</span></p>
                    <div className='border-t-2 border-gray-200'></div>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-20'>
                        <div className='space-y-2'>
                            <img src={downloadIcon} alt="" />
                            <p>Downloads</p>
                            <h4 className='text-3xl font-bold'>{formatDownloads(downloads)}</h4>
                        </div>
                        <div className='space-y-2'>
                            <img src={ratingIcon} alt="" />
                            <p>Average Ratings</p>
                            <h4 className='text-3xl font-bold'>{ratingAvg}</h4>
                        </div>
                        <div className='space-y-2'>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <h4 className='text-3xl font-bold'>{formatDownloads(reviews)}</h4>
                        </div>
                    </div>
                    <button onClick={() => handleInstallNow(id)} className='btn bg-[#00D390] hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] text-white text-xl py-7 rounded transition-all duration-300 mt-10'>Install Now ({size} MB)</button>
                </div>
            </div>

            <div className='border-t-2 border-gray-200 my-10'></div>

            <ReviewChart ratings={ratings}></ReviewChart>

            <div className='border-t-2 border-gray-200 my-10'></div>

            <div className='space-y-4'>
                <h4 className='text-xl font-bold'>Description</h4>
                <p>{description}</p>
            </div>


        </div>
    );
};

export default AppsDetails;