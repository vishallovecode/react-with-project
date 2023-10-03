import { useState } from "react";

// noprotect
const Item = (props) => {
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label">{props.name}</label>
      <div className="col-xs-8">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

const KeyExample = () => {
  const [state, setState] = useState({
    list: [
      { name: "Old Input1", id: 1444610101010 },
      { name: "Old Input2", id: 1444600000000 },
    ],
  });

  function addItem() {
    const id = +new Date(); // generating unique id
    setState({
      list: [{ name: "New Input" + id, id }, ...state.list],
    });
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={addItem}>
        <b>Add item</b> to the beginning of the list
      </button>
      <h3>
        Dangerous <code>key=index</code>
      </h3>
      <form className="form-horizontal">
        {state.list.map((todo, index) => (
          <Item {...todo} key={index} />
        ))}
      </form>
      <h3>
        Better <code>key=id</code>
      </h3>
      <form className="form-horizontal">
        {state.list.map((todo) => (
          <Item {...todo} key={todo.id} />
        ))}
      </form>
      <hr />.
    </div>
  );
};

export default KeyExample;
