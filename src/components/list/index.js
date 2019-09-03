import { h, Component } from 'preact';

class List extends Component {
    state = {
        input: ''
    }
    onChange = event => {
        this.setState({input: event.target.value})
    }
    render() {
        const { addTodo, list } = this.props;
        const { input } = this.state;
        return (
        <div>
            <form onSubmit={() => addTodo(input)} action="javascript:">
            <input type="text" onChange={this.onChange} />
            </form>
            {list.map(item => (
            <li>{item}</li>
            ))}
        </div>
        )
    }
}

export default List;
