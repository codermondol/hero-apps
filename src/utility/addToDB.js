const getStoredApps = () => {
    const storedAppsSTR = localStorage.getItem('installed');
    if (storedAppsSTR) {
        const storedAppData = JSON.parse(storedAppsSTR);
        return storedAppData
    }
    return []
}

const saveAppToLS = data => {
    localStorage.setItem('installed', data)
}

const addToStoredLS = (id) => {
    const storedAppData = getStoredApps();
    if (storedAppData.includes(id)) {
        alert('This item already Exist')
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        saveAppToLS(data)
    }
}

const removeFromStoredLS = (id) => {
    const storedCart = getStoredApps();
    const remainingCart = storedCart.filter(storedId => storedId !== String(id))
    saveAppToLS(JSON.stringify(remainingCart));
};


export { addToStoredLS, getStoredApps, removeFromStoredLS }