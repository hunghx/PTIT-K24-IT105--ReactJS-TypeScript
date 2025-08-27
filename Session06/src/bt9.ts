
/*
Lớp Comment:

Thuộc tính:
id: Mã bình luận (public).
userId: Mã người dùng tạo bình luận (public).
content: Nội dung bình luận (public).
replies: Mảng các phản hồi đối với bình luận (public).
Phương thức:
addReply(reply): Phương thức để thêm một phản hồi vào bình luận. Phản hồi sẽ được thêm vào mảng replies.
*/

class Comment {
    id: number;
    userId: number;
    content: string;
    replies: Comment[];
    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

}


/*Lớp Post:

Thuộc tính:
id: Mã bài đăng (public).
likes: Mảng các người dùng đã thích bài đăng (public).
comments: Mảng các bình luận trong bài đăng (public).
userId: Mã người dùng đăng bài (public).
content: Nội dung bài đăng (public).
Phương thức:
addLike(userId): Phương thức để thêm một người dùng vào mảng likes khi người dùng thích bài đăng.
addComment(comment): Phương thức để thêm một bình luận vào mảng comments.
*/
class Post {

    id: number;
    likes: User[];
    comments: Comment[];
    userId: number;
    content: string;
    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
}





/*
Lớp User:

Thuộc tính:
id: Mã người dùng (public).
posts: Mảng các bài đăng của người dùng (public).
followers: Mảng các người dùng mà người dùng này đang theo dõi (public).
Phương thức:
createPost(content): Phương thức để người dùng tạo bài đăng mới. Mỗi bài đăng sẽ được thêm vào mảng posts.
comment(postId, commentContent): Phương thức để người dùng bình luận vào một bài đăng. Bình luận sẽ được thêm vào mảng comments của bài đăng tương ứng.
follow(user): Phương thức để người dùng theo dõi một người dùng khác. Người dùng đó sẽ được thêm vào mảng followers.
likePost(postId): Phương thức để người dùng thích một bài đăng. Người dùng đó sẽ được thêm vào mảng likes của bài đăng tương ứng.
viewFeed(): Phương thức để người dùng xem các bài đăng của những người dùng mà họ đang theo dõi.
*/
class User {
    id: number;
    posts: Post[];
    followers: User[];
    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content: string) {
        let idPost = new Date().getTime();
        let newPost = new Post(idPost, this.id, content);
        this.posts.push(newPost);
    }
    comment(postId: number, commentContent: string) {
        // array method
        let post = this.posts.find(p=> p.id === postId);
        if(post){
            let newComment = new Comment(new Date().getTime(), this.id, commentContent);
            post.comments.push(newComment);
        }else{
            console.warn("Post not found");
            return;
        }
    }

    addFollower(user: User) {
        this.followers.push(user);
    }

    viewFeed() {
        let postsFollowers: Post[] = this.followers.flatMap(folow=> folow.posts);
        postsFollowers.forEach(post=>{
            console.log(`Post ID: ${post.id}, Content: ${post.content}`);
            console.log(`Likes: ${post.likes.length}`);
            console.log("Comments:");
            post.comments.forEach(comment=>{
                console.log(`- Comment ID: ${comment.id}, Content: ${comment.content}, Replies: ${comment.replies.length}`);
            })  
        });
    }

}





