import { h } from 'preact';
import { connect } from 'unistore/preact'
import actions from '../../actions'
import style from './style';

import Search from '../../components/search';
import Filters from '../../components/filters';
import Property from '../../components/property';

const List = connect( 'list', actions )( ({ addTodo, list }) => (
    <div>
        <Search />
        <table class={style.list}>
            <Filters />
            <tbody class="list">
                { list.map( item => (
                    <Property item={ item } />
                ))}
            </tbody>
        </table>
    </div> 
));

export default List;
