const AUTH_KEY='rr-admin-auth'
export const loginAdmin=(username,password)=>{const valid=username==='admin'&&password==='1234';if(valid)sessionStorage.setItem(AUTH_KEY,'true');return valid}
export const logoutAdmin=()=>sessionStorage.removeItem(AUTH_KEY)
export const isAdminAuthenticated=()=>sessionStorage.getItem(AUTH_KEY)==='true'
