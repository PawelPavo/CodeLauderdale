import * as React from 'react';
import { useState, useRef } from 'react';
import { useOnClickOutside } from './utils/hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/global'
import { theme } from './utils/theme';
import { Burger, Menu } from './components';
import Blogs from './views/Blogs';
import Home from './views/Home';

const App: React.FC<IAppProps> = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyles />
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				<Switch>
					<Route exact path="/">
						<div ref={node}>
							<Home />
						</div>
					</Route>
					<Route exact path="/blogs">
						<div ref={node}>
							<Blogs />
						</div>
					</Route>
				</Switch>

			</BrowserRouter>
		</ThemeProvider>
	)
}

export interface IAppProps { }

export default App;
