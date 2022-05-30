import React from 'react'

class PureComponent extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            cousrse: [
                {
                    id: 1,
                    name: 'JavaScript',
                    price: 1000
                },
                {
                    id: 2,
                    name: 'C#',
                    price: 2400
                },
                {
                    id: 3,
                    name: 'Python',
                    price: 3244
                }
            ]
        }
    }
    componentDidMount() {

        setInterval(() => {
            this.setState((oldState) => {
                return { cousrse: [...oldState.cousrse] }
            })
        }, 1000)
        console.log("componentDidUpdate")
    }

    render() {
        console.log('re-render')
        return (
            <>
                {this.state.cousrse.map(x => {
                    return (
                        <div key={x.id}>
                            <div>Khóa học: {x.name}</div>
                            <div>Giá: {x.price} </div>
                        </div>

                    )
                })}
            </>
        )
    }

}
export default PureComponent