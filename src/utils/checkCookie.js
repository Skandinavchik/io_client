

const checkCookie = (cookie, name) => {
    const cookies = cookie;
    const cookieExists = cookies.split(';').some(item => item.startsWith(name));
    return cookieExists;
};

export default checkCookie;