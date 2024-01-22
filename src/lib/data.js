

const users=[
    {
        id:1,
        name:"Paccy"
    },
    {
        id:2,
        name:"Elite"
    }
]
const posts=[
    {
        id:1,
        user_id:1,
        title:"Hello",
        body:"Hello World"
    },
    {
        id:2,
        user_id:1,
        title:"Hello",
        body:"Hello World"
    }
]
export const getUsers =()=>{
return users;
}

export const getPosts=()=>{
return posts;
}
export const getPost=()=>{
    const post =posts.find((post)=>post.user_id===parseInt(id));
    return post;
    }
    // mongodbpassword

    // xsGuyQBC7bYAoec0


    // mongodb+srv://paccy:<password>@cluster0.wwnl5vs.mongodb.net/?retryWrites=true&w=majority