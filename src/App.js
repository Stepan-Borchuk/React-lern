import React, { Component } from 'react';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import Counter from 'components/counter';

import Dropdown from 'components/dropDown/dropDown';
import ToDoList from 'components/toDoList/toDoList';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Вивчити', completed: false },
      { id: 'id-2', text: 'зробити', completed: true },
      { id: 'id-3', text: 'здати', completed: false },
    ],
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <div>
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <span>Загальна кількість : {totalTodoCount}</span>
          <span> Загальна кількість закінчених: {completedTodosCount}</span>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteToDo} />
      </div>

      // <Counter initialValue={0} />

      // <Layout>

      //   <Notification text="Всё хорошо" type="success" />

      //   <Notification text="Всё плохо" type="error" />

      //   <Panel title="Последние новости">
      //     <p>
      //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
      //       obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
      //       explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
      //       aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
      //       reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
      //       fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
      //     </p>
      //   </Panel>

      //   <Panel text="Популярные работы">
      //     <PaintingList paintings={paintings} />
      //   </Panel>
      // </Layout>
    );
  }
}

export default App;
