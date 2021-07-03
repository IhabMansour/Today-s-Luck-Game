const ButtonsOfLuck = (props) => {
    const Lucks = props.luck;
    return ( 
        Object.keys(Lucks).map( (luck) => 
                <button key={luck} className={`buttonsOfLuck ${Lucks[luck].color}`} onClick={(e) => props.handleClickButton(e, Lucks[luck], luck)}>
                    {Lucks[luck].id}
                </button>
        )
    );
}
 
export default ButtonsOfLuck;