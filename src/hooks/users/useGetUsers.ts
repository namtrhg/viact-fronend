import { useFetchWithCache } from 'hooks/useFetchWithCache'
import { client, GET_PATHS } from 'libs/api'

export const useGetUsers = () => {
  const { data, isFirstLoading, mutate } = useFetchWithCache(
    GET_PATHS.getUsers,
    () => client.getUsers(),
  )

  return { users: data, isFirstLoading, refresh: mutate }
}
