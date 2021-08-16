import { Api } from '../services/Api'
import { useMemo } from 'react'

export function useApi() {
    return useMemo(() => new Api({ baseUrl: 'url' }), [])
}
