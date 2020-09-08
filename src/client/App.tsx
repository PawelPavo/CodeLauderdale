import * as React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/global'
import { theme } from './utils/theme';
import { Burger, Menu } from './components';

const App: React.FC<IAppProps> = () => {
	const [name, setName] = React.useState<string>('')
	const [open, setOpen] = React.useState<boolean>(false)

	React.useEffect(() => {
		fetch('/api/hello')
			.then(response => response.json())
			.then(data => setName(data))
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<main className="container my-5">
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
					<div className="text-primary text-center display-2">Code {name}</div>
				</main>
				<h1 className="text-center font-italic font-weight-light" >Hello. Welcome to the big blog of small things.</h1>
			</>
		</ThemeProvider>
	)
}

export interface IAppProps { }

export default App;
