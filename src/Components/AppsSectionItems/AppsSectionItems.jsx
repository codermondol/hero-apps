import React, { use } from 'react';
import SingleAppsItems from '../SingleAppsItems/SingleAppsItems';

const AppsSectionItems = ({appsPromise}) => {
    const AppsData = use(appsPromise);
    return (
        <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                AppsData.map(AppsItem => <SingleAppsItems AppsItem={AppsItem}></SingleAppsItems>)
            }
        </div>
    );
};

export default AppsSectionItems;