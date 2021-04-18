import React ,{Component} from'react';
import {db} from '../../Firebase/Firebase';


class EditPost extends Component{
    state={
        author:'',
        title:'',
        content:''
    }
    componentDidMount(){
       // console.log(this.props.match.params.i)
      db.ref('Posts').get().then(response=>{
        let snapshots= response.val();
        let postResp={...this.state.EditValue};
        for (let i in snapshots){
            if(i === this.props.match.params.i){
                postResp=snapshots[i]
            }
        }
            this.setState({author:postResp.author,title:postResp.title,content:postResp.content})
    })
    

    }
    render(){

        let date= new Date();
        const submitHandler =(event)=>{
            event.preventDefault();
            
           // console.log(timeval)
            const data={
                title:this.state.title,
                author:this.state.author,
                content:this.state.content,
                date: date.getFullYear()+"-"+ date.getMonth()+1 +"-"+date.getDate(),
                time:date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"."+date.getMilliseconds()
                // time:new Date().getTime()
            }
                db.ref('Posts').child(this.props.match.params.i).update(data)
                window.location.href="/post"
            }
       
        return (<div className="container">
            <h1>Editing Post</h1>
            <hr/>
            <h3>Edit</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input  className="form-control"
                    type="text" name="title" id="Title"
                    value={this.state.title}
                    placeholder="Enter Title" required 
                    onChange={(event)=>{this.setState({title:event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Author">Author:</label>
                    <input  className="form-control"
                    type="text" name="author" id="Author"
                    value={this.state.author}
                    placeholder="Enter Author" required 
                    onChange={(event)=>{this.setState({author:event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Content:</label>
                    <textarea  className="form-control"
                    type="text" name="content" id="Content" rows="3"
                    value={this.state.content}
                    placeholder="Enter Content" required 
                    onChange={(event)=>{this.setState({content:event.target.value})}}/>
                </div>
            <div className="form-group">
                <button>Save</button>
            </div>
            </form>
            </div>)
    }
}

export default EditPost;