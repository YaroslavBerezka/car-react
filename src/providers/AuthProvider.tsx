import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from 'react'
import { TypeUser } from '../types/user.interface'

type TypeContext ={
	user: TypeUser,
	setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
	user: null,
	setUser: () => {}
})

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUser>({
		name: 'Yaroslav',
	})

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
