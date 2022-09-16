export function setTokenStorage(data){
    localStorage.setItem('token',data);
}
export function getTokenStorage(){
    return window.localStorage.getItem('token');
}
export function clearTokenStorage(){
    window.localStorage.removeItem('token');
}