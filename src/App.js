import React, {Component} from 'react';
import './App.css';
import hearturl from './Source/icon/heart.png'
import letterurl from './Source/icon/letter.jpg'
import Letter from './letter/Letter'
import photourl from './Source/icon/photo.jpg'
import messageurl from './Source/icon/message.png'
import Message from './message/Message'
class App extends Component {
    state = {
        showLetter: false, //打开信
        letter: 'stopletter',//移动鼠标动画
        letterWord: 'none',//移动鼠标字显示
        letterState: 'block',//点开信隐藏图标

        showPhoto: false, //打开信
        photo: 'stopphoto',//移动鼠标动画
        photoWord: 'none',//移动鼠标字显示
        photoState: 'block',//点开信隐藏图标

        showMessage: false, //打开信
        message: 'stopmessage',//移动鼠标动画
        messageWord: 'none',//移动鼠标字显示
        messageState: 'block'//点开信隐藏图标
    };

    focusLetter() {
        this.setState({letter: 'letter', letterWord: 'block'})
    }

    leaveLetter() {
        this.setState({letter: 'stopletter', letterWord: 'none'})
    }

    focusPhoto() {
        this.setState({photo: 'photo', photoWord: 'block'})
    }

    leavePhoto() {
        this.setState({photo: 'stopphoto', photoWord: 'none'})
    }

    focusMessage() {
        this.setState({message: 'message', messageWord: 'block'})
    }

    leaveMessage() {
        this.setState({message: 'stopmessage', messageWord: 'none'})
    }

    render() {
        debugger
        const toLetter = () => {
            if (this.state.showLetter) {
                return <Letter/>

            }
        }

        const toPhoto = () => {
            if (this.state.showPhoto) {
                window.location.href = "http://photo.liuyuehua.xyz"
            }
        }

        const toMessage = () => {
            if (this.state.showMessage) {
                return <Message/>
            }
        }
        return (
            <div>
                <div style={{display: this.state.letterState}}>
                    <img
                        className={this.state.letter}
                        src={letterurl}
                        onMouseOver={this.focusLetter.bind(this)}
                        onMouseLeave={this.leaveLetter.bind(this)}
                        onClick={() => {
                            this.setState({showLetter: true, letterState: 'none', photoState: 'none', messageState: 'none'})
                        }}/>
                    <div className={'focusLetter'} style={{display: this.state.letterWord}}>你收到一封信啦</div>
                </div>
                {toLetter()}

                <div>
                    <div style={{display: this.state.photoState}}>
                        <img
                            className={this.state.photo}
                            src={photourl}
                            onMouseOver={this.focusPhoto.bind(this)}
                            onMouseLeave={this.leavePhoto.bind(this)}
                            onClick={() => {
                                this.setState({showPhoto: true, letterState: 'none', photoState: 'none', messageState: 'none'})
                            }}/>
                        <div className={'focusPhoto'} style={{display: this.state.photoWord}}>瞬间的永恒诶</div>
                    </div>
                    {toPhoto()}
                </div>

                <div>
                    <div style={{display: this.state.messageState}}>
                        <img
                            className={this.state.message}
                            src={messageurl}
                            onMouseOver={this.focusMessage.bind(this)}
                            onMouseLeave={this.leaveMessage.bind(this)}
                            onClick={() => {
                                this.setState({showMessage: true, letterState: 'none', photoState: 'none', messageState: 'none'})
                            }}/>
                        <div className={'focusMessage'} style={{display: this.state.messageWord}}>给十二的留言板呀</div>
                    </div>
                    {toMessage()}
                </div>
            </div>
        );
    }
}

export default App;
