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
  const storedAppData = getStoredApps();

  const remainingData = storedAppData.filter(
    appId => String(appId) !== String(id)
  );

  saveAppToLS(remainingData);
};


export { addToStoredLS, getStoredApps, removeFromStoredLS }