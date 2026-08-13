
import { charArray } from "../data/characters";

function CharacterNames(){
 return (<>
 
 <ul>
{charArray.map((name) => <li key={name}>{name}</li>)}
 </ul>
 
 </>);
}

export { CharacterNames};