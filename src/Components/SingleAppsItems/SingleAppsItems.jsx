import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SingleAppsItems = ({ AppsItem }) => {
    const { image, title, downloads, ratingAvg, id } = AppsItem;

    const formatDownloads = (num) => {
        if (num >= 1000000000) {
            return `${(num / 1_000_000_000).toFixed(1)}B`;
        }
        else if (num >= 1000000) {
            return `${(num / 1_000_000).toFixed(1)}M`;
        }
        else if (num >= 1000) {
            return `${(num / 1_000).toFixed(1)}K`;
        }
        return num;
    };

    return (
        <Link to={`/apps/${id}`}>
        <div className='bg-white p-5 rounded-xl'>
                <div className='w-full max-w-[320px] mx-auto bg-[#f5f5f5] rounded-2xl'><img src={image} alt="" className='w-full h-auto object-cover rounded-2xl' /></div>
                <h4 className='mt-5 font-bold text-2xl'>{title}</h4>
                <div className='mt-3 flex justify-between'>
                    <div className='flex items-center bg-[#f5f5f5] p-3 rounded text-[#00D390] font-bold gap-2'>
                        <span><Download></Download></span>
                        {formatDownloads(downloads)}
                    </div>
                    <div className='flex items-center bg-[#f5f5f5] p-3 rounded text-[#00D390] font-bold gap-2'>
                        <span><Star></Star></span>
                        {ratingAvg}
                    </div>
                </div>
            </div>
        
        </Link>
        

    );
};

export default SingleAppsItems;