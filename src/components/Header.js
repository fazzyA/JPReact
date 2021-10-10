import React, { Component } from 'react'

class Header extends Component {
    render() {
        this.state = {
            name: "faiza",
            degree: 1,
            skills: ['react', 'aws', 'mern']
        }
        return (
            <>
                <h2>Im a Header</h2>
                <h2>{this.state.name}</h2>
                <h2>{this.state.degree}</h2>
                {this.state.skills.map((item) => (
                    <>
                        <p>{item}</p>
                        <hr />
                    </>
                ))
                }
            </>
        )
    }
}
export default Header