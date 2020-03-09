import React, {Component} from "react"

class Operation extends Component {
    constructor() {
        super()
        this.state ={
            topText:"",
            bottomText:"",
        }
    }
    render() {
        return(
            <div className="App-box"><div/>
                <h1 className="font">OPERATION-COMPILER</h1>
                <form>
                    <div>
                    <textarea
                        class="form-control"
                        rows="3"cols="26" id="UserInput"
                        name="text"
                        placeholder="Input your code: "
                    >
                    </textarea>
                    </div>
                      
                    <button className="font"><b>PROCESS</b></button>
                    <div> 
                    <textarea
                        
                        rows="3"cols="26" 
                        name="text"
                        placeholder="Result : "
                    ></textarea> 
                    </div>
                </form>
            </div>
        )
    }
}

export default Operation