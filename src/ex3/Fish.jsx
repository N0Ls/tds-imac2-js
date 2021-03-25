const Fish = (props) => {
    const equalCharacter = "=";

    return(
    <p>
    {`><${equalCharacter.repeat(props.size)}°>`}
    </p>
    )
};

export default Fish;
