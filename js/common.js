
/*var LIST = [ "ASda", "asdasd", "asds", "vodka"];*/

/*const Name = React.createClass({
  render: function() {
    return (
      <h1>To Do list</h1>
      );
  }
});*/

/*<ul>{this.props.list.map(function(listvalue, index){
              return  <li key={index}>{listvalue}</li>
          })}</ul>*/

/* main App component */


var TodoList = React.createClass({

/*   getInitialState: function() {
    return {visible : false};
  },

  className={ (this.state.visible ? 'none':'') }
*/

onClickUl: function(){
  console.log(111);
  console.log(this.state.visible);
  this.setState({visible: true});

},
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText} </li>;
    };
    return <ul onClick={this.onClickUl}>{this.props.items.map(createItem)}</ul>;
  }
});

/*const ToDoList = React.createClass({


  render: function(){
    return (
        <ul>{this.props.list.map(function(listvalue, index){
              return  <li key={index}>{listvalue}</li>
          })}</ul>

      );
  }

});*/

var TodoApp = React.createClass({
  
  getInitialState: function() {
    return {items: [], text: ''};
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    console.log(this.state.items);
    console.log(this.state.text);
    this.setState({items: nextItems, text: nextText});
  },


deleteElement:function(){

    console.log("remove");
     this.setState({items: []});
},

    render: function() {
    return (
      <div className="wrapper_blok">

        <h1>TODO</h1>

        <p>Score {this.state.items.length}</p>
        
      {/*Form*/}
      
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button className="btnAdd">Add</button>

        </form>
      <button className="btnAllDelit" onClick= {this.deleteElement}>All Delete </button>
      {/*LIST*/}
      
        <TodoList items={this.state.items} />

      </div>
    );

    }

});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);

