import { PostService } from "@/services/PostApi"

export const modulePost = {
    state: () => ({
        posts: [],
    }),
    actions : {
        // GET_POSTS
      async GET_POSTS(context){
            const response = await PostService.getPosts();
            const posts = response.data.slice(0,3);
            context.commit("SET_POST",posts);
        },
        async CREATE_POST(context,payload){
            const { data } = await PostService.createPost(payload);
            context.commit("ADD_POST",data);
        },
        async EDIT_POST(context,payload){
            const { data } = await PostService.updatePost(payload);
            context.commit("UPDATE_POST", data);
        },
        async DELETE_POST(context, id){
            await PostService.removePost(id);
            context.commit("REMOVE_POST",id);
        },
    },
    mutations:{
        SET_POST(state,payload){
            state.posts = payload;
        },
        ADD_POST(state,payload){
            state.posts.unshift(payload);
        }, 
        REMEVE_POST(state,id){
            state.posts = state.posts.filter((p) => p.id !== id);
        },
        UPDATE_POST(state,data){
            const postIndex = state.posts.findIndex(
                (p) => p.id === parseInt(data.id)
            );
            state.posts[postIndex] = data;
        },
    },
    getters: {
        getAllPosts(state){
           return state.posts
        }
    }
}