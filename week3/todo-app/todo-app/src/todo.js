//event handlers
//pass the two  functions as props addtodos and deletetodos

function todo ({todo}) {
    return <div>
        {todo._id} {todo.text}
    </div>
}

export default todo;