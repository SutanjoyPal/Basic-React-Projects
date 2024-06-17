import './Style.css'
import MenuList from './menu-list';


export default function TreeVeiw({menus = []}){
    return(
        <div className='tree-view-container'>
            <MenuList list={menus}/>
        </div>

    );
}