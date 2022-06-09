const getUserData = async () => {
    let data = null;
    try {
        const response = await fetch('/api-user.json');
        data = await response.json();
    } catch (e) {
        console.error(e);
    }

    return data;
};

export { getUserData };
