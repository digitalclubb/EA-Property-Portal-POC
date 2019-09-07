import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

class Property extends Component {

	// Format simple number into UK GBP
	formatPrice( price ) {
		const formatter = new Intl.NumberFormat('en-GB', {
			style: 'currency',
			currency: 'GBP',
			minimumFractionDigits: 0
		})
		return formatter.format( price );
	}

    render() {
		const property = this.props.item;
        return (
            <tr class={ style.property }>
				<td class={ style.property__field }>{ property.id }</td>
                <td class={ style.property__field }>
					<Link class={ style.property__link } href={`/edit/${ property.id }`}>

						{/* Loop over address items and join with a comma (ignore postcode) */}
						{ Object.values( property.address ).slice( 0, -1 ).filter( item => {
							return item.length;
						}).join( ', ' ) }
					</Link>
				</td>
                <td class={ style.property__field }>{ property.address.postcode }</td>
                <td class={ style.property__field }>{ property.bedrooms }</td>
                <td class={ style.property__field }>{ property.type }</td>
                <td class={ style.property__field }>{ this.formatPrice( property.price ) }</td>
                <td class={ style.property__field }>{ property.status }</td>
            </tr>
        )
    }
};

export default Property;
