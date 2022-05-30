
import React from 'react';
import './App.css';
const course = [
    {
        id: 1,
        name: 'HTML,CSSS'
    },
    {
        id: 2,
        name: 'React JS'
    },
    {
        id: 3,
        name: 'CSharp'
    }
]
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: ""
        }
    }
    handleSubmit = () => {
        var name = this.state.email;
        var email = this.state.name;
        console.log({ name, email })
    }
    render() {
        return (
            <>
                <h4>Hello</h4>
                <input type="text" placeholder='Nhập tên' onChange={e => this.setState({
                    name: e.target.value
                })} value={this.state.name} />

                <input type="email" placeholder='Nhập email' onChange={event => this.setState({
                    email: event.target.value
                })} value={this.state.email} />
                <p><b>{this.state.name}</b></p>
                <p><b>{this.state.email}</b></p>

                <button onClick={this.handleSubmit}> Register </button>
            </>
        );
    }
}
export default Header

