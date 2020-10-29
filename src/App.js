import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
//keys
import { AUTH_COOKIE } from './config/keys';
//styles
import CssReset from './global_styles/cssReset';
//layouts
import LoginPage from './components/layouts/login_page/LoginPage';
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { loginAction, logoutDoneAction } from './actions/userDataActions';

const App = () => {
	const authCookie = Cookies.get(AUTH_COOKIE);
	const [loader, setLoader] = useState(!!authCookie);
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => state.userDataReducer);

	useEffect(() => {
		if (!!authCookie) {
			// validate cookie for security reasons, since no endpoint provided for that using login endpoint 
			// assuming it would yield same output if using cookie as a body
			// using set timeout to mock slow internet connection
			setTimeout(() => {
				dispatch(loginAction({ authCookie }));
			}, 2000);
		}

	}, []);

	useEffect(() => {
		if (isLoggedIn != null)
			setLoader(false);
	}, [isLoggedIn]);

	const logout = () => {
		Cookies.remove(AUTH_COOKIE);
		dispatch(logoutDoneAction());
	}

	return (
		<>
			<CssReset />
			{isLoggedIn ?
				<div>
					<p>User Is Logged in</p>
					<button onClick={logout}>Logout</button>
				</div>
				:
				!loader ?
					<LoginPage />
					:
					<div>
						http request to validate cookie sent and waiting for response now, development message
						for demonstration purposes only
						...(in real app would show a designed spinner here)
					</div>

			}
		</>
	)
}

export default App;
