import { h } from 'preact';
import style from './style';

import Search from '../../components/search';
import Filters from '../../components/filters';
import Card from '../../components/property';

const List = () => (
    <div>
        <Search />
        <table class={style.list}>
            <Filters />
            <tbody class="list">
                <Card />
            </tbody>
        </table>
    </div>
);

export default List;
