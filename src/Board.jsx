import Square from "./square";

export default function Board({square, partida}){
      
        return (
          <div>
            <div className="board-row">
              {square.slice(0, 3).map((value, index) => (
                <Square
                  key={index}
                  value={value}
                  onClick={() => partida(index)}
                />
              ))}
            </div>
            <div className="board-row">
              {square.slice(3, 6).map((value, index) => (
                <Square
                  key={index + 3}
                  value={value}
                  onClick={() => partida(index + 3)}
                />
              ))}
            </div>
            <div className="board-row">
              {square.slice(6, 9).map((value, index) => (
                <Square
                  key={index + 6}
                  value={value}
                  onClick={() => partida(index + 6)}
                />
              ))}
            </div>
          </div>
        );
      }


