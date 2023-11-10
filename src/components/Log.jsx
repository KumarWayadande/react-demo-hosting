
const Log = ({currentPlayerName, turns}) => {
    return ( <ol id="log">
        {turns.map(({square, player, playerName}, index) => {
            return <li key={`${square.row}${square.col}`}>
                {playerName} selected [{square.row}][{square.col}]
            </li>
        })}
    </ol>);
}

export default Log;