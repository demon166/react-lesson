import {Form, useLoaderData, useNavigation, useSubmit} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";
import classes from './index.module.css';

const SearchProduct = () => {
    const { q } = useLoaderData() as { q: string };
    const submit = useSubmit();
    const navigation = useNavigation();
    const refForm = useRef(null);
    const [value, setValue] = useState(q);
    const debounceValue = useDebounce<string>(value);
    const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setValue(q);
    }, [q]);

    useEffect(() => {
        const isFirstSearch = q === '';
        submit(refForm.current, {
            replace: !isFirstSearch,
        });
    }, [debounceValue])
    return (
        <Form ref={refForm}>
            <div className={classes.search}>
                <input
                    type="search"
                    name="q"
                    value={value}
                    onChange={handleChangeSearch}
                    className="form-control"
                    placeholder="Поиск..."
                />
                {
                    navigation.state === 'loading' && (
                        <div className={classes.spinner}>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </div>
                    )
                }

            </div>
        </Form>
    );
};

export default SearchProduct;