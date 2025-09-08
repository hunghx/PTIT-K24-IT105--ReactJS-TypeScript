import React, { Component, type ChangeEvent, type FormEvent } from 'react'
interface Student{
    name: string
    email:string
    phone: string
    dob : string
}

type StateTypes= {
    student: Student;
}
export default class Form extends Component<{}, StateTypes> {
    constructor(props: {}){
        super(props);
        this.state={
            student:{
                name:"Nguyen Van A",
                email:"",
                phone:"",
                dob:""
            }
        }
    }
    handleSubmitForm= (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault(); // loại bỏ hành vi submit của form
        // gửi dữ liệu lên server
    }
    handleChangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
        const {id, value} = e.target;
        this.setState((pre)=>({student: {...pre.student,[id]:value}}))
    }
  render() {
    console.log(this.state.student);
    
    const {name, email, phone, dob} = this.state.student;
    return (
      <form action={""} method='POST' onSubmit={this.handleSubmitForm}>
        <label htmlFor="">Tên sinh viên</label>
        <input type="text" value={name} id="name" onChange={this.handleChangeInput}/> <br />
        <label htmlFor="">Email sinh viên</label>
        <input type="email" value={email} id="email"  onChange={this.handleChangeInput}/> <br />
        <label htmlFor="">Số điện thoại sinh viên</label>
        <input type="text" value={phone} id="phone"  onChange={this.handleChangeInput}/> <br />
        <label htmlFor="">Ngày sinh</label>
        <input type="date" value={dob} id="dob"  onChange={this.handleChangeInput}/> <br />
        <button type='submit'>Gửi</button>
      </form>
    )
  }
}
