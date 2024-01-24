import { addPost, deletePost } from "@/lib/action"

const ServerActionTestPage = () => {


  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="id" name="id"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Create Post</button>
      </form>
<div>
    <form action={deletePost}>
        <input type="text" name="id" placeholder="postId"/>
        <button>Delete</button>
    </form>
</div>
    
    </div>
  )
}

export default ServerActionTestPage