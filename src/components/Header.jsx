import Button from "./Button";

const Header = ({ title, onAddButton, addButtonStatus }) => {

    return (
        <>
            <header className='header'>
                <h1>{title}</h1>
                <Button
                    color={addButtonStatus ? `blue` : `Green`}
                    text={addButtonStatus ? `Cancel` : `ADD`}
                    onClick={onAddButton}
                />
            </header>
        </>
    )

};

export default Header;