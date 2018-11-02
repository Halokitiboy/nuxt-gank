/**
 * 格式化时间
 * @param {*} date 
 */
export const dateTransform = (date)=>{
    date = date.match(  /\d{1,}/g); 
    let formatDate = `${ date.slice(0,3).join('-')} ${ date.slice(3,6).join(':')}`;
    return formatDate
}