const Message = (props) => {
    const messages = props.message;
    let message = '';
    const numberOfClicks = props.numberOfClicks;
    const totalPoints = props.totalPoints;

    if(numberOfClicks === 0){
        if(totalPoints === 0)
            message=messages.zero;    
        
        if(totalPoints === 1 || totalPoints === 2 )
            message = messages.twoAndLess;

        if(totalPoints >= 3)
            message = messages.moreThanTwo;
    }
    else if(numberOfClicks && messages.isClicked){
        message = messages.onClick;
    }
    else{
        message = messages.default;
    }
    return ( 
        <div className="message">
            <hr className="horizantal_Line_Buttom_Animation"></hr>
            <p>{message}</p>
        </div>
     );
}
 
export default Message;