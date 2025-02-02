// import Leftbar from "./components/leftbar/Leftbar";
// import Navbar from "./components/navbar/Navbar";
// import Rightbar from "./components/rightbar/Rightbar";
// import Update from "./components/update/Update";
import "./app.css";
import AddPostForm from "./features/posts/AddPostForm";
// import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostList";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div> */}
      
      
      {/* <Counter /> */}

      <AddPostForm/>
      <PostsList/>

    </>
  );
};

export default App;
