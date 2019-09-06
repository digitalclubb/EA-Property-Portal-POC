import { h, Component } from 'preact';
import style from './style';

class Photos extends Component {
	render({ photos }) {
		return (
			<section id="photos" class="section photos">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Photos</h3>
					</legend>

					{ photos && photos.map( photo => (
						<img src={ photo.src } alt={ photo.alt } class={ style.photos__source } />
					))}
					
				</fieldset>
			</section>
		)
	}
}

export default Photos;
