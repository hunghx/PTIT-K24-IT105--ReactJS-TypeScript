import React, { Component } from 'react'
import Button from './components/Button';
type StateType = {
    time: number,
    message: string
    status: number //(1,2,3)
}

let id:number ;
export default class Timer extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props)
        this.state = {
            time: 0,
            message: "",
            status: 1
        }
    }
    formatTime = () => {
        const {time: seconds} = this.state;
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const paddedHrs = String(hrs).padStart(2, '0');
        const paddedMins = String(mins).padStart(2, '0');
        const paddedSecs = String(secs).padStart(2, '0');

        return `${paddedHrs}:${paddedMins}:${paddedSecs}`;

    }

    handleStartBtn=()=>{
        this.setState({...this.state,status:2, message:"Đồng hồ đã bắt đầu"})
        id = setInterval(
            ()=>{
                this.setState((pre)=>({...pre,time: pre.time+1}))
            }
            ,1000)
    }
    handleStopBtn=()=>{

        if(id){
                clearInterval(id);
        }
        this.setState({...this.state,status:3, message:"Đồng hồ đã tạm dừng"})
    }


    render() {
        let isStart = this.state.status == 1;
        let isPause = this.state.status == 2;
        return (
            <>
                <div className="timer-container">
                    <div className="timer-header">
                        <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
                    </div>
                    <div className="mode-selector">
                        <button className="mode-btn active" data-mode="stopwatch">Bấm Giờ</button>
                    </div>
                    <div className="time-display" id="timeDisplay">{this.formatTime()}</div>
                    <div className="progress-bar">
                        <div className="progress-fill" id="progressFill" />
                    </div>
                    <div className="controls">
                        <button className={`control-btn ${isStart?'start-btn':'pause-btn'}`} id="startBtn" onClick={isStart?this.handleStartBtn:(isPause?this.handleStopBtn:this.handleStartBtn)}>{isStart?"Bắt Đầu":isPause?"Tạm dừng":"Tiếp tục"}</button>
                        <button className="control-btn pause-btn" id="pauseBtn" style={{ display: 'none' }}>
                            Tạm Dừng
                        </button>
                        {/* <button className="control-btn reset-btn" id="resetBtn" onClick={()=>{  clearInterval(id);this.setState({...this.state, time:0, status:1});} }>Đặt Lại</button> */}
                        <Button id='resetBtn'className='control-btn reset-btn' onClick={()=>{  clearInterval(id);this.setState({...this.state, time:0, status:1});} }>Reset</Button>
                    </div>
                    <div className="status-message show" id="statusMessage" >
                        {this.state.message}
                    </div>
                </div>

            </>
        )
    }
}
