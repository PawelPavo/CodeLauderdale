import * as React from 'react';

const Home: React.FC<IHomeProps> = (props) => {
    const [name, setName] = React.useState<string>('')

    React.useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setName(data))
    }, [])
    return (
        <>
            <main className="container my-5">
                <div className="text-primary text-center display-2">Code {name}</div>
            </main>
            <h1 className="text-center font-italic font-weight-light">Hello. Welcome to the {`{<h1>Big</h1}`} blog of small things.</h1>
            {/* <h1>
            Hello.
        </h1>
        <p>Welcome to the<h1><></p> */}
        </>
    )
}

export interface IHomeProps { }

export default Home;