import React from 'react'
import { IndexLink, Link } from 'react-router'

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true
        }
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed
        this.setState({ collapsed })
    }

    render() {
        const { location } = this.props
        const { collapsed } = this.state
        const featuredClass = location.pathname === "/" ? "active" : "" //basic js location.pathname
        const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "" //if starts with
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : ""
        const navClass = collapsed ? "collapse" : ""

        return (
            <div>
                {/*class works because of plugins: ['react-html-attrs', in webpack.config*/}
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class={featuredClass}>
                                    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
                                </li>
                                <li class={archivesClass}>
                                    <IndexLink to="/archives" onClick={this.toggleCollapse.bind(this)}>Archives</IndexLink>
                                </li>
                                <li class={settingsClass}>
                                    <IndexLink to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</IndexLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}