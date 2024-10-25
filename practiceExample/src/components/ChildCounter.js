const ChildCounter = ({ y, handleY }) => {
    return (
        <>
            <button onClick={() => handleY(y + 10)}>Y+</button>
            <button onClick={() => handleY(y - 10)}>Y-</button>
        </>
    );
}

export default ChildCounter;