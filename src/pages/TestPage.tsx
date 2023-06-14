import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const TestPage = () => {
    const [ value, setValue ] = useState("");
    const [ posts, setPosts ] = useState();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }
    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
    }

    useEffect(() => {
        getPosts();
        const handleClick = () => {
            alert('Нажата кнопка');
        };
        buttonRef.current?.addEventListener("click", handleClick)
        return () => {
            buttonRef.current?.removeEventListener("click", handleClick);
        }
    }, [])

    return (
        <div className="row">
            <div className="col-8 pt-3">
                <Link to="..">Ссылка</Link>
            </div>
        </div>
    );
};

export default TestPage;