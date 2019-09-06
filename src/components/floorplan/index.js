import { h } from 'preact';
import style from './style';

const Floorplan = ({ floorplan }) => {
	return (
		<section id="floorplan" class="section floorplan">
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Floorplan</h3>
				</legend>
				<img class={style.floorplan__image} src={ floorplan } />
			</fieldset>
		</section>
	)
}

export default Floorplan;
