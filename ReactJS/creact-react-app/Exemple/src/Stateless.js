import React from 'react'


class Stateless extends React.Component {

    constructor() {
        super()
        this.state = {
            book: [
                'Đắc nhân tâm',
                'Người trong ao hồ',
                'Làm giàu không khó'
            ]
        }
    }
    render() {
        return (
            <BookList book={this.state.book}></BookList>
        )
    }
}

const BookList = ({ book }) => {

    return (
        <ul>
            {book.map((b, index) => {
                return <li key={index}>{b}</li>
            })}
        </ul>
    )
}

export default Stateless