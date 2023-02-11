import React from "react";


   class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value:"Напишите эссе о програмироний "};


      this.handleChange =this.handleChange.bind(this)
      this.handleSubmit =this.handleSubmit.bind(this)
 
   }

   handleChange(event) {
     this.setState({value: event.target.value });
  }


  handleSubmit(event) {
    alert("ОТПРАВЛЕННОЕ имя:" +this.state.value);

    event.preventDefault();
    console.log(this.state.value);

  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
              эссе;
             <textarea value={this.state.value} onChange={this.handleChange}>

             </textarea>
            
            </label>
            <input type="submit" value="Отправить "/>
        </form>
     
    )
      }


  }

 export default EssayForm;                                                                            