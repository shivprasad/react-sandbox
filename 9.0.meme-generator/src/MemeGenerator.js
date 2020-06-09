import React from "react"

class MemeGenerator extends React.Component {

    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            url : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs :[]
        }
        this.generate = this.generate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            this.setState({
                allMemeImgs : resp.data.memes
            })
        })
    }

    generate(event){
        event.preventDefault()
        this.setState((prevState) =>{
            return {
                url: prevState.allMemeImgs[Math.floor(Math.random() * prevState.allMemeImgs.length)].url
            }
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div>
                <form className="meme-form">
                    <input placeholder="Top Text" type="text" name="topText" value={this.state.topText} onChange={this.handleChange}/> 
                    <input placeholder="Bottom Text" type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/> 
                    <button onClick={this.generate}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.url}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default MemeGenerator