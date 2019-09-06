import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

class Property extends Component {

	state = {
		id: '',
		address: {
			line1: '',
			line2: '',
			city: '',
			postcode: ''
		},
		bedrooms: '',
		type: '',
		price: '',
		status: ''
	}

	componentWillMount() {
		this.setState ({
			id: this.props.item.id,
			address: this.props.item.address,
			bedrooms: this.props.item.bedrooms,
			type: this.props.item.type,
			price: this.formatPrice( this.props.item.price ),
			status: this.props.item.status
		});
	}

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
        return (
            <tr class={ style.property }>
                <td class={ style.property__field }><Link class={ style.property__link } href={`/edit/${ this.state.id }`}>{ this.state.address.line1 },{ this.state.address.line2 },{ this.state.address.city }</Link></td>
                <td class={ style.property__field }>{ this.state.address.postcode }</td>
                <td class={ style.property__field }>{ this.state.bedrooms }</td>
                <td class={ style.property__field }>{ this.state.type }</td>
                <td class={ style.property__field }>{ this.state.price }</td>
                <td class={ style.property__field }>{ this.state.status }</td>
            </tr>
        )
    }
};

export default Property;
