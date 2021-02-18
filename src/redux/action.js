export const testAction = (test)=>{
    return {
        type: 'TEST',
        test: test
    }
}

export const userInfoAction = (data)=>{
    return {
        type: "USER_INFO_INIT",
        data
    }
}
export const emailAction = (email)=>{
    return {
        type: "CACHE_EMAIL",
        email
    }
}


// if(state.currWeek===undefined){
//     const li = window.localStorage.getItem("loginInfo")
//     const state_ = ({...JSON.parse(li)})
//     return {...state_};
// }