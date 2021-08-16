import { Post } from '../models/Post'

interface ApiConfig {
    baseUrl: string
}

export class Api {
    private baseUrl: string
    constructor(config: ApiConfig) {
        this.baseUrl = config.baseUrl
    }
    
    async createNewPost (data: Post) {
        return new Promise((resolve) => {
            console.log('SENDING', data)
            setTimeout(resolve, 1000)
        })
    }
}
