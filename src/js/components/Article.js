import React from 'react'

export default class Article extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quidem culpa dolores accusamus distinctio adipisci et voluptatum unde ipsa fuga maxime possimus in quis cum, nesciunt! Incidunt labore, possimus optio?</p>
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        )
    }
}