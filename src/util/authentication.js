export const useAuthentication = () => {
    const accessToken = localStorage.getItem('token');
    return Boolean(accessToken);
}