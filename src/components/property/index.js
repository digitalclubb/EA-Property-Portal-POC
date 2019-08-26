import { h } from 'preact';
import { Link } from 'preact-router/match';

const Property = () => (
	<tr>
        <td><Link href="/edit/1234">751 Park Road, South West London, SW78 1WE</Link></td>
        <td>4</td>
        <td>House</td>
        <td>£950,000</td>
        <td>Draft</td>
    </tr>
);

export default Property;
