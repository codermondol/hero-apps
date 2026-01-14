import React, { use } from 'react';
import SingleAppsItems from '../SingleAppsItems/SingleAppsItems';

const AppsSectionItems = ({ appsPromise }) => {
    const AppsData = use(appsPromise);
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    AppsData.slice(0, 8).map(AppsItem => <SingleAppsItems
                        key={AppsItem.id}
                        AppsItem={AppsItem}></SingleAppsItems>)
                }
            </div>
        </div>
    );
};

export default AppsSectionItems;