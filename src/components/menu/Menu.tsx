import { Link } from "../../../node_modules/react-router-dom/dist/index"
import "./menu.scss"
import {menu} from"../../data"
const Menu = () => {
  return (
      <div className="menu" >
        {menu.map((item)=>(

        
      <div className="item"key={item.id} >
        <span className="title">{item.title}</span>
        {item.listItems.map(listItem=>(


        
        
        <a href="/" className="listitem" key={listItem.id}>
          <span><img src={listItem.icon} alt="" /></span>
        <span className="listitemtitle">{listItem.title}</span>
        </a>
       ))}
        </div>
      ))}
        
    </div>
  );
};

export default Menu
