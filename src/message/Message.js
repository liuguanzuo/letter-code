import React, { Component, Fragment } from 'react';
import MessageItem from './MessageItem';
import 'antd/dist/antd.css';
import axios from 'axios';
import './mesage.css';
import  {Input,Button} from 'antd'
class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    componentDidMount() {
        /*axios.get('/api/todolist')
            .then(()=>{alert('succ')})
            .catch(()=>{alert('error')})*/
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <MessageItem
                    key={item}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }

    render() {
        return (
            <div className="MessageBox">
                <div className={'insertArea'}>
                    <label htmlFor="insertArea">输入内容：</label>
                    <Input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        style={{margin:'15px'}}
                    />
                    <Button onClick={this.handleBtnClick}>提交</Button>
                </div>
                <ul className={'inputItem'}>
                    {this.getTodoItem()}
                </ul>
        </div>
        )
    }
}

export default Message;