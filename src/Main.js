/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import music1 from './Source/audio/gbqq.mp3'
import music2 from './Source/audio/kqzdstyhj.mp3'
import  pic from  './Source/image/pic1.jpg'

class Main extends Component{
    state={
        date:{},
    }

    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2018,10,28)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),7200)
    }

    handleNext(){

    }

    print = ()=>{
    $.fn.autotype1 = function() {
        var _this=$(this);
        var str=_this.html();
        // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
        str=str.replace(/(\s){2,}/g,"$1");
        var index = 0;
        $(this).html('');
        var timer = function fn() {
            var args=arguments;
            var current = str.slice(index, index+1);
            // html标签完整输出,如：<p>
            if (current == '<'){
                index = str.indexOf('>', index) + 1;
            }
            else{
                index++;
            }
            //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
            if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
            }else{
                _this.html(str.substring(0, index));
                clearTimeout(timer);
            };
            setTimeout(fn,150)
        };
        // 延迟1s开始
        setTimeout(timer,1000);
    };
    $("#autotype1").autotype1();
        $.fn.autotype2 = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,1)
            };
            // 延迟1s开始
            setTimeout(timer,8500);
        };
        $("#autotype2").autotype2();
}
    time =(year,month,day)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>月华和十二已经认识了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft" style={{height:'90%'}}>
            <div className="date">{date()}</div>
                <div id="autotype1">
                    <h1 style={{fontWeight:900}}>(｡･∀･)ﾉﾞ嗨,十二！</h1>
                    <p >这封信开始之前，先放首歌当背景音乐吧！Music!</p>
                </div>
            <div id="autotype2">
                <p>今天是我们认识五个月的日子，从2018年10月28日到现在，我们一起经历了好多好多的事情，
                    有欢笑也有争吵，也曾因为一些事情闹过不愉快，但是都走过来了。</p>
                <p>给你看看我珍藏到现在的表情吧！</p> <img src={pic} width="20%" height="20%" onError="imgerror(this)"></img>
                <p>还记得第一次见到你，是在微信视频里面，你戴着一个超级大的帽子，还有一副超级大的墨镜，哈哈哈虽然之后就没看你再戴过了，但是还是很怀念！</p>
                <p>后来见面之后，印象最深的还是那一套搭配以及邢台各种好吃的东西，认识你之前，还真的不知道一顿没有肉的饭也可以那么好吃(炸鸡腿除外)~</p>
                <p>不知道你什么时候还能再来北京，我还有好多地方没带你去呢。</p>
                <p>好了以下省略一千字，暂时想不到了...</p>
                <p>...</p>
                <p>...</p>
                <p>我不善于文字表达，写这一个网页和说那么多话也就想认识你真好，仅此。</p>
                <p>很期待以后的我们呢，希望你或我都不要在未来的某一天消失。</p>
                <p>最后祝十二永远快快乐乐开开心心！</p>
                <div style={{textAlign:'right'}}>
                    <p>最帅的♥刘月华</p>
                    <p>2019年3月28日</p>
                </div>
            </div>
                <audio id="audio" src={music2}></audio>
            </div>

        )
    }
}
export default Main