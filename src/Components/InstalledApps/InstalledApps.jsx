import { Download, Star } from 'lucide-react';
import React, { useState } from 'react';
import { formatDownloads } from '../../utility/FormatDownload';
import { removeFromStoredLS } from '../../utility/addToDB';

const InstalledApps = ({ installedItem }) => {
    const [isInstalled, setIsInstalled] = useState(true);

    const { image, downloads, ratingAvg, size, id } = installedItem;

    const handleUninstall = (id) => {

        removeFromStoredLS(id)
        setIsInstalled(false);
    }
    if (!isInstalled) {
        return null; 
    }

    return (
        <div className='bg-white rounded mb-5 p-5'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-7'>
                    <div className='max-w-[100px] max-h-[100px]'>
                        <img src={image} alt="" className='w-auto h-auto max-w-full max-h-full rounded object-contain' />
                    </div>
                    <div className='space-y-5'>
                        <h4 className='text-xl font-bold'>Forest; focus for Productive</h4>
                        <div className='flex items-center gap-5'>
                            <div className='flex gap-2 font-bold text-[#00D390]'>
                                <span><Download></Download></span>
                                <span>{formatDownloads(downloads)}</span>
                            </div>
                            <div className='flex gap-2 font-bold text-[#FF8811]'>
                                <span><Star></Star></span>
                                <span>{ratingAvg}</span>
                            </div>
                            <div className='font-bold text-[#627382]'>{size} MB</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleUninstall(id)} className='btn bg-[#00D390] hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] text-white text-xl py-7 rounded transition-all duration-300'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;