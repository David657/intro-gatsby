import React from "react"

//Adding the "Link" component from the "gatsby" libarary will allow you 
//to link internal pages
//uses react-router underneath
import { Link } from "gatsby"

//Adding the "Layout" component will allow you to keep consistent layouts throughout 
//your app
//To make adjustments to the "Layout" component, go to the layout.js file
import Layout from "../components/layout"
import SEO from "../components/layout"

//Adding a component inside the 'pages' directory will automaically create
//that page for you with the path "/bio"
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <img src="https://source.unsplash.com/random/400x200" alt ="" />  
            <h1>Hi, My name is David.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam accusantium perferendis impedit quas qui voluptates, nostrum minima iusto praesentium quia dolor aperiam repellat, explicabo necessitatibus facilis quos fugit dolore ullam dolorem delectus tempore repudiandae quae quaerat? Sequi iste, beatae mollitia provident veniam ducimus tempora nobis earum alias voluptatem, tenetur perferendis quo in animi quam molestias ex quia voluptatibus deleniti vitae dolores dolorem similique, error dicta? Libero quibusdam qui impedit molestias vero fugit nostrum magnam reprehenderit. Dolorum ipsam iure velit enim aspernatur molestiae, ex eaque fuga repudiandae sit perferendis necessitatibus cum pariatur iusto minima. Temporibus quo quidem, tenetur eos porro deserunt!
             </p>
             <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio