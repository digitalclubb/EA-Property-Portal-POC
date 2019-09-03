import { h } from 'preact';
import style from './style';

const Filters = () => (
	<thead class={style.filters}>
        <th class={style.filters__item}>Address</th>
        <th class={style.filters__item}>Postcode</th>
		<th class={style.filters__item}>Bedrooms</th>
        <th class={style.filters__item}>Property Type</th>
        <th class={style.filters__item}>Price</th>
        <th class={style.filters__item}>Status</th>
	</thead>
);

export default Filters;
