const getStoredApps = () => {
    const storedAppsSTR = localStorage.getItem('installed');
    if(storedAppsSTR){
        const storedAppData = JSON.parse(storedAppsSTR);
        return storedAppData
    }
    return []
}

const addToStoredLS = (id) => {
    const storedAppData = getStoredApps();
    if(storedAppData.includes(id)){
        alert('This item already Exist')
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        localStorage.setItem('installed', data)
    }
}

export {addToStoredLS, getStoredApps}