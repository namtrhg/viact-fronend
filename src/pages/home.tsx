import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { ROUTES } from 'constants/routes'
import { useAuthContext } from 'context/auth'
import { useGetUsers } from 'hooks/users/useGetUsers'
import { useRouter } from 'next/router'

const Home = () => {
  const { push } = useRouter()
  const { logout, isLogin } = useAuthContext()

  const { users, isFirstLoading } = useGetUsers()

  const handleLogout = () => {
    logout()
    push(ROUTES.LOGIN)
  }

  if (isFirstLoading) return <div>Loading</div>
  if (!isLogin)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        You are not authorized!
      </div>
    )

  return (
    <div className="flex flex-col justify-center items-center h-screen w-1/2 mx-auto">
      <p>Users table</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home
