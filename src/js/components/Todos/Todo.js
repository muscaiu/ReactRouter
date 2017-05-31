import React from 'react'

export default class Todo extends React.Component {
    constructor(props) {
        super()
    }

    componentWillMount() {
        console.log('Todo componentWillMount: ', this.props);
    }
    componentDidMount() {
        console.log('Todo componentDidMount', this.props);
    }

    render() {
        const { complete, edit, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716"

        if (edit) {
            return (
                <li>
                    <input value={text} focus="focused" />
                </li>
            );
        }

        return (
            <li>
                <span>{text}</span>
                &nbsp;
                <span>{icon}</span>
            </li>
        )
    }
}