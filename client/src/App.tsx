import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MemoP from "./pages/MemoP";
import NewMemo from "./pages/NewMemo";
import NewPaper from "./pages/NewPaper";
import Paper from "./pages/Paper";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/memo" element={<MemoP />} />
				<Route path="/nm" element={<NewMemo />} />
				<Route path="/np" element={<NewPaper />} />
				<Route path="/paper/:paperid" element={<Paper />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
// eslint-disable-next-line
