import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import MemoP from "./pages/MemoP";
import NewMemo from "./pages/NewMemo";
import NewPaper from "./pages/NewPaper";
import Paper from "./pages/Paper";
import Login from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
	const [isLogin, setIsLogin] = useState<boolean>(false);

	return (
		<div>
			{/* <Header title="" /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/memo" element={<MemoP />} />
					<Route path="/nm" element={<NewMemo />} />
					<Route path="/np" element={<NewPaper />} />
					<Route path="/paper/:paperid" element={<Paper />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
// eslint-disable-next-line
