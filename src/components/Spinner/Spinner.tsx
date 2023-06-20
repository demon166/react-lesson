import classes from "./index.module.css";

const Spinner = () => {
    return (
        <div className={classes.mySpinner}>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;