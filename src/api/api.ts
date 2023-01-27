import axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0/`;

// ссылка на видео как создать инстанс axios и сократить код тут вообще https://youtu.be/tZahQsOc9Jk?t=1108

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return axios.get(baseURL + `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => response.data) // это сокращённая запись, тут как бы вместо => response.data стоит {return response.data}
    }
}

export const unfollowUser = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '825e511e-0c91-4615-9369-3d140b834385'
        }
    })
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': '825e511e-0c91-4615-9369-3d140b834385'
        }
    })
        .then(response => response.data)
}

export  const  getProfile = (userId: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);

}

export  const authAPI = {
    me () {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': '825e511e-0c91-4615-9369-3d140b834385'
            }
        })
    }
}