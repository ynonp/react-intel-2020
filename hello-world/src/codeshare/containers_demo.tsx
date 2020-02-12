import React, {ReactNode, useState} from "react";

function Layout(props: { children: React.ReactNode}) {
    return (
        <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/home">About</a>
            </nav>
            {props.children}
            <footer>
                <p>Join Our mailing list...</p>
            </footer>
        </div>
    )
}

function HomePage() {
    return (
        <Layout>
            <p>Home Page</p>
        </Layout>
    )
}

export default function AboutPage() {
    return (
        <Layout>
            <p>About Page</p>
        </Layout>
    )
}



function ImageSlider(props: {children: React.ReactNode}) {
    const [index, setIndex] = useState(0);
    const { children } = props;
    const totalItems = React.Children.count(children);

    function prev() {
        setIndex(v => v - 1);
    }

    function next() {
        setIndex(v => v + 1);
    }

    if (totalItems === 0) {
        return <p>No Images...</p>
    }

    const childrenArray = React.Children.toArray(children);

    return (
        <div className="image-slider">
            <p>{index + 1} / {totalItems}
                <button onClick={prev} disabled={index <= 0}>Prev</button>
                <button onClick={next} disabled={index >= totalItems - 1}>Next</button>
            </p>
            <div>
                {childrenArray[index]}
            </div>
        </div>
    )
}