import { Download } from 'lucide-react';
import React from 'react';
import { formatDownloads } from '../../utility/FormatDownload';

const InstalledApps = ({installedItem}) => {
    
    const {image, downloads} = installedItem;


    return (
        <div>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4>Forest; focus for Productive</h4>
                    <div>
                        <div><span><Download></Download></span> {formatDownloads(downloads)}</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;