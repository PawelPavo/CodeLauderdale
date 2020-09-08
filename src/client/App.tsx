import * as React from 'react';

const App: React.FC<IAppProps> = () => {
	const [name, setName] = React.useState<string>('')

	React.useEffect(() => {
		fetch('/api/hello')
			.then(response => response.json())
			.then(data => setName(data))
	}, [])

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Code {name}!</h1>
		</main>
	)
}

export interface IAppProps { }

export default App;
