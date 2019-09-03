import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

class Property extends Component {
    render({ item }) {
        return (
            <tr>
                <td><Link href={`/edit/${item.id}`}>{item.address.line1},{item.address.line2},{item.address.city}</Link></td>
                <td>{item.address.postcode}</td>
                <td>{item.bedrooms}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.id}</td>
            </tr>
        )
    }
};

export default Property;
